"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/virtual";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Pagination, Autoplay, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import StoryblokClient from "storyblok-js-client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import FetchDataSpinner from "./FetchDataSpinner";
import { scrollEffect } from "../lib/commonFunction";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";

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
    <div className="software-review-container container max-w-[1280px] main-section-padding w-full mx-auto">
      <div className="software-review-head !pt-[0rem]">
        <div className="lg:mb-10 md:mb-8 mb-5">
          <div className="flex items-center justify-between">
            <Heading
              type="h2"
              className="lg:!text-[34px] md:!text-3xl !text-2xl"
              text={
                <div className="flex items-center gap-1">
                  Reviews/5.0
                  <span className="star_clutch !text-[20px]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        size="sm"
                        className="text-[#FF9345] mr-1"
                      />
                    ))}
                  </span>
                </div>
              }
            />
            <Link href="https://widget.clutch.co/widgets/get/12?ref_domain=192.168.50.12&uid=1881351&primary_color=%2308537E&secondary_color=%2308537E&rel_nofollow=true&reviews=2054376%2C2040492%2C2032289%2C2010928%2C1968060%2C1960170%2C1955515%2C1946156%2C1944400%2C1942781%2C1942541%2C1941715&ref_path=/brilworks/home/">
              <Image
                className="lg:!w-[100px] !w-[70px] pl-1"
                width="70"
                height="26"
                src="/images/clutch-icon.svg"
                alt="clutch"
              />
            </Link>
          </div>
        </div>
      </div>
      <Swiper
        className="reveal"
        modules={[Pagination, Autoplay, Virtual]}
        spaceBetween={isMobile ? 15 : 30}
        autoplay={{ delay: 500 }}
        loopfillgroupwithblank
        speed={isMobile ? 1000 : 1500}
        loop={true}
        shouldswiperupdate={false}
        pagination={{ clickable: true }}
        virtual
        breakpoints={{
          1475: {
            slidesPerView: 3,
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
              <div>
                <div className="border rounded-2xl p-5 !max-w-[380px]">
                  <Image
                    className="w-[44px] h-[44px] mb-6"
                    src="/images/quote.svg"
                    width={32}
                    height={32}
                    alt="quote"
                  />
                  <div>
                    <p className="mb-4 lg:!text-lg !text-base min-h-[100px]">
                      {dataItem?.content?.content}
                    </p>
                    <p className="lg:!text-xl !text-lg font-medium min-h-[50px]">
                      {dataItem?.content?.author}
                    </p>
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
  );
};

export default BrilworksSoftwareReview;
