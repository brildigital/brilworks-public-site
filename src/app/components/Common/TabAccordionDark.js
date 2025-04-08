import React from "react";
import Link from "next/link";
import Image from "next/image";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

const TabAccordionDark = ({ open, handleOpen, index, data }) => {
  return (
    <Accordion open={open === index}>
      <AccordionHeader
        onClick={() => handleOpen(index)}
        className={`px-5
        ${
          open === index
            ? "bg-tab-gradient rounded-l-2xl border-b-0"
            : index === 1
            ? "bordert-t-0 border-b-0"
            : "border-t border-t-[#2B3138] border-b-0"
        }`}
      >
        <div className="w-full font-Figtree flex items-center justify-between gap-4 text-colorWhite text-lg">
          <div className="flex items-center gap-4">
            <p
              className={`flex items-center justify-center lg:w-10 lg:h-10 w-8 h-8 font-semibold rounded-full lg:text-2xl md:text-xl ${
                open === index
                  ? "bg-white  text-colorBlack"
                  : "bg-[#17283E] text-colorWhite"
              }`}
            >
              {index}
            </p>
            <h2>{data?.title}</h2>
          </div>
          {open === index && (
            <Image
              src="/images/v2/active-tab-pointer.svg"
              alt="active-pointer"
              className="w-6 h-6"
              width="24"
              height="24"
            />
          )}
        </div>
      </AccordionHeader>
      <AccordionBody
        className={`font-Figtree text-colorWhite px-5 ${
          open === index ? "border-b-0 border-b-[#2B3138]" : ""
        }`}
      >
        <div className="w-full rounded-2xl mb-5">
          <Image
            src={data.imageSrc}
            width={830}
            height={350}
            alt={`${data.title}-icon`}
            sizes="(max-width: 767px) 414px, 830px"
          />
        </div>
        <div>
          <p className="md:text-lg text-base md:pb-5 pb-4">
            {data?.description}
          </p>
          {data?.service &&
            data?.service?.map(({ title, redirect }, index) => (
              <div className="group" key={index}>
                <Link
                  href={redirect}
                  className="flex items-center justify-start bg-clip-text text-transparent group-hover:text-white bg-theme-gradient duration-300 pb-2"
                >
                  {title}&nbsp;&nbsp;
                  <FontAwesomeIcon
                    className="group-hover:text-white text-[#00DBD3]"
                    size="lg"
                    icon={faArrowRight}
                  />
                </Link>
              </div>
            ))}
        </div>
      </AccordionBody>
    </Accordion>
  );
};

export default TabAccordionDark;
