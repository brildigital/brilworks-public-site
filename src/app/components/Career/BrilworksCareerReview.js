"use client";
import "./career.scss";
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

const BrilworksCareerReview = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

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
        className="software-review-container "
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
        <div className="lg:!pt-[8rem] !pt-[4rem] career_review">
          <Swiper
            className="!w-{90%]"
            modules={[Pagination]}
            spaceBetween={isMobile ? 10 : 21}
            slidesPerView={
              isMobile ? 1 : 3 && isTablet ? 2 : 3 && isDesktop ? 3 : 3
            }
            slidesPerGroup={isMobile ? 1 : 3}
            loopFillGroupWithBlank={true}
            speed={1500}
            loop={true}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="wpb_wrapper">
                <div className="clutch-swiper home_sec3_box">
                  <div className="dots_flex">
                    <div className="dots !bg-[#00dfb8]"></div>
                    <div className="dots"></div>
                    <div className="dots"></div>
                  </div>
                  <div className="white-background">
                    <div className="clutch_content">
                      <p>Good place to work and learn new things.</p>
                    </div>
                    <div className="clutch_author">
                      <div className="clutch_img"></div>
                      <div className="clutch_position">
                        <p>Software Developer</p>
                        <p>
                          <span className="star_clutch">
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
            <SwiperSlide>
              <div className="wpb_wrapper">
                <div className="clutch-swiper home_sec3_box">
                  <div className="dots_flex">
                    <div className="dots !bg-[#00dfb8]"></div>
                    <div className="dots"></div>
                    <div className="dots"></div>
                  </div>
                  <div className="white-background">
                    <div className="clutch_content">
                      <p>
                        This has just been like one of the dream companies to
                        work in.
                      </p>
                    </div>
                    <div className="clutch_author">
                      <div className="clutch_img"></div>
                      <div className="clutch_position">
                        <p>Software Developer</p>
                        <p>
                          <span className="star_clutch">
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
            <SwiperSlide>
              <div className="wpb_wrapper">
                <div className="clutch-swiper home_sec3_box">
                  <div className="dots_flex">
                    <div className="dots !bg-[#00dfb8]"></div>
                    <div className="dots"></div>
                    <div className="dots"></div>
                  </div>
                  <div className="white-background">
                    <div className="clutch_content">
                      <p>Good work-life balance and supportive team members.</p>
                    </div>
                    <div className="clutch_author">
                      <div className="clutch_img"></div>
                      <div className="clutch_position">
                        <p>Software Developer</p>
                        <p>
                          <span className="star_clutch">
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
            <SwiperSlide>
              <div className="wpb_wrapper">
                <div className="clutch-swiper home_sec3_box">
                  <div className="dots_flex">
                    <div className="dots !bg-[#00dfb8]"></div>
                    <div className="dots"></div>
                    <div className="dots"></div>
                  </div>
                  <div className="white-background">
                    <div className="clutch_content">
                      <p>
                        Challenging work, motivating clients, supportive
                        management & great co-workers.
                      </p>
                    </div>
                    <div className="clutch_author">
                      <div className="clutch_img"></div>
                      <div className="clutch_position">
                        <p>Software Developer</p>
                        <p>
                          <span className="star_clutch">
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
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BrilworksCareerReview;
