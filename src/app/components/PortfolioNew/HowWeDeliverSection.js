import React from "react";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";

const HowWeDeliveredParts = ({
  Title,
  Image: imageData,
  Description1,
  Description2,
  ListItem,
  className = "",
  contentBg = "bg-themeColor",
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row lg:gap-[30px] gap-5 w-full lg:mb-[60px] mb-8 ${className}`}
    >
      <div className="lg:flex-[0.25]">
        <Image
          className="w-full h-auto"
          src={imageData?.filename}
          alt={imageData?.alt || "startegy"}
          width="302"
          height="389"
        />
      </div>
      <div
        className={`${contentBg} rounded-[10px] lg:p-10 md:p-8 p-6 lg:flex-[0.75]`}
      >
        <div className="lg:w-11/12 w-full">
          <Heading
            type="h3"
            text={Title}
            className={`${
              contentBg === "bg-themeColor"
                ? "text-themeColor"
                : "text-[#02B5D6]"
            } bg-colorWhite px-4 py-2 rounded-md mb-6 w-fit`}
          />
          {Description1 && (
            <p
              className={`text-colorWhite md:text-xl text-lg ${
                Description2 ? "" : "!mb-6"
              }`}
            >
              {Description1}
            </p>
          )}
          {Description2 && (
            <p
              className={`text-colorWhite md:text-xl text-lg ${
                Description2 ? "!mb-6" : ""
              }`}
            >
              {Description2}
            </p>
          )}
          <ul className="">
            {ListItem?.length &&
              ListItem?.map(
                ({ Display_text }, index) =>
                  Display_text && (
                    <li
                      className="text-colorWhite md:text-xl text-lg white-icon"
                      key={index}
                    >
                      {Display_text}
                    </li>
                  )
              )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const HowWeDeliverSection = ({ howWeDelivered }) => {
  return (
    <div className="lg:px-[70px] px-4 lg:pt-[60px] pt-8">
      <div className="container max-w-[1440px] mx-auto our-work-list-icon">
        <div className="lg:mb-[60px] mb-8">
          <Heading
            type="h2"
            className="text-center mb-5"
            text={howWeDelivered?.[0]?.Key}
          />
          <p className="md:text-xl text-lg text-colorGray lg:w-[55%] w-full mx-auto text-center">
            {howWeDelivered?.[0]?.Value}
          </p>
        </div>
        {howWeDelivered?.[1] && (
          <HowWeDeliveredParts {...howWeDelivered?.[1]} />
        )}
        {howWeDelivered?.[2] && (
          <HowWeDeliveredParts
            {...howWeDelivered?.[2]}
            className="!flex-row-reverse"
            contentBg="bg-[#02B5D6]"
          />
        )}
        {howWeDelivered?.[3] && (
          <HowWeDeliveredParts {...howWeDelivered?.[3]} />
        )}
        {howWeDelivered?.[4] && (
          <HowWeDeliveredParts
            {...howWeDelivered?.[4]}
            className="!flex-row-reverse"
            contentBg="bg-[#02B5D6]"
          />
        )}
        {howWeDelivered?.[5] && (
          <HowWeDeliveredParts {...howWeDelivered?.[5]} />
        )}
      </div>
    </div>
  );
};

export default HowWeDeliverSection;
