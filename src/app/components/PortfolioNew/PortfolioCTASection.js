import React from "react";
import Heading from "../HTMLComponents/Heading";
import Button from "../Common/Button";

const PortfolioCTASection = ({ ctaData }) => {
  return (
    <div className="bg-themeColor">
      <div className="lg:px-[70px] md:px-8 px-4 lg:py-[60px] md:py-14 py-8">
        <div className="container max-w-[1440px] mx-auto">
          <div className="flex lg:flex-row flex-col gap-5 lg:justify-between items-center">
            <div>
              <Heading
                type="h2"
                className="!text-colorWhite mb-5"
                text={ctaData?.[0]?.title}
              />
              <p className="text-colorWhite md:text-2xl text-lg lg:mb-0 !mb-5">
                {ctaData?.[0]?.description}
              </p>
            </div>
            <div className="">
              <Button
                innerClassName="flex items-center justify-center !text-themeColor"
                label={ctaData?.[0]?.button_text}
                variant="white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCTASection;
