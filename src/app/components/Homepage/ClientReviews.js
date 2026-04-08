"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import FetchDataSpinner from "./FetchDataSpinner";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";

const BrilworksSoftwareReview = dynamic(() =>
  import("./BrilworksSoftwareReview")
);

const ClientReviews = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isVideoPause, setIsVideoPause] = useState(true);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();

  const showText = [
    "/contact-us/",
    "/staff-augmentation/",
    "/hire-dedicated-software-development-team/",
    "/rapid-digitalization/",
  ];

  const handleSlideChange = (swiper) => {
    const activeSlideIndex = swiper.activeIndex;
    setReviewIndex(activeSlideIndex);
    setIsVideoPause(true);
  };

  useEffect(() => {
    setIsLoaded(true);
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  if (!isLoaded) {
    // Render a loading state to ensure server and client HTML match initially
    return (
      <div className="container mx-auto px-[15px]">
        <FetchDataSpinner />
      </div>
    );
  }

  const clientTestimonials = [
    {
      quote:
        "I have been working with Brilworks for more than 4 years and could not be happier with the quality of their work and the support provided. The best part is they're always available.",
      author: "David Velasquez",
      position: "CEO, Rastrack",
    },
    {
      quote:
        "Team Brilworks has been an absolute delight to work with. They were able to take my list of prioritized needs and identify the most pressing ones to solve them quickly and exponentially.",
      author: "Liz Bullen",
      position: "Founder, Lyfecoin",
    },
    {
      quote:
        "Orokii has a special relationship with Brilworks and will continue that relationship because of the brilliant software engineering team the company gives us.",
      author: "Bisi",
      position: "Founder, Orokii",
    },
    {
      quote:
        "I absolutely loving working with the Brilworks team because their communication is top-notch. I really value their partnership, transparency in processes and suggestions that ensure our project comes to fruition.",
      author: "Edwin",
      position: "Founder, Tekstride",
    },
  ];

  const videoSources = [
    `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/david_ceo_feedback-1765886900508.mp4`,
    `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/liz_feedback-1765886991856.mp4`,
    `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/bisi_trim-1765886953943.mp4`,
    `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/edwin_feedback-1765886937451.mp4`,
  ];

  const videoSrc = videoSources[reviewIndex];

  return (
    <>
      <div className="container max-w-[1280px] main-section-padding mx-auto">
        {showText.includes(pathname) || pathname.includes("services") ? (
          <Heading
            type="h2"
            className="lg:!text-[34px] md:!text-3xl !text-2xl mb-4"
            text="Client Testimonials"
          />
        ) : (
          <Heading
            type="h2"
            className="lg:!text-[34px] md:!text-3xl !text-2xl mb-4"
            text="Our Clients Simply Love Our Work"
          />
        )}
        <p className="md:text-lg text-base lg:!mb-10 md:!mb-8 !mb-5">
          We build and transform businesses through strategy, design and
          development.
        </p>

        <div className="relative reveal">
          <div className="flex flex-wrap items-center gap-6 justify-center video-slider">
            <div className="md:!w-[50%] !w-full">
              <div className="overflow-hidden ">
                <div className="bg-[#F7F7F7] rounded-2xl md:p-7.5 p-5">
                  <Swiper
                    className="client-review-swipers"
                    modules={[Navigation]}
                    navigation={isMobile ? false : true}
                    onSlideChange={handleSlideChange}
                    slidesPerView={1}
                    speed={isMobile ? 1000 : 1500}
                  >
                    {clientTestimonials.map(
                      ({ quote, author, position }, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <div className="">
                              <Image
                                className="w-[44px] h-[34px] lg:mb-10 md:mb-8 mb-5"
                                src="/images/quote.svg"
                                width={44}
                                height={34}
                                alt="quote"
                              />
                              <p
                                className={`${
                                  index === 1 || index === 3
                                    ? "w-full"
                                    : "md:w-11/12 w-full"
                                } ${
                                  index === 3
                                    ? "lg:!mb-[32px]"
                                    : "lg:!mb-[60px]"
                                } md:!mb-10 !mb-6 md:!text-lg !text-base`}
                              >
                                "{quote}"
                              </p>

                              <p className="lg:text-xl text-lg lg:!mb-2.5 mb-1.5 font-medium">
                                {author}
                              </p>
                              <p className="lg:text-base text-sm font-medium">
                                {position}
                              </p>
                            </div>
                          </SwiperSlide>
                        );
                      }
                    )}
                  </Swiper>
                </div>
              </div>
            </div>

            <div className="cursor-pointer relative">
              <div className="video-play-icon">
                {isVideoPause && !isMobile ? (
                  <span className="play-icon-img">
                    <img src="/images/v2/play-theme-icon.svg" alt="Play Icon" />
                  </span>
                ) : null}
              </div>

              <div onClick={() => setIsVideoPause(!isVideoPause)}>
                {videoSrc && (
                  <video
                    className="!rounded-2xl"
                    src={videoSrc}
                    controls
                    loading="lazy"
                    width="320"
                    height="200"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {!pathname.includes("services") &&
        pathname !== "/staff-augmentation/" &&
        pathname !== "/hire-dedicated-software-development-team/" &&
        pathname !== "/rapid-digitalization/" && <BrilworksSoftwareReview />}
    </>
  );
};

export default ClientReviews;
