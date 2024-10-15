import React from "react";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";

const WhyBrilworks = ({ title, description, imageSrc }) => {
  return (
    <div className="lg:px-[70px] px-4 lg:pt-[60px] pt-8">
      <div className="container max-w-[1440px] mx-auto our-work-list-icon">
        <div className="lg:mb-[60px] mb-8">
          <Heading
            type="h2"
            className="text-center mb-5 uppercase"
            text={title || ""}
          />
          <p className="md:text-xl text-lg text-colorGray lg:w-4/5 w-full mx-auto text-center">
            {description || ""}
          </p>
          <Image
            className=""
            src={imageSrc || ""}
            alt="why-brilworks"
            width="1200"
            height="480"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyBrilworks;
