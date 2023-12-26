"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const AccordionItem = ({
  index,
  title,
  imageSrc,
  content,
  handleOpen,
  open,
  processTags,
}) => {
  return (
    <Accordion
      open={open === index}
      className={open === index ? "item-accordion" : ""}
    >
      <AccordionHeader
        onClick={() => handleOpen(index)}
        className={`py-6 ${
          open === index || open === index + 1 ? "border-none" : ""
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
              src={imageSrc}
              alt={`${title} icon`}
            />
          </div>
          <h3 className="text-[24px]">{title}</h3>
        </div>
      </AccordionHeader>
      <AccordionBody className="py-0">
        <div className="accordion-body">
          <p className="text-[20px]">{content}</p>
          {processTags}
        </div>
      </AccordionBody>
    </Accordion>
  );
};

export default AccordionItem;
