"use client";
import React from "react";
import Link from "next/link";
import Button from "../Common/Button";

const DedicatedTeamBanner = () => {
  return (
    <div className="container mx-auto">
      <div className="sm:w-[90%] w-[100%] mx-auto xl:py-24 md:py-16 py-8 flex xl:flex-row flex-col justify-between px-4 gap-20">
        <div className="flex flex-col gap-10 xl:w-[854px]">
          <h1 className="break-words header-title">
            Dedicated Software Development Team
          </h1>
          <p className="md:text-2xl text-xl text-colorGray">
            Our team, comprised of expert developers with diverse expertise, is
            committed to delivering tailored solutions that meet your unique
            business needs.
          </p>
          <div>
            <Button label="Get a Dedicated team" />
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
    </div>
  );
};

export default DedicatedTeamBanner;
