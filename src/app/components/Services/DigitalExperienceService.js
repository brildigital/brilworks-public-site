"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import "../../styles/ServiceLightTheme.css";

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
            Digital Experience Services
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
            Digital <span style={{ color: "#2f6bff" }}>Experience</span>{" "}
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
            At Brilworks, we empower startups & businesses to spark and
            enhance their digital journeys with our comprehensive suite of
            digital experience services combined with intelligent solutions
            and engineering expertise.
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
      <TechStackWeUse />
      <ClientReviews light />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default DigitalExperienceService;
