"use client";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

const EbookPopup = ({ open, handleClose }) => {
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

  const CloseBtn = ({ extraClass = "" }) => (
    <button
      className={`p-1 rounded-md absolute right-1 top-1 md:right-3.5 md:top-4 outline-none hover:bg-gray-100 ${extraClass}`}
      onClick={() => handleClose()}
    >
      <X className="h-5 w-5" />
    </button>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-2">
      <div className="absolute inset-0 bg-black/50" />

      <CloseBtn id="mobile" extraClass="right-1 top-1 md:hidden flex" />
      <div className="relative z-10 w-full max-w-lg rounded-lg bg-white shadow-lg py-6 pl-5 pr-0 md:p-6 !pb-3  md:pt-10">
        <div className="flex flex-col lg:flex-row items-center overflow-auto md:max-h-[unset] max-h-[500px] lg:gap-10 pr-5 md:gap-6 gap-4">
          <div className=" w-full">
            <p className="text-colorBlack lg:text-2xl md:text-xl text-lg font-medium !mb-4">
              Enter the details to get your project estimate.
            </p>
            <p className="text-colorBlack md:text-lg text-base !mb-4">
              You're just a step away from turning your vision into reality.
              Discover how Brilworks helps businesses scale their tech teams—and
              get your project estimate today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookPopup;
