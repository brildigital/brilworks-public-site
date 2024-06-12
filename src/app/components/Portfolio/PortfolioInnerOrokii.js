/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import { useMediaQuery } from "react-responsive";

const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const HomepageContactForm = dynamic(() =>
  import("../Homepage/HomepageContactForm")
);
const WhatMakeUsBrilliant = dynamic(() => import("./WhatMakeUsBrilliant"));

const PortfolioInnerOrokii = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <>
      <section className="portfolio">
        <div className="service_width">
          <div className="sec6_title text-center">
            <h1 className="md:!text-[2.5rem] md:!leading-tight !text-3xl font-bold">
              How Our Experts Helped Orokii Build a
              <br />
              Custom Fintech Application
            </h1>
          </div>
          <div className="md:mb-16 mb-8">
            <Image
              className="md:block hidden"
              src="/images/orokii.jpg"
              alt="Orokii"
              width="787"
              height="494"
              priority
              sizes="(min-width: 1040px) 80vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
            />
            <Image
              className="block md:hidden"
              src="/images/orokii-mobile.webp"
              alt="Orokii"
              priority
              width="400"
              height="250"
              sizes="(min-width: 1040px) 80vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
            />
          </div>

          <div className="porfolio_inner">
            <p>
              Orokii is an on-demand platform that allows you to send
              cross-border payments anywhere in the world at real-time prices.
              Orokii is making domestic and cross-border payments cheaper,
              faster, and safer using blockchain technology.
            </p>
          </div>

          <div className="md:pt-[4rem] md:pb-[6rem] pt-[3rem] pb-[3rem]">
            <Link
              href="https://orokii.com"
              className="portfolio_know_more md:mx-auto ml-0"
            >
              <div className="get_icon">
                <img
                  decoding="async"
                  loading="lazy"
                  className="alignnone"
                  src="/images/right_arrow.png"
                  alt="right arrow"
                />
              </div>
              <div className="portfolio_know_more_txt">
                <p>Visit Website</p>
              </div>
            </Link>
          </div>

          <div className="mx-auto reveal">
            <div className="flex flex-wrap identifying-understanding">
              <div className="lg:w-6/12 w-full lg:px-[10px] px-[0px] lg:pb-[0px] pb-[30px]">
                <div>
                  <div className="our_img">
                    <Image
                      className="border_redius20 alignnone"
                      src="https://a.storyblok.com/f/219851/692x362/34d16e1fa9/identifying-the-business-needs-1.jpg"
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
                      The client Orokii reached out and requested our services
                      to develop a mobile application that could be used by
                      their customers to carry out secure transactions within
                      domestic or international markets.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-6/12 w-full lg:px-[10px] px-[0px] lg:pb-[0px] pb-[30px]">
                <div>
                  <div className="our_img">
                    <Image
                      className="border_redius20 alignnone"
                      src="/images/the-challenge.webp"
                      alt="Understanding the Requirement"
                      width={isMobile ? 300 : 691}
                      height={isMobile ? 180 : 361}
                      sizes="(max-width: 767px) 300px, 691px"
                    />
                  </div>
                </div>
                <div className="w-11/12 text-left">
                  <div className="service_title">
                    <p className="!border-0 pt-[2rem]">The Challenge</p>
                  </div>
                  <div className="home_sec2_txt4">
                    <p className="!leading-snug !text-left">
                      It’s always challenging to send cross-border payments
                      since they take a long time to clear (sometimes 4-5 days)
                      and also come with hefty charges and so the client wanted
                      to build an app that could solve the problem of faster
                      cross-border transactions with lower fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="workpadd_borderTop xl:my-[8rem] lg:my-[6rem] md:my-[4rem] my-[2rem]"></div>

          <div className="sec6_title text-center !p-0 md:w-[80%] w-[100%] mx-auto md:mb-[80px] mb-[80px]">
            <p>HOW BRILWORKS HELPED OROKII ACHIEVE ITS GOALS?</p>
          </div>

          <div className="service_grid_img reveal">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px]">
              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/Use-of-Right-Technology.png"
                    alt="Feature-rich Application"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 01.</div>
                  <div className="service_title">
                    <p>Use of Right Technology</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Brilworks helped the client to develop a mobile
                      application based on blockchain technology to make
                      cross-border transactions cheaper and faster.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/Resolved-key-challenges.png"
                    alt="Assured On-time Delivery"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 02.</div>
                  <div className="service_title">
                    <p>Resolved key challenges</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Thanks to blockchain technology it was possible for us to
                      bypass the middlemen and solve the challenge of time and
                      costs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/Followed-Due-Compliance.png"
                    alt="Integration of Quick Payments"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 03.</div>
                  <div className="service_title">
                    <p>Followed Due Compliance</p>
                  </div>
                  <div className="service_description">
                    <p>
                      The application was designed according to international
                      standards, making it compatible with various devices and
                      operating systems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    className="alignnone wp-image-285 size-full"
                    src="/images/Functional-UIUX.png"
                    alt="Selecting the Right Technology"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 04.</div>
                  <div className="service_title">
                    <p>Functional UI/UX</p>
                  </div>
                  <div className="service_description">
                    <p>
                      We were able to create a well-structured and user-friendly
                      system, enabling the client’s customers to complete
                      transactions easily and conveniently.
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
              Team Brilworks was delighted to be partnered with Orokii in
              bringing their innovative mobile application. We were able to
              create a seamless, secure, and instantly settled payment
              experience for consumers and businesses to send funds
              cross-border.
            </p>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-2 md:mt-[64px] mt-[32px] the-result reveal">
            <div className="text-center">
              <div className="w-[22%] mx-auto">
                <img
                  decoding="async"
                  loading="lazy"
                  className="alignnone"
                  src="/images/Orokii-1.png"
                  alt="2x"
                />
              </div>
              <div className="service_description txt_center">
                <p>
                  Faster & secure
                  <br />
                  transactions
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-[22%] mx-auto">
                <img
                  decoding="async"
                  loading="lazy"
                  className="alignnone"
                  src="/images/Orokii-2.png"
                  alt="advertiser queries"
                />
              </div>
              <div className="service_description txt_center">
                <p>
                  Less or zero
                  <br />
                  fees for transactions
                </p>
              </div>
            </div>
          </div>

          <WhatMakeUsBrilliant />

          <div className="workpadd_borderTop xl:my-[6rem] md:my-[4rem] my-[2rem]"></div>

          <ClientReviews />

          <div className="blog-home xl:pb-[128px] pb-[40px] mx-auto md:pt-[128px] pt-[32px] reveal">
            <HomepageContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioInnerOrokii;
