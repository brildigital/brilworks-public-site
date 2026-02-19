"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  AlertCircle,
  Award,
  Calculator,
  DollarSign,
  Download,
  Loader2,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import {
  getStatusColorForSaasMetric,
  getStatusIconForSaasMetric,
  hasSubmittedForm,
} from "../lib/commonFunction";
import {
  calculateSaaSMetrics,
  formatCurrencyForCostBreakdown,
} from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const SaaSMetricsCalculator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const [formData, setFormData] = useState({
    monthlyRevenue: 50000,
    totalCustomers: 500,
    monthlyChurnRate: 0.05,
    monthlyAcquisitionCost: 500,
    averageContractValue: 100,
    description: "",
  });
  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.monthlyRevenue &&
      formData?.totalCustomers &&
      formData?.monthlyChurnRate &&
      formData?.monthlyAcquisitionCost &&
      formData?.averageContractValue &&
      formData?.description
    );
  };

  const handleCalculate = async () => {
    if (!isFormValid()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields before calculating.",
        variant: "destructive",
      });
      return;
    }

    setIsCalculating(true);

    const resultData = calculateSaaSMetrics(formData);

    setTimeout(() => {
      setResult(resultData);
      setIsCalculating(false);
      if (!hasVisited) {
        setOpenPopup(true);
      }
    }, 1500);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleExportReport = () => {
    if (!result) return;

    const reportContent = `
SAAS METRICS CALCULATOR REPORT
Generated: ${new Date().toLocaleDateString()}

INPUT PARAMETERS:
- Monthly Revenue: ${formatCurrencyForCostBreakdown(formData.monthlyRevenue)}
- Total Customers: ${formData.totalCustomers.toLocaleString()}
- Monthly Churn Rate: ${(formData.monthlyChurnRate * 100).toFixed(2)}%
- Monthly Acquisition Cost: ${formatCurrencyForCostBreakdown(formData.monthlyAcquisitionCost)}
- Average Contract Value: ${formatCurrencyForCostBreakdown(formData.averageContractValue)}
- Description: ${formData.description}

CALCULATED METRICS:
- MRR (Monthly Recurring Revenue): ${formatCurrencyForCostBreakdown(result.mrr)}
- ARR (Annual Recurring Revenue): ${formatCurrencyForCostBreakdown(result.arr)}
- CAC (Customer Acquisition Cost): ${formatCurrencyForCostBreakdown(result.cac)}
- LTV (Customer Lifetime Value): ${formatCurrencyForCostBreakdown(result.ltv)}
- LTV:CAC Ratio: ${result.ltcRatio}x
- CAC Payback Period: ${result.cacPaybackPeriod.toFixed(2)} months
- Monthly Growth Rate: ${result.monthlyGrowthRate.toFixed(2)}%
- Customer Retention Rate: ${result.customerRetentionRate}%
- Revenue Churn Rate: ${result.revenueChurnRate}%
- Annual Runway: ${result.annualRunway} months

INSIGHTS:
${result.insights.map((insight) => `- ${insight.title} [${insight.status.toUpperCase()}]: ${insight.message}`).join("\n")}

RECOMMENDATIONS:
${result.recommendations.map((rec, idx) => `${idx + 1}. ${rec}`).join("\n")}

DETECTED KEYWORDS: ${result.keywords.length > 0 ? result.keywords.join(", ") : "None"}
    `;

    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(reportContent)
    );
    element.setAttribute("download", "saas-metrics-report.txt");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  useEffect(() => {
    setHasVisited(hasSubmittedForm(pathname));
  }, [pathname, openPopup]);

  useEffect(() => {
    const hasVisitedPage = hasSubmittedForm(pathname);
    if (!hasVisitedPage && result && !isCalculating) {
      setOpenPopup(true);
    }
  }, [result]);

  return (
    <>
      <ToolHerosection
        title={
          <>
            Understand Your &nbsp;
            <br className="block" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              SaaS Metrics&nbsp;
            </span>
            Instantly
          </>
        }
        buttonText="Calculate Now"
        description="Used by 2000+ SaaS Companies Understand Your SaaS Metrics Instantly Track, analyze, and optimize your SaaS business metrics including MRR, ARR, CAC, LTV, churn rate, and more. Make data-driven decisions to accelerate growth."
        imageSrc="/images/v2/saas-metric-calculator-banner.webp"
        highlights={[
          {
            icon: TrendingUp,
            color: "text-green-600",
            title: "30%",
            description: "Avg Growth Improvement",
          },
          {
            icon: Award,
            color: "text-orange-600",
            title: "2000+",
            description: "Used by SaaS Companies",
          },
          {
            icon: Users,
            color: "text-indigo-300",
            title: "100K+",
            description: (
              <>
                Calculations
                <br /> Performed
              </>
            ),
          },
        ]}
      />
      <ToolHowToUse />
      <ToolFeatures />

      <section
        id="price-estimate"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent mb-4">
              Interactive Metrics Calculator
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Enter your SaaS business data and get a comprehensive analysis of
              your key metrics and health indicators.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-2">
                Your Metrics
              </h2>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Monthly Revenue (Your current MRR in $) *
                </label>

                <input
                  id="monthlyRevenue"
                  type="number"
                  className="w-full border rounded-lg p-3 bg-white"
                  value={formData.monthlyRevenue}
                  onChange={(e) =>
                    handleInputChange("monthlyRevenue", e.target.value)
                  }
                  min="1"
                  onKeyDown={(e) => {
                    if (
                      e.key === "e" ||
                      e.key === "E" ||
                      e.key === "+" ||
                      e.key === "-"
                    ) {
                      e.preventDefault(); // 🚫 block these keys
                    }
                  }}
                />
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Total Customers *
                </label>
                <input
                  id="totalCustomers"
                  type="number"
                  className="w-full border rounded-lg p-3 bg-white"
                  value={formData.totalCustomers}
                  onChange={(e) =>
                    handleInputChange("totalCustomers", e.target.value)
                  }
                  min="1"
                  onKeyDown={(e) => {
                    if (
                      e.key === "e" ||
                      e.key === "E" ||
                      e.key === "+" ||
                      e.key === "-"
                    ) {
                      e.preventDefault(); // 🚫 block these keys
                    }
                  }}
                />
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                <div className="space-y-1">
                  <label className="font-medium text-gray-700">
                    Monthly Churn Rate(in %) *
                  </label>
                  <input
                    id="monthlyChurnRate"
                    type="number"
                    className="w-full border rounded-lg p-3 bg-white"
                    value={formData.monthlyChurnRate}
                    onChange={(e) =>
                      handleInputChange("monthlyChurnRate", e.target.value)
                    }
                    min="1"
                    onKeyDown={(e) => {
                      if (
                        e.key === "e" ||
                        e.key === "E" ||
                        e.key === "+" ||
                        e.key === "-"
                      ) {
                        e.preventDefault(); // 🚫 block these keys
                      }
                    }}
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-medium text-gray-700">
                    Avg Contract Value (in $) *
                  </label>
                  <input
                    id="averageContractValue"
                    type="number"
                    className="w-full border rounded-lg p-3 bg-white"
                    value={formData.averageContractValue}
                    onChange={(e) =>
                      handleInputChange("averageContractValue", e.target.value)
                    }
                    min="1"
                    onKeyDown={(e) => {
                      if (
                        e.key === "e" ||
                        e.key === "E" ||
                        e.key === "+" ||
                        e.key === "-"
                      ) {
                        e.preventDefault(); // 🚫 block these keys
                      }
                    }}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Monthly Acquisition Cost *
                </label>
                <input
                  id="monthlyAcquisitionCost"
                  type="number"
                  className="w-full border rounded-lg p-3 bg-white"
                  value={formData.monthlyAcquisitionCost}
                  onChange={(e) =>
                    handleInputChange("monthlyAcquisitionCost", e.target.value)
                  }
                  min="1"
                  onKeyDown={(e) => {
                    if (
                      e.key === "e" ||
                      e.key === "E" ||
                      e.key === "+" ||
                      e.key === "-"
                    ) {
                      e.preventDefault(); // 🚫 block these keys
                    }
                  }}
                />
              </div>

              {/* Project Description */}
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Business Description
                </label>
                <textarea
                  value={formData?.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Describe your SaaS business, e.g., 'Enterprise B2B SaaS with annual contracts, focusing on customer retention and expansion revenue'"
                  rows={3}
                  className="w-full border rounded-lg p-3 bg-white"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Keywords like: enterprise, startup, growth, scale, retention,
                  seasonal, marketplace, freemium, b2b, b2c, viral will adjust
                  calculations
                </p>
              </div>

              {/* Get Quote Button */}
              <button
                onClick={handleCalculate}
                disabled={!isFormValid() || isCalculating}
                className="w-full bg-gradient-to-r from-indigo-600 to-themeColor text-white rounded-lg py-4 text-lg font-semibold flex items-center justify-center disabled:opacity-50"
              >
                {isCalculating ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Calculating...
                  </>
                ) : (
                  <>
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate Metrics
                  </>
                )}
              </button>
            </div>

            {/* Cost Estimate */}
            {result && hasVisited ? (
              <div className="popup bg-white rounded-2xl border shadow-lg p-8 overflow-y-auto max-h-[90vh]">
                <h2 className="text-center text-2xl font-semibold mb-4">
                  Assessment Results
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-4 border border-purple-200">
                      <p className="text-xs font-semibold text-purple-700 mb-1">
                        MRR
                      </p>
                      <p className="text-2xl font-bold text-purple-900">
                        {formatCurrencyForCostBreakdown(result.mrr)}
                      </p>
                      <p className="text-xs text-purple-700 mt-2">
                        Monthly Recurring
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-4 border border-pink-200">
                      <p className="text-xs font-semibold text-pink-700 mb-1">
                        ARR
                      </p>
                      <p className="text-2xl font-bold text-pink-900">
                        {formatCurrencyForCostBreakdown(result.arr)}
                      </p>
                      <p className="text-xs text-pink-700 mt-2">
                        Annual Recurring
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-lg">
                      <p className="text-xs font-semibold text-gray-600 mb-1">
                        CAC
                      </p>
                      <p className="text-xl font-bold text-gray-900">
                        {formatCurrencyForCostBreakdown(result.cac)}
                      </p>
                      <p className="text-xs text-gray-600 mt-2">
                        Acquisition Cost
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-lg">
                      <p className="text-xs font-semibold text-gray-600 mb-1">
                        LTV
                      </p>
                      <p className="text-xl font-bold text-gray-900">
                        {formatCurrencyForCostBreakdown(result.ltv)}
                      </p>
                      <p className="text-xs text-gray-600 mt-2">
                        Lifetime Value
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-lg">
                      <p className="text-xs font-semibold text-gray-600 mb-1">
                        LTV:CAC Ratio
                      </p>
                      <p className="text-2xl font-bold text-purple-600">
                        {result.ltcRatio}x
                      </p>
                      <p className="text-xs text-gray-600 mt-2">Healthy: 3x+</p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-lg">
                      <p className="text-xs font-semibold text-gray-600 mb-1">
                        Payback Period
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {result.cacPaybackPeriod}
                      </p>
                      <p className="text-xs text-gray-600 mt-2">months</p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-lg">
                      <p className="text-xs font-semibold text-gray-600 mb-1">
                        Retention Rate
                      </p>
                      <p className="text-2xl font-bold text-green-600">
                        {result.customerRetentionRate}%
                      </p>
                      <p className="text-xs text-gray-600 mt-2">monthly</p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-lg">
                      <p className="text-xs font-semibold text-gray-600 mb-1">
                        Growth Rate
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {result.monthlyGrowthRate}%
                      </p>
                      <p className="text-xs text-gray-600 mt-2">monthly</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {result.insights.map((insight, idx) => (
                      <div
                        key={idx}
                        className={`rounded-xl p-4 border flex gap-3 ${getStatusColorForSaasMetric(insight.status)}`}
                      >
                        <div className="flex-shrink-0">
                          <span
                            className={`flex items-center justify-center w-6 h-6 rounded-full font-bold text-sm ${
                              insight.status === "good"
                                ? "bg-green-500 text-white"
                                : insight.status === "warning"
                                  ? "bg-yellow-500 text-white"
                                  : "bg-red-500 text-white"
                            }`}
                          >
                            {getStatusIconForSaasMetric(insight.status)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {insight.title}
                          </p>
                          <p className="text-sm text-gray-700 mt-1">
                            {insight.message}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {result.keywords.length > 0 && (
                    <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                      <p className="text-sm font-semibold text-purple-900 mb-3">
                        Detected Keywords
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {result.keywords.map((keyword, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-xs font-medium"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-200">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-purple-600" />
                      Recommendations
                    </h4>
                    <ul className="space-y-1.5">
                      {result.recommendations.map((rec, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <span className="text-purple-600 font-bold -mt-[5px]">
                            →
                          </span>
                          <span className="text-sm">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={handleExportReport}
                    className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold transition-all duration-200"
                  >
                    <Download className="w-5 h-5" />
                    Export Full Report
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-2xl font-semibold mb-2">
                  Assessment Results
                </h2>
                <div className="text-center py-12">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative my-12">
                      <div className="animate-pulse w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                        <DollarSign className="w-12 h-12 text-white" />
                      </div>
                      <div className="animate-ping absolute -top-6 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-yellow-800" />
                      </div>
                      <div className="animate-ping absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-2 h-2 text-yellow-800" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-700">
                      See Your Metrics
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Enter your SaaS business data on the left and click
                      "Calculate Metrics" to get comprehensive analysis of your
                      key performance indicators.
                    </p>

                    <button
                      onClick={() => document.querySelector("input")?.focus()}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium flex items-center space-x-2 hover:from-purple-700 hover:to-blue-700 transition-all animate-bounce"
                    >
                      &lArr; Fill out the form to get metrics
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <ToolFAQs />
      {result && openPopup && !hasVisited && (
        <ToolsPopupContactForm
          open={openPopup}
          handleClose={() => setOpenPopup(false)}
          result={result}
          setResult={setResult}
          toolFormData={{ toolFormData: formData }}
        />
      )}
    </>
  );
};

export default SaaSMetricsCalculator;
