import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "../HTMLComponents/Heading";
import ButtonV2 from "./ButtonV2";

const Accordion = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.Accordion)
);
const AccordionHeader = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.AccordionHeader)
);
const AccordionBody = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.AccordionBody)
);

const TabAccordionDark = ({
  open,
  handleOpen,
  index,
  data,
  buttonText,
  darkMode = true,
  useCaseSection = false,
}) => {
  const themeBorder = darkMode ? "border-t-[#2B3138]" : "border-t-borderGray";
  const themeBaseText = darkMode ? "!text-white" : "!text-colorBlack";

  const iconBG = [
    "bg-[#E5F4FF]",
    "bg-[#E9FFE2]",
    "bg-[#FFE8FC]",
    "bg-[#FFE2E5]",
    "bg-[#EAFFFD]",
    "bg-[#F4ECFF]",
    "bg-[#FCFFE3]",
    "bg-[#FEF3E6]",
    "bg-[#E5F4FF]",
    "bg-[#FFE2E5]",
  ];

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
            {!useCaseSection && (
              <p
                className={`flex items-center justify-center lg:w-10 lg:h-10 w-8 h-8 font-semibold rounded-full lg:text-2xl md:text-xl ${
                  open === index
                    ? `bg-white text-colorBlack`
                    : `bg-[#17283E] text-colorWhite`
                }`}
              >
                {index}
              </p>
            )}
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
          {Array.isArray(data?.description) ? (
            <div className="li-tick-mark">
              <ul className={`md:pb-5 pb-4`}>
                {data?.description.map((item, index) => (
                  <li
                    key={index}
                    className={`blue small before:!top-1 !pb-3 md:text-lg text-base ${themeBaseText}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className={`md:text-lg text-base md:pb-5 pb-4 ${themeBaseText}`}>
              {data?.description}
            </p>
          )}
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
          {data?.processTags && (
            <div className="flex flex-wrap gap-2.5">
              {data?.processTags?.map((data, index) => (
                <p
                  key={index}
                  className={`${iconBG[index]} px-2.5 !py-2 rounded-md w-fit text-base`}
                >
                  {data}
                </p>
              ))}
            </div>
          )}
          {buttonText && (
            <ButtonV2 className="hover:text-themeColor" label={buttonText} />
          )}
        </div>
      </AccordionBody>
    </Accordion>
  );
};

export default TabAccordionDark;
