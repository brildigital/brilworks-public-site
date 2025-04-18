"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";
import CTASection from "../Common/CTASection";

const OurServices = dynamic(() => import("./OurServices"));
const TechStackWeUse = dynamic(() => import("./TechStackWeUse"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const IndustriesWeServe = dynamic(() =>
  import("../Homepage/IndustriesWeServe")
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const ServicesWhyChooseUs = dynamic(() => import("./ServicesWhyChooseUs"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const DevOpsService = () => {
  return (
    <>
      <ServiceHeroSection
        title="DevOps Consulting Services"
        description="We build you a smooth-running CI/CD pipeline, so you can ship updates faster, test smarter, deploy smoothly, and gain a competitive edge."
        buttonText="Let's Get Started"
        imageSrc="/images/v2/dev-ops-service-banner.webp"
      />
      <CTASection
        titleClass="md:w-[70%]"
        descriptionClass="md:w-4/5"
        title="Ship Faster, Test Smarter, Deploy Smoother: DevOps Consulting for Modern Businesses"
        description="We're a leading DevOps consulting service company dedicated to building high-performing software delivery pipelines that streamline your workflow, accelerate releases, and empower your teams. Our expert consultants work alongside your team to identify your unique challenges and design a pipeline tailored to address your unique needs. We leverage the latest tools and cutting-edge technologies, from GitLab CI/CD to containerization solutions, to create a system that aligns perfectly with your specific needs."
        buttonText="Let’s Discuss"
        darkBackground={false}
      />
      <OurServices />
      <ServicesWhyChooseUs />
      <Honors />
      <CTASection
        titleClass="md:w-[70%]"
        title="Transform your development, achieve DevOps success - Get your free Brilworks consultation today!"
        buttonText="Let's Get Started"
      />
      <TechStackWeUse />
      <IndustriesWeServe darkBackground={false} />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default DevOpsService;
