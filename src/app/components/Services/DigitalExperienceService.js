"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";

const TechStackWeUse = dynamic(() => import("./TechStackWeUse"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const DigitalExperienceService = () => {
  const DigitalExperienceServiceData = [
    {
      title: "Digital Experience Strategy",
      value: "value-1",
      description:
        "We map your unique path to digital success, defining goals, user personas, and a winning roadmap.",
      imageSrc: "/images/digital-ex-img.webp",
      imageAlt: "Digital experience img",
    },
    {
      title: "Experience Design & Development",
      value: "value-1",
      description:
        "Craft seamless and captivating interfaces across web, mobile, and emerging platforms.",
      imageSrc: "/images/digital-experience-dev.webp",
      imageAlt: "Experience design dev img",
    },
    {
      title: "Content Management & Personalization",
      value: "value-1",
      description:
        "Deliver dynamic, targeted content that resonates with every individual.",
      imageSrc: "/images/content-mgmt.webp",
      imageAlt: "Content Mgmt img",
    },
    {
      title: "Marketing Automation & Analytics",
      value: "value-1",
      description:
        "Streamline your campaigns and measure impact with data-driven insights.",
      imageSrc: "/images/marketing-automation.webp",
      imageAlt: "Marketing Automation img",
    },
    {
      title: "Commerce & Payment Integration",
      value: "value-1",
      description:
        "Build frictionless shopping experiences that convert every click.",
      imageSrc: "/images/e-commerce-payment.webp",
      imageAlt: "Commerce Payment img",
    },
    {
      title: "Integration & API Development",
      value: "value-1",
      description:
        "Connect your systems seamlessly for a unified customer journey.",
      imageSrc: "/images/integartion-api-dev.webp",
      imageAlt: "Integration API img",
    },
  ];

  const whyChooseUsDigitalExperience = [
    {
      title: "Award-Winning Expertise",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "Recognized for innovation and excellence by Clutch, Techreviewer, and more.",
    },
    {
      title: "Human-Centered Approach",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "We prioritize understanding your unique needs and building solutions that resonate.",
    },
    {
      title: "Agile & Collaborative",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "We work closely with your team, ensuring open communication and swift adjustments.",
    },
    {
      title: "End-to-End Support",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "We offer a full spectrum of services, from ideation to implementation and ongoing maintenance.",
    },
    {
      title: "Scalable & Secure",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "Our solutions are built with future growth and industry-leading security standards in mind.",
    },
  ];

  return (
    <>
      <ServiceHeroSection
        title="Digital Experience Services"
        description="At Brilworks, we empower startups & businesses to spark and enhance their digital journeys with our comprehensive suite of digital experience services combined with intelligent solutions and engineering expertise."
        buttonText="Let’s Get Started"
      />

      <Honors />
      <TechStackWeUse />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default DigitalExperienceService;
