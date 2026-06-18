"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  DollarSign,
  AlertTriangle,
  TrendingDown,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const CREDIT_COST = {
  snowflake: { XS: 1, S: 2, M: 4, L: 8, XL: 16, "2XL": 32, "3XL": 64, "4XL": 128 },
  databricks: { XS: 0.07, S: 0.22, M: 0.44, L: 0.88, XL: 1.76, "2XL": 3.52, "3XL": 7.04, "4XL": 14.08 },
};

const WAREHOUSE_SIZES = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"];

const SnowflakeDatabricksCostEstimator = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    platform: "",
    warehouseSize: "",
    hoursPerDay: 8,
    daysPerWeek: 5,
    teamCount: 1,
    autoSuspendMinutes: 5,
  });
  const [result, setResult] = useState(null);

  const calculateCost = () => {
    const { platform, warehouseSize, hoursPerDay, daysPerWeek, teamCount, autoSuspendMinutes } = formData;
    const creditRate = platform === "snowflake" ? 3.0 : 0.55;
    const creditsPerHour = CREDIT_COST[platform][warehouseSize];
    const monthlyHours = hoursPerDay * daysPerWeek * 4.33;
    const totalCreditsPerWarehouse = creditsPerHour * monthlyHours;
    const totalCredits = totalCreditsPerWarehouse * teamCount;
    const monthlyCost = totalCredits * creditRate;

    const idleWastePercent = autoSuspendMinutes > 5 ? Math.min(35, (autoSuspendMinutes - 5) * 3) : 0;
    const oversizeWaste = ["XL", "2XL", "3XL", "4XL"].includes(warehouseSize) && hoursPerDay < 6 ? 20 : 0;
    const totalWastePercent = Math.min(50, idleWastePercent + oversizeWaste);
    const wastedSpend = monthlyCost * (totalWastePercent / 100);

    setResult({
      monthlyCost: Math.round(monthlyCost),
      annualCost: Math.round(monthlyCost * 12),
      wastedSpend: Math.round(wastedSpend),
      wastedAnnual: Math.round(wastedSpend * 12),
      totalWastePercent,
      creditsPerMonth: Math.round(totalCredits),
    });
  };

  const steps = [
    {
      label: "Platform",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-navyBlue">Which platform are you on?</h3>
          {["snowflake", "databricks"].map((p) => (
            <button
              key={p}
              onClick={() => { setFormData({ ...formData, platform: p }); setStep(1); }}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                formData.platform === p
                  ? "border-themeColor bg-themeLight"
                  : "border-gray-200 hover:border-themeColor/40"
              }`}
            >
              <span className="font-semibold capitalize text-navyBlue">{p}</span>
              <p className="text-sm text-gray-500 mt-1">
                {p === "snowflake" ? "Credit-based pricing per second" : "DBU-based pricing per cluster"}
              </p>
            </button>
          ))}
        </div>
      ),
    },
    {
      label: "Warehouse",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-navyBlue">Primary warehouse size?</h3>
          <div className="grid grid-cols-4 gap-3">
            {WAREHOUSE_SIZES.map((size) => (
              <button
                key={size}
                onClick={() => setFormData({ ...formData, warehouseSize: size })}
                className={`p-3 rounded-lg border-2 text-center font-medium transition-all ${
                  formData.warehouseSize === size
                    ? "border-themeColor bg-themeLight text-themeColor"
                    : "border-gray-200 hover:border-themeColor/40 text-navyBlue"
                }`}
              >
                {size}
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
          <h3 className="text-xl font-semibold text-navyBlue">Usage details</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hours per day: <span className="text-themeColor font-bold">{formData.hoursPerDay}h</span>
            </label>
            <input
              type="range"
              min="1"
              max="24"
              value={formData.hoursPerDay}
              onChange={(e) => setFormData({ ...formData, hoursPerDay: parseInt(e.target.value) })}
              className="w-full accent-themeColor"
            />
            <div className="flex justify-between text-xs text-gray-400"><span>1h</span><span>24h</span></div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Days per week: <span className="text-themeColor font-bold">{formData.daysPerWeek}</span>
            </label>
            <input
              type="range"
              min="1"
              max="7"
              value={formData.daysPerWeek}
              onChange={(e) => setFormData({ ...formData, daysPerWeek: parseInt(e.target.value) })}
              className="w-full accent-themeColor"
            />
            <div className="flex justify-between text-xs text-gray-400"><span>1 day</span><span>7 days</span></div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of warehouses / clusters: <span className="text-themeColor font-bold">{formData.teamCount}</span>
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={formData.teamCount}
              onChange={(e) => setFormData({ ...formData, teamCount: parseInt(e.target.value) })}
              className="w-full accent-themeColor"
            />
            <div className="flex justify-between text-xs text-gray-400"><span>1</span><span>20</span></div>
          </div>
        </div>
      ),
    },
    {
      label: "Auto-suspend",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-navyBlue">Auto-suspend setting (minutes)</h3>
          <p className="text-gray-500 text-sm">How long before idle warehouses shut down?</p>
          <div className="grid grid-cols-3 gap-3">
            {[1, 5, 10, 15, 30, 60].map((mins) => (
              <button
                key={mins}
                onClick={() => setFormData({ ...formData, autoSuspendMinutes: mins })}
                className={`p-3 rounded-lg border-2 text-center transition-all ${
                  formData.autoSuspendMinutes === mins
                    ? "border-themeColor bg-themeLight text-themeColor font-semibold"
                    : "border-gray-200 hover:border-themeColor/40 text-navyBlue"
                }`}
              >
                {mins} min
              </button>
            ))}
          </div>
        </div>
      ),
    },
  ];

  if (result) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-navyBlue">Your Cost Estimate</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-sm">Close</button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-themeColor" />
              <span className="text-sm text-gray-500">Monthly Spend</span>
            </div>
            <p className="text-3xl font-bold text-navyBlue">${result.monthlyCost.toLocaleString()}</p>
            <p className="text-sm text-gray-400 mt-1">${result.annualCost.toLocaleString()} / year</p>
          </div>

          <div className={`rounded-xl p-6 border shadow-sm ${
            result.totalWastePercent > 15 ? "bg-red-50 border-red-200" : "bg-green-50 border-green-200"
          }`}>
            <div className="flex items-center gap-2 mb-2">
              {result.totalWastePercent > 15
                ? <AlertTriangle className="w-5 h-5 text-red-500" />
                : <CheckCircle className="w-5 h-5 text-green-500" />
              }
              <span className="text-sm text-gray-500">Estimated Waste</span>
            </div>
            <p className={`text-3xl font-bold ${result.totalWastePercent > 15 ? "text-red-600" : "text-green-600"}`}>
              ${result.wastedSpend.toLocaleString()}/mo
            </p>
            <p className="text-sm text-gray-400 mt-1">
              {result.totalWastePercent}% of spend · ${result.wastedAnnual.toLocaleString()}/yr wasted
            </p>
          </div>
        </div>

        {result.totalWastePercent > 10 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <TrendingDown className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-amber-800">You could save ${result.wastedAnnual.toLocaleString()}/year</p>
                <p className="text-sm text-amber-700 mt-1">
                  Common fixes: lower auto-suspend to 1-5 min, right-size warehouses, schedule off-hours suspension. We can audit your setup in a free 30-min session.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Link
            href="/contact-us/"
            className="c-button c-btn-primary c-btn-medium inline-flex items-center justify-center gap-2"
          >
            Get a Free Cost Teardown <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={() => { setResult(null); setStep(0); setFormData({ ...formData, platform: "" }); }}
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
        <h3 className="text-2xl font-bold text-navyBlue">Snowflake & Databricks Cost Estimator</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-sm">Close</button>
      </div>

      {/* Progress */}
      <div className="flex gap-2">
        {steps.map((s, i) => (
          <div key={i} className="flex-1">
            <div className={`h-1.5 rounded-full transition-all ${i <= step ? "bg-themeColor" : "bg-gray-200"}`} />
            <span className="text-xs text-gray-400 mt-1 block">{s.label}</span>
          </div>
        ))}
      </div>

      {steps[step].content}

      <div className="flex justify-between pt-4">
        <button
          onClick={() => setStep(step - 1)}
          className={`flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-navyBlue ${step === 0 ? "invisible" : ""}`}
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        {step < steps.length - 1 ? (
          <button
            onClick={() => setStep(step + 1)}
            disabled={step === 0 && !formData.platform || step === 1 && !formData.warehouseSize}
            className="flex items-center gap-1 text-sm font-medium text-themeColor hover:text-themeColor/80 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={calculateCost}
            className="c-button c-btn-primary c-btn-medium inline-flex items-center gap-2"
          >
            Calculate Cost <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SnowflakeDatabricksCostEstimator;
