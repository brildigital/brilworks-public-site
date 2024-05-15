"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import { BestAdvocateText } from "../Homepage/BigText";
import "../../styles/Services.scss";
import RapidDigitizationBanner from "./RapidDigitizationBanner";

const WhyRapidDigitization = dynamic(() => import("./WhyRapidDigitization"));
const RapidDigitizationBenefits = dynamic(() =>
  import("./RapidDigitizationBenefits")
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
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
      <div className="lg:px-[70px] px-6 pt-8 reveal">
        <div className="linear-gradient-background rounded-3xl py-10 md:px-12 px-5 flex items-center justify-center flex-col">
          <p className="md:text-5xl text-3xl !leading-tight md:text-center font-bold md:w-2/3 w-full">
            Digital Acceleration Service: Strategic Solutions, Transformative
            Results
          </p>
          <div className="flex flex-col gap-8 mt-10 text-2xl md:max-w-7xl md:text-center">
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
      <div className="lg:px-[70px] px-6">
        <RapidDigitizationBenefits />
      </div>
      <div className="lg:px-[70px] px-6 pb-10 reveal">
        <div className="linear-gradient-background rounded-3xl py-10 md:px-12 px-6 flex items-center justify-center flex-col">
          <p className="md:text-5xl text-3xl !leading-tight md:text-center md:max-w-7xl">
            Let us guide you through every step of your digital transformation
            journey. Partner with us to unleash the full potential of your
            business in the digital era.
          </p>
          <Link href="/contact-us/">
            <div className="!bg-colorWhite px-[14px] py-[10px] mt-8 border border-colorBlack shadow-none hover:shadow-lg cursor-pointer">
              <p className="uppercase">Get started today</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-[#F3FDFF] py-10">
        <BestAdvocateText />
        <ClientReviews />
      </div>
      <div className="bg-[#F3FDFF]">
        <TechStackWeUse />
      </div>
      <ServicesFAQ />
    </div>
  );
};

export default RapidDigitization;
