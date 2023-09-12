"use client";
import "swiper/css";
import "./homepage.scss";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BrilworksSoftwareReview from "./BrilworksSoftwareReview";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { scrollEffect } from "../lib/commonfunction";
import Image from "next/image";

const ClientReviews = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isVideoPause, setVideoPause] = useState(true);
  const [reviewIndex, setReviewIndex] = useState(0);
  const pathname = usePathname();

  const handleSlideChange = (swiper) => {
    const activeSlideIndex = swiper.activeIndex;
    setReviewIndex(activeSlideIndex);
    setVideoPause(true);
  };

  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <div className="container mx-auto px-[15px]">
      <div className="xl:mt-[80px] mt-[40px] relative reveal">
        <div className="rotate_img">
          <Image
            className="rotate_right alignnone"
            src="/images/Verified-Review-image.png"
            alt="verified review"
            width="215"
            height="215"
          />
        </div>
        <div className="flex flex-wrap align-middle gap-6  justify-center video-slider">
          <div className="cursor-pointer relative">
            <span className="video-play-icon">
              {isVideoPause && !isMobile ? (
                <span className="play-icon-img">
                  <img src="/images/icon_play_new.svg" alt="Play Icon" />
                </span>
              ) : null}
            </span>

            <div onClick={() => setVideoPause(!isVideoPause)}>
              {reviewIndex === 0 ? (
                <video
                  className="!rounded-[30px]"
                  src={
                    "https://a.storyblok.com/f/219851/x/e590ec4a89/david_ceo_feedback.mp4"
                  }
                  controls
                  loading="lazy"
                  width="320"
                  height="200"
                />
              ) : reviewIndex === 1 ? (
                <video
                  loading="lazy"
                  className="!rounded-[30px]"
                  src={
                    "https://a.storyblok.com/f/219851/x/dc5084003a/liz_feedback.mp4"
                  }
                  controls
                  width="320"
                  height="200"
                />
              ) : reviewIndex === 2 ? (
                <video
                  className="!rounded-[30px]"
                  src={
                    "https://a.storyblok.com/f/219851/x/65478fe5ec/bisi_trim.mp4"
                  }
                  controls
                  loading="lazy"
                  width="320"
                  height="200"
                />
              ) : reviewIndex === 3 ? (
                <video
                  className="!rounded-[30px]"
                  src={
                    "https://a.storyblok.com/f/219851/x/728b8ac755/edwin_feedback.mp4"
                  }
                  controls
                  loading="lazy"
                  width="320"
                  height="200"
                />
              ) : null}
            </div>
          </div>

          <div
            className={`${
              pathname === "/" || pathname === "/home/"
                ? "md:!w-2/4"
                : "md:!w-2/4"
            } w-full`}
          >
            <div className="home_sec3_box overflow-hidden ">
              <div
                className={`dots_flex w-100 md:px-[30px] ${
                  isMobile ? "!mx-4" : ""
                } `}
              >
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
                  <SwiperSlide>
                    <div className="style_sec3_swiper_home !w-4/5 md:!my-6">
                      <div className="xl:text-[32px] lg:text-[28px] md:text-[24px] text-[16px] mb-[40px]">
                        <p className="text-left md:!text-3xl client-review-msg">
                          "I have been working with Brilworks for more than 4
                          years and could not be happier with the quality of
                          their work and the support provided. The best part is
                          they're always available."
                        </p>
                      </div>
                      <div className="sec3_swiper_home_flex">
                        <div className="home_sec3_txt2 text_left">
                          <p className="xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px] client-review-msg">
                            David Velasquez
                          </p>
                          <p className="font_style_sec3">CEO, Rastrack</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="style_sec3_swiper_home !w-4/5 md:!my-6">
                      <div className="xl:text-[32px] lg:text-[28px] md:text-[24px] text-[16px] mb-[40px]">
                        <p className="text-left md:!text-3xl client-review-msg">
                          “Team Brilworks has been an absolute delight to work
                          with. They were able to take my list of prioritized
                          needs and identify the most pressing ones to solve
                          them quickly and exponentially. ”
                        </p>
                      </div>
                      <div className="sec3_swiper_home_flex">
                        <div className="home_sec3_txt2 text_left">
                          <p className="xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px] client-review-msg">
                            Liz Bullen
                          </p>
                          <p className="font_style_sec3">Founder, Lyfecoin</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="style_sec3_swiper_home !w-4/5 md:!my-6">
                      <div className="xl:text-[32px] lg:text-[28px] md:text-[24px] text-[16px] mb-[40px]">
                        <p className="text-left md:!text-3xl client-review-msg">
                          “Orokii has a special relationship with Brilworks and
                          will continue that relationship because of the
                          brilliant software engineering team the company gives
                          us.”
                        </p>
                      </div>
                      <div className="sec3_swiper_home_flex">
                        <div className="home_sec3_txt2 text_left">
                          <p className="xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px] client-review-msg">
                            Bisi
                          </p>
                          <p className="font_style_sec3">Founder, Orokii</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="style_sec3_swiper_home !w-4/5 md:!my-6">
                      <div className="xl:text-[32px] lg:text-[28px] md:text-[24px] text-[16px] mb-[40px]">
                        <p className="text-left md:!text-3xl client-review-msg">
                          “I absolutely loving working with the Brilworks team
                          because their communication is top-notch. I really
                          value their partnership, transparency in processes and
                          suggestions that ensure our project comes to fruition.
                          ”
                        </p>
                      </div>
                      <div className="sec3_swiper_home_flex">
                        <div className="home_sec3_txt2 text_left">
                          <p className="xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px] client-review-msg">
                            Edwin
                          </p>
                          <p className="font_style_sec3">Founder, Tekstride</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BrilworksSoftwareReview />
    </div>
  );
};

export default ClientReviews;
