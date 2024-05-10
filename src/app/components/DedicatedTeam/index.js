"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import { BestAdvocateText } from "../Homepage/BigText";
const DedicatedTeamBanner = dynamic(() => import("./DedicatedTeamBanner"));
const DedicatedTeamBenefits = dynamic(() => import("./DedicatedTeamBenefits"));
const WhyDedicatedTeam = dynamic(() => import("./WhyDedicatedTeam"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const DedicatedTeamPlans = dynamic(() => import("./DedicatedTeamPlans"));
const TechStackWeUse = dynamic(() => import("../Services/TechStackWeUse"));
const DedicatedTeamFAQ = dynamic(() => import("./DedicatedTeamFAQ"));

const DedicatedTeam = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <div className="services pt-20 ">
      <DedicatedTeamBanner />
      <div className="lg:px-[70px] px-8">
        <div className="linear-gradient-background rounded-3xl py-10 px-12 flex items-center justify-center flex-col">
          <p className="text-5xl text-center font-bold">
            Dedicated Team Service: Tailored <br /> Solutions, Seamless
            Collaboration
          </p>
          <div className="flex flex-col gap-8 mt-10 text-2xl max-w-7xl text-center">
            <p>
              Hire skilled developers, designers, project managers, and quality
              assurance specialists who work exclusively on your project within
              48 hours. 
            </p>
            <p className="">
              We ensure the highest quality of our services by building
              expertise in various business domains, sharing best practices, and
              maintaining a committed team of professionals.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F3FDFF] py-10 lg:px-[70px] px-8">
        <WhyDedicatedTeam />
      </div>
      <div className="lg:px-[70px] px-8">
        <DedicatedTeamBenefits />
      </div>
      <div className="lg:px-[70px] px-8">
        <div className="linear-gradient-background rounded-3xl py-10 px-12 flex items-center justify-center flex-col">
          <p className="text-5xl text-center max-w-7xl">
            Let us tailor a team to suit your specific needs,
            <br /> ensuring seamless collaboration, exceptional quality, <br />
            and unparalleled results. Experience the difference a dedicated team
            can make
          </p>
          <div className="flex justify-center mt-10">
            <button className="bg-white py-5 px-9 border border-black">
              Get started today
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#F3FDFF] py-10">
        <BestAdvocateText />
        <ClientReviews />
      </div>
      <DedicatedTeamPlans />
      <div className="bg-[#F3FDFF]">
        <TechStackWeUse />
      </div>
      <DedicatedTeamFAQ />
    </div>
  );
};

export default DedicatedTeam;
