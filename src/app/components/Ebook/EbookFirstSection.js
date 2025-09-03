import Image from "next/image";
import React from "react";
import PortfolioContactForm from "../Portfolio/PortfolioContactForm";
import Heading from "../HTMLComponents/Heading";

const EbookFirstSection = ({ title, imageSrc, ebookFileUrl }) => {
  return (
    <div className="lg:mt-[6rem] mt-[4rem]">
      <div
        className="container mx-auto max-w-[1280px] main-sectipn-padding"
        id="download-ebook-form"
      >
        <Heading
          className="w-full lg:w-3/4 text-center mx-auto md:py-10 py-7.5 slg:mb-6"
          type="h1"
          data={title}
        />
        <div className="slg:w-[70%] w-[90%] mx-auto flex slg:flex-row flex-col gap-20 items-center justify-center h-full">
          <div className="flex items-center justify-center">
            <Image
              className="max-w-[300px] md:max-w-[348px] h-auto"
              src={imageSrc}
              alt="ebook-image"
              width="348"
              height="570"
              priority
            />
          </div>
          <div className="bg-colorWhite lg:py-14 py-6 lg:px-8 px-4 rounded-xl border border-themeColor flex items-center justify-center max-w-[464px]">
            <PortfolioContactForm
              darkMode={false}
              description={
                "Downloaded by 120+ CTOs from Startups and Enterprises"
              }
              showPhoneField={false}
              showCompanyField={true}
              downloadFileUrl={ebookFileUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookFirstSection;
