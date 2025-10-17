"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  Activity,
  Calculator,
  CheckCircle2,
  Loader2,
  Sparkles,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import ToolHowToUse from "./ToolHowToUse";
import { hasSubmittedForm } from "../lib/commonFunction";
import { calculateSaaSScalability } from "../lib/toolsCalculation";

// const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const SaasScalabilityReadinessChecker = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState({
    monthlyUsers: "",
    avgResponseTime: "",
    currentInfrastructure: "",
    description: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.monthlyUsers &&
      formData?.avgResponseTime &&
      formData?.currentInfrastructure &&
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

    const resultData = calculateSaaSScalability(formData);

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
            SaaS Scalability &nbsp;
            <br className="md:block hidden" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Readiness Checker
            </span>
          </>
        }
        buttonText="Check Your Readiness"
        description="Evaluate your SaaS infrastructure's ability to handle growth. Get actionable insights and recommendations to scale confidently without compromising performance or user experience."
        imageSrc="/images/v2/saas-scalability-checker-banner.webp"
        statsGird={[
          { value: "10K+", label: "Companies Analyzed" },
          {
            value: "98%",
            label: "Accuracy Rate",
          },
          {
            value: "Free",
            label: "No Signup Required",
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
            <h2 className="text-4xl font-bold text-themeColor mb-4">
              Calculate Your Readiness Score
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Fill in your details to get instant insights
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 md:p-8 p-5 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-2">
                Your Information
              </h2>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Monthly Active Users*
                </label>
                <input
                  id="monthlyUsers"
                  type="number"
                  className="w-full border rounded-lg p-3 bg-white !mb-2"
                  value={formData.monthlyUsers}
                  placeholder="e.g., 50000"
                  onChange={(e) =>
                    handleInputChange("monthlyUsers", e.target.value)
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
                  Average Response Time (ms)*
                </label>
                <input
                  id="avgResponseTime"
                  type="number"
                  className="w-full border rounded-lg p-3 bg-white !mb-2"
                  value={formData.avgResponseTime}
                  onChange={(e) =>
                    handleInputChange("avgResponseTime", e.target.value)
                  }
                  placeholder="e.g., 350"
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
                  Current Infrastructure*
                </label>
                <input
                  type="text"
                  value={formData.currentInfrastructure}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      currentInfrastructure: e.target.value,
                    })
                  }
                  placeholder="e.g., Kubernetes, Docker, AWS, Load Balancer"
                  className="w-full border rounded-lg p-3 bg-white !mb-2"
                />
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Description*
                </label>
                <textarea
                  value={formData?.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Describe your current setup and any scalability concerns. Include keywords like: scalable, distributed, cloud, auto-scaling, monitoring, etc."
                  className="w-full border rounded-lg p-3 bg-white"
                  rows={5}
                />
              </div>
              <p className="text-xs text-gray-500 ">
                Keywords like "cloud", "AI", "mobile", "automation",
                "data-driven", "agile" will boost your readiness score
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
                    Calculating...
                  </>
                ) : (
                  <>
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate Readiness
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
                  <div className="bg-white p-5 rounded-xl border border-blue-100 text-center">
                    <p className="text-sm font-semibold text-gray-600 mb-2">
                      READINESS SCORE
                    </p>
                    <p className={`text-6xl font-bold ${result.color} mb-2`}>
                      {result.score}
                    </p>
                    <p className={`text-2xl font-semibold ${result.color}`}>
                      {result.level}
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-blue-100">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-blue-600" />
                      Recommendations
                    </h4>
                    <ul className="space-y-1">
                      {result.recommendations.map((rec, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                          <span className="text-gray-700">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-5 rounded-xl text-white">
                    <p className="text-sm font-semibold mb-2">NEXT STEPS</p>
                    <p className="text-lg">
                      Based on your score, we recommend focusing on the
                      recommendations above to improve your scalability
                      readiness.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative my-12">
                      <div className="animate-pulse w-24 h-24 bg-themeColor rounded-full flex items-center justify-center">
                        <Activity className="w-12 h-12 text-white" />
                      </div>
                      <div className="animate-ping absolute -top-6 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-yellow-800" />
                      </div>
                      <div className="animate-ping absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-2 h-2 text-yellow-800" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-700">
                      Ready to get result?
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Complete the information on the left to get readliness
                      score. ✨
                    </p>

                    <button
                      onClick={() => document.querySelector("input")?.focus()}
                      className="bg-themeColor text-white py-3 px-6 rounded-lg font-medium flex items-center space-x-2 transition-all animate-bounce"
                    >
                      &lArr; Fill out the form to get started
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

export default SaasScalabilityReadinessChecker;
