"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";
import CTASection from "../Common/CTASection";

const OurServices = dynamic(() => import("./OurServices"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const ServicesWhyChooseUs = dynamic(() => import("./ServicesWhyChooseUs"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const ApplicationDevelopmentService = () => {
  return (
    <>
      <ServiceHeroSection
        title="Application Development Services"
        description="We're a passionate team of software developers who help businesses turn innovative ideas into reality.  From concept to launch, we design, develop, and maintain custom software solutions that drive results."
        buttonText="Contact Us"
        imageSrc="/images/v2/app-development-service-banner.webp"
      />
      <CTASection
        titleClass="md:w-[70%]"
        descriptionClass="md:w-4/5"
        title="Your Innovation Partner in Cutting-Edge Development"
        description="We're more than just developers. Our team of elite engineers and strategists become an extension of yours, collaborating to develop groundbreaking solutions on any platform. Your success is paramount. Client satisfaction is woven into every stage of our process, from brainstorming your initial concept to ongoing support after launch."
        buttonText="Let’s Discuss"
        darkBackground={false}
      />
      <OurServices />
      <ServicesWhyChooseUs />
      <Honors />
      <CTASection
        titleClass="md:w-[70%]"
        title="Contact us today for a free consultation and let's discuss how custom software development can transform your business."
        buttonText="Get Free Consulatation Now!"
      />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default ApplicationDevelopmentService;
