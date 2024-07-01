"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

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

const DigitalExperienceService = () => {
  return (
    <div className="services pt-[4rem] mx-auto">
      <div>
        <div className="relative">
          <div className="home_sec1_img">
            <div className="banner-bg w-full block md:hidden h-[600px]"></div>
            <Image
              className="w-full md:block hidden h-auto"
              src="https://a.storyblok.com/f/219851/4500x2487/ee4ef3dd60/digital-experience-banner.webp"
              alt="Digital experience banner"
              width="1440"
              height="796"
              priority
              sizes="(max-width: 767px) 550px, 1440px"
            />
          </div>
          <div className="sec1_txt_position !left-[5%] !top-[15%]">
            <h1 className="mb-[30px] w-full md:w-1/2">
              Digital Experience Services
            </h1>
            <p className="!text-colorGray !mb-10 w-full md:w-1/2">
              At Brilworks, we empower startups & businesses to spark and
              enhance their digital journeys with our comprehensive suite of
              digital experience services combined with intelligent solutions
              and engineering expertise.
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

export default DigitalExperienceService;
