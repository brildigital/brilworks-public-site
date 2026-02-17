"use client";
import React, { useState } from "react";
import TabVerticalSticky from "./TabVerticalSticky";
import TabAccordionDark from "./TabAccordionDark";
import Heading from "../HTMLComponents/Heading";
import { useMediaQuery } from "react-responsive";

const ServicesSection = ({
  bgClass = "bg-white",
  sectionId,
  serviceData,
  imageOnLeft = false,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className={bgClass}>
      <div className="border-b border-b-borderGray reveal">
        <div className="container max-w-[1280px] mx-auto main-section-padding !pb-0">
          <div className="lg:mb-10 md:mb-8 mb-6">
            <Heading
              type="h2"
              className="lg:!text-[34px] md:!leading-snug md:!text-3xl !text-2xl"
              text={serviceData.title}
            />
            {serviceData.desc && (
              <p className="md:text-lg text-base !pt-[10px]">
                {serviceData.desc}
              </p>
            )}
          </div>
        </div>
      </div>
      <div
        className={`container max-w-[1280px] mx-auto reveal ${
          isMobile ? "main-section-padding !px-0" : ""
        }`}
      >
        {isMobile ? (
          serviceData?.servicesList?.map((data, index) => (
            <div key={data.value}>
              <TabAccordionDark
                index={index + 1}
                darkMode={false}
                key={data?.value}
                data={data}
                handleOpen={handleOpen}
                open={open}
                buttonText={data.btnText || serviceData?.buttonText}
              />
            </div>
          ))
        ) : (
          <TabVerticalSticky
            darkMode={false}
            sectionId={sectionId}
            imageOnLeft={imageOnLeft}
            initialTabValue={serviceData?.servicesList?.[0]?.value}
            data={serviceData?.servicesList}
            buttonText={serviceData?.buttonText}
          />
        )}
      </div>
    </div>
  );
};

export default ServicesSection;
