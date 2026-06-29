"use client";
import React from "react";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";

const faqs = [
  {
    question: "What is a Databricks partner, and why choose Brilworks?",
    answer:
      "A Databricks partner is a firm certified to design, build, and run on the lakehouse. Brilworks brings certified engineers who have shipped Spark, Delta, and ML in production across fintech, healthcare, and manufacturing, not just teams who trained on the platform.",
  },
  {
    question: "How long does a Databricks migration take?",
    answer:
      "Most migrations run 8 to 16 weeks depending on data volume and how many pipelines and downstream systems depend on the old setup. We migrate in phases and run the old platform in parallel, so you move when you trust the new one, not before.",
  },
  {
    question: "Can you take our ML models to production?",
    answer:
      "Yes. This is where most projects stall. We build the MLOps around your models with MLflow, feature stores, and serving pipelines, so they get deployed, monitored, and stay reproducible instead of dying in a notebook.",
  },
  {
    question: "Do you build GenAI and RAG systems on Databricks?",
    answer:
      "Yes. We build agents, RAG, and LLM applications on Mosaic AI, grounded in your own governed data through Unity Catalog. That keeps answers tied to your data instead of a generic model guessing.",
  },
  {
    question: "How do you keep Databricks costs under control?",
    answer:
      "We right-size clusters, tune Spark jobs, set auto-termination, and cut idle compute. Databricks bills on usage, so most savings come from jobs that were over-provisioned or running longer than they need to.",
  },
  {
    question: "Which clouds does this run on?",
    answer:
      "Databricks runs on AWS, Azure, and GCP, and we deliver on all three. We work in whichever cloud you already use, so there's no forced migration to a new provider.",
  },
];

const DatabricksFAQ = () => {
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
              id={`databricks-${i}`}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DatabricksFAQ;
