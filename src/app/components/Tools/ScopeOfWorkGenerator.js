"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  Calculator,
  CheckCircle,
  Download,
  FileText,
  Lightbulb,
  Loader2,
  Sparkles,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import { calculateScopeOfWork } from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const ScopeOfWorkGenerator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    clientName: "",
    description: "",
    startDate: "",
    endDate: "",
    budget: "",
    deliverables: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.projectName &&
      formData?.clientName &&
      formData?.startDate &&
      formData?.endDate &&
      formData?.budget &&
      formData?.deliverables &&
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

    const resultData = calculateScopeOfWork(formData);

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
            Generate Professional &nbsp;
            <br className="md:block hidden" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              SOW
            </span>{" "}
            in Minutes
          </>
        }
        buttonText="Create Your SOW Now"
        description="Create comprehensive Scope of Work documents with AI-powered precision. Save time, reduce errors, and maintain consistency across all your projects."
        imageSrc="/images/v2/SOW-Generator-banner.webp"
        statsGird={[
          {
            value: "98%",
            label: "Accuracy Rate",
          },
          {
            value: "5min",
            label: "Average Time",
          },
          { value: "10K+", label: "SOWs Created" },
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
              Create Your SOW
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Fill in the details below to generate your professional Scope of
              Work document
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
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-0.5">
                  <label className="font-medium text-gray-700">
                    Start Date*
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={(e) =>
                      handleInputChange("startDate", e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="space-y-0.5">
                  <label className="font-medium text-gray-700">End Date*</label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={(e) =>
                      handleInputChange("endDate", e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">Budget ($)*</label>
                <input
                  id="budget"
                  type="number"
                  className="w-full border rounded-lg p-3 bg-white"
                  value={formData.budget}
                  placeholder="E.g., $50,000"
                  onChange={(e) => handleInputChange("budget", e.target.value)}
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
                  Deliverables*
                </label>

                <textarea
                  value={formData?.deliverables}
                  onChange={(e) =>
                    handleInputChange("deliverables", e.target.value)
                  }
                  placeholder="Enter deliverables separated by commas (e.g., Responsive website, Mobile app, Admin dashboard, API documentation)"
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
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate SOW
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
                  Generated SOW
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
                      a.download = `SOW_${
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
                <div className="bg-white rounded-lg p-4 min-h-[500px] max-h-[600px] overflow-y-auto shadow-inner border">
                  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 leading-relaxed">
                    {result}
                  </pre>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative my-12">
                      <div className="animate-pulse w-24 h-24 bg-themeColor rounded-full flex items-center justify-center">
                        <FileText className="w-12 h-12 text-white" />
                      </div>
                      <div className="animate-ping absolute -top-6 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-yellow-800" />
                      </div>
                      <div className="animate-ping absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-2 h-2 text-yellow-800" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-700">
                      Ready to get SOW?
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Complete the project information on the left and click on
                      "Generate SOW" ✨
                    </p>

                    <button
                      onClick={() => document.querySelector("input")?.focus()}
                      className="bg-themeColor text-white py-3 px-6 rounded-lg font-medium flex items-center space-x-2 transition-all animate-bounce"
                    >
                      &lArr; Fill out the form to get SOW
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

export default ScopeOfWorkGenerator;
