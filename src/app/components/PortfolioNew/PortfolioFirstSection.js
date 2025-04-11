"use client";
import React from "react";
import Image from "next/image";
import { BrilworksButton } from "../PortfolioGradient/PortfolioGradientHero";
import ButtonV2 from "../Common/ButtonV2";
import Heading from "../HTMLComponents/Heading";

const PortfolioFirstSection = ({
  title,
  description,
  images,
  buttontext,
  KeyValueBlock,
}) => {
  return (
    <div className="case-study-detail">
      <div className="banner-layer h-full min-h-[600px] md:max-h-[980px] max-h-full">
        <div className="container max-w-[1280px] main-section-padding !pt-24 mx-auto">
          <section className="flex flex-col md:flex-row items-center justify-start md:h-screen h-full min-h-[600px] md:max-h-[840px] max-h-full lg:gap-16 md:gap-10 gap-6">
            <div className="md:w-1/2 w-full">
              <p className="text-colorWhite uppercase md:text-2xl text-xl md:!mb-7.25 !mb-5">
                Case study
              </p>
              <Heading type="h1" className="text-white" text={title} />
              <p className="text-white lg:text-2xl md:text-xl text-lg !mt-5">
                {description}
              </p>
              <ButtonV2
                size="large"
                className="w-fit lg:mt-10 md:mt-7.5 mt-5"
                label="Let’s Build Your App"
              />
            </div>
            <div className="md:w-1/2 w-full">
              <Image
                className="rounded-2xl md:h-[650px] object-cover"
                src={images?.[0]?.filename}
                alt="portfolio-banner"
                width="565"
                height="650"
                priority
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFirstSection;
