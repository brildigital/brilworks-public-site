"use client";
import dynamic from "next/dynamic";
import { Icon } from "../lib/commonFunction";

const Accordion = dynamic(
  () => import("@material-tailwind/react").then((mod) => mod.Accordion),
  { ssr: false }
);
const AccordionHeader = dynamic(
  () => import("@material-tailwind/react").then((mod) => mod.AccordionHeader),
  { ssr: false }
);
const AccordionBody = dynamic(
  () => import("@material-tailwind/react").then((mod) => mod.AccordionBody),
  { ssr: false }
);

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
