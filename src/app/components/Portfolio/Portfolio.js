/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import Button from "../Common/Button";
import DevelopSuccessStory from "./DevelopSuccessStory";
import { usePathname } from "next/navigation";

const ToolsAndGetInTouch = dynamic(() => import("./ToolsAndGetInTouch"));

const Portfolio = () => {
  const pathname = usePathname();
  const words = ["Empower. ", "Create. ", "Progress"];
  const colorSequences = [
    ["text-colorWhite", "text-colorBlack", "text-colorBlack"],
    ["text-colorBlack", "text-colorWhite", "text-colorBlack"],
    ["text-colorBlack", "text-colorBlack", "text-colorWhite"],
  ];

  const [colorClasses, setColorClasses] = useState(colorSequences[0]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => {
        const nextStep = (prevStep + 1) % colorSequences.length;
        setColorClasses(colorSequences[nextStep]);
        return nextStep;
      });
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
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
    <>
      <div className="container max-w-[1280px] mx-auto">
        <section className="portfolio md:mt-32 mt-24">
          <div className="service_width relative flex items-center justify-center">
            <div className="!bg-gradient-custom md:h-[46vh] h-[40vh] rounded-[30px] w-full flex items-center justify-center">
              <div className="text-center">
                <p className="font-bold text-colorWhite xl:text-3xl md:text-[26px] text-2xl">
                  Case Studies
                </p>
                <h1
                  className={`font-bold xl:text-[4.5rem] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]`}
                >
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className={`${colorClasses[index]} transition-all duration-700`}
                    >
                      {word}
                    </span>
                  ))}
                </h1>
              </div>
            </div>
          </div>

          <div className="service_width">
            <h2 className="xl:!pt-20 md:!pt-16 !pt-8 font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl mb-4">
              Our Recent <span className="text-themeColor">Work</span>
            </h2>
            <p className="text-colorGray md:text-2xl text-xl">
              See how our work enable companies to excel in their industry.
            </p>
          </div>

          <div className="portflio_flex_row portfolio_sec service_width reveal">
            <div className="basis-1/2">
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
            <div className="basis-1/2">
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
                innerClassName="flex items-center justify-center gap-2"
                redirect="/portfolio/vugo/"
                label="Know More"
                icon="right-arrow-next"
              />
            </div>
          </div>

          <div className="portflio_flex_row service_width reveal">
            <div className="basis-1/2 order-2 md:order-1">
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
                innerClassName="flex items-center justify-center gap-2"
                redirect="/portfolio/rastrack/"
                label="Know More"
                icon="right-arrow-next"
              />
            </div>
            <div className="basis-1/2 order-1 md:order-2">
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

          <div className="portflio_flex_row portfolio_sec service_width reveal">
            <div className="basis-1/2">
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
            <div className="basis-1/2">
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
                innerClassName="flex items-center justify-center gap-2"
                redirect="/portfolio/orokii/"
                label="Know More"
                icon="right-arrow-next"
              />
            </div>
          </div>

          <div className="portflio_flex_row service_width reveal">
            <div className="basis-1/2 order-2 md:order-1">
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
                innerClassName="flex items-center justify-center gap-2"
                redirect="/portfolio/eccocar/"
                label="Know More"
                icon="right-arrow-next"
              />
            </div>
            <div className="basis-1/2 order-1 md:order-2">
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

          <div className="portflio_flex_row portfolio_sec service_width reveal">
            <div className="basis-1/2">
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
            <div className="basis-1/2">
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
                innerClassName="flex items-center justify-center gap-2"
                redirect={
                  pathname === "/case-studies/"
                    ? "/case-studies/trackimo/"
                    : "/portfolio/trackimo/"
                }
                label="Know More"
                icon="right-arrow-next"
              />
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
