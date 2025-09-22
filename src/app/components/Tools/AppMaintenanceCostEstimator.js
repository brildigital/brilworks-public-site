"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  AlertCircle,
  Award,
  BarChart,
  Bell,
  Bug,
  Calculator,
  DollarSign,
  Headphones,
  Loader2,
  Shield,
  Smartphone,
  Sparkles,
  Star,
  Users,
  Wallet,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import { PriceSkeleton, PriceSkeletonSmall } from "../Blog/ArticleSkeleton";
import { calculateAppMaintenanceCost } from "../lib/appMaintenenceEstimatorService";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const AppMaintenanceCostEstimator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const [formData, setFormData] = useState({
    platform: "",
    complexity: "",
    userBase: "",
    maintenanceType: "",
    updateFrequency: "",
    description: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.platform &&
      formData?.complexity &&
      formData?.userBase &&
      formData?.maintenanceType &&
      formData?.updateFrequency &&
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

    const resultData = calculateAppMaintenanceCost(formData);
    setResult(resultData);

    setTimeout(() => {
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

  const maintenanceTypes = [
    {
      icon: Bug,
      title: "Bug Fixes & Issues",
      description:
        "Regular identification and resolution of bugs, crashes, and performance issues",
      cost: "30% of total cost",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Security Updates",
      description:
        "Critical security patches, vulnerability fixes, and compliance updates",
      cost: "20% of total cost",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Platform Updates",
      description:
        "iOS, Android, and web platform compatibility updates and new OS support",
      cost: "25% of total cost",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: BarChart,
      title: "Performance Optimization",
      description:
        "Speed improvements, memory optimization, and resource usage enhancements",
      cost: "15% of total cost",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Bell,
      title: "Feature Updates",
      description:
        "New feature development, UI/UX improvements, and functionality enhancements",
      cost: "Variable cost",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Headphones,
      title: "User Support",
      description: "Customer support, user assistance, and feedback management",
      cost: "10% of total cost",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <>
      <ToolHerosection
        title={
          <>
            App Maintenance &
            <br className="hidden sm:block" />{" "}
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Update Cost Estimator
            </span>
          </>
        }
        buttonText="Calculate Maintenance Cost"
        description="Calculate accurate maintenance and update costs for your mobile and web applications. Plan your ongoing development budget with confidence."
        imageSrc="/images/v2/app-maintenance-estimator-banner.webp"
        highlights={[
          {
            icon: Star,
            color: "text-red-300",
            title: "Proven Accuracy",
            description: "95% Cost Precision",
          },
          {
            icon: Users,
            color: "text-teal-300",
            title: "Used by",
            description: "5,000+ Companies",
          },
          {
            icon: Award,
            color: "text-indigo-300",
            title: "Industry Leader",
            description: "Top Rated Tool",
          },
        ]}
      />
      <ToolHowToUse />
      <ToolFeatures />
      <section>
        <div className="container max-w-7xl main-section-padding-top mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Types of App Maintenance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding different types of maintenance helps you plan your
              budget more effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maintenanceTypes.map((type, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${type.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <type.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {type.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {type.description}
                </p>

                <div className="flex items-center justify-between mt-1">
                  <span className="text-sm font-medium text-blue-800 bg-blue-100 px-3 py-1.5 rounded-md">
                    {type.cost}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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
              App Maintenance & Update Cost Calculator
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Get accurate estimates for your app maintenance and update costs
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

              {/* Design Requirements */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  User Base Size <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.userBase}
                  onChange={(e) =>
                    handleInputChange("userBase", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select user base size</option>
                  <option value="small">Small (&lt;10K User)</option>
                  <option value="medium">Medium (10K - 100K Users)</option>
                  <option value="large">Large (100K - 1M Users)</option>
                  <option value="enterprise">Enterprise (&gt;1M Users)</option>
                </select>
              </div>

              {/* Timeline */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  Maintenance Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.maintenanceType}
                  onChange={(e) =>
                    handleInputChange("maintenanceType", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select maintenance type</option>
                  <option value="basic">Basic (Bug fixes only)</option>
                  <option value="standard">
                    Standard (Bug fixes + Updates)
                  </option>
                  <option value="premium">Premium (Full maintenance)</option>
                  <option value="enterprise">Enterprise (24/7 support)</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  Update Frequency <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.updateFrequency}
                  onChange={(e) =>
                    handleInputChange("updateFrequency", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select update frequency</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="monthly">Monthly</option>
                  <option value="biweekly">Bi-weekly</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>

              {/* Project Description */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  Description <span className="text-red-500">*</span>
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
                  <div className="bg-gradient-to-r from-indigo-500 to-themeColor rounded-2xl py-2 my-3 text-white shadow-lg">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <DollarSign className="w-6 h-6" />
                      <h3 className="text-2xl font-bold">Monthly Cost</h3>
                    </div>
                    <div className="text-5xl font-bold text-white my-4">
                      {isCalculating || openPopup ? (
                        <PriceSkeleton />
                      ) : (
                        `$${result?.monthlyTotalCost.toLocaleString()}`
                      )}
                    </div>
                    <p className="text-gray-200 mb-4">
                      Monthly Maintenance Cost
                    </p>
                    <div className="text-lg">
                      <span className="text-gray-200">Yearly: </span>
                      <span className="font-bold">
                        {isCalculating || openPopup ? (
                          <PriceSkeletonSmall />
                        ) : (
                          `$${result.yearlyTotalCost.toLocaleString()}`
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="w-full flex flex-col items-start justify-center bg-amber-50 border border-amber-200 rounded-xl p-6 mt-8">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="w-5 h-5 text-amber-600" />
                      <h4 className="text-lg font-semibold text-amber-800">
                        Cost Optimization Tips
                      </h4>
                    </div>
                    <ul className="flex flex-col items-start justify-center text-amber-700 space-y-1 text-sm">
                      <li>
                        • Regular maintenance prevents costly emergency fixes
                      </li>
                      <li>• Quarterly updates can reduce costs by 30%</li>
                      <li>• Automated testing reduces manual QA expenses</li>
                      <li>• Proactive monitoring prevents major issues</li>
                    </ul>
                  </div>
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

export default AppMaintenanceCostEstimator;
