"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import Button from "../Common/Button";

const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const WhatMakeUsBrilliant = dynamic(() => import("./WhatMakeUsBrilliant"));
const ContactUs = dynamic(() => import("../Homepage/ContactUs"));

const PortfolioInnerVugo = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <section className="portfolio">
      <div className="container mx-auto service_width">
        <div className="sec6_title text-center">
          <h1 className="md:!text-[2.5rem] md:!leading-tight !text-3xl font-bold">
            How Brilworks Helped Vugo Create a Unique
            <br />
            In-car Advertising Application
          </h1>
        </div>
        <div className="md:mb-16 mb-8">
          <Image
            className="md:block hidden"
            src="https://a.storyblok.com/f/219851/1474x700/4607635c67/portfolio-banner2.webp"
            alt="vugo"
            width="1474"
            height="700"
            priority
            sizes="(min-width: 1040px) 80vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
          />
          <Image
            className="block md:hidden"
            src="/images/portfolio-banner2-mobile.webp"
            alt="vugo"
            priority
            width="400"
            height="250"
            sizes="(min-width: 1040px) 80vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
          />
        </div>

        <div className="porfolio_inner">
          <p>
            Founded in 2015, Vugo is the first company to develop in-car
            advertising for the rideshare marketplace. Headquartered in
            Minneapolis, Minnesota, Vugo develops highly targeted, responsive
            ads on billboards above vehicles for hire.
          </p>
        </div>

        <div className="sxl:pt-[4rem] sxl:pb-[6rem] pt-[3rem] pb-[3rem] flex items-center justify-center">
          <Button
            innerClassName="flex items-center justify-center gap-1"
            className="!pr-5"
            redirect="https://www.govugo.com/"
            label="Visit Website"
            icon="right-arrow"
          />
        </div>

        <div className="mx-auto reveal">
          <div className="flex flex-wrap identifying-understanding">
            <div className="lg:w-6/12 w-full">
              <div>
                <div className="our_img">
                  <Image
                    className="rounded-[20px] alignnone"
                    src="/images/identifying-new.webp"
                    alt="Identifying the Business Needs"
                    width={isMobile ? 300 : 691}
                    height={isMobile ? 180 : 361}
                    sizes="(max-width: 767px) 300px, 691px"
                  />
                </div>
              </div>
              <div className="w-[85%] text-left">
                <div className="service_title">
                  <p className="!border-0 pt-[2rem]">
                    Identifying the Business Needs
                  </p>
                </div>
                <div className="home_sec2_txt4">
                  <p className="!leading-snug !text-left">
                    Vugo reached out to us for developing an advertising
                    platform that includes an interactive dashboard for details
                    analytics. The objective of the project was to understand
                    rider behavior, and the types of ads they watch while
                    displaying user analysis with accuracy.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 w-full lg:px-[10px] px-[0px] lg:pb-[0px]">
              <div>
                <div className="our_img">
                  <Image
                    className="rounded-[20px] alignnone"
                    src="/images/understanding-new.webp"
                    alt="Understanding the Requirement"
                    width={isMobile ? 300 : 691}
                    height={isMobile ? 180 : 361}
                    sizes="(max-width: 767px) 300px, 691px"
                  />
                </div>
              </div>
              <div className="w-[85%] text-left">
                <div className="service_title">
                  <p className="!border-0 pt-[2rem]">
                    Understanding the Requirement
                  </p>
                </div>
                <div className="home_sec2_txt4">
                  <p className="!leading-snug !text-left">
                    When asked to create an interactive tablet app for in-car
                    entertainment, we were tasked with creating something that
                    enabled both the admin as well as the rider to browse
                    through their favorite content while being exposed to ads
                    that would be relevant to them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sec6_title text-center !p-0 md:w-[68%] w-[100%] mx-auto lg:my-24 md:my-20 my-10">
          <p>HOW BRILWORKS HELPED VUGO ACHIEVE ITS OBJECTIVES?</p>
        </div>

        <div className="service_grid_img reveal">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[50px] gap-[20px]">
            <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
              <div className="basis-[15%]">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/burgerAsset-110-1.png"
                  alt="Feature-rich Application"
                />
              </div>

              <div className="service_txt basis-[85%]">
                <div className="service_num">&lt; 01.</div>
                <div className="service_title">
                  <p>Feature-rich Application</p>
                </div>
                <div className="service_description">
                  <p>
                    We developed an application with an interactive dashboard
                    for rider behavior, which includes various features such as
                    user profiling and the collection of data for personalized
                    ads.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
              <div className="basis-[15%]">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/burgerAsset-140-2.png"
                  alt="Assured On-time Delivery"
                />
              </div>

              <div className="service_txt basis-[85%]">
                <div className="service_num">&lt; 02.</div>
                <div className="service_title">
                  <p>Assured On-time Delivery</p>
                </div>
                <div className="service_description">
                  <p>
                    Brilworks developed a mobile app for customer interaction
                    and a web application dashboard using Java, Elasticsearch,
                    and Kibana within 6 months timeframe.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
              <div className="basis-[15%]">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/burgerAsset-130-2.png"
                  alt="Integration of Quick Payments"
                />
              </div>

              <div className="service_txt basis-[85%]">
                <div className="service_num">&lt; 03.</div>
                <div className="service_title">
                  <p>Integration of Quick Payments</p>
                </div>
                <div className="service_description">
                  <p>
                    Through the integration with the Stripe payment processing
                    platform, we were able to pay drivers per ride, on the
                    amount of time that riders spend viewing ads. Stripe
                    integration made it possible to transfer the money to the
                    driver’s account within a week.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
              <div className="basis-[15%]">
                <img
                  loading="lazy"
                  decoding="async"
                  className="alignnone wp-image-285 size-full"
                  src="/images/burgerAsset-150-2.png"
                  alt="Selecting the Right Technology"
                />
              </div>

              <div className="service_txt basis-[85%]">
                <div className="service_num">&lt; 04.</div>
                <div className="service_title">
                  <p>Selecting the Right Technology</p>
                </div>
                <div className="service_description">
                  <p>
                    Selecting the Right Technology We needed to build a robust
                    platform that could scale up and down in terms of data
                    storage. This is why we chose Java and Elasticsearch for
                    detail analysis, which makes it easy to add multiple filters
                    based on geolocation, time, most viewed advertising, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="workpadd_borderTop xl:my-[6rem] md:my-[4rem] my-[2rem]"></div>

        <div className="sec6_title text-center !p-0 mx-auto mb-[32px]">
          <p>THE RESULT</p>
        </div>

        <div className="md:w-[73%] w-[100%] mx-auto text-center home_sec2_txt4">
          <p className="!pt-0 md:!text-[1.5rem] !text-left md:!text-center">
            Our team helped Vugo achieve its product vision. We worked with them
            from the very beginning by creating a detailed strategy that was
            designed specifically for them, and we worked together to turn their
            idea into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-[32px] md:mt-[64px] mt-[32px] the-result reveal">
          <div className="text-center">
            <div className="w-[22%] mx-auto">
              <img
                loading="lazy"
                decoding="async"
                className="alignnone"
                src="/images/burgerAsset-200.png"
                alt="2x"
              />
            </div>
            <div className="service_description txt_center">
              <p>
                Increase in
                <br />
                driver earnings.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="w-[22%] mx-auto">
              <img
                loading="lazy"
                decoding="async"
                className="alignnone"
                src="/images/burgerAsset-210.png"
                alt="advertiser queries"
              />
            </div>
            <div className="service_description txt_center">
              <p>
                Increase in
                <br />
                advertiser queries.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="w-[22%] mx-auto">
              <img
                loading="lazy"
                decoding="async"
                className="alignnone"
                src="/images/burgerAsset-220.png"
                alt="better marketing spending"
              />
            </div>
            <div className="service_description txt_center">
              <p>
                Facilitated better
                <br />
                marketing spending.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="w-[22%] mx-auto">
              <img
                loading="lazy"
                decoding="async"
                className="alignnone"
                src="/images/burgerAsset-230.png"
                alt="insights"
              />
            </div>
            <div className="service_description txt_center">
              <p>
                Detailed insights
                <br />
                into rider mindset.
              </p>
            </div>
          </div>
        </div>

        <WhatMakeUsBrilliant />

        <div className="workpadd_borderTop xl:mt-[6rem] md:mt-[4rem] mt-[2rem]"></div>
      </div>
      <ClientReviews />
      <ContactUs />
    </section>
  );
};

export default PortfolioInnerVugo;
