"use client";
import React from "react";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";
import Button from "../Common/Button";

const InsideBookParts = ({
  Title,
  Image: imageData,
  Description1,
  Description2,
  ListItem,
  className = "",
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
      <div className={`bg-themeLight lg:p-10 md:p-8 p-6 lg:flex-[0.75]`}>
        <div className="lg:w-[95%] w-full">
          <Heading
            type="h3"
            text={Title}
            className={`text-themeColor !text-[32px] py-2 mb-6 w-fit`}
          />
          {Description1 && (
            <p
              className={`text-colorBlack md:text-xl text-lg ${
                Description2 ? "" : "!mb-6"
              }`}
            >
              {Description1}
            </p>
          )}
          {Description2 && (
            <p
              className={`text-colorBlack md:text-xl text-lg ${
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
                      className="text-colorGray md:text-xl text-lg"
                      key={index}
                    >
                      {Display_text}
                    </li>
                  )
              )}
          </ul>
          <div className="flex items-center justify-end">
            <Button
              className="!border-themeColor !text-themeColor !px-8"
              innerClassName="!text-themeColor"
              variant="white"
              redirect="#download-ebook-form"
              label="Explore"
              scrollingButton
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const WhatIsInsideBookSection = ({ bookDescription }) => {
  return (
    <div className="lg:px-[70px] px-4 lg:pt-[60px] pt-8">
      <div className="container max-w-[1440px] mx-auto our-work-list-icon">
        <div className="lg:mb-[60px] mb-8">
          <Heading
            type="h2"
            className="text-center mb-5 uppercase"
            text={bookDescription?.[0]?.Key}
          />
          <p className="md:text-xl text-lg text-colorGray lg:w-4/5 w-full mx-auto text-center">
            {bookDescription?.[0]?.Value}
          </p>
        </div>
        {bookDescription?.[1] && <InsideBookParts {...bookDescription?.[1]} />}
        {bookDescription?.[2] && (
          <InsideBookParts
            {...bookDescription?.[2]}
            className="lg:!flex-row-reverse"
          />
        )}
        {bookDescription?.[3] && <InsideBookParts {...bookDescription?.[3]} />}
        {bookDescription?.[4] && (
          <InsideBookParts
            {...bookDescription?.[4]}
            className="lg:!flex-row-reverse"
          />
        )}
        {bookDescription?.[5] && <InsideBookParts {...bookDescription?.[5]} />}
      </div>
    </div>
  );
};

export default WhatIsInsideBookSection;
