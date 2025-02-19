/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import Button from "../Common/Button";
import DevelopSuccessStory from "./DevelopSuccessStory";
import StoryblokClient from "storyblok-js-client";
import Image from "next/image";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import Heading from "../HTMLComponents/Heading";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

const ToolsAndGetInTouch = dynamic(() => import("./ToolsAndGetInTouch"));

const Portfolio = () => {
  const words = ["Empower. ", "Create. ", "Progress"];
  const colorSequences = [
    ["text-colorWhite", "text-colorBlack", "text-colorBlack"],
    ["text-colorBlack", "text-colorWhite", "text-colorBlack"],
    ["text-colorBlack", "text-colorBlack", "text-colorWhite"],
  ];

  const [caseStudyData, setCaseStudyData] = useState();
  const [colorClasses, setColorClasses] = useState(colorSequences[0]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    Storyblok.get("cdn/stories/", {
      starts_with: "portfolio/",
      per_page: 20,
      version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    })
      .then((response) => {
        setCaseStudyData(response.data?.stories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      <div className="container max-w-[1440px] mx-auto">
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
          {caseStudyData?.length ? (
            caseStudyData?.map(({ name, content, full_slug }, index) => {
              return (
                <div
                  className="portflio_flex_row portfolio_sec service_width reveal"
                  key={index}
                >
                  <div
                    className={`basis-1/2 ${
                      (index + 1) % 2 === 0 ? "order-2 md:order-1" : ""
                    }`}
                  >
                    <div className="portfolio_color_style">
                      <div className="porfolio_sec1_img relative">
                        <Image
                          className="alignnone"
                          src={content?.images?.[0]?.filename}
                          width="550"
                          height="368"
                          alt={`casestudy-${index}`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/2">
                    <div className="portfolio_sec1_txt1">
                      <Heading
                        type="h2"
                        className="xl:!text-[40px] lg:!text-4xl text-[30px] !font-semibold lg:!leading-normal md:pb-8 pb-1"
                        data={content?.title}
                      />
                    </div>
                    <div className="portfolio_sec1_txt2 portfolio_description_width">
                      <p>
                        {content?.description?.split(" ")?.length > 31
                          ? content?.description
                              ?.split(" ")
                              ?.slice(0, 25)
                              ?.join(" ") + "..."
                          : content?.description}
                      </p>
                    </div>
                    <Button
                      innerClassName="flex items-center justify-center gap-2"
                      redirect={`/${full_slug}/`}
                      label="Know More"
                      icon="right-arrow-next"
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex items-center justify-center py-20">
              <FetchDataSpinner />
            </div>
          )}
        </section>
      </div>
      <DevelopSuccessStory />
      <ToolsAndGetInTouch />
    </>
  );
};

export default Portfolio;
