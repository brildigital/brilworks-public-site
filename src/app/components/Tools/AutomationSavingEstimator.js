"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  Calculator,
  CheckCircle,
  Clock,
  DollarSign,
  Loader2,
  Sparkles,
  Target,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import { calculateAutomationSavings } from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const AutomationSavingEstimator = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState({
    employeeCount: "",
    averageHourlyWage: "",
    hoursPerTask: "",
    tasksPerWeek: "",
    automationCost: "",
    implementationTime: "",
    description: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.employeeCount &&
      formData?.averageHourlyWage &&
      formData?.hoursPerTask &&
      formData?.tasksPerWeek &&
      formData?.automationCost &&
      formData?.implementationTime &&
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

    const resultData = calculateAutomationSavings(formData);

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

  const processDetailFields = [
    {
      id: "employeeCount",
      label: "Number of Employees Involved*",
    },
    {
      id: "averageHourlyWage",
      label: "Average Hourly Wage* ($)",
    },
    {
      id: "hoursPerTask",
      label: "Hours per Task*",
    },
    {
      id: "tasksPerWeek",
      label: "Tasks per Week*",
    },
    {
      id: "automationCost",
      label: "Automation Implementation Cost* ($)",
    },
    {
      id: "implementationTime",
      label: "Implementation Time* (weeks)",
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
            Calculate Your Process&nbsp;
            <br className="md:block hidden" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Automation ROI
            </span>
          </>
        }
        buttonText="Calculate Saving"
        description="Discover how much time and money your business can save by automating repetitive tasks. Our intelligent estimator delivers precise process automation ROI insights, helping you make smarter decisions and accelerate digital transformation."
        imageSrc="/images/v2/automation-savings-banner.webp"
        statsGird={[
          { value: "5K+", label: "Trusted by Companies" },
          { value: "30%", label: "Profits increase" },
          { value: "$50,000+", label: "Annually Save" },
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
              Automation Savings Calculator
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Enter your current process details to calculate potential savings
              and ROI from automation implementation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 md:p-8 p-5 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-5">
                Process Details
              </h2>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 !mb-5">
                {processDetailFields.map((field) => (
                  <div key={field.id} className="space-y-1">
                    <label
                      htmlFor={field.id}
                      className="font-medium text-sm text-gray-700"
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
                <label className="font-medium text-sm text-gray-700">
                  Process Description*
                </label>
                <textarea
                  value={formData?.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="e.g., complex data entry with AI validation for customer service automation"
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

            <div className="popup bg-white rounded-2xl border shadow-lg p-8">
              <h2 className="text-center text-2xl font-semibold mb-4">
                Savings Analysis
              </h2>
              {result && hasVisited ? (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border bg-green-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          Annual Savings
                        </p>
                        <p className="text-4xl font-bold text-green-600">
                          ${result.annualSavings.toFixed(0)}
                        </p>
                      </div>
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <DollarSign className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border bg-gray-100">
                      <p className="text-sm text-gray-600">ROI Timeline</p>
                      <p className="text-2xl font-bold text-blue-600">
                        {result.roiMonths > 0
                          ? `${result.roiMonths.toFixed(1)} months`
                          : "N/A"}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border bg-gray-100">
                      <p className="text-sm text-gray-600">5-Year Savings</p>
                      <p className="text-2xl font-bold text-purple-600">
                        ${result.fiveYearSavings.toFixed(0)}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border">
                    <p className="text-sm text-gray-600">Weekly Hours Saved</p>
                    <p className="text-2xl font-bold text-indigo-600">
                      {result.weeklyHoursSaved.toFixed(1)} hours
                    </p>
                  </div>

                  {result.efficiencyGain !== 0.85 && (
                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl">
                      <div className="flex items-center">
                        <Sparkles className="w-5 h-5 text-yellow-600 mr-2" />
                        <p className="text-sm font-semibold text-yellow-800">
                          Process Type Adjustment:{" "}
                          {(result.efficiencyGain * 100).toFixed(0)}% efficiency
                        </p>
                      </div>
                      <p className="text-xs text-yellow-700 mt-1">
                        Efficiency rate adjusted based on process description
                      </p>
                    </div>
                  )}

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Key Insights
                    </h4>
                    <div className="space-y-1 text-left text-sm text-blue-800">
                      {result.roiMonths <= 12 && result.roiMonths > 0 ? (
                        <p className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Excellent ROI - payback within 1 year
                        </p>
                      ) : result.roiMonths <= 24 && result.roiMonths > 0 ? (
                        <p className="flex items-center">
                          <Target className="w-4 h-4 text-orange-500 mr-2" />
                          Good ROI - consider implementation
                        </p>
                      ) : result.roiMonths > 0 ? (
                        <p className="flex items-center">
                          <Clock className="w-4 h-4 text-red-500 mr-2" />
                          Long payback period - review costs
                        </p>
                      ) : (
                        <p className="text-gray-600">
                          Enter implementation cost for ROI analysis
                        </p>
                      )}
                      <p>• Focus on high-volume, repetitive tasks first</p>
                      <p>
                        • Consider employee retraining and change management
                      </p>
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
                      Fill out the form on the left and your instant saving
                      estimate will magically appear here ✨
                    </p>

                    <button
                      onClick={() => document.querySelector("input")?.focus()}
                      className="bg-themeColor text-white py-3 px-6 rounded-lg font-medium flex items-center space-x-2 transition-all animate-bounce"
                    >
                      &lArr; Start by selecting your process details
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

export default AutomationSavingEstimator;
