"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Calculator, CheckCircle, Loader2, Sparkles } from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import { featureComplexityTimelineEstimator } from "../lib/featureComplexityVsTimelineEstimatorService";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const FeatureComplexityVsTimeEstimator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [factors, setFactors] = useState({
    ui_complexity: 1,
    data_integration: 1,
    business_logic: 1,
    user_interaction: 1,
    platform_requirements: 1,
    security_needs: 1,
  });
  const [description, setDescription] = useState("");

  const [result, setResult] = useState();

  const handleCalculate = async () => {
    setIsCalculating(true);

    const resultData = featureComplexityTimelineEstimator(description, factors);

    setTimeout(() => {
      setResult(resultData);
      setIsCalculating(false);
      if (!hasVisited) {
        setOpenPopup(true);
      }
    }, 1500);
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
            Feature Complexity vs
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              &nbsp;Time Estimator
            </span>
          </>
        }
        buttonText="Start Estimating"
        description={
          <>
            Get accurate development time estimates using AI-powered
            <br className="md:block hidden" /> complexity analysis. Plan better,
            deliver faster, and avoid project overruns.
          </>
        }
        imageSrc="/images/v2/feature-complexity-vs-timeline-estimator-banner.webp"
        statsGird={[
          { value: "10K+", label: "Projects Analyzed" },
          { value: "500K+", label: "Hours Estimated" },
          { value: "95%", label: "Accuracy Rate" },
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
              Feature Complexity Calculator
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Enter your project details and get instant time estimates
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-2">
                Project Details
              </h2>
              <div className="space-y-1">
                <label className="font-medium text-gray-600">
                  Feature Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your feature in detail... (e.g., 'Advanced user dashboard with real-time analytics, authentication, and mobile responsive design')"
                  rows={3}
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>

              {Object.entries(factors).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-semibold text-gray-700 mb-3 capitalize">
                    {key.replace("_", " ")} (1-5)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={value}
                      onChange={(e) =>
                        setFactors((prev) => ({
                          ...prev,
                          [key]: parseInt(e.target.value),
                        }))
                      }
                      className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <span className="w-8 text-center font-semibold text-purple-600">
                      {value}
                    </span>
                  </div>
                </div>
              ))}

              {/* Get Quote Button */}
              <button
                onClick={handleCalculate}
                disabled={isCalculating}
                className="w-full bg-gradient-to-r from-indigo-600 to-themeColor text-white rounded-lg py-4 text-lg font-semibold flex items-center justify-center disabled:opacity-50 !mt-6"
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
                <h2 className="text-center text-2xl font-semibold mb-4">
                  Estimation Results
                </h2>

                <div className="space-y-4 w-[90%] mx-auto">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                      <div className="text-sm opacity-90">Complexity Score</div>
                      <div className="text-3xl font-bold">
                        {result.complexity_score}/5
                      </div>
                    </div>
                    <div className="flex flex-col items-center bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl p-6 text-white">
                      <div className="text-sm opacity-90">Estimated Hours</div>
                      <div className="text-3xl font-bold">
                        {result.estimated_hours}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Difficulty Level
                    </h4>
                    <div
                      className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold ${
                        result.difficulty_level === "Very Complex"
                          ? "bg-red-100 text-red-800"
                          : result.difficulty_level === "Complex"
                            ? "bg-orange-100 text-orange-800"
                            : result.difficulty_level === "Moderate"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-800"
                      }`}
                    >
                      {result.difficulty_level}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Recommendations
                    </h4>
                    <ul className="space-y-2">
                      {result.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-2xl font-semibold mb-2">
                  Estimation Results
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
                      Fill out the form and click calculate to see your
                      estimation results ✨
                    </p>

                    <button
                      onClick={() =>
                        document.querySelector("textarea")?.focus()
                      }
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
          toolFormData={{ toolFormData: { ...factors, description } }}
        />
      )}
    </>
  );
};

export default FeatureComplexityVsTimeEstimator;
