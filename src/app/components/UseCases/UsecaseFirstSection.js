import React from "react";
import Image from "next/image";
import Button from "../Common/Button";

const UsecaseFirstSection = ({ data }) => {
  return (
    <div className="container mx-auto">
      <div className="usecase flex mt-24">
        <div className="2xl:px-12 2xl:!w-[90%] !w-full mx-auto">
          <div className="flex gap-6 lg:flex-row flex-col items-center md:py-20 py-8 md:px-0 sxl:px-4 px-4">
            <div className="lg:w-2/4 w-full">
              <h1 className="!font-medium mb-6">{data?.title}</h1>
              <p className="lg:!text-3xl md:!text-2xl !text-xl md:!leading-[58px] lg:w-[90%] text-colorGray">
                {data?.description}
              </p>
              <div className="lg:mt-12 mt-5">
                <Button label={data?.button_text || "Schedule a call"} />
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
    </div>
  );
};

export default UsecaseFirstSection;
