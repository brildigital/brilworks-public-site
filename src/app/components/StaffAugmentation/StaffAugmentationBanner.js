"use client";
import React from "react";
import Link from "next/link";
import Button from "../Common/Button";

const StaffAugmentationBanner = () => {
  return (
    <div className="md:py-20 py-10 flex xl:flex-row flex-col justify-between lg:px-[70px] px-8 gap-20">
      <div className="flex flex-col gap-10 xl:w-[854px]">
        <h1 className="break-words header-title">
          IT Staff Augmentation Service
        </h1>
        <p className="md:text-2xl text-xl text-colorGray">
          Access a global pool of experts for the niche skillset you need. Our
          IT Staff augmentation service offers a strategic solution to bridge
          the talent gap and incorporate immediate expertise into your team.
        </p>
        <div>
          <Button label="Scale your team today" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5 flex-none">
        <div className="flex flex-col gap-3 p-4 rounded-lg border cursor-pointer service_item_card hover:text-white text-center py-5 ">
          <span className="text-[70px]">8+</span>
          <p className="text-2xl">Years of Experience</p>
        </div>
        <div className="flex flex-col gap-3 p-4 rounded-lg border cursor-pointer service_item_card hover:text-white text-center py-5 ">
          <span className="text-[70px]">100+</span>
          <p className="text-2xl">Experts</p>
        </div>
        <div className="flex flex-col gap-3 p-4 rounded-lg border cursor-pointer service_item_card hover:text-white text-center py-5 ">
          <span className="text-[70px]">250+</span>
          <p className="text-2xl">Projects</p>
        </div>
        <div className="flex flex-col gap-3 p-4 rounded-lg border cursor-pointer service_item_card hover:text-white text-center py-5 ">
          <span className="text-[70px]">98%</span>
          <p className="text-2xl">Client Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default StaffAugmentationBanner;
