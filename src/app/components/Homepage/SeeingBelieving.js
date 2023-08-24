"use client";
import "./homepage.scss";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { BelievingText } from "./BigText";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import FetchDataSpinner from "./FetchDataSpinner";

const SeeingBelieving = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const dataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    };
    dataFetch();
  }, []);

  return (
    <>
      <BelievingText />
      <div className="work-swiper">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          speed={1500}
          slidesPerView={isMobile ? 1 : 3}
          slidesPerGroup={isMobile ? 1 : 2}
          loopFillGroupWithBlank={true}
          pagination={{ clickable: true }}
        >
          {isLoading ? (
            <div className="flex align-middle justify-center">
              <FetchDataSpinner />
            </div>
          ) : (
            <>
              <SwiperSlide className="portfolio_slides_homepage">
                <div className="slide-style !bg-[#2cbc89]">
                  <Link href="/portfolio/vugo/">
                    <img
                      className="alignnone wp-image-45 size-full rounded-[25px]"
                      src="/images/Vugo.jpg"
                      alt="vugo"
                    />

                    <div className="portfolio-home">
                      <div className="portfolio-title">
                        <h2>VUGO</h2>
                      </div>
                      <div className="portfolio-desc">
                        <p className="desc-height">
                          Founded in 2015, Vugo is the first company to develop
                          in-car advertising for the rideshare marketplace.
                          Headquartered in Minneapolis, Minnesota, Vugo develops
                          highly targeted, responsive ads on billboards above
                          vehicles for hire.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="md:!px-8 md:!text-left outer-portfolio-title">
                  <p className="portfolio-title-new">
                    <Link href="/portfolio/vugo/">VUGO</Link>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="portfolio_slides_homepage">
                <div className="slide-style !bg-[#e8eed5]">
                  <Link href="/portfolio/trackimo/">
                    <img
                      className="alignnone wp-image-47 !rounded-[25px]"
                      src={
                        "https://a.storyblok.com/f/219851/500x375/f472daac29/trackimo.jpg"
                      }
                      alt="trackimo"
                    />

                    <div className="portfolio-home">
                      <div className="portfolio-title">
                        <h2>TRACKIMO</h2>
                      </div>
                      <div className="portfolio-desc">
                        <p className="desc-height">
                          Trackimo specializes in highly reliable and effective
                          tracking solutions. The company's end-to-end global
                          IoT platform provides personal safety and tracking
                          solutions to more than 500,000 consumers and more than
                          50 enterprise clients worldwide.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="md:!px-8 md:!text-left outer-portfolio-title">
                  <p className="portfolio-title-new">
                    <Link href="/portfolio/trackimo/">TRACKIMO</Link>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="portfolio_slides_homepage">
                <div className="slide-style !bg-[#377df8]">
                  <Link href="/portfolio/orokii/">
                    <img
                      className="alignnone wp-image-48 size-full !rounded-[25px]"
                      src="/images/Orokii(1).jpg"
                      alt="orokii"
                    />

                    <div className="portfolio-home">
                      <div className="portfolio-title">
                        <h2>OROKII</h2>
                      </div>
                      <div className="portfolio-desc">
                        <p className="desc-height">
                          Orokii is an on-demand platform that allows you to
                          send cross-border payments anywhere in the world at
                          real-time prices. Orokii is making domestic and
                          cross-border payments cheaper, faster, and safer using
                          blockchain technology.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="md:!px-8 md:!text-left outer-portfolio-title">
                  <p className="portfolio-title-new">
                    <Link href="/portfolio/orokii/">OROKII</Link>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="portfolio_slides_homepage">
                <div className="slide-style !bg-[#f13134]">
                  <Link href="/portfolio/eccocar/">
                    <img
                      className="alignnone wp-image-49 size-full !rounded-[25px]"
                      src="/images/Eccocar(1).jpg"
                      alt="eccocar"
                    />

                    <div className="portfolio-home">
                      <div className="portfolio-title">
                        <h2>ECCOCAR</h2>
                      </div>
                      <div className="portfolio-desc">
                        <p className="desc-height">
                          Eccocar is a SaaS Company that provides technology for
                          rental cars to adapt to new mobility trends and offers
                          a mobility service on demand. Eccocar digitizes
                          rent-a-car and new on-demand mobility providers, such
                          as ride-hailing and ride-sharing operators, and
                          generates white-label APPs for them to launch their
                          service.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="md:!px-8 md:!text-left outer-portfolio-title">
                  <p className="portfolio-title-new">
                    <Link href="/portfolio/eccocar/">ECCOCAR</Link>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="portfolio_slides_homepage">
                <div className="slide-style !bg-[#2cbc89]">
                  <Link href="/portfolio/rastrack/">
                    <img
                      className="alignnone wp-image-50 size-full !rounded-[25px]"
                      src="/images/Rastrack(1).jpg"
                      alt="rastrack"
                    />
                    <div className="portfolio-home">
                      <div className="portfolio-title">
                        <h2>RASTRACK</h2>
                      </div>
                      <div className="portfolio-desc">
                        <p className="desc-height">
                          Rastrack is a satellite tracking and real-time
                          monitoring company which helps owners track their
                          vehicles with detailed analysis. Rastrack specializes
                          in the control and satellite monitoring of assets or
                          individuals using networking technologies.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="md:!px-8 md:!text-left outer-portfolio-title">
                  <p className="portfolio-title-new">
                    <Link href="/portfolio/rastrack/">RASTRACK</Link>
                  </p>
                </div>
              </SwiperSlide>
            </>
          )}
        </Swiper>
      </div>

      <div className="flex md:!items-center !text-left md:!justify-center !justify-start lg:gap-[80px] gap-[20px] flex-col sm:flex-row mt-4 mx-[15px]">
        <Link
          href="portfolio"
          className="flex items-center sm:justify-center justify-start gap-[20px] about_btn transition lg:mt-[60px] mt-[16px]"
        >
          <div className="about_txt">
            <p href="portfolio" className="change_link text-[21px]">
              View all works
            </p>
          </div>
          <div className="aerrow relative">
            <img
              decoding="async"
              loading="lazy"
              className="black_aerrow alignnone wp-image-28 size-full"
              src="/images/black_aerrow-1.png"
              alt="arrow"
              width="46"
              height="18"
            />
            <img
              decoding="async"
              loading="lazy"
              className="gradiant_aerrow alignnone wp-image-29 size-full"
              src="/images/arrow-gradiant.png"
              alt="arrow"
              width="46"
              height="18"
            />
          </div>
        </Link>
        <Link
          href="contact-us"
          className="flex items-center sm:justify-center justify-start gap-[20px] about_btn transition lg:mt-[60px] mt-[16px]"
        >
          <div className="about_txt">
            <p href="contact-us" className="change_link text-[21px]">
              Contact Us
            </p>
          </div>
          <div className="aerrow relative">
            <img
              decoding="async"
              loading="lazy"
              className="black_aerrow alignnone wp-image-28 size-full"
              src="/images/black_aerrow-1.png"
              alt="arrow"
              width="46"
              height="18"
            />
            <img
              decoding="async"
              loading="lazy"
              className="gradiant_aerrow alignnone wp-image-29 size-full"
              src="/images/arrow-gradiant.png"
              alt="arrow"
              width="46"
              height="18"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default SeeingBelieving;
