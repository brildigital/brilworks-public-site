"use client";
import React, { useState } from "react";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";

const AISolutionsFAQ = ({ faqData }) => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="xl:pb-[6rem] md:pb-[4rem] pb-8 xl:px-[5%] md:px-8 px-4">
      <div className="container max-w-[1280px] mx-auto">
        <div className="md:w-[90%] w-full mx-auto faq-bottom">
          <div className="service_sec3 md:text-center text-left solutions">
            <h2 className="xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px] md:pb-10 pb-8">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="">
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
      </div>
    </div>
  );
};

export default AISolutionsFAQ;
