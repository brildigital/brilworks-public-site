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
        <Heading type="h1" text={title} className="mt-16 mb-10" />
        <div className="flex items-center justify-between lg:flex-row flex-col-reverse gap-8">
          <div className="lg:basis-3/5 lg:w-3/5">
            <p className="md:text-xl text-lg text-colorGray !mb-6">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              {KeyValueBlock?.length &&
                KeyValueBlock.map(
                  ({ Key, Value }, index) =>
                    Key &&
                    Value &&
                    (["Talk", "talk", "Expert", "expert"].some((word) =>
                      Value.includes(word)
                    ) ? (
                      <Link
                        className="font-medium !mb-4 text-xl hover:!text-themeColor"
                        key={index}
                        href="https://cal.com/brilworks/free-consultation?utm_source=CaseStudy&utm_medium=org&utm_campaign=SEO" // Replace this with the actual URL or logic to generate it
                      >
                        <span className="text-themeColor">{Key}</span>
                        &nbsp;{Value}
                      </Link>
                    ) : (
                      <p className="font-medium !mb-4 text-xl" key={index}>
                        <span className="text-themeColor">{Key}</span>
                        &nbsp;{Value}
                      </p>
                    ))
                )}
            </div>

            <Button
              innerClassName="flex items-center justify-center gap-2"
              className="xl:mt-20 md:mt-14 mt-8"
              redirect="#blueprint-section"
              label={buttontext}
              icon="right-arrow-next"
              scrollingButton
            />
          </div>
          <div className="lg:basis-2/5 lg:w-[35%]">
            <PortfolioSwiper imagesData={images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFirstSection;
