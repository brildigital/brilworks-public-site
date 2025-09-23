"use client";
import React, { useEffect, useState } from "react";
import { IconButton } from "@material-tailwind/react";
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Lock,
  Star,
  Target,
  TrendingUp,
  Wallet,
  X,
} from "lucide-react";
import PortfolioContactForm from "../Portfolio/PortfolioContactForm";
import { usePathname } from "next/navigation";
import { markFormSubmitted } from "../lib/commonFunction";

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

      default:
        return !showPrice ? (
          <div className="relative w-96 h-12 flex items-center justify-center bg-gray-200 rounded-md">
            <span className="blur-md select-none text-5xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent">
              Hidden
            </span>
            <Lock className="absolute right-[50%] w-5 h-5 text-themeColor" />
          </div>
        ) : (
          <p className="text-5xl">${result.cost.toLocaleString()}</p>
        );
    }
  };

  return (
    <div className="popup fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full max-w-[1200px] rounded-lg bg-white shadow-lg py-6 pl-5 pr-0 md:p-6 !pb-3  md:pt-10">
        <IconButton
          size="sm"
          variant="text"
          className="!absolute right-1 top-1 outline-none focus:outline-none hover:bg-gray-100 md:hidden flex"
          onClick={() => {
            handleClose();
            showPrice ? "" : setResult(null);
          }}
        >
          <X className="h-5 w-5" />
        </IconButton>

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
            <IconButton
              size="sm"
              variant="text"
              className="!absolute hidden md:flex right-3.5 top-4 outline-none focus:outline-none hover:bg-gray-100 "
              onClick={() => {
                handleClose();
                showPrice ? "" : setResult(null);
              }}
            >
              <X className="h-5 w-5" />
            </IconButton>
            <div className="text-center mb-8">
              {pathname === "/tools/roi-calculator/" && showPrice ? (
                ""
              ) : (
                <>
                  <div className="flex justify-center mb-4">
                    {pathname ===
                      "/tools/app-development-timeline-calculator/" ||
                    pathname === "/tools/mvp-launch-timeline-estimator/" ? (
                      <Calendar className="h-12 w-12 text-indigo-500" />
                    ) : pathname ===
                        "/tools/feature-complexity-vs-time-estimator/" ||
                      "/tools/testing-qa-timeline-estimator/" ? (
                      ""
                    ) : (
                      <Wallet className="h-12 w-12 text-indigo-500" />
                    )}
                  </div>
                  <h2 className="text-3xl font-bold">
                    Your Estimated{" "}
                    {pathname === "/tools/roi-calculator/"
                      ? "ROI"
                      : pathname ===
                          "/tools/app-development-timeline-calculator/" ||
                        pathname === "/tools/mvp-launch-timeline-estimator/"
                      ? "Timeline"
                      : pathname ===
                        "/tools/feature-complexity-vs-time-estimator/"
                      ? "Results"
                      : "/tools/feature-complexity-vs-time-estimator/"
                      ? "Timeline"
                      : "Cost"}
                  </h2>
                </>
              )}
              <div
                className={`${
                  (pathname === "/tools/roi-calculator/" ||
                    pathname === "/tools/app-maintenance-cost-estimator/" ||
                    pathname === "/tools/mvp-launch-timeline-estimator/") &&
                  showPrice
                    ? "max-w-[80%] mx-auto"
                    : "flex items-center justify-center"
                } font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent my-4`}
              >
                {renderPrice()}
              </div>
              {pathname === "/tools/app-maintenance-cost-estimator/" &&
              showPrice ? (
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
              ) : pathname === "/tools/app-development-timeline-calculator/" ||
                pathname === "/tools/mvp-launch-timeline-estimator/" ||
                pathname === "/tools/feature-complexity-vs-time-estimator/" ||
                pathname === "/tools/testing-qa-timeline-estimator/" ? (
                ""
              ) : (
                <p className="text-gray-600 max-w-md mx-auto">
                  The platform, design requirement, description, and project
                  complexity are considered when calculating the cost. This is
                  an estimate to give you an idea of the possible budget range
                  for your project.
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
