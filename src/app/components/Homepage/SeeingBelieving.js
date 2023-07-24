"use client";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { BelievingText } from "./BigText";
import { useEffect } from "react";
import Swiper from "swiper";
import { useMediaQuery } from "react-responsive";

const SeeingBelieving = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    const initSwipers = () => {
      new Swiper("#swiper-portfolio", {
        loop: isMobile ? false : true,
        slidesPerView: isMobile ? 1 : 3,
        paginationClickable: true,
        centeredSlides: true,
        spaceBetween: 20,
        autoplay: 5000,
        speed: 300,
        breakpoints: {
          1920: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1028: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      });
    };
    initSwipers();
  }, []);

  return (
    <>
      <BelievingText />

      <div className="w-[90%] mx-auto">
        <div className="swiper-container" id="swiper-portfolio">
          <div className="swiper-wrapper">
            <div className="swiper-slide !bg-[#2cbc89]">
              <Link href="/portfolio/vugo/">
                <img
                  className="alignnone wp-image-45 size-full"
                  src="/images/Vugo.jpg"
                  alt="vugo"
                />

                <div className="portfolio-home">
                  <div className="portfolio-title">
                    <h2>VUGO</h2>
                  </div>
                  <div className="portfolio-desc">
                    <p className={isMobile && "h-[200px]"}>
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
            <div className="swiper-slide !bg-[#e8eed5]">
              <Link href="/portfolio/trackimo/">
                <img
                  className="alignnone wp-image-47 size-full"
                  src="/images/Trackimo.jpg"
                  alt="trackimo"
                />

                <div className="portfolio-hom">
                  <div className="portfolio-title">
                    <h2>TRACKIMO</h2>
                  </div>
                  <div className="portfolio-desc">
                    <p className={isMobile && "h-[200px]"}>
                      Trackimo specializes in highly reliable and effective
                      tracking solutions. The company's end-to-end global IoT
                      platform provides personal safety and tracking solutions
                      to more than 500,000 consumers and more than 50 enterprise
                      clients worldwide.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="swiper-slide !bg-[#377df8]">
              <Link href="/portfolio/orokii/">
                <img
                  className="alignnone wp-image-48 size-full"
                  src="/images/Orokii(1).jpg"
                  alt="orokii"
                />

                <div className="portfolio-home">
                  <div className="portfolio-title">
                    <h2>OROKII</h2>
                  </div>
                  <div className="portfolio-desc">
                    <p className={isMobile && "h-[200px]"}>
                      Orokii is an on-demand platform that allows you to send
                      cross-border payments anywhere in the world at real-time
                      prices. Orokii is making domestic and cross-border
                      payments cheaper, faster, and safer using blockchain
                      technology.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="swiper-slide !bg-[#f13134]">
              <Link href="/portfolio/eccocar/">
                <img
                  className="alignnone wp-image-49 size-full"
                  src="/images/Eccocar(1).jpg"
                  alt="eccocar"
                />

                <div className="portfolio-home">
                  <div className="portfolio-title">
                    <h2>ECCOCAR</h2>
                  </div>
                  <div className="portfolio-desc">
                    <p className={isMobile && "h-[200px]"}>
                      Eccocar is a SaaS Company that provides technology for
                      rental cars to adapt to new mobility trends and offers a
                      mobility service on demand. Eccocar digitizes rent-a-car
                      and new on-demand mobility providers, such as ride-hailing
                      and ride-sharing operators, and generates white-label APPs
                      for them to launch their service.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="swiper-slide !bg-[#2cbc89]">
              <Link href="/portfolio/rastrack/">
                <img
                  className="alignnone wp-image-50 size-full"
                  src="/images/Rastrack(1).jpg"
                  alt="rastrack"
                />

                <div className="portfolio-home">
                  <div className="portfolio-title">
                    <h2>RASTRACK</h2>
                  </div>
                  <div className="portfolio-desc">
                    <p className={isMobile && "h-[200px]"}>
                      Rastrack is a satellite tracking and real-time monitoring
                      company which helps owners track their vehicles with
                      detailed analysis. Rastrack specializes in the control and
                      satellite monitoring of assets or individuals using
                      networking technologies.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:!items-center !text-left md:!justify-center !justify-start lg:gap-[80px] gap-[20px] flex-col sm:flex-row md: mt-4mt-8">
        <div className="flex items-center justify-center gap-[20px] about_btn transition lg:mt-[60px] mt-[16px]">
          <div className="about_txt">
            <Link href="portfolio" className="text-[21px]">
              View all works
            </Link>
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
        </div>
        <div className="flex items-center justify-center gap-[20px] about_btn transition lg:mt-[60px] mt-[16px]">
          <div className="about_txt">
            <Link href="contact-us" className="text-[21px]">
              Contact Us
            </Link>
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
        </div>
      </div>
    </>
  );
};

export default SeeingBelieving;
