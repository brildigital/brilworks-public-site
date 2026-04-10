"use client";
import React from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import { useMediaQuery } from "react-responsive";

const ProcessAndEnhanceSection = ({ processAndEnhanceBlock }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className="bg-themeLight">
      <div className="container max-w-[1280px] main-section-padding lg:!py-16 mx-auto">
        <Swiper
          className="!w-[95%] !mx-auto"
          modules={[Pagination, Autoplay]}
          spaceBetween={isMobile ? 10 : 21}
          autoplay={{ delay: 500 }}
          speed={2000}
          loop={true}
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
            processAndEnhanceBlock?.slice(0, 3)?.map(
              ({ image, title, description }, index) =>
                title &&
                description && (
                  <SwiperSlide
                    className={`${
                      index === processAndEnhanceBlock?.length - 1
                        ? "!border-r-1"
                        : "lg:!border-r"
                    } border-borderGray mb-4 sm:mb-0`}
                    key={index}
                  >
                    <div
                      className={`md:max-w-[180px] w-full ${
                        index === 0
                          ? "md:mr-auto md:ml-0 mx-auto"
                          : index === 1
                          ? "mx-auto"
                          : "md:ml-auto md:mr-0 mx-auto"
                      }`}
                    >
                      <p className="text-colorBlack lg:!text-[34px] md:!text-3xl !text-2xl leading-tight gap-2 font-medium lg:mb-4 mt-4 text-center md:text-left">
                        {title}
                      </p>
                      <p className="!mb-4 md:text-lg text-base text-center md:text-left">
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
