"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  Award,
  Calculator,
  CheckCircle,
  CheckCircle2,
  Clock,
  DollarSign,
  Loader2,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import {
  calculateAddDevCostBreakdown,
  formatCurrencyForCostBreakdown,
} from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const BuildvsBuySoftwareCalculator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const [formData, setFormData] = useState({
    appType: "",
    platform: "",
    complexity: "",
    features: [],
    designComplexity: "",
    teamLocation: "",
    timeline: "",
    description: "",
  });
  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.appType &&
      formData?.platform &&
      formData?.complexity &&
      formData?.features.length > 0 &&
      formData?.designComplexity &&
      formData?.teamLocation &&
      formData?.timeline &&
      formData?.description
    );
  };

  const availableFeatures = [
    "User Authentication",
    "Push Notifications",
    "Payment Integration",
    "Social Media Login",
    "Real-time Chat",
    "GPS/Location Services",
    "Camera Integration",
    "Offline Mode",
    "Analytics",
    "Admin Dashboard",
  ];

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

    const resultData = calculateAddDevCostBreakdown(formData);

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

  const handleFeatureChange = (feature, checked) => {
    setFormData((prev) => ({
      ...prev,
      features: checked
        ? [...prev.features, feature]
        : prev.features.filter((f) => f !== feature),
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
            Build vs Buy &nbsp;
            <br className="block" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Software Decision <br className="md:block hidden" />
            </span>
            Made Simple
          </>
        }
        buttonText="Start Comparing Now"
        description="Compare the true costs of building custom software versus buying existing solutions. Make data-driven decisions with our comprehensive analysis tool backed by industry benchmarks."
        imageSrc="/images/v2/build-vs-buy-software-calculator-banner.webp"
        highlights={[
          {
            icon: CheckCircle2,
            color: "text-green-600",
            title: "95%",
            description: "Decision Accuracy",
          },
          {
            icon: Award,
            color: "text-orange-600",
            title: "1000+",
            description: "Trusted by Enterprises",
          },
          {
            icon: TrendingUp,
            color: "text-teal-300",
            title: "$2.3B+",
            description: "Total Savings Achieved",
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
              Calculate Your App Development Cost
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Fill in the details below to get an accurate estimate for your
              project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-2">
                Project Assessment Form
              </h2>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">App Type *</label>

                <select
                  value={formData.appType}
                  onChange={(e) => handleInputChange("appType", e.target.value)}
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select App Type</option>
                  <option value="mobile">Mobile App</option>
                  <option value="web">Web Application</option>
                  <option value="both">Mobile + App</option>
                </select>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                <div className="space-y-1">
                  <label className="font-medium text-gray-700">
                    Platform *
                  </label>
                  <select
                    value={formData?.platform}
                    onChange={(e) =>
                      handleInputChange("platform", e.target.value)
                    }
                    className="w-full border rounded-lg p-3 bg-white"
                  >
                    <option value="">Select platform</option>
                    <option value="ios">iOS Only</option>
                    <option value="android">Android Only</option>
                    <option value="cross-platform">Cross-Platform</option>
                    <option value="both">iOS + Android (Native)</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-medium text-gray-700">
                    Complexity Level *
                  </label>
                  <select
                    value={formData?.complexity}
                    onChange={(e) =>
                      handleInputChange("complexity", e.target.value)
                    }
                    className="w-full border rounded-lg p-3 bg-white"
                  >
                    <option value="">Select complexity level</option>
                    <option value="simple">Simple</option>

                    <option value="medium">Medium</option>
                    <option value="complex">Complex</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Features (Select all that apply)
                </label>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-1.5">
                  {availableFeatures?.map((feature) => (
                    <label
                      key={feature}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        checked={formData?.features?.includes(feature)}
                        onChange={(e) =>
                          handleFeatureChange(feature, e.target.checked)
                        }
                      />
                      <span>{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Design Complexity *
                </label>
                <select
                  value={formData.designComplexity}
                  onChange={(e) =>
                    handleInputChange("designComplexity", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select design complexity</option>
                  <option value="basic">Basic - Simple UI</option>
                  <option value="medium">Medium - Custom Design</option>
                  <option value="advanced">Advanced - Premium UX</option>
                </select>
              </div>

              {/* Timeline */}
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Development Team Location *
                </label>
                <select
                  value={formData.teamLocation}
                  onChange={(e) =>
                    handleInputChange("teamLocation", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select delevelopment team location</option>
                  <option value="us">North America</option>
                  <option value="eu">Europe</option>
                  <option value="asia">Asia</option>
                  <option value="latam">Latin America</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Timeline Preference *
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) =>
                    handleInputChange("timeline", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select timeline</option>
                  <option value="rush">Rush (30% premium)</option>
                  <option value="standard">Standard Timeline</option>
                  <option value="flexible">Flexible (10% discount)</option>
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
                    Calculating...
                  </>
                ) : (
                  <>
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate Development Cost
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
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-5 text-white shadow-xl">
                    <div className="flex items-center justify-center mb-4">
                      <div>
                        <p className="text-blue-100 mb-2">
                          Estimated Total Cost
                        </p>
                        <h3 className="text-4xl sm:text-5xl font-bold">
                          {formatCurrencyForCostBreakdown(result.total)}
                        </h3>
                        <p className="text-blue-100 mt-2">
                          Range:{" "}
                          {formatCurrencyForCostBreakdown(result.minCost)} -{" "}
                          {formatCurrencyForCostBreakdown(result.maxCost)}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <Clock className="w-5 h-5 mb-1 text-blue-200" />
                        <p className="text-2xl font-bold">{result.timeline}</p>
                        <p className="text-sm text-blue-200">Timeline</p>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <Users className="w-5 h-5 mb-1 text-blue-200" />
                        <p className="text-2xl font-bold">{result.teamSize}</p>
                        <p className="text-sm text-blue-200">Team Size</p>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <TrendingUp className="w-5 h-5 mb-1 text-blue-200" />
                        <p className="text-2xl font-bold">
                          ${result.hourlyRate}
                        </p>
                        <p className="text-sm text-blue-200">Hourly Rate</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      Cost Breakdown by Phase
                    </h4>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                      {Object.entries(result.phases).map(([phase, cost]) => {
                        const percentage = (cost / result.total) * 100;
                        return (
                          <div key={phase}>
                            <div className="flex justify-between mb-2">
                              <span className="font-medium text-gray-700 capitalize">
                                {phase.replace(/([A-Z])/g, " $1").trim()}
                              </span>
                              <span className="font-bold text-gray-900">
                                {formatCurrencyForCostBreakdown(cost)}
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                              <div
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full rounded-full transition-all duration-500"
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">
                              {percentage.toFixed(1)}% of total
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      Features Impact
                    </h4>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                      {result.featuresBreakdown.map((feature, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                        >
                          <span className="text-gray-700">{feature.name}</span>
                          <span className="font-semibold text-gray-900">
                            {formatCurrencyForCostBreakdown(feature.cost)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {result.additionalCosts.length > 0 && (
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                      <h4 className="text-xl font-bold text-amber-900 mb-2">
                        Additional Considerations
                      </h4>
                      <ul className="space-y-2">
                        {result.additionalCosts.map((cost, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-amber-600 mt-1">•</span>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <span className="text-amber-900">
                                  {cost.name}
                                </span>
                                <span className="font-semibold text-amber-900">
                                  {formatCurrencyForCostBreakdown(cost.cost)}
                                </span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
                        <DollarSign className="w-12 h-12 text-white" />
                      </div>
                      <div className="animate-ping absolute -top-6 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-yellow-800" />
                      </div>
                      <div className="animate-ping absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-2 h-2 text-yellow-800" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-700">
                      Ready for Result?
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Fill out the form and click calculate to see your cost
                      breakdown ✨
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

export default BuildvsBuySoftwareCalculator;
