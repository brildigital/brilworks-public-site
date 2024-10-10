import React from "react";
import Heading from "../HTMLComponents/Heading";
import Button from "../Common/Button";

const PortfolioCTASection = ({ ctaData }) => {
  return (
    <div className="bg-themeColor">
      <div className="px-[70px] py-[60px]">
        <div className="container max-w-[1440px] mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <Heading
                type="h2"
                className="!text-colorWhite mb-5"
                text={ctaData?.[0]?.title}
              />
              <p className="text-colorWhite text-2xl">
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
