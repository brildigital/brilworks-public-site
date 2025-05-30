import React from "react";
import Image from "next/image";
import Heading from "../HTMLComponents/Heading";
import { formatSrcUrl } from "../lib/commonFunction";

const AISeamlessIntegration = ({ data }) => {
  const iconBG = [
    "bg-[#E5F4FF]",
    "bg-[#E9FFE2]",
    "bg-[#FFE8FC]",
    "bg-[#FFE2E5]",
    "bg-[#EAFFFD]",
  ];
  return (
    <div className="container max-w-[1280px] main-section-padding-bottom mx-auto flex flex-col">
      <Heading
        type="h2"
        className="text-colorBlack lg:!text-[34px] md:!text-3xl !text-2xl"
        text={data?.[0]?.Key}
      />
      {data?.[0]?.Value && (
        <p className="md:text-lg text-base md:!mt-2.5 !mt-2">
          {data?.[0]?.Value}
        </p>
      )}
      <div className="grid md:grid-cols-2 grid-cols-1 sxl:gap-10 md:gap-7.5 gap-5 lg:pt-10 md:pt-7.5 pt-5">
        {data?.slice(1, 6)?.map((item, index) => (
          <div
            key={index}
            className="md:pb-7.5 pb-5 border-b border-b-borderGray"
          >
            <div
              className={`w-fit flex items-center justify-start p-4 rounded-xl ${iconBG?.[index]} mb-5`}
            >
              <Image
                className="sxl:w-12 md:w-8 sxl:h-12 md:h-8 w-6 h-6"
                src={formatSrcUrl(item?.image?.filename)}
                alt={item?.image?.alt}
                width={52}
                height={52}
              />
            </div>
            <Heading
              type="h3"
              className="text-colorBlack md:!text-xl !text-lg font-medium"
              text={item.title}
            />
            <p className="md:!text-base !text-sm !pt-4">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AISeamlessIntegration;
