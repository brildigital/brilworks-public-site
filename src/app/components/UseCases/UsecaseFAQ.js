"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Icon } from "../lib/commonFunction";

const Accordion = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.Accordion)
);
const AccordionHeader = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.AccordionHeader)
);
const AccordionBody = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.AccordionBody)
);

const UsecaseFAQ = () => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const StaffAugmentationFAQData = [
    {
      question: "1. What is an IT staff augmentation?",
      answer:
        "TIT staff augmentation is the practice of supplementing your existing IT team with temporary or permanent IT professionals. This can help you address specific skill gaps, manage workload fluctuations, and complete projects on time and within budget. By leveraging IT staff augmentation, your business can gain access to a wider talent pool, improve operational efficiency, and achieve your IT goals more effectively.",
    },
    {
      question: "2. What are the costs associated with IT staff augmentation?",
      answer:
        "The cost of IT staff augmentation will vary depending on the experience level of the professionals you need, the duration of the engagement, and your location.",
    },
    {
      question:
        "3. What IT staff augmentation models and pricing options do you offer?",
      answer: `We understand the importance of flexibility. That's why we offer three different IT staff augmentation models to fit your project needs and budget: Dedicated Developer (monthly basis), Hourly Basis (pay-as-you-go), and Time and Material (T&M) Model (transparent cost estimation).`,
    },
  ];

  return (
    <div className="container w-full mx-auto md:pt-20 pt-10 lg:px-[70px] xl:px-[96px] px-6 faq-bottom">
      <div className="text-center">
        <h2 className="text-center mb-8 py-1">FAQs</h2>
      </div>

      <div>
        <div itemScope="true" itemType="https://schema.org/FAQPage">
          {StaffAugmentationFAQData?.map(({ question, answer }, index) => (
            <Accordion
              key={index + 1}
              open={open === index + 1}
              icon={<Icon id={index + 1} open={open} />}
              className={`accordion-item !mb-0  ${
                open === index + 1 ? "bg-themeLight" : "bg-colorWhite"
              }`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <AccordionHeader
                onClick={() => handleOpen(index + 1)}
                className="accordion-button"
              >
                <h3
                  itemProp="name"
                  className="md:!text-2xl !text-xl font-Inter"
                >
                  {question}
                </h3>
              </AccordionHeader>
              <AccordionBody>
                <div
                  className="accordion-body"
                  itemScope="true"
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p
                    style={{ whiteSpace: "pre-wrap" }}
                    itemProp="text"
                    className="md:!text-xl !text-lg text-colorGray"
                  >
                    {answer}
                  </p>
                </div>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsecaseFAQ;
