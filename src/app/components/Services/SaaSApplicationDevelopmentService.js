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

const SaaSApplicationDevelopmentService = () => {
  return (
    <>
      <ServiceHeroSection
        title="SaaS Application Development Services"
        description="Trusted by industry leaders, we deliver exceptional Sass solutions for forward-thinking companies. Let us help you achieve your design goals with clean, scalable code."
        buttonText="Get a Quote"
        imageSrc="/images/v2/saas-service-banner.webp"
      />
      <CTASection
        titleClass="md:w-[70%]"
        descriptionClass="md:w-4/5"
        title="Your Trusted Partner for Next-Gen SaaS Development"
        description="At Briworks, we’re a team of award-winning SaaS architect and developers with proven track record of building secure, scalable, and user-centric cloud applications. We leverage the latest technology and industry best practices to deliver future proof  solutions that optimize your operations, drive growth, and captivate users. Partner with us and experience the difference - expertise, agility, and dedication to your success."
        buttonText="Let’s Discuss"
        darkBackground={false}
      />
      <OurServices />
      <ServicesWhyChooseUs />
      <Honors />
      <CTASection
        titleClass="md:w-[70%]"
        title="Connect with our experts for a no-obligation discussion about your vision and how we can bring it to life."
        buttonText="Get a Quote"
      />
      <IndustriesWeServe darkBackground={false} />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default SaaSApplicationDevelopmentService;
