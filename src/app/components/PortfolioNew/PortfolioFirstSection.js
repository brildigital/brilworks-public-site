"use client";
import React from "react";
import Button from "../Common/Button";
import Heading from "../HTMLComponents/Heading";
import PortfolioSwiper from "./PortfolioSwiper";
import Link from "next/link";
import Image from "next/image";

const PortfolioFirstSection = ({
  title,
  description,
  images,
  KeyValueBlock,
}) => {
  return (
    <div className="section-padding !pt-24 h-full">
      <div className="container max-w-[1440px] mx-auto">
        <div className="flex justify-between lg:flex-row flex-col gap-4 lg:mt-16 md:mt-12 h-full">
          <div className="lg:w-3/5 w-full">
            <div className="flex items-start flex-col justify-between !h-full">
              <div>
                <Heading type="h1" text={title} className="mb-4 md:mb-6" />
                <p className="md:text-xl text-lg text-colorGray !mb-6 lg:w-[90%] w-full">
                  {description}
                </p>
                <div className="flex flex-wrap gap-x-6 lg:gap-y-0 gap-y-4">
                  {KeyValueBlock?.length &&
                    KeyValueBlock.map(({ link, text, image }, index) =>
                      link?.url ? (
                        <Link
                          className="font-medium flex items-center lg:!mb-4 text-xl hover:!text-themeColor"
                          key={index}
                          href={link?.url}
                          target="_blank"
                        >
                          <Image
                            className="w-6 h-6 mr-2"
                            src={image?.filename}
                            alt={text}
                            width="24"
                            height="24"
                            priority
                          />
                          {/* <span className="text-themeColor">{Key}</span> */}
                          &nbsp;{text}
                        </Link>
                      ) : (
                        <p
                          className="font-medium flex items-center lg:!mb-4 text-xl"
                          key={index}
                        >
                          <Image
                            className="w-6 h-6 mr-2"
                            src={image?.filename}
                            alt={text}
                            width="24"
                            height="24"
                            priority
                          />
                          &nbsp;{text}
                        </p>
                      )
                    )}
                </div>
              </div>
              {/* <div className="!mt-auto">
                <Button
                  innerClassName="flex items-center justify-center gap-2"
                  className="mt-3"
                  redirect="#blueprint-section"
                  label={buttontext}
                  icon="right-arrow-next"
                  scrollingButton
                />
              </div> */}
            </div>
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
