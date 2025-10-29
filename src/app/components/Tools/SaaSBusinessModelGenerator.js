"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  CheckCircle,
  Clock,
  DollarSign,
  Loader2,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import { calculateSaaSBusinessModel } from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const SaaSBusinessModelGenerator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState({
    appName: "",
    industry: "",
    targetAudience: "",
    description: "",
    problemSolving: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.industry &&
      formData?.targetAudience &&
      formData?.problemSolving &&
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

    const resultData = calculateSaaSBusinessModel(formData);

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
            Which App &nbsp;
            <br className="md:block hidden" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Should You Build?
            </span>
          </>
        }
        buttonText="Start Building Your Model"
        description="Transform your app idea into a complete business model in minutes. Our SaaS business model generator gives you personalized recommendations on pricing, target markets, and growth strategies to help you turn your app idea into a business model that works."
        imageSrc="/images/v2/SaaS-model-generator-banner.webp"
        statsGird={[
          { value: "10K+", label: "Models Generated" },
          {
            value: "$50M+",
            label: "Revenue Raised",
          },
          {
            value: "98%",
            label: "Satisfaction Rate",
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
              SaaS Business Model Generator
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Answer a few questions and get your personalized business model
              instantly
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 md:p-8 p-5 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-2">
                Tell us about your project
              </h2>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">App Name</label>
                <input
                  type="text"
                  value={formData.projectName}
                  onChange={(e) =>
                    handleInputChange("projectName", e.target.value)
                  }
                  placeholder="My Fintech App"
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">Industry*</label>
                <input
                  type="text"
                  value={formData.industry}
                  onChange={(e) =>
                    handleInputChange("industry", e.target.value)
                  }
                  placeholder="e.g., Marketing, Healthcare, Education"
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Target Audience*
                </label>
                <input
                  type="text"
                  value={formData.targetAudience}
                  onChange={(e) =>
                    handleInputChange("targetAudience", e.target.value)
                  }
                  placeholder="e.g., Small business owners, Freelancers"
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  What Problem Does It Solve?*
                </label>
                <input
                  type="text"
                  value={formData.problemSolving}
                  onChange={(e) =>
                    handleInputChange("problemSolving", e.target.value)
                  }
                  placeholder="e.g., Simplifies project management"
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Detailed Description*
                </label>
                <textarea
                  value={formData?.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Describe your app in detail. Include key features, unique value proposition, and any specific keywords that define your product..."
                  rows={3}
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>
              <p className="text-xs text-gray-500 ">
                Tip: Include keywords related to your business model for better
                recommendations
              </p>

              {/* Get Quote Button */}
              <button
                onClick={handleCalculate}
                disabled={!isFormValid() || isCalculating}
                className="w-full bg-themeColor text-white rounded-lg py-3 text-lg font-semibold flex items-center justify-center disabled:opacity-50"
              >
                {isCalculating ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating Your Model...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate Business Model
                  </>
                )}
              </button>
            </div>

            {/* Cost Estimate */}
            <div className="popup bg-white rounded-2xl border shadow-lg p-8">
              <h2 className="text-center text-2xl font-semibold mb-4">
                Your Business Model
              </h2>
              {result && hasVisited ? (
                <div className="space-y-3 animate-fade-in">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Recommended Model
                    </h4>
                    <p className="text-blue-700 font-medium">
                      {result.businessModel}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Pricing Strategy
                    </h4>
                    <div className="space-y-1">
                      {Object.values(result.pricingStrategy).map(
                        (tier, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between items-center bg-white rounded-lg p-2"
                          >
                            <div>
                              <span className="font-medium text-gray-900">
                                {tier.name}
                              </span>
                              <span className="text-sm text-gray-500 ml-2">
                                ({tier.features} features)
                              </span>
                            </div>
                            <span className="font-bold text-blue-600">
                              {tier.price}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Revenue Streams
                      </h4>
                      <ul className="space-y-1">
                        {result.revenueStreams.map((stream, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-700"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {stream}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Growth Strategy
                      </h4>
                      <ul className="space-y-1">
                        {result.growthStrategy.map((strategy, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-700"
                          >
                            <TrendingUp className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                            {strategy}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex flex-col items-center">
                      <Clock className="w-5 h-5 text-amber-600 mb-2" />
                      <p className="text-sm text-gray-600">Time to Market</p>
                      <p className="font-bold text-gray-900">
                        {result.estimatedTimeToMarket}
                      </p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex flex-col items-center">
                      <DollarSign className="w-5 h-5 text-green-600 mb-2" />
                      <p className="text-sm text-gray-600">
                        Initial Investment
                      </p>
                      <p className="font-bold text-gray-900">
                        {result.initialInvestment}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative my-12">
                      <div className="animate-pulse w-24 h-24 bg-themeColor rounded-full flex items-center justify-center">
                        <BarChart3 className="w-12 h-12 text-white" />
                      </div>
                      <div className="animate-ping absolute -top-6 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-yellow-800" />
                      </div>
                      <div className="animate-ping absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-2 h-2 text-yellow-800" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-700">
                      Your business model will appear here
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Fill out the form on left and click generate. ✨
                    </p>

                    <button
                      onClick={() => document.querySelector("input")?.focus()}
                      className="bg-themeColor text-white py-3 px-6 rounded-lg font-medium flex items-center space-x-2 transition-all animate-bounce"
                    >
                      &lArr; Fill out the form to get results
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

export default SaaSBusinessModelGenerator;
