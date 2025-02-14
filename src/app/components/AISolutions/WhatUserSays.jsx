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
    <div className="container max-w-[1440px] md:px-[60px] px-[20px] lg:px-[100px] 3xl:px-[120px] mx-auto flex flex-col gap-10 sm:mb-0 mb-10">
      <Heading
        className="text-center"
        type="h2"
        data={`What <span class="h1-border-b">Users</span> Say`}
      />
      <Splide
        className="more-success-story"
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
              <div className="border border-gray-200 rounded-[30px] p-5 flex flex-col">
                <Image
                  className="w-[44px] h-[44px] mb-6"
                  src="/images/quote.svg"
                  width={32}
                  height={32}
                  alt="quote"
                ></Image>
                <p className="!mb-4">{item.Value || ""}</p>
                <h2 className="text-lg font-semibold">{item?.Key || ""}</h2>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default WhatUserSays;
