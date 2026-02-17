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
                  Future-Ready Apps Powered by
                  <br className="hidden md:block" />{" "}
                  <span className="bg-clip-text text-transparent bg-theme-gradient">
                    AI & AWS
                  </span>{" "}
                  Expertise
                </>
              }
            />
            <h2 className="sxl:text-2xl md:text-xl text-base text-white my-5">
              Transforming ideas into intelligent, scalable applications with
              <br className="hidden slg:block" /> the perfect mix of AI, product
              engineering, and cloud expertise.
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
