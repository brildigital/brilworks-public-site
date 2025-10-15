"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  AlertTriangle,
  Bug,
  Calculator,
  CheckCircle,
  CheckCircle2,
  Clock,
  Code2,
  Lightbulb,
  Loader2,
  Shield,
  Sparkles,
  Target,
  XCircle,
  Zap,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { getScoreColor, hasSubmittedForm } from "../lib/commonFunction";
import {
  calculateCodeQuality,
  calculateMvpFeatureSelector,
} from "../lib/toolsCalculation";

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
    language: "",
    framework: "",
    codeSnippet: "",
    description: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.language &&
      formData?.framework &&
      formData?.codeSnippet &&
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

    const resultData = calculateCodeQuality(
      formData.codeSnippet,
      formData.description
    );

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
            Code Quality &nbsp;
            <br className="md:block hidden" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Analyzer (Lite)
            </span>
          </>
        }
        buttonText="Start Analyzing Now"
        description={
          <>
            Analyze your code instantly and get actionable insights on quality,
            security, and performance. Identify issues before{" "}
            <br className="md:block hidden " />
            they become problems.
          </>
        }
        imageSrc="/images/v2/MVP-feature -selector-banner.webp"
        statsGird={[
          { value: "50K+", label: "Code Analyses" },
          {
            value: "99%",
            label: "Accuracy Rate",
          },
          {
            value: "2sec",
            label: "Average Analysis Time",
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
              Code Quality Analyzer
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Paste your code and get instant quality analysis with actionable
              recommendations
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-0.5">
                  <label className="font-medium text-gray-700">Language</label>
                  <input
                    type="text"
                    value={formData.language}
                    onChange={(e) =>
                      handleInputChange("language", e.target.value)
                    }
                    placeholder="e.g., JavaScript, Python"
                    className="w-full border rounded-lg p-3 bg-white"
                  />
                </div>
                <div className="space-y-0.5">
                  <label className="font-medium text-gray-700">Framework</label>
                  <input
                    type="text"
                    value={formData.framework}
                    onChange={(e) =>
                      handleInputChange("framework", e.target.value)
                    }
                    placeholder="e.g., React, Node"
                    className="w-full border rounded-lg p-3 bg-white"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Code Snippet*
                </label>
                <textarea
                  value={formData?.codeSnippet}
                  onChange={(e) =>
                    handleInputChange("codeSnippet", e.target.value)
                  }
                  placeholder="Paste your code here ..."
                  rows={10}
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Description*
                </label>
                <textarea
                  value={formData?.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Describe what this code does. Include keywords like 'test', 'error handling', 'TypeScript' for more accurate analysis..."
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
                    Analyzing Code...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-5 w-5" />
                    Analyze Code Quality
                  </>
                )}
              </button>
            </div>

            {/* Cost Estimate */}
            <div className="popup bg-white rounded-2xl border shadow-lg p-8">
              <h2 className="text-center text-2xl font-semibold mb-4">
                Your Analysis Results
              </h2>
              {result && hasVisited ? (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between pb-4 border-b-2 border-green-600">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Analysis Results
                    </h3>
                    <div
                      className={`w-16 h-16 ${
                        result.overallScore >= 80
                          ? "bg-green-100"
                          : result.overallScore >= 60
                          ? "bg-yellow-100"
                          : "bg-red-100"
                      } rounded-full flex items-center justify-center`}
                    >
                      <span
                        className={`text-2xl font-bold ${getScoreColor(
                          result.overallScore
                        )}`}
                      >
                        {result.grade}
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">
                        Overall Score
                      </h4>
                      <span
                        className={`text-3xl font-bold ${getScoreColor(
                          result.overallScore
                        )}`}
                      >
                        {result.overallScore}/100
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${
                          result.overallScore >= 80
                            ? "bg-green-500"
                            : result.overallScore >= 60
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${result.overallScore}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                    <div className="bg-red-50 border border-red-200 rounded-xl p-2 text-center">
                      <div className="text-xl font-bold text-red-600">
                        {result.issues.critical}
                      </div>
                      <div className="text-xs text-gray-600 flex items-center gap-2 justify-center">
                        <XCircle className="w-4 h-4 text-red-600" />
                        Critical
                      </div>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-2 text-center">
                      <div className="text-xl font-bold text-orange-600">
                        {result.issues.major}
                      </div>
                      <div className="text-xs text-gray-600 flex items-center gap-2 justify-center">
                        <AlertTriangle className="w-4 h-4 text-orange-600" />
                        Major
                      </div>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-2 text-center">
                      <div className="text-xl font-bold text-yellow-600">
                        {result.issues.minor}
                      </div>
                      <div className="text-xs text-gray-600 flex items-center gap-2 justify-center">
                        <AlertTriangle className="w-4 h-4 text-yellow-600" />
                        Minor
                      </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-2 text-center">
                      <div className="text-xl font-bold text-blue-600">
                        {result.issues.suggestions}
                      </div>
                      <div className="text-xs text-gray-600 flex items-center gap-2 justify-center">
                        <Target className="w-4 h-4 text-blue-600" />
                        Tips
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Quality Metrics
                    </h4>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                      {Object.entries(result.metrics).map(([key, value]) => (
                        <div key={key}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="capitalize text-gray-700">
                              {key}
                            </span>
                            <span
                              className={`font-semibold ${getScoreColor(
                                value
                              )}`}
                            >
                              {value}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                value >= 80
                                  ? "bg-green-500"
                                  : value >= 60
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                              }`}
                              style={{ width: `${value}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                      Strengths
                    </h4>
                    <ul className="space-y-2">
                      {result.strengths.map((strength, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-700"
                        >
                          <span className="text-green-600 mr-2">✓</span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <AlertTriangle className="w-5 h-5 text-amber-600 mr-2" />
                      Improvements Needed
                    </h4>
                    <ul className="space-y-2">
                      {result.improvements.map((improvement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-700"
                        >
                          <span className="text-amber-600 mr-2">!</span>
                          {improvement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 text-center">
                      <div className="text-xl font-bold text-gray-900">
                        {result.codeSmells}
                      </div>
                      <div className="text-xs text-gray-600 flex items-center gap-2 justify-center">
                        <Bug className="w-4 h-4 text-slate-600" />
                        Code Smells
                      </div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 text-center">
                      <div className="text-xl font-bold text-gray-900">
                        {result.duplications}%
                      </div>
                      <div className="text-xs text-gray-600 flex items-center gap-2 justify-center">
                        <Code2 className="w-4 h-4 text-slate-600" /> Duplication
                      </div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 text-center">
                      <div className="text-xl font-bold text-gray-900">
                        {result.coverage}%
                      </div>
                      <div className="text-xs text-gray-600 flex items-center gap-2 justify-center">
                        <Shield className="w-4 h-4 text-slate-600" /> Coverage
                      </div>
                    </div>
                  </div>

                  {/* <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Estimated Fix Time
                        </h4>
                        <p className="text-sm text-gray-600">
                          Based on identified issues
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span className="text-xl font-bold text-gray-900">
                          {result.estimatedFixTime}
                        </span>
                      </div>
                    </div>
                  </div> */}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative my-12">
                      <div className="animate-pulse w-24 h-24 bg-themeColor rounded-full flex items-center justify-center">
                        <Code2 className="w-12 h-12 text-white" />
                      </div>
                      <div className="animate-ping absolute -top-6 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-yellow-800" />
                      </div>
                      <div className="animate-ping absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-2 h-2 text-yellow-800" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-700">
                      Ready to get analysis?
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Complete the form on the left to receive your analysis. ✨
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
