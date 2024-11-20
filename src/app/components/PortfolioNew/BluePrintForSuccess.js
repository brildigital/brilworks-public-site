import React from "react";
import Heading from "../HTMLComponents/Heading";
import PortfolioContactForm from "./PortfolioContactForm";

const BluePrintForSuccess = ({ blueprintForSuccess }) => {
  const blueprintForSuccessDescription =
    blueprintForSuccess?.[0]?.Description2 || "";

  const highlightedText = blueprintForSuccessDescription
    .replace(
      /sales@brilworks\.com/g,
      `<span class="font-semibold">sales@brilworks.com</span>`
    )
    .replace(
      /\+91 93136 44148/g,
      `<span class="font-semibold">+91 93136 44148</span>`
    );

  return (
    <div id="blueprint-section" className="bg-colorYellow">
      <div className="container max-w-[1440px] md:px-[60px] px-[20px] lg:px-[100px] 3xl:px-[120px] lg:py-[60px] md:py-[40px] py-[30px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-[30px]">
          <div className="lg:w-[58%] w-full">
            <Heading
              type="h2"
              data={
                blueprintForSuccess?.[0]?.Title ||
                `Download the <span class="h2-bg-border-b-yellow">Case Study!</span>`
              }
              className="!text-colorBlack mb-[30px]"
            />
            <p className="md:text-lg text-base !mb-6">
              {blueprintForSuccess?.[0]?.Description1}
            </p>
            <p
              className="md:text-lg text-base"
              dangerouslySetInnerHTML={{ __html: highlightedText }}
            />
          </div>
          <div className="lg:w-[42%] w-full bg-colorWhite p-[30px] rounded-[30px]">
            <p className="text-2xl !mb-5">Enter the details.</p>
            <PortfolioContactForm
              companyNotRequired={true}
              newGradient={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BluePrintForSuccess;
