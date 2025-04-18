"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";
import CTASection from "../Common/CTASection";

const CommonUseCases = dynamic(() => import("./CommonUseCaseComponent"));
const OurServices = dynamic(() => import("./OurServices"));
const UseCases = dynamic(() => import("./UseCases"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const IndustriesWeServe = dynamic(() =>
  import("../Homepage/IndustriesWeServe")
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const ServicesWhyChooseUs = dynamic(() => import("./ServicesWhyChooseUs"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const GenerativeAIDevService = () => {
  return (
    <>
      <ServiceHeroSection
        title="Generative AI Development Services"
        description="We are pioneering the future of AI with our generative AI solutions. We are not just another AI company; we are a team of passionate experts who craft bespoke AI applications tailored to your unique needs."
        buttonText="Let's Build"
        imageSrc="/images/v2/generative-ai-banner.webp"
      />
      <CTASection
        titleClass="md:w-[70%]"
        descriptionClass="md:w-4/5"
        title="Transform Your Business with Generative AI"
        description="Unlock the vast potential of generative AI to creatively revolutionize how your business operates. Whether it's generating original content, designing innovative applications, or creating novel customer experiences, generative AI serves as a catalyst for significant productivity improvements and operational transformation. Utilize Amazon's Bedrock and Foundation Models, available through SageMaker Jumpstart, to train your models using your own internal data while maintaining its confidentiality. At Brilworks, we offer the depth of experience and technical expertise needed to launch or scale your generative AI initiatives effectively. Whether you are beginning your AI journey or seeking to enhance your existing model's infrastructure, our team is equipped to guide you through every step of the process, ensuring tailored solutions that drive real results."
        buttonText="Let’s Discuss"
        darkBackground={false}
      />
      <OurServices />
      <UseCases />
      <ServicesWhyChooseUs />
      <CommonUseCases />
      <Honors />
      <CTASection
        title="Data is the new oil, but AI is the refinery. Extract valuable insights from your data and make smarter business decisions with AI."
        description="Tell us your project idea and get a free consultation to create an outstanding digital product."
        buttonText="Schedule a free AI consultation"
      />
      <IndustriesWeServe darkBackground={false} />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default GenerativeAIDevService;
