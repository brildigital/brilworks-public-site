"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import "../../styles/ServiceLightTheme.css";

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
      {/* HERO */}
      <section
        className="relative overflow-hidden svc-hero-bg text-center"
        style={{ padding: "120px 0 80px" }}
      >
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 780 }}>
          <span
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 text-[12px] font-semibold uppercase border"
            style={{
              background: "#ffffff",
              borderColor: "#e4eaf1",
              color: "#566678",
              letterSpacing: "0.1em",
              boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)",
            }}
          >
            ERPNext Development Services
          </span>
          <h1
            className="font-extrabold mb-5"
            style={{
              fontSize: "clamp(34px, 4vw, 54px)",
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
              color: "#0b1e33",
            }}
          >
            <span style={{ color: "#2f6bff" }}>ERPNext</span> Development
            Services
          </h1>
          <p
            className="mb-8 mx-auto"
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: "#566678",
              maxWidth: 620,
            }}
          >
            At Brilworks, we are passionate about helping businesses leverage
            the full potential of ERPNext. Our team of ERPNext development
            experts possesses the knowledge, experience, and innovation to
            transform your business operations.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Link
              href="/contact-us/"
              className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background: "#2f6bff",
                color: "#fff",
                border: "1px solid #2f6bff",
                padding: "16px 32px",
                fontSize: 16,
              }}
            >
              Let&apos;s Get Started <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
      <Honors />
      <ClientReviews light />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default ERPNextDevService;
