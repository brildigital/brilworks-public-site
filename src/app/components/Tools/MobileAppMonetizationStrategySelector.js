"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Calculator,
  CheckCircle2,
  Loader2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import { mobileAppMonetizationStrategyCalculate } from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const MobileAppMonetizationStrategySelector = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const [formData, setFormData] = useState({
    appCategory: "",
    targetAudience: "",
    userBase: "",
    engagementLevel: "",
    appType: "",
    description: "",
  });
  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.appCategory &&
      formData?.targetAudience &&
      formData?.userBase &&
      formData?.engagementLevel &&
      formData?.appType &&
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

    const resultData = mobileAppMonetizationStrategyCalculate(formData);

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
            Choose the Perfect &nbsp;
            <br className="block" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Monetization Strategy <br className="md:block hidden" />
            </span>
          </>
        }
        buttonText="Try Strategy Selector"
        description="Make data-driven decisions for your mobile app's revenue model. Our intelligent selector analyzes your app characteristics to recommend the most profitable monetization strategy tailored to your unique needs."
        imageSrc="/images/v2/mobile-app-monetization-banner.webp"
        highlights={[
          {
            icon: Users,
            color: "text-green-600",
            title: "50L+",
            description: "Apps Analyzed",
          },
          {
            icon: CheckCircle2,
            color: "text-orange-600",
            title: "98%",
            description: "Accuracy Rate",
          },
          {
            icon: TrendingUp,
            color: "text-orange-600",
            title: "3.2x",
            description: "Avg Revenue Boost",
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
              Strategy Calculator
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Fill in your app details to receive a personalized monetization
              recommendation
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
                  App Category *
                </label>

                <select
                  value={formData.appCategory}
                  onChange={(e) =>
                    handleInputChange("appCategory", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select category...</option>
                  <option value="gaming">Gaming</option>
                  <option value="productivity">Productivity</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="education">Education</option>
                  <option value="health">Health & Fitness</option>
                  <option value="social">Social Networking</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Target Audience *
                </label>
                <select
                  value={formData?.targetAudience}
                  onChange={(e) =>
                    handleInputChange("targetAudience", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select audience...</option>
                  <option value="consumer">General Consumers</option>
                  <option value="business">Business/Enterprise</option>
                  <option value="students">Students/Education</option>
                  <option value="professionals">Professionals</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Current/Expected User Base *
                </label>
                <select
                  value={formData?.userBase}
                  onChange={(e) =>
                    handleInputChange("userBase", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select user base size...</option>
                  <option value="small">Small (&lt;10K users)</option>
                  <option value="medium">Medium (10K-100K users)</option>
                  <option value="large">Large (&gt;100K users)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  User Engagement Level *
                </label>
                <select
                  value={formData.engagementLevel}
                  onChange={(e) =>
                    handleInputChange("engagementLevel", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select engagement level...</option>
                  <option value="high">High (Daily active users)</option>
                  <option value="medium">Medium (Weekly active users)</option>
                  <option value="low">Low (Monthly active users)</option>
                </select>
              </div>

              {/* Timeline */}
              <div className="space-y-1">
                <label className="font-medium text-gray-700">App Type *</label>
                <select
                  value={formData.appType}
                  onChange={(e) => handleInputChange("appType", e.target.value)}
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select app type...</option>
                  <option value="utility">Utility/Tool</option>
                  <option value="social">Social/Communication</option>
                  <option value="content">Content/Media</option>
                  <option value="service">Service-based</option>
                </select>
              </div>

              {/* Project Description */}
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  App Description
                  <span className="text-slate-500 font-normal text-xs ml-2">
                    (Keywords help improve recommendations)
                  </span>
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
                    Calculate Strategy
                  </>
                )}
              </button>
            </div>

            {/* Cost Estimate */}
            {result && hasVisited ? (
              <div className="popup bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-2xl font-semibold mb-4">
                  Cost Estimate
                </h2>
                <div className="space-y-4">
                  <div className="text-center pb-6 border-b border-slate-200">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-4 shadow-lg">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">
                      {result.name}
                    </h3>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="text-sm text-slate-600">
                        Confidence Score:
                      </div>
                      <div className="text-2xl font-bold text-emerald-600">
                        {result.confidence}%
                      </div>
                    </div>
                    <div className="mt-4 bg-slate-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-full transition-all duration-1000 ease-out"
                        style={{ width: `${result.confidence}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center space-x-2">
                      <Target className="w-5 h-5 text-blue-600" />
                      <span>Why This Strategy?</span>
                    </h4>
                    <ul className="space-y-2">
                      {result.reasons.map((reason, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 text-slate-700"
                        >
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center space-x-2">
                      <Zap className="w-5 h-5 text-amber-600" />
                      <span>Implementation Steps</span>
                    </h4>
                    <ol className="space-y-3">
                      {result.implementation.map((step, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {idx + 1}
                          </div>
                          <span className="text-slate-700 pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-sm text-blue-900">
                      <strong>Pro Tip:</strong> Consider A/B testing this
                      strategy with a small user segment before full
                      implementation to validate results.
                    </p>
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
                        <BarChart3 className="w-12 h-12 text-white" />
                      </div>
                      <div className="animate-ping absolute -top-6 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-yellow-800" />
                      </div>
                      <div className="animate-ping absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-2 h-2 text-yellow-800" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-700">
                      Ready to Find Your Strategy?
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Complete the form on the left to receive your personalized
                      monetization strategy recommendation with detailed
                      implementation guidance. ✨
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

export default MobileAppMonetizationStrategySelector;
