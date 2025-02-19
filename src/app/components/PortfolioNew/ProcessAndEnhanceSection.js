"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/virtual";
import { Pagination, Autoplay, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

const ProcessAndEnhanceSection = ({ processAndEnhanceBlock }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

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
              ({ image, title, description }, index) =>
                title &&
                description && (
                  <SwiperSlide key={index}>
                    <div
                      className={`w-full flex justify-start items-center h-full flex-col ${
                        index === processAndEnhanceBlock?.length - 1
                          ? "!border-r-1"
                          : "lg:!border-r"
                      } border-[#A7A7A7]`}
                      key={index}
                    >
                      <div className="text-black flex items-center lg:text-5xl text-[40px] leading-tight gap-2 font-bold lg:mb-4 mt-4">
                        <Image
                          className="w-6 h-6 mr-2"
                          src={image?.filename}
                          alt={title}
                          width="24"
                          height="24"
                          priority
                        />
                        {title}
                      </div>
                      <p
                        className={`${
                          index === 2 &&
                          description?.trim()?.split(/\s+/)?.length < 3
                            ? "md:w-[30%] w-full"
                            : "md:w-[60%] w-full"
                        } !mb-4 md:text-xl text-lg text-center`}
                      >
                        {description}
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

export default ProcessAndEnhanceSection;
