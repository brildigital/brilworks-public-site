import React from "react";
import Image from "next/image";
import Heading from "../HTMLComponents/Heading";
import ButtonV2 from "../Common/ButtonV2";

const UsecaseFirstSection = ({ data }) => {
  return (
    <div className="bg-detail-hero">
      <div className="h-full min-h-[600px] md:max-h-[800px] max-h-full">
        <div className="container max-w-[1280px] main-section-padding-top !pt-24 mx-auto">
          <div className="usecase h-full min-h-[500px] md:max-h-[800px] max-h-full flex">
            <div className="flex gap-6 lg:flex-row flex-col items-center">
              <div className="lg:w-1/2 w-full text-white">
                <Heading type="h1" text={data?.title} className="mb-5" />
                <Heading
                  type="h2"
                  className="sxl:!text-3xl nd:!text-2xl !text-xl md:!leading-snug"
                  text={data?.description}
                />
                <div className="lg:mt-12 mt-5">
                  <ButtonV2
                    size="large"
                    className="w-fit"
                    label={data?.button_text}
                  />
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <Image
                  className="h-full rounded-2xl"
                  src={data?.banner_image?.filename}
                  alt={data?.banner_image?.alt}
                  width="650"
                  height="390"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsecaseFirstSection;
