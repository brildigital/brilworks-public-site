"use client";
import React from "react";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/virtual";
import { Pagination, Autoplay, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import Image from "next/image";

const PortfolioSection2 = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  const processAndEnhanceBlock = [
    {
      Key: "30%",
      Value: "Increase in Employee Participation",
      image: "/images/growth-up.svg",
    },
    {
      Key: "80%",
      Value: "Reduction in Manual Participation",
      image: "/images/growth-down.svg",
    },
    {
      Key: "40hrs",
      Value: "Saved Monthly",
      image: "/images/time-icon-black.svg",
    },
  ];

  return (
    <div className="bg-colorYellow process-enhancement">
      <div className="container max-w-[1440px] lg:px-[70px] px-4 lg:py-[60px] py-8 mx-auto">
        <Swiper
          className="!w-[95%] !mx-auto"
          modules={[Pagination, Autoplay, Virtual]}
          spaceBetween={isMobile ? 10 : 21}
          autoplay={{ delay: 500 }}
          speed={2000}
          loop={true}
          virtual={isTablet}
          shouldswiperupdate="true"
          pagination={{ clickable: true }}
          breakpoints={{
            1600: {
              slidesPerView: 3,
            },
            1475: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 1,
            },
          }}
        >
          {processAndEnhanceBlock?.length > 0 ? (
            processAndEnhanceBlock?.map(
              ({ Key, Value, image }, index) =>
                Key &&
                Value && (
                  <SwiperSlide key={index}>
                    <div
                      className={`w-full flex justify-start items-center h-full flex-col ${
                        index === processAndEnhanceBlock?.length - 1
                          ? "!border-r-1"
                          : "lg:!border-r"
                      } border-[#A7A7A7]`}
                      key={index}
                    >
                      <div className="text-colorBlack flex items-center lg:text-5xl text-[40px] leading-tight gap-2 font-bold lg:mb-4 mt-4">
                        <Image
                          className="w-6 h-6 mr-2"
                          src={image}
                          alt={Key}
                          width="24"
                          height="24"
                          priority
                        />
                        {Key}
                      </div>
                      <p
                        className={`${
                          index === 2 ? "md:w-[28%] w-full" : "md:w-1/2 w-full"
                        } !mb-4 md:text-xl text-lg text-center`}
                      >
                        {Value}
                      </p>
                    </div>
                  </SwiperSlide>
                )
            )
          ) : (
            <div className="w-full flex items-center justify-center py-10">
              <FetchDataSpinner />
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default PortfolioSection2;
