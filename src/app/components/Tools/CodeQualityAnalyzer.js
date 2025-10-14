"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  Calculator,
  CheckCircle,
  Lightbulb,
  Loader2,
  Sparkles,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import { calculateMvpFeatureSelector } from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const CodeQualityAnalyzer = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    targetAudience: "",
    budget: "",
    timeline: "",
    description: "",
    primaryGoal: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.targetAudience &&
      formData?.budget &&
      formData?.timeline &&
      formData?.primaryGoal &&
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

    const resultData = calculateMvpFeatureSelector(formData);

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
            MVP Feature &nbsp;
            <br className="md:block hidden" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Selector Quiz
            </span>
          </>
        }
        buttonText="Start Quiz Now"
        description="Discover the essential features for your MVP with our intelligent quiz. Get personalized recommendations based on your project goals, audience, and constraints."
        imageSrc="/images/v2/MVP-feature -selector-banner.webp"
        statsGird={[
          { value: "10K+", label: "Trusted by Entrepreneurs" },
          {
            value: "98%",
            label: (
              <>
                Accuracy
                <br /> Rate
              </>
            ),
          },
          {
            value: "Free",
            label: (
              <>
                No Signup
                <br /> Required
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
            <h1 className="text-4xl font-bold text-themeColor mb-4">
              MVP Feature Selector Quiz
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Answer a few questions about your project to get personalized
              feature recommendations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 md:p-8 p-5 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-2">
                Tell us about your project
              </h2>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Project Name
                </label>
                <input
                  type="text"
                  value={formData.projectName}
                  onChange={(e) =>
                    handleInputChange("projectName", e.target.value)
                  }
                  placeholder="Enter your project name..."
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Target Audience*
                </label>
                <select
                  value={formData.targetAudience}
                  onChange={(e) =>
                    handleInputChange("targetAudience", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select your target audience</option>
                  <option value="consumers">Consumers (B2C)</option>
                  <option value="businesses">Businesses (B2B)</option>
                  <option value="enterprises">Enterprises</option>
                  <option value="developers">Developers</option>
                  <option value="students">Students/Education</option>
                </select>
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Budget Range*
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => handleInputChange("budget", e.target.value)}
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select budget range</option>
                  <option value="low">Under $10,000</option>
                  <option value="medium">$10,000 - $50,000</option>
                  <option value="high">$50,000+</option>
                </select>
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">Timeline*</label>
                <select
                  value={formData.timeline}
                  onChange={(e) =>
                    handleInputChange("timeline", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select timeline</option>
                  <option value="urgent">1-3 months</option>
                  <option value="moderate">3-6 months</option>
                  <option value="flexible">6+ months</option>
                </select>
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Primary Goal*
                </label>
                <select
                  value={formData.primaryGoal}
                  onChange={(e) =>
                    handleInputChange("primaryGoal", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select primary goal</option>
                  <option value="revenue">Generate Revenue</option>
                  <option value="users">Acquire Users</option>
                  <option value="validation">Validate Idea</option>
                  <option value="funding">Raise Funding</option>
                  <option value="efficiency">Improve Efficiency</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Project Description*
                </label>
                <textarea
                  value={formData?.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Describe your project idea, key features you're considering, and what problems it solves. Include keywords like 'user authentication', 'payment', 'social features', 'analytics', etc."
                  rows={3}
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>
              <p className="text-xs text-gray-500 ">
                Tip: Include keywords related to features you're considering
                (e.g., user, payment, social, analytics, mobile)
              </p>

              {/* Get Quote Button */}
              <button
                onClick={handleCalculate}
                disabled={!isFormValid() || isCalculating}
                className="w-full bg-themeColor text-white rounded-lg py-3 text-lg font-semibold flex items-center justify-center disabled:opacity-50"
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
            <div className="popup bg-white rounded-2xl border shadow-lg p-8">
              <h2 className="text-center text-2xl font-semibold mb-4">
                Your MVP Recommendations
              </h2>
              {result && hasVisited ? (
                <div className="space-y-4">
                  <div className="border shadow-sm rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        MVP Score
                      </h4>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          result.priority === "High"
                            ? "bg-green-100 text-green-800"
                            : result.priority === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {result.priority} Priority
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${
                          result.priority === "High"
                            ? "bg-green-500"
                            : result.priority === "Medium"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${result.score}%` }}
                      ></div>
                    </div>
                    <p className="text-gray-600 font-normal">
                      {result.explanation}
                    </p>
                  </div>

                  <div className="border shadow-sm rounded-xl p-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Recommended Features
                    </h4>
                    {result.recommendedFeatures.length > 0 ? (
                      <div className="space-y-3">
                        {result.recommendedFeatures.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">
                        Add more details to your project description to get
                        specific feature recommendations.
                      </p>
                    )}
                  </div>

                  <div className="border shadow-sm rounded-xl p-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Next Steps
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                          1
                        </div>
                        <span className="text-gray-700">
                          Validate features with target users
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                          2
                        </div>
                        <span className="text-gray-700">
                          Create detailed user stories
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                          3
                        </div>
                        <span className="text-gray-700">
                          Plan development sprints
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative my-12">
                      <div className="animate-pulse w-24 h-24 bg-themeColor rounded-full flex items-center justify-center">
                        <Lightbulb className="w-12 h-12 text-white" />
                      </div>
                      <div className="animate-ping absolute -top-6 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-yellow-800" />
                      </div>
                      <div className="animate-ping absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-2 h-2 text-yellow-800" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-700">
                      Ready to get recommendation?
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Complete the project details on the left to receive your
                      personalized MVP feature recommendations. ✨
                    </p>

                    <button
                      onClick={() => document.querySelector("input")?.focus()}
                      className="bg-themeColor text-white py-3 px-6 rounded-lg font-medium flex items-center space-x-2 transition-all animate-bounce"
                    >
                      &lArr; Fill out the form to get started
                    </button>
                  </div>
                </div>
              )}
            </div>
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

export default CodeQualityAnalyzer;
