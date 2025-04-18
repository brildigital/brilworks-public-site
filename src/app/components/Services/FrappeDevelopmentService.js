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

const FrappeDevelopmentService = () => {
  return (
    <>
      <ServiceHeroSection
        title="A Trusted Frappe Development Company"
        description="At Brilworks, we specialize in creating custom Frappe solutions for small and medium-sized businesses. Our experienced team is dedicated to helping startups and SMBs thrive by providing top-notch development services."
        buttonText="Consult our expert"
        imageSrc="/images/v2/frapee-service-banner.webp"
      />
      <CTASection
        titleClass="md:w-[70%]"
        descriptionClass="md:w-4/5"
        title="Frappe Development Solutions by Brilworks"
        description="Missing a Frappe feature? We'll plug the gap. We're the architects you've been searching for – from customizing existing Frappe applications to developing bespoke solutions from scratch, we have the expertise to meet your unique requirements."
        buttonText="Let’s Discuss"
        darkBackground={false}
      />
      <OurServices />
      <ServicesWhyChooseUs />
      <Honors />
      <CTASection
        titleClass="md:w-[70%]"
        title="Ready to take your business to the next level with our Frappe development services?"
        buttonText="Talk to Our Expert"
      />
      <IndustriesWeServe darkBackground={false} />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default FrappeDevelopmentService;
