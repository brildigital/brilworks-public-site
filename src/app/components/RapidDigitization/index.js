"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import RapidDigitizationBanner from "./RapidDigitizationBanner";
import { useMediaQuery } from "react-responsive";
import { getblogData } from "../lib/getblog";
import Image from "next/image";
import { BlogText } from "../Homepage/BigText";
import { usePathname } from "next/navigation";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import LinkWithArrow from "../Common/LinkWithArrow";

const WhyRapidDigitization = dynamic(() => import("./WhyRapidDigitization"));
const RapidDigitizationBenefits = dynamic(() =>
  import("./RapidDigitizationBenefits")
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const TechStackWeUse = dynamic(() => import("../Services/TechStackWeUse"));
const ServicesFAQ = dynamic(() => import("../Services/ServicesFAQ"));

const RapidDigitization = () => {
  const pathname = usePathname();
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1080 });
  const [blogData, setBlogData] = useState(null);
  useEffect(() => {
    scrollEffect();
    fetchData();
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };

  }, []);
  async function fetchData() {
    try {
      const blogData = await getblogData(1, isTablet ? 3 : 4 ,false,"no code");
      setBlogData(blogData.storyData);
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <div className="services pt-20">
      <RapidDigitizationBanner />
      <div className="container mx-auto">
        <div className="sm:w-[90%] w-[100%] mx-auto px-4 xl:pb-24 md:pb-16 pb-8 reveal">
          <div className="bg-themeColor rounded-3xl py-10 md:px-12 px-5 flex items-center justify-center flex-col">
            <h2 className="md:text-5xl text-3xl !leading-tight md:text-center font-bold md:w-[90%] w-full text-colorWhite">
              Digital Acceleration Service: Strategic Solutions, Transformative
              Results
            </h2>
            <div className="flex flex-col gap-8 mt-10 text-2xl md:max-w-7xl md:text-center">
              <p className="text-colorWhite">
                Partner with us to embark on a journey of digital
                transformation. Our seasoned experts in digital strategy,
                technology, and implementation collaborate seamlessly with your
                team to accelerate your digital initiatives.
              </p>
              <p className="text-colorWhite">
                We leverage cutting-edge technologies, data-driven insights, and
                agile methodologies to deliver measurable results within your
                timelines and budget.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-themeLight">
        <WhyRapidDigitization />
      </div>
      <div className="lg:px-[70px] px-6">
        <RapidDigitizationBenefits />
      </div>
      <div className="container mx-auto">
        <div className="sm:w-[90%] w-[100%] mx-auto xl:pb-[6rem] md:pb-[4rem] pb-[2rem] end-to-end reveal md:px-8 px-4">
          <div className="bg-themeColor rounded-3xl py-10 md:px-12 px-6 flex items-center justify-center flex-col">
            <p className="md:text-5xl text-3xl !leading-tight md:text-center md:max-w-7xl text-colorWhite">
              Let us guide you through every step of your digital transformation
              journey. Partner with us to unleash the full potential of your
              business in the digital era.
            </p>
            <Link href="/contact-us/">
              <div className="!bg-colorWhite px-[14px] py-[10px] mt-8 border border-colorBlack shadow-none hover:shadow-lg cursor-pointer">
                <p className="uppercase">Get started today</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="bg-themeLight">
          <ClientReviews />
        </div>
        <div className="bg-themeLight">
          <TechStackWeUse />
        </div>
    
      </div>
    <>
    <div
      className={
        pathname === "/" ? "bg-sectionBG section-padding" : "section-padding"
      }
    >
      <div className="container max-w-[1280px] mx-auto reveal">
        <BlogText />
        <div className="blog-home reveal">
          {blogData?.length ? (
            blogData?.map(({ slug, name, content }, index) => {
              if (
                content &&
                (content.Priority == 1 ||
                  content.Priority == 2 ||
                  content.Priority == 3)
              ) {
                return (
                  <div
                    key={index}
                    className="blog-box overflow-hidden shadow-none hover:shadow-lg"
                  >
                    <Link as={`/blog/${slug}`} href={`/blog/[slug]`}>
                      <Image
                        src={content?.mobile_banner?.filename}
                        alt={content?.mobile_banner?.alt}
                        className="vc_gitem-zone-img rounded-[20px]"
                        width={550}
                        height={283}
                      />
                      <div className="p-[10px]">
                        <h4 className="xl:text-[24px] mb-[10px] leading-8">
                          {name}
                        </h4>
                      </div>
                    </Link>
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="blog-box overflow-hidden shadow-none hover:shadow-lg bg-white"
                  >
                    <Link as={`/blog/${slug}`} href={`/blog/[slug]`}>
                      <Image
                        src={content?.mobile_banner?.filename || ""}
                        alt={content?.mobile_banner?.alt || "Blog banner"}
                        className="vc_gitem-zone-img rounded-[20px]"
                        width={550}
                        height={283}
                        sizes="(min-width: 767px) 550px, calc(100vw - 30px)"
                      />
                      <div className="p-[10px]">
                        <h4 className="xl:text-xl mb-[10px] font-semibold leading-8">
                          {name}
                        </h4>
                      </div>
                    </Link>
                  </div>
                );
              }
            })
          ) : (
            <div className="flex align-middle justify-center">
              <FetchDataSpinner />
            </div>
          )}
        </div>
        {blogData?.length ? (
          <LinkWithArrow
            href="/blog/"
            label="Read More"
            className="justify-center"
          />
        ) : null}
      </div>
    </div></>
          <ServicesFAQ />
      
    </div>
  );
};

export default RapidDigitization;
