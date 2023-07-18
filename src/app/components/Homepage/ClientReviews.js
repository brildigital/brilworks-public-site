"use client";
import "swiper/css";
import { useEffect } from "react";
import BrilworksSoftwareReview from "./BrilworksSoftwareReview";
import Swiper from "swiper";

const ClientReviews = () => {
  useEffect(() => {
    const initSwipers = () => {
      new Swiper("#swiper-client-review", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: 5000,
        speed: 300,
        breakpoints: {
          1920: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1028: {
            slidesPerView: 1,
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
    <div className="container mx-auto px-[15px]">
      <div className="xl:mt-[80px] mt-[40px] relative">
        <div className="rotate_img">
          <img
            decoding="async"
            loading="lazy"
            className="rotate_right alignnone"
            src="/images/Verified-Review-image.png"
            alt="verified review"
            width="215"
            height="215"
          />
        </div>

        <div className="home_sec3_box overflow-hidden">
          <div className="dots_flex w-100 px-[30px]">
            <div className="dots md:ml-8"></div>
            <div className="dots"></div>
            <div className="dots"></div>
          </div>
          <div className="background">
            <div>
              <div className="swiper-container" id="swiper-client-review">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="style_sec3_swiper_home">
                      <div className="xl:text-[32px] lg:text-[28px] md:text-[24px] text-[16px] mb-[40px]">
                        <p className="text-left">
                          "I have been working with Brilworks for more than 4
                          years and could not be happier with the quality of
                          their work and the support provided. The best part is
                          they're always available."
                        </p>
                      </div>
                      <div className="sec3_swiper_home_flex">
                        <div className="home_sec3_txt2 text_left">
                          <p className="xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px]">
                            David Velasquez
                          </p>
                          <p className="font_style_sec3">CEO, Rastrack</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="style_sec3_swiper_home">
                      <div className="xl:text-[32px] lg:text-[28px] md:text-[24px] text-[16px] mb-[40px]">
                        <p className="text-left">
                          “Team Brilworks has been an absolute delight to work
                          with. They were able to take my list of prioritized
                          needs and identify the most pressing ones to solve
                          them quickly and exponentially. ”
                        </p>
                      </div>
                      <div className="sec3_swiper_home_flex">
                        <div className="home_sec3_txt2 text_left">
                          <p className="xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px]">
                            Liz Bullen
                          </p>
                          <p className="font_style_sec3">Founder, Lyfecoin</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="style_sec3_swiper_home">
                      <div className="xl:text-[32px] lg:text-[28px] md:text-[24px] text-[16px] mb-[40px]">
                        <p className="text-left">
                          “Orokii has a special relationship with Brilworks and
                          will continue that relationship because of the
                          brilliant software engineering team the company gives
                          us.”
                        </p>
                      </div>
                      <div className="sec3_swiper_home_flex">
                        <div className="home_sec3_txt2 text_left">
                          <p className="xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px]">
                            Bisi
                          </p>
                          <p className="font_style_sec3">Founder, Orokii</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="style_sec3_swiper_home">
                      <div className="xl:text-[32px] lg:text-[28px] md:text-[24px] text-[16px] mb-[40px]">
                        <p className="text-left">
                          “I absolutely loving working with the Brilworks team
                          because their communication is top-notch. I really
                          value their partnership, transparency in processes and
                          suggestions that ensure our project comes to fruition.
                          ”
                        </p>
                      </div>
                      <div className="sec3_swiper_home_flex">
                        <div className="home_sec3_txt2 text_left">
                          <p className="xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px]">
                            Edwin
                          </p>
                          <p className="font_style_sec3">Founder, Tekstride</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
