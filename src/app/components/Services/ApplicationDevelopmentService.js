"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import "../../styles/Services.scss";
import DevOpsShipFaster from "./DevOpsShipFaster";
import Button from "../Common/Button";

const OurServices = dynamic(() => import("./OurServices"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const ContactBlock = dynamic(() => import("./ContactBlock"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const ServicesWhyChooseUs = dynamic(() => import("./ServicesWhyChooseUs"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const ApplicationDevelopmentService = () => {
  return (
    <div className="services pt-[4rem] mx-auto">
      <div>
        <div className="relative">
          <div className="home_sec1_img">
            <div className="banner-bg w-full block md:hidden h-[600px]"></div>
            <Image
              className="w-full md:block hidden h-auto"
              src={`/images/application-dev-banner.webp`}
              alt="Digital experience banner"
              width="1440"
              height="796"
              priority
              sizes="(max-width: 767px) 550px, 1440px"
            />
          </div>
          <div className="sec1_txt_position !left-[5%] lg:!top-[40%]">
            <h1 className="mb-[30px] w-full md:w-7/12">
              Application development services
            </h1>
            <p className="!text-colorGray !mb-10 w-full md:w-1/2">
              We're a passionate team of software developers who help businesses
              turn innovative ideas into reality.  From concept to launch, we
              design, develop, and maintain custom software solutions that drive
              results.
            </p>
            <Button label="Contact Us" />
          </div>
        </div>
      </div>

      <DevOpsShipFaster />
      <OurServices />
      <ServicesWhyChooseUs />
      <Honors />
      <ContactBlock />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </div>
  );
};

export default ApplicationDevelopmentService;
