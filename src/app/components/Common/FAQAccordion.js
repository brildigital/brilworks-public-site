"use client";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { Icon } from "../lib/commonfunction";

const FAQAccordion = ({ id, question, answer, open, handleOpen }) => (
  <Accordion
    open={open === id}
    icon={<Icon id={id} open={open} />}
    className="accordion-item"
    itemScope="true"
    itemProp="mainEntity"
    itemtype="https://schema.org/Question"
  >
    <AccordionHeader
      onClick={() => handleOpen(id)}
      className="accordion-button"
    >
      <h2 itemProp="name">{question}</h2>
    </AccordionHeader>
    <AccordionBody>
      <div
        className="accordion-body"
        itemScope="true"
        itemProp="acceptedAnswer"
        itemtype="https://schema.org/Answer"
      >
        <div itemProp="text">{answer}</div>
      </div>
    </AccordionBody>
  </Accordion>
);

export default FAQAccordion;
