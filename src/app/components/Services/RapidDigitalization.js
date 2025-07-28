import React from "react";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";
import CTASection from "../Common/CTASection";

const WhyDedicatedTeam = dynamic(() => import("./WhyDedicatedTeam"));
const MultipleCardInGrid = dynamic(() =>
  import("../Common/MultipleCardInGrid")
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const TechStackWeUse = dynamic(() => import("./TechStackWeUse"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const RapidDigitalization = () => {
  const rapidDigitalizationFeatures = [
    {
      title: "Strategic Vision and Planning",
      imgSrc: "/images/v2/fi_3514368.svg",
      alt: "strategic-vision-icon",
    },
    {
      title: "Agile Development",
      imgSrc: "/images/v2/fi_4288807.svg",
      alt: "agile-development-icon",
    },
    {
      title: "Data-Driven Decision Making",
      imgSrc: "/images/v2/fi_16288123.svg",
      alt: "data-driven-icon",
    },
    {
      title: "Cross-Functional Collaboration",
      imgSrc: "/images/v2/fi_809522.svg",
      alt: "cross-functional-icon",
    },
    {
      title: "Scalable Solutions for Growth",
      imgSrc: "/images/v2/fi_8869087.svg",
      alt: "saclable-sol-growth-icon",
    },
    {
      title: "24/7 Support and Monitoring",
      imgSrc: "/images/v2/24X7-support-mgmt.svg",
      alt: "24X7-support-icon",
    },
  ];

  const benefitOfDigitalService = [
    {
      title: "Strategic Roadmap",
      icon: "/images/v2/fi_2116935.svg",
      description:
        "Gain a clear roadmap for digital transformation aligned with your business goals and market demands.",
    },
    {
      title: "Rapid Innovation",
      icon: "/images/v2/fi_8869087.svg",
      description:
        "Accelerate your time-to-market with agile development practices and iterative releases.",
    },
    {
      title: "Enhanced Customer Experience",
      icon: "/images/v2/fi_11478510.svg",
      description:
        "Deliver seamless digital experiences that drive customer engagement and loyalty.",
    },
    {
      title: "Quality Assurance",
      icon: "/images/v2/fi_11338531.svg",
      description:
        "Streamline business processes and workflows for improved productivity and cost savings.",
    },
    {
      title: "Scalability and Flexibility",
      icon: "/images/v2/scale-project.svg",
      description:
        "Adapt to evolving market dynamics and scale your digital initiatives as needed.",
    },
    {
      title: "Measurable ROI",
      icon: "/images/v2/fi_10164350.svg",
      description:
        "Track and measure the impact of your digital investments with actionable insights and analytics.",
    },
  ];

  return (
    <>
      <ServiceHeroSection
        title="Unlock Digital Potential with Our Acceleration Services"
        description="Our team is dedicated to driving innovation, efficiency, and growth through strategic digital initiatives tailored to your unique business objectives."
        buttonText="Explore Digital Acceleration Services"
        showGridData={true}
      />
      <CTASection
        titleClass="md:w-[70%]"
        descriptionClass="md:w-4/5"
        title="Digital Acceleration Service: Strategic Solutions, Transformative Results"
        description="Partner with us to embark on a journey of digital transformation. Our seasoned experts in digital strategy, technology, and implementation collaborate seamlessly with your team to accelerate your digital initiatives. We leverage cutting-edge technologies, data-driven insights, and agile methodologies to deliver measurable results within your timelines and budget."
        buttonText="Let’s Discuss"
        darkBackground={false}
      />
      <WhyDedicatedTeam
        title="Why Choose Our Digital Acceleration Services?"
        cardData={rapidDigitalizationFeatures}
      />
      <MultipleCardInGrid
        title="Benefits of Digital Acceleration"
        cardData={benefitOfDigitalService}
      />
      <CTASection
        title="Let us guide you through every step of your digital transformation journey. Partner with us to unleash the full potential of your business in the digital era."
        description="Tell us your project idea and get a free consultation to create an outstanding digital product."
        buttonText="Get Started Today"
      />
      <ClientReviews />
      <TechStackWeUse />
      <ServicesFAQ />
    </>
  );
};

export default RapidDigitalization;
