"use client";
import React from "react";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";

const faqs = [
  {
    question: "What is a Snowflake partner, and why choose Brilworks?",
    answer:
      "A Snowflake partner is a firm certified to design, build, and optimize on the platform. Brilworks brings hands-on depth across migrations, pipelines, and cost work, with engineers who have shipped Snowflake in production, not just trained on it.",
  },
  {
    question: "How long does a Snowflake migration take?",
    answer:
      "It depends on source complexity and data volume, but most migrations run in fixed, scoped phases rather than one open-ended project. We reconcile data as we go so nothing is lost in the cutover.",
  },
  {
    question: "How much can you cut our Snowflake costs?",
    answer:
      "In most engagements a 20 to 40 percent reduction is achievable, through warehouse right-sizing, auto-suspend, and query tuning, without losing what the business gets from the platform.",
  },
  {
    question: "Do you support AI and ML workloads on Snowflake?",
    answer:
      "Yes. We prepare clean, governed data and the modeling layer that AI and ML workloads depend on, so the models you build on Snowflake have data they can trust.",
  },
  {
    question: "Which clouds does this work on?",
    answer:
      "Snowflake runs on AWS, Azure, and GCP. We work on whichever cloud you already run, so there is no migration off your existing environment.",
  },
  {
    question: "Do you offer ongoing managed services?",
    answer:
      "Yes. Beyond the initial build or migration, we offer continuous monitoring, performance tuning, and optimization to keep the platform healthy and the bill in check.",
  },
];

const SnowflakeFAQ = () => {
  return (
    <div className="bg-white" id="faq">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="mb-9 reveal">
          <span className="flex items-center gap-[9px] font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-themeColor mb-4">
            Common questions
          </span>
          <h2
            className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.06] text-[#0B1020]"
            style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
          >
            Frequently asked questions
          </h2>
        </div>

        <div className="reveal">
          {faqs.map((faq, i) => (
            <GradientFAQAccordion
              key={i}
              id={`snowflake-${i}`}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SnowflakeFAQ;
