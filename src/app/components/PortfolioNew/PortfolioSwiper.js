"use client";
import React, { useState } from "react";
import Image from "next/image";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PortfolioSwiper = ({ imagesData }) => {
  const [swiperActiveIndex, setSwiperActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    const activeSlideIndex = swiper.activeIndex;
    setSwiperActiveIndex(activeSlideIndex);
  };

  return (
    <div className="overflow-hidden ">
      <div className="">
        <Swiper
          className="portfolio-swipers"
          modules={[Pagination]}
          // onSlideChange={handleSlideChange}
          pagination={{ clickable: true }}
          slidesPerView={1}
          speed={1500}
        >
          {imagesData.length &&
            imagesData?.map(({ filename }, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="style_sec3_swiper_home !p-0 !w-4/5">
                    <Image
                      className="!pb-14 !w-[90%] mx-auto"
                      src={filename}
                      width="400"
                      height="300"
                      alt={`swiper-img-${index}`}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default PortfolioSwiper;
