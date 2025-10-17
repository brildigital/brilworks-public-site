"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  Calculator,
  CheckCircle2,
  Layers,
  Loader2,
  RefreshCw,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import { calculateLegacySystemModernizationReadiness } from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const LegacySystemModernizationReadiness = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState({
    systemAge: "",
    techStack: "",
    maintenanceCost: "",
    downtime: "",
    description: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.systemAge &&
      formData?.techStack &&
      formData?.maintenanceCost &&
      formData?.downtime &&
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

    const resultData = calculateLegacySystemModernizationReadiness(formData);

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
            Legacy System &nbsp;
            <br className="md:block hidden" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Modernization Readiness
            </span>
          </>
        }
        buttonText="Access Your System"
        description="Assess your legacy infrastructure's modernization needs with our comprehensive analysis tool. Get actionable insights to transform outdated systems into modern, efficient, and scalable solutions."
        imageSrc="/images/v2/modernization-tool-banner.webp"
        highlights={[
          {
            icon: Target,
            color: "text-orange-400",
            title: "95%",
            description: "Success Rate",
          },
          {
            icon: TrendingUp,
            color: "text-red-400",
            title: "60%",
            description: "Cost Reduction",
          },
          {
            icon: Zap,
            color: "text-indigo-400",
            title: "3x",
            description: "Faster Deploy",
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
              Calculate Modernization Urgency
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Provide your system details for instant analysis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 md:p-8 p-5 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-2">
                System Information
              </h2>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  System Age (Years)*
                </label>
                <input
                  id="teamSize"
                  type="number"
                  className="w-full border rounded-lg p-3 bg-white"
                  value={formData.systemAge}
                  onChange={(e) =>
                    handleInputChange("systemAge", e.target.value)
                  }
                  min="1"
                  placeholder="e.g., 12"
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
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Technology Stack ($)*
                </label>
                <input
                  id="techStack"
                  type="string"
                  className="w-full border rounded-lg p-3 bg-white"
                  placeholder="e.g., Java 6, Struts, Oracle 11g"
                  value={formData.techStack}
                  onChange={(e) =>
                    handleInputChange("techStack", e.target.value)
                  }
                />
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Annual Maintenance Cost ($)*
                </label>
                <input
                  id="maintenanceCost"
                  type="number"
                  className="w-full border rounded-lg p-3 bg-white"
                  value={formData.maintenanceCost}
                  onChange={(e) =>
                    handleInputChange("maintenanceCost", e.target.value)
                  }
                  min="1"
                  placeholder="e.g., 75000"
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
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Downtime Hours per Month*
                </label>
                <input
                  id="downtime"
                  type="number"
                  className="w-full border rounded-lg p-3 bg-white"
                  value={formData.downtime}
                  onChange={(e) =>
                    handleInputChange("downtime", e.target.value)
                  }
                  placeholder="e.g., 8"
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
                  System Description & Challenges*
                </label>
                <textarea
                  value={formData?.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="e.g., AI-powered SaaS platform for enterprise customers with mobile app and cloud infrastructure"
                  rows={3}
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>
              <p className="text-xs text-gray-500 ">
                Tip: Mention specific pain points and technologies for accurate
                assessment
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
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Calculator className="mr-2 h-5 w-5" />
                    Analyze System
                  </>
                )}
              </button>
            </div>

            {/* Cost Estimate */}
            <div className="popup bg-white rounded-2xl border shadow-lg p-8">
              <h2 className="text-center text-2xl font-semibold mb-4">
                Assessment Results
              </h2>
              {result && hasVisited ? (
                <div className="space-y-4 animate-fade-in">
                  <div className="bg-white p-5 rounded-xl border text-center">
                    <p className="text-sm font-semibold text-gray-600 mb-2">
                      MODERNIZATION URGENCY SCORE
                    </p>
                    <p className={`text-4xl font-bold ${result.color} mb-2`}>
                      {result.score}
                    </p>
                    <p className={`text-xl font-semibold ${result.color} mb-1`}>
                      {result.urgency}
                    </p>
                    <p className="text-sm text-gray-600 mt-3 font-medium">
                      {result.priority}
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-themeColor" />
                      Recommended Actions
                    </h4>
                    <ul className="space-y-1">
                      {result.recommendations.map((rec, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-themeColor">
                              {idx + 1}
                            </span>
                          </div>
                          <span className="text-gray-700 text-left">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-themeColor to-cyan-600 p-5 rounded-xl text-white">
                    <div className="flex items-start space-x-3">
                      <Layers className="w-6 h-6 flex-shrink-0 mt" />
                      <div>
                        <p className="text-sm font-semibold mb-2 text-left">
                          IMPLEMENTATION STRATEGY
                        </p>
                        <p className="text-sm leading-relaxed text-left">
                          {result.score >= 70
                            ? "Critical systems require immediate attention. Consider engaging modernization experts and planning a rapid, phased migration approach."
                            : result.score >= 50
                            ? "High priority modernization. Begin with thorough planning, pilot projects, and secure executive buy-in for transformation initiatives."
                            : result.score >= 30
                            ? "Moderate priority. Focus on incremental improvements while building a long-term modernization roadmap and business case."
                            : "Low urgency. Maintain current systems with regular updates while monitoring for future modernization opportunities."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative my-12">
                      <div className="animate-pulse w-24 h-24 bg-themeColor rounded-full flex items-center justify-center">
                        <RefreshCw className="w-12 h-12 text-white" />
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
                      Complete the system Information on the left to get result.
                      ✨
                    </p>

                    <button
                      onClick={() => document.querySelector("input")?.focus()}
                      className="bg-themeColor text-white py-3 px-6 rounded-lg font-medium flex items-center space-x-2 transition-all animate-bounce"
                    >
                      &lArr; Fill out the form to get result
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

export default LegacySystemModernizationReadiness;
