"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Award, Calculator, Loader2, Sparkles, Users, Zap } from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import { calculateTestingTimelineEstimate } from "../lib/featureComplexityVsTimelineEstimatorService";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const TestingQATimelineEstimator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const [formData, setFormData] = useState({
    projectSize: "",
    complexity: "",
    testingTypes: [],
    teamSize: "",
    experience: "",
    description: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.projectSize &&
      formData?.complexity &&
      formData?.testingTypes.length > 0 &&
      formData?.teamSize &&
      formData?.experience &&
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

    const resultData = calculateTestingTimelineEstimate(formData);
    setResult(resultData);

    setTimeout(() => {
      setIsCalculating(false);
      if (!hasVisited) {
        setOpenPopup(true);
      }
    }, 1500);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFeatureChange = (featureName) => {
    setFormData((prev) => ({
      ...prev,
      testingTypes: prev.testingTypes.includes(featureName)
        ? prev.testingTypes.filter((feature) => feature !== featureName)
        : [...prev.testingTypes, featureName],
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
            Testing & QA Timeline
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              &nbsp;Calculator
            </span>
          </>
        }
        buttonText="Calculate Timeline"
        description={
          <>
            Accurately estimate testing timelines for your projects with our
            intelligent calculator. Save time, improve planning, and deliver
            quality software on schedule.
          </>
        }
        imageSrc="/images/v2/testing-qa-timeline-estimator-banner.webp"
        statsGird={[
          {
            value: (
              <p className="flex items-center justify-center text-green-600 text-center gap-1.5">
                <Award className="h-6 w-6" />
                99%
              </p>
            ),
            label: "Accuracy",
          },
          {
            value: (
              <p className="flex items-center justify-center text-yellow-500 text-center gap-1.5">
                <Users className="h-6 w-6" />
                10K+
              </p>
            ),
            label: "Users",
          },
          {
            value: (
              <p className="flex items-center justify-center text-orange-600 text-center gap-1.5">
                <Zap className="h-6 w-6" />
                5min
              </p>
            ),
            label: "Setup",
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
              Testing & QA Timeline Calculator
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Get instant timeline estimates based on your project requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-2">
                Project Details
              </h2>
              <div className="space-y-1">
                <label className="font-semibold text-gray-600">
                  Project size <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.projectSize}
                  onChange={(e) =>
                    handleInputChange("projectSize", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select your project size</option>

                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-gray-600">
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
                  <option value="simple">Simple</option>
                  <option value="medium">Moderate </option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-gray-600">
                  Testing Types <span className="text-red-500">*</span>
                </label>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-1.5">
                  {[
                    "functional",
                    "performance",
                    "security",
                    "usability",
                    "integration",
                    "regression",
                  ]?.map((feature) => (
                    <label
                      key={feature}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.testingTypes.includes(feature)}
                        onChange={() => handleFeatureChange(feature)}
                        className="rounded text-purple-600 focus:ring-purple-500 w-4 h-4"
                      />
                      <span className="capitalize">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project Complexity */}

              {/* Design Requirements */}
              <div className="space-y-1">
                <label className="font-semibold text-gray-600">
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
                  <option value="2">Small (2-3 developers)</option>
                  <option value="4">Medium (4-6 developers)</option>
                  <option value="7">Large (7+ developers)</option>
                </select>
              </div>

              {/* Timeline */}
              <div className="space-y-1">
                <label className="font-semibold text-gray-600">
                  Team Experience<span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) =>
                    handleInputChange("experience", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select experience level</option>
                  <option value="junior">Junior (0-2 years)</option>
                  <option value="mid">Mid-level (2-5 years)</option>
                  <option value="senior">Senior (5+ years)</option>
                  <option value="expert">Expert (10+ years)</option>
                </select>
              </div>

              {/* Project Description */}
              <div className="space-y-1">
                <label className="font-medium text-gray-600">
                  Project Description <span className="text-red-500">*</span>
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
                    Calculate Timeline
                  </>
                )}
              </button>
            </div>

            {/* Cost Estimate */}
            {result && hasVisited ? (
              <div className="popup bg-white rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-2xl font-semibold mb-4">
                  Timeline Results
                </h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-3xl font-bold text-blue-600">
                        {result.totalHours}
                      </div>
                      <div className="text-sm text-gray-600">Total Hours</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-xl">
                      <div className="text-3xl font-bold text-green-600">
                        {result.totalDays}
                      </div>
                      <div className="text-sm text-gray-600">Working Days</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-xl">
                      <div className="text-3xl font-bold text-purple-600">
                        {result.totalWeeks}
                      </div>
                      <div className="text-sm text-gray-600">Weeks</div>
                    </div>
                  </div>

                  {/* Phase Breakdown */}
                  <div className="bg-white rounded-2xl p-6 border shadow-md">
                    <h4 className="font-bold text-gray-900 mb-4">
                      Phase Breakdown
                    </h4>
                    <div className="space-y-1">
                      {Object.entries(result?.phases || {}).map(
                        ([phase, hours]) => (
                          <div
                            key={phase}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <span className="font-medium text-gray-900 capitalize">
                              {phase.replace(/([A-Z])/g, " $1")}
                            </span>
                            <span className="text-blue-600 font-semibold">
                              {hours} hours
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  {result.recommendations.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Recommendations
                      </h4>
                      <ul className="space-y-2">
                        {result.recommendations.map((rec, index) => (
                          <li
                            key={index}
                            className="text-sm text-gray-600 flex items-start"
                          >
                            <span className="text-blue-600 mr-2">•</span>
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-2xl font-semibold mb-2">
                  Timeline Results
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

export default TestingQATimelineEstimator;
