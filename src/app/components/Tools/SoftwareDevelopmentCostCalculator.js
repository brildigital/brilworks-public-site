"use client";
import { Calculator, Loader2, Sparkles, Wallet } from "lucide-react";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { CostCalculationService } from "../lib/costCalculationService";
import { PriceSkeleton } from "../Blog/ArticleSkeleton";
import { usePathname } from "next/navigation";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import ToolFAQs from "./ToolFAQs";
import ToolHowToUse from "./ToolHowToUse";
import ToolFeatures from "./ToolFeatures";
import ToolHerosection from "./ToolHerosection";
import { hasSubmittedForm } from "../lib/commonFunction";

const SoftwareDevelopmentCostCalculator = () => {
  const pathname = usePathname();
  const [inputs, setInputs] = useState({
    platform: "",
    complexity: "",
    features: [],
    design: "",
    timeline: "",
    description: "",
    email: "",
    name: "",
  });
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    setHasVisited(hasSubmittedForm(pathname));
  }, [pathname, openPopup]);

  const platforms = [
    { value: "ios", label: "iOS Only" },
    { value: "android", label: "Android Only" },
    { value: "cross-platform", label: "Cross-Platform (React Native)" },
    { value: "web", label: "Web Application" },
    { value: "all", label: "iOS + Android + Web" },
  ];

  const complexityLevels = [
    { value: "simple", label: "Simple (Basic functionality, few screens)" },
    { value: "medium", label: "Medium (Multiple features, user accounts)" },
    { value: "complex", label: "Complex (Advanced features, integrations)" },
  ];

  const availableFeatures = [
    "User Authentication",
    "Payment Processing",
    "Real-time Chat",
    "GPS/Location Services",
    "Camera Integration",
    "Push Notifications",
    "Social Media Login",
    "Admin Dashboard",
    "Analytics Dashboard",
    "Third-party Integrations",
  ];

  const designOptions = [
    { value: "basic", label: "Basic UI (Template-based)" },
    { value: "custom", label: "Custom Design" },
    {
      value: "premium",
      label: "Premium Design (Advanced animations, branding)",
    },
  ];

  const timelines = [
    { value: "rush", label: "Rush (1-2 months)" },
    { value: "standard", label: "Standard (3-4 months)" },
    { value: "flexible", label: "Flexible (6+ months)" },
  ];

  const authority = [
    "No Credit Card Required",
    "Instant Results",
    "100% Free Forever",
  ];

  const handleFeatureChange = (feature, checked) => {
    setInputs((prev) => ({
      ...prev,
      features: checked
        ? [...prev.features, feature]
        : prev.features.filter((f) => f !== feature),
    }));
  };

  const isFormValid = () => {
    return (
      inputs.platform &&
      inputs.complexity &&
      inputs.design &&
      inputs.timeline &&
      inputs.description.trim()
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
    try {
      const calculationResult = await CostCalculationService.calculateCost(
        inputs
      );
      setResult(calculationResult);

      if (!hasVisited) {
        setOpenPopup(true);
      }
    } catch (error) {
      console.log("Error calculating software development cost");
    }
    setTimeout(() => {
      setIsCalculating(false);
    }, 3000);
  };

  useEffect(() => {
    const hasVisitedPage = hasSubmittedForm(pathname);
    if (!hasVisitedPage && result) {
      setOpenPopup(true);
    }
  }, [result]);

  return (
    <>
      <ToolHerosection
        title="Software Development Cost Calculator"
        description="Estimate the cost and timeline for developing your project using the user-friendly software development cost calculator. Answer just five questions and get an estimate for your project. Your journey to a seamlessly executed software project begins with a free, tailored estimation."
        imageSrc="/images/v2/software-dev-cost-calc-banner.webp"
        authority={authority}
      />
      <ToolHowToUse />
      <ToolFeatures />
      <div
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
            App Development Cost Calculator
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Get an instant estimate for your mobile or web application project.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Main Form Card */}
          <div className="bg-white rounded-2xl border shadow-lg p-8">
            <div className="grid gap-4">
              {/* Platform */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">Platform *</label>
                <select
                  value={inputs.platform}
                  onChange={(e) =>
                    setInputs((prev) => ({
                      ...prev,
                      platform: e.target.value,
                    }))
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select your target platform</option>
                  {platforms.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Complexity */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  Project Complexity *
                </label>
                <select
                  value={inputs.complexity}
                  onChange={(e) =>
                    setInputs((prev) => ({
                      ...prev,
                      complexity: e.target.value,
                    }))
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select complexity</option>
                  {complexityLevels.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Features */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">Key Features</label>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                  {availableFeatures.map((feature) => (
                    <label
                      key={feature}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        checked={inputs.features.includes(feature)}
                        onChange={(e) =>
                          handleFeatureChange(feature, e.target.checked)
                        }
                      />
                      <span>{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Design */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  Design Requirements *
                </label>
                <select
                  value={inputs.design}
                  onChange={(e) =>
                    setInputs((prev) => ({ ...prev, design: e.target.value }))
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select design level</option>
                  {designOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Timeline */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">Timeline *</label>
                <select
                  value={inputs.timeline}
                  onChange={(e) =>
                    setInputs((prev) => ({
                      ...prev,
                      timeline: e.target.value,
                    }))
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select timeline</option>
                  {timelines.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  Project Description *
                </label>
                <textarea
                  value={inputs.description}
                  onChange={(e) =>
                    setInputs((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  className="w-full min-h-[120px] border rounded-lg p-3 bg-white"
                  placeholder="Describe your app idea..."
                />
              </div>

              {/* Button */}
              <button
                onClick={handleCalculate}
                disabled={!isFormValid() || isCalculating}
                className="bg-gradient-to-r from-indigo-600 to-themeColor text-white rounded-lg py-4 text-lg font-semibold flex items-center justify-center disabled:opacity-50"
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
          </div>

          {/* Results */}
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
                    `$${result.cost.toLocaleString()}`
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
        </div>
      </div>
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

export default SoftwareDevelopmentCostCalculator;
