"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";
import CTASection from "../Common/CTASection";

const TechStackWeUse = dynamic(() => import("./TechStackWeUse"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const ServicesSection = dynamic(() => import("../Common/ServicesSection"));
const IndustriesWeServe = dynamic(() =>
  import("../Homepage/IndustriesWeServe")
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const MultipleCardWithIconBG = dynamic(() =>
  import("../Common/MultipleCardWithIconBG")
);
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const WebAppDevelopmentService = () => {
  const devOpsServices = {
    title: "Our Services",
    servicesList: [
      {
        title: "DevOps Implementation",
        value: "devops-service-1",
        description:
          "At Brilworks, our DevOps services are designed to guide you through a successful transformation, ensuring efficiency and reliability in your software development lifecycle.",
        imageSrc: "/images/v2/devops-implementation.webp",
        imageAlt: "Devops service img",
      },
      {
        title: "DevOps Automation",
        value: "devops-service-2",
        description:
          "Accelerate your testing, deployments, and feedback loops by designing and implementing robust CI/CD pipelines. Our expertise ensures you deliver value to your customers faster than ever before.",
        imageSrc: "/images/v2/devops-automation.webp",
        imageAlt: "Devops Automatic img",
      },
      {
        title: "DevOps Services",
        value: "devops-service-3",
        description:
          "Address your specific challenges, from infrastructure as code to containerization and cloud adoption. Our expert team deploys tailored solutions that drive tangible results for your unique requirements.",
        imageSrc: "/images/v2/devops-services.webp",
        imageAlt: "Devops services img",
      },
      {
        title: "DevOps Release Management",
        value: "devops-service-4",
        description:
          "Streamline your release process with automated deployments, rollback plans, and robust testing strategies. We assist you in achieving efficient and reliable releases.",
        imageSrc: "/images/v2/devops-release-management.webp",
        imageAlt: "Devops release mgmt img",
      },
      {
        title: "Continuous Integration & Delivery (CI/CD)",
        value: "devops-service-5",
        description:
          "Construct a seamless CI/CD pipeline integrating testing, builds, and deployments. Foster a culture of continuous improvement, accelerating your release cycles.",
        imageSrc: "/images/v2/continuous-integration-delivery.webp",
        imageAlt: "Devops CICD delivery img",
      },
      {
        title: "Deployment Services",
        value: "devops-service-6",
        description:
          "Eliminate manual deployments and ensure consistent, reliable rollouts across all environments. Gain peace of mind knowing that every release is executed flawlessly with our expert guidance.",
        imageSrc: "/images/v2/deployment-services.webp",
        imageAlt: "Devops service img",
      },
    ],
  };
  const whyChooseUsDevOpsData = {
    title: "Why Choose Brilworks?",
    benefits: [
      {
        title: "Streamlined Workflows",
        icon: "/images/v2/fi_17023504.svg",
        description:
          "Brilworks helps you automate manual tasks and set up CI/CD pipelines, leading to faster development cycles and fewer errors.",
      },
      {
        title: "Scalability and Flexibility",
        icon: "/images/v2/fi_8109512.svg",
        description:
          "Adapt your infrastructure and processes to dynamic requirements with ease and confidence.",
      },
      {
        title: "Expertise Across Technologies",
        icon: "/images/v2/why-n-2.svg",
        description:
          "Regardless of your tools – cloud platforms, containers, IaC – we have the expertise to handle your specific DevOps needs.",
      },
      {
        title: "Cost Optimization",
        icon: "/images/v2/fi_3621094.svg",
        description:
          "Streamline your DevOps practices for reduced waste and improved profitability, maximizing your bottom line.",
      },
      {
        title: "Improved Collaboration",
        icon: "/images/v2/fi_809522.svg",
        description:
          "We break down silos between Dev, Ops, and Security teams for smooth collaboration and enhanced efficiency.",
      },
      {
        title: "Proven Track Record",
        icon: "/images/v2/fi_10227466.svg",
        description:
          "Our expertise delivers demonstrably successful DevOps implementations, giving you peace of mind.",
      },
    ],
  };
  return (
    <>
      <ServiceHeroSection
        title="DevOps Consulting Services"
        description="We build you a smooth-running CI/CD pipeline, so you can ship updates faster, test smarter, deploy smoothly, and gain a competitive edge."
        buttonText="Let's Get Started"
        imageSrc="/images/v2/dev-ops-service-banner.webp"
      />
      <CTASection
        titleClass="md:w-[70%]"
        descriptionClass="md:w-4/5"
        title="Ship Faster, Test Smarter, Deploy Smoother: DevOps Consulting for Modern Businesses"
        description="We're a leading DevOps consulting service company dedicated to building high-performing software delivery pipelines that streamline your workflow, accelerate releases, and empower your teams. Our expert consultants work alongside your team to identify your unique challenges and design a pipeline tailored to address your unique needs. We leverage the latest tools and cutting-edge technologies, from GitLab CI/CD to containerization solutions, to create a system that aligns perfectly with your specific needs."
        buttonText="Let’s Discuss"
        darkBackground={false}
      />
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="service-section"
        serviceData={devOpsServices}
      />
      <MultipleCardWithIconBG
        bgClass="bg-sectionBG"
        data={whyChooseUsDevOpsData}
      />
      <Honors />
      <CTASection
        titleClass="md:w-[70%]"
        title="Transform your development, achieve DevOps success - Get your free Brilworks consultation today!"
        buttonText="Let's Get Started"
      />
      <TechStackWeUse />
      <IndustriesWeServe darkBackground={false} />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default WebAppDevelopmentService;
