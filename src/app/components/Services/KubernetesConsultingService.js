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

const KubernetesConsultingService = () => {
  return (
    <>
      <ServiceHeroSection
        title="Achieve resilience, scale, and savings"
        description="Boost your DevOps journey with our Kubernetes consulting service. Our experts plan a roadmap to achieve rapid deployments and seamless upgrades with our proven Kubernetes consulting services."
        buttonText="Let's Get Started"
        imageSrc="/images/v2/kubernates-consulting-banner.webp"
      />
      <OurServices />
      <ServicesWhyChooseUs />
      <Honors />
      <CTASection
        title="Transform your operations with Kubernetes expertise."
        description="Get in touch to discover how we can elevate your efficiency and performance."
        buttonText="Schedule a Call"
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

export default KubernetesConsultingService;
