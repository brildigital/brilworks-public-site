"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";
import CTASection from "../Common/CTASection";

const ServicesSection = dynamic(() => import("../Common/ServicesSection"));
const MultipleCardWithIconBG = dynamic(() =>
  import("../Common/MultipleCardWithIconBG")
);
const Honors = dynamic(() => import("../Homepage/Honors"));
const IndustriesWeServe = dynamic(() =>
  import("../Homepage/IndustriesWeServe")
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const LowCodeNoCodeDevService = () => {
  const lowCodeDevelopmentServices = {
    title: "Our Services",
    servicesList: [
      {
        title: "Low-Code App Development",
        value: "low-code-service-1",
        description:
          "Build powerful applications using intuitive visual interfaces and pre-built components.",
        imageSrc: "/images/v2/streamlined-low-code-development.webp",
        imageAlt: "Web dev img",
      },
      {
        title: "No-Code Development",
        value: "low-code-service-2",
        description:
          "Simplify app creation for business users with drag-and-drop functionality and pre-configured workflows.",
        imageSrc: "/images/v2/no-code-app-development.webp",
        imageAlt: "Mobile Application dev img",
      },
      {
        title: "Low-Code No-Code Platform",
        value: "low-code-service-3",
        description:
          "Leverage our comprehensive platform with everything you need to design, develop, and deploy apps seamlessly.",
        imageSrc: "/images/v2/low-code-no-code-platform.webp",
        imageAlt: "Enterprise application dev img",
      },
      {
        title: "Low-Code No-Code Solutions",
        value: "low-code-service-4",
        description:
          "We craft tailored solutions that address your unique business challenges, from process automation to data management.",
        imageSrc: "/images/v2/low-code-no-code-solutions.webp",
        imageAlt: "Saas application dev img",
      },
    ],
  };

  const whyChooseUsLowCodeData = {
    title: "Why Choose Brilworks?",
    benefits: [
      {
        title: "Unmatched Expertise",
        icon: "/images/v2/fi_9631224.svg",
        description:
          "Our team boasts seasoned professionals with deep experience in Low-Code No-Code development.",
      },
      {
        title: "Scalability and Flexibility",
        icon: "/images/v2/fi_14677514.svg",
        description:
          "Build applications that adapt and grow alongside your business needs.",
      },
      {
        title: "Agility and Speed",
        icon: "/images/v2/fi_2612924.svg",
        description:
          "Get your applications up and running faster than ever before, with minimal coding requirements.",
      },
      {
        title: "User-Friendly Platform",
        icon: "/images/v2/fi_4121823.svg",
        description:
          "Our intuitive platform empowers both technical and non-technical users to create powerful applications.",
      },
      {
        title: "Cost-Effectiveness",
        icon: "/images/v2/cost-efficient.svg",
        description:
          "Eliminate the high costs associated with traditional software development projects.",
      },
    ],
  };
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
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="service-section"
        serviceData={lowCodeDevelopmentServices}
      />
      <MultipleCardWithIconBG data={whyChooseUsLowCodeData} />
      <Honors />
      <CTASection
        titleClass="md:!w-[65%]"
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
