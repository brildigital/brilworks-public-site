"use client";
import React, { useState } from "react";
import { ArrowRight, ArrowLeft, AlertTriangle, Clock, Shield } from "lucide-react";
import Link from "next/link";

const stacks = [
  { id: "teradata", label: "Teradata", complexity: 3 },
  { id: "sql-server", label: "SQL Server", complexity: 2 },
  { id: "hadoop", label: "Hadoop / HDFS", complexity: 3 },
  { id: "oracle", label: "Oracle", complexity: 3 },
  { id: "redshift", label: "Amazon Redshift", complexity: 1 },
  { id: "bigquery", label: "Google BigQuery", complexity: 1 },
  { id: "on-prem", label: "On-premise (other)", complexity: 3 },
];

const dataVolumes = [
  { id: "small", label: "< 1 TB", factor: 0.7 },
  { id: "medium", label: "1 – 10 TB", factor: 1.0 },
  { id: "large", label: "10 – 100 TB", factor: 1.5 },
  { id: "massive", label: "100+ TB", factor: 2.0 },
];

const teamSizes = [
  { id: "small", label: "1–3 engineers", factor: 1.3 },
  { id: "medium", label: "4–8 engineers", factor: 1.0 },
  { id: "large", label: "9–15 engineers", factor: 0.8 },
  { id: "xlarge", label: "16+ engineers", factor: 0.7 },
];

const targetPlatforms = [
  { id: "snowflake", label: "Snowflake" },
  { id: "databricks", label: "Databricks" },
  { id: "both", label: "Both / Undecided" },
];

const MigrationComplexityCalculator = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    sourceStack: "",
    dataVolume: "",
    teamSize: "",
    target: "",
  });
  const [result, setResult] = useState(null);

  const calculate = () => {
    const source = stacks.find((s) => s.id === formData.sourceStack);
    const volume = dataVolumes.find((d) => d.id === formData.dataVolume);
    const team = teamSizes.find((t) => t.id === formData.teamSize);

    const rawScore = source.complexity * volume.factor * team.factor;
    const normalizedScore = Math.min(10, Math.round(rawScore * 10) / 10);

    let rating, color, bgColor, borderColor;
    if (normalizedScore <= 3) {
      rating = "Low";
      color = "text-green-600";
      bgColor = "bg-green-50";
      borderColor = "border-green-200";
    } else if (normalizedScore <= 6) {
      rating = "Medium";
      color = "text-yellow-600";
      bgColor = "bg-yellow-50";
      borderColor = "border-yellow-200";
    } else {
      rating = "High";
      color = "text-red-600";
      bgColor = "bg-red-50";
      borderColor = "border-red-200";
    }

    const baseWeeks = Math.round(normalizedScore * 3);
    const timeline = `${baseWeeks}–${baseWeeks + Math.round(baseWeeks * 0.5)} weeks`;

    const risks = [];
    if (source.complexity >= 3) risks.push("Legacy stored procedures and proprietary SQL dialects require manual rewriting");
    if (volume.factor >= 1.5) risks.push("Large data volumes increase transfer time and risk of data integrity issues during migration");
    if (team.factor >= 1.3) risks.push("Small team may struggle with parallel workstreams — consider phased migration");
    if (formData.target === "both") risks.push("Dual-platform target adds architectural complexity — define clear boundaries early");
    if (risks.length === 0) risks.push("Relatively straightforward migration — focus on testing and validation");

    setResult({ normalizedScore, rating, color, bgColor, borderColor, timeline, risks });
  };

  const stepConfigs = [
    {
      label: "Source",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-navyBlue">What are you migrating from?</h3>
          <div className="grid grid-cols-2 gap-3">
            {stacks.map((s) => (
              <button
                key={s.id}
                onClick={() => { setFormData({ ...formData, sourceStack: s.id }); setStep(1); }}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  formData.sourceStack === s.id
                    ? "border-themeColor bg-themeLight"
                    : "border-gray-200 hover:border-themeColor/40"
                }`}
              >
                <span className="font-semibold text-navyBlue">{s.label}</span>
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
          <h3 className="text-xl font-semibold text-navyBlue">How much data are you moving?</h3>
          {dataVolumes.map((d) => (
            <button
              key={d.id}
              onClick={() => { setFormData({ ...formData, dataVolume: d.id }); setStep(2); }}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                formData.dataVolume === d.id
                  ? "border-themeColor bg-themeLight"
                  : "border-gray-200 hover:border-themeColor/40"
              }`}
            >
              <span className="font-semibold text-navyBlue">{d.label}</span>
            </button>
          ))}
        </div>
      ),
    },
    {
      label: "Team",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-navyBlue">How large is your data engineering team?</h3>
          {teamSizes.map((t) => (
            <button
              key={t.id}
              onClick={() => { setFormData({ ...formData, teamSize: t.id }); setStep(3); }}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                formData.teamSize === t.id
                  ? "border-themeColor bg-themeLight"
                  : "border-gray-200 hover:border-themeColor/40"
              }`}
            >
              <span className="font-semibold text-navyBlue">{t.label}</span>
            </button>
          ))}
        </div>
      ),
    },
    {
      label: "Target",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-navyBlue">Where are you migrating to?</h3>
          {targetPlatforms.map((t) => (
            <button
              key={t.id}
              onClick={() => setFormData({ ...formData, target: t.id })}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                formData.target === t.id
                  ? "border-themeColor bg-themeLight"
                  : "border-gray-200 hover:border-themeColor/40"
              }`}
            >
              <span className="font-semibold text-navyBlue">{t.label}</span>
            </button>
          ))}
        </div>
      ),
    },
  ];

  if (result) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-navyBlue">Migration Complexity Report</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-sm">Close</button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className={`rounded-xl p-5 border ${result.bgColor} ${result.borderColor} text-center`}>
            <Shield className={`w-8 h-8 mx-auto mb-2 ${result.color}`} />
            <p className={`text-2xl font-bold ${result.color}`}>{result.rating}</p>
            <p className="text-sm text-gray-500 mt-1">Complexity: {result.normalizedScore}/10</p>
          </div>
          <div className="rounded-xl p-5 border border-gray-200 bg-white text-center">
            <Clock className="w-8 h-8 mx-auto mb-2 text-themeColor" />
            <p className="text-2xl font-bold text-navyBlue">{result.timeline}</p>
            <p className="text-sm text-gray-500 mt-1">Estimated timeline</p>
          </div>
          <div className="rounded-xl p-5 border border-gray-200 bg-white text-center">
            <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-amber-500" />
            <p className="text-2xl font-bold text-navyBlue">{result.risks.length}</p>
            <p className="text-sm text-gray-500 mt-1">Risk factor{result.risks.length !== 1 ? "s" : ""} identified</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <h4 className="font-semibold text-navyBlue mb-3">Common Failure Risks</h4>
          <div className="space-y-3">
            {result.risks.map((risk, i) => (
              <div key={i} className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
                <p className="text-sm text-gray-600">{risk}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Link
            href="/contact-us/"
            className="c-button c-btn-primary c-btn-medium inline-flex items-center justify-center gap-2"
          >
            Get a Migration Cost Estimate <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={() => { setResult(null); setStep(0); setFormData({ sourceStack: "", dataVolume: "", teamSize: "", target: "" }); }}
            className="text-themeColor font-medium text-sm hover:underline"
          >
            Recalculate
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-navyBlue">Migration Complexity Calculator</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-sm">Close</button>
      </div>

      <div className="flex gap-2">
        {stepConfigs.map((s, i) => (
          <div key={i} className="flex-1">
            <div className={`h-1.5 rounded-full transition-all ${i <= step ? "bg-themeColor" : "bg-gray-200"}`} />
            <span className="text-xs text-gray-400 mt-1 block">{s.label}</span>
          </div>
        ))}
      </div>

      {stepConfigs[step].content}

      <div className="flex justify-between pt-4">
        <button
          onClick={() => setStep(step - 1)}
          className={`flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-navyBlue ${step === 0 ? "invisible" : ""}`}
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        {step === stepConfigs.length - 1 && formData.target && (
          <button onClick={calculate} className="c-button c-btn-primary c-btn-medium inline-flex items-center gap-2">
            Calculate <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MigrationComplexityCalculator;
