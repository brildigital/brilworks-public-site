import React from "react";
import Heading from "../HTMLComponents/Heading";
import PortfolioContactForm from "./PortfolioContactForm";

const BluePrintForSuccess = ({ blueprintForSuccess }) => {
  return (
    <div id="blueprint-section" className="bg-sectionBG">
      <div className="lg:px-[70px] md:px-8 px-4 lg:py-[60px] md:py-16 py-8">
        <div className="container max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-[30px]">
            <div className="lg:w-[70%] w-full">
              <Heading
                type="h2"
                text={blueprintForSuccess?.[0]?.Title}
                className="!text-colorBlack mb-[30px]"
              />
              <p className="text-colorGray md:text-xl text-lg !mb-6 md:!w-full lg:!w-[90%] !w-[90%]">
                {blueprintForSuccess?.[0]?.Description1}
              </p>
              <p className="text-colorGray md:text-xl text-lg md:!w-full lg:!w-[90%] !w-[90%]">
                {blueprintForSuccess?.[0]?.Description2}
              </p>
            </div>
            <div className="lg:w-[30%]  w-full bg-colorWhite p-6 rounded-xl border border-themeColor">
              <PortfolioContactForm companyNotRequired={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BluePrintForSuccess;
