import React from "react";
import Image from "next/image";
import ButtonV2 from "../Common/ButtonV2";
import Heading from "../HTMLComponents/Heading";
import { formatSrcUrl } from "../lib/commonFunction";

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
                className="w-fit lg:mt-10 md:my-7.5 my-5"
                label={buttontext || "Let’s Build Your App"}
              />
              <div className="flex flex-wrap gap-y-4">
                {KeyValueBlock?.length > 0 &&
                  KeyValueBlock.map(({ text, image }, index) => (
                    <div
                      key={text}
                      className="flex last:border-r-0 border-r border-spacing-4 border-[#2D3540] mr-5 pr-5"
                    >
                      <div className="flex items-center gap-[10px] lg:text-[26px] md:text-xl text-lg text-white">
                        <Image
                          className="lg:w-8 md:w-6 w-5 lg:h-8 md:h-6 h-5 invert"
                          src={formatSrcUrl(image?.filename)}
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
            <div className="md:w-1/2 w-full">
              <Image
                className="rounded-2xl md:h-[650px] object-cover"
                src={
                  images.length > 1
                    ? formatSrcUrl(images?.[1]?.filename)
                    : formatSrcUrl(images?.[0]?.filename)
                }
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
