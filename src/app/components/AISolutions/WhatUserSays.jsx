"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

const WhatUserSays = ({ userSaysData }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  return (
    <div className="container max-w-[1440px] md:px-[60px] px-[20px] lg:px-[100px] 3xl:px-[120px] mx-auto flex flex-col gap-10 sm:mb-0 mb-10">
      <h2 className="text-2xl sm:text-3xl md:text-5xl text-center font-semibold">
        What Users Say
      </h2>
      <Splide
        className="more-success-story"
        options={{
          gap: 24,
          arrows: true,
          pagination: false,
          isNavigation: true,
          perPage: isMobile ? 1 : isTablet ? 2 : 3,
        }}
      >
        {userSaysData?.map((item, index) => {
          return (
            <SplideSlide key={index}>
              <div className="border border-gray-200 rounded-[30px] p-5 flex flex-col gap-4 md:gap-6">
                <Image
                  className="w-[44px] h-[44px]"
                  src="/images/quote.svg"
                  width={32}
                  height={32}
                  alt="quote"
                ></Image>
                <p>{item.Value || ""}</p>
                <h2 className="text-lg font-semibold md:text-xl">
                  {item?.Key || ""}
                </h2>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default WhatUserSays;
