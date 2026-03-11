"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";

const Honors = dynamic(() => import("../Homepage/Honors"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const BusinessDevelopmentService = () => {
  const BusinessIntelligenceServiceData = [
    {
      title: "BI Strategy & Roadmap Development",
      value: "value-1",
      description:
        "We work collaboratively to define your BI goals, assess your data landscape, and create a customized roadmap for success.",
      imageSrc: "/images/bi-1.webp",
      imageAlt: "Custom Module Development img",
    },
    {
      title: "Data Lake & Data Warehouse Architecture",
      value: "value-1",
      description:
        "We design and implement robust data storage solutions tailored to your specific needs and scalability requirements.",
      imageSrc: "/images/bi-2.webp",
      imageAlt: "Automation img",
    },
    {
      title: "Self-Service BI & Data Governance",
      value: "value-1",
      description:
        "We empower your users with self-service BI tools while establishing robust data governance frameworks for data security and quality.",
      imageSrc: "/images/bi-4.webp",
      imageAlt: "Data Migration img",
    },
    {
      title: "Custom Analytics Dashboard Development",
      value: "value-1",
      description:
        "Our team creates interactive dashboards tailored to your KPIs, providing real-time insights at your fingertips.",
      imageSrc: "/images/bi-5.webp",
      imageAlt: "Custom Reporting img",
    },
    {
      title: "Predictive Analytics & Machine Learning",
      value: "value-1",
      description:
        "We leverage advanced analytics and machine learning to uncover hidden patterns, predict future trends, and optimize business processes.",
      imageSrc: "/images/bi-6.webp",
      imageAlt: "Comprehensive Support dev img",
    },
    {
      title: "Power BI & Tableau Expertise",
      value: "value-1",
      description:
        "Our team is proficient in leading BI platforms like Power BI and Tableau to deliver the best solution for your organization.",
      imageSrc: "/images/bi-7.webp",
      imageAlt: "Comprehensive Support dev img",
    },
  ];

  const whyChooseUsBusinessIntelligence = [
    {
      title: "Advanced Analytics",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "We go beyond basic reporting, employing machine learning and artificial intelligence (AI) to uncover hidden patterns and predict future trends.",
    },
    {
      title: "Stay Ahead of the Curve",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "Our team constantly explores and implements the latest BI tools and technologies to ensure you have a future-proof solution.",
    },
    {
      title: "Real-Time Analytics",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "Leverage the power of in-memory computing and real-time data pipelines for instant insights that fuel faster decision-making.",
    },
    {
      title: "Exceptional User Experiences",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "Our data visualization experts create intuitive and interactive dashboards that bring your data to life for users of all technical abilities.",
    },
  ];
  return (
    <>
      <ServiceHeroSection
        title="Business Intelligence Services"
        description="We provide a comprehensive suite of business intelligence services to transform your raw data into actionable insights and empower your organization with expert business intelligence (BI) services."
        buttonText="Talk to an Expert"
      />

      <Honors />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default BusinessDevelopmentService;
