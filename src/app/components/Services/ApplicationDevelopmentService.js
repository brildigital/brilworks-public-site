"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";
import CTASection from "../Common/CTASection";

const ServicesSection = dynamic(() => import("../Common/ServicesSection"));
const MultipleCardWithIconBG = dynamic(() =>
  import("../Common/MultipleCardWithIconBG")
);
const Honors = dynamic(() => import("../Homepage/Honors"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const ApplicationDevelopmentService = () => {
  const appDevelopmentServices = {
    title: "Our Offerings",
    servicesList: [
      {
        title: "Web Application Development",
        value: "app-dev-1",
        description:
          "Build secure, scalable web apps that streamline your operations and enhance user experiences.",
        imageSrc: "/images/v2/web-development.webp",
        imageAlt: "Web dev img",
      },
      {
        title: "Mobile Application Development",
        value: "app-dev-2",
        description:
          "Build secure, scalable web apps that streamline your operations and enhance user experiences.",
        imageSrc: "/images/v2/mobile-application-development.webp",
        imageAlt: "Mobile Application dev img",
      },
      {
        title: "Enterprise Application Development",
        value: "app-dev-3",
        description:
          "Robust enterprise-grade solutions to improve efficiency and collaboration within your organization",
        imageSrc: "/images/v2/enterprise-application-development.webp",
        imageAlt: "Enterprise application dev img",
      },
      {
        title: "Saas Platform Migration & Support",
        value: "app-dev-4",
        description:
          "Migrate your software smoothly and securely to the cloud with our expert migration services.",
        imageSrc: "/images/v2/saas-platform-migration-support.webp",
        imageAlt: "Saas application dev img",
      },
    ],
  };

  const whyChooseUsAppData = {
    title: "Why Choose Brilworks for your App Development Needs?",
    benefits: [
      {
        title: "Experienced Team",
        icon: "/images/v2/extensive-pool.svg",
        description:
          "Our team of skilled developers possesses a deep understanding of diverse technologies and platforms.",
      },
      {
        title: "Transparent Communication",
        icon: "/images/v2/transparent-comm.svg",
        description:
          "We keep you informed throughout the development process, fostering trust and collaboration.",
      },
      {
        title: "Client-Centric Approach",
        icon: "/images/v2/client-centric-icon.svg",
        description:
          "We collaborate closely with you to understand your unique vision and business goals.",
      },

      {
        title: "Proven Track Record",
        icon: "/images/v2/fi_10227466.svg",
        description:
          "We have a history of successful project completions, delivering exceptional results for clients across various industries.",
      },
      {
        title: "Scalable Solutions",
        icon: "/images/v2/fi_8109512.svg",
        description:
          "We build applications that grow with your business, ensuring long-term value.",
      },
      {
        title: "Competitive Rates",
        icon: "/images/v2/fi_8071107.svg",
        description:
          "We offer competitive pricing models to fit your budget and project requirements.",
      },
    ],
  };
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
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="service-section"
        serviceData={appDevelopmentServices}
      />
      <MultipleCardWithIconBG data={whyChooseUsAppData} />
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
