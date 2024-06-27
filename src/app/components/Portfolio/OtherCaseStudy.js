import Image from "next/image";
import Link from "next/link";
import React from "react";

const OtherCaseStudy = () => {
  return (
    <div className="section-padding">
      <div className="container max-w-[1280px] mx-auto">
        <h2 className="font-bold 2xl:text-4xl xl:text-3xl lg:text-3xl text-xl !leading-tight md:text-center text-start lg:mb-12 md:mb-8 mb-4">
          Other
          <span className="text-themeColor"> Case Studies</span>
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 gap-5">
          <Link className="cs-image-container" href="/portfolio/vugo/">
            <Image
              className="cs-hover-image rounded-2xl"
              src="/images/vugo-1.jpg"
              width="490"
              height="365"
              alt="Vugo"
            />
            <div className="cs-hover-content flex items-center justify-between !px-10">
              <div>
                <h3 className="text-3xl font-bold text-colorWhite">VUGO</h3>
              </div>
              <div className="text-3xl font-bold text-colorWhite">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="22px"
                  width="22px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                </svg>
              </div>
            </div>
          </Link>
          <Link className="cs-image-container" href="/portfolio/orokii/">
            <Image
              className="cs-hover-image rounded-2xl"
              src="/images/orokii.jpg"
              width="490"
              height="365"
              alt="Orokii"
            />
            <div className="cs-hover-content flex items-center justify-between !px-10">
              <div>
                <h3 className="text-3xl font-bold text-colorWhite">OROKII</h3>
              </div>
              <div className="text-3xl font-bold text-colorWhite">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="22px"
                  width="22px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OtherCaseStudy;
