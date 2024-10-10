import React from "react";
import Heading from "../HTMLComponents/Heading";
import PortfolioContactForm from "./PortfolioContactForm";

const BluePrintForSuccess = ({ blueprintForSuccess }) => {
  const { Title, Description1, Description2 } = blueprintForSuccess?.[0];
  return (
    <div id="blueprint-section" className="bg-sectionBG">
      <div className="px-[70px] py-[60px]">
        <div className="container max-w-[1440px] mx-auto">
          <div className="flex gap-[30px]">
            <div className="w-7/12">
              <Heading
                type="h2"
                text={Title}
                className="!text-colorBlack !text-[40px] mb-[30px]"
              />
              <p className="text-colorGray text-xl !mb-6 !w-[90%]">
                {Description1}
              </p>
              <p className="text-colorGray text-xl !w-[90%]">{Description2}</p>
            </div>
            <div className="w-5/12 bg-colorWhite p-6">
              <PortfolioContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BluePrintForSuccess;
