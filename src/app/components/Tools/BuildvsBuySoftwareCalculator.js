"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  Award,
  BarChart4,
  Calculator,
  CheckCircle2,
  Clock,
  Download,
  Loader2,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import {
  calculateBuildVsBuy,
  formatCurrencyForCostBreakdown,
} from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const BuildvsBuySoftwareCalculator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const [formData, setFormData] = useState({
    projectType: "",
    complexity: "",
    teamSize: 5,
    developmentMonths: 6,
    estimatedUsers: 1000,
    description: "",
  });
  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.projectType &&
      formData?.complexity &&
      formData?.teamSize &&
      formData?.developmentMonths &&
      formData?.estimatedUsers &&
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

    const resultData = calculateBuildVsBuy(formData);

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
BUILD vs BUY SOFTWARE CALCULATOR REPORT
Generated: ${new Date().toLocaleDateString()}

PROJECT DETAILS:
- Type: ${formData.projectType}
- Complexity: ${formData.complexity}
- Team Size: ${formData.teamSize} developers
- Development Timeline: ${formData.developmentMonths} months
- Estimated Users: ${formData.estimatedUsers.toLocaleString()}
- Description: ${formData.description}

DETECTED KEYWORDS: ${result.keywords.length > 0 ? result.keywords.join(", ") : "None"}

BUILD COSTS (5-Year):
- Development: ${formatCurrencyForCostBreakdown(result.buildCosts.development)}
- Infrastructure: ${formatCurrencyForCostBreakdown(result.buildCosts.infrastructure)}
- Maintenance (Year 1): ${formatCurrencyForCostBreakdown(result.buildCosts.maintenance)}
- Total Initial: ${formatCurrencyForCostBreakdown(result.buildCosts.total)}

BUY COSTS (5-Year):
- Licensing (Year 1): ${formatCurrencyForCostBreakdown(result.buyCosts.licensingPerYear)}
- Implementation: ${formatCurrencyForCostBreakdown(result.buyCosts.implementation)}
- Training: ${formatCurrencyForCostBreakdown(result.buyCosts.training)}
- Support (Year 1): ${formatCurrencyForCostBreakdown(result.buyCosts.supportPerYear)}
- Total 5-Year Cost: ${formatCurrencyForCostBreakdown(result.buyCosts.total5Year)}

RECOMMENDATION: ${result.recommendation}

COST BREAKDOWN:
${result.breakdown.map((item) => `${item.category}: Build ${formatCurrencyForCostBreakdown(item.buildCost)} vs Buy ${formatCurrencyForCostBreakdown(item.buyCost)}`).join("\n")}
    `;

    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(reportContent)
    );
    element.setAttribute("download", "build-vs-buy-report.txt");
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
            Build vs Buy &nbsp;
            <br className="block" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Software Decision <br className="md:block hidden" />
            </span>
            Made Simple
          </>
        }
        buttonText="Start Comparing Now"
        description="Compare the true costs of building custom software versus buying existing solutions. Make data-driven decisions with our comprehensive analysis tool backed by industry benchmarks."
        imageSrc="/images/v2/build-vs-buy-software-calculator-banner.webp"
        highlights={[
          {
            icon: CheckCircle2,
            color: "text-green-600",
            title: "95%",
            description: "Decision Accuracy",
          },
          {
            icon: Award,
            color: "text-orange-600",
            title: "1000+",
            description: "Trusted by Enterprises",
          },
          {
            icon: TrendingUp,
            color: "text-teal-300",
            title: "$2.3B+",
            description: "Total Savings Achieved",
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
              Interactive Calculator
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Enter your project details and get instant build versus buy
              analysis with detailed cost comparisons.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-2">
                Project Details
              </h2>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Project Type *
                </label>

                <select
                  value={formData.projectType}
                  onChange={(e) =>
                    handleInputChange("projectType", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select Project Type</option>
                  <option value="web-application">Web Application</option>
                  <option value="mobile-app">Mobile Application</option>
                  <option value="desktop-software">Desktop Software</option>
                  <option value="api-platform">API Platform</option>
                  <option value="crm-system">CRM System</option>
                  <option value="erp-system">ERP System</option>
                  <option value="analytics-platform">Analytics Platform</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Complexity Level *
                </label>
                <select
                  value={formData?.complexity}
                  onChange={(e) =>
                    handleInputChange("complexity", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select Complexity Level</option>
                  <option value="simple">Simple</option>
                  <option value="moderate">Moderate</option>
                  <option value="complex">Complex</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                <div className="space-y-1">
                  <label className="font-medium text-gray-700">
                    Team Size (developers) *
                  </label>
                  <input
                    id="teamSize"
                    type="number"
                    className="w-full border rounded-lg p-3 bg-white"
                    value={formData.teamSize}
                    onChange={(e) =>
                      handleInputChange("teamSize", e.target.value)
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
                    Timeline (months) *
                  </label>
                  <input
                    id="developmentMonths"
                    type="number"
                    className="w-full border rounded-lg p-3 bg-white"
                    value={formData.developmentMonths}
                    onChange={(e) =>
                      handleInputChange("developmentMonths", e.target.value)
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
                  Estimated Users (or expected monthly active users) *
                </label>
                <input
                  id="estimatedUsers"
                  type="number"
                  className="w-full border rounded-lg p-3 bg-white"
                  value={formData.estimatedUsers}
                  onChange={(e) =>
                    handleInputChange("estimatedUsers", e.target.value)
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
                  Project Description
                </label>
                <textarea
                  value={formData?.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Describe your feature..."
                  rows={3}
                  className="w-full border rounded-lg p-3 bg-white"
                />
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
                    Calculate Now
                  </>
                )}
              </button>
            </div>

            {/* Cost Estimate */}
            {result && hasVisited ? (
              <div className="popup bg-white rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-2xl font-semibold mb-4">
                  Assessment Results
                </h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl shadow-lg p-4 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">Recommendation</h3>
                      <TrendingUp className="w-8 h-8" />
                    </div>
                    <p className="text-4xl font-bold !mb-2">
                      {result.recommendation}
                    </p>
                    <p className="text-emerald-100">
                      Based on comprehensive cost analysis
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-lg">
                      <p className="text-sm font-semibold text-gray-600 mb-2">
                        Build Total
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {formatCurrencyForCostBreakdown(
                          result.buildCosts.total
                        )}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">Year 1 cost</p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-lg">
                      <p className="text-sm font-semibold text-gray-600 mb-2">
                        Buy 5-Year Total
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {formatCurrencyForCostBreakdown(
                          result.buyCosts.total5Year
                        )}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Total ownership cost
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Cost Breakdown
                    </h4>
                    <div className="space-y-2">
                      {result.breakdown.map((item, idx) => (
                        <div
                          key={idx}
                          className="pb-2 border-b border-gray-100 last:border-0"
                        >
                          <p className="font-semibold text-gray-800 mb-2">
                            {item.category}
                          </p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-gray-600">
                                Build:{" "}
                                {formatCurrencyForCostBreakdown(item.buildCost)}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-600">
                                Buy:{" "}
                                {formatCurrencyForCostBreakdown(item.buyCost)}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {result.keywords.length > 0 && (
                    <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                      <p className="text-sm font-semibold text-emerald-900 mb-3">
                        Detected Keywords
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {result.keywords.map((keyword, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-emerald-200 text-emerald-800 rounded-full text-xs font-medium"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleExportReport}
                    className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold transition-all duration-200"
                  >
                    <Download className="w-5 h-5" />
                    Export Report
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
                        <BarChart4 className="w-12 h-12 text-white" />
                      </div>
                      <div className="animate-ping absolute -top-6 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-yellow-800" />
                      </div>
                      <div className="animate-ping absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-2 h-2 text-yellow-800" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-700">
                      Ready to Compare?
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Fill in your project details on the left and click
                      "Calculate Now" to get your personalized build versus buy
                      analysis.
                    </p>

                    <button
                      onClick={() => document.querySelector("select")?.focus()}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium flex items-center space-x-2 hover:from-purple-700 hover:to-blue-700 transition-all animate-bounce"
                    >
                      &lArr; Start by selecting your project form
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

export default BuildvsBuySoftwareCalculator;
