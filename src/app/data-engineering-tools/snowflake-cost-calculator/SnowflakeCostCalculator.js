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

const CREDIT_RATES = {
  XS: { credits: 1, label: "X-Small (1 credit/hr)" },
  S: { credits: 2, label: "Small (2 credits/hr)" },
  M: { credits: 4, label: "Medium (4 credits/hr)" },
  L: { credits: 8, label: "Large (8 credits/hr)" },
  XL: { credits: 16, label: "X-Large (16 credits/hr)" },
  "2XL": { credits: 32, label: "2X-Large (32 credits/hr)" },
  "3XL": { credits: 64, label: "3X-Large (64 credits/hr)" },
  "4XL": { credits: 128, label: "4X-Large (128 credits/hr)" },
};

const WAREHOUSE_SIZES = Object.keys(CREDIT_RATES);

const STORAGE_COST_PER_TB = 23;

const EDITIONS = ["standard", "enterprise", "businessCritical"];
const EDITION_LABELS = {
  standard: "Standard",
  enterprise: "Enterprise",
  businessCritical: "Business Critical",
};

const US = { standard: 2.0, enterprise: 3.0, businessCritical: 4.0 };
const CA = { standard: 2.25, enterprise: 3.5, businessCritical: 4.5 };
const EU = { standard: 2.3, enterprise: 3.5, businessCritical: 4.6 };
const EU_H = { standard: 2.5, enterprise: 3.7, businessCritical: 4.95 };
const AP = { standard: 2.5, enterprise: 3.7, businessCritical: 4.95 };
const AP_H = { standard: 2.8, enterprise: 4.0, businessCritical: 5.3 };
const ME = { standard: 2.8, enterprise: 4.1, businessCritical: 5.5 };
const AF = { standard: 2.8, enterprise: 4.1, businessCritical: 5.5 };
const SA = { standard: 2.5, enterprise: 3.7, businessCritical: 4.95 };

const r = (id, label, group, prices, storage = 23) => ({
  id,
  label,
  group,
  prices,
  storage,
});

const REGIONS = {
  AWS: [
    r("aws-af-cape-town", "Africa (Cape Town)", "Africa", AF, 28),
    r("aws-ap-mumbai", "AP Mumbai", "Asia", AP, 25),
    r("aws-ap-northeast-1", "AP Northeast 1 (Tokyo)", "Asia", AP_H, 27),
    r("aws-ap-singapore", "AP Singapore", "Asia", AP, 25),
    r("aws-ap-jakarta", "Asia Pacific (Jakarta)", "Asia", AP, 25),
    r("aws-ap-malaysia", "Asia Pacific (Malaysia)", "Asia", AP, 25),
    r("aws-ap-osaka", "Asia Pacific (Osaka)", "Asia", AP_H, 27),
    r("aws-ap-seoul", "Asia Pacific (Seoul)", "Asia", AP, 25),
    r("aws-ap-thailand", "Asia Pacific (Thailand)", "Asia", AP, 25),
    r("aws-me-uae", "Middle East (UAE)", "Asia", ME, 28),
    r("aws-eu-paris", "EU (Paris)", "Europe", EU, 25),
    r("aws-eu-zurich", "EU (Zurich)", "Europe", EU_H, 28),
    r("aws-eu-dublin", "EU Dublin", "Europe", EU, 25),
    r("aws-eu-frankfurt", "EU Frankfurt", "Europe", EU_H, 25),
    r("aws-eu-london", "Europe (London)", "Europe", EU, 25),
    r("aws-eu-stockholm", "Europe (Stockholm)", "Europe", EU, 25),
    r("aws-ca-central", "Canada Central", "North America", CA, 25),
    r("aws-us-east-1", "US East (Northern Virginia)", "North America", US),
    r("aws-us-east-1-gov", "US East 1 Commercial Gov", "North America", US),
    r("aws-us-east-2", "US East 2 (Ohio)", "North America", US),
    r(
      "aws-us-gov-east-1-fh",
      "US Gov East 1 (Fedramp High Plus)",
      "North America",
      US,
    ),
    r("aws-us-gov-west-1", "US Gov West 1", "North America", US),
    r("aws-us-gov-west-1-dod", "US Gov West 1 (DoD)", "North America", US),
    r(
      "aws-us-gov-west-1-fh",
      "US Gov West 1 (Fedramp High Plus)",
      "North America",
      US,
    ),
    r(
      "aws-us-west-gov-or",
      "US West (Commercial Gov - Oregon)",
      "North America",
      US,
    ),
    r("aws-us-west-2", "US West (Oregon)", "North America", US),
    r("aws-ap-sydney", "AP Sydney", "Oceania", AP, 25),
    r("aws-ap-nz", "Asia Pacific (New Zealand)", "Oceania", AP, 25),
    r(
      "aws-sa-east-1",
      "South America East 1 (São Paulo)",
      "South America",
      SA,
      28,
    ),
  ],
  Azure: [
    r("azure-central-india", "Central India (Pune)", "Asia", AP, 25),
    r("azure-japan-east", "Japan East (Tokyo)", "Asia", AP_H, 27),
    r("azure-korea-central", "Korea Central", "Asia", AP, 25),
    r("azure-southeast-asia", "Southeast Asia (Singapore)", "Asia", AP, 25),
    r("azure-uae-north", "UAE North (Dubai)", "Asia", ME, 28),
    r("azure-north-europe", "North Europe (Ireland)", "Europe", EU, 25),
    r("azure-sweden-central", "Sweden Central", "Europe", EU, 25),
    r("azure-switzerland-north", "Switzerland North", "Europe", EU_H, 28),
    r("azure-uk-south", "UK South (London)", "Europe", EU, 25),
    r("azure-west-europe", "West Europe (Netherlands)", "Europe", EU, 25),
    r(
      "azure-canada-central",
      "Canada Central (Toronto)",
      "North America",
      CA,
      25,
    ),
    r("azure-central-us", "Central US (Iowa)", "North America", US),
    r("azure-east-us", "East US", "North America", US),
    r("azure-east-us-2", "East US 2 (Virginia)", "North America", US),
    r("azure-mexico-central", "Mexico Central", "North America", CA, 25),
    r(
      "azure-south-central-us",
      "South Central US (Texas)",
      "North America",
      US,
    ),
    r("azure-us-gov-virginia", "US Gov Virginia", "North America", US),
    r(
      "azure-us-gov-virginia-fh",
      "US Gov Virginia (Fed Ramp High Plus)",
      "North America",
      US,
    ),
    r("azure-west-us-2", "West US 2 (Washington)", "North America", US),
    r(
      "azure-australia-east",
      "Australia East (New South Wales)",
      "Oceania",
      AP,
      25,
    ),
  ],
  GCP: [
    r("gcp-me-central-2", "Middle East Central 2 (Dammam)", "Asia", ME, 28),
    r("gcp-europe-west2", "Europe West 2 (London)", "Europe", EU, 25),
    r("gcp-europe-west3", "Europe West 3 (Frankfurt)", "Europe", EU_H, 25),
    r("gcp-europe-west4", "Europe West 4 (Netherlands)", "Europe", EU, 25),
    r("gcp-us-central1", "US Central 1 (Iowa)", "North America", US),
    r("gcp-us-east4", "US East 4 (N. Virginia)", "North America", US),
    r(
      "gcp-australia-se2",
      "Australia Southeast 2 (Melbourne)",
      "Oceania",
      AP,
      25,
    ),
  ],
};

const PROVIDERS = Object.keys(REGIONS);

const FAQ_DATA = [
  {
    q: "Is Snowflake expensive?",
    a: "Snowflake uses consumption-based pricing, so your costs depend on how much compute and storage you use. Well-optimized environments can remain cost-effective, while inefficient warehouse usage can quickly increase monthly spending.",
  },
  {
    q: "How is Snowflake billing actually calculated?",
    a: "Snowflake charges separately for compute and storage. Compute is measured in credits consumed by virtual warehouses, while storage costs are based on the amount of data stored each month.",
  },
  {
    q: "How accurate is this Snowflake cost calculator?",
    a: "This calculator provides an estimate based on the information you enter. Your actual bill may differ depending on workload behavior, query performance, cloud services, and your negotiated Snowflake pricing.",
  },
  {
    q: "What is the difference between a Snowflake cost calculator and a Snowflake cost estimator?",
    a: "Both estimate your expected Snowflake spending using similar inputs. A calculator typically generates an instant estimate, while an estimator refers to the same forecasting process.",
  },
  {
    q: "How much can Snowflake costs realistically be reduced?",
    a: "Many organizations reduce costs by optimizing warehouse sizes, enabling auto-suspend, improving query performance, and eliminating unnecessary compute usage. The biggest savings usually come from improving how Snowflake resources are used rather than reducing workloads.",
  },
];

const SnowflakeCostCalculator = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    provider: "",
    region: "",
    edition: "enterprise",
    warehouseSize: "",
    hoursPerDay: 8,
    daysPerWeek: 5,
    warehouseCount: 2,
    storageTB: 5,
    autoSuspendMinutes: 5,
  });
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  const selectedRegion =
    formData.provider && formData.region
      ? REGIONS[formData.provider]?.find((r) => r.id === formData.region)
      : null;

  const creditPrice = selectedRegion
    ? selectedRegion.prices[formData.edition]
    : 0;

  const storagePricePerTB = selectedRegion
    ? selectedRegion.storage
    : STORAGE_COST_PER_TB;

  const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  const calculateCost = async () => {
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    setIsSubmitting(true);

    const {
      warehouseSize,
      hoursPerDay,
      daysPerWeek,
      warehouseCount,
      storageTB,
      autoSuspendMinutes,
      provider,
      edition,
    } = formData;
    const creditsPerHour = CREDIT_RATES[warehouseSize].credits;
    const monthlyHours = hoursPerDay * daysPerWeek * 4.33;
    const totalCredits = creditsPerHour * monthlyHours * warehouseCount;
    const computeCost = totalCredits * creditPrice;
    const storageCost = storageTB * storagePricePerTB;
    const monthlyCost = computeCost + storageCost;

    const idleWastePercent =
      autoSuspendMinutes > 5 ? Math.min(35, (autoSuspendMinutes - 5) * 3) : 0;
    const oversizeWaste =
      ["XL", "2XL", "3XL", "4XL"].includes(warehouseSize) && hoursPerDay < 6
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
          page: "/data-engineering-tools/snowflake-cost-calculator/",
          toolFormData: {
            Provider: provider,
            Region: selectedRegion?.label,
            Edition: EDITION_LABELS[edition],
            "Credit Price": `$${creditPrice.toFixed(2)}`,
            "Warehouse Size": warehouseSize,
            "Hours/Day": hoursPerDay,
            "Days/Week": daysPerWeek,
            Warehouses: warehouseCount,
            "Storage (TB)": storageTB,
            "Auto-Suspend": `${autoSuspendMinutes} min`,
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
      computeCost: Math.round(computeCost),
      storageCost: Math.round(storageCost),
      creditsPerMonth: Math.round(totalCredits),
      wastedSpend: Math.round(wastedSpend),
      wastedAnnual: Math.round(wastedSpend * 12),
      totalWastePercent,
    });
  };

  const canProceed = () => {
    if (step === 0 && (!formData.provider || !formData.region)) return false;
    if (step === 1 && !formData.warehouseSize) return false;
    return true;
  };

  const steps = [
    {
      label: "Provider & Region",
      content: (
        <div className="space-y-5">
          <h3 className="text-xl font-semibold text-navyBlue">
            Where does your Snowflake run?
          </h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cloud Provider *
            </label>
            <div className="grid grid-cols-3 gap-3">
              {PROVIDERS.map((p) => (
                <button
                  key={p}
                  onClick={() =>
                    setFormData({ ...formData, provider: p, region: "" })
                  }
                  className={`p-3 rounded-lg border-2 text-center font-medium transition-all ${
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
          {formData.provider && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Region *
              </label>
              <select
                value={formData.region}
                onChange={(e) =>
                  setFormData({ ...formData, region: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 text-sm font-medium bg-white focus:outline-none focus:border-themeColor cursor-pointer"
              >
                <option value="">Select a region</option>
                {Object.entries(
                  REGIONS[formData.provider].reduce((groups, reg) => {
                    (groups[reg.group] = groups[reg.group] || []).push(reg);
                    return groups;
                  }, {}),
                ).map(([group, regions]) => (
                  <optgroup key={group} label={group}>
                    {regions.map((reg) => (
                      <option key={reg.id} value={reg.id}>
                        {reg.label}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              {selectedRegion && (
                <p className="text-xs text-gray-400 mt-2">
                  Credit pricing for this region: Standard $
                  {selectedRegion.prices.standard.toFixed(2)} &middot;
                  Enterprise ${selectedRegion.prices.enterprise.toFixed(2)}{" "}
                  &middot; Business Critical $
                  {selectedRegion.prices.businessCritical.toFixed(2)}
                </p>
              )}
            </div>
          )}
        </div>
      ),
    },
    {
      label: "Warehouse",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-navyBlue">
            What is your primary warehouse size?
          </h3>
          <p className="text-gray-500 text-sm">
            Select the Snowflake warehouse size you use most often.
          </p>
          <div className="grid grid-cols-4 gap-3">
            {WAREHOUSE_SIZES.map((size) => (
              <button
                key={size}
                onClick={() =>
                  setFormData({ ...formData, warehouseSize: size })
                }
                className={`p-3 rounded-lg border-2 text-center transition-all ${
                  formData.warehouseSize === size
                    ? "border-themeColor bg-blue-50 text-themeColor font-semibold"
                    : "border-gray-200 hover:border-themeColor/40 text-navyBlue"
                }`}
              >
                <span className="block font-medium">{size}</span>
                <span className="block text-xs text-gray-400 mt-1">
                  {CREDIT_RATES[size].credits} cr/hr
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
              Number of warehouses:{" "}
              <span className="text-themeColor font-bold">
                {formData.warehouseCount}
              </span>
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={formData.warehouseCount}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  warehouseCount: parseInt(e.target.value),
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
      label: "Storage & Config",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-navyBlue">
            Storage, edition &amp; auto-suspend
          </h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Snowflake Edition
            </label>
            <div className="grid grid-cols-3 gap-3">
              {EDITIONS.map((ed) => (
                <button
                  key={ed}
                  onClick={() => setFormData({ ...formData, edition: ed })}
                  className={`p-3 rounded-lg border-2 text-center transition-all ${
                    formData.edition === ed
                      ? "border-themeColor bg-blue-50 text-themeColor font-semibold"
                      : "border-gray-200 hover:border-themeColor/40 text-navyBlue"
                  }`}
                >
                  <span className="block text-sm font-medium">
                    {EDITION_LABELS[ed]}
                  </span>
                  {selectedRegion && (
                    <span className="block text-xs text-gray-400 mt-1">
                      ${selectedRegion.prices[ed].toFixed(2)}/credit
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Storage (TB):{" "}
              <span className="text-themeColor font-bold">
                {formData.storageTB} TB
              </span>
            </label>
            <input
              type="range"
              min="0"
              max="200"
              value={formData.storageTB}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  storageTB: parseInt(e.target.value),
                })
              }
              className="w-full accent-themeColor"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>0 TB</span>
              <span>200 TB</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Auto-suspend
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[1, 5, 10, 15, 30, 60].map((mins) => (
                <button
                  key={mins}
                  onClick={() =>
                    setFormData({ ...formData, autoSuspendMinutes: mins })
                  }
                  className={`p-3 rounded-lg border-2 text-center transition-all ${
                    formData.autoSuspendMinutes === mins
                      ? "border-themeColor bg-blue-50 text-themeColor font-semibold"
                      : "border-gray-200 hover:border-themeColor/40 text-navyBlue"
                  }`}
                >
                  {mins} min
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2">
              How many minutes before idle warehouses shut down? Lower is better
              for cost.
            </p>
          </div>
        </div>
      ),
    },
    {
      label: "Get Estimate",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-navyBlue">
            Enter your work email to see your Snowflake cost breakdown.
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
            text="Snowflake Cost Calculator"
          />

          <p className="text-gray-400 lg:text-lg md:text-base text-base !mt-6 max-w-[600px] leading-relaxed">
            Estimate your monthly Snowflake spend by warehouse size, runtime,
            and storage. Then see how much of it you could cut.
          </p>

          <div className="mt-8">
            <a
              href="#calculator"
              className="w-fit c-button c-btn-primary c-btn-medium inline-flex items-center gap-2 hover:!text-colorWhite"
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
              Snowflake Cost Calculator
            </span>
          </nav>
        </div>
      </div>

      {/* Calculator */}
      <section id="calculator" className="bg-[#f8f9ff] py-12 md:py-16">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          {!result ? (
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg shadow-gray-200/60 overflow-hidden">
              {/* Header */}
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

              {/* Step content */}
              <div className="px-6 md:px-10 py-8">{steps[step].content}</div>

              {/* Navigation */}
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
                  Your Snowflake Cost Estimate
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
                      region: "",
                      warehouseSize: "",
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
                        result.totalWastePercent > 15
                          ? "bg-red-50"
                          : "bg-green-50"
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
                      result.totalWastePercent > 15
                        ? "text-red-600"
                        : "text-green-600"
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
                        Compute
                      </span>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        Warehouse size &times; active hours &times; count.
                        Usually the largest line item.
                      </p>
                    </div>
                    <span className="text-sm font-bold text-navyBlue whitespace-nowrap">
                      ${result.computeCost.toLocaleString()}/mo
                    </span>
                  </div>
                  <div className="border-t border-gray-100" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-sm font-semibold text-navyBlue">
                        Storage
                      </span>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        ~$23/TB/month on-demand for all data stored in
                        Snowflake.
                      </p>
                    </div>
                    <span className="text-sm font-bold text-navyBlue whitespace-nowrap">
                      ${result.storageCost.toLocaleString()}/mo
                    </span>
                  </div>
                  <div className="border-t border-gray-100" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-sm font-semibold text-navyBlue">
                        Credits / month
                      </span>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        Total credits across all warehouses. Credits &times;
                        price = compute cost.
                      </p>
                    </div>
                    <span className="text-sm font-bold text-navyBlue whitespace-nowrap">
                      {result.creditsPerMonth.toLocaleString()}
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
                        You could save ${result.wastedAnnual.toLocaleString()}
                        /year
                      </p>
                      <p className="text-sm text-amber-700 mt-1 leading-relaxed">
                        Common fixes: lower auto-suspend to 1&ndash;5 min,
                        right-size warehouses, schedule off-hours suspension. We
                        can audit your setup in a free 30-min session.
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
                    That Snowflake bill higher than you expected?
                  </h3>
                  <p className="text-white/60 text-[15px] max-w-3xl leading-relaxed">
                    Our Snowflake Cost Optimization Audit identifies where your
                    compute spend is going and highlights practical ways to
                    reduce unnecessary costs without affecting performance.
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
                      <span>Get a Cost Audit</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-400 text-center pt-1">
                Estimates only. Actual Snowflake billing depends on query
                patterns, auto-suspend settings, cloud services usage, and your
                contract pricing.
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
              text="How the Snowflake Cost Calculator Works"
            />
            <p className="text-[16.5px] text-gray-500 leading-relaxed">
              This Snowflake cost calculator estimates your monthly warehouse
              costs using the same core factors that drive Snowflake pricing.
              Warehouse size, daily runtime, the number of warehouses, storage,
              and your credit price all contribute to your overall monthly
              spend. Adjusting these values gives you a quick estimate of what
              your Snowflake environment could cost before your next invoice
              arrives.
            </p>
            <p className="text-[16.5px] text-gray-500 leading-relaxed mt-4">
              While this Snowflake cost estimator provides a reliable estimate,
              actual costs can vary based on workload patterns, auto-suspend
              settings, cloud services usage, data transfer, and query
              efficiency. The goal is to help data teams understand where costs
              originate and provide a starting point for better budgeting and
              Snowflake cost optimization.
            </p>
          </div>

          <div>
            <Heading
              type="h2"
              className="!font-extrabold text-gray-900 mb-4"
              text="Where Snowflake Costs Usually Leak"
            />
            <p className="text-[16.5px] text-gray-500 leading-relaxed mb-6">
              When we review Snowflake environments, the same cost issues appear
              again and again.
            </p>
            <ul className="space-y-0">
              {[
                {
                  title: "Oversized warehouses",
                  text: "Large warehouses often run workloads that could perform just as well on smaller compute sizes, consuming more credits than necessary.",
                },
                {
                  title: "Warehouses left running",
                  text: "Idle warehouses continue using credits if auto-suspend is not configured correctly. This is one of the easiest ways to reduce monthly costs.",
                },
                {
                  title: "Inefficient queries",
                  text: "Queries that scan unnecessary data increase compute time and warehouse usage, especially as datasets continue to grow.",
                },
                {
                  title: "Poor warehouse management",
                  text: "Running multiple warehouses for inconsistent workloads can lead to low utilization and unnecessary compute costs.",
                },
                {
                  title: "Always-on development environments",
                  text: "Development and testing warehouses are frequently left running after working hours, quietly increasing monthly spend.",
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
              Everything you need to know about Snowflake costs and how to
              estimate them.
            </p>
          </div>
          <div className="mx-auto" style={{ maxWidth: 860 }}>
            {FAQ_DATA.map((item, i) => (
              <GradientFAQAccordion
                key={i + 1}
                id={`snowflake-faq-${i + 1}`}
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
              SNOWFLAKE COST OPTIMIZATION
            </span>
            <Heading
              type="h2"
              className="!font-extrabold text-gray-900 mb-3"
              text="Spending More Than Expected?"
            />
            <p className="text-[17px] text-gray-500 max-w-[560px] mx-auto">
              We&apos;ll identify where your Snowflake costs are coming from and
              where you can reduce unnecessary spend.
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
                <span>Cut Costs</span>
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

export default SnowflakeCostCalculator;
