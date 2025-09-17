"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Calculator, Loader2, Sparkles, Wallet } from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { calculateMobilityAppCost } from "../lib/mobiltyAppDevelopmentService";
import { hasSubmittedForm } from "../lib/commonFunction";
import { PriceSkeleton } from "../Blog/ArticleSkeleton";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const MobilityAppDevCostCalculator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState({
    complexity: "",
    platform: "",
    features: [],
    design: "",
    backend: "",
    regions: "",
    description: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.complexity &&
      formData?.platform &&
      formData?.features.length > 0 &&
      formData?.design &&
      formData?.backend &&
      formData?.regions &&
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

    const results = calculateMobilityAppCost(formData);

    setResult(results);

    if (!hasVisited) {
      setOpenPopup(true);
    }

    setTimeout(() => {
      setIsCalculating(false);
    }, 3000);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFeatureToggle = (feature) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  useEffect(() => {
    setHasVisited(hasSubmittedForm(pathname));
  }, [pathname, openPopup]);

  return (
    <>
      <ToolHerosection
        title={
          <>
            Mobility App <br />
            Development Cost Calculator
          </>
        }
        description="Get instant, accurate cost estimates for your ride-hailing app development project. From MVP to enterprise-scale solutions."
        imageSrc="/images/v2/mobility-app-banner.webp"
        statsGird={[
          { value: "$40K+", label: "Apps Calculated" },
          { value: "94%", label: "Accuracy Rate" },
          { value: "1.5M+", label: "Users Helped" },
        ]}
      />

      <ToolHowToUse />
      <ToolFeatures />
      <section
        id="price-estimate"
        className="container max-w-[1280px] main-section-padding mx-auto"
      >
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-indigo-500 to-themeColor p-4 rounded-full shadow-lg">
              <Calculator className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent mb-4">
            Interactive Cost Calculator
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Customize your requirements and get an instant cost estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="bg-white p-8 rounded-2xl border shadow-lg">
            {/* App Complexity */}
            <div className="mb-2.5">
              <label className="text-lg font-semibold">
                App Complexity<span className="text-red-500">*</span>{" "}
              </label>
              <select
                value={formData.complexity}
                onChange={(e) =>
                  handleInputChange("complexity", e.target.value)
                }
                className="w-full p-3 border bg-white rounded-lg mt-1"
              >
                <option value="">Select app complexity</option>
                <option value="basic">Basic</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
              </select>
            </div>

            {/* Platforms */}
            <div className="mb-2.5">
              <label className="text-lg font-semibold">
                Target Platforms<span className="text-red-500">*</span>{" "}
              </label>
              <select
                value={formData.platform}
                onChange={(e) => handleInputChange("platform", e.target.value)}
                className="w-full p-3 border bg-white rounded-lg mt-1"
              >
                <option value="">Select design completely</option>
                <option value="ios">iOS Only</option>
                <option value="android">Android Only</option>
                <option value="both">Both Platforms</option>
              </select>
            </div>

            {/* Features */}
            <div className="mb-2.5">
              <label className="text-lg font-semibold">
                Required Features<span className="text-red-500">*</span>{" "}
              </label>
              <div className="grid grid-cols-2 gap-1.5 mt-1.5">
                {[
                  { key: "gps", label: "GPS & Maps" },
                  { key: "payments", label: "Payment Gateway" },
                  { key: "tracking", label: "Real-time Tracking" },
                  { key: "chat", label: "In-app Chat" },
                  { key: "ratings", label: "Rating System" },
                  { key: "notifications", label: "Push Notifications" },
                  { key: "analytics", label: "Analytics Dashboard" },
                  { key: "scheduling", label: "Ride Scheduling" },
                ].map((feature) => (
                  <label
                    key={feature.key}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.features.includes(feature.key)}
                      onChange={() => handleFeatureToggle(feature.key)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span>{feature.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Design Complexity */}
            <div className="mb-2.5">
              <label className="text-lg font-semibold">
                Design Complexity<span className="text-red-500">*</span>{" "}
              </label>
              <select
                value={formData.design}
                onChange={(e) => handleInputChange("design", e.target.value)}
                className="w-full p-3 border bg-white rounded-lg mt-1"
              >
                <option value="">Select design completely</option>
                <option value="basic">Basic Design</option>
                <option value="standard">Standard Design</option>
                <option value="premium">Premium Design</option>
              </select>
            </div>

            {/* Backend */}
            <div className="mb-2.5">
              <label className="text-lg font-semibold">
                Backend Requirements
                <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.backend}
                onChange={(e) => handleInputChange("backend", e.target.value)}
                className="w-full p-3 border bg-white rounded-lg mt-1"
              >
                <option value="">Select backend requirement</option>
                <option value="basic">Basic Backend</option>
                <option value="standard">Standard Backend</option>
                <option value="premium">Enterprise Backend</option>
              </select>
            </div>

            {/* Geographic Scope */}
            <div className="mb-2.5">
              <label className="text-lg font-semibold">
                Geographic Scope<span className="text-red-500">*</span>{" "}
              </label>
              <select
                value={formData.regions}
                onChange={(e) => handleInputChange("regions", e.target.value)}
                className="w-full p-3 border bg-white rounded-lg mt-1"
              >
                <option value="">Select geographic scope</option>
                <option value="single">Single City/Region</option>
                <option value="multiple">Multiple Cities</option>
                <option value="global">Global Scale</option>
              </select>
            </div>

            <div className="mb-4">
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

          {/* Cost Display */}
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
                    Fill out the form on the left and your instant cost estimate
                    will magically appear here ✨
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

          {/* <div className="text-center mb-8">
              <div className="text-5xl font-bold text-blue-600 mb-2">
                ${result.toLocaleString()}
              </div>
              <p className="text-gray-600 font-semibold">
                Estimated Development Cost
              </p>
            </div> */}

          {/* <div className="space-y-4 mb-8">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Complexity Level:</span>
                <span className="font-medium text-gray-900 capitalize">
                  {formData.complexity}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Platforms:</span>
                <span className="font-medium text-gray-900 capitalize">
                  {formData.platforms === "both"
                    ? "iOS & Android"
                    : formData.platforms}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Features Count:</span>
                <span className="font-medium text-gray-900">
                  {formData.features.length} selected
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Timeline:</span>
                <span className="font-medium text-gray-900">
                  {formData.complexity === "basic"
                    ? "6-9"
                    : formData.complexity === "standard"
                    ? "9-12"
                    : "12-18"}{" "}
                  months
                </span>
              </div>
            </div> */}
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

export default MobilityAppDevCostCalculator;
