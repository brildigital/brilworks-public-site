import React from "react";
import Image from "next/image";
import "../../styles/Services.scss";
import Button from "../Common/Button";

const AWSInHealthcareFirstSection = ({ data }) => {
  return (
    <div className="container mx-auto">
      <div className="usecase flex mt-24">
        <div className="slg:px-12 lg:!w-[90%] !w-full mx-auto">
          <div className="flex gap-8 lg:flex-row flex-col items-center py-8 md:px-0 sxl:px-4 px-4">
            <div className="lg:w-1/2 w-full">
              <h1 className="!font-medium mb-6">{data?.title}</h1>
              <p className="lg:!text-5xl md:!text-4xl !text-2xl md:!leading-[58px] lg:w-[90%] text-colorGray">
                {data?.description}
              </p>
              <div className="lg:mt-12 mt-5">
                <Button label={data?.button_text} />
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <Image
                className="h-full"
                src={data?.banner_image?.filename}
                alt={data?.banner_image?.alt}
                width="650"
                height="390"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AWSInHealthcareFirstSection;
