"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import Button from "../Common/Button";

const OurServices = dynamic(() => import("./OurServices"));
const TechStackWeUse = dynamic(() => import("./TechStackWeUse"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const ContactBlock = dynamic(() => import("./ContactBlock"));
const IndustriesWeHelp = dynamic(() => import("./IndustriesWeHelp"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const ServicesWhyChooseUs = dynamic(() => import("./ServicesWhyChooseUs"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const AWSService = () => {
  return (
    <div className="services pt-[4rem] mx-auto">
      <div>
        <div className="relative">
          <div className="home_sec1_img">
            <div className="banner-bg w-full block md:hidden h-[600px]"></div>
            <Image
              className="w-full md:block hidden  h-auto"
              src={`/images/aws-service.webp`}
              alt="AWS consulting service banner"
              width="1440"
              height="796"
              priority
              sizes="(max-width: 767px) 550px, 1440px"
            />
          </div>
          <div className="sec1_txt_position !left-[5%] lg:!top-[40%]">
            <h1 className="mb-[30px] w-full md:w-1/2">
              AWS Consulting Services
            </h1>
            <p className="!text-colorGray !mb-10 w-full md:w-1/2">
              Ready to take your business to new heights with the agility,
              scalability, and cost-efficiency of the Amazon Web Services (AWS)
              cloud? Look no further than our comprehensive suite of AWS
              consulting services, designed to guide you every step of the way.
            </p>
            <Button label="Let’s Get Started" />
          </div>
        </div>
      </div>

      <OurServices />
      <ServicesWhyChooseUs />
      <Honors />
      <ContactBlock />
      <TechStackWeUse />
      <IndustriesWeHelp />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </div>
  );
};

export default AWSService;
