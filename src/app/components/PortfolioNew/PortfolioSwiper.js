"use client";
import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PortfolioSwiper = ({ imagesData }) => {
  return (
    <div className="overflow-hidden ">
      <div className="">
        <Swiper
          className="portfolio-swipers"
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          speed={1500}
          spaceBetween={20}
        >
          {imagesData.length &&
            imagesData?.map(({ filename }, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="style_sec3_swiper_home !p-0 !w-full">
                    <Image
                      className="lg:!mb-10 mb-8 mx-auto rounded-xl swiper-img-selection"
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
