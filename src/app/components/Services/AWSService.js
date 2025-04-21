"use client";
import dynamic from "next/dynamic";
import React from "react";
import ServiceHeroSection from "./ServiceHeroSection";
import ServicesSection from "../Common/ServicesSection";

const MultipleCardWithIconBG = dynamic(() =>
  import("../Common/MultipleCardWithIconBG")
);
const TechStackWeUse = dynamic(() => import("./TechStackWeUse"));
const CTASection = dynamic(() => import("../Common/CTASection"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const IndustriesWeServe = dynamic(() =>
  import("../Homepage/IndustriesWeServe")
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const IndustryUseCasesSuggestion = dynamic(() =>
  import("./IndustryUseCasesSuggestion")
);
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const AWSService = () => {
  const awsServices = {
    title: "Our Services",
    servicesList: [
      {
        title: "AWS Consulting",
        value: "aws-service-l-1",
        description:
          "Our team of certified AWS professionals possesses deep technical expertise and industry knowledge, enabling us to tailor solutions that meet your unique needs and objectives.",
        imageSrc: "/images/v2/aws-consulting-img.webp",
        imageAlt: "AWS Consulting img",
      },
      {
        title: "Cloud Migration & Modernization",
        value: "aws-service-l-2",
        description:
          "Leverage our proven methodologies to seamlessly migrate your on-premises workloads to the cloud, modernize legacy applications, and optimize your existing cloud infrastructure.",
        imageSrc: "/images/v2/cloud-migration-modernization.webp",
        imageAlt: "Cloud migration img",
      },
      {
        title: "Architecture & Design",
        value: "aws-service-l-3",
        description:
          "We craft secure, scalable, and cost-effective architectures that align with your business goals and ensure long-term success on AWS.",
        imageSrc: "/images/v2/architecture-design.webp",
        imageAlt: "Architect design img",
      },
      {
        title: "Development & DevOps",
        value: "aws-service-l-4",
        description:
          "Our skilled developers and DevOps engineers build, deploy, and manage your cloud applications with best practices and automation to streamline operations.",
        imageSrc: "/images/v2/development-devops.webp",
        imageAlt: "Development DevOps img",
      },
      {
        title: "Security & Compliance",
        value: "aws-service-l-5",
        description:
          "We prioritize your data security and regulatory compliance with robust security solutions and expert guidance on navigating complex compliance requirements.",
        imageSrc: "/images/v2/security-compliance.webp",
        imageAlt: "Security compliance img",
      },
      {
        title: "Cost Optimization",
        value: "aws-service-l-6",
        description:
          "Achieve optimal cloud spending with our cost optimization strategies, helping you identify and eliminate cost inefficiencies and maximize your ROI.",
        imageSrc: "/images/v2/cost-optimization.webp",
        imageAlt: "Cost Optimization img",
      },
      {
        title: "Managed Services",
        value: "aws-service-l-7",
        description:
          "Let us handle the ongoing management of your AWS environment, freeing you to focus on your core business while we ensure performance and security.",
        imageSrc: "/images/v2/managed-services.webp",
        imageAlt: "Managed Services img",
      },
      {
        title: "AWS Advisory services",
        value: "aws-service-l-8",
        description:
          "Focus on innovation while we manage your AWS environment, ensuring peak performance, security, and reliability at all times.",
        imageSrc: "/images/v2/aws-advisory-services.webp",
        imageAlt: "AWS Advisory Services img",
      },
    ],
  };
  const whyChooseUsAWSData = {
    title: "Why Choose Brilworks?",
    benefits: [
      {
        title: "Proven Track Record",
        icon: "/images/v2/fi_10227466.svg",
        description:
          "We have a successful history of delivering value to businesses of all sizes across diverse industries.",
      },
      {
        title: "Innovation & Expertise",
        icon: "/images/v2/fi_1829892.svg",
        description:
          "Our team stays ahead of the curve with the latest AWS technologies and best practices, bringing continuous value to your cloud journey.",
      },
      {
        title: "Customer-Centric Approach",
        icon: "/images/v2/client-centric-icon.svg",
        description:
          "We prioritize close collaboration and open communication, ensuring your satisfaction every step of the way.",
      },
      {
        title: "Scalability & Flexibility",
        icon: "/images/v2/fi_8109512.svg",
        description:
          "We adapt to your evolving needs, readily scaling our services to support your growth and changing priorities.",
      },
    ],
  };

  return (
    <>
      <ServiceHeroSection
        title="AWS Consulting Services"
        description="Ready to take your business to new heights with the agility, scalability, and cost-efficiency of the Amazon Web Services (AWS) cloud? Look no further than our comprehensive suite of AWS consulting services, designed to guide you every step of the way."
        buttonText="Let's Get Started"
        imageSrc="/images/v2/aws-service-banner.webp"
      />
      <ServicesSection sectionId="service-section" serviceData={awsServices} />
      <MultipleCardWithIconBG
        bgClass="bg-sectionBG"
        data={whyChooseUsAWSData}
      />
      <IndustryUseCasesSuggestion />
      <Honors />
      <CTASection buttonText="Let's Get Started" />
      <TechStackWeUse />
      <IndustriesWeServe darkBackground={false} />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default AWSService;
