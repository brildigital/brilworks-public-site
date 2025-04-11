"use client";
import React from "react";
import Heading from "../HTMLComponents/Heading";
import PortfolioContactForm from "./PortfolioContactForm";
import Image from "next/image";

const BluePrintForSuccess = ({ blueprintForSuccess, casestudyFileUrl }) => {
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
    <div className="download-case-study">
      <div id="blueprint-section" className="banner-layer">
        <div className="container max-w-[1280px] main-section-padding mx-auto reveal">
          <div className="flex flex-col lg:flex-row items-center lg:gap-16 md:gap-10 gap-6">
            <div className="lg:w-1/2 w-full">
              <Heading
                type="h2"
                className="text-colorWhite lg:!text-[34px] md:!text-3xl !text-2xl mb-5"
                data={
                  blueprintForSuccess?.[0]?.Title || "Download the Case Study!"
                }
              />
              <p className="text-colorWhite md:text-lg text-base !mb-7.5">
                {blueprintForSuccess?.[0]?.Description1 ||
                  "You're just a step away from creating exceptional business ideas. This case study reveals how BrilWorks assists successful companies in extending their tech teams."}
              </p>
              <p className="text-colorWhite lg:text-2xl md:text-xl text-lg font-medium !mb-5">
                Enter the details to proceed.
              </p>
              <PortfolioContactForm
                companyNotRequired={true}
                downloadFileUrl={casestudyFileUrl}
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <Image
                className="rounded-2xl"
                src="/images/v2/download-cs.webp"
                alt="img-c"
                width="565"
                height="620"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BluePrintForSuccess;
