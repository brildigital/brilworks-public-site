import React from "react";

const RapidDigitizationBanner = () => {
  return (
    <div className="py-20 flex xl:flex-row  flex-col justify-between px-[70px] gap-20">
      <div className="flex flex-col gap-10 xl:w-[854px]">
        <h2 className="!text-[70px] !leading-[84px] break-words">
          Unlock Digital Potential with Our Digital Acceleration Services
        </h2>
        <p className="text-2xl text-[#504F4F]">
          Our team is dedicated to driving innovation, efficiency, and growth
          through strategic digital initiatives tailored to your unique business
          objectives.
        </p>
        <button className="linear-gradient-background w-fit px-5 py-4">
          Explore Digital Acceleration Services
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-5 flex-none">
        <div className="flex flex-col gap-3 p-4 rounded-lg border cursor-pointer service_item_card hover:text-white text-center py-5 ">
          <span className="text-[70px]">8+</span>
          <p className="text-[29px] font-bold">Years of Experience</p>
        </div>
        <div className="flex flex-col gap-3 p-4 rounded-lg border cursor-pointer service_item_card hover:text-white text-center py-5 ">
          <span className="text-[70px]">100+</span>
          <p className="text-[29px] font-bold">Experts</p>
        </div>
        <div className="flex flex-col gap-3 p-4 rounded-lg border cursor-pointer service_item_card hover:text-white text-center py-5 ">
          <span className="text-[70px]">250+</span>
          <p className="text-[29px] font-bold">Projects</p>
        </div>
        <div className="flex flex-col gap-3 p-4 rounded-lg border cursor-pointer service_item_card hover:text-white text-center py-5 ">
          <span className="text-[70px]">98%</span>
          <p className="text-[29px] font-bold">Client Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default RapidDigitizationBanner;
