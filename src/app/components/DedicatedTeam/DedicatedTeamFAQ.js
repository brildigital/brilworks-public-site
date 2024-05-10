"use client";
import React, { useState } from "react";
import FAQAccordion from "../Common/FAQAccordion";
import "../../styles/Services.scss";

const DedicatedTeamFAQ = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const faqs = [
    {
      question: "How do you ensure the security of our project?",
      answer:
        "We follow industry best practices for security, including secure coding, data encryption, and regular security audits, to safeguard your project from potential threats.",
    },
    {
      question:
        "2. Can we scale the team up or down based on project requirements?",
      answer:
        "Absolutely. Our flexible engagement model allows you to scale the team as needed, ensuring optimal resource utilization and cost-effectiveness.",
    },
    {
      question:
        "3. What level of involvement will we have in the development process?",
      answer:
        "We believe in collaborative development. You will have regular meetings, access to project management tools, and opportunities for feedback throughout the development cycle.",
    },
    {
      question: "4. What happens if we encounter issues post-launch?",
      answer:
        "Our support and maintenance services ensure that we're there for you even after the project is deployed. We provide timely assistance and updates to address any issues and keep your software running smoothly.",
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

export default DedicatedTeamFAQ;
