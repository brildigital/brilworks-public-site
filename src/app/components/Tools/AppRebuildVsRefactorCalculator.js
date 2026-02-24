"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  AlertCircle,
  Calculator,
  Clock,
  DollarSign,
  Loader2,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import { appRebuildRefactorCalculateCosts } from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const AppRebuildVsRefactorCalculator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const [formData, setFormData] = useState({
    appSize: "",
    techStack: "",
    complexity: "",
    teamSize: "",
    description: "",
  });
  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.appSize &&
      formData?.techStack &&
      formData?.complexity &&
      formData?.teamSize &&
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

    const resultData = appRebuildRefactorCalculateCosts(formData);

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
            App{" "}
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Rebuild vs
              <br className="md:block hidden" /> Refactor{" "}
            </span>
            Calculator
          </>
        }
        buttonText="Calculate Now"
        description={
          <>
            Make data-driven decisions for your legacy application.
            <br className="md:block hidden" /> Calculate costs, timelines, and
            ROI to determine whether
            <br className="md:block hidden" />
            rebuilding or refactoring is the right choice for your business.
          </>
        }
        imageSrc="/images/v2/app-rebuild-vs-refactor-banner.webp"
        authority={[
          "Trusted by 500+ Tech Leader",
          "Smart Decision Making Tool",
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
              Calculate Your Costs
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Enter your application details to get instant cost and timeline
              estimates
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
                  Application Size *
                </label>

                <select
                  value={formData.appSize}
                  onChange={(e) => handleInputChange("appSize", e.target.value)}
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select app size</option>
                  <option value="small">Small (1-10 pages/screens)</option>
                  <option value="medium">Medium (11-30 pages/screens)</option>
                  <option value="large">Large (31-100 pages/screens)</option>
                  <option value="enterprise">
                    Enterprise (100+ pages/screens)
                  </option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Technology Stack *
                </label>
                <select
                  value={formData?.techStack}
                  onChange={(e) =>
                    handleInputChange("techStack", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select technology stack</option>
                  <option value="modern">Modern (React, Node, etc.)</option>
                  <option value="mixed">
                    Mixed (Some legacy, some modern)
                  </option>
                  <option value="legacy">Legacy (Outdated frameworks)</option>
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
                  <option value="">Select Complexity</option>
                  <option value="low">Low (Basic CRUD operations)</option>
                  <option value="medium">Medium (Some integrations)</option>
                  <option value="high">High (Multiple integrations)</option>
                  <option value="very_high">
                    Very High (Complex workflows)
                  </option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Development Team Size
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
                  placeholder="Describe your AI application idea, features, and goals.."
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
                    Calculate Estimates
                  </>
                )}
              </button>
            </div>

            {/* Cost Estimate */}
            {result && hasVisited ? (
              <div className="popup bg-white rounded-2xl border shadow-lg p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-center text-2xl font-semibold mb-4">
                      Your Result
                    </h2>
                    <div className="px-4 py-2 bg-white rounded-lg shadow border">
                      <span className="text-sm text-gray-600">Complexity:</span>
                      <span className="ml-2 font-bold text-blue-600">
                        {result?.complexityScore}/100
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-md border">
                      <div className="flex items-center space-x-2 mb-2">
                        <DollarSign className="w-5 h-5 text-blue-600" />
                        <span className="text-sm text-gray-600">
                          Rebuild Cost
                        </span>
                      </div>
                      <div className="text-3xl font-bold text-gray-900 text-left">
                        ${result?.rebuildCost.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md border">
                      <div className="flex items-center space-x-2 mb-2">
                        <DollarSign className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-600">
                          Refactor Cost
                        </span>
                      </div>
                      <div className="text-3xl font-bold text-gray-900 text-left">
                        ${result?.refactorCost.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md border">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span className="text-sm text-gray-600">
                          Rebuild Time
                        </span>
                      </div>
                      <div className="text-3xl font-bold text-gray-900 text-left">
                        {result?.rebuildTime} mo
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md border">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-600">
                          Refactor Time
                        </span>
                      </div>
                      <div className="text-3xl font-bold text-gray-900 text-left">
                        {result?.refactorTime} mo
                      </div>
                    </div>
                  </div>

                  <div
                    className={`p-4 rounded-lg ${
                      result?.recommendation === "rebuild"
                        ? "bg-blue-100 border-2 border-blue-300"
                        : "bg-green-100 border-2 border-green-300"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <AlertCircle
                        className={`w-6 h-6 mt-1 ${
                          result?.recommendation === "rebuild"
                            ? "text-blue-600"
                            : "text-green-600"
                        }`}
                      />
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2 text-left">
                          Recommendation:{" "}
                          <span
                            className={
                              result?.recommendation === "rebuild"
                                ? "text-blue-600"
                                : "text-green-600"
                            }
                          >
                            {result?.recommendation === "rebuild"
                              ? "Rebuild"
                              : "Refactor"}
                          </span>
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-left">
                          {result?.recommendation === "rebuild"
                            ? "Based on your complexity score and technology stack, a complete rebuild will provide better long-term value. While more expensive initially, you'll benefit from modern architecture and reduced technical debt."
                            : "Refactoring is the most cost-effective approach for your application. You can modernize incrementally while maintaining existing functionality and minimizing risk."}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md border">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-600">
                          Potential Savings
                        </span>
                        <div className="text-2xl font-bold text-green-600 mt-1 text-left">
                          ${result?.savings.toLocaleString()}
                        </div>
                      </div>
                      <TrendingUp className="w-8 h-8 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-left">
                      By choosing {result?.recommendation}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-2xl font-semibold mb-2">
                  Estimate Result
                </h2>
                <div className="text-center py-12">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative my-12">
                      <div className="animate-pulse w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-12 h-12 text-white" />
                      </div>
                      <div className="animate-ping absolute -top-6 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-yellow-800" />
                      </div>
                      <div className="animate-ping absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-2 h-2 text-yellow-800" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-700">
                      Ready to get estimate?
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Fill out the form and click "Calculate Estimates" to see
                      your customized analysis ✨
                    </p>

                    <button
                      onClick={() => document.querySelector("select")?.focus()}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium flex items-center space-x-2 hover:from-purple-700 hover:to-blue-700 transition-all animate-bounce"
                    >
                      &lArr; Start by selecting your project details
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

export default AppRebuildVsRefactorCalculator;
