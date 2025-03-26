import React from "react";
import Image from "next/image";
import Button from "../Common/Button";

const UsecaseFirstSection = ({ data }) => {
  return (
    <div className="container max-w-[1440px] py-20 md:pb-20 !pb-10 mx-auto">
      <div className="usecase flex">
        <div className="flex gap-6 lg:flex-row flex-col items-center main-section-padding !pb-0">
          <div className="lg:w-2/4 w-full">
            <h1 className="!font-medium mb-6">{data?.title}</h1>
            <p className="lg:!text-3xl md:!text-2xl !text-xl md:!leading-[58px] lg:w-[90%] text-colorGray">
              {data?.description}
            </p>
            <div className="lg:mt-12 mt-5">
              <Button label={data?.button_text} />
            </div>
          </div>
          <div className="lg:w-2/4 w-full">
            <Image
              className="h-full"
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
  );
};

export default UsecaseFirstSection;
