"use client";
import React, { useState } from "react";
import Heading from "../../components/HTMLComponents/Heading";
import GradientFAQAccordion from "../../components/Common/GradientFAQAccordion";
import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";
import "../../styles/ServiceLightTheme.css";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Star,
  DollarSign,
  Clock,
  AlertTriangle,
  Shield,
} from "lucide-react";

const SOURCE_SYSTEMS = [
  { id: "teradata", label: "Teradata", complexity: 3, costMultiplier: 1.4 },
  { id: "oracle", label: "Oracle", complexity: 3, costMultiplier: 1.4 },
  { id: "sql-server", label: "SQL Server", complexity: 2, costMultiplier: 1.0 },
  { id: "hadoop", label: "Hadoop / HDFS", complexity: 3, costMultiplier: 1.3 },
  {
    id: "redshift",
    label: "Amazon Redshift",
    complexity: 1,
    costMultiplier: 0.8,
  },
  {
    id: "bigquery",
    label: "Google BigQuery",
    complexity: 1,
    costMultiplier: 0.8,
  },
  {
    id: "mysql-postgres",
    label: "MySQL / PostgreSQL",
    complexity: 1,
    costMultiplier: 0.7,
  },
  {
    id: "on-prem",
    label: "On-premise (other)",
    complexity: 3,
    costMultiplier: 1.5,
  },
];

const DATA_VOLUMES = [
  { id: "small", label: "< 1 TB", factor: 0.6, baseCost: 15000 },
  { id: "medium", label: "1 – 10 TB", factor: 1.0, baseCost: 35000 },
  { id: "large", label: "10 – 100 TB", factor: 1.6, baseCost: 80000 },
  { id: "massive", label: "100+ TB", factor: 2.2, baseCost: 180000 },
];

const SOURCE_COUNTS = [
  { id: "1", label: "1 system", factor: 1.0 },
  { id: "2-3", label: "2–3 systems", factor: 1.4 },
  { id: "4-6", label: "4–6 systems", factor: 1.8 },
  { id: "7+", label: "7+ systems", factor: 2.3 },
];

const TRANSFORMATION_LEVELS = [
  {
    id: "minimal",
    label: "Minimal",
    desc: "Mostly 1:1 schema mapping",
    factor: 0.8,
  },
  {
    id: "moderate",
    label: "Moderate",
    desc: "Some schema changes and business logic",
    factor: 1.0,
  },
  {
    id: "significant",
    label: "Significant",
    desc: "Major restructuring and transformations",
    factor: 1.4,
  },
  {
    id: "complete",
    label: "Complete Redesign",
    desc: "New data model and architecture",
    factor: 1.8,
  },
];

const DOWNTIME_TOLERANCE = [
  {
    id: "flexible",
    label: "Flexible",
    desc: "Days of downtime acceptable",
    factor: 0.8,
  },
  { id: "limited", label: "Limited", desc: "Hours of downtime", factor: 1.0 },
  { id: "minimal", label: "Minimal", desc: "Minutes of downtime", factor: 1.3 },
  {
    id: "zero",
    label: "Zero downtime",
    desc: "No downtime allowed",
    factor: 1.6,
  },
];

const TARGET_PLATFORMS = [
  { id: "snowflake", label: "Snowflake" },
  { id: "databricks", label: "Databricks" },
  { id: "cloud-db", label: "Cloud Database (RDS, Cloud SQL)" },
  { id: "data-lake", label: "Data Lake (S3, ADLS, GCS)" },
  { id: "undecided", label: "Undecided" },
];

const FAQ_DATA = [
  {
    q: "How long does data migration take?",
    a: "The timeline depends on the amount of data, the number of systems involved, migration complexity, and testing requirements. Smaller migrations may take a few weeks, while enterprise projects can span several months.",
  },
  {
    q: "What is the difference between data migration and database migration?",
    a: "Data migration refers to moving data between systems, applications, or platforms. Database migration focuses specifically on transferring databases, including their schema, data, and supporting objects, from one database environment to another.",
  },
  {
    q: "Why is data migration needed?",
    a: "Organizations migrate data when modernizing legacy systems, moving to the cloud, consolidating applications, improving performance, or supporting new business initiatives. A successful migration ensures data remains accurate, secure, and accessible.",
  },
  {
    q: "Why is data migration important?",
    a: "Data migration enables businesses to adopt modern technologies, improve operational efficiency, and make better use of their data. Proper planning also helps reduce downtime, minimize business disruption, and protect data integrity throughout the migration process.",
  },
  {
    q: "Does cloud data transfer affect migration costs?",
    a: "Yes. For cloud migration projects, data transfer cost may contribute to the overall budget depending on the cloud provider, the amount of data being moved, and network usage. It should be considered alongside migration effort, infrastructure, and testing costs.",
  },
];

const DataMigrationCostCalculator = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    sourceSystem: "",
    dataVolume: "",
    sourceCount: "",
    transformationLevel: "",
    downtimeTolerance: "",
    targetPlatform: "",
  });
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  const calculateCost = async () => {
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    setIsSubmitting(true);

    const source = SOURCE_SYSTEMS.find((s) => s.id === formData.sourceSystem);
    const volume = DATA_VOLUMES.find((d) => d.id === formData.dataVolume);
    const sourceCount = SOURCE_COUNTS.find(
      (s) => s.id === formData.sourceCount,
    );
    const transformation = TRANSFORMATION_LEVELS.find(
      (t) => t.id === formData.transformationLevel,
    );
    const downtime = DOWNTIME_TOLERANCE.find(
      (d) => d.id === formData.downtimeTolerance,
    );

    const baseCost = volume.baseCost;
    const estimatedCost = Math.round(
      baseCost *
        source.costMultiplier *
        sourceCount.factor *
        transformation.factor *
        downtime.factor,
    );

    const complexityScore = Math.min(
      10,
      Math.round(
        source.complexity *
          volume.factor *
          sourceCount.factor *
          transformation.factor *
          10,
      ) / 10,
    );

    let complexityRating, complexityColor;
    if (complexityScore <= 3) {
      complexityRating = "Low";
      complexityColor = "text-green-600";
    } else if (complexityScore <= 6) {
      complexityRating = "Medium";
      complexityColor = "text-yellow-600";
    } else {
      complexityRating = "High";
      complexityColor = "text-red-600";
    }

    const baseWeeks = Math.round(complexityScore * 2.5);
    const timeline = `${baseWeeks}–${baseWeeks + Math.round(baseWeeks * 0.5)} weeks`;

    const risks = [];
    if (source.complexity >= 3)
      risks.push(
        "Legacy systems may require manual rewriting of stored procedures and proprietary SQL",
      );
    if (volume.factor >= 1.6)
      risks.push(
        "Large data volumes increase transfer time and risk of data integrity issues",
      );
    if (sourceCount.factor >= 1.8)
      risks.push(
        "Multiple source systems add significant mapping, validation, and testing effort",
      );
    if (transformation.factor >= 1.4)
      risks.push(
        "Complex transformations require extensive development and testing",
      );
    if (downtime.factor >= 1.3)
      risks.push(
        "Tight downtime requirements may need phased migration or dual-running systems",
      );
    if (risks.length === 0)
      risks.push(
        "Relatively straightforward migration — focus on thorough testing and validation",
      );

    const costLow = Math.round(estimatedCost * 0.8);
    const costHigh = Math.round(estimatedCost * 1.3);

    try {
      await fetch("/api/tool-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          page: "/data-engineering-tools/data-migration-cost-calculator/",
          toolFormData: {
            "Source System": source.label,
            "Data Volume": volume.label,
            "Source Count": sourceCount.label,
            Transformation: transformation.label,
            "Downtime Tolerance": downtime.label,
            "Target Platform": TARGET_PLATFORMS.find(
              (t) => t.id === formData.targetPlatform,
            )?.label,
            "Est. Cost Range": `$${costLow.toLocaleString()} – $${costHigh.toLocaleString()}`,
            "Complexity Score": `${complexityScore}/10 (${complexityRating})`,
            "Est. Timeline": timeline,
            "Risk Factors": risks.length,
          },
        }),
      });
    } catch (err) {
      console.error("Failed to submit lead:", err);
    }

    setIsSubmitting(false);
    setResult({
      estimatedCost,
      costLow,
      costHigh,
      complexityScore,
      complexityRating,
      complexityColor,
      timeline,
      risks,
    });
  };

  const canProceed = () => {
    if (step === 0 && !formData.sourceSystem) return false;
    if (step === 1 && !formData.dataVolume) return false;
    if (step === 2 && !formData.sourceCount) return false;
    if (step === 3 && !formData.transformationLevel) return false;
    if (step === 4 && !formData.downtimeTolerance) return false;
    if (step === 5 && !formData.targetPlatform) return false;
    return true;
  };

  const resetCalc = () => {
    setResult(null);
    setStep(0);
    setEmail("");
    setEmailError("");
    setFormData({
      sourceSystem: "",
      dataVolume: "",
      sourceCount: "",
      transformationLevel: "",
      downtimeTolerance: "",
      targetPlatform: "",
    });
  };

  const steps = [
    {
      label: "Source",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-navyBlue">
            What are you migrating from?
          </h3>
          <p className="text-gray-500 text-sm">
            Select your primary source system. Legacy platforms typically
            increase complexity.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {SOURCE_SYSTEMS.map((s) => (
              <button
                key={s.id}
                onClick={() => setFormData({ ...formData, sourceSystem: s.id })}
                className={`p-3 rounded-lg border-2 text-left transition-all ${
                  formData.sourceSystem === s.id
                    ? "border-themeColor bg-blue-50"
                    : "border-gray-200 hover:border-themeColor/40"
                }`}
              >
                <span
                  className={`font-medium ${formData.sourceSystem === s.id ? "text-themeColor" : "text-navyBlue"}`}
                >
                  {s.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: "Volume",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-navyBlue">
            How much data are you moving?
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {DATA_VOLUMES.map((d) => (
              <button
                key={d.id}
                onClick={() => setFormData({ ...formData, dataVolume: d.id })}
                className={`p-4 rounded-lg border-2 text-center transition-all ${
                  formData.dataVolume === d.id
                    ? "border-themeColor bg-blue-50 text-themeColor font-semibold"
                    : "border-gray-200 hover:border-themeColor/40 text-navyBlue"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: "Systems",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-navyBlue">
            How many source systems are involved?
          </h3>
          <p className="text-gray-500 text-sm">
            More source systems means more mapping, validation, and testing.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {SOURCE_COUNTS.map((s) => (
              <button
                key={s.id}
                onClick={() => setFormData({ ...formData, sourceCount: s.id })}
                className={`p-4 rounded-lg border-2 text-center transition-all ${
                  formData.sourceCount === s.id
                    ? "border-themeColor bg-blue-50 text-themeColor font-semibold"
                    : "border-gray-200 hover:border-themeColor/40 text-navyBlue"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: "Transformation",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-navyBlue">
            How much data transformation is needed?
          </h3>
          <div className="space-y-3">
            {TRANSFORMATION_LEVELS.map((t) => (
              <button
                key={t.id}
                onClick={() =>
                  setFormData({ ...formData, transformationLevel: t.id })
                }
                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                  formData.transformationLevel === t.id
                    ? "border-themeColor bg-blue-50"
                    : "border-gray-200 hover:border-themeColor/40"
                }`}
              >
                <span
                  className={`block font-medium ${formData.transformationLevel === t.id ? "text-themeColor" : "text-navyBlue"}`}
                >
                  {t.label}
                </span>
                <span className="block text-xs text-gray-400 mt-0.5">
                  {t.desc}
                </span>
              </button>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: "Downtime",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-navyBlue">
            How much downtime can you tolerate?
          </h3>
          <p className="text-gray-500 text-sm">
            Tighter downtime requirements increase planning, testing, and phased
            migration costs.
          </p>
          <div className="space-y-3">
            {DOWNTIME_TOLERANCE.map((d) => (
              <button
                key={d.id}
                onClick={() =>
                  setFormData({ ...formData, downtimeTolerance: d.id })
                }
                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                  formData.downtimeTolerance === d.id
                    ? "border-themeColor bg-blue-50"
                    : "border-gray-200 hover:border-themeColor/40"
                }`}
              >
                <span
                  className={`block font-medium ${formData.downtimeTolerance === d.id ? "text-themeColor" : "text-navyBlue"}`}
                >
                  {d.label}
                </span>
                <span className="block text-xs text-gray-400 mt-0.5">
                  {d.desc}
                </span>
              </button>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: "Target",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-navyBlue">
            Where are you migrating to?
          </h3>
          <div className="space-y-3">
            {TARGET_PLATFORMS.map((t) => (
              <button
                key={t.id}
                onClick={() =>
                  setFormData({ ...formData, targetPlatform: t.id })
                }
                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                  formData.targetPlatform === t.id
                    ? "border-themeColor bg-blue-50"
                    : "border-gray-200 hover:border-themeColor/40"
                }`}
              >
                <span
                  className={`font-medium ${formData.targetPlatform === t.id ? "text-themeColor" : "text-navyBlue"}`}
                >
                  {t.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: "Get Estimate",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-navyBlue">
            Enter your work email to see your cost breakdown and risk
            analysis.{" "}
          </h3>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailError) setEmailError("");
            }}
            placeholder="you@company.com"
            className={`w-full px-4 py-3 rounded-lg border-2 text-sm font-medium transition-colors focus:outline-none focus:border-themeColor ${
              emailError
                ? "border-red-400 bg-red-50"
                : "border-gray-200 bg-white"
            }`}
          />
          {emailError && (
            <p className="text-red-500 text-xs mt-1.5">{emailError}</p>
          )}
        </div>
      ),
    },
  ];

  const totalSteps = steps.length;

  return (
    <>
      {/* Hero */}
      <section className="svc-hero-bg relative overflow-hidden">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5 relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-widest uppercase mb-7"
            style={{
              background: "#ffffff",
              border: "1px solid #e4eaf1",
              color: "#566678",
              boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)",
            }}
          >
            <Star className="w-3.5 h-3.5" style={{ color: "#2f6bff" }} />
            FREE TOOL
          </span>
          <Heading
            type="h1"
            className="!font-extrabold max-w-[720px] text-[#0b1e33]"
            text="Data Migration Cost Calculator"
          />
          <p
            className="lg:text-lg md:text-base text-base !mt-6 max-w-[600px] leading-relaxed"
            style={{ color: "#566678" }}
          >
            Estimate the cost of your data migration based on your data volume,
            source systems, migration complexity, and project requirements. Plan
            your migration with greater confidence before work begins.
          </p>
          <div className="mt-8">
            <a
              href="#calculator"
              className="w-fit c-button c-btn-primary c-btn-medium inline-flex items-center gap-2 hover:!text-themeColor"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("calculator")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start Calculator <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div
            className="flex flex-wrap gap-5 mt-8 pt-6"
            style={{ borderTop: "1px solid #e4eaf1" }}
          >
            {[
              "No signup required",
              "Results in under 2 min",
              "Cost range + risk analysis",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm font-medium"
                style={{ color: "#6b7a8a" }}
              >
                <CheckCircle
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#16a34a" }}
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5 py-3">
          <nav
            className="text-sm"
            style={{ color: "#6b7a8a" }}
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              style={{ color: "#2f6bff" }}
              className="hover:underline"
            >
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <Link
              href="/data-engineering-tools/"
              style={{ color: "#2f6bff" }}
              className="hover:underline"
            >
              Data Engineering Tools
            </Link>
            <span className="mx-1.5">/</span>
            <span className="font-medium" style={{ color: "#0b1e33" }}>
              Data Migration Cost Calculator
            </span>
          </nav>
        </div>
      </div>

      {/* Calculator */}
      <section id="calculator" className="bg-[#f8f9ff] py-12 md:py-16">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          {!result ? (
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg shadow-gray-200/60 overflow-hidden">
              <div className="svc-mid-cta-bg px-6 md:px-10 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-xs font-semibold tracking-wider uppercase">
                      Step {step + 1} of {totalSteps}
                    </p>
                    <p className="text-white font-semibold text-lg mt-0.5">
                      {steps[step].label}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {steps.map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i <= step ? "bg-themeColor w-8" : "bg-white/20 w-2"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-6 md:px-10 py-8">{steps[step].content}</div>
              <div className="flex justify-between items-center px-6 md:px-10 py-5 bg-gray-50 border-t border-gray-100">
                <button
                  onClick={() => setStep(step - 1)}
                  className={`flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-navyBlue transition-colors ${step === 0 ? "invisible" : ""}`}
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                {step < totalSteps - 1 ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    disabled={!canProceed()}
                    className="c-button c-btn-primary c-btn-medium hover:!bg-navyBlue hover:!text-white inline-flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Next <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={calculateCost}
                    disabled={isSubmitting}
                    className="c-button c-btn-primary c-btn-medium hover:!bg-navyBlue hover:!text-white inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Calculating..." : "Get Estimate"}{" "}
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-navyBlue">
                  Your Migration Cost Estimate
                </h2>
                <button
                  onClick={resetCalc}
                  className="text-themeColor font-medium text-sm hover:underline flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Recalculate
                </button>
              </div>

              {/* Result cards */}
              <div className="grid md:grid-cols-3 gap-5">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-themeColor to-blue-400" />
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-themeColor" />
                    </div>
                    <span className="text-sm font-medium text-gray-500">
                      Estimated Cost
                    </span>
                  </div>
                  <p className="text-2xl font-extrabold text-navyBlue tracking-tight">
                    ${result.costLow.toLocaleString()} – $
                    {result.costHigh.toLocaleString()}
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-violet-400" />
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-500">
                      Complexity
                    </span>
                  </div>
                  <p
                    className={`text-2xl font-extrabold tracking-tight ${result.complexityColor}`}
                  >
                    {result.complexityRating}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    {result.complexityScore}/10
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-400" />
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-amber-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-500">
                      Timeline
                    </span>
                  </div>
                  <p className="text-2xl font-extrabold text-navyBlue tracking-tight">
                    {result.timeline}
                  </p>
                </div>
              </div>

              {/* Risks */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
                  Risk Factors ({result.risks.length})
                </h3>
                <div className="space-y-3">
                  {result.risks.map((risk, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                      <p className="text-sm text-gray-600">{risk}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lead gen CTA */}
              <div className="relative svc-mid-cta-bg rounded-2xl p-7 md:p-9 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none svc-mid-cta-glow" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Planning a migration soon?
                  </h3>
                  <p className="text-white/60 text-[15px] max-w-3xl leading-relaxed">
                    We&apos;ll review your migration plan, uncover hidden risks,
                    and help you estimate the time and effort before work
                    begins.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    <button
                      onClick={async () => {
                        const cal = await getCalApi({});
                        cal("modal", {
                          calLink: "vikas-singh-bril/30-min-product-eng-review",
                          config: { theme: "light" },
                        });
                      }}
                      className="c-button c-btn-primary c-btn-medium outline-none overflow-hidden whitespace-nowrap transition-all duration-300 border"
                    >
                      <span>Plan Migration</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-400 text-center pt-1">
                Estimates are for planning purposes. Actual costs depend on data
                quality, infrastructure, integration requirements, and project
                scope.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-white py-12 md:py-16">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          <div className="mb-12">
            <Heading
              type="h2"
              className="!font-extrabold text-gray-900 mb-4"
              text="How Data Migration Costs Are Estimated"
            />
            <p className="text-[16.5px] text-gray-500 leading-relaxed">
              This data migration cost estimator provides an approximate project
              cost by considering the factors that have the biggest impact on
              migration projects. Data volume, the number of source systems,
              data complexity, transformation requirements, testing, and
              downtime constraints all influence the time and effort needed to
              complete a successful migration.
            </p>
            <p className="text-[16.5px] text-gray-500 leading-relaxed mt-4">
              The estimate is designed to support early planning rather than
              replace a detailed project assessment. Actual costs can vary
              depending on data quality, legacy infrastructure, integration
              complexity, and business requirements. Whether you&apos;re moving
              data between on-premises systems or evaluating data transfer cost
              for a cloud migration, this estimate helps you understand the
              likely scope of your project.
            </p>
          </div>

          <div>
            <Heading
              type="h2"
              className="!font-extrabold text-gray-900 mb-4"
              text="What Usually Increases Data Migration Costs"
            />
            <p className="text-[16.5px] text-gray-500 leading-relaxed mb-6">
              Every migration project is different, but these are the factors
              that most commonly increase costs and timelines.
            </p>
            <ul className="space-y-0">
              {[
                {
                  title: "Poor data quality",
                  text: "Duplicate, outdated, or inconsistent data requires additional cleansing before migration can begin.",
                },
                {
                  title: "Multiple source systems",
                  text: "Migrating data from several databases or applications increases mapping, validation, and testing effort.",
                },
                {
                  title: "Complex data transformations",
                  text: "Converting data into new formats or business structures adds time and development work.",
                },
                {
                  title: "Limited documentation",
                  text: "Legacy systems with incomplete documentation require additional analysis before data can be migrated safely.",
                },
                {
                  title: "Downtime requirements",
                  text: "Projects with minimal downtime windows often require more planning, testing, and phased migration strategies.",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="relative pl-7 py-3 border-b border-gray-100 last:border-0"
                >
                  <span
                    className="absolute left-0.5 top-[18px] w-2 h-2 rounded-sm bg-themeColor"
                    aria-hidden="true"
                  />
                  <span className="text-[16.5px]">
                    <strong className="text-navyBlue">{item.title}.</strong>{" "}
                    <span className="text-gray-500">{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24" style={{ background: "#f8f9ff" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#017eeb",
              }}
            >
              Common Questions
            </span>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
                color: "#0d0f1a",
              }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              Everything you need to know about data migration costs and
              planning.
            </p>
          </div>
          <div className="mx-auto" style={{ maxWidth: 860 }}>
            {FAQ_DATA.map((item, i) => (
              <GradientFAQAccordion
                key={i + 1}
                id={`migration-faq-${i + 1}`}
                question={item.q}
                answer={item.a}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          <div className="bg-[#f2f9fe] border border-gray-200 rounded-2xl py-14 px-6 md:px-12 text-center">
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-themeColor block mb-4">
              DATA MIGRATION
            </span>
            <Heading
              type="h2"
              className="!font-extrabold text-gray-900 mb-3"
              text="Migration Costs Adding Up?"
            />
            <p className="text-[17px] text-gray-500 max-w-[560px] mx-auto">
              Get expert guidance to reduce complexity, avoid delays, and move
              your data with confidence.
            </p>
            <div className="flex justify-center gap-4 flex-wrap mt-7">
              <button
                onClick={async () => {
                  const cal = await getCalApi({});
                  cal("modal", {
                    calLink: "vikas-singh-bril/30-min-product-eng-review",
                    config: { theme: "light" },
                  });
                }}
                className="c-button c-btn-primary c-btn-medium outline-none overflow-hidden whitespace-nowrap transition-all duration-300 border hover:!text-themeColor"
              >
                <span>Talk to Our Expert</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              <Link
                href="/data-engineering-tools/"
                className="c-button c-btn-medium outline-none overflow-hidden whitespace-nowrap transition-all duration-300 border border-themeColor text-themeColor hover:bg-themeColor hover:text-white"
              >
                Explore All Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataMigrationCostCalculator;
