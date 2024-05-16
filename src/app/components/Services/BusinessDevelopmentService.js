"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import "../../styles/Services.scss";
import { useMediaQuery } from "react-responsive";
import { BestAdvocateText } from "../Homepage/BigText";
import DevOpsShipFaster from "./DevOpsShipFaster";

const HomepageWhyChooseUs = dynamic(() =>
  import("../Homepage/HomepageWhyChooseUs")
);
const OurServices = dynamic(() => import("./OurServices"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const ContactBlock = dynamic(() => import("./ContactBlock"));
const IndustriesWeHelp = dynamic(() => import("./IndustriesWeHelp"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const BusinessDevelopmentService = () => {
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
                src={`/images/business-dev-banner.webp`}
                alt="Business Intelligence banner"
                width={isMobile ? 550 : 1440}
                height={isMobile ? 283 : 796}
                priority={!isMobile}
                sizes="(max-width: 767px) 550px, 1440px"
              />
            )}
          </div>
          <div className="sec1_txt_position !left-[5%] !top-[10%]">
            <h1 className="mb-[30px] w-full md:w-3/5">
              Business Intelligence Services
            </h1>
            <p className="!text-colorGray !mb-10 w-full md:w-1/2">
              We provide a comprehensive suite of business intelligence services
              to transform your raw data into actionable insights and empower
              your organization with expert business intelligence (BI) services.
            </p>
            <Link href="/contact-us/">
              <div className="header_sec1_txt2">
                <p className="transition uppercase !text-base">
                  Talk to an Expert
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <DevOpsShipFaster />
      <OurServices />
      <HomepageWhyChooseUs />
      <Honors />
      <ContactBlock />
      <IndustriesWeHelp />
      <BestAdvocateText />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </div>
  );
};

export default BusinessDevelopmentService;
