"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import { scrollEffect } from "../lib/commonFunction";
import Button from "../Common/Button";

const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const ContactUs = dynamic(() => import("../Homepage/ContactUs"));
const WhatMakeUsBrilliant = dynamic(() => import("./WhatMakeUsBrilliant"));

const PortfolioInnerRastrack = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);
  return (
    <>
      <section className="portfolio">
        <div className="container mx-auto service_width">
          <div className="sec6_title text-center">
            <h1 className="md:!text-[2.5rem] md:!leading-tight !text-3xl font-bold">
              How Brilworks Helped Rastrack
              <br />
              Improve their Fleet’s Efficiency
            </h1>
          </div>
          <div className="md:mb-16 mb-8">
            <Image
              className="md:block hidden"
              src="/images/rastrack.webp"
              alt="Rastrack"
              width="787"
              height="494"
              priority
              sizes="(min-width: 1040px) 80vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
            />
            <Image
              className="block md:hidden"
              src="/images/rastrack-mobile.webp"
              alt="Rastrack"
              priority
              width="400"
              height="250"
              sizes="(min-width: 1040px) 80vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
            />
          </div>
          <div className="porfolio_inner">
            <p>
              Rastrack is a satellite tracking and real-time monitoring company
              which helps owners track their vehicles with detailed analysis.
              Rastrack specializes in the control and satellite monitoring of
              assets or individuals using networking technologies.
            </p>
          </div>

          <div className="sxl:pt-[4rem] sxl:pb-[6rem] pt-[3rem] pb-[3rem] flex items-center justify-center">
            <Button
              innerClassName="flex items-center justify-center gap-1"
              className="!pr-5"
              redirect="https://rastrack.com"
              label="Visit Website"
              icon="right-arrow"
            />
          </div>

          <div className="mx-auto reveal">
            <div className="flex flex-wrap identifying-understanding">
              <div className="lg:w-6/12 w-full lg:px-[10px] px-[0px] lg:pb-[0px] pb-[30px]">
                <div>
                  <div className="our_img">
                    <Image
                      className="rounded-[20px] alignnone"
                      src="/images/identifying-the-business-needs.webp"
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
                      Rastrack reached out to Brilworks to develop a mobile and
                      web dashboard that could be used by both drivers and fleet
                      managers for better tracking of feel and analysis of fleet
                      data.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-6/12 w-full lg:px-[10px] px-[0px] lg:pb-[0px] pb-[30px]">
                <div>
                  <div className="our_img">
                    <Image
                      className="rounded-[20px] alignnone"
                      src="/images/understanding-the-requirement.webp"
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
                      The client wanted us to build a mobile app that meets
                      current market needs and can handle data loads for a fleet
                      GPS application. They also needed the ability for us to
                      collect and transmit data to servers when it’s not being
                      used.
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
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px]">
              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/Dedicated-Technology-Experts.png"
                    alt="Feature-rich Application"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 01.</div>
                  <div className="service_title">
                    <p>Dedicated Technology Experts</p>
                  </div>
                  <div className="service_description">
                    <p>
                      We developed an application with an interactive dashboard
                      for rider behavior, which includes various features such
                      as user profiling and the collection of data for
                      personalized ads.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/On-time-Delivery.png"
                    alt="Assured On-time Delivery"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 02.</div>
                  <div className="service_title">
                    <p>On-time Delivery</p>
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
                    decoding="async"
                    loading="lazy"
                    src="/images/Enabled-Automation.png"
                    alt="Integration of Quick Payments"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 03.</div>
                  <div className="service_title">
                    <p>Enabled Automation</p>
                  </div>
                  <div className="service_description">
                    <p>
                      With the new application, it became easier for drivers to
                      upload images and update their status which helped fleet
                      owners get rid of manual tracking.
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
                    src="/images/Predictive-Analysis.png"
                    alt="Selecting the Right Technology"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 04.</div>
                  <div className="service_title">
                    <p>Predictive Analysis</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Thanks to the new interactive dashboard we created,
                      Rastrack was able to view the full trip of the fleet and
                      can predict the cost of fuel and profit margin for each
                      trip.
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
              We strived to be a reliable partner for their team by working in
              their time zone, providing them with complete flexibility and
              quality service. Together we made Rastrack’s vision a reality and
              are proud to have helped create such beautiful software for each
              and every stakeholder involved.
            </p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-2 md:gap-[32px] md:mt-[64px] mt-[32px] the-result reveal">
            <div className="text-center">
              <div className="w-[22%] mx-auto">
                <img
                  decoding="async"
                  loading="lazy"
                  className="alignnone"
                  src="/images/rastrack-1.png"
                  alt="2x"
                />
              </div>
              <div className="service_description txt_center">
                <p>
                  Drivers are easily
                  <br />
                  able to update fleet information
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-[22%] mx-auto">
                <img
                  decoding="async"
                  loading="lazy"
                  className="alignnone"
                  src="/images/rastrack-2.png"
                  alt="advertiser queries"
                />
              </div>
              <div className="service_description txt_center">
                <p>
                  Fleet owners can
                  <br />
                  predict cost and profit.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-[22%] mx-auto">
                <img
                  decoding="async"
                  loading="lazy"
                  className="alignnone"
                  src="/images/rastrack-3.png"
                  alt="better marketing spending"
                />
              </div>
              <div className="service_description txt_center">
                <p>
                  Fleet owners can get
                  <br />
                  notifications if any repair is needed for any vehicle.
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
    </>
  );
};

export default PortfolioInnerRastrack;
