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
    itemscope="true"
    itemprop="mainEntity"
    itemtype="https://schema.org/Question"
  >
    <AccordionHeader
      onClick={() => handleOpen(id)}
      className="accordion-button"
    >
      <h2 itemprop="name">{question}</h2>
    </AccordionHeader>
    <AccordionBody>
      <div
        className="accordion-body"
        itemscope="true"
        itemprop="acceptedAnswer"
        itemtype="https://schema.org/Answer"
      >
        <div itemprop="text">{answer}</div>
      </div>
    </AccordionBody>
  </Accordion>
);

export default FAQAccordion;
