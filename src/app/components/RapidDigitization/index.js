"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { formattedDate, scrollEffect } from "../lib/commonFunction";
import RapidDigitizationBanner from "./RapidDigitizationBanner";
import { useMediaQuery } from "react-responsive";
import { getblogData } from "../lib/getblog";
import Image from "next/image";

const WhyRapidDigitization = dynamic(() => import("./WhyRapidDigitization"));
const RapidDigitizationBenefits = dynamic(() =>
  import("./RapidDigitizationBenefits")
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const TechStackWeUse = dynamic(() => import("../Services/TechStackWeUse"));
const ServicesFAQ = dynamic(() => import("../Services/ServicesFAQ"));

const RapidDigitization = () => {
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
        <ServicesFAQ />
      
      </div>
      <div className="container mx-auto md:!px-3 !px-4">
            <div className="flex flex-wrap flex-col xl:pb-20 md:pb-14 pb-8">
              <div className="service_sec3">
                <p className="home_sec2_txt3 !pb-0 md:!pt-8 !pt-0">
                  <p className="!ml-0 extra_bold !w-full">
                    You might also like
                  </p>
                </p>
              </div>
              <div
                className={`grid 
                   xl:grid-cols-3 md:grid-cols-2
                 grid-cols-1 items-center gap-[2rem]`}
              >
                {console.log(blogData)}
          
                {  blogData
                    ?.filter(({ slug }) => true)
                    ?.slice(0, `${isTablet ? 2 : 3}`)
                    ?.map(({ slug, name, content }, index) => (
                      <div
                        key={index}
                        className="border-[1px] border-[#80808038] rounded-[30px] blog_flex_30"
                      >
                        <Link
                          as={`/blog/${slug}`}
                          href={`/blog/[slug]`}
                          target="_blank"
                          rel="external"
                        >
                          <div className="sec9_img1">
                            <Image
                              className="rounded-[30px]"
                              src={
                                content?.mobile_banner?.filename
                                  ? content?.mobile_banner?.filename
                                  : "/images/not-found-image.webp"
                              }
                              alt={
                                content?.mobile_banner?.alt ||
                                `Banner-img-${index}`
                              }
                              width={550}
                              height={283}
                            />
                          </div>
                          <div className="pt-[1rem] px-[1rem] pb-[1.5rem] blog-hover">
                            <div className="border-b-[1px] border-[#80808038] py-[1rem]">
                              <p className="entry-title default-max-width aspect-[518/116]">
                                {name}
                              </p>
                            </div>
                            <div className="sec9_txt2 mt-[1.5rem]">
                              <p className="publish_date">
                                {formattedDate(content?.Published)}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))
              }
              </div>
            </div>
          </div>
    </div>
  );
};

export default RapidDigitization;
