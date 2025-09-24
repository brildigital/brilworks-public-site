"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  Award,
  Calculator,
  Check,
  CheckCircle,
  Code,
  Loader2,
  Send,
  Server,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm, scrollToSection } from "../lib/commonFunction";
import {
  generateTechStackRecommendation,
  projectTypesForTechRecommendation,
} from "../lib/featureComplexityVsTimelineEstimatorService";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const TechStackRecommender = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const [formData, setFormData] = useState({
    projectType: "",
    projectScale: "",
    teamSize: "",
    timeline: "",
    budget: "",
    description: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.projectType &&
      formData?.projectScale &&
      formData?.teamSize &&
      formData?.timeline &&
      formData?.budget &&
      formData?.description.trim()
    );
  };

  const comparisons = [
    {
      category: "Web Development",
      stacks: [
        {
          name: "React + Node.js",
          pros: ["Large ecosystem", "Great performance", "Strong community"],
          cons: ["Complex setup", "Learning curve"],
          rating: 4.8,
          popularity: "Very High",
        },
        {
          name: "Vue.js + Express",
          pros: ["Easy to learn", "Flexible", "Good documentation"],
          cons: ["Smaller ecosystem", "Less job market"],
          rating: 4.6,
          popularity: "High",
        },
        {
          name: "React Typescript + NestJS",
          pros: ["Enterprise ready", "TypeScript native", "Full framework"],
          cons: ["Steep learning curve", "Complex for small apps"],
          rating: 4.4,
          popularity: "Medium",
        },
      ],
    },
  ];

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

    const resultData = generateTechStackRecommendation(formData);

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

  const handleFeatureChange = (featureName) => {
    setFormData((prev) => ({
      ...prev,
      testingTypes: prev.testingTypes.includes(featureName)
        ? prev.testingTypes.filter((feature) => feature !== featureName)
        : [...prev.testingTypes, featureName],
    }));
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
            Find Your Perfect &nbsp;
            <br className="block" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Tech Stack
            </span>
          </>
        }
        buttonText="Start Recommendation"
        description="Get personalized technology recommendations based on your project requirements, team expertise, and business goals. Make informed decisions with AI-powered insights."
        imageSrc="/images/v2/tech-stack-recommender.webp"
        statsGird={[
          {
            value: (
              <p className="flex flex-col items-center justify-center text-cyan-400 text-center gap-1.5">
                <Code className="md:h-8 md:w-8 h-6 w-6" />
                <span>500+</span>
              </p>
            ),
            label: "Tech Stacks",
          },
          {
            value: (
              <p className="flex flex-col items-center justify-center text-purple-400 text-center gap-1.5">
                <Users className="md:h-8 md:w-8 h-6 w-6" />
                <span>50K+</span>
              </p>
            ),
            label: "Developers",
          },
          {
            value: (
              <p className="flex flex-col items-center justify-center text-green-400 text-center gap-1.5">
                <Award className="md:h-8 md:w-8 h-6 w-6" />
                <span>98%</span>
              </p>
            ),
            label: "Accuracy",
          },
          {
            value: (
              <p className="flex flex-col items-center justify-center text-yellow-400 text-center gap-1.5">
                <TrendingUp className="md:h-8 md:w-8 h-6 w-6" />
                <span>24/7</span>
              </p>
            ),
            label: "Support",
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
              Tech Stack Recommender
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Answer a few questions to get personalized technology
              recommendations for your project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-2.5">
              <h2 className="text-center text-2xl font-semibold mb-2">
                Project Requirements
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
                  {projectTypesForTechRecommendation.map((type) => (
                    <option key={type.key} value={type.key}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Project Scale *
                </label>

                <select
                  value={formData?.projectScale}
                  onChange={(e) =>
                    handleInputChange("projectScale", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select scale</option>
                  <option value="small">Small (MVP/Prototype)</option>
                  <option value="medium">Medium (Growing business)</option>
                  <option value="large">Large (Enterprise)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">Team Size *</label>

                <select
                  value={formData?.teamSize}
                  onChange={(e) =>
                    handleInputChange("teamSize", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select team size</option>
                  <option value="1">Solo developer</option>
                  <option value="2-5">2-5 developers</option>
                  <option value="6-15">6-15 developers</option>
                  <option value="15+">15+ developers</option>
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
                  <option value="1-3">1-3 months</option>
                  <option value="3-6">3-6 months</option>
                  <option value="6-12">6-12 months</option>
                  <option value="12+">12+ months</option>
                </select>
              </div>

              {/* Timeline */}
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Budget Range *
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => handleInputChange("budget", e.target.value)}
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select budget</option>
                  <option value="low">Low ($0-$10k)</option>
                  <option value="medium">Medium ($10k-$50k)</option>
                  <option value="high">High ($50k+)</option>
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
                    <Send className="mr-2 h-5 w-5" />
                    Get Recommendations
                  </>
                )}
              </button>
            </div>

            {/* Cost Estimate */}
            {result && hasVisited ? (
              <div className="popup bg-white rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-2xl font-semibold mb-4">
                  Recommendations
                </h2>

                <div className="space-y-4">
                  {/* Primary Recommendation */}
                  <div className="bg-white rounded-xl p-6 border-2 border-green-200 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900">
                        Best Match
                      </h4>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {result.primary.match}% Match
                      </div>
                    </div>

                    <h5 className="text-lg font-semibold text-gray-800 mb-3">
                      {result.primary.name}
                    </h5>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {result.primary.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h6 className="font-semibold text-green-600 mb-2">
                          Pros:
                        </h6>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {result.primary.pros.map((pro, index) => (
                            <li key={index}>• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-semibold text-red-600 mb-2">
                          Cons:
                        </h6>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {result.primary.cons.map((con, index) => (
                            <li key={index}>• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Alternative Recommendations */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Alternative Options
                    </h4>
                    {result.alternatives.map((alt, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h5 className="font-semibold text-gray-800">
                            {alt.name}
                          </h5>
                          <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                            {alt.match}% Match
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {alt.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-2xl font-semibold mb-2">
                  Recommendations
                </h2>
                <div className="text-center py-12">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative my-12">
                      <div className="animate-pulse w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                        <Server className="w-12 h-12 text-white" />
                      </div>
                      <div className="animate-ping absolute -top-6 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-yellow-800" />
                      </div>
                      <div className="animate-ping absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-2 h-2 text-yellow-800" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-700">
                      Ready to Calculate?
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Fill out the form to get your personalized tech stack
                      recommendations ✨
                    </p>

                    <button
                      onClick={() => document.querySelector("select")?.focus()}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium flex items-center space-x-2 hover:from-purple-700 hover:to-blue-700 transition-all animate-bounce"
                    >
                      &lArr; Start by selecting your project requirements
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto main-section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tech Stack Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare popular technology stacks to make informed decisions for
              your project
            </p>
          </div>

          {comparisons.map((comparison, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {comparison.category} Stacks
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {comparison.stacks.map((stack, stackIndex) => (
                  <div
                    key={stackIndex}
                    className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow"
                  >
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {stack.name}
                      </h4>
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(stack.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-gray-600 font-medium">
                          {stack.rating}
                        </span>
                      </div>
                      <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        {stack.popularity} Popularity
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-green-600 mb-2 flex items-center">
                          <Check className="w-4 h-4 mr-1" />
                          Pros
                        </h5>
                        <ul className="space-y-1">
                          {stack.pros.map((pro, proIndex) => (
                            <li
                              key={proIndex}
                              className="text-sm text-gray-600 flex items-start"
                            >
                              <span className="text-green-500 mr-2">•</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold text-red-600 mb-2 flex items-center">
                          <X className="w-4 h-4 mr-1" />
                          Cons
                        </h5>
                        <ul className="space-y-1">
                          {stack.cons.map((con, conIndex) => (
                            <li
                              key={conIndex}
                              className="text-sm text-gray-600 flex items-start"
                            >
                              <span className="text-red-500 mr-2">•</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <button
                        onClick={(e) => scrollToSection(e, "CTA")}
                        className="w-full bg-gradient-to-r from-indigo-600 to-themeColor text-white py-2 px-4 rounded-lg font-medium hover:from-indigo-600/90 hover:to-[#017eebE6] transition-colors"
                      >
                        Get Detailed Analysis
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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

export default TechStackRecommender;
