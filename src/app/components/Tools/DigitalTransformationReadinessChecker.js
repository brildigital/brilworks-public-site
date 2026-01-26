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
import { calculateDigitalTransformationReadiness } from "../lib/toolsCalculation";
import Heading from "../HTMLComponents/Heading";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const DigitalTransformationReadinessChecker = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState({
    organizationSize: "",
    currentTechLevel: "",
    digitalBudget: "",
    leadershipSupport: "",
    employeeSkills: "",
    dataMaturity: "",
    customerExpectations: "",
    competitorPressure: "",
    description: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.organizationSize &&
      formData?.currentTechLevel &&
      formData?.digitalBudget &&
      formData?.leadershipSupport &&
      formData?.employeeSkills &&
      formData?.dataMaturity &&
      formData?.customerExpectations &&
      formData?.competitorPressure &&
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

    const resultData = calculateDigitalTransformationReadiness(formData);

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
            Digital Transformation &nbsp;
            <br className="md:block hidden" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Readiness Checker
            </span>
          </>
        }
        buttonText="Check Your Readiness"
        description="Assess your organization's readiness for digital transformation with our comprehensive digital transformation readiness tool. Get strategic insights to ensure successful initiatives, improve your digital maturity assessment, and gain a competitive advantage."
        imageSrc="/images/v2/digital-transformation-checker.webp"
        statsGird={[
          { value: "3K+", label: "Trusted by Organizations" },
          {
            value: "5x",
            label: (
              <>
                More
                <br /> Likely
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
              Digital Transformation Readiness Assessment
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Complete the assessment below to evaluate your organization's
              readiness for digital transformation and receive personalized
              recommendations for success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 md:p-8 p-5 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-2">
                Assessment Questions
              </h2>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Organization Size (1-10 scale)*
                </label>
                <select
                  value={formData.organizationSize}
                  onChange={(e) =>
                    handleInputChange("organizationSize", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select organization size</option>
                  <option value="2">Small (1-50 employees)</option>
                  <option value="4">Medium (51-200 employees)</option>
                  <option value="6">Large (201-1000 employees)</option>
                  <option value="8">Enterprise (1000+ employees)</option>
                  <option value="10">
                    Global Enterprise (10,000+ employees)
                  </option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Current Technology Level (1-10 scale)*
                </label>
                <select
                  value={formData.currentTechLevel}
                  onChange={(e) =>
                    handleInputChange("currentTechLevel", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select technology level</option>
                  <option value="2">Legacy Systems (1-2)</option>
                  <option value="4">Basic Digital (3-4)</option>
                  <option value="6">Moderate Digital (5-6)</option>
                  <option value="8">Advanced Digital (7-8)</option>
                  <option value="10">Cutting-edge (9-10)</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Digital Transformation Budget (1-10 scale)*
                </label>
                <select
                  value={formData.digitalBudget}
                  onChange={(e) =>
                    handleInputChange("digitalBudget", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select budget level</option>
                  <option value="2">Limited Budget (1-2)</option>
                  <option value="4">Moderate Budget (3-4)</option>
                  <option value="6">Good Budget (5-6)</option>
                  <option value="8">Strong Budget (7-8)</option>
                  <option value="10">Unlimited Budget (9-10)</option>
                </select>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 !mb-5">
                <div className="space-y-1">
                  <label className="font-medium text-gray-700">
                    Leadership Support (1-10 scale)*
                  </label>
                  <select
                    value={formData.leadershipSupport}
                    onChange={(e) =>
                      handleInputChange("leadershipSupport", e.target.value)
                    }
                    className="w-full border rounded-lg p-3 bg-white"
                  >
                    <option value="">Select leadership support</option>
                    <option value="2">Minimal Support (1-2)</option>
                    <option value="4">Some Support (3-4)</option>
                    <option value="6">Good Support (5-6)</option>
                    <option value="8">Strong Support (7-8)</option>
                    <option value="10">Champion Level (9-10)</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-medium text-gray-700">
                    Employee Digital Skills (1-10 scale)*
                  </label>
                  <select
                    value={formData.employeeSkills}
                    onChange={(e) =>
                      handleInputChange("employeeSkills", e.target.value)
                    }
                    className="w-full border rounded-lg p-3 bg-white"
                  >
                    <option value="">Select skill level</option>
                    <option value="2">Basic Skills (1-2)</option>
                    <option value="4">Moderate Skills (3-4)</option>
                    <option value="6">Good Skills (5-6)</option>
                    <option value="8">Advanced Skills (7-8)</option>
                    <option value="10">Expert Level (9-10)</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-medium text-gray-700">
                    Data Maturity Level (1-10 scale)*
                  </label>
                  <select
                    value={formData.dataMaturity}
                    onChange={(e) =>
                      handleInputChange("dataMaturity", e.target.value)
                    }
                    className="w-full border rounded-lg p-3 bg-white"
                  >
                    <option value="">Select data maturity</option>
                    <option value="2">Basic Data (1-2)</option>
                    <option value="4">Structured Data (3-4)</option>
                    <option value="6">Analytics Ready (5-6)</option>
                    <option value="8">Data-Driven (7-8)</option>
                    <option value="10">AI-Ready (9-10)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-medium text-gray-700">
                    Competitive Pressure (1-10 scale)*
                  </label>
                  <select
                    value={formData.competitorPressure}
                    onChange={(e) =>
                      handleInputChange("competitorPressure", e.target.value)
                    }
                    className="w-full border rounded-lg p-3 bg-white"
                  >
                    <option value="">Select competitive pressure</option>
                    <option value="2">Low Pressure (1-2)</option>
                    <option value="4">Some Pressure (3-4)</option>
                    <option value="6">Moderate Pressure (5-6)</option>
                    <option value="8">High Pressure (7-8)</option>
                    <option value="10">Intense Pressure (9-10)</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Customer Digital Expectations (1-10 scale)*
                </label>
                <select
                  value={formData.customerExpectations}
                  onChange={(e) =>
                    handleInputChange("customerExpectations", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select customer expectations</option>
                  <option value="2">Low Expectations (1-2)</option>
                  <option value="4">Basic Digital (3-4)</option>
                  <option value="6">Moderate Digital (5-6)</option>
                  <option value="8">High Digital (7-8)</option>
                  <option value="10">Cutting-edge (9-10)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Organization Description*
                </label>
                <textarea
                  value={formData?.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="e.g., cloud-first organization with AI analytics, mobile-first customer experience, and agile development practices"
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
                      <div className="text-left">
                        <p className="text-sm text-gray-600">
                          Transformation Readiness
                        </p>
                        <p className="text-4xl font-bold text-green-600">
                          {result.score}/100
                        </p>
                        <p className="text-lg font-semibold text-gray-700 mt-1">
                          {result.level}
                        </p>
                      </div>
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        {result.score >= 80 ? (
                          <Star className="w-8 h-8 text-green-600" />
                        ) : result.score >= 65 ? (
                          <CheckCircle className="w-8 h-8 text-green-600" />
                        ) : result.score >= 45 ? (
                          <AlertTriangle className="w-8 h-8 text-orange-500" />
                        ) : (
                          <TrendingDown className="w-8 h-8 text-red-500" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="border p-4 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Risk Level</span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          result.riskLevel === "Low"
                            ? "bg-green-100 text-green-800"
                            : result.riskLevel === "Medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : result.riskLevel === "Medium-High"
                                ? "bg-orange-100 text-orange-800"
                                : "bg-red-100 text-red-800"
                        }`}
                      >
                        {result.riskLevel}
                      </span>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
                    <h4 className="font-semibold text-blue-900 mb-3">
                      Strategic Recommendations
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
                      Assessment Breakdown
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Organization & Leadership
                        </span>
                        <span className="font-semibold">20 points max</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Technology & Skills
                        </span>
                        <span className="font-semibold">20 points max</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Data & Customer Focus
                        </span>
                        <span className="font-semibold">20 points max</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Market & Competition
                        </span>
                        <span className="font-semibold">10 points max</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Digital Maturity Bonus
                        </span>
                        <span className="font-semibold">30 points max</span>
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
                      Ready to get results?
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Complete the assessment questions on the left to receive
                      your personalized readiness assessment results. ✨
                    </p>

                    <button
                      onClick={() => document.querySelector("select")?.focus()}
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
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="container max-w-7xl main-section-padding mx-auto px-4">
          <div className="text-center space-y-4 mb-8">
            <Heading
              type="h2"
              className="lg:!text-[34px] md:!text-3xl !text-2xl !font-bold mb-4"
              text="Understanding Your Readiness Level"
            />
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              Learn what your score means and get specific guidance for your
              organization's transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-500">
              <div className="flex items-center mb-2">
                <TrendingDown className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  0-44 Points
                </h3>
              </div>
              <h4 className="font-semibold text-red-600 mb-2">
                Needs Improvement
              </h4>
              <p className="text-sm text-gray-600">
                Significant preparation required. Focus on building foundational
                capabilities and securing leadership commitment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500">
              <div className="flex items-center mb-2">
                <AlertTriangle className="w-8 h-8 text-orange-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  45-64 Points
                </h3>
              </div>
              <h4 className="font-semibold text-orange-600 mb-2">Fair</h4>
              <p className="text-sm text-gray-600">
                Basic readiness exists but major improvements needed. Start with
                pilot projects and skill development.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-2">
                <CheckCircle className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  65-79 Points
                </h3>
              </div>
              <h4 className="font-semibold text-blue-600 mb-2">Good</h4>
              <p className="text-sm text-gray-600">
                Strong foundation with some gaps. Address identified areas
                before major transformation initiatives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-2">
                <Star className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  80-100 Points
                </h3>
              </div>
              <h4 className="font-semibold text-green-600 mb-2">Excellent</h4>
              <p className="text-sm text-gray-600">
                Outstanding readiness. Focus on advanced initiatives and
                becoming a digital leader in your industry.
              </p>
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
          toolFormData={{ toolFormData: formData }}
        />
      )}
    </>
  );
};

export default DigitalTransformationReadinessChecker;
