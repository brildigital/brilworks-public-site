"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";
import Heading from "../HTMLComponents/Heading";
import { faqsByPathname } from "@/data/serviceFaqs";

const ServicesFAQ = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const servicesFAQData = faqsByPathname[pathname] || {};

  return (
    <div className="container max-w-[1280px] main-section-padding-bottom mx-auto">
      <div className="w-full mx-auto">
        <Heading
          type="h2"
          className="lg:!text-[34px] md:!text-3xl !text-2xl"
          text="Frequently Asked Questions"
        />

        <div className="slg:pt-10 md:pt-7.5 pt-5 reveal">
          <div itemScope="true" itemType="https://schema.org/FAQPage">
            {servicesFAQData?.map(({ question, answer }, index) => (
              <GradientFAQAccordion
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
    </div>
  );
};

export default ServicesFAQ;
