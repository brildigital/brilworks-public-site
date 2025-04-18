"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";
import CTASection from "../Common/CTASection";

const OurServices = dynamic(() => import("./OurServices"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const IndustriesWeServe = dynamic(() =>
  import("../Homepage/IndustriesWeServe")
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const ServicesWhyChooseUs = dynamic(() => import("./ServicesWhyChooseUs"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const FlutterflowDevelopmentService = () => {
  return (
    <>
      <ServiceHeroSection
        title="Leading Flutterflow Development Company"
        description="We are a top-rated Flutterflow development company, creating next-gen apps for SMBs and enterprises at record speed using Flutterflow."
        buttonText="Connect Now"
        imageSrc="/images/v2/flutterflow-banner.webp"
      />
      <CTASection
        titleClass="md:w-[70%]"
        descriptionClass="md:w-4/5"
        title="We offer premium Flutterflow development services to turn your dreams into reality"
        description="Our FlutterFlow development services include FlutterFlow web and app development. Hire pre-vetted Flutter developers from Brilworks to work with your own team. Contact us today and hire top-rated Flutter experts in just 48 hours."
        buttonText="Let’s Discuss"
        darkBackground={false}
      />
      <OurServices />
      <ServicesWhyChooseUs />
      <Honors />
      <CTASection
        title={
          <>
            Ready to Build Your Dream App?
            <br className="md:block hidden" /> Let's discuss how our Flutterflow
            development expertise can help.
          </>
        }
        buttonText="Let's Get Started"
      />
      <IndustriesWeServe darkBackground={false} />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default FlutterflowDevelopmentService;
