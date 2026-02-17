"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { CalculatorIcon, Loader2, Sparkles, Wallet } from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";

import { PriceSkeleton } from "../Blog/ArticleSkeleton";
import { cloudServiceCostEstimate } from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const CloudServiceCostEstimator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const [formData, setFormData] = useState({
    serviceType: "",
    region: "",
    instances: 1,
    storage: 100,
    bandwidth: 50,
    description: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.serviceType &&
      formData?.region &&
      formData?.instances &&
      formData?.storage &&
      formData?.bandwidth &&
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

    const resultData = cloudServiceCostEstimate(formData);

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
            Cloud Service&nbsp;
            <br className="md:block hidden" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Cost Estimator
            </span>
          </>
        }
        buttonText="Start Calculating"
        description="Get accurate, real-time estimates for your cloud infrastructure costs with our cloud cost analysis tool. Compare providers, optimize spending, and make informed decisions using our intelligent cloud cost estimator."
        imageSrc="/images/v2/cloud-service-cost-estimator.png"
        statsGird={[
          { value: "99.9%", label: "Accuracy Rate" },
          { value: "50K+", label: "Estimates Made" },
          { value: "5+", label: "Cloud Providers Supported" },
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
              Cloud Cost Calculator
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Configure your cloud requirements and get instant cost estimates
              with detailed breakdowns.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-2">
                Configuration
              </h2>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Service Type *
                </label>

                <select
                  value={formData.serviceType}
                  onChange={(e) =>
                    handleInputChange("serviceType", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select Service Type</option>
                  <option value="compute">Compute Instances</option>
                  <option value="storage">Object Storage</option>
                  <option value="database">Database</option>
                  <option value="networking">Networking</option>
                  <option value="ai-ml">AI/Machine Learning</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">Region *</label>
                <select
                  value={formData?.region}
                  onChange={(e) => handleInputChange("region", e.target.value)}
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select Region</option>
                  <option value="us-east-1">US East (N. Virginia)</option>
                  <option value="us-west-2">US West (Oregon)</option>
                  <option value="eu-west-1">Europe (Ireland)</option>
                  <option value="ap-southeast-1">
                    Asia Pacific (Singapore)
                  </option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-medium text-gray-700">
                    Instances (in number) *
                  </label>
                  <input
                    id="instances"
                    type="number"
                    className="w-full border rounded-lg p-3 bg-white"
                    value={formData.instances}
                    onChange={(e) =>
                      handleInputChange("instances", e.target.value)
                    }
                    min="1"
                    onKeyDown={(e) => {
                      if (
                        e.key === "e" ||
                        e.key === "E" ||
                        e.key === "+" ||
                        e.key === "-"
                      ) {
                        e.preventDefault(); // 🚫 block these keys
                      }
                    }}
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-medium text-gray-700">
                    Storage (GB) *
                  </label>
                  <input
                    id="storage"
                    type="number"
                    className="w-full border rounded-lg p-3 bg-white"
                    value={formData.storage}
                    onChange={(e) =>
                      handleInputChange("storage", e.target.value)
                    }
                    min="1"
                    onKeyDown={(e) => {
                      if (
                        e.key === "e" ||
                        e.key === "E" ||
                        e.key === "+" ||
                        e.key === "-"
                      ) {
                        e.preventDefault(); // 🚫 block these keys
                      }
                    }}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Bandwidth (GB/month) *
                </label>
                <input
                  id="bandwidth"
                  type="number"
                  className="w-full border rounded-lg p-3 bg-white"
                  value={formData.bandwidth}
                  onChange={(e) =>
                    handleInputChange("bandwidth", e.target.value)
                  }
                  min="1"
                  onKeyDown={(e) => {
                    if (
                      e.key === "e" ||
                      e.key === "E" ||
                      e.key === "+" ||
                      e.key === "-"
                    ) {
                      e.preventDefault(); // 🚫 block these keys
                    }
                  }}
                />
              </div>

              {/* Project Description */}
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Project Description *
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
                    calculating...
                  </>
                ) : (
                  <>
                    <CalculatorIcon className="mr-2 h-5 w-5" />
                    Get Instant Estimate
                  </>
                )}
              </button>
            </div>

            {result && hasVisited ? (
              <div className="popup bg-white rounded-2xl border shadow-lg p-8">
                <div className=" text-center my-12">
                  <div className="flex justify-center mb-4">
                    <Wallet className="h-12 w-12 text-indigo-500" />
                  </div>
                  <h2 className="text-3xl font-bold">Your Estimated Cost</h2>
                  <div className="text-5xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent my-4">
                    {isCalculating || openPopup ? (
                      <PriceSkeleton />
                    ) : (
                      `$${result?.cost.toLocaleString()}`
                    )}
                  </div>

                  <p className="text-gray-600 max-w-[90%] mx-auto">
                    Service type, region, instance, storage, bandwidth and
                    project description are considered when calculating the
                    cost. This is an estimate to give you an idea of the
                    possible budget range for your cloud service requirements.
                    For a more accurate estimate, consult with our specialist.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-3xl font-semibold mb-2">
                  Cost Estimate
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
                      No Estimate Yet
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Fill out the form on the left and your instant cost
                      estimate will magically appear here ✨
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
          toolFormData={{ toolFormData: formData }}
        />
      )}
    </>
  );
};

export default CloudServiceCostEstimator;
