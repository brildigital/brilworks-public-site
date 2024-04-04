"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import "../../styles/Services.scss";
import React from "react";
import { BestAdvocateText } from "../Homepage/BigText";
import { useMediaQuery } from "react-responsive";

const HomepageWhyChooseUs = dynamic(() =>
  import("../Homepage/HomepageWhyChooseUs")
);
const OurServices = dynamic(() => import("./OurServices"));
const TechStackWeUse = dynamic(() => import("./TechStackWeUse"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const ContactBlock = dynamic(() => import("./ContactBlock"));
const IndustriesWeHelp = dynamic(() => import("./IndustriesWeHelp"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const AWSService = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className="services pt-[4rem] mx-auto">
      <div>
        <div className="relative">
          <div className="home_sec1_img">
            {isMobile ? (
              <div className="banner-bg w-full h-[600px]"></div>
            ) : (
              <Image
                className="w-full h-auto"
                src={`/images/aws-service.webp`}
                alt="AWS consulting service banner"
                width={isMobile ? 550 : 1440}
                height={isMobile ? 283 : 796}
                priority={true}
              />
            )}
          </div>
          <div className="sec1_txt_position !left-[5%] !top-[15%]">
            <h1 className="mb-[30px] w-full md:w-1/2">
              AWS Consulting Services
            </h1>
            <p className="!text-colorGray !mb-10 w-full md:w-1/2">
              Ready to take your business to new heights with the agility,
              scalability, and cost-efficiency of the Amazon Web Services (AWS)
              cloud? Look no further than our comprehensive suite of AWS
              consulting services, designed to guide you every step of the way.
            </p>
            <Link href="/contact-us/">
              <div className="header_sec1_txt2">
                <p className="transition uppercase !text-base">
                  Let’s Get Started
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <OurServices />
      <HomepageWhyChooseUs />
      <Honors />
      <ContactBlock />
      <TechStackWeUse />
      <IndustriesWeHelp />
      <BestAdvocateText />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </div>
  );
};

export default AWSService;
