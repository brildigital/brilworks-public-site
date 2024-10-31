import Image from "next/image";
import React from "react";
import PortfolioContactForm from "../PortfolioNew/PortfolioContactForm";

const EbookFirstSection = ({ title, imageSrc }) => {
  return (
    <div className="lg:mt-[6rem] mt-[4rem]">
      <div
        className="container mx-auto max-w-[1440px]"
        id="download-ebook-form"
      >
        <h1
          className="md:text-center text-left lg:w-[70%] mx-auto w-full px-4 xl:text-[56px] lg:text-[42px] md:text-[32px] text-[22px] md:py-10 py-8 !font-bold slg:mb-6"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="slg:w-[70%] w-[90%] mx-auto flex slg:flex-row flex-col gap-20 items-center justify-center h-full">
          <div className="flex items-center justify-center">
            <Image
              className="max-w-[300px] md:max-w-[348px] h-auto"
              src={imageSrc}
              alt={"ebook-image"}
              width="348"
              height="570"
              priority
            />
          </div>
          <div className="bg-colorWhite lg:py-14 py-6 lg:px-8 px-4 rounded-xl border border-themeColor flex items-center justify-center max-w-[464px]">
            <PortfolioContactForm
              description={
                "Downloaded by 120+ CTOs from Startups and Enterprises"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookFirstSection;
