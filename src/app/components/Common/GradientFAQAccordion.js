"use client";
import dynamic from "next/dynamic";
import { CustomIcon } from "../lib/commonFunction";

const Accordion = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.Accordion)
);
const AccordionHeader = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.AccordionHeader)
);
const AccordionBody = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.AccordionBody)
);

const GradientFAQAccordion = ({ id, question, answer, open, handleOpen }) => {
  const isOpen = open === id;
  return (
    <Accordion
      open={isOpen}
      // className="accordion-item !border-b-4 border-b-themeColor"
      className={`border rounded-md mb-6 last:mb-0 ${
        isOpen ? "border-themeColor" : "border-borderGray"
      }`}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <AccordionHeader
        onClick={() => handleOpen(id)}
        className={`${
          isOpen ? "md:pt-7.5 pt-4 md:pb-6 pb-4 md:px-7.5 px-4" : "md:p-7.5 p-4"
        } border-0`}
      >
        <h2
          itemProp="name"
          className="font-Figtree flex items-center sxl:gap-5 md:gap-4 gap-3 md:text-xl text-lg text-colorBlack font-medium"
        >
          {<CustomIcon id={id} open={open} />}
          {question}
        </h2>
      </AccordionHeader>
      <AccordionBody
        className={`${isOpen ? "md:pb-7.5 pb-5 pt-0" : ""} md:px-7.5 px-4`}
      >
        <div
          itemScope="true"
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
        >
          <div
            itemProp="text"
            className="font-Figtree md:text-lg text-base text-colorBlack font-normal"
          >
            {answer}
          </div>
        </div>
      </AccordionBody>
    </Accordion>
  );
};

export default GradientFAQAccordion;
