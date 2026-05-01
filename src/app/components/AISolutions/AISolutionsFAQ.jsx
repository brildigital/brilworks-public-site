"use client";
import React, { useState } from "react";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";

const AISolutionsFAQ = ({ faqData }) => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

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
          {faqData?.map(({ Question, Answer }, index) => (
            <GradientFAQAccordion
              key={index + 1}
              id={index + 1}
              question={Question}
              answer={Answer}
              open={open}
              handleOpen={handleOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISolutionsFAQ;
