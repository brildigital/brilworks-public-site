"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Award,
  BarChart3,
  Calculator,
  CheckCircle,
  Loader2,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import { calculateFeasibilityChecker } from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const ApiIntegrationFeasibilityChecker = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const [formData, setFormData] = useState({
    apiType: "",
    complexity: "",
    timeline: "",
    budget: "",
    team: "",
    description: "",
  });
  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.apiType &&
      formData?.complexity &&
      formData?.timeline &&
      formData?.budget &&
      formData?.team
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

    const resultData = calculateFeasibilityChecker(formData);

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
            API Integration&nbsp;
            <br className="block" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Feasibility&nbsp;
            </span>
            Checker
          </>
        }
        buttonText="Check Feasibility Now"
        description="Evaluate the feasibility of your API integration projects before you start. Get data-driven insights, risk assessments, and actionable recommendations to ensure project success."
        imageSrc="/images/v2/api-integration-fesiblity-checker-banner.webp"
        highlights={[
          {
            icon: Star,
            color: "text-green-600",
            title: "98%",
            description: "Accuracy Rate",
          },
          {
            icon: Users,
            color: "text-orange-600",
            title: "50K+",
            description: "Projects Analyzed",
          },
          {
            icon: Award,
            color: "text-indigo-300",
            title: "Trusted by",
            description: "10,000+ developers",
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
              API Integration Feasibility Calculator
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Complete the form below to get your personalized feasibility
              assessment and recommendations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-2">
                Project Assessment Form
              </h2>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">API Type *</label>

                <select
                  value={formData.apiType}
                  onChange={(e) => handleInputChange("apiType", e.target.value)}
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select API type</option>
                  <option value="rest">REST API</option>
                  <option value="graphql">GraphQL</option>
                  <option value="soap">SOAP</option>
                  <option value="webhooks">Webhooks</option>
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
                  <option value="">Select complexity level</option>
                  <option value="low">Low - Simple data retrieval</option>
                  <option value="medium">
                    Medium - Multi-endpoint integration
                  </option>
                  <option value="high">High - Complex business logic</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Timeline Flexibility *
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) =>
                    handleInputChange("timeline", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select timeline preference</option>
                  <option value="flexible">
                    Flexible - Quality over speed
                  </option>
                  <option value="moderate">Moderate - Balanced approach</option>
                  <option value="tight">Tight - Need it ASAP</option>
                </select>
              </div>

              {/* Timeline */}
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Budget Range *
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => handleInputChange("budget", e.target.value)}
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select budget range</option>
                  <option value="low">$5,000 - $15,000</option>
                  <option value="medium">$15,000 - $50,000</option>
                  <option value="high">$50,000+</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Team Expertise *
                </label>
                <select
                  value={formData.team}
                  onChange={(e) => handleInputChange("team", e.target.value)}
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select team expertise level</option>
                  <option value="beginner">
                    Beginner - Limited API experience
                  </option>
                  <option value="intermediate">
                    Intermediate - Some API projects
                  </option>
                  <option value="expert">
                    Expert - Extensive API experience
                  </option>
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
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate Feasibility
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
                  <div className="text-center font-normal">
                    <div className="relative inline-flex items-center justify-center w-32 h-32 mb-3">
                      <svg
                        className="w-32 h-32 transform -rotate-90"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="8"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke={
                            result.score >= 70
                              ? "#22c55e"
                              : result.score >= 50
                                ? "#f59e0b"
                                : "#ef4444"
                          }
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray={`${
                            (result.score / 100) * 251.2
                          } 251.2`}
                        />
                      </svg>
                      <div className="absolute text-center">
                        <div className="text-3xl font-bold text-gray-900">
                          {result.score}
                        </div>
                        <div className="text-sm text-gray-500">Score</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold text-gray-900">
                        Feasibility: {result.feasibility}
                      </h4>
                      <p className="text-gray-600">
                        Risk Level: {result.riskLevel}
                      </p>
                      <p className="text-gray-600">
                        Estimated Timeline: {result.estimatedTime}
                      </p>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Recommendations
                    </h4>
                    <div className="space-y-2">
                      {result.recommendations.map((rec, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 py-2 px-3 bg-blue-50 rounded-lg"
                        >
                          <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-gray-700">{rec}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Success Factors */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Key Success Factors
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        {
                          label: "API Documentation",
                          status: formData.apiType ? "Good" : "Unknown",
                        },
                        {
                          label: "Team Readiness",
                          status: formData.team || "Unknown",
                        },
                        {
                          label: "Timeline Realism",
                          status: formData.timeline || "Unknown",
                        },
                        {
                          label: "Budget Adequacy",
                          status: formData.budget || "Unknown",
                        },
                      ].map((factor, index) => (
                        <div
                          key={index}
                          className="py-2 px-3 bg-gray-50 rounded-lg"
                        >
                          <div className="text-sm font-medium text-gray-900">
                            {factor.label}
                          </div>
                          <div className="text-sm text-gray-600 capitalize">
                            {factor.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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
                      Ready for Assessment?
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Complete the form to see your feasibility assessment ✨
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

export default ApiIntegrationFeasibilityChecker;
