/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import Button from "../Common/Button";
import DevelopSuccessStory from "./DevelopSuccessStory";

const ToolsAndGetInTouch = dynamic(() => import("./ToolsAndGetInTouch"));

const Portfolio = () => {
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
      <div className="container mx-auto">
        <section className="portfolio md:mt-32 mt-24">
          <div className="service_width relative flex items-center justify-center">
            <div className="!bg-gradient-custom md:h-[46vh] h-[40vh] rounded-[30px] w-full flex items-center justify-center">
              <div className="text-center">
                <p className="font-bold text-colorWhite xl:text-3xl md:text-[26px] text-2xl">
                  Case Studies
                </p>
                <h1 className="text-colorBlack font-bold xl:text-[4.5rem] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]">
                  Empower. Create.
                  <span className="text-colorWhite"> Progress</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="service_width">
            <h2 className="xl:!pt-24 md:!pt-16 !pt-8 font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl mb-4">
              Our Recent <span className="text-themeColor">Work</span>
            </h2>
            <p className="text-colorGray md:text-2xl text-xl">
              See how our work enable companies to excel in their industry.
            </p>
          </div>

          <div className="portflio_flex_row service_width reveal">
            <div className="portflio_flex_40">
              <div className="portfolio_sec1_txt1">
                <p>
                  A Unique In-car
                  <br />
                  Advertising Application
                </p>
              </div>
              <div className="portfolio_sec1_txt2 portfolio_description_width">
                <p>
                  Vugo is a seed-stage auto tech infotainment startup, Mobility
                  Media™ platform is monetizing ridesharing today, and
                  self-driving mobility services tomorrow.
                </p>
              </div>
              <Button
                innerClassName="flex items-center justify-center gap-1"
                className="!pr-5"
                redirect="/portfolio/vugo/"
                label="Know More"
                icon="right-arrow"
              />
            </div>
            <div className="portflio_flex_60">
              <div className="">
                <div className="portfolio_color_style">
                  <div className="porfolio_sec1_img relative">
                    <img
                      loading="lazy"
                      decoding="async"
                      className="alignnone"
                      src="/images/vugo-1.jpg"
                      alt="vugo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="portflio_flex_row portfolio_sec service_width reveal">
            <div className="portflio_flex_60 order_2">
              <div className="">
                <div className="portfolio_color_style">
                  <div className="porfolio_sec1_img relative">
                    <img
                      loading="lazy"
                      decoding="async"
                      className="alignnone"
                      src="/images/rastrack.webp"
                      alt="Rastrack"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="portflio_flex_40 order_1">
              <div className="portfolio_sec1_txt1">
                <p>
                  Improve Fleet’s
                  <br />
                  Efficiency Application
                </p>
              </div>
              <div className="portfolio_sec1_txt2 portfolio_description_width">
                <p>
                  Rastrack specializes in the control and satellite monitoring
                  of assets or individuals using networking technologies.
                </p>
              </div>
              <Button
                innerClassName="flex items-center justify-center gap-1"
                className="!pr-5"
                redirect="/portfolio/rastrack/"
                label="Know More"
                icon="right-arrow"
              />
            </div>
          </div>

          <div className="portflio_flex_row service_width reveal">
            <div className="portflio_flex_40">
              <div className="portfolio_sec1_txt1">
                <p>
                  A Custom
                  <br />
                  Fintech Application
                </p>
              </div>
              <div className="portfolio_sec1_txt2 portfolio_description_width">
                <p>
                  Send Cheaper and faster Domestic and Crossborder Payments –
                  Orokii provides its customers with one of the lowest
                  transaction fees in the industry.
                </p>
              </div>

              <Button
                innerClassName="flex items-center justify-center gap-1"
                className="!pr-5"
                redirect="/portfolio/orokii/"
                label="Know More"
                icon="right-arrow"
              />
            </div>
            <div className="portflio_flex_60">
              <div className="">
                <div className="portfolio_color_style">
                  <div className="porfolio_sec1_img relative">
                    <img
                      loading="lazy"
                      decoding="async"
                      className="alignnone"
                      src="/images/orokii.jpg"
                      alt="Orokii"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="portflio_flex_row portfolio_sec service_width reveal">
            <div className="portflio_flex_60 order_2">
              <div className="">
                <div className="portfolio_color_style">
                  <div className="porfolio_sec1_img relative">
                    <img
                      loading="lazy"
                      decoding="async"
                      className="alignnone"
                      src="/images/Eccocar.webp"
                      alt="Eccocar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="portflio_flex_40 order_1">
              <div className="portfolio_sec1_txt1">
                <p>
                  A Payment
                  <br />
                  Gateway Application
                </p>
              </div>
              <div className="portfolio_sec1_txt2 portfolio_description_width">
                <p>
                  Eccocar is a platform to launch, operate and scale digital
                  mobility services, designed hand in hand with Rent-a-Cars,
                  Dealers and Fleet Managers.
                </p>
              </div>
              <Button
                innerClassName="flex items-center justify-center gap-1"
                className="!pr-5"
                redirect="/portfolio/eccocar/"
                label="Know More"
                icon="right-arrow"
              />
            </div>
          </div>

          <div className="portflio_flex_row service_width reveal">
            <div className="portflio_flex_40">
              <div className="portfolio_sec1_txt1">
                <p>
                  A Smart
                  <br />
                  Software Solution
                </p>
              </div>
              <div className="portfolio_sec1_txt2 portfolio_description_width">
                <p>
                  Trackimo is a smart GPS/GSM/Wi-Fi tracker that keeps your
                  valuables safe and alerts you of troubles. Trackimo works
                  worldwide, indoors and outdoors.
                </p>
              </div>
              <Button
                innerClassName="flex items-center justify-center gap-1"
                className="!pr-5"
                redirect="/portfolio/trackimo/"
                label="Know More"
                icon="right-arrow"
              />
            </div>
            <div className="portflio_flex_60">
              <div className="">
                <div className="portfolio_color_style">
                  <div className="porfolio_sec1_img relative">
                    <img
                      loading="lazy"
                      decoding="async"
                      className="alignnone"
                      src="/images/gps-trackers-devices-uses2-1.webp"
                      alt="Trackimo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <DevelopSuccessStory />
      <ToolsAndGetInTouch />
    </>
  );
};

export default Portfolio;
