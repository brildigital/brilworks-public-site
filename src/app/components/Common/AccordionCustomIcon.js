import "../../styles/Homepage.scss";
import React from "react";
import Link from "next/link";
import { Icon } from "../lib/commonfunction";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

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
          <h3>{title}</h3>
        </AccordionHeader>
        <AccordionBody
          className={open === index ? "border-b border-[#707070]" : ""}
        >
          <div className="accordion-body">{content}</div>
          <Link
            href={linkUrl ? linkUrl : "#"}
            className="flex items-center gap-[20px] about_btn !cursor-pointer transition py-3"
          >
            <div className="about_txt">
              <p className="change_link md:text-[24px] text-[20px]">
                Know more
              </p>
            </div>
            <div className="aerrow relative">
              <img
                decoding="async"
                loading="lazy"
                className="black_aerrow alignnone wp-image-28 size-full"
                src="/images/black_aerrow-1.png"
                alt="arrow"
                width="46"
                height="18"
              />
              <img
                decoding="async"
                loading="lazy"
                className="gradiant_aerrow alignnone wp-image-29 size-full"
                src="/images/arrow-gradiant.png"
                alt="arrow"
                width="46"
                height="18"
              />
            </div>
          </Link>
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default AccordionCustomIcon;
