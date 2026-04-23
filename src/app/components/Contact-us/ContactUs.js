"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import ContactFormV2 from "../Homepage/ContactFormV2";
import Image from "next/image";
import ButtonV2 from "../Common/ButtonV2";

const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const GradientFAQAccordion = dynamic(() =>
  import("../Common/GradientFAQAccordion")
);

const ContactUs = () => {
  const [openFaq, setOpenFaq] = useState(0);

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
      <section className="portfolio-hero">
        <div className="portfolio-hero-bg"></div>
        <div className="portfolio-hero-grid"></div>
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2] pt-[120px] pb-16">
          <div className="flex flex-col md:flex-row items-stretch justify-start lg:gap-12 md:gap-10 gap-6">
            <h1 className="sr-only">Contact Us</h1>

            {/* Left: Copy + Form */}
            <div className="md:w-[55%] w-full">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 bg-[rgba(26,92,204,0.15)] border border-[rgba(26,92,204,0.3)] rounded-full px-[14px] py-[6px] text-[#00b4d8] text-xs font-semibold tracking-[0.1em] !mb-6">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
                FREE CONSULTATION
              </span>

              <h2
                className="font-extrabold text-white tracking-[-1px] leading-[1.15] !mb-4"
                style={{ fontSize: "clamp(28px, 3vw, 44px)" }}
              >
                Get a Free Project Estimate in 24 Hours
              </h2>
              <p className="text-white/60 text-[17px] leading-[1.6] !mb-6 max-w-[560px]">
                Share your idea. We&apos;ll respond with a plan, timeline, and
                price — no obligation.
              </p>

              {/* Positive trust items */}
              <div className="text-white grid md:grid-cols-3 grid-cols-1 gap-3 !mb-8">
                <div className="flex gap-2 items-center">
                  <Image
                    className="w-5 h-5"
                    src="/images/v2/white-tick-icon.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <span className="text-sm text-white/80">
                    24-hour response
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    className="w-5 h-5"
                    src="/images/v2/white-tick-icon.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <span className="text-sm text-white/80">
                    Free consultation
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    className="w-5 h-5"
                    src="/images/v2/white-tick-icon.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <span className="text-sm text-white/80">
                    NDA on request
                  </span>
                </div>
              </div>

              <ContactFormV2 darkMode={true} />
            </div>

            {/* Right: What happens next */}
            <div className="md:w-[45%] w-full flex flex-col justify-center bg-white/[0.03] rounded-2xl border border-white/10 gap-6 md:p-7 p-5 backdrop-blur-[10px]">
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#00b4d8]">
                What Happens Next
              </p>
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-start justify-start"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full text-white bg-themeColor text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-[15px] text-white font-semibold leading-tight">
                      {step.title}
                    </p>
                    <p className="text-[13px] text-white/60 mt-1 leading-[1.5] font-light">
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
      <section className="bg-[#0d0f1a] border-t border-white/10">
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/[0.08] rounded-xl overflow-hidden border border-white/[0.08]">
            {stats.map(({ value, label }, index) => (
              <div
                key={index}
                className="bg-white/[0.03] py-6 px-5 text-center"
              >
                <div className="text-white text-[26px] md:text-[32px] font-extrabold tracking-[-0.5px] leading-none">
                  {value}
                </div>
                <div className="text-white/50 text-[12px] md:text-[13px] mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <ClientReviews />

      {/* FAQ */}
      <section className="main-section-padding bg-[#fafafa]">
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-themeColor inline-block !mb-3">
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
        <div className="flex items-center justify-between md:flex-row flex-col gap-4 bg-[#f2f9fe] border border-[#e5e7eb] rounded-2xl p-6 md:p-7">
          <div>
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-themeColor !mb-1">
              Looking for a Job?
            </p>
            <p className="text-base md:text-lg text-[#212121]">
              Career inquiries:{" "}
              <a
                href="mailto:hr@brilworks.com"
                className="text-themeColor font-semibold hover:underline"
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
