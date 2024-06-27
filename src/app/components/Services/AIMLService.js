"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import "../../styles/Services.scss";
import Button from "../Common/Button";

const OurServices = dynamic(() => import("./OurServices"));
const UseCases = dynamic(() => import("./UseCases"));
const KeyBenefits = dynamic(() => import("./KeyBenefits"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const ContactBlock = dynamic(() => import("./ContactBlock"));
const TechStackWeUse = dynamic(() => import("./TechStackWeUse"));
const ServicesWhyChooseUs = dynamic(() => import("./ServicesWhyChooseUs"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const AIMLService = () => {
  return (
    <div className="services pt-[4rem] mx-auto">
      <div>
        <div className="relative">
          <div className="home_sec1_img">
            <div className="banner-bg w-full block md:hidden h-[600px]" />
            <Image
              className="w-full h-auto md:block hidden"
              src="https://a.storyblok.com/f/219851/4500x1806/914b64af3d/aiml-banner.webp"
              alt="ALML banner"
              width="1440"
              height="648"
              priority
              sizes="(max-width: 767px) 550px, 1440px"
            />
          </div>
          <div className="sec1_txt_position !left-[5%] lg:!top-[50%]">
            <h1 className="mb-[30px] md:mb-[20px] lg:mb-[30px] w-full md:w-1/2">
              Advance Your Business with AI/ML and Computer Vision
            </h1>
            <p className="!text-colorGray w-full md:w-1/2 lg:!mb-10 md:!mb-6 !mb-10">
              Leverage the power of AI and visual analytics to transform your
              business operation.
            </p>
            <Button label="Let’s Get Started" />
          </div>
        </div>
      </div>

      <OurServices />
      <UseCases />
      <KeyBenefits />
      <Honors />
      <ContactBlock />
      <TechStackWeUse />
      <ServicesWhyChooseUs />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </div>
  );
};

export default AIMLService;
