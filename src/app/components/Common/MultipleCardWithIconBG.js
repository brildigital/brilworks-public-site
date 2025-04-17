import React from "react";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";

const MultipleCardWithIconBG = ({ bgClass = "bg-white", data }) => {
  const iconBG = [
    "bg-[#E5F4FF]",
    "bg-[#E9FFE2]",
    "bg-[#FFE8FC]",
    "bg-[#FFE2E5]",
    "bg-[#EAFFFD]",
    "bg-[#F4ECFF]",
    "bg-[#FCFFE3]",
    "bg-[#FEF3E6]",
    "bg-[#E5F4FF]",
    "bg-[#FFE2E5]",
  ];
  return (
    <section className={bgClass}>
      <div className="container max-w-[1280px] main-section-padding mx-auto flex flex-col">
        <Heading
          type="h2"
          className="text-colorBlack lg:!text-[34px] md:!text-3xl !text-2xl"
          text={data?.title}
        />
        {data?.description && (
          <p className="md:text-lg text-base md:!mt-2.5 !mt-2">
            {data?.description}
          </p>
        )}
        <div className="grid md:grid-cols-2 grid-cols-1 sxl:gap-10 md:gap-7.5 gap-5 lg:pt-10 md:pt-7.5 pt-5 reveal">
          {data?.benefits.map(({ title, description, icon }, index) => (
            <div
              key={index}
              className="md:pb-7.5 pb-5 border-b border-b-borderGray"
            >
              <div
                className={`w-fit flex items-center justify-start p-4 rounded-md ${iconBG?.[index]} mb-5`}
              >
                <Image
                  className="sxl:w-12 md:w-8 sxl:h-12 md:h-8 w-6 h-6"
                  src={icon}
                  alt={`${title}-icon`}
                  width={52}
                  height={52}
                />
              </div>
              <Heading
                type="h3"
                className="text-colorBlack md:!text-xl !text-lg font-medium"
                text={title}
              />
              {description && (
                <p className="md:!text-base !text-sm !pt-4">{description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MultipleCardWithIconBG;
