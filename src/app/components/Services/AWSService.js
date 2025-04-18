"use client";
import dynamic from "next/dynamic";
import React from "react";
import ServiceHeroSection from "./ServiceHeroSection";
import CTASection from "../Common/CTASection";

const CommonUseCases = dynamic(() => import("./CommonUseCaseComponent"));
const OurServices = dynamic(() => import("./OurServices"));
const TechStackWeUse = dynamic(() => import("./TechStackWeUse"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const IndustriesWeServe = dynamic(() =>
  import("../Homepage/IndustriesWeServe")
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const ServicesWhyChooseUs = dynamic(() => import("./ServicesWhyChooseUs"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const AWSService = () => {
  return (
    <>
      <ServiceHeroSection
        title="AWS Consulting Services"
        description="Ready to take your business to new heights with the agility, scalability, and cost-efficiency of the Amazon Web Services (AWS) cloud? Look no further than our comprehensive suite of AWS consulting services, designed to guide you every step of the way."
        buttonText="Let's Get Started"
        imageSrc="/images/v2/aws-service-banner.webp"
      />

      <OurServices />
      <ServicesWhyChooseUs />
      <CommonUseCases />
      <Honors />
      <CTASection buttonText="Let's Get Started" />
      <TechStackWeUse />
      <IndustriesWeServe darkBackground={false} />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default AWSService;
