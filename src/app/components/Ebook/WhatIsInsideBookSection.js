"use client";
import React from "react";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";
import ButtonV2 from "../Common/ButtonV2";
import { formatSrcUrl } from "../lib/commonFunction";

const InsideBookParts = ({
  Title,
  Image: imageData,
  Description1,
  Description2,
  ListItem,
  buttontext,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row lg:gap-[30px] gap-5 w-full lg:mb-[60px] mb-8 ${className}`}
    >
      <div className="lg:flex-[0.25]">
        <Image
          className="w-full h-auto"
          src={formatSrcUrl(imageData?.filename)}
          alt={imageData?.alt || "startegy"}
          width="302"
          height="389"
        />
      </div>
      <div className={`bg-themeLight lg:p-10 md:p-8 p-6 lg:flex-[0.75]`}>
        <div className="w-full">
          <Heading
            type="h3"
            text={Title || ""}
            className={`!text-[32px] text-colorBlack font-medium mb-5 w-fit`}
          />
          {Description1 && (
            <p
              className={`text-colorBlack md:text-xl text-lg ${
                Description2 ? "" : "!mb-5"
              }`}
            >
              {Description1 || ""}
            </p>
          )}
          {Description2 && (
            <p
              className={`text-colorBlack md:text-xl text-lg ${
                Description2 ? "!mb-6" : ""
              }`}
            >
              {Description2 || ""}
            </p>
          )}
          <div className="li-tick-mark">
            <ul>
              {ListItem?.length &&
                ListItem?.map(
                  ({ Display_text }, index) =>
                    Display_text && (
                      <li
                        className="text-colorBlack md:text-xl text-lg blue"
                        key={index}
                      >
                        {Display_text}
                      </li>
                    ),
                )}
            </ul>
          </div>
          <div className="flex items-center justify-end">
            <ButtonV2
              label={buttontext || "Explore"}
              variant="secondary"
              className="w-fit mt-7.5"
              redirect="#download-ebook-form"
              scrollingButton
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const WhatIsInsideBookSection = ({ bookDescription, buttontext }) => {
  return (
    <div className="container max-w-[1280px] main-section-padding-top mx-auto our-work-list-icon">
      <div className="lg:mb-[60px] mb-8">
        <Heading
          type="h2"
          className="text-center mb-5"
          data={bookDescription?.[0]?.Key}
        />
        <p className="md:text-xl text-lg text-colorGray px-6 w-full mx-auto text-center">
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

      <div className="flex items-center justify-center lg:mt-14 md:mt-10 mt-6">
        <ButtonV2
          className="hover:text-themeColor"
          redirect="#download-ebook-form"
          label={buttontext}
          scrollingButton
        />
      </div>
    </div>
  );
};

export default WhatIsInsideBookSection;
