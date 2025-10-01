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
                // <>
                //   AI-Driven{" "}
                //   <span className="bg-clip-text text-transparent bg-theme-gradient">
                //     Product Engineering
                //   </span>{" "}
                //   <br className="hidden md:block" /> for Startups and
                //   Enterprises
                // </>
                // <>
                //   Providing{" "}
                //   <span className="bg-clip-text text-transparent bg-theme-gradient">
                //     Nextgen
                //   </span>{" "}
                //   Technology <br className="hidden md:block" /> Solutions for
                //   your next leap
                // </>
              }
            />
            <h2 className="sxl:text-2xl md:text-xl text-base text-white my-5">
              Transforming ideas into intelligent, scalable applications with
              <br className="hidden slg:block" /> the perfect mix of AI, product
              engineering, and cloud expertise.
              {/* We build AI-powered mobile and web apps, helping startups launch
              faster
              <br className="hidden slg:block" /> and enterprises innovate with
              future-ready product engineering. */}
              {/* AI-powered software. <br className="hidden slg:block" /> Backed by
              vetted-expertise in cutting-edge technologies and modern
              frameworks,
              <br className="hidden slg:block" /> we serve startups, growing
              tech teams, and mid-sized companies. */}
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
