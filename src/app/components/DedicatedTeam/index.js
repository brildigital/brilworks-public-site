"use client";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import DedicatedTeamBanner from "./DedicatedTeamBanner";

const DedicatedTeamBenefits = dynamic(() => import("./DedicatedTeamBenefits"));
const WhyDedicatedTeam = dynamic(() => import("./WhyDedicatedTeam"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const ServicesPricingPlans = dynamic(() =>
  import("../Services/ServicesPricingPlans")
);
const TechStackWeUse = dynamic(() => import("../Services/TechStackWeUse"));
const ServicesFAQ = dynamic(() => import("../Services/ServicesFAQ"));

const DedicatedTeam = () => {
  return (
    <div className="services pt-20">
      <DedicatedTeamBanner />
      <div className="container mx-auto">
        <div className="sm:w-[90%] w-[100%] mx-auto px-4 xl:pb-24 md:pb-16 pb-8 reveal">
          <div className="bg-themeColor rounded-3xl py-10 md:px-12 px-4 flex items-center justify-center flex-col">
            <h2 className="md:text-5xl text-3xl !leading-tight md:text-center font-bold md:w-2/3 w-full text-colorWhite">
              Dedicated Team Service: Tailored Solutions, Seamless Collaboration
            </h2>
            <div className="flex flex-col gap-8 mt-10 md:text-2xl text-xl max-w-7xl md:text-center">
              <p className="text-colorWhite">
                Hire skilled developers, designers, project managers, and
                quality assurance specialists who work exclusively on your
                project within 48 hours. 
              </p>
              <p className="text-colorWhite">
                We ensure the highest quality of our services by building
                expertise in various business domains, sharing best practices,
                and maintaining a committed team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-themeLight">
        <WhyDedicatedTeam />
      </div>
      <div className="lg:px-[70px] px-6">
        <DedicatedTeamBenefits />
      </div>
      <div className="container mx-auto">
        <div className="sm:w-[90%] w-[100%] mx-auto xl:pb-[6rem] md:pb-[4rem] pb-[2rem]  px-6 end-to-end reveal">
          <div className="bg-themeColor rounded-3xl py-10 md:px-12 px-6 flex items-center justify-center flex-col">
            <p className="md:text-5xl text-2xl leading-tight md:text-center md:max-w-7xl text-colorWhite">
              Let us tailor a team to suit your specific needs,
              <br /> ensuring seamless collaboration, exceptional quality,{" "}
              <br />
              and unparalleled results. Experience the difference a dedicated
              team can make
            </p>
            <Link href="/contact-us/">
              <div className="!bg-colorWhite px-[14px] py-[10px] mt-8 border border-colorBlack shadow-none hover:shadow-lg cursor-pointer">
                <p className="uppercase">Get started today</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
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

export default DedicatedTeam;
