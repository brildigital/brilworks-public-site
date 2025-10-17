"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  AlertTriangle,
  Calculator,
  CheckCircle,
  Lightbulb,
  Loader2,
  Sparkles,
  Star,
  TrendingDown,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import { calculateStartupTechReadiness } from "../lib/toolsCalculation";
import Heading from "../HTMLComponents/Heading";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const AppSecurityChecklistGenerator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState({
    teamSize: "",
    techBudget: "",
    developmentStage: "",
    techExpertise: "",
    timeToMarket: "",
    scalabilityNeeds: "",
    securityRequirements: "",
    description: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.teamSize &&
      formData?.techBudget &&
      formData?.developmentStage &&
      formData?.techExpertise &&
      formData?.timeToMarket &&
      formData?.scalabilityNeeds &&
      formData?.securityRequirements &&
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

    const resultData = calculateStartupTechReadiness(formData);

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
            App Security &nbsp;
            <br className="md:block hidden" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Checklist Generator
            </span>
          </>
        }
        buttonText="Generate Your Checklist"
        description="Generate a customized security checklist tailored to your application's specific needs. Get comprehensive recommendations to protect your users, data, and infrastructure from security threats."
        imageSrc="/images/v2/app-security-guide-banner.webp"
        statsGird={[
          { value: "50+", label: "Security Checks" },
          {
            value: "100%",
            label: "Compliance",
          },
          {
            value: "24/7",
            label: "Protection",
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
            <h2 className="text-4xl font-bold text-themeColor mb-4">
              Generate Your Security Checklist
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Provide your application details for a customized checklist
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 md:p-8 p-5 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-2">
                Assessment Questions
              </h2>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Team Size (including founders)*
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
                      e.preventDefault();
                    }
                  }}
                />
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Annual Tech Budget ($)*
                </label>
                <input
                  id="techBudget"
                  type="number"
                  className="w-full border rounded-lg p-3 bg-white"
                  value={formData.techBudget}
                  onChange={(e) =>
                    handleInputChange("techBudget", e.target.value)
                  }
                  min="1"
                  onKeyDown={(e) => {
                    if (
                      e.key === "e" ||
                      e.key === "E" ||
                      e.key === "+" ||
                      e.key === "-"
                    ) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Development Stage (1-10 scale)*
                </label>
                <select
                  value={formData.developmentStage}
                  onChange={(e) =>
                    handleInputChange("developmentStage", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select stage</option>
                  <option value="2">Idea Stage (1-2)</option>
                  <option value="4">Prototype/MVP (3-4)</option>
                  <option value="6">Beta Testing (5-6)</option>
                  <option value="8">Market Ready (7-8)</option>
                  <option value="10">Scaling (9-10)</option>
                </select>
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Technical Expertise Level (1-10 scale)*
                </label>
                <select
                  value={formData.techExpertise}
                  onChange={(e) =>
                    handleInputChange("techExpertise", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select expertise level</option>
                  <option value="2">Beginner (1-2)</option>
                  <option value="4">Basic (3-4)</option>
                  <option value="6">Intermediate (5-6)</option>
                  <option value="8">Advanced (7-8)</option>
                  <option value="10">Expert (9-10)</option>
                </select>
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Time to Market Urgency (1-10 scale)*
                </label>
                <select
                  value={formData.timeToMarket}
                  onChange={(e) =>
                    handleInputChange("timeToMarket", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select urgency</option>
                  <option value="2">No Rush (1-2)</option>
                  <option value="4">Moderate (3-4)</option>
                  <option value="6">Important (5-6)</option>
                  <option value="8">Urgent (7-8)</option>
                  <option value="10">Critical (9-10)</option>
                </select>
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Scalability Requirements (1-10 scale)*
                </label>
                <select
                  value={formData.scalabilityNeeds}
                  onChange={(e) =>
                    handleInputChange("scalabilityNeeds", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select scalability needs</option>
                  <option value="2">Small Scale (1-2)</option>
                  <option value="4">Regional (3-4)</option>
                  <option value="6">National (5-6)</option>
                  <option value="8">Global (7-8)</option>
                  <option value="10">Massive Scale (9-10)</option>
                </select>
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Security Requirements (1-10 scale)*
                </label>
                <select
                  value={formData.securityRequirements}
                  onChange={(e) =>
                    handleInputChange("securityRequirements", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select security level</option>
                  <option value="2">Basic (1-2)</option>
                  <option value="4">Standard (3-4)</option>
                  <option value="6">Enhanced (5-6)</option>
                  <option value="8">High Security (7-8)</option>
                  <option value="10">Enterprise Grade (9-10)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Startup Description*
                </label>
                <textarea
                  value={formData?.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="e.g., AI-powered SaaS platform for enterprise customers with mobile app and cloud infrastructure"
                  rows={3}
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>
              <p className="text-xs text-gray-500 ">
                Keywords like "cloud", "AI", "mobile", "automation",
                "data-driven", "agile" will boost your readiness score
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
                Readiness Assessment
              </h2>
              {result && hasVisited ? (
                <div className="space-y-4">
                  <div className="border p-4 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">
                          Tech Readiness Score
                        </p>
                        <p className="text-4xl font-bold text-green-600">
                          {result.score}/100
                        </p>
                        <p className="text-lg font-semibold text-gray-700 mt-1">
                          {result.level}
                        </p>
                      </div>
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        {result.score >= 85 ? (
                          <Star className="w-8 h-8 text-green-600" />
                        ) : result.score >= 70 ? (
                          <CheckCircle className="w-8 h-8 text-green-600" />
                        ) : result.score >= 55 ? (
                          <AlertTriangle className="w-8 h-8 text-orange-500" />
                        ) : (
                          <TrendingDown className="w-8 h-8 text-red-500" />
                        )}
                      </div>
                    </div>
                  </div>

                  {result.bonusPoints > 0 && (
                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl">
                      <div className="flex items-center">
                        <Sparkles className="w-5 h-5 text-yellow-600 mr-2" />
                        <p className="text-sm font-semibold text-yellow-800">
                          Tech Stack Bonus: +{result.bonusPoints} points
                        </p>
                      </div>
                      <p className="text-xs text-yellow-700 mt-1">
                        Your technology choices boost your readiness score
                      </p>
                    </div>
                  )}

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
                    <h4 className="font-semibold text-blue-900 mb-3">
                      Key Recommendations
                    </h4>
                    <div className="space-y-2">
                      {result.recommendations.map((rec, index) => (
                        <p
                          key={index}
                          className="text-sm text-blue-800 flex items-start"
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {rec}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="border p-4 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Score Breakdown
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Team & Budget</span>
                        <span className="font-semibold">35 points max</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Development & Expertise
                        </span>
                        <span className="font-semibold">20 points max</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Strategy & Planning
                        </span>
                        <span className="font-semibold">30 points max</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tech Stack Bonus</span>
                        <span className="font-semibold">15 points max</span>
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
                      Ready to get result?
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Complete the assessment questions on the left to get
                      readliness result. ✨
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

export default AppSecurityChecklistGenerator;
