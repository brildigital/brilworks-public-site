"use client";
import React, { useEffect, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle,
  Clock,
  Cloud,
  Code,
  Cpu,
  Database,
  DollarSign,
  Link,
  Lock,
  Smartphone,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Wallet,
  X,
  Zap,
} from "lucide-react";
import PortfolioContactForm from "../Portfolio/PortfolioContactForm";
import { usePathname } from "next/navigation";
import { getStatusColor, markFormSubmitted } from "../lib/commonFunction";

const ToolsPopupContactForm = ({ open, handleClose, result, setResult }) => {
  const pathname = usePathname();
  const [showPrice, setShowPrice] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // disable background scroll
    } else {
      document.body.style.overflow = ""; // reset to default
    }

    // cleanup if component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (showPrice) {
      markFormSubmitted(pathname);
    }
  }, [showPrice]);

  const defaultDesc =
    "The platform, design requirement, description, and project complexity are considered when calculating the cost. This is an estimate to give you an idea of the possible budget range for your project.";

  const TITLE_ICON_MAP = {
    "/tools/project-estimate/": {
      title: "Cost Estimate",
      icon: Wallet,
      desc: defaultDesc,
    },
    "/tools/roi-calculator/": {
      title: "Your Estimates ROI",
      desc: defaultDesc,
    },
    "/tools/mobility-app-development-calculator/": {
      title: "Cost Estimate",
      icon: BarChart3,
      desc: defaultDesc,
    },
    "/tools/saas-development-cost-calculator/": {
      title: "Cost Estimate",
      icon: Wallet,
      desc: defaultDesc,
    },
    "/tools/mvp-development-cost-calculator/": {
      title: "Cost Estimate",
      icon: Wallet,
      desc: defaultDesc,
    },
    "/tools/app-maintenance-cost-estimator/": {
      title: "Cost Estimate",
      icon: Wallet,
    },
    "/tools/app-development-timeline-calculator/": {
      title: "Your Estimated Timeline",
      icon: Calendar,
    },
    "/tools/mvp-launch-timeline-estimator/": {
      title: "Your MVP Timeline",
      icon: Calendar,
    },
    "/tools/feature-complexity-vs-time-estimator/": {
      title: "Your Estimation Results",
    },
    "/tools/testing-qa-timeline-estimator/": {
      title: "Your Timeline Results",
      icon: Calendar,
    },
    "/tools/go-to-market-timeline-planner/": {
      title: "Your Estimated Timeline",
      icon: Calendar,
      desc: defaultDesc,
    },
    "/tools/tech-stack-recommender/": { title: "Recommendations", icon: Cpu },
    "/tools/database-selector-tool/": {
      title: "Your Recommendations",
      icon: Database,
    },
    "/tools/cross-platform-vs-native-analyzer/": {
      title: "Analysis Results",
      icon: Smartphone,
    },
    "/tools/api-integration-feasibility-checker/": {
      title: "Analysis Results",
      icon: Link,
    },
    "/tools/cloud-service-cost-estimator/": {
      title: "Your Estimated Cost",
      icon: Cloud,
      desc: "Service type, region, instance, storage, bandwidth and project description are considered when calculating the cost. This is an estimate to give you an idea of the possible budget range for your cloud service requirements. For a more accurate estimate, consult with our specialist.",
    },
    "/tools/saas-profitability-calculator/": {
      title: "Analysis Result",
    },
    "/tools/customer-acquisition-cost-estimator/": {
      title: "Your CAC Result",
      icon: Users,
    },
    "/tools/lifetime-value-calculator/": {
      title: "Your Results",
      desc: "Average Order Value, Purchase Frequency, and other factors including Business description are considered when calculating the estimate. For a more accurate estimate, consult with our specialist.",
    },
    "/tools/automation-saving-estimator/": {
      title: "Savings Analysis",
    },
  };

  const TitleIcon = TITLE_ICON_MAP[pathname]?.icon;

  const CloseBtn = ({ extraClass = "" }) => (
    <button
      className={`p-1 rounded-md absolute right-1 top-1 md:right-3.5 md:top-4 outline-none hover:bg-gray-100 ${extraClass}`}
      onClick={() => {
        handleClose();
        if (!showPrice) setResult(null);
      }}
    >
      <X className="h-5 w-5" />
    </button>
  );

  const renderPrice = () => {
    switch (pathname) {
      case "/tools/roi-calculator/":
        return !showPrice ? (
          <div className="relative w-96 h-12 flex items-center justify-center bg-gray-200 rounded-md">
            <span className="blur-md select-none text-5xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent">
              $ NaN NaN
            </span>
            <Lock className="absolute right-[50%] w-5 h-5 text-themeColor" />
          </div>
        ) : (
          <div>
            {/* Main Cost Display */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                ${result.developmentCost.toLocaleString()}
              </div>
              <p className="text-gray-600 text-lg">
                Estimated Development Cost
              </p>
            </div>

            {/* Cost Breakdown */}

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 font-normal text-lg">
                Development
              </span>
              <span className="font-semibold text-gray-900 text-lg">
                ${result.developmentCost.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 font-normal text-lg">
                Annual Maintenance
              </span>
              <span className="font-semibold text-gray-900 text-lg">
                ${Math.round(result.maintenanceCost / 3).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 font-normal text-lg">
                ROI (3 years)
              </span>
              <span className="font-semibold text-green-600 text-lg">
                {result.roi}%
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600 font-normal text-lg">
                Payback Period
              </span>
              <span className="font-semibold text-blue-600 text-lg">
                {result.paybackPeriod} years
              </span>
            </div>
          </div>
        );
      case "/tools/app-maintenance-cost-estimator/":
        return !showPrice ? (
          <div className="relative w-96 h-12 flex items-center justify-center bg-gray-200 rounded-md">
            <span className="blur-md select-none text-5xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent">
              $ NaN NaN
            </span>
            <Lock className="absolute right-[50%] w-5 h-5 text-themeColor" />
          </div>
        ) : (
          <div className="bg-gradient-to-r from-indigo-500 to-themeColor rounded-2xl py-2 my-3 text-white shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-4">
              <DollarSign className="w-6 h-6" />
              <h3 className="text-2xl font-bold">Monthly Cost</h3>
            </div>
            <div className="text-4xl font-bold text-white my-2">
              ${result?.monthlyTotalCost.toLocaleString()}
            </div>
            <p className="text-gray-200 font-medium text-lg mb-4">
              Monthly Maintenance Cost
            </p>
            <div className="text-lg">
              <span className="text-gray-200">Yearly: </span>
              <span className="font-bold">
                ${result.yearlyTotalCost.toLocaleString()}
              </span>
            </div>
          </div>
        );
      case "/tools/app-development-timeline-calculator/":
        return !showPrice ? (
          <div className="relative w-96 h-12 flex items-center justify-center bg-gray-200 rounded-md">
            <span className="blur-md select-none text-5xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent">
              $ NaN NaN
            </span>
            <Lock className="absolute right-[50%] w-5 h-5 text-themeColor" />
          </div>
        ) : (
          <div className="text-center mb-8">
            <div className="text-5xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent mb-6">
              {result?.estimatedTime}
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6 text-left w-full md:w-5/6 mx-auto">
              <p className="text-sm font-medium text-blue-800">
                <strong>Note:</strong> The application type, platform,
                description, and project complexity are considered when
                calculating the timeline. This is an estimate to give you an
                idea of the possible time range for your project. For a more
                accurate estimate, consult with our specialist.
              </p>
            </div>
          </div>
        );
      case "/tools/mvp-launch-timeline-estimator/":
        return !showPrice ? (
          <div className="relative w-96 h-12 flex items-center justify-center bg-gray-200 rounded-md">
            <span className="blur-md select-none text-5xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent">
              $ NaN NaN
            </span>
            <Lock className="absolute right-[50%] w-5 h-5 text-themeColor" />
          </div>
        ) : (
          <div className="text-center mb-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl p-4 text-center border shadow-md">
                <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-semibold text-gray-900">
                  {result.duration}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Total Timeline
                </div>
              </div>
              <div className="rounded-2xl p-4 text-center border shadow-md">
                <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-semibold text-gray-900">
                  {result.cost}
                </div>
                <div className="text-sm font-medium text-gray-600">
                  Estimated Cost
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6 text-left w-full mt-4 mx-auto">
              <p className="text-sm font-medium text-blue-800">
                <strong>Note:</strong> The project type, complexity, team size,
                budget and project description are considered when calculating
                the timeline. This is an estimate to give you an idea of the
                possible time range for your project. For a more accurate
                estimate, consult with our specialist.
              </p>
            </div>
          </div>
        );
      case "/tools/feature-complexity-vs-time-estimator/":
        return !showPrice ? (
          <div className="relative w-96 h-12 flex items-center justify-center bg-gray-200 rounded-md">
            <span className="blur-md select-none text-5xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent">
              $ NaN NaN
            </span>
            <Lock className="absolute right-[50%] w-5 h-5 text-themeColor" />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white">
                <div className="text-sm opacity-90">Complexity Score</div>
                <div className="text-3xl font-bold">
                  {result.complexity_score}/5
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl p-4 text-white">
                <div className="text-sm opacity-90">Estimated Hours</div>
                <div className="text-3xl font-bold">
                  {result.estimated_hours}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4">
              <h4 className="font-semibold text-gray-900">Difficulty Level:</h4>
              <div
                className={`inline-flex px-4 py-1.5 rounded-full text-sm font-semibold ${
                  result.difficulty_level === "Very Complex"
                    ? "bg-red-100 text-red-800"
                    : result.difficulty_level === "Complex"
                    ? "bg-orange-100 text-orange-800"
                    : result.difficulty_level === "Moderate"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {result.difficulty_level}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Recommendations
              </h4>
              <ul className="space-y-2">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 font-normal">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case "/tools/testing-qa-timeline-estimator/":
        return !showPrice ? (
          <div className="relative w-96 h-12 flex items-center justify-center bg-gray-200 rounded-md">
            <span className="blur-md select-none text-5xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent">
              $ NaN NaN
            </span>
            <Lock className="absolute right-[50%] w-5 h-5 text-themeColor" />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600">
                  {result.totalHours}
                </div>
                <div className="text-sm text-gray-600">Total Hours</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-3xl font-bold text-green-600">
                  {result.totalDays}
                </div>
                <div className="text-sm text-gray-600">Working Days</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600">
                  {result.totalWeeks}
                </div>
                <div className="text-sm text-gray-600">Weeks</div>
              </div>
            </div>

            {/* Phase Breakdown */}
            <div className="bg-white rounded-2xl p-6 border shadow-md">
              <h4 className="font-bold text-gray-900 mb-4">Phase Breakdown</h4>
              <div className="space-y-1">
                {Object.entries(result?.phases || {}).map(([phase, hours]) => (
                  <div
                    key={phase}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                  >
                    <span className="font-medium text-gray-900 capitalize">
                      {phase.replace(/([A-Z])/g, " $1")}
                    </span>
                    <span className="text-blue-600 font-semibold">
                      {hours} hours
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "/tools/go-to-market-timeline-planner/":
        return !showPrice ? (
          <div className="relative w-96 h-12 flex items-center justify-center bg-gray-200 rounded-md">
            <span className="blur-md select-none text-5xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent">
              $ NaN NaN
            </span>
            <Lock className="absolute right-[50%] w-5 h-5 text-themeColor" />
          </div>
        ) : (
          <div className="space-y-4">
            {/* Summary */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-2xl">
                <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-blue-600">
                  {result.totalWeeks}
                </div>
                <div className="text-sm font-medium text-gray-600">
                  Weeks to Launch
                </div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-2xl">
                <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-green-600">
                  {result.successProbability}%
                </div>
                <div className="text-sm font-medium text-gray-600">
                  Success Rate
                </div>
              </div>
            </div>

            {/* Risk Assessment */}
            <div
              className={`p-4 rounded-xl border-l-4 ${
                result?.riskLevel === "Low"
                  ? "bg-green-50 border-green-500"
                  : result?.riskLevel === "Medium"
                  ? "bg-yellow-50 border-yellow-500"
                  : "bg-red-50 border-red-500"
              }`}
            >
              <div className="font-semibold text-gray-900 mb-1">
                Risk Level:{" "}
                <span
                  className={
                    result?.riskLevel === "Low"
                      ? "text-green-600"
                      : result.riskLevel === "Medium"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }
                >
                  {result?.riskLevel}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-600">
                {result?.riskLevel === "Low" &&
                  "Your project has favorable conditions for success."}
                {result?.riskLevel === "Medium" &&
                  "Monitor key milestones closely to stay on track."}
                {result?.riskLevel === "High" &&
                  "Consider additional planning and resource allocation."}
              </p>
            </div>
          </div>
        );
      case "/tools/tech-stack-recommender/":
        return !showPrice ? (
          <div className="relative w-96 h-12 flex items-center justify-center bg-gray-200 rounded-md">
            <span className="blur-md select-none text-5xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent">
              $ NaN NaN
            </span>
            <Lock className="absolute right-[50%] w-5 h-5 text-themeColor" />
          </div>
        ) : (
          <div className="space-y-4">
            {/* Primary Recommendation */}
            <div className="bg-white rounded-xl p-4 border-2 border-green-200 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-bold text-gray-900">Best Match</h4>
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
                  <h6 className="text-start font-semibold text-green-600 mb-2">
                    Pros:
                  </h6>
                  <ul className="text-start font-medium text-sm text-gray-600 space-y-1">
                    {result.primary.pros.map((pro, index) => (
                      <li key={index}>• {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h6 className="text-start font-semibold text-red-600 mb-2">
                    Cons:
                  </h6>
                  <ul className="text-start font-medium text-sm text-gray-600 space-y-1">
                    {result.primary.cons.map((con, index) => (
                      <li key={index}>• {con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Alternative Recommendations */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-900">
                Alternative Options
              </h4>
              {result.alternatives
                .filter((data, index) => index === 1)
                .map((alt, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-3 border border-gray-200 hover:shadow-md transition-shadow"
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
        );
      case "/tools/database-selector-tool/":
        return !showPrice ? (
          <div className="relative w-96 h-12 flex items-center justify-center bg-gray-200 rounded-md">
            <span className="blur-md select-none text-5xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent">
              $ NaN NaN
            </span>
            <Lock className="absolute right-[50%] w-5 h-5 text-themeColor" />
          </div>
        ) : (
          <div className="space-y-4">
            {result.slice(0, 2).map((db, index) => (
              <div
                key={db.name}
                className="bg-white border border-gray-200 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex items-center gap-4 mb-2">
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
        );
      case "/tools/cross-platform-vs-native-analyzer/":
        return !showPrice ? (
          <div className="relative w-96 h-12 flex items-center justify-center bg-gray-200 rounded-md">
            <span className="blur-md select-none text-5xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent">
              $ NaN NaN
            </span>
            <Lock className="absolute right-[50%] w-5 h-5 text-themeColor" />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="rounded-xl p-4 border border-blue-200">
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
                  <h4 className="text-black text-xl font-semibold capitalize">
                    {result.recommendation.replace("-", " ")} Development
                  </h4>
                  <p className="text-left text-gray-600 font-normal">
                    Recommended approach
                  </p>
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
              <p className="font-normal text-left text-sm text-gray-600">
                Confidence Score: {result.score}%
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 border border-blue-200 text-center">
                <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="font-medium text-gray-900">Timeline</div>
                <div className="text-sm text-gray-600 font-normal">
                  {result.timeline}
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-blue-200 text-center">
                <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="font-medium text-gray-900">Budget</div>
                <div className="text-sm text-gray-600 font-normal">
                  {result.budget}
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-blue-200 text-center">
                <Zap className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                <div className="font-medium text-gray-900">Performance</div>
                <div className="text-sm text-gray-600 font-normal">
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
                    className="flex items-start gap-2 text-sm text-gray-700 font-normal"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case "/tools/api-integration-feasibility-checker/":
        return !showPrice ? (
          <div className="relative w-96 h-12 flex items-center justify-center bg-gray-200 rounded-md">
            <span className="blur-md select-none text-5xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent">
              $ NaN NaN
            </span>
            <Lock className="absolute right-[50%] w-5 h-5 text-themeColor" />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-center font-normal">
              <div className="relative inline-flex items-center justify-center w-32 h-32 mb-4">
                <svg
                  className="w-32 h-32 transform -rotate-90"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={
                      result.score >= 70
                        ? "#22c55e"
                        : result.score >= 50
                        ? "#f59e0b"
                        : "#ef4444"
                    }
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${(result.score / 100) * 251.2} 251.2`}
                  />
                </svg>
                <div className="absolute text-center">
                  <div className="text-3xl font-bold text-gray-900">
                    {result.score}
                  </div>
                  <div className="text-sm text-gray-500">Score</div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-gray-900">
                  Feasibility: {result.feasibility}
                </h4>
                <p className="text-gray-600">Risk Level: {result.riskLevel}</p>
                <p className="text-gray-600">
                  Estimated Timeline: {result.estimatedTime}
                </p>
              </div>
            </div>

            {/* Recommendations */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Recommendations
              </h4>
              <div className="space-y-2">
                {result.recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-2 px-3 bg-blue-50 rounded-lg"
                  >
                    <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="font-normal text-sm text-gray-700">{rec}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "/tools/saas-profitability-calculator/":
        return !showPrice ? (
          <div className="relative w-96 h-12 flex items-center justify-center bg-gray-200 rounded-md">
            <span className="blur-md select-none text-5xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent">
              $ NaN NaN
            </span>
            <Lock className="absolute right-[50%] w-5 h-5 text-themeColor" />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-center">
              <div
                className={`inline-block px-3 py-1 rounded-full text-base font-semibold border-2 ${getStatusColor(
                  result.profitabilityStatus
                )}`}
              >
                {result.profitabilityStatus} Profitability
              </div>
            </div>

            {/* Cost Analysis */}
            <div className="bg-themeLight p-4 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-blue-600" />
                Cost Analysis Based on Description
              </h4>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    ${result.estimatedMonthlyCost.toLocaleString()}
                  </div>
                  <div className="text-sm font-normal text-gray-600">
                    Estimated Monthly Cost
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    ${result.recommendedPricing}
                  </div>
                  <div className="text-sm font-normal text-gray-600">
                    Recommended Price/User
                  </div>
                </div>
              </div>
              {result.competitiveAdvantage.length > 0 && (
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    Detected Features:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {result.competitiveAdvantage.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-3 rounded-xl text-center">
                <div className="text-2xl font-bold text-green-600">
                  ${result.monthlyProfit.toLocaleString()}
                </div>
                <div className="text-sm font-normal text-gray-600">
                  Monthly Profit
                </div>
              </div>
              <div className="bg-gray-100 p-3 rounded-xl text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {result.profitMargin.toFixed(1)}%
                </div>
                <div className="text-sm font-normal text-gray-600">
                  Profit Margin
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-3 rounded-xl text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {result.ltvcacRatio.toFixed(1)}:1
                </div>
                <div className="text-sm font-normal text-gray-600">
                  LTV:CAC Ratio
                </div>
              </div>
              <div className="bg-gray-100 p-3 rounded-xl text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {result.monthsToRecoverCAC.toFixed(1)}
                </div>
                <div className="text-sm font-normal text-gray-600">
                  Months to Recover CAC
                </div>
              </div>
            </div>

            <div className="bg-themeLight p-3 rounded-xl text-center">
              <div className="text-3xl font-bold text-themeColor">
                ${result.annualRecurringRevenue.toLocaleString()}
              </div>
              <div className="text-sm font-normal text-gray-600">
                Annual Recurring Revenue
              </div>
            </div>
          </div>
        );
      case "/tools/customer-acquisition-cost-estimator/":
        return !showPrice ? (
          <div className="relative w-96 h-12 flex items-center justify-center bg-gray-200 rounded-md">
            <span className="blur-md select-none text-5xl font-bold bg-gradient-to-r from-themeColor to-themeColor bg-clip-text text-transparent">
              $ NaN NaN
            </span>
            <Lock className="absolute right-[50%] w-5 h-5 text-themeColor" />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-themeColor to-navyBlue rounded-xl p-5 text-white">
              <div className="text-5xl font-bold mb-2">${result.cac}</div>
              <div className="text-blue-100">per customer acquired</div>

              <div className="mt-4 p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span>Industry Benchmark</span>
                  <span className="font-semibold">
                    ${result.industryBenchmark}
                  </span>
                </div>
                <div className="">
                  {result.cac < result.industryBenchmark ? (
                    <span className="text-green-200">
                      ✓ Below benchmark (Great!)
                    </span>
                  ) : (
                    <span className="text-yellow-200">⚠ Above benchmark</span>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border">
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 text-orange-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">
                  Recommendations
                </h3>
              </div>
              <div className="space-y-1">
                {result.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-left">{rec}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "/tools/lifetime-value-calculator/":
        return !showPrice ? (
          <div className="relative w-96 h-12 flex items-center justify-center bg-gray-200 rounded-md">
            <span className="blur-md select-none text-5xl font-bold bg-gradient-to-r from-themeColor to-themeColor bg-clip-text text-transparent">
              $ NaN NaN
            </span>
            <Lock className="absolute right-[50%] w-5 h-5 text-themeColor" />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-white border p-6 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">
                    Customer Lifetime Value
                  </p>
                  <p className="text-4xl font-bold text-green-600">
                    ${result.ltv.toFixed(2)}
                  </p>
                </div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-600">Net LTV</p>
                <p className="text-2xl font-bold text-blue-600">
                  ${result.netLTV.toFixed(2)}
                </p>
              </div>
              <div className="bg-white border p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-600">LTV:CAC Ratio</p>
                <p className="text-2xl font-bold text-purple-600">
                  {result.ltvToCac > 0
                    ? `${result.ltvToCac.toFixed(1)}:1`
                    : "N/A"}
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
              <h4 className="font-semibold text-blue-900 mb-2">
                Interpretation
              </h4>
              <div className="space-y-1 text-sm text-left text-blue-800">
                {result.ltvToCac >= 3 ? (
                  <p className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Healthy LTV:CAC ratio - good profitability
                  </p>
                ) : result.ltvToCac > 0 ? (
                  <p className="flex items-center">
                    <Target className="w-4 h-4 text-orange-500 mr-2" />
                    Consider improving retention or reducing acquisition costs
                  </p>
                ) : (
                  <p className="text-gray-600">
                    Enter acquisition cost to see LTV:CAC ratio
                  </p>
                )}
                <p>• Focus on increasing customer retention to boost LTV</p>
                <p>• Consider upselling strategies to increase AOV</p>
              </div>
            </div>
          </div>
        );
      case "/tools/automation-saving-estimator/":
        return !showPrice ? (
          <div className="relative w-96 h-12 flex items-center justify-center bg-gray-200 rounded-md">
            <span className="blur-md select-none text-5xl font-bold bg-gradient-to-r from-themeColor to-themeColor bg-clip-text text-transparent">
              $ NaN NaN
            </span>
            <Lock className="absolute right-[50%] w-5 h-5 text-themeColor" />
          </div>
        ) : (
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
              <h4 className="font-semibold text-blue-900 mb-2">Key Insights</h4>
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
                <p>• Consider employee retraining and change management</p>
              </div>
            </div>
          </div>
        );
      case "/tools/mvp-feature-selector-quiz/":
        return !showPrice ? (
          <div className="relative w-96 h-12 flex items-center justify-center bg-gray-200 rounded-md">
            <span className="blur-md select-none text-5xl font-bold bg-gradient-to-r from-themeColor to-themeColor bg-clip-text text-transparent">
              $ NaN NaN
            </span>
            <Lock className="absolute right-[50%] w-5 h-5 text-themeColor" />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="border shadow-sm rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  MVP Score
                </h4>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    result.priority === "High"
                      ? "bg-green-100 text-green-800"
                      : result.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {result.priority} Priority
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div
                  className={`h-3 rounded-full transition-all duration-500 ${
                    result.priority === "High"
                      ? "bg-green-500"
                      : result.priority === "Medium"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: `${result.score}%` }}
                ></div>
              </div>
              <p className="text-gray-600 font-normal">{result.explanation}</p>
            </div>

            <div className="border shadow-sm rounded-xl p-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Recommended Features
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
                  Add more details to your project description to get specific
                  feature recommendations.
                </p>
              )}
            </div>

            <div className="border shadow-sm rounded-xl p-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Next Steps
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                    1
                  </div>
                  <span className="text-gray-700">
                    Validate features with target users
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                    2
                  </div>
                  <span className="text-gray-700">
                    Create detailed user stories
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                    3
                  </div>
                  <span className="text-gray-700">
                    Plan development sprints
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case "/tools/which-app-should-you-build/":
        return !showPrice ? (
          <div className="relative w-96 h-12 flex items-center justify-center bg-gray-200 rounded-md">
            <span className="blur-md select-none text-5xl font-bold bg-gradient-to-r from-themeColor to-themeColor bg-clip-text text-transparent">
              $ NaN NaN
            </span>
            <Lock className="absolute right-[50%] w-5 h-5 text-themeColor" />
          </div>
        ) : (
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
              <p className="text-gray-600 font-normal">{result.explanation}</p>
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
        );

      default:
        return !showPrice ? (
          <div className="relative w-96 h-12 flex items-center justify-center bg-gray-200 rounded-md">
            <span className="blur-md select-none text-5xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent">
              Hidden
            </span>
            <Lock className="absolute right-[50%] w-5 h-5 text-themeColor" />
          </div>
        ) : (
          <p className="text-5xl font-bold">${result.cost.toLocaleString()}</p>
        );
    }
  };

  return (
    <div className="popup fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full max-w-[1200px] rounded-lg bg-white shadow-lg py-6 pl-5 pr-0 md:p-6 !pb-3  md:pt-10">
        <CloseBtn id="mobile" extraClass="right-1 top-1 md:hidden flex" />

        <div className="flex flex-col lg:flex-row items-center overflow-auto md:max-h-[unset] max-h-[500px] lg:gap-10 pr-5 md:gap-6 gap-4">
          <div className="lg:w-1/2 w-full">
            <p className="text-colorBlack lg:text-2xl md:text-xl text-lg font-medium !mb-4">
              Enter the details to get your project estimate.
            </p>
            <p className="text-colorBlack md:text-lg text-base !mb-4">
              You're just a step away from turning your vision into reality.
              Discover how Brilworks helps businesses scale their tech teams—and
              get your project estimate today.
            </p>

            <PortfolioContactForm
              messageField={true}
              darkMode={false}
              setShowPrice={setShowPrice}
              showPhoneField={false}
              showCompanyField={false}
            />
          </div>
          <div className="lg:w-1/2 md:w-full mx-auto items-center justify-center">
            <CloseBtn
              id="desktop"
              extraClass="hidden md:flex right-3.5 top-4"
            />
            <div className="text-center mb-4">
              {TITLE_ICON_MAP?.[pathname]?.icon && (
                <div className="flex justify-center mb-4">
                  <TitleIcon className="h-12 w-12 text-themeColor" />
                </div>
              )}
              <h2 className="text-3xl font-bold">
                {TITLE_ICON_MAP?.[pathname]?.title}
              </h2>

              <div
                className={`${
                  (pathname === "/tools/roi-calculator/" ||
                    pathname === "/tools/app-maintenance-cost-estimator/" ||
                    pathname === "/tools/mvp-launch-timeline-estimator/") &&
                  showPrice
                    ? "max-w-[80%] mx-auto"
                    : "flex items-center justify-center"
                } bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent my-4`}
              >
                {renderPrice()}
              </div>
              {pathname === "/tools/app-maintenance-cost-estimator/" &&
                showPrice && (
                  <div className="max-w-[80%] mx-auto flex flex-col items-start justify-center bg-amber-50 border border-amber-200 rounded-xl p-6 mt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="w-5 h-5 text-amber-600" />
                      <h4 className="text-lg font-semibold text-amber-800">
                        Cost Optimization Tips
                      </h4>
                    </div>
                    <ul className="flex flex-col items-start justify-center text-amber-700 space-y-1 text-sm">
                      <li>
                        • Regular maintenance prevents costly emergency fixes
                      </li>
                      <li>• Quarterly updates can reduce costs by 30%</li>
                      <li>• Automated testing reduces manual QA expenses</li>
                      <li>• Proactive monitoring prevents major issues</li>
                    </ul>
                  </div>
                )}
              {pathname === "/tools/automation-saving-estimator/" &&
                !showPrice && (
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Key Insights
                    </h4>
                    <div className="space-y-1 text-sm text-blue-800">
                      <p className="text-gray-600 text-left pl-1">
                        Enter details on left to get implementation cost for ROI
                        analysis
                      </p>

                      <p className="text-left">
                        • Focus on high-volume, repetitive tasks first
                      </p>
                      <p className="text-left">
                        • Consider employee retraining and change management
                      </p>
                    </div>
                  </div>
                )}
              {TITLE_ICON_MAP?.[pathname]?.desc && (
                <p className="text-gray-600 max-w-md mx-auto">
                  {TITLE_ICON_MAP?.[pathname]?.desc}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsPopupContactForm;
