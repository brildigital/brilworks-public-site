import { BestAdvocateText } from "./BigText";

const ClientReviews = () => {
  return (
    <div className="container mx-auto px-[15px]">
      <BestAdvocateText />
      <div className="xl:mt-[80px] mt-[40px] relative">
        <div className="rotate_img">
          <img
            decoding="async"
            loading="lazy"
            className="rotate_right alignnone"
            src="images/Verified-Review-image.png"
            alt="verified review"
            width="215"
            height="215"
          />
        </div>

        <div className="home_sec3_box overflow-hidden">
          <div className="dots_flex w-100 px-[30px]">
            <div className="dots"></div>
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

      <div className="md:pt-[128px] pt-[32px]">
        <div className="clutch-widget">
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
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
