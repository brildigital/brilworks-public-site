"use client";
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

const FAQAccordion = ({ id, question, answer, open, handleOpen }) => (
  <Accordion
    open={open === id}
    icon={<Icon id={id} open={open} />}
    className="accordion-item"
    itemScope
    itemProp="mainEntity"
    itemType="https://schema.org/Question"
  >
    <AccordionHeader
      onClick={() => handleOpen(id)}
      className="accordion-button"
    >
      <h2 itemProp="name" className="font-Figtree">
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
        <div itemProp="text" className="font-Figtree">
          {answer}
        </div>
      </div>
    </AccordionBody>
  </Accordion>
);

export default FAQAccordion;
