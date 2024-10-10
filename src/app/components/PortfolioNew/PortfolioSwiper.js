"use client";
import React, { useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PortfolioSwiper = ({ imagesData }) => {
  const [swiperActiveIndex, setSwiperActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    const activeSlideIndex = swiper.activeIndex;
    setSwiperActiveIndex(activeSlideIndex);
  };

  return (
    // <div className="w-full">
    <div className="overflow-hidden ">
      <div className="">
        <Swiper
          className="portfolio-swipers"
          modules={[Navigation]}
          navigation={true}
          onSlideChange={handleSlideChange}
          slidesPerView={1}
          speed={1500}
        >
          {imagesData.map(({ filename }, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="style_sec3_swiper_home !p-0 !w-4/5">
                  <Image
                    className="!pb-14 !w-[90%] mx-auto"
                    src={filename}
                    width="400"
                    height="300"
                    alt={filename}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
    // </div>
    // <div>
    //   <Swiper
    //     className="max-w-[400px]"
    //     modules={[Navigation]}
    //     navigation={true}
    //     onSlideChange={handleSlideChange}
    //     slidesPerView={1}
    //     speed={1000}
    //   >
    //     <div className="max-w-[400px]">
    //       <div className="home_sec3_box overflow-hidden max-w-[400px]">
    //         <div className="dots_flex md:!px-[30px] !mx-4">
    //           <div className="dots md:ml-8 ml-4"></div>
    //           <div className="dots"></div>
    //           <div className="dots"></div>
    //         </div>
    //         <div className=""></div>
    //         {imagesData.map(({ filename }, index) => {
    //           return (
    //             <SwiperSlide key={index}>
    //               <div className="max-w-[400px]">
    //                 <Image
    //                   className=""
    //                   src={filename}
    //                   width="100"
    //                   height="100"
    //                   alt={filename}
    //                 />
    //               </div>
    //               {/* <Image src={filename} width="1000" height="100" alt={filename} /> */}
    //             </SwiperSlide>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </Swiper>
    // </div>
  );
};

export default PortfolioSwiper;
