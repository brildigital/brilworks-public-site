import React, { useEffect, useState } from "react";
import { IconButton } from "@material-tailwind/react";
import { Smartphone, X } from "lucide-react";
import PortfolioContactForm from "../Portfolio/PortfolioContactForm";
import Image from "next/image";
import Heading from "../HTMLComponents/Heading";
import { PriceSkeleton } from "../Blog/ArticleSkeleton";

const PopupContactForm = ({ open, handleClose, result, setResult }) => {
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

  return (
    <>
      <div className="popup fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 w-full max-w-[1200px] rounded-lg bg-white shadow-lg p-6 !pb-3  md:pt-10">
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

          <div className="flex flex-col lg:flex-row items-center lg:gap-10 md:gap-6 gap-4">
            <div className="lg:w-1/2 w-full">
              {/* <Heading
                type="h2"
                className="text-colorBlack lg:!text-[34px] md:!text-3xl !text-2xl mb-4"
                data="Connect With Us to Get a 48 Hours Risk-Free Trial"
              /> */}
              <p className="text-colorBlack md:text-lg text-base !mb-4">
                You're just a step away from turning your vision into reality.
                Discover how Brilworks helps businesses scale their tech
                teams—and get your project estimate today.
              </p>
              <p className="text-colorBlack lg:text-2xl md:text-xl text-lg font-medium !mb-4">
                Enter the details to get your project estimate.
              </p>
              <PortfolioContactForm
                phoneRequired={true}
                messageField={true}
                darkMode={false}
                setShowPrice={setShowPrice}
              />
            </div>
            <div className="lg:w-1/2 md:w-full hidden md:flex mx-auto items-center justify-center">
              <IconButton
                size="sm"
                variant="text"
                className="!absolute right-3.5 top-4 outline-none focus:outline-none hover:bg-gray-100 "
                onClick={() => {
                  handleClose();
                  showPrice ? "" : setResult(null);
                }}
              >
                <X className="h-5 w-5" />
              </IconButton>
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <Smartphone className="h-12 w-12 text-indigo-500" />
                </div>
                <h2 className="text-3xl font-bold mb-2">Your Estimated Cost</h2>
                <div className="text-5xl font-bold bg-gradient-to-r from-indigo-500 to-themeColor bg-clip-text text-transparent mb-4">
                  {!showPrice ? (
                    <PriceSkeleton />
                  ) : (
                    `$${result.cost.toLocaleString()}`
                  )}
                </div>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  This estimate is based on your requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupContactForm;
