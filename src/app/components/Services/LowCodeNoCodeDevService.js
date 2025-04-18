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

const LowCodeNoCodeDevService = () => {
  return (
    <>
      <ServiceHeroSection
        title="Low Code No Code Development Services"
        description="Turn ideas into reality faster than ever before with our no-code/low-code development services.  At Brilworks, we're a leading Low-Code No-Code Development Company, empowering businesses to build custom applications without the need for extensive coding knowledge."
        buttonText="Schedule a Call"
        imageSrc="/images/v2/low-code-banner.webp"
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
        title="Build your dream app - Start your free Low-Code No-Code trial today!"
        buttonText="Get a Free Consultation"
      />
      <IndustriesWeServe darkBackground={false} />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default LowCodeNoCodeDevService;
