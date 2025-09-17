"use client";
import React, { useEffect, useState } from "react";
import { IconButton } from "@material-tailwind/react";
import { Lock, Star, Wallet, X } from "lucide-react";
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

      default:
        return !showPrice ? (
          <div className="relative w-96 h-12 flex items-center justify-center bg-gray-200 rounded-md">
            <span className="blur-md select-none text-5xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent">
              Hidden
            </span>
            <Lock className="absolute right-[50%] w-5 h-5 text-themeColor" />
          </div>
        ) : (
          `$${result.cost.toLocaleString()}`
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
                    <Wallet className="h-12 w-12 text-indigo-500" />
                  </div>
                  <h2 className="text-3xl font-bold">
                    Your Estimated{" "}
                    {pathname === "/tools/roi-calculator/" ? "ROI" : "Cost"}
                  </h2>
                </>
              )}
              <div
                className={`${
                  pathname === "/tools/roi-calculator/" && showPrice
                    ? "max-w-[80%] mx-auto"
                    : "flex items-center justify-center"
                } text-5xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent my-4`}
              >
                {renderPrice()}
              </div>

              <p className="text-gray-600 max-w-md mx-auto">
                The platform, design requirement, description, and project
                complexity are considered when calculating the cost. This is an
                estimate to give you an idea of the possible budget range for
                your project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsPopupContactForm;
