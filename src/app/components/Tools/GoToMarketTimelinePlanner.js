"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  Award,
  Calculator,
  Calendar,
  CheckCircle,
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
import {
  calculateGoToMarketTimeline,
  calculateTestingTimelineEstimate,
} from "../lib/featureComplexityVsTimelineEstimatorService";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const GoToMarketTimelinePlanner = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const [formData, setFormData] = useState({
    industry: "",
    targetMarket: "",
    teamSize: "",
    budget: "",
    launchType: "",
    description: "",
  });
  // const [formData, setFormData] = useState({
  //   projectSize: "",
  //   complexity: "",
  //   testingTypes: [],
  //   teamSize: "",
  //   experience: "",
  //   description: "",
  // });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.industry &&
      formData?.targetMarket &&
      formData?.teamSize &&
      formData?.budget &&
      formData?.launchType &&
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

    const resultData = calculateGoToMarketTimeline(formData);

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
            Perfect Your&nbsp;
            <br className="block" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Go-to-Market&nbsp;
            </span>
            Timeline
          </>
        }
        buttonText="Start Planning Now"
        description="Plan, optimize, and execute your product launch with precision. Our AI-powered timeline planner helps you identify critical milestones and avoid common pitfalls."
        imageSrc="/images/v2/go-to-market-timeline-banner.webp"
        statsGird={[
          {
            value: (
              <p className="flex items-center text-gray-200 justify-start text-center gap-1.5">
                <CheckCircle className="h-7 w-7 text-green-600 bg-green-100/10 rounded-md p-1" />
                95% Success Rate
              </p>
            ),
            label: "Proven results from 500+ successful launches",
          },
          {
            value: (
              <p className="flex items-center text-gray-200 justify-start text-center gap-1.5">
                <TrendingUp className="h-7 w-7 text-blue-600 bg-blue-100/10 rounded-md p-1" />
                30% Faster Launch
              </p>
            ),
            label: "Accelerated timelines with optimized planning",
          },
          // {
          //   value: (
          //     <p className="flex items-center justify-center text-orange-600 text-center gap-1.5">
          //       <Zap className="h-6 w-6" />
          //       5min
          //     </p>
          //   ),
          //   label: "Setup",
          // },
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
              Go-to-Market Timeline Calculator
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Get a personalized timeline for your product launch based on your
              specific requirements and market conditions
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
                  Industry
                  <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) =>
                    handleInputChange("industry", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select Industry</option>
                  <option value="tech">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-gray-600">
                  Target Market <span className="text-red-500">*</span>
                </label>

                <select
                  value={formData?.targetMarket}
                  onChange={(e) =>
                    handleInputChange("targetMarket", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select Market</option>
                  <option value="b2b">B2B</option>
                  <option value="b2c">B2C</option>
                  <option value="b2b2c">B2B2C</option>
                </select>
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
                  <option value="">Select Size</option>
                  <option value="small">1-10 people</option>
                  <option value="medium">11-50 people</option>
                  <option value="large">50+ people</option>
                </select>
              </div>

              {/* Timeline */}
              <div className="space-y-1">
                <label className="font-semibold text-gray-600">
                  Budget Range<span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => handleInputChange("budget", e.target.value)}
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select Budget</option>
                  <option value="low">Under $50K</option>
                  <option value="medium">$50K - $200K</option>
                  <option value="high">$200K+</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="font-semibold text-gray-600">
                  Launch Type<span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.launchType}
                  onChange={(e) =>
                    handleInputChange("launchType", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select Type</option>
                  <option value="soft">Soft Launch</option>
                  <option value="full">Full Market Launch</option>
                  <option value="global">Global Launch</option>
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
                    <Calendar className="mr-2 h-5 w-5" />
                    Calculate My Timeline
                  </>
                )}
              </button>
            </div>

            {/* Cost Estimate */}
            {result && hasVisited ? (
              <div className="popup bg-white rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-2xl font-semibold mb-4">
                  Your Timeline
                </h2>

                <div className="space-y-4">
                  {/* Summary */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-blue-50 rounded-2xl">
                      <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-3xl font-bold text-blue-600">
                        {result.totalWeeks}
                      </div>
                      <div className="text-sm text-gray-600">
                        Weeks to Launch
                      </div>
                    </div>
                    <div className="text-center p-6 bg-green-50 rounded-2xl">
                      <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="text-3xl font-bold text-green-600">
                        {result.successProbability}%
                      </div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>

                  {/* Risk Assessment */}
                  <div
                    className={`p-4 rounded-xl border-l-4 ${
                      result?.riskLevel === "Low"
                        ? "bg-green-50 border-green-500"
                        : result?.riskLevel === "Medium"
                        ? "bg-yellow-50 border-yellow-500"
                        : "bg-red-50 border-red-500"
                    }`}
                  >
                    <div className="font-semibold text-gray-900 mb-1">
                      Risk Level:{" "}
                      <span
                        className={
                          result?.riskLevel === "Low"
                            ? "text-green-600"
                            : result.riskLevel === "Medium"
                            ? "text-yellow-600"
                            : "text-red-600"
                        }
                      >
                        {result?.riskLevel}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {result?.riskLevel === "Low" &&
                        "Your project has favorable conditions for success."}
                      {result?.riskLevel === "Medium" &&
                        "Monitor key milestones closely to stay on track."}
                      {result?.riskLevel === "High" &&
                        "Consider additional planning and resource allocation."}
                    </p>
                  </div>

                  {/* Phases */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Timeline Breakdown
                    </h4>
                    {result?.phases.length > 0 &&
                      result?.phases?.map((phase, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-2 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div
                            className={`w-3 h-3 rounded-full ${phase.color} mt-1.5 flex-shrink-0`}
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h5 className="font-semibold text-gray-900">
                                {phase.name}
                              </h5>
                              <span className="text-sm font-medium text-gray-600">
                                {phase.duration} weeks
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">
                              {phase.description}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-2xl font-semibold mb-2">
                  Your Timeline
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
                      Fill out the form on the left to generate your
                      personalized go-to-market timeline ✨
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

export default GoToMarketTimelinePlanner;
