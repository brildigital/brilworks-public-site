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

const ProcessAndEnhanceSection = ({ processAndEnhanceBlock }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  function getGridWidth(num) {
    switch (num) {
      case 2:
        return "lg:w-[40%] w-[80%]";
      case 3:
        return "lg:w-[50%] w-[60%]";
      case 4:
        return "lg:w-[60%] w-[60%]";
      case 5:
        return "lg:w-[65%] w-[60%]";
      case 6:
        return "lg:w-[70%] w-[80%]";
      default:
        return "lg:w-[40%] w-[80%]";
    }
  }

  const dynamicWidthClass = getGridWidth(processAndEnhanceBlock?.length);

  return (
    <div className="bg-sectionBG process-enhancement">
      <div className="lg:px-[70px] px-4 lg:py-[30px] py-8">
        <div className="container max-w-[1440px] mx-auto">
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
                ({ Key, Value }, index) =>
                  Key &&
                  Value && (
                    <SwiperSlide key={index}>
                      <div
                        className={`w-full ${
                          index === 0 ? "pl-0" : "md:pl-4 lg:pl-6"
                        } flex justify-start items-start h-full flex-col ${
                          index === processAndEnhanceBlock?.length - 1
                            ? "!border-r-1"
                            : "lg:!border-r"
                        } border-themeColor`}
                        key={index}
                      >
                        <span className="text-themeColor lg:text-5xl text-[40px] leading-tight font-bold lg:mb-4 mt-4">
                          {Key}
                        </span>
                        <p
                          className={`!mb-4 md:text-xl text-lg text-left text-colorGray ${dynamicWidthClass}`}
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
    </div>
  );
};

export default ProcessAndEnhanceSection;
