"use client";
import React from "react";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";

const faqs = [
  {
    question: "What are data engineering services?",
    answer:
      "Data engineering services cover the pipelines, warehouse, and modeling that move data from raw sources into something your teams can query and trust. Brilworks delivers this on Snowflake and Databricks, including migration, cost optimization, and the AI-ready data layer that sits on top.",
  },
  {
    question: "How much do data engineering services cost?",
    answer:
      "It depends on scope. Our Cost-Optimization Audit is fixed-price and usually pays for itself. Larger builds and migrations are scoped per project, and staff augmentation is monthly per engineer. We give you a clear price before any work starts.",
  },
  {
    question: "How long does a pipeline or migration take?",
    answer:
      "Most work runs in fixed, scoped phases rather than one open-ended project. A first trustworthy result often lands in weeks, and migrations are reconciled table by table before cutover so nothing is lost.",
  },
  {
    question: "Do you work on Snowflake, Databricks, or both?",
    answer:
      "Both. Our engineers are certified on each, and we pick the platform that fits your workload rather than the one we would rather sell. Many clients run both.",
  },
  {
    question: "Which cloud do you build on?",
    answer:
      "Yours. We work on your existing AWS, Azure, or GCP environment, and you own the whole stack and the repo when the engagement ends.",
  },
  {
    question: "Do you offer ongoing support after the build?",
    answer:
      "Yes. Beyond the initial build or migration, we offer managed services: monitoring, performance tuning, and proactive cost control, so the platform stays fast and cheap to run.",
  },
];

const DataEngineeringFAQ = () => {
  return (
    <div className="bg-white" id="faq">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="mb-9 reveal">
          <span className="flex items-center gap-[9px] font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-themeColor mb-4">
            <span className="w-[22px] h-[1px] bg-themeColor inline-block"></span>
            Common questions
          </span>
          <h2
            className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.06] text-[#0B1020]"
            style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
          >
            Data engineering services, answered
          </h2>
        </div>

        <div className="reveal">
          {faqs.map((faq, i) => (
            <GradientFAQAccordion
              key={i}
              id={`data-eng-${i}`}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataEngineeringFAQ;
