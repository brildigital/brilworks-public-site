import Image from "next/image";
import React from "react";
import ButtonV2 from "../Common/ButtonV2";
import Heading from "../HTMLComponents/Heading";

const ServiceHeroSection = ({
  title,
  description,
  buttonText,
  imageSrc,
  showGridData = false,
}) => {
  const bgColor = [
    "bg-[#E5F4FF]",
    "bg-[#E9FFE2]",
    "bg-[#FFE2E5]",
    "bg-[#FFE8FC]",
  ];
  const corporateModelFeatures = [
    {
      value: "8+",
      description: "Years of Experience",
    },
    {
      value: "100+",
      description: "Experts",
    },
    {
      value: "250+",
      description: "Projects",
    },
    {
      value: "98%",
      description: "Client Satisfaction",
    },
  ];

  const dataExistClass = showGridData ? "md:max-h-[780px]" : "md:max-h-[980px]";

  return (
    <div className="service-hero-bg">
      <div
        className={`banner-layer h-full min-h-[600px] ${dataExistClass}  max-h-full`}
      >
        <div className="container max-w-[1280px] main-section-padding sxl:!pt-14 !pt-32  mx-auto">
          <section
            className={`flex flex-col md:flex-row items-center justify-start md:h-screen h-full min-h-[600px] ${dataExistClass} max-h-full lg:gap-16 md:gap-10 gap-6`}
          >
            <div className="md:w-1/2 w-full">
              <Heading type="h1" className="text-white" text={title} />
              <p className="text-white lg:text-2xl md:text-xl text-lg !mt-5">
                {description}
              </p>
              {buttonText && (
                <ButtonV2
                  size="large"
                  className="w-fit md:mt-7.5 mt-5"
                  label={buttonText}
                />
              )}
            </div>
            <div className="md:w-1/2 w-full">
              {showGridData ? (
                <div
                  className={`grid grid-cols-2 sxl:gap-10 md:gap-7.5 gap-5 lg:py-10 md:py-7.5 py-5`}
                >
                  {corporateModelFeatures.map(
                    ({ value, description }, index) => (
                      <div
                        key={index}
                        className={`flex flex-col items-start justify-start ${bgColor[index]} p-6 !pr-0 rounded-2xl`}
                      >
                        <p className="pb-2 lg:!text-[34px] md:!text-3xl !text-2xl">
                          {value}
                        </p>

                        <span className="md:text-lg text-base">
                          {description}
                        </span>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <Image
                  className="rounded-2xl md:h-[610px] object-cover"
                  src={imageSrc}
                  alt="service-banner"
                  width="565"
                  height="610"
                  priority
                />
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeroSection;
