"use client";
import "./homepage.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import StoryblokClient from "storyblok-js-client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { useEffect, useState } from "react";
import FetchDataSpinner from "./FetchDataSpinner";
import { scrollEffect } from "../lib/commonfunction";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

const BrilworksSoftwareReview = () => {
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

  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <>
      <div className="software-review-container ">
        {/* <div className="clutch-widget">
          <iframe
            id="iframe-0.7673398699825025"
            style={{
              border: "none",
              overflow: "hidden",
              display: "block",
              height: "357px",
            }}
            title="&#091;iFrameSizer&#093;iframe-0.7673398699825025:0:0:mouseleave:674:121812"
            src="https://widget.clutch.co/widgets/get/12?ref_domain=192.168.50.12&uid=1881351&primary_color=%2308537E&secondary_color=%2308537E&rel_nofollow=true&reviews=2054376%2C2040492%2C2032289%2C2010928%2C1968060%2C1960170%2C1955515%2C1946156%2C1944400%2C1942781%2C1942541%2C1941715&ref_path=/brilworks/home/"
            height="375px"
            scrolling="no"
            className="mx-auto w-[100%]"
          ></iframe>
        </div> */}
        <div className="software-review-head lg:!pt-[8rem] !pt-[0rem]">
          <div className="sec4_main_home">
            <div
              className={`md:py-[5rem] py-[2rem]  ${isMobile ? "!pr-12" : ""} `}
            >
              <div className="clutch-widget ">
                <h2 className="md:mr-0 mr-8">
                  <span className="md:!text-[45px] !font-bold text-[25px]">
                    Reviews
                  </span>

                  <span className="md:!text-[32px] text-[25px]">
                    {isMobile ? (
                      <>
                        /<br /> 5.0 <br />
                      </>
                    ) : (
                      <>/ 5.0</>
                    )}
                  </span>

                  <span className="star_clutch !text-[20px]">
                    <FontAwesomeIcon icon={faStar} className="review_stars" />
                    <FontAwesomeIcon icon={faStar} className="review_stars" />
                    <FontAwesomeIcon icon={faStar} className="review_stars" />
                    <FontAwesomeIcon icon={faStar} className="review_stars" />
                    <FontAwesomeIcon icon={faStar} className="review_stars" />
                  </span>
                </h2>

                <div className="clutch-power lg:!relative !static mt-[20px] md:mr-0 ml-8">
                  <Link href="https://widget.clutch.co/widgets/get/12?ref_domain=192.168.50.12&uid=1881351&primary_color=%2308537E&secondary_color=%2308537E&rel_nofollow=true&reviews=2054376%2C2040492%2C2032289%2C2010928%2C1968060%2C1960170%2C1955515%2C1946156%2C1944400%2C1942781%2C1942541%2C1941715&ref_path=/brilworks/home/">
                    <p
                      className={`!text-[1rem] flex items-baseline ${
                        isMobile ? "flex-col" : ""
                      } `}
                    >
                      Powered by
                      <img
                        decoding="async"
                        loading="lazy"
                        className="w-[70px] ml-1"
                        src="/images/clutch-img.svg"
                        alt="clutch"
                      />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          className="!w-{90%] reveal"
          modules={[Pagination]}
          spaceBetween={isMobile ? 10 : 21}
          loopFillGroupWithBlank={true}
          speed={isMobile ? 1000 : 1500}
          loop={false}
          shouldSwiperUpdate={true}
          pagination={{ clickable: true }}
          breakpoints={{
            1475: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            767: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            575: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
        >
          {reviewData?.length > 0 ? (
            reviewData?.map((dataItem, index) => (
              <SwiperSlide key={index}>
                <div className="wpb_wrapper">
                  <div className="clutch-swiper home_sec3_box mr-[1px]">
                    <div className="dots_flex">
                      <div className="dots !bg-[#00dfb8]"></div>
                      <div className="dots"></div>
                      <div className="dots"></div>
                    </div>
                    <div className="white-background">
                      <div className="clutch_content">
                        <p>{dataItem?.content?.content}</p>
                      </div>
                      <div className="clutch_author">
                        <div className="clutch_img"></div>
                        <div className="clutch_position">
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
            <div className="flex align-middle justify-center">
              <FetchDataSpinner />
            </div>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default BrilworksSoftwareReview;
