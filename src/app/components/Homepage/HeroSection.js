import React from "react";
import ButtonV2 from "../Common/ButtonV2";
import Heading from "../HTMLComponents/Heading";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="banner-layer h-screen min-h-[600px] max-h-[980px]">
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
          <div className="flex flex-col items-start justify-center min-h-[600px] max-h-[980px] h-screen">
            <Heading
              type="h1"
              className="text-white lg:mt-20 mt-10"
              text={
                <>
                  Providing&nbsp;
                  <span className="bg-clip-text text-transparent bg-theme-gradient">
                    Nextgen
                  </span>
                  &nbsp; Technology <br /> Solutions for your next leap
                </>
              }
            />
            <h2 className="sxl:text-2xl md:text-xl text-base text-white my-5">
              Accelerating product timelines, optimizing AWS, and delivering Gen
              AI
              <br className="hidden slg:block" />
              solutions, White label apps, and Product engineering expertise in
              Next.js,
              <br className="hidden slg:block" /> Java, and low-code/no-code
              platforms.
            </h2>
            <ButtonV2
              size="large"
              label="Book Free Consultation"
              className="md:mt-8 mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
