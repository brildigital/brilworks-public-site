"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  Award,
  Calculator,
  CheckCircle,
  Lightbulb,
  Loader2,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import { calculateWhichAppShouldYouBuild } from "../lib/toolsCalculation";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const WhichAppShouldYouBuild = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    targetAudience: "",
    budget: "",
    timeline: "",
    description: "",
    primaryGoal: "",
    experience: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.targetAudience &&
      formData?.budget &&
      formData?.timeline &&
      formData?.primaryGoal &&
      formData?.experience &&
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

    const resultData = calculateWhichAppShouldYouBuild(formData);

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
            Which App&nbsp;
            <br className="md:block hidden" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Should You Build in 2025?
            </span>
          </>
        }
        buttonText="Find Your App Type"
        description="Discover the best app ideas for business growth with our AI-powered app idea generator. Instantly get personalized recommendations for your next mobile or web app based on your goals, target audience, and industry trends."
        imageSrc="/images/v2/app-selection-visual-banner.webp"
        highlights={[
          {
            icon: Star,
            color: "text-green-600",
            title: "Used By 15K+",
            description: "App Creators",
          },
          {
            icon: Users,
            color: "text-orange-600",
            title: "Free",
            description: "Instant Results",
          },
          {
            icon: Award,
            color: "text-indigo-300",
            title: "Perfect App",
            description: "Successful Developers",
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
              Which App Should You Build?
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Answer a few questions about your app idea to get personalized
              recommendations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 md:p-8 p-5 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-2">
                Tell us about your app idea
              </h2>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">App Name</label>
                <input
                  type="text"
                  value={formData.projectName}
                  onChange={(e) =>
                    handleInputChange("projectName", e.target.value)
                  }
                  placeholder="Enter your app name..."
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Target Audience*
                </label>
                <select
                  value={formData.targetAudience}
                  onChange={(e) =>
                    handleInputChange("targetAudience", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select your target audience</option>
                  <option value="consumers">General Consumers</option>
                  <option value="businesses">Small Businesses</option>
                  <option value="enterprises">Large Enterprises</option>
                  <option value="developers">Developers/Tech</option>
                  <option value="students">Students/Education</option>
                  <option value="professionals">Working Professionals</option>
                  <option value="seniors">Senior Citizens</option>
                  <option value="teens">Teenagers</option>
                </select>
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Development Budget*
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => handleInputChange("budget", e.target.value)}
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select budget range</option>
                  <option value="low">Under $15,000</option>
                  <option value="medium">$15,000 - $75,000</option>
                  <option value="high">$75,000+</option>
                </select>
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Development Timeline*
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) =>
                    handleInputChange("timeline", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select timeline</option>
                  <option value="urgent">1-3 months</option>
                  <option value="moderate">3-6 months</option>
                  <option value="flexible">6+ months</option>
                </select>
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Your Experience Level*
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) =>
                    handleInputChange("experience", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select experience level</option>
                  <option value="beginner">First-time app creator</option>
                  <option value="intermediate">
                    Some development experience
                  </option>
                  <option value="expert">Experienced developer</option>
                </select>
              </div>
              <div className="space-y-0.5">
                <label className="font-medium text-gray-700">
                  Primary Goal*
                </label>
                <select
                  value={formData.primaryGoal}
                  onChange={(e) =>
                    handleInputChange("primaryGoal", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select primary goal</option>
                  <option value="revenue">Generate Revenue</option>
                  <option value="users">Build User Base</option>
                  <option value="brand">Build Brand Awareness</option>
                  <option value="efficiency">
                    Improve Business Efficiency
                  </option>
                  <option value="entertainment">Provide Entertainment</option>
                  <option value="education">Educate Users</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  App Description*
                </label>
                <textarea
                  value={formData?.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Describe your app idea in detail. What problem does it solve? What features will it have? Include keywords like 'social', 'ecommerce', 'gaming', 'productivity', 'health', 'education', etc."
                  rows={3}
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>
              <p className="text-xs text-gray-500 ">
                Tip: Include specific keywords related to your app's
                functionality (e.g., social, shopping, gaming, productivity,
                health, education)
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
                    Calculate
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
                  <div className="border shadow-sm rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        Recommended App Type
                      </h4>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          result.marketPotential === "High"
                            ? "bg-green-100 text-green-800"
                            : result.marketPotential === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {result.marketPotential} Potential
                      </span>
                    </div>
                    <div className="mb-4">
                      <h5 className="text-2xl font-bold text-themeColor mb-2">
                        {result.appType}
                      </h5>
                      <p className="text-gray-600 font-normal mb-4">
                        Platform: {result.platform}
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                        <div
                          className={`h-3 rounded-full transition-all duration-500 ${
                            result.marketPotential === "High"
                              ? "bg-green-500"
                              : result.marketPotential === "Medium"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                          style={{ width: `${result.score}%` }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-gray-600 font-normal">
                      {result.explanation}
                    </p>
                  </div>

                  <div className="border shadow-sm rounded-lg p-4">
                    <h4 className="text-lg text-left font-semibold text-gray-900 mb-2">
                      Key Features to Include
                    </h4>
                    {result.recommendedFeatures.length > 0 ? (
                      <div className="space-y-3">
                        {result.recommendedFeatures.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">
                        Add more details to your app description to get specific
                        feature recommendations.
                      </p>
                    )}
                  </div>

                  <div className="border shadow-sm rounded-lg p-4">
                    <h4 className="text-left text-lg font-semibold text-gray-900 mb-2">
                      Development Roadmap
                    </h4>
                    <div className="space-y-3">
                      {[
                        "Create detailed wireframes and user flows",
                        "Design UI/UX for your target platform",
                        "Develop MVP with core features",
                        "Test with target users and iterate",
                      ].map((step, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-themeLight text-themeColor flex items-center justify-center text-sm font-semibold">
                            {index + 1}
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative my-12">
                      <div className="animate-pulse w-24 h-24 bg-themeColor rounded-full flex items-center justify-center">
                        <Lightbulb className="w-12 h-12 text-white" />
                      </div>
                      <div className="animate-ping absolute -top-6 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-yellow-800" />
                      </div>
                      <div className="animate-ping absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-2 h-2 text-yellow-800" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-700">
                      Ready to get recommendations?
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Complete the form on the left to receive your personalized
                      app type and platform recommendations. ✨
                    </p>

                    <button
                      onClick={() => document.querySelector("input")?.focus()}
                      className="bg-themeColor text-white py-3 px-6 rounded-lg font-medium flex items-center space-x-2 transition-all animate-bounce"
                    >
                      &lArr; Describe your app idea to get started
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

export default WhichAppShouldYouBuild;
