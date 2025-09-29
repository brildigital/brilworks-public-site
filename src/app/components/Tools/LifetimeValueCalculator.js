"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Calculator, Loader2, Sparkles, Wallet } from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import {
  calculateSaasDevCostEstimate,
  saasDevelopmentFeatures,
} from "../lib/saasDevCostCalculatorService";
import { PriceSkeleton } from "../Blog/ArticleSkeleton";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const LifetimeValueCalculator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState({
    platform: "",
    complexity: "",
    features: [],
    design: "",
    timeline: "",
    description: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.platform &&
      formData?.complexity &&
      formData?.features.length > 0 &&
      formData?.timeline &&
      formData?.design &&
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

    const resultData = calculateSaasDevCostEstimate(formData);

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

  const handleFeatureChange = (featureId) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter((id) => id !== featureId)
        : [...prev.features, featureId],
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
            Calculate Customer&nbsp;
            <br className="md:block hidden" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Lifetime Value
            </span>
          </>
        }
        buttonText="Start Calculating"
        description="Unlock the true value of your customers with our advanced LTV calculator. Make data-driven decisions and optimize your marketing ROI with precision."
        imageSrc="/images/v2/customer-lifetime-value-banner.webp"
        statsGird={[
          { value: "10K+", label: "Trusted by Businesses" },
          { value: "25%", label: "Profits increase" },
          { value: "2M+", label: "Users Helped" },
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
              Calculate Your SaaS Development Cost
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out the form below to get your instant cost estimate
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-2.5">
              {/* Platform */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  Platform <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.platform}
                  onChange={(e) =>
                    handleInputChange("platform", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select your target platform</option>

                  <option value="web">Web Application</option>
                  <option value="mobile">Mobile App (iOS/Android)</option>
                  <option value="both">Web + Mobile</option>
                </select>
              </div>

              {/* Project Complexity */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  Project Complexity <span className="text-red-500">*</span>
                </label>

                <select
                  value={formData?.complexity}
                  onChange={(e) =>
                    handleInputChange("complexity", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select complexity</option>
                  <option value="simple">
                    Simple (Basic CRUD, few integrations)
                  </option>
                  <option value="medium">
                    Medium (Multiple modules, API integrations)
                  </option>
                  <option value="complex">
                    Complex (Advanced features, complex workflows)
                  </option>
                  <option value="enterprise">
                    Enterprise (Scalable, high-performance)
                  </option>
                </select>
              </div>

              {/* Key Features */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">Key Features</label>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-1.5">
                  {saasDevelopmentFeatures?.map((feature) => (
                    <label
                      key={feature.id}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.features.includes(feature?.id)}
                        onChange={() => handleFeatureChange(feature?.id)}
                        className="rounded text-purple-600 focus:ring-purple-500 w-4 h-4"
                      />
                      <span>{feature?.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Design Requirements */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  Design Requirements <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.designLevel}
                  onChange={(e) => handleInputChange("design", e.target.value)}
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select design level</option>
                  <option value="basic">Basic (Template-based design)</option>
                  <option value="standard">
                    Standard (Custom with standard UI)
                  </option>
                  <option value="premium">
                    Premium (Modern, polished UI/UX)
                  </option>
                  <option value="custom">
                    Custom (Unique, brand-focused design)
                  </option>
                </select>
              </div>

              {/* Timeline */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  Timeline <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) =>
                    handleInputChange("timeline", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select timeline</option>
                  <option value="rushed">Rush (Need ASAP - 50% premium)</option>
                  <option value="normal">Normal (Standard timeline)</option>
                  <option value="flexible">Flexible (10% discount)</option>
                </select>
              </div>

              {/* Project Description */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  Project Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Describe your app idea..."
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
                    Get My Instant Quote
                  </>
                )}
              </button>
            </div>

            {/* Cost Estimate */}
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

                  <p className="text-gray-600 max-w-2xl mx-auto">
                    The platform, design requirement, description, and project
                    complexity are considered when calculating the cost. This is
                    an estimate to give you an idea of the possible budget range
                    for your project. For a more accurate estimate, consult with
                    our specialist.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> This estimate includes development,
                    testing, and basic deployment. Additional costs may include
                    ongoing maintenance, marketing, and third-party services.
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
        />
      )}
    </>
  );
};

export default LifetimeValueCalculator;
