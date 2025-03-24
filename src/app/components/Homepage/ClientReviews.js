"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import FetchDataSpinner from "./FetchDataSpinner";
import { BestAdvocateText } from "./BigText";

const BrilworksSoftwareReview = dynamic(() =>
  import("./BrilworksSoftwareReview")
);

const ClientReviews = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isVideoPause, setVideoPause] = useState(true);
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
    setVideoPause(true);
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
    "https://a.storyblok.com/f/219851/x/e590ec4a89/david_ceo_feedback.mp4",
    "https://a.storyblok.com/f/219851/x/dc5084003a/liz_feedback.mp4",
    "https://a.storyblok.com/f/219851/x/65478fe5ec/bisi_trim.mp4",
    "https://a.storyblok.com/f/219851/x/728b8ac755/edwin_feedback.mp4",
  ];

  const videoSrc = videoSources[reviewIndex];

  return (
    <>
      <div className="section-padding">
        <div className={`container max-w-[1440px] mx-auto`}>
          {showText.includes(pathname) || pathname.includes("services") ? (
            <div className="just_call_sec">
              <div
                className={`solutions text-center ${
                  pathname === "/contact-us/" ? "py-8" : "pb-8"
                }`}
              >
                <h2
                  className={`md:!text-center !text-left !w-full ${
                    pathname === "/contact-us/" ? "uppercase" : ""
                  }`}
                >
                  Client Testimonials
                </h2>
              </div>
            </div>
          ) : (
            <BestAdvocateText />
          )}

          <div className="relative reveal">
            <div className="rotate_img">
              <Image
                className="rotate_right alignnone"
                src="/images/Verified-Review-image.png"
                alt="verified review"
                width="215"
                height="215"
              />
            </div>
            <div className="flex flex-wrap items-center gap-6 justify-center video-slider">
              <div className="cursor-pointer relative">
                <div className="video-play-icon">
                  {isVideoPause && !isMobile ? (
                    <span className="play-icon-img">
                      <img src="/images/icon_play_new.svg" alt="Play Icon" />
                    </span>
                  ) : null}
                </div>

                <div onClick={() => setVideoPause(!isVideoPause)}>
                  {videoSrc && (
                    <video
                      className="!rounded-[30px]"
                      src={videoSrc}
                      controls
                      loading="lazy"
                      width="320"
                      height="200"
                    />
                  )}
                </div>
              </div>

              <div className="md:!w-[50%] !w-full">
                <div className="home_sec3_box overflow-hidden ">
                  <div className="dots_flex md:!px-[30px] !mx-4">
                    <div className="dots md:ml-8 ml-4"></div>
                    <div className="dots"></div>
                    <div className="dots"></div>
                  </div>
                  <div className="background">
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
                              <div className="style_sec3_swiper_home !w-4/5 slg:!my-6 md:!my-2 text-colorWhite">
                                <div className="xl:text-[32px] lg:text-[28px] md:text-[24px] text-[16px] mb-[40px]">
                                  <p className="text-left md:text-xl !leading-9 font-medium">
                                    "{quote}"
                                  </p>
                                </div>

                                <p className="xl:text-[28px] md:text-[24px] text-[20px]">
                                  {author}
                                </p>
                                <p className="text-base">{position}</p>
                              </div>
                            </SwiperSlide>
                          );
                        }
                      )}
                    </Swiper>
                  </div>
                </div>
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
