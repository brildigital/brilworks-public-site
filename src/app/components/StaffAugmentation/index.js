"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import { BestAdvocateText } from "../Homepage/BigText";

const StaffAugmentationBanner = dynamic(() =>
  import("./StaffAugmentationBanner")
);
const WhyStaffAugmentation = dynamic(() => import("./WhyStaffAugmentation"));
const UpskillStaffAugmentation = dynamic(() =>
  import("./UpskillStaffAugmentation")
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const StaffAugmentationPlans = dynamic(() =>
  import("./StaffAugmentationPlans")
);
const TechStackWeUse = dynamic(() => import("../Services/TechStackWeUse"));
const ServicesFAQ = dynamic(() => import("../Services/ServicesFAQ"));

const StaffAugmentation = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <div className="services pt-20 medium-font">
      <StaffAugmentationBanner />
      <div className="bg-[#F3FDFF] py-10 lg:px-[70px] px-8">
        <UpskillStaffAugmentation />
      </div>
      <WhyStaffAugmentation />
      <div className="bg-[#F3FDFF] py-10">
        <BestAdvocateText />
        <ClientReviews />
      </div>
      <StaffAugmentationPlans />
      <div className="bg-[#F3FDFF]">
        <TechStackWeUse />
      </div>
      <ServicesFAQ />
    </div>
  );
};

export default StaffAugmentation;
