"use client";
import React, { useState } from "react";
import FAQAccordion from "../Common/FAQAccordion";
import "../../styles/Services.scss";

const DigitalAccelerationFAQ = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const faqs = [
    {
      question: "1. How do you ensure alignment with our business objectives?",
      answer:
        "Our digital experts work closely with your team to understand your business goals and challenges, ensuring that our solutions are strategically aligned with your objectives.",
    },
    {
      question:
        "2. What technologies do you leverage for digital acceleration?",
      answer:
        "We harness a wide range of technologies, including AI, cloud computing, IoT, blockchain, and more, to drive innovation and digital transformation for our clients",
    },
    {
      question:
        "3. How do you measure the success of digital acceleration initiatives?",
      answer:
        "We establish key performance indicators (KPIs) and metrics aligned with your business goals to track the success and impact of our digital acceleration efforts.",
    },
    {
      question:
        "4. Can you provide ongoing support and maintenance post-implementation?",
      answer:
        "Yes, we offer comprehensive support and maintenance services to ensure the continued success and optimization of your digital initiatives post-implementation.",
    },
  ];

  return (
    <div className="px-[70px] faq-bottom md:!mb-[5rem] !mb-8 pt-0">
      <div className="solutions md:text-center text-left">
        <h2 className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px] md:py-10 pb-8">
          FAQs
        </h2>
      </div>
      <div className="reveal">
        <div itemScope="true" itemType="https://schema.org/FAQPage">
          {faqs.map(({ question, answer }, index) => (
            <FAQAccordion
              key={index + 1}
              id={index + 1}
              question={question}
              answer={answer}
              open={open}
              handleOpen={handleOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalAccelerationFAQ;
