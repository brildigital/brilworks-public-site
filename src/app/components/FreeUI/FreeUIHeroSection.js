"use client";
import Image from "next/image";
import React from "react";
import ButtonV2 from "../Common/ButtonV2";
import Heading from "../HTMLComponents/Heading";

const FreeUIHeroSection = () => {
  return (
    <div className="bg-detail-hero">
      <div className="h-full min-h-[600px] md:max-h-[980px] max-h-full">
        <div className="container max-w-[1280px] main-section-padding !pt-24 mx-auto">
          <section className="flex flex-col md:flex-row items-center justify-start md:h-screen h-full min-h-[600px] md:max-h-[840px] max-h-full lg:gap-16 md:gap-10 gap-6">
            <div className="md:w-1/2 w-full">
              <p className="text-themeColor md:text-lg text-base md:!mb-7.5 !mb-5 px-3 py-1 bg-white rounded-full w-fit">
                Limited Time Offer
              </p>
              <Heading
                type="h1"
                className="text-white"
                text="Get 5 Free UI/UX Screens Today!"
              />
              <p className="text-white lg:text-2xl md:text-xl text-lg !mt-5">
                Boost your project with custom designs—no cost, no catch.
                Experience our world-class design services with zero commitment.
              </p>
              <div className="flex flex-row md:items-center items-start justify-start gap-5 lg:mt-10 md:my-7.5 my-5">
                <ButtonV2 size="large" className="w-fit" label="Claim Now" />
                <ButtonV2
                  size="large"
                  redirect="#section-contact-form"
                  className="w-fit !bg-transparent !border-colorWhite hover:!bg-colorWhite hover:text-themeColor"
                  label="View Portfolio"
                  scrollingButton
                />
              </div>
              <div className="li-tick-mark">
                <ul className="flex flex-wrap md:gap-6 gap-4">
                  <li className="blue small text-lg leading-tight text-white">
                    Delivered in 7 days
                  </li>
                  <li className="blue small text-lg leading-tight text-white">
                    Premium quality
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <Image
                className="rounded-2xl md:h-[650px] object-cover"
                src="/images/v2/ui-ux-banner.webp"
                alt="hire-banner"
                width="565"
                height="610"
                priority
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FreeUIHeroSection;
