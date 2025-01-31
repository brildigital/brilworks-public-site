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

const GradientFAQAccordion = ({ id, question, answer, open, handleOpen }) => (
  <Accordion
    open={open === id}
    className="accordion-item !border-b-4 border-b-themeColor"
    itemScope
    itemProp="mainEntity"
    itemType="https://schema.org/Question"
  >
    <AccordionHeader
      onClick={() => handleOpen(id)}
      className="accordion-button"
    >
      <h2 itemProp="name" className="font-Inter flex items-center gap-4">
        {<CustomIcon id={id} open={open} />}
        {question}
      </h2>
    </AccordionHeader>
    <AccordionBody>
      <div
        className="accordion-body"
        itemScope="true"
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <div itemProp="text" className="font-Inter">
          {answer}
        </div>
      </div>
    </AccordionBody>
  </Accordion>
);

export default GradientFAQAccordion;
