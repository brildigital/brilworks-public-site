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

const AdaloDevelopmentService = () => {
  return (
    <>
      <ServiceHeroSection
        title="Adalo Development Services"
        description="Empower Your Business with Adalo Development Services. At Brilworks, we specialize in crafting intuitive and dynamic mobile and web applications using the powerful platform – Adalo."
        buttonText="Tell Us About Your Project"
        imageSrc="/images/v2/adalo-banner.webp"
      />
      <CTASection
        titleClass="md:w-[70%]"
        descriptionClass="md:w-4/5"
        title="Your Adalo Partner: Our Development Services"
        description="As a leading Adalo development company, we thrive on creating tailored solutions that cater to our clients' diverse needs. Our team of skilled developers combines technical prowess with creative flair to build apps that not only meet but exceed expectations."
        buttonText="Let’s Discuss"
        darkBackground={false}
      />
      <OurServices />
      <ServicesWhyChooseUs />
      <Honors />
      <CTASection
        titleClass="md:w-[70%]"
        title="Ready to transform your ideas into reality? Contact us today to discuss your project and take the first step toward success."
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

export default AdaloDevelopmentService;
