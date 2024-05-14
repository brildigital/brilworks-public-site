import React from "react";

const RapidDigitizationBanner = () => {
  return (
    <div className="md:py-20 py-10 flex xl:flex-row flex-col justify-between lg:px-[70px] px-8 gap-20">
      <div className="flex flex-col gap-10 xl:w-[854px]">
        <h2 className="break-words header-title">
          Unlock Digital Potential with Our Digital Acceleration Services
        </h2>
        <p className="md:text-2xl text-xl text-[#504F4F]">
          Our team is dedicated to driving innovation, efficiency, and growth
          through strategic digital initiatives tailored to your unique business
          objectives.
        </p>
        <button className="linear-gradient-background w-fit px-5 py-4 uppercase">
          Explore Digital Acceleration Services
        </button>
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

export default RapidDigitizationBanner;
