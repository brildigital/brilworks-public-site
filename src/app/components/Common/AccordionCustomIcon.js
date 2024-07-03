"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Icon } from "../lib/commonFunction";
import LinkWithArrow from "./LinkWithArrow";

const Accordion = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.Accordion)
);
const AccordionHeader = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.AccordionHeader)
);
const AccordionBody = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.AccordionBody)
);

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

const AccordionCustomIcon = ({
  index,
  title,
  content,
  linkUrl,
  handleOpen,
  open,
}) => {
  return (
    <>
      <Accordion
        open={open === index}
        icon={<Icon id={index} open={open} />}
        animate={CUSTOM_ANIMATION}
      >
        <AccordionHeader
          onClick={() => handleOpen(index)}
          className={`py-6 border-[#707070] ${
            open === index ? "border-none" : ""
          }`}
        >
          <h3 className="font-Inter">{title}</h3>
        </AccordionHeader>
        <AccordionBody
          className={`pb-4 pt-0 ${
            open === index ? "border-b border-[#707070]" : ""
          }`}
        >
          <div className="accordion-body font-Inter">{content}</div>
          {linkUrl && (
            <LinkWithArrow
              href={linkUrl}
              label="Know More"
              className="py-3 !mt-0"
            />
          )}
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default AccordionCustomIcon;
