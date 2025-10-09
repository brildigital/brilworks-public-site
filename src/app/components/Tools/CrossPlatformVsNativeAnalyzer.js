"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  Award,
  CalculatorIcon,
  CheckCircle,
  Clock,
  Code,
  DollarSign,
  Loader2,
  Search,
  Smartphone,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import { crossPlatformAnalyzeProject } from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const CrossPlatformVsNativeAnalyzer = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState({
    projectType: "",
    budget: "",
    timeline: "",
    teamSize: "",
    platforms: [],
    performanceNeeds: "",
    description: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.projectType &&
      formData?.budget &&
      formData?.timeline &&
      formData?.performanceNeeds &&
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

    const resultData = crossPlatformAnalyzeProject(formData);

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
            Cross-Platform vs Native
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              &nbsp;Mobile App Analyzer
            </span>
          </>
        }
        buttonText="Start Analysis"
        description="Make data-driven decisions for mobile app development. Get personalized recommendations based on your project requirements, budget, and timeline."
        imageSrc="/images/v2/cross-platform-vs-native-env-banner.webp"
        highlights={[
          {
            icon: Star,
            color: "text-green-600",
            title: "Rating",
            description: "4.9/5 Rating",
          },
          {
            icon: Users,
            color: "text-orange-600",
            title: "50K+",
            description: "Projects Analyzed",
          },
          {
            icon: Award,
            color: "text-indigo-300",
            title: "Trusted By",
            description: "10K+ Developers",
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
              Analyze Your Project
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out the form below to get a personalized recommendation for
              your mobile app development approach
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-2">
                Project Details
              </h2>

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
                  <option value="">Select project type</option>
                  <option value="business">Business/Productivity App</option>
                  <option value="ecommerce">E-commerce App</option>
                  <option value="social">Social Media App</option>
                  <option value="game">Gaming App</option>
                  <option value="utility">Utility/Tool App</option>
                  <option value="educational">Educational App</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Budget Range *
                </label>

                <select
                  value={formData?.budget}
                  onChange={(e) => handleInputChange("budget", e.target.value)}
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select budget range</option>
                  <option value="low">$50K - $150K</option>
                  <option value="moderate">$150K - $400K</option>
                  <option value="high">$400K+</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">Timeline *</label>
                <select
                  value={formData?.timeline}
                  onChange={(e) =>
                    handleInputChange("timeline", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select timeline</option>
                  <option value="urgent">2-4 months (Urgent)</option>
                  <option value="moderate">4-8 months (Moderate)</option>
                  <option value="flexible">8+ months (Flexible)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Performance Requirements *
                </label>
                <select
                  value={formData.performanceNeeds}
                  onChange={(e) =>
                    handleInputChange("performanceNeeds", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select performance needs</option>
                  <option value="basic">Basic (Standard UI/UX)</option>
                  <option value="moderate">Moderate (Good Performance)</option>
                  <option value="critical">Critical (High Performance)</option>
                </select>
              </div>

              {/* Project Description */}
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Project Description *
                </label>
                <textarea
                  value={formData?.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Describe your feature..."
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
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-5 w-5" />
                    Get My Database Recommendations
                  </>
                )}
              </button>
            </div>

            {/* Cost Estimate */}
            <div className="popup bg-white rounded-2xl border shadow-lg p-8">
              <h2 className="text-center text-2xl font-semibold mb-4">
                Analysis Results
              </h2>
              {result && hasVisited ? (
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 border border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          result.recommendation === "native"
                            ? "bg-purple-100 text-purple-600"
                            : result.recommendation === "cross-platform"
                            ? "bg-green-100 text-green-600"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {result.recommendation === "native" ? (
                          <Code className="w-6 h-6" />
                        ) : result.recommendation === "cross-platform" ? (
                          <Smartphone className="w-6 h-6" />
                        ) : (
                          <Zap className="w-6 h-6" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold capitalize">
                          {result.recommendation.replace("-", " ")} Development
                        </h4>
                        <p className="text-gray-600">Recommended approach</p>
                      </div>
                    </div>

                    <div className={`w-full bg-gray-200 rounded-full h-2 mb-4`}>
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          result.recommendation === "native"
                            ? "bg-purple-500"
                            : result.recommendation === "cross-platform"
                            ? "bg-green-500"
                            : "bg-blue-500"
                        }`}
                        style={{ width: `${result.score}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Confidence Score: {result.score}%
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-4 border border-blue-200 text-center">
                      <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="font-medium text-gray-900">Timeline</div>
                      <div className="text-sm text-gray-600">
                        {result.timeline}
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-blue-200 text-center">
                      <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <div className="font-medium text-gray-900">Budget</div>
                      <div className="text-sm text-gray-600">
                        {result.budget}
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-blue-200 text-center">
                      <Zap className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                      <div className="font-medium text-gray-900">
                        Performance
                      </div>
                      <div className="text-sm text-gray-600">
                        {result.performance}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-blue-200">
                    <h5 className="font-semibold text-gray-900 mb-3">
                      Key Reasoning
                    </h5>
                    <ul className="space-y-2">
                      {result.reasoning.map((reason, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative my-12">
                      <div className="animate-pulse w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
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
                      Fill out the form to get your personalized recommendation
                      ✨
                    </p>

                    <button
                      onClick={() => document.querySelector("select")?.focus()}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium flex items-center space-x-2 hover:from-purple-700 hover:to-blue-700 transition-all animate-bounce"
                    >
                      &lArr; Start by selecting your project details
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-themeLight">
        <div className="container max-w-7xl mx-auto main-section-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Detailed Comparison
            </h2>
            <p className="text-xl text-gray-600">
              Compare key aspects of different development approaches
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">
                      Aspect
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      Native
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      Cross-Platform
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      Hybrid
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["Development Speed", "Slower", "Faster", "Moderate"],
                    ["Performance", "Excellent", "Good", "Good"],
                    ["Platform Features", "Full Access", "Limited", "Moderate"],
                    ["Code Reusability", "None", "High", "Moderate"],
                    ["Development Cost", "Higher", "Lower", "Moderate"],
                    ["Maintenance", "Complex", "Simple", "Moderate"],
                    ["User Experience", "Excellent", "Good", "Good"],
                    [
                      "Team Requirements",
                      "Platform Experts",
                      "General Devs",
                      "Mixed Skills",
                    ],
                  ].map(([aspect, native, crossPlatform, hybrid], index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {aspect}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-700">
                        {native}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-700">
                        {crossPlatform}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-700">
                        {hybrid}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
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

export default CrossPlatformVsNativeAnalyzer;
