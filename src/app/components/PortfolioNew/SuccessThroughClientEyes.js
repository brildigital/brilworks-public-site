"use client";
import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/virtual";
import { Pagination, Autoplay, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../HTMLComponents/Heading";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import StoryblokClient from "storyblok-js-client";
import Link from "next/link";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

const SuccessThroughClientEyes = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [reviewData, setReviewData] = useState(null);

  useEffect(() => {
    Storyblok.get("cdn/stories/", {
      starts_with: "software-review/",
      per_page: 20,
      version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    })
      .then((response) => {
        setReviewData(response.data?.stories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full mx-auto software-review-container">
      <div className="container max-w-[1440px] mx-auto pl-[0px] pt-[60px]">
        <div className="w-full flex items-center justify-between mb-[30px]">
          {/* <div></div> */}
          <div>
            <Heading
              type="h2"
              className="text-center"
              text="SUCCESS THROUGH OUR CLIENTS' EYES"
            />
          </div>
          <div className="flex items-center justify-end">
            <Link href="https://clutch.co/profile/brilworks-software#reviews">
              <p className="text-themeColor font-semibold p-4 rounded-lg">{`View All >>`}</p>
            </Link>
          </div>
        </div>
        <Swiper
          className="!w-full !mx-auto mb-10"
          modules={[Pagination, Autoplay, Virtual]}
          spaceBetween={isMobile ? 10 : 21}
          autoplay={{ delay: 500 }}
          loopfillgroupwithblank
          speed={isMobile ? 2000 : 2500}
          loop={true}
          shouldswiperupdate="true"
          pagination={{ clickable: true }}
          virtual
          breakpoints={{
            1475: {
              slidesPerView: 4,
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
          {reviewData?.length > 0 ? (
            reviewData?.map((dataItem, index) => (
              <SwiperSlide key={index}>
                <div className="wpb_wrapper">
                  <div className="clutch-swiper home_sec3_box !border-none bg-[#E7F5F5] !mx-[1px] !max-w-[335px]">
                    <div className="p-6 mr-4">
                      <div className="clutch_content">
                        <p>{dataItem?.content?.content}</p>
                      </div>
                      <div className="clutch_author">
                        <div className="clutch_img"></div>
                        <div className="clutch_position !mb-2">
                          <p>{dataItem?.content?.author}</p>
                          <p>
                            <span className="star_clutch">
                              <FontAwesomeIcon
                                icon={faStar}
                                className="review_stars"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="review_stars"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="review_stars"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="review_stars"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="review_stars"
                              />
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
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

export default SuccessThroughClientEyes;
