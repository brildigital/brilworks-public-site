"use client";
import React from "react";
import dynamic from "next/dynamic";

const Accordion = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.Accordion)
);
const AccordionHeader = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.AccordionHeader)
);
const AccordionBody = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.AccordionBody)
);

const AccordionCustomStyle = ({
  index,
  title,
  iconSrc,
  content,
  handleOpen,
  open,
  processTags,
}) => {
  return (
    <Accordion
      open={open === index}
      className={open === index ? "item-accordion" : "custon-style-accordion"}
    >
      <AccordionHeader
        onClick={() => handleOpen(index)}
        className={`py-6 ${
          open === index
            ? "border-none"
            : `${
                open === index + 1
                  ? "border-none"
                  : "border-b border-borderGray"
              }`
        }`}
      >
        <div
          className={`flex w-full ${
            open === index ? "flex-row-reverse justify-between" : "gap-6"
          }`}
        >
          <div className="number_icon_img">
            <img
              decoding="async"
              loading="lazy"
              src={iconSrc}
              alt={`${title} icon`}
            />
          </div>
          <h3 className="md:text-[24px] text-[20px] font-Inter">{title}</h3>
        </div>
      </AccordionHeader>
      <AccordionBody className="py-0">
        <div className="accordion-body">
          <p className="md:text-[20px] text-[18px] font-Inter">{content}</p>
          {processTags}
        </div>
      </AccordionBody>
    </Accordion>
  );
};

export default AccordionCustomStyle;
