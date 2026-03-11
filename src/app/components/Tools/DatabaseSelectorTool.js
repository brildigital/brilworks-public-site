"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  Award,
  Database,
  Loader2,
  Search,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import ToolHerosection from "./ToolHerosection";
import ToolsPopupContactForm from "./ToolsPopupContactForm";
import { hasSubmittedForm } from "../lib/commonFunction";
import { databaseSelectorRecommendations } from "../lib/featureComplexityVsTimelineEstimatorService";

const ToolHowToUse = dynamic(() => import("./ToolHowToUse"));
const ToolFeatures = dynamic(() => import("./ToolFeatures"));
const ToolFAQs = dynamic(() => import("./ToolFAQs"));

const DatabaseSelectorTool = () => {
  const pathname = usePathname();
  const [openPopup, setOpenPopup] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const [formData, setFormData] = useState({
    projectType: "",
    dataVolume: "",
    complexity: "",
    scalability: "",
    budget: "",
    team: "",
    description: "",
  });

  const [result, setResult] = useState();

  const isFormValid = () => {
    return (
      formData?.projectType &&
      formData?.dataVolume &&
      formData?.complexity &&
      formData?.scalability &&
      formData?.budget &&
      formData?.team &&
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

    const resultData = databaseSelectorRecommendations(formData);

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
            Find Your Perfect &nbsp;
            <br className="block" />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-[#01dbd4]">
              Database
            </span>
          </>
        }
        buttonText="Start My Recommendation"
        description="Stop guessing and start building with confidence. Our intelligent tool analyzes your project requirements and recommends the best database for startups, SaaS applications, mobile apps, and web applications—in seconds."
        imageSrc="/images/v2/database-selector-banner.webp"
        highlights={[
          {
            icon: Star,
            color: "text-green-600",
            title: "Proven Accuracy",
            description: "98% Accuracy Rate",
          },
          {
            icon: Users,
            color: "text-orange-600",
            title: "Used by",
            description: "10,000+ Developers",
          },
          {
            icon: Award,
            color: "text-indigo-300",
            title: "Industry Leader",
            description: "Trusted by startups",
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
              Database Selector Tool
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Answer a few questions to get your personalized recommendations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-2.5">
              {/* <h2 className="text-center text-2xl font-semibold mb-2">
                Project Details
              </h2> */}
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
                  <option value="web">Web Application</option>
                  <option value="mobile">Mobile App</option>
                  <option value="enterprise">Enterprise System</option>
                  <option value="analytics">Analytics Platform</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Expected Data Volume *
                </label>

                <select
                  value={formData?.dataVolume}
                  onChange={(e) =>
                    handleInputChange("dataVolume", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select data volume</option>
                  <option value="small">Small (&lt;1GB)</option>
                  <option value="medium">Medium (1GB-100GB)</option>
                  <option value="large">Large (100GB-1TB)</option>
                  <option value="enterprise_vol">Enterprise (&gt;1TB)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Data Complexity *
                </label>
                <select
                  value={formData?.complexity}
                  onChange={(e) =>
                    handleInputChange("complexity", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select complexity</option>
                  <option value="simple">Simple (Basic CRUD)</option>
                  <option value="moderate">Moderate (Relations, Joins)</option>
                  <option value="complex">
                    Complex (Analytics, Real-time)
                  </option>
                </select>
              </div>

              {/* Project Complexity */}

              {/* Design Requirements */}
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Scalability Needs *
                </label>
                <select
                  value={formData.scalability}
                  onChange={(e) =>
                    handleInputChange("scalability", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select scalability needs</option>
                  <option value="low">Low (Single server)</option>
                  <option value="medium_scale">Medium (Load balancing)</option>
                  <option value="high">High (Distributed system)</option>
                </select>
              </div>

              {/* Timeline */}
              <div className="space-y-1">
                <label className="font-medium text-gray-700">Budget *</label>
                <select
                  value={formData.budget}
                  onChange={(e) => handleInputChange("budget", e.target.value)}
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select budget range</option>
                  <option value="low_budget">
                    Low (Open source preferred)
                  </option>
                  <option value="medium_budget">
                    Medium (Some licensing OK)
                  </option>
                  <option value="high_budget">
                    High (Enterprise solutions)
                  </option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="font-medium text-gray-700">
                  Team Expertise *
                </label>
                <select
                  value={formData.team}
                  onChange={(e) => handleInputChange("team", e.target.value)}
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select team expertise</option>
                  <option value="junior">Junior (Learning curve OK)</option>
                  <option value="mixed">Mixed (Some experience)</option>
                  <option value="senior">Senior (Complex solutions OK)</option>
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
            {result && hasVisited ? (
              <div className="popup bg-white rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-2xl font-semibold mb-4">
                  Your Recommendations
                </h2>

                <div className="space-y-4">
                  {result.map((db, index) => (
                    <div
                      key={db.name}
                      className="bg-white border border-gray-200 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
                    >
                      <div className="flex items-center gap-4 mb-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-8 h-8 ${db.color} text-white rounded-full flex items-center justify-center text-sm font-bold`}
                          >
                            #{index + 1}
                          </span>
                          <div>
                            <h4 className="text-start text-lg font-semibold text-gray-900">
                              {db.name}
                            </h4>
                            <p className="text-start text-sm font-medium text-gray-500">
                              {db.type}
                            </p>
                          </div>
                        </div>
                        <div className="ml-auto">
                          <div className="text-right">
                            <p className="text-2xl font-bold text-green-600">
                              {db.score}%
                            </p>
                            <p className="font-medium text-sm text-gray-500">
                              Match Score
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 font-normal">{db.useCase}</p>
                      <hr className="my-2" />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-left font-medium text-green-700 mb-1">
                            ✅ Pros
                          </h5>
                          <ul className="list-disc marker:text-green-600 text-left font-normal text-sm text-gray-600 pl-4">
                            {db.pros.map((pro, i) => (
                              <li key={i}>{pro}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-left font-medium text-red-700 mb-1">
                            ⚠️ Considerations
                          </h5>
                          <ul className="list-disc marker:text-red-600 text-left font-normal text-sm text-gray-600 pl-4">
                            {db.cons.map((con, i) => (
                              <li key={i}>{con}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border shadow-lg p-8">
                <h2 className="text-center text-2xl font-semibold mb-2">
                  Your Recommendations
                </h2>
                <div className="text-center py-12">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative my-12">
                      <div className="animate-pulse w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                        <Database className="w-12 h-12 text-white" />
                      </div>
                      <div className="animate-ping absolute -top-6 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-yellow-800" />
                      </div>
                      <div className="animate-ping absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sparkles className="w-2 h-2 text-yellow-800" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-700">
                      Ready for Recommendations?
                    </h3>

                    <p className="text-gray-600 max-w-sm">
                      Fill out the form to get your personalized database
                      recommendations ✨
                    </p>

                    <button
                      onClick={() => document.querySelector("select")?.focus()}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium flex items-center space-x-2 hover:from-purple-700 hover:to-blue-700 transition-all animate-bounce"
                    >
                      &lArr; Start by selecting your project details
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className="bg-themeLight">
        <div className="container max-w-7xl mx-auto main-section-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Database Comparison
            </h2>
            <p className="text-xl text-gray-600">
              Quick overview of popular database options
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-themeColor to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Database</th>
                  <th className="px-6 py-4 text-center">Type</th>
                  <th className="px-6 py-4 text-center">Scalability</th>
                  <th className="px-6 py-4 text-center">Learning Curve</th>
                  <th className="px-6 py-4 text-center">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-blue-600">
                    PostgreSQL
                  </td>
                  <td className="px-6 py-4 text-center">Relational</td>
                  <td className="px-6 py-4 text-center">⭐⭐⭐⭐</td>
                  <td className="px-6 py-4 text-center">Medium</td>
                  <td className="px-6 py-4 text-center">Complex web apps</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-orange-600">
                    MySQL
                  </td>
                  <td className="px-6 py-4 text-center">Relational</td>
                  <td className="px-6 py-4 text-center">⭐⭐⭐</td>
                  <td className="px-6 py-4 text-center">Easy</td>
                  <td className="px-6 py-4 text-center">Web applications</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-green-600">
                    MongoDB
                  </td>
                  <td className="px-6 py-4 text-center">NoSQL</td>
                  <td className="px-6 py-4 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="px-6 py-4 text-center">Medium</td>
                  <td className="px-6 py-4 text-center">Flexible schemas</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-red-600">
                    Redis
                  </td>
                  <td className="px-6 py-4 text-center">In-Memory</td>
                  <td className="px-6 py-4 text-center">⭐⭐⭐⭐</td>
                  <td className="px-6 py-4 text-center">Easy</td>
                  <td className="px-6 py-4 text-center">Caching, sessions</td>
                </tr>
              </tbody>
            </table>
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
          toolFormData={{ toolFormData: formData }}
        />
      )}
    </>
  );
};

export default DatabaseSelectorTool;
