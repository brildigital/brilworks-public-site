"use client";
import React from "react";
import Button from "../Common/Button";
import Heading from "../HTMLComponents/Heading";
import PortfolioSwiper from "./PortfolioSwiper";
import Link from "next/link";

const PortfolioFirstSection = ({
  title,
  description,
  images,
  buttontext,
  buttonURL,
  KeyValueBlock,
}) => {
  return (
    <div className="section-padding !pt-24">
      <div className="container max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between lg:flex-row flex-col gap-4 lg:mt-16 md:mt-12">
          <div className="lg:basis-3/5 lg:w-3/5 w-full">
            <Heading type="h1" text={title} className="mb-4 md:mb-6" />
            <p className="md:text-xl text-lg text-colorGray !mb-6 lg:w-[90%] w-full">
              {description}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-0">
              {KeyValueBlock?.length &&
                KeyValueBlock.map(({ Key, Value }, index) =>
                  Key && Value && Value?.match(/(.*?)\s*\((.*?)\)/)?.[2] ? (
                    <Link
                      className="font-medium lg:!mb-4 text-xl hover:!text-themeColor"
                      key={index}
                      href={Value?.match(/\((.*?)\)/)?.[1]}
                      target="_blank"
                    >
                      <span className="text-themeColor">{Key}</span>
                      &nbsp;{Value.match(/(.*?)\s*\((.*?)\)/)?.[1]}
                    </Link>
                  ) : (
                    <p className="font-medium lg:!mb-4 text-xl" key={index}>
                      <span className="text-themeColor">{Key}</span>
                      &nbsp;{Value}
                    </p>
                  )
                )}
            </div>

            <Button
              innerClassName="flex items-center justify-center gap-2"
              className="xl:mt-10 md:mt-8 mt-4"
              redirect="#blueprint-section"
              label={buttontext}
              icon="right-arrow-next"
              scrollingButton
            />
          </div>
          <div className="lg:basis-2/5 lg:w-2/5 w-full">
            <PortfolioSwiper imagesData={images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFirstSection;
