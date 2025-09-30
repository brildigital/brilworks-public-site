"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  CalculatorIcon,
  CheckCircle,
  DollarSign,
  Loader2,
  Search,
  Sparkles,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { getStatusColor, hasSubmittedForm } from "../lib/commonFunction";
import { saasCalculateProfitability } from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const SaaSProfitabilityCalculator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState();
  const [formData, setFormData] = useState({
    monthlyRevenue: "",
    customerAcquisitionCost: "",
    customerLifetimeValue: "",
    churnRate: "",
    grossMargin: "",
    operatingExpenses: "",
    description: "",
    businessType: "",
    teamSize: "",
    features: [],
  });

  const businessTypes = [
    "B2B SaaS",
    "B2C SaaS",
    "Enterprise",
    "Startup",
    "E-commerce",
    "Fintech",
    "Healthtech",
    "Edtech",
    "Marketplace",
  ];

  const financialMatrics = [
    {
      id: "monthlyRevenue",
      label: "Monthly Revenue* ($)",
    },
    {
      id: "customerAcquisitionCost",
      label: "Customer Acquisition Cost* ($)",
    },
    {
      id: "customerLifetimeValue",
      label: "Customer Lifetime Value* ($)",
    },
    {
      id: "churnRate",
      label: "Monthly Churn Rate* (%)",
    },
    {
      id: "grossMargin",
      label: "Gross Margin* (%)",
    },
    {
      id: "operatingExpenses",
      label: "Operating Expenses* ($)",
    },
  ];

  const isFormValid = () => {
    return (
      formData.monthlyRevenue &&
      formData.customerAcquisitionCost &&
      formData.customerLifetimeValue &&
      formData.churnRate &&
      formData.grossMargin &&
      formData.operatingExpenses &&
      formData.description &&
      formData.businessType &&
      formData.teamSize
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

    const resultData = saasCalculateProfitability(formData);

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
            SaaS&nbsp;
            <br className="md:block hidden" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Profitability&nbsp;
            </span>
            Calculator
          </>
        }
        buttonText="Calculate Now"
        description="Calculate your SaaS profitability, LTV:CAC ratio, and growth metrics instantly. Make data-driven decisions to scale your business effectively."
        imageSrc="/images/v2/saas-profitability-banner.webp"
        authority={[
          "Trusted by 10K+ SaaS companies",
          "Instant Results",
          "$2.5M+ Revenue optimized",
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
              SaaS Profitability Calculator
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Describe your SaaS business and get instant profitability analysis
              with cost estimates based on your features
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-2">
                Business Information
              </h2>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Describe Your SaaS Business(Keywords affect cost calculation)
                  *
                </label>
                <textarea
                  value={formData?.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Describe your business feature..."
                  rows={3}
                  className="w-full border rounded-lg p-3 bg-white"
                />
                <div className="mt-2 text-xs text-gray-500">
                  💡 Tip: Mention features like AI, analytics, integrations,
                  automation to get accurate cost estimates
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="space-y-1">
                  <label className="font-medium text-gray-700">
                    Business Type *
                  </label>

                  <select
                    value={formData.businessType}
                    onChange={(e) =>
                      handleInputChange("businessType", e.target.value)
                    }
                    className="w-full border rounded-lg p-3 bg-white"
                  >
                    <option value="">Select business type</option>

                    {businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-medium text-gray-700">
                    Team Size *
                  </label>
                  <input
                    id="instances"
                    type="number"
                    className="w-full border rounded-lg p-3 bg-white"
                    value={formData.teamSize}
                    onChange={(e) =>
                      handleInputChange("teamSize", e.target.value)
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
              <hr className="!my-5" />
              <p className="text-xl font-semibold !mb-3">Financial Metrics</p>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 !mb-5">
                {financialMatrics.map((field) => (
                  <div key={field.id} className="space-y-1">
                    <label
                      htmlFor={field.id}
                      className="font-medium text-gray-700"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type="number"
                      className="w-full border rounded-lg p-3 bg-white"
                      value={formData[field.id] || ""}
                      onChange={(e) =>
                        handleInputChange(field.id, e.target.value)
                      }
                      onKeyDown={(e) => {
                        // 🚫 Prevent e/E/+/- in numeric input
                        if (["e", "E", "+", "-"].includes(e.key)) {
                          e.preventDefault();
                        }
                      }}
                    />
                  </div>
                ))}
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
                    <Search className="mr-2 h-5 w-5" />
                    Calculate Profitability
                  </>
                )}
              </button>
            </div>

            {/* Cost Estimate */}
            <div className="popup bg-white rounded-2xl border shadow-lg p-8">
              <h2 className="text-center text-2xl font-semibold mb-4">
                Analysis Results
              </h2>
              {result && hasVisited ? (
                <div className="space-y-4">
                  <div className="text-center">
                    <div
                      className={`inline-block px-4 py-2 rounded-full text-base font-semibold border-2 ${getStatusColor(
                        result.profitabilityStatus
                      )}`}
                    >
                      {result.profitabilityStatus} Profitability
                    </div>
                  </div>

                  {/* Cost Analysis */}
                  <div className="bg-themeLight p-4 rounded-xl border-l-4 border-blue-500">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-blue-600" />
                      Cost Analysis Based on Description
                    </h4>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          ${result.estimatedMonthlyCost.toLocaleString()}
                        </div>
                        <div className="text-sm font-normal text-gray-600">
                          Estimated Monthly Cost
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                          ${result.recommendedPricing}
                        </div>
                        <div className="text-sm font-normal text-gray-600">
                          Recommended Price/User
                        </div>
                      </div>
                    </div>
                    {result.competitiveAdvantage.length > 0 && (
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-2">
                          Detected Features:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {result.competitiveAdvantage.map((feature, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-3 rounded-xl text-center">
                      <div className="text-2xl font-bold text-green-600">
                        ${result.monthlyProfit.toLocaleString()}
                      </div>
                      <div className="text-sm font-normal text-gray-600">
                        Monthly Profit
                      </div>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-xl text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {result.profitMargin.toFixed(1)}%
                      </div>
                      <div className="text-sm font-normal text-gray-600">
                        Profit Margin
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-3 rounded-xl text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        {result.ltvcacRatio.toFixed(1)}:1
                      </div>
                      <div className="text-sm font-normal text-gray-600">
                        LTV:CAC Ratio
                      </div>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-xl text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        {result.monthsToRecoverCAC.toFixed(1)}
                      </div>
                      <div className="text-sm font-normal text-gray-600">
                        Months to Recover CAC
                      </div>
                    </div>
                  </div>

                  <div className="bg-themeLight p-3 rounded-xl text-center">
                    <div className="text-3xl font-bold text-themeColor">
                      ${result.annualRecurringRevenue.toLocaleString()}
                    </div>
                    <div className="text-sm font-normal text-gray-600">
                      Annual Recurring Revenue
                    </div>
                  </div>

                  <div className="pl-0 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Insights for {result.businessType}
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {result.ltvcacRatio >= 3 ? (
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Healthy LTV:CAC ratio
                        </li>
                      ) : (
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-red-500 mr-2" />
                          Consider optimizing acquisition costs
                        </li>
                      )}
                      {result.profitMargin > 20 ? (
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Strong profit margins
                        </li>
                      ) : (
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                          Focus on improving margins
                        </li>
                      )}
                      {result.competitiveAdvantage.length > 2 ? (
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                          Feature-rich platform with competitive advantages
                        </li>
                      ) : (
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                          Consider adding more features to increase value
                        </li>
                      )}
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        Track these metrics monthly for best results
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative my-12">
                      <div className="animate-pulse w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                        <CalculatorIcon className="w-12 h-12 text-white" />
                      </div>
                      <div className="animate-ping absolute -top-6 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-yellow-800" />
                      </div>
                      <div className="animate-ping absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-2 h-2 text-yellow-800" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-700">
                      Ready to Analyze?
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Fill out the form to get your personalized recommendation
                      ✨
                    </p>

                    <button
                      onClick={() => document.querySelector("select")?.focus()}
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

export default SaaSProfitabilityCalculator;
