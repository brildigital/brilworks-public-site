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

const Storyblok = new StoryblokClient({
  accessToken: process.env.accessToken,
});

const BrilworksSoftwareReview = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [reviewData, setReviewData] = useState(null);

  useEffect(() => {
    Storyblok.get("cdn/stories/", {
      // starts_with: "blog/",       // If want to fetch data from blogs
      starts_with: "software-review/",
      per_page: 20,
      version: "draft" || "published",
    })
      .then((response) => {
        setReviewData(response.data?.stories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div
        className="software-review-container !px-8"
        // className="md:pt-[128px] pt-[32px]"
      >
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
        <div class="software-review-head">
          <div class="sec4_main_home">
            <div class="py-[5rem]">
              <div class="clutch-widget">
                <p>
                  <span class="md:!text-[45px] !font-bold">Reviews</span> / 5.0{" "}
                  <span class="star_clutch !text-[20px]">
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#fbd000" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#fbd000" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#fbd000" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#fbd000" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#fbd000" }}
                    />
                  </span>
                </p>

                <div class="clutch-power">
                  <Link href="https://widget.clutch.co/widgets/get/12?ref_domain=192.168.50.12&uid=1881351&primary_color=%2308537E&secondary_color=%2308537E&rel_nofollow=true&reviews=2054376%2C2040492%2C2032289%2C2010928%2C1968060%2C1960170%2C1955515%2C1946156%2C1944400%2C1942781%2C1942541%2C1941715&ref_path=/brilworks/home/">
                    <p className="!text-[1rem] flex items-baseline">
                      Powered by
                      <img
                        className="w-[70px]"
                        src="https://www.brilworks.com/wp-content/uploads/2023/05/clutch-img.svg"
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
          className="!w-{90%]"
          modules={[Pagination]}
          spaceBetween={21}
          slidesPerView={4}
          slidesPerGroup={isMobile ? 1 : 4}
          loopFillGroupWithBlank={true}
          speed={1500}
          loop={true}
          pagination={{ clickable: true }}
        >
          {reviewData?.length
            ? reviewData?.map((dataItem, index) => (
                <SwiperSlide key={index}>
                  <div class="wpb_wrapper">
                    <div class="clutch-swiper home_sec3_box">
                      <div class="dots_flex">
                        <div class="dots !bg-[#00dfb8]"></div>
                        <div class="dots"></div>
                        <div class="dots"></div>
                      </div>
                      <div class="white-background">
                        <div class="clutch_content">
                          <p>{dataItem.content.content}</p>
                        </div>
                        <div class="clutch_author">
                          <div class="clutch_img"></div>
                          <div class="clutch_position">
                            <p>{dataItem.content.author}</p>
                            <p>
                              <span class="star_clutch">
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "#fbd000" }}
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "#fbd000" }}
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "#fbd000" }}
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "#fbd000" }}
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "#fbd000" }}
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
            : null}
        </Swiper>
      </div>
    </>
  );
};

export default BrilworksSoftwareReview;
