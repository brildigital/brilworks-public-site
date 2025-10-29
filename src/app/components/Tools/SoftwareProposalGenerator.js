"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  Calculator,
  CheckCircle,
  Code2,
  Download,
  Lightbulb,
  Loader2,
  Sparkles,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import { calculateSoftwareProposal } from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const SoftwareProposalGenerator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    clientName: "",
    timeline: "",
    budget: "",
    techStack: "",
    features: "",
    description: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.projectName &&
      formData?.clientName &&
      formData?.timeline &&
      formData?.budget &&
      formData?.techStack &&
      formData?.features &&
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

    const resultData = calculateSoftwareProposal(formData);

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
            Create Winning
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              &nbsp;Software Proposals&nbsp;
            </span>
            Instantly
          </>
        }
        buttonText="Create Your Proposal Now"
        description="Generate professional software proposals that win clients faster. Our AI-powered proposal builder helps you create comprehensive, error-free, and visually consistent documents in minutes. Save time with project proposal automation and focus on what matters — closing deals."
        imageSrc="/images/v2/Software-Proposal-Design-banner.webp"
        statsGird={[
          { value: "95%", label: "Win Rate" },
          {
            value: "10min",
            label: "Average Time",
          },
          {
            value: "15k+",
            label: "Proposals Created",
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
              Create Your Software Proposal
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Fill in the details below to generate your professional software
              development proposal
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 md:p-8 p-5 space-y-2.5">
              <h3 className="text-center text-2xl font-semibold mb-2">
                Project Information
              </h3>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Project Name*
                </label>
                <input
                  type="text"
                  value={formData.projectName}
                  onChange={(e) =>
                    handleInputChange("projectName", e.target.value)
                  }
                  placeholder="E.g., E-commerce Platform Development"
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Client Name*
                </label>
                <input
                  type="text"
                  value={formData.clientName}
                  onChange={(e) =>
                    handleInputChange("clientName", e.target.value)
                  }
                  placeholder="E.g., Tech Innovations Inc."
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Project Description*
                </label>
                <textarea
                  value={formData?.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Describe the software project using keywords like: web application, mobile app, cloud-based, real-time, scalable, microservices, API, dashboard, etc."
                  rows={3}
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>
              <p className="text-xs text-gray-500 ">
                Tip: Include technical keywords for better proposal generation
              </p>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Technology Stack*
                </label>
                <input
                  type="text"
                  value={formData.techStack}
                  onChange={(e) =>
                    handleInputChange("techStack", e.target.value)
                  }
                  placeholder="E.g., React, Node.js, PostgreSQL, AWS"
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="space-y-0.5">
                  <label className="font-medium text-gray-700">
                    Timeline (weeks)*
                  </label>
                  <input
                    id="timeline"
                    type="number"
                    className="w-full border rounded-lg p-3 bg-white"
                    value={formData.timeline}
                    placeholder="E.g., 12"
                    onChange={(e) =>
                      handleInputChange("timeline", e.target.value)
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
                <div className="space-y-0.5">
                  <label className="font-medium text-gray-700">
                    Budget ($)*
                  </label>
                  <input
                    id="budget"
                    type="number"
                    className="w-full border rounded-lg p-3 bg-white"
                    value={formData.budget}
                    placeholder="E.g., $50,000"
                    onChange={(e) =>
                      handleInputChange("budget", e.target.value)
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
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Key Features*
                </label>
                <textarea
                  value={formData?.features}
                  onChange={(e) =>
                    handleInputChange("features", e.target.value)
                  }
                  placeholder="Enter key features separated by commas (e.g., User authentication, Payment processing, Real-time notifications, Admin dashboard, Analytics)"
                  rows={2}
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>
              <p className="text-xs text-gray-500 ">
                Tip: Include keywords related to features you're considering
                (e.g., user, payment, social, analytics, mobile)
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
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate Proposal
                  </>
                )}
              </button>
            </div>

            {/* Cost Estimate */}
            <div className="popup bg-white rounded-2xl border shadow-lg p-8">
              <div
                className={`flex items-center ${
                  result ? "justify-between" : "justify-center"
                } mb-6`}
              >
                <h3 className="text-center text-2xl font-semibold">
                  Generated Proposal
                </h3>
                {result && (
                  <button
                    onClick={() => {
                      const blob = new Blob([result], {
                        type: "text/plain",
                      });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = `Software_Proposal_${
                        formData.projectName || "Document"
                      }.txt`;
                      a.click();
                    }}
                    className="bg-themeColor hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                )}
              </div>
              {result && hasVisited ? (
                <div className="bg-white rounded-lg p-4 min-h-[500px] max-h-[650px] overflow-y-auto shadow-inner border">
                  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 leading-relaxed">
                    {result}
                  </pre>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative my-12">
                      <div className="animate-pulse w-24 h-24 bg-themeColor rounded-full flex items-center justify-center">
                        <Code2 className="w-12 h-12 text-white" />
                      </div>
                      <div className="animate-ping absolute -top-6 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-yellow-800" />
                      </div>
                      <div className="animate-ping absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-2 h-2 text-yellow-800" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-700">
                      Ready to get proposal?
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Your generated proposal will appear here ✨
                    </p>

                    <button
                      onClick={() => document.querySelector("input")?.focus()}
                      className="bg-themeColor text-white py-3 px-6 rounded-lg font-medium flex items-center space-x-2 transition-all animate-bounce"
                    >
                      &lArr; Fill in the form to get Proposal
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

export default SoftwareProposalGenerator;
