"use client";
import React, { useState } from "react";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";
import Heading from "../HTMLComponents/Heading";

const AISolutionsFAQ = ({ faqData }) => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="container max-w-[1280px] main-section-padding mx-auto">
      <Heading
        type="h2"
        className="lg:!text-[34px] md:!text-3xl !text-2xl"
        text="Frequently Asked Questions"
      />

      <div className="slg:pt-10 md:pt-7.5 pt-5">
        <div itemScope="true" itemType="https://schema.org/FAQPage">
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
    </div>
  );
};

export default AISolutionsFAQ;
