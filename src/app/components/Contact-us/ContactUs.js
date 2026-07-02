"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { Check } from "lucide-react";
import { scrollEffect } from "../lib/commonFunction";
import ContactFormV2 from "../Homepage/ContactFormV2";
import ButtonV2 from "../Common/ButtonV2";
import "../../styles/ServiceLightTheme.css";

const SERVICE_CONTEXT = {
  "replit-migration": {
    badge: "MIGRATION SUPPORT",
    heading: "Let Us Handle Your Replit Migration",
    subtitle: "Tell us about your app and we'll map the fastest path to production — dependencies, database, secrets, CI/CD, all handled.",
  },
  "migration-assessment": {
    badge: "FREE ASSESSMENT",
    heading: "Get a Free Migration Assessment",
    subtitle: "Share your stack details and we'll recommend the right platform — with a clear timeline and cost estimate.",
  },
  "migration-cost": {
    badge: "COST ESTIMATE",
    heading: "See What Your Migration Would Cost",
    subtitle: "We'll audit your project, recommend the right platform, and give you a fixed-price migration estimate — free, no strings.",
  },
  "cloud-migration": {
    badge: "CLOUD MIGRATION",
    heading: "Plan Your Cloud Migration With Experts",
    subtitle: "From AWS to Vercel to Render — we'll assess your infrastructure needs and build a migration roadmap.",
  },
  "mvp-to-production": {
    badge: "MVP TO PRODUCTION",
    heading: "Take Your MVP to Production",
    subtitle: "We've helped 50+ teams move from prototyping tools to production-grade infrastructure. Let's plan yours.",
  },
};

const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const GradientFAQAccordion = dynamic(() =>
  import("../Common/GradientFAQAccordion")
);

const ContactUs = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");
  const ctx = SERVICE_CONTEXT[serviceParam] || null;

  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  const steps = [
    {
      title: "We Respond in 24 Hours",
      description:
        "Our team reaches out within 24 business hours with a project review.",
    },
    {
      title: "Share Your Requirements",
      description:
        "Discuss your idea with our technical team. NDA signed on request.",
    },
    {
      title: "Get a Detailed Proposal",
      description:
        "Receive a project plan with timeline, cost, and milestones.",
    },
    {
      title: "Kick Off Your Project",
      description:
        "Dedicated team assigned, with weekly demos and full transparency.",
    },
  ];

  const stats = [
    { value: "120+", label: "Projects Shipped" },
    { value: "20+", label: "Countries Served" },
    { value: "5★", label: "Clutch Rating" },
    { value: "24hr", label: "Response Time" },
  ];

  const faqs = [
    {
      question: "How much does a typical project cost?",
      answer:
        "Cost depends on scope, complexity, and features. Small MVPs start at $15K, while enterprise platforms range from $80K-$250K+. We provide detailed estimates after understanding your requirements — free, no obligation.",
    },
    {
      question: "How quickly will I hear back after submitting the form?",
      answer:
        "Our team responds within 24 business hours with a review of your project and next steps. For urgent inquiries, email sales@brilworks.com or call +91 9313644148.",
    },
    {
      question: "Do you sign NDAs before discussing the project?",
      answer:
        "Yes. We're happy to sign an NDA before you share any sensitive project details. Just let us know in the form and we'll send one over.",
    },
    {
      question: "What happens after I submit the form?",
      answer:
        "1) We respond within 24 hours, 2) Schedule a free 30-minute consultation, 3) Share a detailed proposal with timeline and cost, 4) Sign NDA and begin the project. No commitment required at any stage.",
    },
    {
      question: "Do you work with startups and enterprise clients?",
      answer:
        "Yes. We've delivered 120+ projects across 20 countries — from early-stage startups building MVPs to enterprise teams scaling production systems.",
    },
  ];

  const handleFaqOpen = (value) =>
    setOpenFaq(openFaq === value ? 0 : value);

  return (
    <>
      {/* Hero with form */}
      <section className="relative overflow-hidden svc-hero-bg">
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2] pt-[120px] pb-16">
          <div className="flex flex-col md:flex-row items-stretch justify-start lg:gap-12 md:gap-10 gap-6">
            <h1 className="sr-only">Contact Us</h1>

            {/* Left: Copy + Form */}
            <div className="md:w-[55%] w-full">
              {/* Badge */}
              <span
                className="inline-flex items-center gap-2 rounded-full px-[14px] py-[6px] text-xs font-semibold tracking-[0.1em] !mb-6 border"
                style={{ background: "#ffffff", borderColor: "#e4eaf1", color: "#566678", boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)" }}
              >
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
                {ctx?.badge || "FREE CONSULTATION"}
              </span>

              <h2
                className="font-extrabold tracking-[-1px] leading-[1.15] !mb-4"
                style={{ fontSize: "clamp(28px, 3vw, 44px)", color: "#0b1e33" }}
              >
                {ctx?.heading || "Get a Free Project Estimate in 24 Hours"}
              </h2>
              <p className="text-[17px] leading-[1.6] !mb-6 max-w-[560px]" style={{ color: "#566678" }}>
                {ctx?.subtitle || "Share your idea. We'll respond with a plan, timeline, and price — no obligation."}
              </p>

              {/* Positive trust items */}
              <div className="grid md:grid-cols-3 grid-cols-1 gap-3 !mb-8">
                <div className="flex gap-2 items-center">
                  <Check size={18} style={{ color: "#16a34a" }} />
                  <span className="text-sm" style={{ color: "#566678" }}>
                    24-hour response
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <Check size={18} style={{ color: "#16a34a" }} />
                  <span className="text-sm" style={{ color: "#566678" }}>
                    Free consultation
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <Check size={18} style={{ color: "#16a34a" }} />
                  <span className="text-sm" style={{ color: "#566678" }}>
                    NDA on request
                  </span>
                </div>
              </div>

              <ContactFormV2 darkMode={false} />
            </div>

            {/* Right: What happens next */}
            <div
              className="md:w-[45%] w-full flex flex-col justify-center rounded-2xl gap-6 md:p-7 p-5"
              style={{ background: "#ffffff", border: "1px solid #e4eaf1", boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)" }}
            >
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase" style={{ color: "#2f6bff" }}>
                What Happens Next
              </p>
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-start justify-start"
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full text-white text-sm font-bold flex items-center justify-center"
                    style={{ background: "#2f6bff" }}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold leading-tight" style={{ color: "#0b1e33" }}>
                      {step.title}
                    </p>
                    <p className="text-[13px] mt-1 leading-[1.5] font-light" style={{ color: "#566678" }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="svc-dark-section-bg" style={{ borderTop: "1px solid #e4eaf1" }}>
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto py-10">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-[1px] rounded-xl overflow-hidden"
            style={{ background: "#e4eaf1", border: "1px solid #e4eaf1" }}
          >
            {stats.map(({ value, label }, index) => (
              <div
                key={index}
                className="py-6 px-5 text-center"
                style={{ background: "#ffffff" }}
              >
                <div className="text-[26px] md:text-[32px] font-extrabold tracking-[-0.5px] leading-none" style={{ color: "#0b1e33" }}>
                  {value}
                </div>
                <div className="text-[12px] md:text-[13px] mt-1" style={{ color: "#6b7a8a" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <ClientReviews light />

      {/* FAQ */}
      <section className="main-section-padding" style={{ background: "#ffffff" }}>
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase inline-block !mb-3" style={{ color: "#2f6bff" }}>
              FAQ
            </span>
            <h2 className="lg:text-[44px] md:text-[36px] text-[30px] font-extrabold leading-[1.1] tracking-[-1px] text-[#0d0f1a]">
              Common Questions
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto">
            {faqs.map(({ question, answer }, index) => (
              <GradientFAQAccordion
                key={index + 1}
                id={index + 1}
                question={question}
                answer={answer}
                open={openFaq}
                handleOpen={handleFaqOpen}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Career card */}
      <section className="container max-w-[1280px] md:px-10 px-5 mx-auto py-10">
        <div className="flex items-center justify-between md:flex-row flex-col gap-4 bg-[#f1f5fb] border border-[#e5e7eb] rounded-2xl p-6 md:p-7">
          <div>
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase !mb-1" style={{ color: "#2f6bff" }}>
              Looking for a Job?
            </p>
            <p className="text-base md:text-lg text-[#212121]">
              Career inquiries:{" "}
              <a
                href="mailto:hr@brilworks.com"
                className="font-semibold hover:underline"
                style={{ color: "#2f6bff" }}
              >
                hr@brilworks.com
              </a>
            </p>
          </div>
          <ButtonV2
            size="medium"
            redirect="/career/"
            className="hover:text-themeColor"
            label="Search Openings"
          />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
