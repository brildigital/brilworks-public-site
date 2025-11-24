import React from "react";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";

const AboutOurExpertise = ({ title, description1, description2 }) => {
  return (
    <div className="bg-[url(/images/v2/overview-bubble.svg)] bg-no-repeat bg-[0%_60px] md:bg-[0%_110px] sxl:bg-[17.5%_142px]">
      <div className="container max-w-[1280px] main-section-padding mx-auto reveal">
        <Image
          src="/images/v2/our-expertise-img.webp"
          width={120}
          height={120}
          alt="overview-icon"
          className="lg:w-28 md:w-20 w-16 lg:h-32 md:h-24 h-20 lg:mb-7.5 mb-5"
        />
        <Heading
          type="h2"
          className="lg:!text-[34px] md:!text-3xl !text-2xl mb-4"
          text={title}
        />

        {description1 && <p className="md:text-lg text-base">{description1}</p>}

        {description2 && (
          <p className="md:text-lg text-base !mt-5">{description2}</p>
        )}
      </div>
    </div>
  );
};

export default AboutOurExpertise;
