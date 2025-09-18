"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Calculator, Loader2, Sparkles, Star } from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import {
  calculateROI,
  roiCalculatorFeatures,
} from "../lib/roiCalculatorService";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const RoiCalculator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState({
    appType: "",
    complexity: "",
    features: [],
    timeline: "",
    designLevel: "",
    description: "",
    hourlyRate: "100",
    maintenanceYears: "3",
    expectedUsers: "10000",
    revenuePerUser: "5",
  });

  const [results, setResults] = useState();

  const isFormValid = () => {
    return (
      formData?.appType &&
      formData?.complexity &&
      formData?.features.length > 0 &&
      formData?.timeline &&
      formData?.designLevel &&
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

    const results = calculateROI(formData);
    setResults(results);

    if (!hasVisited) {
      setOpenPopup(true);
    }

    setTimeout(() => {
      setIsCalculating(false);
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
    if (!hasVisitedPage && results && !isCalculating) {
      setOpenPopup(true);
    }
  }, [results]);

  return (
    <>
      <ToolHerosection
        title={
          <>
            Calculate Your App's
            <br />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              ROI
            </span>
          </>
        }
        buttonText="Start Calculating"
        description="Get accurate estimates for your mobile app development costs and potential return on investment. Make data-driven decisions with our comprehensive calculator."
        imageSrc="/images/v2/roi-calculator-banner.webp"
        statsGird={[
          { value: "$50K+", label: "Apps Calculated" },
          { value: "95%", label: "Accuracy Rate" },
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
              ROI Calculator
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Enter your project details to get an accurate estimate of
              development costs and potential returns
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
                  value={formData.appType}
                  onChange={(e) => handleInputChange("appType", e.target.value)}
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select your target platform</option>
                  <option value="native">Native iOS/Android</option>
                  <option value="hybrid">Hybrid (React Native/Flutter)</option>
                  <option value="web">Web Application</option>
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
                  <option value="simple">Simple (Basic functionality)</option>
                  <option value="medium">Medium (Standard features)</option>
                  <option value="complex">Complex (Advanced features)</option>
                  <option value="enterprise">
                    Enterprise (Full-scale solution)
                  </option>
                </select>
              </div>

              {/* Key Features */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">Key Features</label>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-1.5">
                  {roiCalculatorFeatures?.map((feature) => (
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
                  onChange={(e) =>
                    handleInputChange("designLevel", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select design level</option>
                  <option value="basic">Basic Design</option>
                  <option value="standard">Standard Design</option>
                  <option value="premium">Premium Design</option>
                  <option value="custom">Custom Design</option>
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
                  <option value="4">1 Month (4 weeks)</option>
                  <option value="8">2 Months (8 weeks)</option>
                  <option value="12">3 Months (12 weeks)</option>
                  <option value="16">4 Months (16 weeks)</option>
                  <option value="24">6 Months (24 weeks)</option>
                  <option value="36">9 Months (36 weeks)</option>
                  <option value="48">12 Months (48 weeks)</option>
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
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                ROI Estimate
              </h3>

              {results?.developmentCost > 0 && hasVisited ? (
                <div className="space-y-6">
                  {/* Main Cost Display */}
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Star className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      ${results?.developmentCost?.toLocaleString()}
                    </div>
                    <p className="text-gray-600">Estimated Development Cost</p>
                  </div>

                  {/* Cost Breakdown */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600">Development</span>
                      <span className="font-semibold text-gray-900">
                        ${results?.developmentCost.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600">Annual Maintenance</span>
                      <span className="font-semibold text-gray-900">
                        $
                        {Math.round(
                          results?.maintenanceCost /
                            parseInt(formData?.maintenanceYears)
                        ).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600">
                        ROI ({formData?.maintenanceYears} years)
                      </span>
                      <span className="font-semibold text-green-600">
                        {results?.roi}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-600">Payback Period</span>
                      <span className="font-semibold text-blue-600">
                        {results?.paybackPeriod} years
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative my-12">
                      <div className="animate-pulse w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                        <Star className="w-12 h-12 text-white" />
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
                      Fill out the form on the left and your instant ROI
                      estimate will magically appear here ✨
                    </p>

                    <button
                      onClick={() => document?.querySelector("select")?.focus()}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium flex items-center space-x-2 hover:from-purple-700 hover:to-blue-700 transition-all animate-bounce"
                    >
                      &lArr; Start by selecting your project details
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <ToolFAQs />
      {results && openPopup && !hasVisited && (
        <ToolsPopupContactForm
          open={openPopup}
          handleClose={() => setOpenPopup(false)}
          result={results}
          setResult={setResults}
        />
      )}
    </>
  );
};

export default RoiCalculator;
