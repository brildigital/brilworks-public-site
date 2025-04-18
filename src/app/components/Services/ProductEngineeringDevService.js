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

const ProductEngineeringDevService = () => {
  return (
    <>
      <ServiceHeroSection
        title="Product Engineering & Development Service"
        description="From concept to creation, we partner with you throughout your engineering product development journey. Are you looking for a reliable partner to navigate the complexities of product engineering and development? Our team of experts brings innovative solutions to every stage."
        buttonText="Get Free Consultation"
        imageSrc="/images/v2/product-engineering-banner.webp"
      />
      <CTASection
        titleClass="md:w-[70%]"
        descriptionClass="md:w-4/5"
        title="Build High-Performance Products with Our Product Engineering Services"
        description="We combine cutting-edge technology with a deep understanding of user needs to deliver exceptional solutions that push boundaries and leave a lasting impression. Let's craft an innovative product that stands out in a crowded marketplace."
        buttonText="Let’s Discuss"
        darkBackground={false}
      />
      <OurServices />
      <ServicesWhyChooseUs />
      <Honors />
      <CTASection
        titleClass=""
        title="Leverage our expertise in product engineering services to optimize your product's performance."
        description="Get a free consultation to see how our expertise can bring your product vision to life."
        buttonText="Contact Us Now"
      />
      <IndustriesWeServe darkBackground={false} />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default ProductEngineeringDevService;
