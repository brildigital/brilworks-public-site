"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import "../../styles/Services.scss";
import StaffAugmentationBanner from "./StaffAugmentationBanner";

const WhyStaffAugmentation = dynamic(() => import("./WhyStaffAugmentation"));
const UpskillStaffAugmentation = dynamic(() =>
  import("./UpskillStaffAugmentation")
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const ServicesPricingPlans = dynamic(() =>
  import("../Services/ServicesPricingPlans")
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
    <div className="services pt-20">
      <StaffAugmentationBanner />
      <div className="bg-themeLight">
        <UpskillStaffAugmentation />
      </div>
      <WhyStaffAugmentation />
      <div className="bg-themeLight">
        <ClientReviews />
      </div>
      <ServicesPricingPlans />
      <div className="bg-themeLight">
        <TechStackWeUse />
      </div>
      <ServicesFAQ />
    </div>
  );
};

export default StaffAugmentation;
