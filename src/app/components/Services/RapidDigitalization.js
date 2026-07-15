import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTASection from "../Common/CTASection";
import { serviceStats } from "@/data/serviceStats";
import "../../styles/ServiceLightTheme.css";

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
      {/* HERO */}
      <section
        className="relative overflow-hidden svc-hero-bg"
        style={{ padding: "120px 0 80px" }}
      >
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-[60px] items-center">
            <div>
              <h1
                className="font-extrabold mb-5"
                style={{
                  fontSize: "clamp(34px, 4vw, 54px)",
                  letterSpacing: "-1.5px",
                  lineHeight: 1.1,
                  color: "#0b1e33",
                }}
              >
                Unlock{" "}
                <span style={{ color: "#2f6bff" }}>Digital Potential</span>{" "}
                with Our Acceleration Services
              </h1>
              <p
                className="mb-8"
                style={{
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: "#566678",
                  maxWidth: 580,
                }}
              >
                Our team is dedicated to driving innovation, efficiency, and
                growth through strategic digital initiatives tailored to your
                unique business objectives.
              </p>
              <div className="flex flex-wrap gap-3.5 my-10">
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
                  Explore Digital Acceleration Services{" "}
                  <ArrowRight size={16} strokeWidth={2} />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {serviceStats.map((s) => (
                  <div
                    key={s.description}
                    className="rounded-2xl transition-all svc-stat-card"
                    style={{ padding: "28px 24px" }}
                  >
                    <div
                      className="font-extrabold leading-none mb-2"
                      style={{
                        color: "#2f6bff",
                        fontSize: "clamp(32px, 3vw, 42px)",
                        letterSpacing: "-1px",
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        color: "#6b7a8a",
                        fontSize: 13,
                        fontWeight: 500,
                        lineHeight: 1.4,
                      }}
                    >
                      {s.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
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
        darkBackground={false}
      />
      <ClientReviews light />
      <TechStackWeUse />
      <ServicesFAQ />
    </>
  );
};

export default RapidDigitalization;
