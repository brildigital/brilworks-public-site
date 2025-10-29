"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  AlertTriangle,
  FileText,
  Loader2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import { generateSecurityChecklist } from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const AppSecurityChecklistGenerator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState({
    appType: "",
    dataHandling: "",
    userAuth: "",
    compliance: "",
    description: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.appType &&
      formData?.dataHandling &&
      formData?.userAuth &&
      formData?.compliance &&
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

    const resultData = generateSecurityChecklist(formData);

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
            App Security &nbsp;
            <br className="md:block hidden" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Checklist Generator
            </span>
          </>
        }
        buttonText="Generate Your Checklist"
        description="Generate a custom security checklist for applications designed around your app’s architecture, data sensitivity, and compliance goals. Our application security checklist generator provides actionable recommendations to help you safeguard users, data, and infrastructure against threats."
        imageSrc="/images/v2/app-security-guide-banner.webp"
        statsGird={[
          { value: "50+", label: "Security Checks" },
          {
            value: "100%",
            label: "Compliance",
          },
          {
            value: "24/7",
            label: "Protection",
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
              Generate Your Security Checklist
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Provide your application details for a customized checklist
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 md:p-8 p-5 space-y-5">
              <h3 className="text-center text-2xl font-semibold mb-2">
                Application Information
              </h3>
              <div className="space-y-2">
                <label className="font-medium text-gray-700">
                  Application Type*
                </label>
                <input
                  type="text"
                  value={formData.appType}
                  onChange={(e) => handleInputChange("appType", e.target.value)}
                  placeholder="e.g., Web App, Mobile App, API, SaaS"
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="font-medium text-gray-700">
                  Data Handling*
                </label>
                <input
                  type="text"
                  value={formData.dataHandling}
                  onChange={(e) =>
                    handleInputChange("dataHandling", e.target.value)
                  }
                  placeholder="e.g., Personal data, Payment info, Health records"
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="font-medium text-gray-700">
                  User Authentication*
                </label>
                <input
                  type="text"
                  value={formData.userAuth}
                  onChange={(e) =>
                    handleInputChange("userAuth", e.target.value)
                  }
                  placeholder="e.g., JWT, OAuth, MFA, SSO"
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="font-medium text-gray-700">
                  Compliance Requirements*
                </label>
                <input
                  type="text"
                  value={formData.compliance}
                  onChange={(e) =>
                    handleInputChange("compliance", e.target.value)
                  }
                  placeholder="e.g., GDPR, HIPAA, PCI DSS, SOX, ISO 27001"
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>

              <div className="space-y-2">
                <label className="font-medium text-gray-700">
                  Additional Details & Keywords*
                </label>
                <textarea
                  value={formData?.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Describe your security concerns and infrastructure. Include keywords like: cloud, encryption, public-facing, containers, AWS, Azure, external API, etc."
                  rows={3}
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>
              <p className="text-xs text-gray-500 ">
                Tip: Include infrastructure details and security technologies
                for tailored recommendations
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
                  "Generate Checklist"
                )}
              </button>
            </div>

            {/* Cost Estimate */}
            <div className="popup bg-white rounded-2xl border shadow-lg p-8">
              <h3 className="text-center text-2xl font-semibold mb-4">
                Your Security Checklist
              </h3>
              {result && hasVisited ? (
                <div className="space-y-3 overflow-auto max-h-[630px] pr-1">
                  <div className="bg-white p-4 rounded-xl border border-emerald-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-gray-600 mb-1">
                          RISK LEVEL
                        </p>
                        <p className={`text-3xl font-bold ${result.color}`}>
                          {result.riskLevel}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-600 mb-1">
                          TOTAL CHECKS
                        </p>
                        <p className="text-3xl font-bold text-gray-900">
                          {result.totalItems}
                        </p>
                      </div>
                    </div>
                  </div>

                  {result.checklist.map((category, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-xl border border-emerald-100"
                    >
                      <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                        <ShieldCheck className="w-5 h-5 mr-2 text-emerald-600" />
                        {category.category}
                      </h4>
                      <ul className="space-y-1">
                        {category.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="flex items-start space-x-2"
                          >
                            <div className="flex-shrink-0 mt-0.5">
                              <div className="w-4 h-4 border border-themeColor rounded"></div>
                            </div>
                            <span className="text-gray-700 text-sm">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="bg-gradient-to-r from-themeColor to-themeSecondary p-4 rounded-xl text-white">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold !mb-1">
                          IMPLEMENTATION PRIORITY
                        </p>
                        <p className="text-sm leading-relaxed">
                          Start with Authentication & Authorization items, then
                          focus on Data Protection. Implement monitoring early
                          to track security events as you progress through the
                          checklist.
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
                      Ready to get checklist?
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Complete the application information on the left to get
                      checklist. ✨
                    </p>

                    <button
                      onClick={() => document.querySelector("input")?.focus()}
                      className="bg-themeColor text-white py-3 px-6 rounded-lg font-medium flex items-center space-x-2 transition-all animate-bounce"
                    >
                      &lArr; Fill out the form to get checklist
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

export default AppSecurityChecklistGenerator;
