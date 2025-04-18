"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Heading from "../HTMLComponents/Heading";

const WhatUserSays = ({ userSaysData }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  return (
    <div className="bg-themeLight">
      <div className="container max-w-[1280px] main-section-padding mx-auto">
        <Heading
          type="h2"
          className="text-colorBlack lg:!text-[34px] md:!text-3xl !text-2xl"
          text="What Users Say"
        />
        <Splide
          className="our-team-swiper lg:py-10 md:py-7.7 py-5"
          options={{
            gap: 24,
            arrows: isMobile || isTablet ? true : false,
            pagination: false,
            isNavigation: isMobile || isTablet ? true : false,
            perPage: isMobile ? 1 : isTablet ? 2 : 3,
          }}
        >
          {userSaysData?.map((item, index) => {
            return (
              <SplideSlide key={index}>
                <div className="border border-borderGray bg-white rounded-2xl p-5 flex flex-col h-full">
                  <div className="flex-1">
                    <Image
                      className="w-[44px] h-[44px] md:mb-6 mb-4"
                      src="/images/quote.svg"
                      width={32}
                      height={32}
                      alt={`quote-${index + 1}`}
                    />
                    <p className="!mb-4 md:text-lg text-base w-11/12">
                      {item.Value || ""}
                    </p>
                  </div>
                  <div>
                    <h2 className="md:text-xl text-lg font-medium">
                      {item?.Key || ""}
                    </h2>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default WhatUserSays;
