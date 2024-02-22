"use client";
import Image from "next/image";
import React from "react";

const IndustriesWeHelp = () => {
  const upperRowIndustry = [
    {
      title: "Healthcare",
      imageSrc: "/images/cardio.png",
      imageAlt: "healthcare-icon",
    },
    {
      title: "Fintech",
      imageSrc: "/images/fintech-icon.png",
      imageAlt: "fintech-icon",
    },
    {
      title: "Education",
      imageSrc: "/images/online-education.png",
      imageAlt: "education-icon",
    },

    {
      title: "Retail",
      imageSrc: "/images/retails.png",
      imageAlt: "retail-icon",
    },
    {
      title: "Fleet Management",
      imageSrc: "/images/logistics.png",
      imageAlt: "logistics-icon",
    },
    {
      title: "Media & Entertainment",
      imageSrc: "/images/entertainment.png",
      imageAlt: "media-entertainment-icon",
    },
  ];

  return (
    <div className="container md:w-[90%] w-full mx-auto md:py-12 pb-14">
      <div className="!rounded-2xl">
        <h2 className="md:text-center text-left ml-4 !mb-8">
          Industries We Help
        </h2>
        <div className="reveal">
          <div className="flex flex-wrap md:gap-5 gap-3 justify-center mx-auto mb-[20px] md:w-1/2 w-full">
            {upperRowIndustry.map(({ title, imageSrc, imageAlt }, index) => (
              <div
                className="flex items-center justify-center flex-col border border-[#8F9998] rounded-2xl shadow-none hover:shadow-lg md:p-6 p-4 md:w-[200px] w-[150px]"
                key={index}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-auto md:mb-6 mb-4"
                  width={60}
                  height={60}
                />

                <span className="text-center lg:text-2xl md:text-xl text-base">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeHelp;
