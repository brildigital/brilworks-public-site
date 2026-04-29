"use client";
import { useRef, useState } from "react";

const GradientFAQAccordion = ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const panelId = `faq-answer-${id}`;

  return (
    <div
      className="mb-3 overflow-hidden"
      style={{
        background: "#fff",
        border: `1px solid ${isOpen ? "#017eeb" : "#e5e7eb"}`,
        borderRadius: 12,
        transition: "border-color 0.25s ease",
      }}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 text-left"
        style={{ padding: "22px 28px", fontWeight: 600, fontSize: 16, color: "#0d0f1a", background: "none", border: "none", cursor: "pointer" }}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <h2 itemProp="name" className="font-Figtree text-left">{question}</h2>
        <span
          aria-hidden="true"
          style={{
            color: "#017eeb",
            fontSize: 24,
            fontWeight: 400,
            lineHeight: 1,
            flexShrink: 0,
            display: "inline-block",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >+</span>
      </button>
      <div
        id={panelId}
        role="region"
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <div
          itemProp="text"
          style={{ padding: "0 28px 24px", color: "#6b7280", fontSize: 15, lineHeight: 1.7 }}
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

export default GradientFAQAccordion;
