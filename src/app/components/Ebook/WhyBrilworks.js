import React from "react";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";

const WhyBrilworks = ({ title, description, imageSrc }) => {
  return (
    <div className="container max-w-[1280px] mx-auto main-section-padding-bottom">
      <div className="lg:mb-[60px] mb-8">
        <Heading type="h2" className="text-center mb-5" data={title || ""} />
        <p className="md:text-xl text-lg text-colorGray w-full mx-auto text-center !mb-5">
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
  );
};

export default WhyBrilworks;
