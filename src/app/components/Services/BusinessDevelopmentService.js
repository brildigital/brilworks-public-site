"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import DevOpsShipFaster from "./DevOpsShipFaster";
import Button from "../Common/Button";

const Honors = dynamic(() => import("../Homepage/Honors"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const ServicesWhyChooseUs = dynamic(() => import("./ServicesWhyChooseUs"));
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
      title: "Advanced Data Integration & Cleansing",
      value: "value-1",
      description:
        "Our experts ensure your data is accurate, consistent, and ready for analysis through cutting-edge integration and cleansing techniques.",
      imageSrc: "https://a.storyblok.com/f/219851/640x505/f19d442ca9/bi-3.webp",
      imageAlt: "Seamless Integrations img",
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
  return (
    <div className="services pt-[4rem] mx-auto">
      <div>
        <div className="relative">
          <div className="home_sec1_img">
            <div className="banner-bg w-full block md:hidden h-[600px]"></div>
            <Image
              className="w-full md:block hidden h-auto"
              src="https://a.storyblok.com/f/219851/1440x796/0d87546e9e/business-dev-banner.webp"
              alt="Business Intelligence banner"
              width="1440"
              height="796"
              priority
              sizes="(max-width: 767px) 550px, 1440px"
            />
          </div>
          <div className="sec1_txt_position !left-[5%] lg:!top-[40%]">
            <h1 className="mb-[30px] w-full md:w-3/5">
              Business Intelligence Services
            </h1>
            <p className="!text-colorGray !mb-10 w-full md:w-1/2">
              We provide a comprehensive suite of business intelligence services
              to transform your raw data into actionable insights and empower
              your organization with expert business intelligence (BI) services.
            </p>
            <Button label="Talk to an Expert" />
          </div>
        </div>
      </div>
      <ServicesWhyChooseUs />
      <Honors />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </div>
  );
};

export default BusinessDevelopmentService;
