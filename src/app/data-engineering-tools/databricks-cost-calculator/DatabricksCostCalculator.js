"use client";
import React, { useState } from "react";
import Heading from "../../components/HTMLComponents/Heading";
import ButtonV2 from "../../components/Common/ButtonV2";
import GradientFAQAccordion from "../../components/Common/GradientFAQAccordion";
import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Star,
  DollarSign,
  AlertTriangle,
  TrendingDown,
} from "lucide-react";

const WORKLOAD_TYPES = {
  jobsCompute: { dbu: 0.15, label: "Jobs Compute", desc: "Batch ETL & scheduled jobs" },
  allPurpose: { dbu: 0.55, label: "All-Purpose Compute", desc: "Interactive notebooks & dev" },
  sqlClassic: { dbu: 0.22, label: "SQL Classic", desc: "SQL warehouse queries" },
  sqlPro: { dbu: 0.55, label: "SQL Pro", desc: "SQL warehouse with advanced features" },
  sqlServerless: { dbu: 0.7, label: "SQL Serverless", desc: "Serverless SQL warehouse" },
  deltaLiveTables: { dbu: 0.2, label: "Delta Live Tables", desc: "Streaming & batch pipelines" },
  modelServing: { dbu: 0.07, label: "Model Serving", desc: "ML model endpoints" },
};

const CLUSTER_SIZES = {
  small: { nodes: 2, label: "Small", desc: "2 worker nodes" },
  medium: { nodes: 4, label: "Medium", desc: "4 worker nodes" },
  large: { nodes: 8, label: "Large", desc: "8 worker nodes" },
  xlarge: { nodes: 16, label: "X-Large", desc: "16 worker nodes" },
  "2xlarge": { nodes: 32, label: "2X-Large", desc: "32 worker nodes" },
  "4xlarge": { nodes: 64, label: "4X-Large", desc: "64 worker nodes" },
};

const CLUSTER_SIZE_KEYS = Object.keys(CLUSTER_SIZES);

const PROVIDERS = ["AWS", "Azure", "GCP"];

const INFRA_COST_PER_NODE_HR = {
  AWS: 0.34,
  Azure: 0.36,
  GCP: 0.32,
};

const FAQ_DATA = [
  {
    q: "Is Databricks expensive?",
    a: "Databricks pricing depends on your workload, cluster configuration, and cloud infrastructure. Efficiently managed environments can remain cost-effective, while oversized clusters and inefficient jobs can significantly increase monthly costs.",
  },
  {
    q: "How are Databricks costs calculated?",
    a: "Databricks charges based on DBU consumption, while your cloud provider separately bills for the underlying compute, storage, and networking resources. Your total monthly cost combines both charges.",
  },
  {
    q: "How accurate is this Databricks cost calculator?",
    a: "This calculator provides a reliable estimate based on the information you enter. Actual costs may vary depending on autoscaling, workload patterns, infrastructure pricing, and your Databricks pricing agreement.",
  },
  {
    q: "Does Databricks cost the same on Azure, AWS, and Google Cloud?",
    a: "No. While DBU pricing follows Databricks pricing tiers, infrastructure costs differ across cloud providers. As a result, your Databricks cost on Azure, AWS, or Google Cloud may vary for similar workloads.",
  },
  {
    q: "How can I reduce Databricks costs?",
    a: "The biggest savings usually come from right-sizing clusters, enabling autoscaling, shutting down idle resources, optimizing Spark jobs, and regularly reviewing DBU consumption to eliminate unnecessary compute usage.",
  },
];

const DatabricksCostCalculator = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    provider: "",
    workloadType: "",
    clusterSize: "",
    hoursPerDay: 8,
    daysPerWeek: 5,
    clusterCount: 2,
    autoTerminationMinutes: 10,
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

    const {
      provider,
      workloadType,
      clusterSize,
      hoursPerDay,
      daysPerWeek,
      clusterCount,
      autoTerminationMinutes,
    } = formData;

    const dbuRate = WORKLOAD_TYPES[workloadType].dbu;
    const nodes = CLUSTER_SIZES[clusterSize].nodes;
    const monthlyHours = hoursPerDay * daysPerWeek * 4.33;

    const dbuPerHour = nodes * dbuRate;
    const totalDBUs = dbuPerHour * monthlyHours * clusterCount;
    const dbuCost = totalDBUs;

    const infraCostPerHour = nodes * INFRA_COST_PER_NODE_HR[provider];
    const infraCost = infraCostPerHour * monthlyHours * clusterCount;

    const monthlyCost = dbuCost + infraCost;

    const idleWastePercent =
      autoTerminationMinutes > 10
        ? Math.min(30, (autoTerminationMinutes - 10) * 2)
        : 0;
    const oversizeWaste =
      ["xlarge", "2xlarge", "4xlarge"].includes(clusterSize) && hoursPerDay < 6
        ? 20
        : 0;
    const totalWastePercent = Math.min(50, idleWastePercent + oversizeWaste);
    const wastedSpend = monthlyCost * (totalWastePercent / 100);

    try {
      await fetch("/api/tool-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          page: "/data-engineering-tools/databricks-cost-calculator/",
          toolFormData: {
            Provider: provider,
            "Workload Type": WORKLOAD_TYPES[workloadType].label,
            "Cluster Size": CLUSTER_SIZES[clusterSize].label,
            "Hours/Day": hoursPerDay,
            "Days/Week": daysPerWeek,
            Clusters: clusterCount,
            "Auto-Termination": `${autoTerminationMinutes} min`,
            "Est. Monthly Cost": `$${Math.round(monthlyCost).toLocaleString()}`,
            "Est. Waste %": `${totalWastePercent}%`,
          },
        }),
      });
    } catch (err) {
      console.error("Failed to submit lead:", err);
    }

    setIsSubmitting(false);
    setResult({
      monthlyCost: Math.round(monthlyCost),
      annualCost: Math.round(monthlyCost * 12),
      dbuCost: Math.round(dbuCost),
      infraCost: Math.round(infraCost),
      totalDBUs: Math.round(totalDBUs),
      wastedSpend: Math.round(wastedSpend),
      wastedAnnual: Math.round(wastedSpend * 12),
      totalWastePercent,
    });
  };

  const canProceed = () => {
    if (step === 0 && !formData.provider) return false;
    if (step === 1 && !formData.workloadType) return false;
    if (step === 2 && !formData.clusterSize) return false;
    return true;
  };

  const steps = [
    {
      label: "Provider",
      content: (
        <div className="space-y-5">
          <h3 className="text-xl font-semibold text-navyBlue">
            Where does your Databricks run?
          </h3>
          <p className="text-gray-500 text-sm">
            Select your cloud provider. Infrastructure costs vary by provider.
          </p>
          <div className="grid grid-cols-3 gap-3">
            {PROVIDERS.map((p) => (
              <button
                key={p}
                onClick={() => setFormData({ ...formData, provider: p })}
                className={`p-4 rounded-lg border-2 text-center font-medium transition-all ${
                  formData.provider === p
                    ? "border-themeColor bg-blue-50 text-themeColor"
                    : "border-gray-200 hover:border-themeColor/40 text-navyBlue"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: "Workload",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-navyBlue">
            What type of workload do you run?
          </h3>
          <p className="text-gray-500 text-sm">
            Different workloads consume DBUs at different rates.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Object.entries(WORKLOAD_TYPES).map(([key, wl]) => (
              <button
                key={key}
                onClick={() =>
                  setFormData({ ...formData, workloadType: key })
                }
                className={`p-3 rounded-lg border-2 text-left transition-all ${
                  formData.workloadType === key
                    ? "border-themeColor bg-blue-50"
                    : "border-gray-200 hover:border-themeColor/40"
                }`}
              >
                <span className={`block font-medium ${formData.workloadType === key ? "text-themeColor" : "text-navyBlue"}`}>
                  {wl.label}
                </span>
                <span className="block text-xs text-gray-400 mt-0.5">
                  {wl.desc} &middot; {wl.dbu} DBU/hr per node
                </span>
              </button>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: "Cluster",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-navyBlue">
            What cluster size do you typically use?
          </h3>
          <p className="text-gray-500 text-sm">
            Larger clusters consume more DBUs and infrastructure per hour.
          </p>
          <div className="grid grid-cols-3 gap-3">
            {CLUSTER_SIZE_KEYS.map((key) => (
              <button
                key={key}
                onClick={() =>
                  setFormData({ ...formData, clusterSize: key })
                }
                className={`p-3 rounded-lg border-2 text-center transition-all ${
                  formData.clusterSize === key
                    ? "border-themeColor bg-blue-50 text-themeColor font-semibold"
                    : "border-gray-200 hover:border-themeColor/40 text-navyBlue"
                }`}
              >
                <span className="block font-medium">
                  {CLUSTER_SIZES[key].label}
                </span>
                <span className="block text-xs text-gray-400 mt-1">
                  {CLUSTER_SIZES[key].desc}
                </span>
              </button>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: "Usage",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-navyBlue">
            How much do you run it?
          </h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Active hours per day:{" "}
              <span className="text-themeColor font-bold">
                {formData.hoursPerDay}h
              </span>
            </label>
            <input
              type="range"
              min="1"
              max="24"
              value={formData.hoursPerDay}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  hoursPerDay: parseInt(e.target.value),
                })
              }
              className="w-full accent-themeColor"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>1h</span>
              <span>24h</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Days per week:{" "}
              <span className="text-themeColor font-bold">
                {formData.daysPerWeek}
              </span>
            </label>
            <input
              type="range"
              min="1"
              max="7"
              value={formData.daysPerWeek}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  daysPerWeek: parseInt(e.target.value),
                })
              }
              className="w-full accent-themeColor"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>1 day</span>
              <span>7 days</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of clusters:{" "}
              <span className="text-themeColor font-bold">
                {formData.clusterCount}
              </span>
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={formData.clusterCount}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  clusterCount: parseInt(e.target.value),
                })
              }
              className="w-full accent-themeColor"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>1</span>
              <span>20</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Auto-Termination",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-navyBlue">
            Auto-termination setting
          </h3>
          <p className="text-gray-500 text-sm">
            How long before idle clusters are terminated? Lower saves more.
          </p>
          <div>
            <div className="grid grid-cols-3 gap-3">
              {[5, 10, 15, 30, 60, 120].map((mins) => (
                <button
                  key={mins}
                  onClick={() =>
                    setFormData({ ...formData, autoTerminationMinutes: mins })
                  }
                  className={`p-3 rounded-lg border-2 text-center transition-all ${
                    formData.autoTerminationMinutes === mins
                      ? "border-themeColor bg-blue-50 text-themeColor font-semibold"
                      : "border-gray-200 hover:border-themeColor/40 text-navyBlue"
                  }`}
                >
                  {mins} min
                </button>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Get Estimate",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-navyBlue">
            Where should we send your estimate?
          </h3>
          <p className="text-gray-500 text-sm">
            Enter your work email to see your Databricks cost breakdown.
          </p>
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
          <p className="text-xs text-gray-400">
            We&apos;ll only use this to send your estimate. No spam.
          </p>
        </div>
      ),
    },
  ];

  const totalSteps = steps.length;

  return (
    <>
      {/* Hero */}
      <section className="bg-navyBlue relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(61,123,255,0.18) 0%, transparent 70%)",
          }}
        />

        <div className="container max-w-[1280px] mx-auto md:px-10 px-5 relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
          <span className="inline-flex items-center gap-2 bg-[rgba(26,92,204,0.15)] border border-[rgba(26,92,204,0.3)] rounded-full px-3.5 py-1.5 text-[#00b4d8] text-xs font-semibold tracking-widest uppercase mb-7">
            <Star className="w-3.5 h-3.5" />
            FREE TOOL
          </span>

          <Heading
            type="h1"
            className="text-white !font-extrabold max-w-[720px]"
            text="Databricks Cost Calculator"
          />

          <p className="text-gray-400 lg:text-lg md:text-base text-base !mt-6 max-w-[600px] leading-relaxed">
            Estimate your monthly Databricks costs based on compute usage, DBUs,
            runtime, and cloud provider pricing. Then find opportunities to
            optimize your Databricks spend.
          </p>

          <div className="flex flex-wrap gap-5 mt-8 pt-6 border-t border-white/10">
            {[
              "No signup required",
              "Results in under 2 min",
              "See projected waste",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-white/50 text-sm font-medium"
              >
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5 py-3">
          <nav className="text-sm text-gray-400" aria-label="Breadcrumb">
            <Link href="/" className="text-themeColor hover:underline">
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <Link
              href="/data-engineering-tools/"
              className="text-themeColor hover:underline"
            >
              Data Engineering Tools
            </Link>
            <span className="mx-1.5">/</span>
            <span className="text-gray-600 font-medium">
              Databricks Cost Calculator
            </span>
          </nav>
        </div>
      </div>

      {/* Calculator */}
      <section className="bg-[#f8f9ff] py-12 md:py-16">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          {!result ? (
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg shadow-gray-200/60 overflow-hidden">
              <div className="bg-navyBlue px-6 md:px-10 py-5">
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
                  className={`flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-navyBlue transition-colors ${
                    step === 0 ? "invisible" : ""
                  }`}
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
                    {isSubmitting ? "Calculating..." : "Calculate Cost"}{" "}
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-navyBlue">
                  Your Databricks Cost Estimate
                </h2>
                <button
                  onClick={() => {
                    setResult(null);
                    setStep(0);
                    setEmail("");
                    setEmailError("");
                    setFormData({
                      ...formData,
                      provider: "",
                      workloadType: "",
                      clusterSize: "",
                    });
                  }}
                  className="text-themeColor font-medium text-sm hover:underline flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Recalculate
                </button>
              </div>

              {/* Result cards */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md shadow-gray-100/80 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-themeColor to-blue-400" />
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-themeColor" />
                    </div>
                    <span className="text-sm font-medium text-gray-500">
                      Estimated Monthly Cost
                    </span>
                  </div>
                  <p className="text-4xl font-extrabold text-navyBlue tracking-tight">
                    ${result.monthlyCost.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    ${result.annualCost.toLocaleString()} / year
                  </p>
                </div>

                <div
                  className={`rounded-2xl p-6 border shadow-md relative overflow-hidden ${
                    result.totalWastePercent > 15
                      ? "bg-white border-red-200 shadow-red-50"
                      : "bg-white border-green-200 shadow-green-50"
                  }`}
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-1 ${
                      result.totalWastePercent > 15
                        ? "bg-gradient-to-r from-red-500 to-orange-400"
                        : "bg-gradient-to-r from-green-500 to-emerald-400"
                    }`}
                  />
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        result.totalWastePercent > 15 ? "bg-red-50" : "bg-green-50"
                      }`}
                    >
                      {result.totalWastePercent > 15 ? (
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-500">
                      Estimated Waste
                    </span>
                  </div>
                  <p
                    className={`text-4xl font-extrabold tracking-tight ${
                      result.totalWastePercent > 15 ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    ${result.wastedSpend.toLocaleString()}/mo
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    {result.totalWastePercent}% of spend &middot; $
                    {result.wastedAnnual.toLocaleString()}/yr
                  </p>
                </div>
              </div>

              {/* Breakdown */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
                  Cost Breakdown
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-sm font-semibold text-navyBlue">
                        DBU Cost
                      </span>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        Databricks Units consumed based on workload type and
                        cluster size.
                      </p>
                    </div>
                    <span className="text-sm font-bold text-navyBlue whitespace-nowrap">
                      ${result.dbuCost.toLocaleString()}/mo
                    </span>
                  </div>
                  <div className="border-t border-gray-100" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-sm font-semibold text-navyBlue">
                        Infrastructure
                      </span>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        Cloud provider compute costs for the underlying VM
                        instances.
                      </p>
                    </div>
                    <span className="text-sm font-bold text-navyBlue whitespace-nowrap">
                      ${result.infraCost.toLocaleString()}/mo
                    </span>
                  </div>
                  <div className="border-t border-gray-100" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-sm font-semibold text-navyBlue">
                        Total DBUs / month
                      </span>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        Total Databricks Units consumed across all clusters.
                      </p>
                    </div>
                    <span className="text-sm font-bold text-navyBlue whitespace-nowrap">
                      {result.totalDBUs.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Savings tip */}
              {result.totalWastePercent > 10 && (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <TrendingDown className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-bold text-amber-900">
                        You could save $
                        {result.wastedAnnual.toLocaleString()}/year
                      </p>
                      <p className="text-sm text-amber-700 mt-1 leading-relaxed">
                        Common fixes: enable auto-termination, right-size
                        clusters, use Jobs Compute instead of All-Purpose for
                        production workloads, and optimize Spark jobs.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Lead gen / CTA */}
              <div className="relative bg-navyBlue rounded-2xl p-7 md:p-9 overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 80% at 80% 20%, rgba(61,123,255,0.2) 0%, transparent 60%)",
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Paying more for Databricks than you planned?
                  </h3>
                  <p className="text-white/60 text-[15px] max-w-3xl leading-relaxed">
                    Our Databricks Cost Optimization Audit helps you identify
                    inefficient clusters, unnecessary DBU consumption, and hidden
                    infrastructure costs so you can lower your monthly cloud
                    bill.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    <button
                      onClick={async () => {
                        const cal = await getCalApi({});
                        cal("modal", {
                          calLink:
                            "vikas-singh-bril/30-min-product-eng-review",
                          config: { theme: "light" },
                        });
                      }}
                      className="c-button c-btn-primary c-btn-medium outline-none overflow-hidden whitespace-nowrap transition-all duration-300 border"
                    >
                      <span>Get a Cost Audit</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-400 text-center pt-1">
                Estimates only. Actual Databricks billing depends on workload
                patterns, autoscaling, cloud provider pricing, and your contract
                terms.
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
              text="How the Databricks Cost Calculator Works"
            />
            <p className="text-[16.5px] text-gray-500 leading-relaxed">
              This Databricks cost calculator estimates your monthly spending
              using the key factors that influence Databricks pricing. Compute
              usage is measured in Databricks Units (DBUs), which vary depending
              on your workload, cluster type, and cloud provider. The calculator
              combines DBU consumption with infrastructure costs and runtime to
              generate a practical monthly estimate.
            </p>
            <p className="text-[16.5px] text-gray-500 leading-relaxed mt-4">
              Like any Databricks cost estimator, the result is an estimate
              rather than an exact bill. Your actual costs may vary depending on
              autoscaling, cluster utilization, workload efficiency, storage,
              networking, and the pricing model used by your cloud provider.
              Whether you&apos;re running on AWS or calculating Databricks cost
              on Azure, this calculator provides a useful starting point for
              planning and budgeting.
            </p>
          </div>

          <div>
            <Heading
              type="h2"
              className="!font-extrabold text-gray-900 mb-4"
              text="What Usually Increases Databricks Costs"
            />
            <p className="text-[16.5px] text-gray-500 leading-relaxed mb-6">
              When we review Databricks environments, these are the most common
              reasons costs grow faster than expected.
            </p>
            <ul className="space-y-0">
              {[
                {
                  title: "Oversized clusters",
                  text: "Running larger clusters than a workload requires increases DBU consumption without delivering meaningful performance improvements.",
                },
                {
                  title: "Clusters left running",
                  text: "Interactive and development clusters that remain active when idle continue generating unnecessary costs.",
                },
                {
                  title: "Low cluster utilization",
                  text: "Underutilized clusters waste compute resources and increase infrastructure spending.",
                },
                {
                  title: "Poor workload scheduling",
                  text: "Running jobs during peak hours or failing to consolidate workloads can increase both DBU and cloud infrastructure costs.",
                },
                {
                  title: "Inefficient Spark jobs",
                  text: "Poorly optimized Spark workloads take longer to complete, consuming more compute resources and increasing monthly spend.",
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
              Everything you need to know about Databricks costs and how to
              estimate them.
            </p>
          </div>
          <div className="mx-auto" style={{ maxWidth: 860 }}>
            {FAQ_DATA.map((item, i) => (
              <GradientFAQAccordion
                key={i + 1}
                id={`databricks-faq-${i + 1}`}
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
              DATABRICKS COST OPTIMIZATION
            </span>
            <Heading
              type="h2"
              className="!font-extrabold text-gray-900 mb-3"
              text="Take Control of Your Databricks Spending"
            />
            <p className="text-[17px] text-gray-500 max-w-[560px] mx-auto">
              Your monthly bill only shows the total cost. Our Databricks Cost
              Optimization Audit helps you understand what&apos;s driving DBU
              consumption and where you can reduce cloud spending without
              sacrificing performance.
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
                <span>Get a Cost Audit</span>
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

export default DatabricksCostCalculator;
