"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";
import CTASection from "../Common/CTASection";

const OurServices = dynamic(() => import("./OurServices"));
const UseCases = dynamic(() => import("./UseCases"));
const KeyBenefits = dynamic(() => import("./KeyBenefits"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const TechStackWeUse = dynamic(() => import("./TechStackWeUse"));
const ServicesWhyChooseUs = dynamic(() => import("./ServicesWhyChooseUs"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const AIMLService = () => {
  return (
    <>
      <ServiceHeroSection
        title="Advance Your Business with AI/ML and Computer Vision"
        description="We are pioneering the future of AI with our generative AI solutions. We are not just another AI company; we are a team of passionate experts who craft bespoke AI applications tailored to your unique needs."
        buttonText="Let’s Get Started"
        imageSrc="/images/v2/ai-ml-service-banner.webp"
      />
      <OurServices />
      <UseCases />
      <KeyBenefits />
      <Honors />
      <CTASection
        titleClass="md:w-[70%]"
        title="Don't let cost hold you back. Our industry-leading AI/ML services are within reach."
        buttonText="Let's Get Started"
      />
      <TechStackWeUse />
      <ServicesWhyChooseUs />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default AIMLService;
