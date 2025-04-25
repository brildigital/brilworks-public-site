"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";

const Honors = dynamic(() => import("../Homepage/Honors"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const ERPNextDevService = () => {
  const ERPNextDevServiceData = [
    {
      title: "Custom Module Development",
      value: "value-1",
      description:
        "Build functionalities unique to your business processes that go beyond ERPNext's default features.",
      imageSrc: "/images/erp-next-1.webp",
      imageAlt: "Custom Module Development img",
    },
    {
      title: "Workflow Automation",
      value: "value-1",
      description:
        "Streamline complex workflows and eliminate repetitive tasks with custom automation solutions.",
      imageSrc: "/images/erp-next-2.webp",
      imageAlt: "Automation img",
    },
    {
      title: "Seamless Integrations",
      value: "value-1",
      description:
        "Connect ERPNext to your existing CRM, e-commerce platform, or accounting software for a unified data flow.",
      imageSrc: "/images/erp-next-3.webp",
      imageAlt: "Seamless Integrations img",
    },
    {
      title: "Data Migration & Security",
      value: "value-1",
      description:
        "Migrate your data smoothly from legacy systems and implement robust security measures to safeguard your information.",
      imageSrc: "/images/erp-next-4.webp",
      imageAlt: "Data Migration img",
    },
    {
      title: "Custom Reporting & Dashboards",
      value: "value-1",
      description:
        "Gain deeper business insights with custom reports and dashboards tailored to your specific needs.",
      imageSrc: "/images/erp-next-5.webp",
      imageAlt: "Custom Reporting img",
    },
    {
      title: "Comprehensive Support & Maintenance",
      value: "value-1",
      description:
        "Benefit from expert guidance during implementation, ongoing technical support, and regular system maintenance for optimal performance.",
      imageSrc: "/images/erp-next-6.webp",
      imageAlt: "Comprehensive Support dev img",
    },
  ];

  const whyChooseUsERPNextDev = [
    {
      title: "Expert Storytellers",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "We're not just data visualization developers; we're data storytellers. We go beyond creating charts and graphs; we craft compelling narratives that resonate with your audience and drive action.",
    },
    {
      title: "Unmatched Tool Expertise",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "We are well-versed in industry-leading platforms like Power BI and Tableau, allowing us to tailor solutions that perfectly match your specific needs and data ecosystem.",
    },
    {
      title: "Actionable Insights, Delivered",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "Our focus is on delivering actionable insights, not just beautiful dashboards. We work closely with you to understand your business goals and translate data into clear, actionable recommendations.",
    },
    {
      title: "Data Visualization with Impact",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "We don't just develop dashboards; we design them for impact. Our team creates visually stunning and interactive dashboards that are easy to understand and navigate, ensuring maximum user engagement.",
    },
    {
      title: "Agile & Collaborative Approach",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "We believe in a collaborative approach, working closely with your team throughout the development process to ensure your vision comes to life.",
    },
  ];
  return (
    <>
      <ServiceHeroSection
        title="ERPNext Development Services"
        description="At Brilworks, we are passionate about helping businesses leverage the full potential of ERPNext. Our team of ERPNext development experts possesses the knowledge, experience, and innovation to transform your business operations."
        buttonText="Let’s Get Started"
      />
      <Honors />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default ERPNextDevService;
