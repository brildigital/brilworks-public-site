"use client";
import React from "react";
import Image from "next/image";
import { BrilworksButton } from "../PortfolioGradient/PortfolioGradientHero";

const PortfolioFirstSection = ({
  title,
  description,
  images,
  buttontext,
  KeyValueBlock,
}) => {
  return (
    <div className="container max-w-[1440px] md:px-[60px] px-[20px] lg:px-[100px] 3xl:px-[120px] 3xl:py-[100px] py-[60px] md:mt-20 mt-10 mx-auto">
      <div className="flex items-center lg:flex-row flex-col gap-9">
        <div className="lg:w-1/2 w-full flex flex-col">
          <h1 className="lg:text-[52px] md:text-[44px] text-4xl font-bold leading-normal mb-5">
            {/* Employee Recruitment
            <br className="lg:block hidden" />
            <span className="h1-border-b"> Referral Platform</span> */}
            {title}
          </h1>
          <p className="text-lg lg:!mb-10 md:!mb-8 !mb-6">{description}</p>
          <div className="lg:mb-[50px] md:mb-10 mb-8">
            <BrilworksButton
              redirect="#blueprint-section"
              scrollingButton
              type="button"
              label={buttontext}
            />
          </div>
          <div className="flex flex-wrap gap-y-4">
            {KeyValueBlock?.length &&
              KeyValueBlock.map(({ text, image }, index) => (
                <div
                  key={text}
                  className="flex last:border-r-0 border-r border-spacing-4 border-borderGray mr-5 pr-5"
                >
                  <div className="flex items-center gap-[10px] lg:text-[26px] md:text-xl text-lg">
                    <Image
                      className="lg:w-8 md:w-6 w-5 lg:h-8 md:h-6 h-5"
                      src={image?.filename}
                      alt="person"
                      width="32"
                      height="32"
                      priority
                    />
                    {text}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col">
          <Image
            className="rounded-[30px]"
            src={images?.[0]?.filename}
            alt="portfolio-banner"
            width="580"
            height="550"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioFirstSection;
