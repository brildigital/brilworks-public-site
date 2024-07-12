"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import DevOpsShipFaster from "./DevOpsShipFaster";
import Button from "../Common/Button";

const OurServices = dynamic(() => import("./OurServices"));
const UseCases = dynamic(() => import("./UseCases"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const ContactBlock = dynamic(() => import("./ContactBlock"));
const IndustriesWeHelp = dynamic(() => import("./IndustriesWeHelp"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const ServicesWhyChooseUs = dynamic(() => import("./ServicesWhyChooseUs"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const GenerativeAIDevService = () => {
  return (
    <div className="services pt-[4rem] mx-auto">
      <>
        <div className="relative">
          <div className="home_sec1_img">
            <div className="banner-bg w-full block md:hidden h-[600px]"></div>

            <Image
              className="w-full md:block hidden h-auto"
              src="/images/generative-ai-banner.webp"
              alt="Product engineering banner"
              width="1440"
              height="796"
              priority
              sizes="(max-width: 767px) 550px, 1440px"
            />
          </div>
          <div className="sec1_txt_position !left-[5%] md:!top-[45%] lg:!top-[40%]">
            <h1 className="mb-[30px] w-full md:w-3/5">
              Generative AI Development Services
            </h1>
            <p className="!text-colorGray !mb-10 w-full md:w-1/2">
              We are pioneering the future of AI with our generative AI
              solutions. We are not just another AI company; we are a team of
              passionate experts who craft bespoke AI applications tailored to
              your unique needs.
            </p>
            <Button label="Let's Build" />
          </div>
        </div>
      </>
      <DevOpsShipFaster />
      <OurServices />
      <UseCases />
      <ServicesWhyChooseUs />
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

export default GenerativeAIDevService;
