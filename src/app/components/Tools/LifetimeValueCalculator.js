"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  Calculator,
  CheckCircle,
  DollarSign,
  Loader2,
  Sparkles,
  Target,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import { calculateCustomerLTV } from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const LifetimeValueCalculator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState({
    averageOrderValue: "",
    purchaseFrequency: "",
    customerLifespan: "",
    retentionRate: "",
    acquisitionCost: "",
    description: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.averageOrderValue &&
      formData?.purchaseFrequency &&
      formData?.customerLifespan &&
      formData?.retentionRate &&
      formData?.acquisitionCost &&
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

    const resultData = calculateCustomerLTV(formData);

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

  const calculationMatrics = [
    {
      id: "purchaseFrequency",
      label: "Purchase Frequency* (per year)",
    },
    {
      id: "customerLifespan",
      label: "Customer Lifespan* (years)",
    },
    {
      id: "retentionRate",
      label: "Customer Retention Rate* (%)",
    },
    {
      id: "acquisitionCost",
      label: "Customer Acquisition Cost* ($)",
    },
  ];

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
            <h1 className="text-4xl font-bold text-themeColor mb-4">
              LTV Calculator
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Enter your business metrics below to calculate accurate customer
              lifetime value and gain valuable insights for your growth
              strategy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 md:p-8 p-5 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-2">
                Input Your Data
              </h2>
              <div className="space-y-1">
                <label
                  htmlFor="averageOrderValue"
                  className="font-medium text-gray-700"
                >
                  Average Order Value* ($)
                </label>
                <input
                  id="averageOrderValue"
                  type="number"
                  className="w-full border rounded-lg p-3 bg-white"
                  value={formData.averageOrderValue || ""}
                  onChange={(e) =>
                    handleInputChange("averageOrderValue", e.target.value)
                  }
                  onKeyDown={(e) => {
                    // 🚫 Prevent e/E/+/- in numeric input
                    if (["e", "E", "+", "-", "."].includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 !mb-5">
                {calculationMatrics.map((field) => (
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
                        if (["e", "E", "+", "-", "."].includes(e.key)) {
                          e.preventDefault();
                        }
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Business Description* (affects calculation)
                </label>
                <textarea
                  value={formData?.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="e.g., premium subscription SaaS for enterprise customers with loyalty program"
                  rows={3}
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>

              {/* Get Quote Button */}
              <button
                onClick={handleCalculate}
                disabled={!isFormValid() || isCalculating}
                className="w-full bg-themeColor text-white rounded-lg py-4 text-lg font-semibold flex items-center justify-center disabled:opacity-50"
              >
                {isCalculating ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Calculating...
                  </>
                ) : (
                  <>
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate
                  </>
                )}
              </button>
            </div>

            {/* Cost Estimate */}
            <div className="popup bg-white rounded-2xl border shadow-lg p-8">
              <h2 className="text-center text-2xl font-semibold mb-4">
                Your Results
              </h2>
              {result && hasVisited ? (
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">
                          Customer Lifetime Value
                        </p>
                        <p className="text-4xl font-bold text-green-600">
                          ${result.ltv.toFixed(2)}
                        </p>
                      </div>
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <DollarSign className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border p-4 rounded-xl shadow-sm">
                      <p className="text-sm text-gray-600">Net LTV</p>
                      <p className="text-2xl font-bold text-blue-600">
                        ${result.netLTV.toFixed(2)}
                      </p>
                    </div>
                    <div className="border p-4 rounded-xl shadow-sm">
                      <p className="text-sm text-gray-600">LTV:CAC Ratio</p>
                      <p className="text-2xl font-bold text-purple-600">
                        {result.ltvToCac > 0
                          ? `${result.ltvToCac.toFixed(1)}:1`
                          : "N/A"}
                      </p>
                    </div>
                  </div>

                  {result.multiplier > 1 && (
                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl">
                      <div className="flex items-center">
                        <Sparkles className="w-5 h-5 text-yellow-600 mr-2" />
                        <p className="text-sm font-semibold text-yellow-800">
                          Business Type Boost: +
                          {((result.multiplier - 1) * 100).toFixed(0)}%
                        </p>
                      </div>
                      <p className="text-xs text-yellow-700 mt-1">
                        Your business characteristics increase the base LTV
                        calculation
                      </p>
                    </div>
                  )}

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Interpretation
                    </h4>
                    <div className="space-y-1 text-sm text-blue-800">
                      {result.ltvToCac >= 3 ? (
                        <p className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Healthy LTV:CAC ratio - good profitability
                        </p>
                      ) : result.ltvToCac > 0 ? (
                        <p className="flex items-center">
                          <Target className="w-4 h-4 text-orange-500 mr-2" />
                          Consider improving retention or reducing acquisition
                          costs
                        </p>
                      ) : (
                        <p className="text-gray-600">
                          Enter acquisition cost to see LTV:CAC ratio
                        </p>
                      )}
                      <p>
                        • Focus on increasing customer retention to boost LTV
                      </p>
                      <p>• Consider upselling strategies to increase AOV</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative my-12">
                      <div className="animate-pulse w-24 h-24 bg-themeColor rounded-full flex items-center justify-center">
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
                      Ready to get Estimate?
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Fill out the form on the left and your instant estimate
                      will magically appear here ✨
                    </p>

                    <button
                      onClick={() => document.querySelector("input")?.focus()}
                      className="bg-themeColor text-white py-3 px-6 rounded-lg font-medium flex items-center space-x-2 transition-all animate-bounce"
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

export default LifetimeValueCalculator;
