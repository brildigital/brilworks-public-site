"use client";
import "swiper/css";
import "./homepage.scss";
import "swiper/css/pagination";
import Link from "next/link";
import { HonorText } from "./BigText";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FetchDataSpinner from "./FetchDataSpinner";
import { useEffect, useState } from "react";
import { scrollEffect } from "../lib/commonfunction";

const Honors = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const dataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    };
    dataFetch();
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
      <HonorText />
      <div className="honors-swiper reveal">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loopFillGroupWithBlank={true}
          speed={1500}
          breakpoints={{
            1475: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            1028: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            991: {
              slidesPerView: 2,
              slidesPerGroup: 2,
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
          {isLoading ? (
            <div className="flex align-middle justify-center">
              <FetchDataSpinner />
            </div>
          ) : (
            <>
              <SwiperSlide>
                <div className="award ng-scope">
                  <Link
                    href="https://www.adalo.com/experts/brilworks-software"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <div className="award_sec8_img1">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/images/review-adalo.png"
                        alt="adalo expert"
                      />
                    </div>

                    <div className="review-text">
                      <p className="ng-binding xl:text-[20px] lg:text-[18px] text-[1rem]">
                        Adalo Expert No-Code
                      </p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="award ng-scope">
                  <Link
                    href="https://partners.amazonaws.com/partners/0018a00001qmc5PAAQ/Brilworks%20Technology%20Pvt%20Ltd"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <div className="award_sec8_img1">
                      <img
                        decoding="async"
                        loading="lazy"
                        className="alignnone !w-[120px]"
                        src="/images/select-tier-service-partner-light-1.png"
                        alt="AWS Partner"
                        width="120"
                        height="120"
                      />
                    </div>

                    <div className="review-text">
                      <p className="ng-binding xl:text-[20px] lg:text-[18px] text-[1rem]">
                        AWS Partner
                      </p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="award ng-scope">
                  <Link
                    href="https://clutch.co/profile/brilworks-software#summary"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <div className="award_sec8_img1">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/images/review-clutch.png"
                        alt="Clutch Reviews"
                      />
                    </div>
                    <div className="review-text">
                      <p className="ng-binding xl:text-[20px] lg:text-[18px] text-[1rem]">
                        Clutch 9.9 Ratings
                      </p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="award ng-scope">
                  <Link
                    href="https://www.designrush.com/agency/profile/brilworks-software"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <div className="award_sec8_img1">
                      <img
                        decoding="async"
                        loading="lazy"
                        className="w-[150px]"
                        src="/images/Top-Mobile-App-Development-Company2.svg"
                        alt="Top Mobile App Development Company"
                      />
                    </div>
                    <div className="review-text">
                      <p className="ng-binding xl:text-[20px] lg:text-[18px] text-[1rem]">
                        DesignRush Top Company
                      </p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="award ng-scope ">
                  <Link
                    href="https://www.dotcms.com/partners/brilworks"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <div className="award_sec8_img1">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/images/dotcms-logo-300x118.jpg"
                        alt="dotCMS logo"
                      />
                    </div>
                    <div className="review-text">
                      <p className="ng-binding xl:text-[20px] lg:text-[18px] text-[1rem]">
                        dotCMS Partner
                      </p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="award ng-scope">
                  <Link
                    href="https://www.ambitionbox.com/overview/brilworks-overview"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <div className="award_sec8_img1">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/images/review-ambitionbox.png"
                        alt="AmbitionBox Rating"
                      />
                    </div>

                    <div className="review-text">
                      <p className="ng-binding xl:text-[20px] lg:text-[18px] text-[1rem]">
                        AmbitionBox Rating
                      </p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="award ng-scope">
                  <Link
                    href="https://www.glassdoor.co.in/Overview/Working-at-Brilworks-EI_IE3883160.11,20.htm"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <div className="award_sec8_img1">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/images/review-glassdoor.png"
                        alt="SiliconIndia Blockchain Development Company"
                      />
                    </div>

                    <div className="review-text">
                      <p className="ng-binding xl:text-[20px] lg:text-[18px] text-[1rem]">
                        Glassdoor 4.8 Ratings
                      </p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="award ng-scope">
                  <div className="award_sec8_img1">
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/images/review-liferay.png"
                      alt="Liferay Partner"
                    />
                  </div>

                  <div className="review-text">
                    <p className="ng-binding xl:text-[20px] lg:text-[18px] text-[1rem]">
                      Liferay Silver Service Partner
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="award ng-scope">
                  <Link
                    href="https://technology.siliconindia.com/ranking/10-most-promising-blockchain-development-companies-%C2%AD-2022-rid-1689.html"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <div className="award_sec8_img1">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/images/review-blockchain.png"
                        alt="SiliconIndia Blockchain Development Company"
                      />
                    </div>

                    <div className="review-text">
                      <p className="ng-binding xl:text-[20px] lg:text-[18px] text-[1rem]">
                        Silicon India Promising Company
                      </p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="award ng-scope">
                  <Link
                    href="https://topsoftwarecompanies.co/india/software-development/agencies/ahmedabad"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <div className="award_sec8_img1">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/images/review-top-software-developers.png"
                        alt="top software developers"
                      />
                    </div>

                    <div className="review-text">
                      <p className="ng-binding xl:text-[20px] lg:text-[18px] text-[1rem]">
                        Top Software Companies
                      </p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            </>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default Honors;
