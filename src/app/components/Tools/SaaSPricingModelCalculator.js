"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  AlertCircle,
  Calculator,
  CheckCircle,
  DollarSign,
  Loader2,
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
  saasPricingModelCalculater,
  saasPricingModelCostParameters,
} from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const SaaSPricingModelCalculator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const [formData, setFormData] = useState({
    modelType: "",
    userTier: "",
    userVolume: "",
    marketSegment: "",
    features: [],
    support: "",
    dataStorage: "",
    integration: "",
    competitiveFactor: "",
    description: "",
  });
  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.modelType &&
      formData?.userTier &&
      formData?.userVolume &&
      formData?.marketSegment &&
      formData?.features.length > 0 &&
      formData?.support &&
      formData?.dataStorage &&
      formData?.integration &&
      formData?.competitiveFactor &&
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

    const resultData = saasPricingModelCalculater(formData);

    setTimeout(() => {
      setResult(resultData);
      setIsCalculating(false);
      if (!hasVisited) {
        setOpenPopup(true);
      }
    }, 1500);
  };

  const saasPricingModelAnnualRevenue = result?.monthlyRevenue * 12;
  const saasPricingModelChurnImpact = Math.round(result?.monthlyRevenue * 0.05);

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
            Find Your Perfect&nbsp;
            <br className="block" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              SaaS Pricing Model&nbsp;
            </span>
            in Seconds
          </>
        }
        buttonText="Calculate Cost Now"
        description="Discover the optimal pricing strategy for your SaaS product. Our advanced calculator analyzes market data and revenue potential to recommend the best pricing model for maximum growth."
        imageSrc="/images/v2/saas-pricing-model-calculator-banner.webp"
        highlights={[
          {
            icon: CheckCircle,
            color: "text-green-600",
            title: "1000+",
            description: "Companies Analyzed",
          },
          {
            icon: Users,
            color: "text-orange-600",
            title: "95%",
            description: "Revenue Growth Rate",
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
              Calculate Your Optimal Pricing
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Get data-driven pricing recommendations to maximize revenue and
              growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-2">
                Your Product
              </h2>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Pricing Model *
                </label>

                <select
                  value={formData.modelType}
                  onChange={(e) =>
                    handleInputChange("modelType", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select Pricing Model</option>
                  {saasPricingModelCostParameters.model_type?.map((param) => (
                    <option
                      key={param.parameter_name}
                      value={param.parameter_name}
                    >
                      {param.parameter_name} - {param.description}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Target User Tier *
                </label>
                <select
                  value={formData?.userTier}
                  onChange={(e) =>
                    handleInputChange("userTier", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select User Tier</option>
                  {saasPricingModelCostParameters.user_tier?.map((param) => (
                    <option
                      key={param.parameter_name}
                      value={param.parameter_name}
                    >
                      {param.parameter_name} - {param.description}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                <div className="space-y-1">
                  <label className="font-medium text-gray-700">
                    Expected User Volume *
                  </label>
                  <select
                    value={formData?.userVolume}
                    onChange={(e) =>
                      handleInputChange("userVolume", e.target.value)
                    }
                    className="w-full border rounded-lg p-3 bg-white"
                  >
                    <option value="">Select User Volume</option>
                    {saasPricingModelCostParameters.user_volume?.map(
                      (param) => (
                        <option
                          key={param.parameter_name}
                          value={param.parameter_name}
                        >
                          {param.parameter_name}
                        </option>
                      )
                    )}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-medium text-gray-700">
                    Market Competition *
                  </label>
                  <select
                    value={formData.competitiveFactor}
                    onChange={(e) =>
                      handleInputChange("competitiveFactor", e.target.value)
                    }
                    className="w-full border rounded-lg p-3 bg-white"
                  >
                    <option value="">Select Competition Level</option>
                    {saasPricingModelCostParameters.competitive_factor?.map(
                      (param) => (
                        <option key={param.id} value={param.parameter_name}>
                          {param.parameter_name}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Market Segment *
                </label>
                <select
                  value={formData?.marketSegment}
                  onChange={(e) =>
                    handleInputChange("marketSegment", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select Market Segment</option>
                  {saasPricingModelCostParameters.market_segment?.map(
                    (param) => (
                      <option
                        key={param.parameter_name}
                        value={param.parameter_name}
                      >
                        {param.parameter_name} - {param.description}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Premium Features
                </label>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-1.5">
                  {saasPricingModelCostParameters?.features?.map((param) => (
                    <label
                      key={param.parameter_name}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        checked={formData?.features?.includes(
                          param.parameter_name
                        )}
                        onChange={(e) =>
                          handleFeatureChange(
                            param.parameter_name,
                            e.target.checked
                          )
                        }
                      />
                      <span>{param.parameter_name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Support Level *
                </label>
                <select
                  value={formData.support}
                  onChange={(e) => handleInputChange("support", e.target.value)}
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select Support</option>
                  {saasPricingModelCostParameters.support?.map((param) => (
                    <option
                      key={param.parameter_name}
                      value={param.parameter_name}
                    >
                      {param.parameter_name} - {param.description}
                    </option>
                  ))}
                </select>
              </div>

              {/* Timeline */}
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Data Storage *
                </label>
                <select
                  value={formData.dataStorage}
                  onChange={(e) =>
                    handleInputChange("dataStorage", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select Storage</option>
                  {saasPricingModelCostParameters.data_storage?.map((param) => (
                    <option
                      key={param.parameter_name}
                      value={param.parameter_name}
                    >
                      {param.parameter_name} - {param.description}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Integrations *
                </label>
                <select
                  value={formData.integration}
                  onChange={(e) =>
                    handleInputChange("integration", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select Integration Level</option>
                  {saasPricingModelCostParameters.integration?.map((param) => (
                    <option
                      key={param.parameter_name}
                      value={param.parameter_name}
                    >
                      {param.parameter_name} - {param.description}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Description */}
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Product Description
                </label>
                <textarea
                  value={formData?.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder={`Keywords like "marketplace", "B2B", "platform", "niche" affect pricing`}
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
                    Calculate
                  </>
                )}
              </button>
            </div>

            {/* Cost Estimate */}
            {result && hasVisited ? (
              <div className="popup bg-white rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-2xl font-semibold mb-4">
                  Cost Estimate
                </h2>

                <div className="space-y-4">
                  <div className="flex flex-col items-center text-white justify-center bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl p-4 border">
                    <div className="text-sm opacity-90 mb-2">
                      Monthly Revenue (Estimate)
                    </div>
                    <div className="text-5xl font-bold mb-2">
                      ${result?.monthlyRevenue.toLocaleString()}
                    </div>
                    <div className="text-sm opacity-80">
                      Annually: $
                      {saasPricingModelAnnualRevenue.toLocaleString()}
                    </div>
                  </div>

                  <div className="border rounded-xl p-4">
                    <div className="text-sm opacity-90 mb-3">
                      Revenue Metrics
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Monthly Revenue</span>
                        <span className="font-semibold">
                          ${result?.monthlyRevenue.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm opacity-80">
                        <span>Annual Projection</span>
                        <span>
                          ${saasPricingModelAnnualRevenue.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm opacity-80">
                        <span>5% Churn Impact</span>
                        <span>
                          -${saasPricingModelChurnImpact.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl p-4 border">
                    <div className="text-sm opacity-90 mb-3">
                      Cost Breakdown
                    </div>
                    <div className="space-y-2 text-sm">
                      {Object.entries(result?.breakdown).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between items-center"
                        >
                          <span>{key}</span>
                          <span className="font-semibold">
                            {typeof value === "number"
                              ? `$${value.toLocaleString()}`
                              : JSON.stringify(value)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {result?.recommendations && (
                    <div className="bg-yellow-400/20 border border-yellow-300 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm mb-1">
                            Strategy Recommendation
                          </div>
                          <p className="text-sm opacity-90">
                            {result?.recommendations}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-2xl font-semibold mb-2">
                  Cost Estimate
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
                      estimate ✨
                    </p>

                    <button
                      onClick={() => document.querySelector("select")?.focus()}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium flex items-center space-x-2 hover:from-purple-700 hover:to-blue-700 transition-all animate-bounce"
                    >
                      &lArr; Start by selecting your product form
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

export default SaaSPricingModelCalculator;
