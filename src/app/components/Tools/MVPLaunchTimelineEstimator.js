"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  Calculator,
  CheckCircle,
  Clock,
  Loader2,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import {
  mvpDevelopmentTimelineCalculate,
  saasDevelopmentFeatures,
} from "../lib/saasDevCostCalculatorService";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const MVPLaunchTimelineEstimator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const [formData, setFormData] = useState({
    projectType: "",
    complexity: "",
    features: [],
    teamSize: "",
    budget: "",
    description: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.projectType &&
      formData?.complexity &&
      formData?.features.length > 0 &&
      formData?.teamSize &&
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

    const resultData = mvpDevelopmentTimelineCalculate(formData);

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
            Launch Your
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              &nbsp;MVP&nbsp;
            </span>
            <br className="md:block hidden" />
            on Time & Budget
          </>
        }
        buttonText="Calculate Timeline"
        description={
          <>
            Get accurate timeline and cost estimates for your MVP launch.{" "}
            <br className="md:block hidden" />
            Our AI-powered calculator analyzes your requirements and provides
            realistic projections based on 1000+ successful launches.
          </>
        }
        imageSrc="/images/v2/mvp-launch-timeline-banner.webp"
        statsGird={[
          { value: "98%", label: "Accuracy Rate" },
          { value: "15 Days", label: "Average Saved" },
          { value: "$50K", label: "Cost Saved" },
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
              MVP Timeline Calculator
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Enter your project details to get accurate timeline and cost
              estimates.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-2.5">
              {/* Platform */}

              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  Project Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) =>
                    handleInputChange("projectType", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select your project type</option>

                  <option value="web">Web Application</option>
                  <option value="mobile">Mobile App (iOS/Android)</option>
                  <option value="both">Web & Mobile</option>
                </select>
              </div>

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
                  <option value="simple">Simple (Basic features)</option>
                  <option value="medium">Moderate (Standard features)</option>
                  <option value="complex">Complex (Advanced features)</option>
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

              {/* Design Requirements */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  Team Size <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.teamSize}
                  onChange={(e) =>
                    handleInputChange("teamSize", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select team size</option>
                  <option value="small">Small (2-3 developers)</option>
                  <option value="medium">Medium (4-6 developers)</option>
                  <option value="large">Large (7+ developers)</option>
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
                  <option value="under-25k">Under $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="over-100k">Over $100,000</option>
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
                    Calculate Timeline & Cost
                  </>
                )}
              </button>
            </div>

            {/* Cost Estimate */}
            {result && hasVisited ? (
              <div className="popup bg-white rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-3xl font-semibold mb-4">
                  Your MVP Estimate
                </h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl p-6 text-center border shadow-md">
                      <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">
                        {result.duration}
                      </div>
                      <div className="text-sm text-gray-600">
                        Total Timeline
                      </div>
                    </div>
                    <div className="rounded-2xl p-6 text-center border shadow-md">
                      <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">
                        {result.cost}
                      </div>
                      <div className="text-sm text-gray-600">
                        Estimated Cost
                      </div>
                    </div>
                  </div>

                  {/* Phase Breakdown */}
                  <div className="bg-white rounded-2xl p-6 border shadow-md">
                    <h4 className="font-bold text-gray-900 mb-4">
                      Development Phases
                    </h4>
                    <div className="space-y-1">
                      {result.phases.map((phase, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <span className="font-medium text-gray-900">
                            {phase.name}
                          </span>
                          <span className="text-blue-600 font-semibold">
                            {phase.weeks} weeks
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Next Steps */}
                  <div className="rounded-2xl p-6 border shadow-md">
                    <h4 className="font-bold text-gray-900 mb-4">
                      Recommended Next Steps
                    </h4>
                    <div className="space-y-2">
                      {[
                        "Create detailed user stories and wireframes",
                        "Define your MVP feature set and prioritize",
                        "Set up project management and communication tools",
                        "Begin technical architecture planning",
                      ].map((step, index) => (
                        <div
                          key={index}
                          className="flex items-center text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-3xl font-semibold mb-2">
                  Your MVP Estimate
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
                      Ready to Calculate?
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
                    <div className="bg-white rounded-2xl p-6 border">
                      <h5 className="font-bold text-gray-900 mb-3">
                        What you'll get:
                      </h5>
                      <div className="space-y-2 text-left">
                        {[
                          "Accurate timeline breakdown by development phase",
                          "Cost estimate based on your specific requirements",
                          "Risk assessment and potential bottlenecks",
                          "Team size and resource recommendations",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center text-gray-700"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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

export default MVPLaunchTimelineEstimator;
