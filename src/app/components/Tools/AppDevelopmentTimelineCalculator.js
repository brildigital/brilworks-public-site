"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  Award,
  Calculator,
  Calendar,
  Loader2,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import { PriceSkeleton } from "../Blog/ArticleSkeleton";
import {
  appDevelopmentTimelineEstimate,
  saasDevelopmentFeatures,
} from "../lib/saasDevCostCalculatorService";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const AppDevelopmentTimelineCalculator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const [formData, setFormData] = useState({
    appType: "",
    platform: "",
    features: [],
    complexity: "",
    timeline: "",
    budget: "",
    description: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.appType &&
      formData?.platform &&
      formData?.complexity &&
      formData?.features.length > 0 &&
      formData?.timeline &&
      formData?.budget &&
      formData?.description.trim()
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

    const resultData = appDevelopmentTimelineEstimate(formData);

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

  const handleFeatureChange = (featureId) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter((id) => id !== featureId)
        : [...prev.features, featureId],
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
            App Development
            <br className="hidden sm:block" />{" "}
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Timeline Calculator
            </span>
          </>
        }
        buttonText="Calculate Now"
        description="Get accurate time and cost estimates for your app development project in seconds. Powered by AI analysis of 10,000+ real projects."
        imageSrc="/images/v2/app-dev-timeline-calculator.webp"
        highlights={[
          {
            icon: Award,
            color: "text-indigo-300",
            title: "Industry Leader",
            description: "Trusted by 500+ startups and enterprises",
          },
          {
            icon: Users,
            color: "text-teal-300",
            title: "Accuracy Rate",
            description: "Achieve 90% estimation accuracy",
          },
          {
            icon: TrendingUp,
            color: "text-red-300",
            title: "Data Driven",
            description: "Powered by 10,000+ project insights",
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
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-indigo-500 to-themeColor p-4 rounded-full shadow-lg">
                <Calculator className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent mb-4">
              Calculate Your Project{" "}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Enter your project details below and get instant timeline and cost
              estimates. Our AI analyzes your description for complexity
              indicators.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-2.5">
              {/* Platform */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  App Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.appType}
                  onChange={(e) => handleInputChange("appType", e.target.value)}
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select your app type</option>

                  <option value="web">Web</option>
                  <option value="mobile">Mobile</option>
                  <option value="cross-platform">Cross Platform</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  Platform <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.platform}
                  onChange={(e) =>
                    handleInputChange("platform", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select your target platform</option>

                  <option value="web">Web Application</option>
                  <option value="mobile">Mobile App (iOS/Android)</option>
                  <option value="both">Web + Mobile</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  Key Features <span className="text-red-500">*</span>
                </label>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-1.5">
                  {saasDevelopmentFeatures?.map((feature) => (
                    <label
                      key={feature.id}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.features.includes(feature?.id)}
                        onChange={() => handleFeatureChange(feature?.id)}
                        className="rounded text-purple-600 focus:ring-purple-500 w-4 h-4"
                      />
                      <span>{feature?.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project Complexity */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  Complexity Level <span className="text-red-500">*</span>
                </label>

                <select
                  value={formData?.complexity}
                  onChange={(e) =>
                    handleInputChange("complexity", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select complexity</option>
                  <option value="simple">Simple - Basic functionality</option>
                  <option value="medium">Medium - Standard features</option>
                  <option value="complex">Complex - Advanced features</option>
                  <option value="enterprise">
                    Enterprise - Full-scale Solution
                  </option>
                </select>
              </div>

              {/* Design Requirements */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  Timeline Preference <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) =>
                    handleInputChange("timeline", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select timeline</option>
                  <option value="urgent">Urgent - Need it ASAP</option>
                  <option value="standard">Standard - Normal timeline</option>
                  <option value="flexible">
                    Flexible - Quality over speed
                  </option>
                </select>
              </div>

              {/* Timeline */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  Budget Range<span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => handleInputChange("budget", e.target.value)}
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select budget range</option>
                  <option value="0-10000">$0 - $10,000</option>
                  <option value="10000-50000">$10,000 - $50,000</option>
                  <option value="50000-100000">$50,000 - $100,000</option>
                  <option value="100000+">$100,000+</option>
                </select>
              </div>

              {/* Project Description */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Describe your app idea..."
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
                    Get My Instant Quote
                  </>
                )}
              </button>
            </div>

            {/* Cost Estimate */}
            {result && hasVisited ? (
              <div className="popup bg-white rounded-2xl border shadow-lg p-8">
                <div className="text-center my-12">
                  <div className="flex justify-center mb-4">
                    <Calendar className="h-12 w-12 text-indigo-500" />
                  </div>
                  <h2 className="text-3xl font-bold">
                    Your Estimated Timeline
                  </h2>
                  <div className="text-5xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent my-6">
                    {isCalculating || openPopup ? (
                      <PriceSkeleton />
                    ) : (
                      result?.estimatedTime
                    )}
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg mb-6 text-left">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> The application type, platform,
                      description, and project complexity are considered when
                      calculating the timeline. This is an estimate to give you
                      an idea of the possible time range for your project. For a
                      more accurate estimate, consult with our specialist.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-3xl font-semibold mb-2">
                  Estimate Results
                </h2>
                <div className="text-center py-12">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative my-12">
                      <div className="animate-pulse w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                        <Sparkles className="w-12 h-12 text-white" />
                      </div>
                      <div className="animate-ping absolute -top-6 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-yellow-800" />
                      </div>
                      <div className="animate-ping absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-2 h-2 text-yellow-800" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-700">
                      No Estimate Yet
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Fill out the form on the left and your instant estimate
                      will magically appear here ✨
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
        />
      )}
    </>
  );
};

export default AppDevelopmentTimelineCalculator;
