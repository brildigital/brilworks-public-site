"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import "../../styles/Services.scss";
import DevOpsShipFaster from "./DevOpsShipFaster";
import Button from "../Common/Button";

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

const FlutterflowDevelopmentService = () => {
  return (
    <div className="services pt-[4rem] mx-auto">
      <div>
        <div className="relative">
          <div className="home_sec1_img">
            <div className="banner-bg w-full block md:hidden h-[600px]"></div>

            <Image
              className="w-full md:block hidden h-auto"
              src="https://a.storyblok.com/f/219851/1440x796/1849c045da/flutterflow-banner.webp"
              alt="Flutterflow Development banner"
              width="1440"
              height="796"
              priority
              sizes="(max-width: 767px) 550px, 1440px"
            />
          </div>
          <div className="sec1_txt_position !left-[5%] lg:!top-[40%]">
            <h1 className="mb-[30px] w-full md:w-3/5">
              Leading Flutterflow Development Company
            </h1>
            <p className="!text-colorGray !mb-10 w-full md:w-[55%]">
              We are a top-rated Flutterflow development company, creating
              next-gen apps for SMBs and enterprises at record speed using
              Flutterflow.
            </p>
            <Button label="Connect Now" />
          </div>
        </div>
      </div>
      <DevOpsShipFaster />
      <OurServices />
      <HomepageWhyChooseUs />
      <Honors />
      <ContactBlock />
      <IndustriesWeHelp />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </div>
  );
};

export default FlutterflowDevelopmentService;
