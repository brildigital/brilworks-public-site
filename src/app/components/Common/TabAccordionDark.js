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
import ButtonV2 from "./ButtonV2";
import Heading from "../HTMLComponents/Heading";

const TabAccordionDark = ({
  open,
  handleOpen,
  index,
  data,
  buttonText,
  darkMode = true,
}) => {
  const themeBorder = darkMode ? "border-t-[#2B3138]" : "border-t-borderGray";
  const themeBaseText = darkMode ? "!text-white" : "!text-colorBlack";
  return (
    <Accordion open={open === index}>
      <AccordionHeader
        onClick={() => handleOpen(index)}
        className={`px-5
        ${
          open === index
            ? "bg-tab-gradient border-b-0"
            : index === 1
            ? "bordert-t-0 border-b-0"
            : `border-t ${themeBorder} border-b-0`
        }`}
      >
        <div
          className={`w-full font-Figtree flex items-center justify-between gap-4 ${themeBaseText} text-lg`}
        >
          <div className="flex items-center gap-4">
            <p
              className={`flex items-center justify-center lg:w-10 lg:h-10 w-8 h-8 font-semibold rounded-full lg:text-2xl md:text-xl ${
                open === index
                  ? `bg-white text-colorBlack`
                  : `bg-[#17283E] text-colorWhite`
              }`}
            >
              {index}
            </p>
            <Heading
              type="h2"
              className={`${
                open === index ? "text-colorWhite" : `${themeBaseText}`
              } lg:!text-[34px] md:!text-2xl !text-xl`}
              text={data?.title}
            />
          </div>
        </div>
      </AccordionHeader>
      <AccordionBody
        className={`font-Figtree ${themeBaseText} px-5 ${
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
          {buttonText && (
            <ButtonV2 className="hover:text-themeColor" label={buttonText} />
          )}
        </div>
      </AccordionBody>
    </Accordion>
  );
};

export default TabAccordionDark;
