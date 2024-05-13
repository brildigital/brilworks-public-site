"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import { BestAdvocateText } from "../Homepage/BigText";

const RapidDigitizationBanner = dynamic(() =>
  import("./RapidDigitizationBanner")
);
const WhyRapidDigitization = dynamic(() => import("./WhyRapidDigitization"));
const RapidDigitizationBenefits = dynamic(() =>
  import("./RapidDigitizationBenefits")
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const RapidDigitizationPlans = dynamic(() =>
  import("./RapidDigitizationPlans")
);
const TechStackWeUse = dynamic(() => import("../Services/TechStackWeUse"));
const ServicesFAQ = dynamic(() => import("../Services/ServicesFAQ"));

const RapidDigitization = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <div className="services pt-20 medium-font">
      <RapidDigitizationBanner />
      <div className="lg:px-[70px] px-8">
        <div className="linear-gradient-background rounded-3xl py-10 px-12 flex items-center justify-center flex-col">
          <p className="text-5xl leading-tight text-center font-bold">
            Digital Acceleration Service: Strategic <br />
            Solutions, Transformative Results
          </p>
          <div className="flex flex-col gap-8 mt-10 text-2xl max-w-7xl text-center">
            <p>
              Partner with us to embark on a journey of digital transformation.
              Our seasoned experts in digital strategy, technology, and
              implementation collaborate seamlessly with your team to accelerate
              your digital initiatives.
            </p>
            <p className="">
              We leverage cutting-edge technologies, data-driven insights, and
              agile methodologies to deliver measurable results within your
              timelines and budget.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F3FDFF] py-10 lg:px-[70px] px-8">
        <WhyRapidDigitization />
      </div>
      <div className="lg:px-[70px] px-8">
        <RapidDigitizationBenefits />
      </div>
      <div className="lg:px-[70px] px-8">
        <div className="linear-gradient-background rounded-3xl py-10 px-12 flex items-center justify-center flex-col">
          <p className="text-5xl leading-tight text-center max-w-7xl">
            Let us guide you through every step of your digital transformation
            journey. Partner with us to unleash the full potential of your
            business in the digital era.
          </p>
          <div className="flex justify-center mt-10">
            <button className="bg-white py-5 px-9 border border-colorBlack uppercase">
              Get started today
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#F3FDFF] py-10">
        <BestAdvocateText />
        <ClientReviews />
      </div>
      <RapidDigitizationPlans />
      <div className="bg-[#F3FDFF]">
        <TechStackWeUse />
      </div>
      <ServicesFAQ />
    </div>
  );
};

export default RapidDigitization;
