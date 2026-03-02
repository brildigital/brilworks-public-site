"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  AlertCircle,
  Briefcase,
  CheckCircle2,
  Loader2,
  Rocket,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import { calculateOutsourceReadiness } from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const OutsourcingReadinessChecker = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const [formData, setFormData] = useState({
    teamSize: "",
    projectComplexity: "",
    currentWorkload: "",
    internalCapacity: "",
    businessCritical: "",
    projectType: "",
    description: "",
  });
  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.teamSize &&
      formData?.projectComplexity &&
      formData?.currentWorkload &&
      formData?.internalCapacity &&
      formData?.businessCritical &&
      formData?.projectType &&
      formData?.description
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

    const resultData = calculateOutsourceReadiness(formData);

    setTimeout(() => {
      setResult(resultData);
      setIsCalculating(false);
      if (!hasVisited) {
        setOpenPopup(true);
      }
    }, 1500);
  };

  const estimatedAIAppDevTimeline =
    result?.totalCost > 0 ? Math.ceil(result?.totalCost / 5000) : 0;
  const estimatedAIAppDevTeamSize =
    result?.totalCost > 30000
      ? "4-6"
      : result?.totalCost > 15000
        ? "2-4"
        : "1-2";

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
            Is Your Team Ready to &nbsp;
            <br className="block" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Outsource?
            </span>
          </>
        }
        buttonText="Start Readiness Assessment"
        description=" Evaluate your organization's outsourcing readiness with our comprehensive checker. Understand risks, benefits, and critical success factors before making the leap to outsourcing development work."
        imageSrc="/images/v2/outsourcing-readiness-checker-banner.webp"
        highlights={[
          {
            icon: Rocket,
            color: "text-green-600",
            title: "500+",
            description: "Projects Estimated",
          },
          {
            icon: TrendingUp,
            color: "text-orange-600",
            title: "98%",
            description: "Accuracy Rate",
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
              Calculate Your Outsource Readiness
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Answer a few questions about your organization to receive a
              comprehensive outsourcing readiness evaluation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-2">
                Project Details
              </h2>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">Team Size *</label>
                <select
                  value={formData.teamSize}
                  onChange={(e) =>
                    handleInputChange("teamSize", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select team size...</option>
                  <option value="small">Small (1-5 people)</option>
                  <option value="medium">Medium (6-20 people)</option>
                  <option value="large">Large (20+ people)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Project Complexity *
                </label>
                <select
                  value={formData?.projectComplexity}
                  onChange={(e) =>
                    handleInputChange("projectComplexity", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select complexity...</option>
                  <option value="low">Low (maintenance, testing)</option>
                  <option value="medium">Medium (routine development)</option>
                  <option value="high">
                    High (strategic, complex features)
                  </option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Current Workload *
                </label>
                <select
                  value={formData?.currentWorkload}
                  onChange={(e) =>
                    handleInputChange("currentWorkload", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select workload...</option>
                  <option value="light">Light (under-utilized capacity)</option>
                  <option value="moderate">Moderate (balanced load)</option>
                  <option value="overloaded">
                    Overloaded (urgent help needed)
                  </option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Capacity to Manage Vendors
                </label>
                <select
                  value={formData?.internalCapacity}
                  onChange={(e) =>
                    handleInputChange("internalCapacity", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select capacity...</option>
                  <option value="manage">
                    Easy to manage (dedicated staff)
                  </option>
                  <option value="challenging">
                    Challenging (limited resources)
                  </option>
                  <option value="impossible">
                    Impossible (no oversight available)
                  </option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Business Criticality *
                </label>
                <select
                  value={formData.businessCritical}
                  onChange={(e) =>
                    handleInputChange("businessCritical", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select criticality...</option>
                  <option value="low">Low (non-critical)</option>
                  <option value="medium">
                    Medium (important but not core)
                  </option>
                  <option value="high">High (business-critical)</option>
                </select>
              </div>

              {/* Timeline */}
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Project Type *
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) =>
                    handleInputChange("projectType", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select project type...</option>
                  <option value="maintenance">Maintenance & Support</option>
                  <option value="development">New Development</option>
                  <option value="research">Research & Innovation</option>
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
                  placeholder="Describe your project, concerns, documentation status, timeline, and any sensitive data considerations..."
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
                    <Briefcase className="mr-2 h-5 w-5" />
                    Assess Readiness
                  </>
                )}
              </button>
            </div>

            {/* Cost Estimate */}
            {result && hasVisited ? (
              <div className="popup bg-white rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-2xl font-semibold mb-4">
                  Assessment Result
                </h2>
                <div className="space-y-4">
                  <div className="text-center pb-4 border-b border-slate-200">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-2.5 shadow-lg">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">
                      {result.recommendation}
                    </h3>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="text-sm text-slate-600">
                        Readiness Score:
                      </div>
                      <div className="text-2xl font-bold text-emerald-600">
                        {result.readinessScore}%
                      </div>
                    </div>
                    <div className="mt-4 bg-slate-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-full transition-all duration-1000 ease-out"
                        style={{ width: `${result.readinessScore}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                      <span>Benefits</span>
                    </h4>
                    <ul className="space-y-2">
                      {result.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-1 text-slate-700"
                        >
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center space-x-2">
                      <AlertCircle className="w-5 h-5 text-amber-600" />
                      <span>Key Risks</span>
                    </h4>
                    <ul className="space-y-2">
                      {result.risks.map((risk, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-1 text-slate-700"
                        >
                          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      <span>Next Steps</span>
                    </h4>
                    <ol className="space-y-1">
                      {result.actionItems.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {idx + 1}
                          </div>
                          <span className="text-slate-700 pt-0.5">{item}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-sm text-blue-900">
                      <strong>Important:</strong> Use this assessment as a
                      guide. Always validate findings with your leadership team
                      and consult with outsourcing experts.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-2xl font-semibold mb-2">
                  Assessment Result
                </h2>
                <div className="text-center py-12">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative my-12">
                      <div className="animate-pulse w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                        <Briefcase className="w-12 h-12 text-white" />
                      </div>
                      <div className="animate-ping absolute -top-6 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-yellow-800" />
                      </div>
                      <div className="animate-ping absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-2 h-2 text-yellow-800" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-700">
                      Ready for Your Assessment?
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Complete the form on the left to receive a comprehensive
                      outsourcing readiness evaluation with detailed risk
                      analysis and action items. ✨
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

export default OutsourcingReadinessChecker;
