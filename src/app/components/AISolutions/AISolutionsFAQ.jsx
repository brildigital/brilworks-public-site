"use client";
import React from "react";

const AISolutionsFAQ = ({ faqData }) => {
  return (
    <section className="py-16 md:py-24" style={{ background: "#f8f9ff" }}>
      <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
        {/* Header */}
        <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
          <span
            className="inline-block mb-4"
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#7c3aed",
            }}
          >
            Common Questions
          </span>
          <h2
            className="font-extrabold"
            style={{
              fontSize: "clamp(28px, 3.2vw, 42px)",
              letterSpacing: "-1px",
              lineHeight: 1.15,
              color: "#0d0f1a",
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div
          className="mx-auto"
          itemScope
          itemType="https://schema.org/FAQPage"
          style={{ maxWidth: 860 }}
        >
          {faqData?.map(({ Question, Answer }, i) => (
            <details
              key={i}
              className="group overflow-hidden mb-3 transition-all"
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 12,
              }}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <summary
                className="list-none flex items-center justify-between gap-4 cursor-pointer"
                style={{
                  padding: "22px 28px",
                  fontWeight: 600,
                  fontSize: 16,
                  color: "#0d0f1a",
                }}
                itemProp="name"
              >
                <span>{Question}</span>
                <span
                  className="transition-transform duration-200 group-open:rotate-45 flex-shrink-0"
                  style={{ color: "#7c3aed", fontSize: 24, fontWeight: 400, lineHeight: 1 }}
                >
                  +
                </span>
              </summary>
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div
                  itemProp="text"
                  style={{
                    padding: "0 28px 24px",
                    color: "#6b7280",
                    fontSize: 15,
                    lineHeight: 1.7,
                  }}
                >
                  {Answer}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISolutionsFAQ;
