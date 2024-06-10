"use client";
import "../../styles/Homepage.scss";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { BelievingText } from "./BigText";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import FetchDataSpinner from "./FetchDataSpinner";
import { scrollEffect } from "../lib/commonFunction";
import Image from "next/image";
import LinkWithArrow from "../Common/LinkWithArrow";

const SeeingBelieving = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
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

    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  const portfolioItems = [
    {
      title: "VUGO",
      description:
        "Founded in 2015, Vugo is the first company to develop in-car advertising for the rideshare marketplace. Headquartered in Minneapolis, Minnesota, Vugo develops highly targeted, responsive ads on billboards above vehicles for hire.",
      link: "/portfolio/vugo/",
      image: "https://a.storyblok.com/f/219851/500x375/77c04adb56/vugo.jpg",
      alt: "vugo",
      bgColor: "!bg-[#2cbc89]",
    },
    {
      title: "TRACKIMO",
      description:
        "Trackimo specializes in highly reliable and effective tracking solutions. The company's end-to-end global IoT platform provides personal safety and tracking solutions to more than 500,000 consumers and more than 50 enterprise clients worldwide.",
      link: "/portfolio/trackimo/",
      image: "https://a.storyblok.com/f/219851/500x375/f472daac29/trackimo.jpg",
      alt: "trackimo",
      bgColor: "!bg-[#e8eed5]",
    },
    {
      title: "OROKII",
      description:
        "Orokii is an on-demand platform that allows you to send cross-border payments anywhere in the world at real-time prices. Orokii is making domestic and cross-border payments cheaper, faster, and safer using blockchain technology.",
      link: "/portfolio/orokii/",
      image: "/images/orokii1.webp",
      alt: "orokii",
      bgColor: "!bg-[#377df8]",
    },
    {
      title: "ECCOCAR",
      description:
        "Eccocar is a SaaS Company that provides technology for rental cars to adapt to new mobility trends and offers a mobility service on demand. Eccocar digitizes rent-a-car and new on-demand mobility providers, such as ride-hailing and ride-sharing operators, and generates white-label APPs for them to launch their service.",
      link: "/portfolio/eccocar/",
      image:
        "https://a.storyblok.com/f/219851/500x375/8707c8ae6a/eccocar-1.jpg",
      alt: "eccocar",
      bgColor: "!bg-[#f13134]",
    },
    {
      title: "RASTRACK",
      description:
        "Rastrack is a satellite tracking and real-time monitoring company which helps owners track their vehicles with detailed analysis. Rastrack specializes in the control and satellite monitoring of assets or individuals using networking technologies.",
      link: "/portfolio/rastrack/",
      image: "/images/rastrack1.webp",
      alt: "rastrack",
      bgColor: "!bg-[#2cbc89]",
    },
  ];

  return (
    <div className="bg-colorLightGray">
      <div className="container mx-auto main-section-padding reveal">
        <BelievingText />
        <div className="md:w-4/5 w-full mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 pt-4">
          {portfolioItems
            .slice(0, 4)
            .map(({ title, image, description, alt, link }, index) => {
              return (
                <div className="min-w-[300px] h-full w-fit" key={index}>
                  <Link href={link} prefetch={true}>
                    <Image
                      className="rounded-[25px]"
                      src={image}
                      alt={alt}
                      width="500"
                      height="475"
                      sizes="(min-width: 1040px) 42.35vw, (min-width: 640px) 60.84vw, calc(100vw - 30px)"
                    />

                    <div className="flex flex-col pt-4 items-start">
                      <div className="w-full flex items-center justify-between">
                        <div className="text-xl font-bold text-themeColor mb-1">
                          {title}
                        </div>
                        <div className="text-colorGray uppercase">
                          Mobile App
                        </div>
                      </div>
                      <h2 className="w-4/5 mb-1 text-xl font-semibold">
                        21% conversion increase with product design services for
                        Otodom
                      </h2>
                      <p className="text-colorGray text-base">{description}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
        <div>
          <LinkWithArrow
            href="/portfolio/"
            label=" View all works"
            className="justify-start mobile:justify-center"
          />
        </div>

        {/* <div className="container mx-auto work-swiper reveal">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            speed={1500}
            slidesPerView={isMobile ? 1 : `${isTablet ? 2 : 3}`}
            slidesPerGroup={isMobile ? 1 : 2}
            loopfillgroupwithblank="true"
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
                        decoding="async"
                        loading="lazy"
                        className="alignnone wp-image-45 size-full rounded-[25px]"
                        src="https://a.storyblok.com/f/219851/500x375/77c04adb56/vugo.jpg"
                        alt="vugo"
                      />

                      <div className="portfolio-home">
                        <div className="portfolio-title">
                          <h3>1. VUGO</h3>
                        </div>
                        <div className="portfolio-desc">
                          <p className="desc-height">
                            Founded in 2015, Vugo is the first company to
                            develop in-car advertising for the rideshare
                            marketplace. Headquartered in Minneapolis,
                            Minnesota, Vugo develops highly targeted, responsive
                            ads on billboards above vehicles for hire.
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="md:!px-8 md:!text-left outer-portfolio-title">
                    <Link href="/portfolio/vugo/">
                      <h3 className="portfolio-title-new">1. VUGO</h3>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="portfolio_slides_homepage">
                  <div className="slide-style !bg-[#e8eed5]">
                    <Link href="/portfolio/trackimo/">
                      <img
                        decoding="async"
                        loading="lazy"
                        className="alignnone wp-image-47 !rounded-[25px]"
                        src="https://a.storyblok.com/f/219851/500x375/f472daac29/trackimo.jpg"
                        alt="trackimo"
                      />

                      <div className="portfolio-home">
                        <div className="portfolio-title">
                          <h3>2. TRACKIMO</h3>
                        </div>
                        <div className="portfolio-desc">
                          <p className="desc-height">
                            Trackimo specializes in highly reliable and
                            effective tracking solutions. The company's
                            end-to-end global IoT platform provides personal
                            safety and tracking solutions to more than 500,000
                            consumers and more than 50 enterprise clients
                            worldwide.
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="md:!px-8 md:!text-left outer-portfolio-title">
                    <Link href="/portfolio/trackimo/">
                      <h3 className="portfolio-title-new">2. TRACKIMO</h3>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="portfolio_slides_homepage">
                  <div className="slide-style !bg-[#377df8]">
                    <Link href="/portfolio/orokii/">
                      <img
                        decoding="async"
                        loading="lazy"
                        className="alignnone wp-image-48 size-full !rounded-[25px]"
                        src="/images/orokii1.webp"
                        alt="orokii"
                      />

                      <div className="portfolio-home">
                        <div className="portfolio-title">
                          <h3>3. OROKII</h3>
                        </div>
                        <div className="portfolio-desc">
                          <p className="desc-height">
                            Orokii is an on-demand platform that allows you to
                            send cross-border payments anywhere in the world at
                            real-time prices. Orokii is making domestic and
                            cross-border payments cheaper, faster, and safer
                            using blockchain technology.
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="md:!px-8 md:!text-left outer-portfolio-title">
                    <Link href="/portfolio/orokii/">
                      <h3 className="portfolio-title-new">3. OROKII</h3>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="portfolio_slides_homepage">
                  <div className="slide-style !bg-[#f13134]">
                    <Link href="/portfolio/eccocar/">
                      <img
                        decoding="async"
                        loading="lazy"
                        className="alignnone wp-image-49 size-full !rounded-[25px]"
                        src="https://a.storyblok.com/f/219851/500x375/8707c8ae6a/eccocar-1.jpg"
                        alt="eccocar"
                      />

                      <div className="portfolio-home">
                        <div className="portfolio-title">
                          <h3>4. ECCOCAR</h3>
                        </div>
                        <div className="portfolio-desc">
                          <p className="desc-height">
                            Eccocar is a SaaS Company that provides technology
                            for rental cars to adapt to new mobility trends and
                            offers a mobility service on demand. Eccocar
                            digitizes rent-a-car and new on-demand mobility
                            providers, such as ride-hailing and ride-sharing
                            operators, and generates white-label APPs for them
                            to launch their service.
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="md:!px-8 md:!text-left outer-portfolio-title">
                    <Link href="/portfolio/eccocar/">
                      <h3 className="portfolio-title-new"> 4. ECCOCAR</h3>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="portfolio_slides_homepage">
                  <div className="slide-style !bg-[#2cbc89]">
                    <Link href="/portfolio/rastrack/">
                      <img
                        decoding="async"
                        loading="lazy"
                        className="alignnone wp-image-50 size-full !rounded-[25px]"
                        src="/images/rastrack1.webp"
                        alt="rastrack"
                      />
                      <div className="portfolio-home">
                        <div className="portfolio-title">
                          <h3>5. RASTRACK</h3>
                        </div>
                        <div className="portfolio-desc">
                          <p className="desc-height">
                            Rastrack is a satellite tracking and real-time
                            monitoring company which helps owners track their
                            vehicles with detailed analysis. Rastrack
                            specializes in the control and satellite monitoring
                            of assets or individuals using networking
                            technologies.
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="md:!px-8 md:!text-left outer-portfolio-title">
                    <Link href="/portfolio/rastrack/">
                      <h3 className="portfolio-title-new">5. RASTRACK</h3>
                    </Link>
                  </div>
                </SwiperSlide>
              </>
            )}
          </Swiper>
        </div> */}

        {/* <div className="flex md:!items-center !text-left md:!justify-center !justify-start lg:gap-[80px] gap-[20px] flex-col sm:flex-row mt-4 mx-[15px]">
          <Link
            href="/portfolio/"
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
            href="/contact-us/"
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
        </div> */}
      </div>
    </div>
  );
};

export default SeeingBelieving;
