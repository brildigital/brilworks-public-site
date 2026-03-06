"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  Calculator,
  Clock,
  DollarSign,
  Loader2,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import {
  aiAppDevelopmentCalculater,
  costParameters,
  formatCurrencyForCostBreakdown,
} from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const AIAppDevelopmentCostCalculator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const [formData, setFormData] = useState({
    description: "",
    aiModel: "",
    complexity: "",
    platform: "",
    features: [],
    database: "",
    deployment: "",
  });
  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.aiModel &&
      formData?.complexity &&
      formData?.platform &&
      formData?.features.length > 0 &&
      formData?.database &&
      formData?.deployment &&
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

    const resultData = aiAppDevelopmentCalculater(formData);

    setTimeout(() => {
      setResult(resultData);
      setIsCalculating(false);
      if (!hasVisited) {
        setOpenPopup(true);
      }
    }, 1500);
  };

  const estimatedAIAppDevTimeline =
    result?.totalCost > 0 ? Math.ceil(result?.totalCost / 5000) : 0;
  const estimatedAIAppDevTeamSize =
    result?.totalCost > 30000
      ? "4-6"
      : result?.totalCost > 15000
        ? "2-4"
        : "1-2";

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFeatureChange = (feature, checked) => {
    setFormData((prev) => ({
      ...prev,
      features: checked
        ? [...prev.features, feature]
        : prev.features.filter((f) => f !== feature),
    }));
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
            Calculate Your &nbsp;
            <br className="block" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              AI App Development <br className="md:block hidden" />
            </span>
            Cost in Minutes
          </>
        }
        buttonText="Calculate Now"
        description="Get accurate cost estimates for your AI-powered application. Our intelligent calculator analyzes your requirements and provides detailed pricing breakdowns tailored to your project."
        imageSrc="/images/v2/ai-app-dev-cost-calculator-banner.webp"
        highlights={[
          {
            icon: Rocket,
            color: "text-green-600",
            title: "500+",
            description: "Projects Estimated",
          },
          {
            icon: TrendingUp,
            color: "text-orange-600",
            title: "98%",
            description: "Accuracy Rate",
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
              Calculate Your AI App Cost
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Fill in your project details below to get an instant cost
              estimate.
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
                  AI Model Type *
                </label>

                <select
                  value={formData.aiModel}
                  onChange={(e) => handleInputChange("aiModel", e.target.value)}
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select AI Model</option>
                  {costParameters.ai_model?.map((param) => (
                    <option key={param.feature_name} value={param.feature_name}>
                      {param.feature_name} - {param.description}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Project Complexity *
                </label>
                <select
                  value={formData?.complexity}
                  onChange={(e) =>
                    handleInputChange("complexity", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select Complexity</option>
                  {costParameters.complexity?.map((param) => (
                    <option key={param.feature_name} value={param.feature_name}>
                      {param.feature_name} - {param.description}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">Platform *</label>
                <select
                  value={formData?.platform}
                  onChange={(e) =>
                    handleInputChange("platform", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select Platform</option>
                  {costParameters.platform?.map((param) => (
                    <option key={param.feature_name} value={param.feature_name}>
                      {param.feature_name} - {param.description}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Additional Features
                </label>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-1.5">
                  {costParameters.features?.map((param) => (
                    <label
                      key={param.feature_name}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        checked={formData.features.includes(param.feature_name)}
                        onChange={(e) =>
                          handleFeatureChange(
                            param.feature_name,
                            e.target.checked
                          )
                        }
                      />
                      <span className="text-sm text-gray-700">
                        {param.feature_name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">Database *</label>
                <select
                  value={formData.database}
                  onChange={(e) =>
                    handleInputChange("database", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select Database</option>
                  {costParameters.database?.map((param) => (
                    <option key={param.feature_name} value={param.feature_name}>
                      {param.feature_name} - {param.description}
                    </option>
                  ))}
                </select>
              </div>

              {/* Timeline */}
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Deployment *
                </label>
                <select
                  value={formData.deployment}
                  onChange={(e) =>
                    handleInputChange("deployment", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select Deployment</option>
                  {costParameters.deployment?.map((param) => (
                    <option key={param.feature_name} value={param.feature_name}>
                      {param.feature_name} - {param.description}
                    </option>
                  ))}
                </select>
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
                    Calculate
                  </>
                )}
              </button>
            </div>

            {/* Cost Estimate */}
            {result && hasVisited ? (
              <div className="popup bg-white rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-2xl font-semibold mb-4">
                  Cost Estimate
                </h2>
                <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl shadow-xl p-4 text-white">
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20 flex items-center justify-center flex-col">
                      <div className="text-sm opacity-90 mb-2">
                        Total Estimated Cost
                      </div>
                      <div className="text-5xl font-bold mb-2">
                        ${result.totalCost.toLocaleString()}
                      </div>
                      <div className="text-sm opacity-80">
                        Range: $
                        {Math.round(result.totalCost * 0.8)?.toLocaleString()} -
                        ${Math.round(result.totalCost * 1.2)?.toLocaleString()}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg">Cost Breakdown</h4>
                      {Object.entries(result.breakdown).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between items-center bg-white/10 backdrop-blur rounded-lg py-1 px-2"
                        >
                          <span className="text-sm">{key}</span>
                          <span className="font-semibold">
                            ${value.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
                      <div className="text-center">
                        <div className="bg-white/10 backdrop-blur rounded-lg p-4 mb-2">
                          <Clock className="w-6 h-6 mx-auto" />
                        </div>
                        <div className="text-2xl font-bold">
                          {estimatedAIAppDevTimeline}
                        </div>
                        <div className="text-xs opacity-80">Months</div>
                      </div>
                      <div className="text-center">
                        <div className="bg-white/10 backdrop-blur rounded-lg p-4 mb-2">
                          <Users className="w-6 h-6 mx-auto" />
                        </div>
                        <div className="text-2xl font-bold">
                          {estimatedAIAppDevTeamSize}
                        </div>
                        <div className="text-xs opacity-80">Team Size</div>
                      </div>
                      <div className="text-center">
                        <div className="bg-white/10 backdrop-blur rounded-lg p-4 mb-2">
                          <TrendingUp className="w-6 h-6 mx-auto" />
                        </div>
                        <div className="text-2xl font-bold">High</div>
                        <div className="text-xs opacity-80">ROI</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-2xl font-semibold mb-2">
                  Cost Estimate
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
                      Ready to get estimate?
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Fill in the form to see your cost estimate ✨
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

export default AIAppDevelopmentCostCalculator;
