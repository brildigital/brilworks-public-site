"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  Calculator,
  CalculatorIcon,
  Loader2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import { calculateCAC } from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const CustomerAcquisitionCostEstimator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState({
    totalSpend: "",
    newCustomers: "",
    businessType: "saas",
    description: "",
  });

  const [result, setResult] = useState();

  const businessTypes = [
    { value: "saas", label: "SaaS/Software", benchmark: 205 },
    { value: "ecommerce", label: "E-commerce", benchmark: 87 },
    { value: "fintech", label: "Fintech", benchmark: 395 },
    { value: "healthcare", label: "Healthcare", benchmark: 200 },
    { value: "education", label: "Education", benchmark: 106 },
    { value: "marketing", label: "Marketing Agency", benchmark: 141 },
    { value: "retail", label: "Retail", benchmark: 45 },
    { value: "real-estate", label: "Real Estate", benchmark: 213 },
  ];
  const isFormValid = () => {
    return (
      formData?.totalSpend &&
      formData?.newCustomers &&
      formData?.businessType &&
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

    const resultData = calculateCAC(formData, businessTypes);

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
            Customer Acquisition&nbsp;
            <br className="md:block hidden" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-themeSecondary">
              Cost Estimator&nbsp;
            </span>
            for Smarter Marketing Decisions
          </>
        }
        buttonText="Calculate you CAS Now"
        description="Calculate Your Customer Acquisition Cost with Precision. Use our customer acquisition cost calculator to make data-driven decisions, reduce marketing waste, and maximize ROI across every channel. Trusted by 10k+ users with a 95% accuracy rate."
        imageSrc="/images/v2/cac-estimator-banner.webp"
        highlights={[
          {
            icon: TrendingUp,
            color: "text-yellow-600 !text-xl",
            title: "95%",
            description: "Accuracy Rate",
          },
          {
            icon: Users,
            color: "text-orange-600 !text-xl",
            title: "10k+",
            description: "Users Trust",
          },
          {
            icon: Target,
            color: "text-green-300 !text-xl",
            title: "40%",
            description: "Cost Reduction",
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
              CAC Calculator
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Calculate your Customer Acquisition Cost with precision and get
              personalized recommendations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 md:p-8 p-5 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-2">
                Input Your Data
              </h2>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Total Marketing Spend* ($)
                </label>
                <input
                  id="totalSpend"
                  type="number"
                  className="w-full border rounded-lg p-3 bg-white"
                  value={formData.totalSpend}
                  onChange={(e) =>
                    handleInputChange("totalSpend", e.target.value)
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
                  New Customers Acquired*
                </label>
                <input
                  id="newCustomers"
                  type="number"
                  className="w-full border rounded-lg p-3 bg-white"
                  value={formData.newCustomers}
                  onChange={(e) =>
                    handleInputChange("newCustomers", e.target.value)
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
              </div>

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
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Marketing Description*
                </label>
                <textarea
                  value={formData?.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="e.g. Using Google Ads, Facebook advertising, and content marketing to drive traffic..."
                  rows={3}
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>

              {/* Get Quote Button */}
              <button
                onClick={handleCalculate}
                disabled={!isFormValid() || isCalculating}
                className="w-full bg-themeColor text-white rounded-lg py-3 text-lg font-semibold flex items-center justify-center disabled:opacity-50"
              >
                {isCalculating ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Calculating...
                  </>
                ) : (
                  <>
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate your CAC
                  </>
                )}
              </button>
            </div>

            {/* Cost Estimate */}
            <div className="popup bg-white rounded-2xl border shadow-lg md:p-8 p-5">
              <h2 className="text-center text-2xl font-semibold mb-4">
                Analysis Results
              </h2>
              {result && hasVisited ? (
                <div className="space-y-6">
                  {/* Main Result */}
                  <div className="bg-gradient-to-br from-themeColor to-navyBlue rounded-xl text-center p-5 text-white">
                    <div className="lg:text-5xl md:text-4xl text-3xl  font-bold mb-2">
                      ${result.cac}
                    </div>
                    <div className="text-blue-100">per customer acquired</div>

                    <div className="mt-4 p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <span>Industry Benchmark</span>
                        <span className="font-semibold">
                          ${result.industryBenchmark}
                        </span>
                      </div>
                      <div className="mt-2">
                        {result.cac < result.industryBenchmark ? (
                          <span className="text-green-200">
                            ✓ Below benchmark (Great!)
                          </span>
                        ) : (
                          <span className="text-yellow-200">
                            ⚠ Above benchmark
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Channel Breakdown */}
                  {/* <div className="bg-white rounded-xl p-5 border">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="w-6 h-6 text-blue-500 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">
                        Channel Breakdown
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-y-1 gap-x-4">
                      {Object.entries(result.cacPerChannel).map(
                        ([channel, cac]) => (
                          <div
                            key={channel}
                            className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg"
                          >
                            <span className="text-gray-700">{channel}</span>
                            <span className="font-semibold text-gray-900">
                              ${cac}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div> */}

                  {/* Recommendations */}
                  <div className="bg-white rounded-xl p-5 border">
                    <div className="flex items-center mb-4">
                      <Users className="w-6 h-6 text-orange-500 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">
                        Recommendations
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {result.recommendations.map((rec, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-700">{rec}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative my-12">
                      <div className="animate-pulse w-24 h-24 bg-gradient-to-r from-themeColor to-[#01dbd4] rounded-full flex items-center justify-center">
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
                      Fill in the form on the left to calculate your Customer
                      Acquisition Cost ✨
                    </p>

                    <button
                      onClick={() => document.querySelector("input")?.focus()}
                      className="bg-gradient-to-r from-themeColor to-[#01dbd4] text-white py-3 px-6 rounded-lg font-medium flex items-center space-x-2 hover:from-themeColor hover:to-[#01dbd4] transition-all animate-bounce"
                    >
                      &lArr; Start by entering your data
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

export default CustomerAcquisitionCostEstimator;
