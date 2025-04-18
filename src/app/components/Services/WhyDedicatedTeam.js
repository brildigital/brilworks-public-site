"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Heading from "../HTMLComponents/Heading";
import { scrollEffect } from "../lib/commonFunction";

const WhyDedicatedTeam = ({ title, cardData }) => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);
  return (
    <div className="bg-sectionBG">
      <div className="container max-w-[1280px] main-section-padding mx-auto reveal">
        <Heading
          type="h2"
          className="lg:!text-[34px] md:!text-3xl !text-2xl"
          text={title}
        />
        <div className="grid md:grid-cols-3 grid-cols-2 lg:!py-10 md:!py-7.5 !py-5 lg:gap-10 md:gap-7.5 gap-6 reveal">
          {cardData.map(({ title, imgSrc, alt }) => (
            <div
              key={title}
              className={`border border-borderGray rounded-2xl benefit-developer-effect md:px-8 md:py-5 p-3 bg-white`}
            >
              <Image
                src={imgSrc}
                alt={alt}
                className="w-8 mx-auto"
                width="32"
                height="32"
              />
              <p className="!mt-4 lg:!text-xl md:!text-lg text-base text-center">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyDedicatedTeam;
