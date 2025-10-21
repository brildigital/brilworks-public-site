"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Gauge, Loader2, Sparkles, Zap } from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import { calculatePerformanceBenchmark } from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const PerformanceBenchmarkingTool = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState({
    pageLoadTime: "",
    timeToInteractive: "",
    apiResponseTime: "",
    throughput: "",
    description: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.pageLoadTime &&
      formData?.timeToInteractive &&
      formData?.apiResponseTime &&
      formData?.throughput &&
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

    const resultData = calculatePerformanceBenchmark(formData);

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
            Performance &nbsp;
            <br className="md:block hidden" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Benchmarking Tool
            </span>
          </>
        }
        buttonText="Benchmark Your App"
        description="Measure and optimize your application's performance with comprehensive benchmarking. Get detailed metrics, industry comparisons, and actionable recommendations to deliver lightning-fast user experiences."
        imageSrc="/images/v2/performance-benchmarking-tool-banner.webp"
        statsGird={[
          { value: "<2s", label: "Avg Load Time" },
          {
            value: "99%",
            label: "Accuracy",
          },
          {
            value: "40%",
            label: "Faster Apps",
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
              Run Performance Benchmark
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Enter your performance metrics for detailed analysis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 md:p-8 p-5 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-2">
                Performance Metrics
              </h2>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Page Load Time (ms)*
                </label>
                <input
                  id="pageLoadTime"
                  type="number"
                  className="w-full border rounded-lg p-3 bg-white"
                  value={formData.pageLoadTime}
                  onChange={(e) =>
                    handleInputChange("pageLoadTime", e.target.value)
                  }
                  placeholder="e.g., 1500"
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
                <p className="!mt-1 text-xs text-gray-500">
                  Time until page is fully loaded
                </p>
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Time to Interactive (ms)*
                </label>
                <input
                  id="timeToInteractive"
                  type="number"
                  className="w-full border rounded-lg p-3 bg-white"
                  value={formData.timeToInteractive}
                  placeholder="e.g., 2500"
                  onChange={(e) =>
                    handleInputChange("timeToInteractive", e.target.value)
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
                <p className="!mt-1 text-xs text-gray-500">
                  Time until page becomes fully interactive
                </p>
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  API Response Time (ms)*
                </label>
                <input
                  id="apiResponseTime"
                  type="number"
                  className="w-full border rounded-lg p-3 bg-white"
                  value={formData.apiResponseTime}
                  placeholder="e.g., 300"
                  onChange={(e) =>
                    handleInputChange("apiResponseTime", e.target.value)
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
                <p className="!mt-1 text-xs text-gray-500">
                  Average API response time
                </p>
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Throughput (requests/second)*
                </label>
                <input
                  id="throughput"
                  type="number"
                  className="w-full border rounded-lg p-3 bg-white"
                  value={formData.throughput}
                  placeholder="e.g., 150"
                  onChange={(e) =>
                    handleInputChange("throughput", e.target.value)
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
                <p className="!mt-1 text-xs text-gray-500">
                  Maximum concurrent requests handled
                </p>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Additional Details & Optimizations*
                </label>
                <textarea
                  value={formData?.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Describe your current setup and optimizations. Include keywords like: CDN, cache, Redis, optimized, compressed, lazy load, code split, or issues like: slow, timeout, bottleneck, etc."
                  rows={3}
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>
              <p className="!mt-2 text-sm text-gray-500">
                Tip: Mention optimizations and performance issues for more
                accurate results
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
                    Running Benchmark...
                  </>
                ) : (
                  <>Run Benchmark</>
                )}
              </button>
            </div>

            {/* Cost Estimate */}
            <div className="popup bg-white rounded-2xl border shadow-lg p-8">
              <h2 className="text-center text-2xl font-semibold mb-4">
                Benchmark Results
              </h2>
              {result && hasVisited ? (
                <div className="space-y-2">
                  <div className="bg-white px-4 py-2 rounded-xl border border-violet-100 text-center">
                    <p className="text-sm font-semibold text-gray-600 mb-2">
                      OVERALL PERFORMANCE SCORE
                    </p>
                    <p className={`text-5xl font-bold ${result.color} mb-2`}>
                      {result.overallScore}
                    </p>
                    <p className={`text-xl font-semibold ${result.color}`}>
                      {result.grade}
                    </p>
                  </div>

                  {result.benchmarks.map((benchmark, idx) => (
                    <div
                      key={idx}
                      className="bg-white px-4 py-2.5 rounded-xl border border-violet-100"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-gray-900">
                          {benchmark.category}
                        </h4>
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl font-bold text-violet-600">
                            {benchmark.score}
                          </span>
                          <span
                            className={`px-3 py-1 rounded-lg font-bold ${
                              benchmark.grade === "A"
                                ? "bg-green-100 text-green-700"
                                : benchmark.grade === "B"
                                ? "bg-blue-100 text-blue-700"
                                : benchmark.grade === "C"
                                ? "bg-yellow-100 text-yellow-700"
                                : benchmark.grade === "D"
                                ? "bg-orange-100 text-orange-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {benchmark.grade}
                          </span>
                        </div>
                      </div>
                      <ul className="space-y-1">
                        {benchmark.recommendations.map((rec, recIdx) => (
                          <li
                            key={recIdx}
                            className="flex items-start space-x-2 text-sm text-gray-600"
                          >
                            <span className="text-violet-600 mt-0.5">•</span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-4 rounded-xl text-white">
                    <div className="flex items-start space-x-2">
                      <Zap className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold mb-2">
                          OPTIMIZATION PRIORITY
                        </p>
                        <p className="text-sm leading-relaxed">
                          Focus on the lowest-scoring categories first. Start
                          with quick wins like enabling compression and caching,
                          then move to more complex optimizations like code
                          splitting and database query optimization.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative my-12">
                      <div className="animate-pulse w-24 h-24 bg-themeColor rounded-full flex items-center justify-center">
                        <Gauge className="w-12 h-12 text-white" />
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
                      Complete the Performance Metrics form on the left to get
                      readliness result. ✨
                    </p>

                    <button
                      onClick={() => document.querySelector("input")?.focus()}
                      className="bg-themeColor text-white py-3 px-6 rounded-lg font-medium flex items-center space-x-2 transition-all animate-bounce"
                    >
                      &lArr; Fill out the form to get results
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

export default PerformanceBenchmarkingTool;
