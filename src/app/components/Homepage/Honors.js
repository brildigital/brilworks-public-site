"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/virtual";
import Link from "next/link";
import { HonorText } from "./BigText";
import { Pagination, Autoplay, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FetchDataSpinner from "./FetchDataSpinner";
import { useEffect, useState } from "react";
import { scrollEffect } from "../lib/commonFunction";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Honors = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  useEffect(() => {
    const dataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    };
    dataFetch();
  }, []);

  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  const slidesData = [
    {
      link: "https://www.adalo.com/experts/brilworks-software",
      imgSrc: "/images/review-adalo.png",
      imgAlt: "adalo expert",
      text: "Adalo Expert No-Code",
    },
    {
      link: "https://partners.amazonaws.com/partners/0018a00001qmc5PAAQ/Brilworks%20Technology%20Pvt%20Ltd",
      imgSrc: "/images/select-tier-service-partner-light-1.png",
      imgAlt: "AWS Partner",
      imgClass: "w-[120px]",
      text: "AWS Partner",
    },
    {
      link: "https://clutch.co/profile/brilworks-software#highlights",
      imgSrc: "/images/top-clutchco-software-developers-gaming-india.webp",
      imgAlt: "Clutch Game Reviews",
      imgClass: "w-[150px]",
      text: "Gaming India",
    },
    {
      link: "https://themanifest.com/in/software-development/java/companies/ahmedabad",
      imgSrc:
        "/images/top_the_manifest_app_development_company_ahmedabad_award.png",
      imgAlt: "App dev Company",
      imgClass: "w-[110px]",
      text: "App Development Company",
    },
    {
      link: "https://www.storyblok.com/pl/brilworks-technology",
      imgSrc: "/images/Storyblok.svg",
      imgAlt: "Storyblok partner",
      imgClass: "w-[180px]",
      text: "Storyblok Partner",
    },
    {
      link: "https://clutch.co/profile/brilworks-software#highlights",
      imgSrc:
        "/images/top-clutchco-software-developers-gps-navigation-gis-india.webp",
      imgAlt: "Clutch GPS, Navigation & GIS Reviews",
      imgClass: "w-[150px]",
      text: "GPS, Navigation & GIS India",
    },
    {
      link: "https://themanifest.com/in/software-development/java/companies/ahmedabad",
      imgSrc:
        "/images/top_the_manifest_software_developers_ahmedabad_2023_award.png",
      imgAlt: "The manifest Reviews",
      imgClass: "w-[110px]",
      text: "Software Developers",
    },
    {
      link: "https://clutch.co/profile/brilworks-software#summary",
      imgSrc: "/images/review-clutch.png",
      imgAlt: "Clutch Reviews",
      text: "Clutch 9.9 Ratings",
    },
    {
      link: "https://www.designrush.com/agency/profile/brilworks-software",
      imgSrc: "/images/Top-Mobile-App-Development-Company2.webp",
      imgAlt: "Top Mobile App Development Company",
      imgClass: "w-[150px]",
      text: "DesignRush Top Company",
    },
    {
      link: "https://www.dotcms.com/partners/brilworks",
      imgSrc: "/images/dotCMS-logo.svg",
      imgAlt: "dotCMS logo",
      imgClass: "w-[150px]",
      text: "dotCMS Partner",
    },
    {
      link: "https://www.ambitionbox.com/overview/brilworks-overview",
      imgSrc: "/images/review-ambitionbox.png",
      imgAlt: "AmbitionBox Rating",
      text: "AmbitionBox Rating",
    },
    {
      link: "https://www.glassdoor.co.in/Overview/Working-at-Brilworks-EI_IE3883160.11,20.htm",
      imgSrc: "/images/review-glassdoor.png",
      imgAlt: "Glassdoor review",
      text: "Glassdoor 4.8 Ratings",
    },
    {
      imgSrc: "/images/review-liferay.png",
      imgAlt: "Liferay Partner",
      text: "Liferay Silver Service Partner",
    },
    {
      link: "https://technology.siliconindia.com/ranking/10-most-promising-blockchain-development-companies-%C2%AD-2022-rid-1689.html",
      imgSrc: "/images/review-blockchain.png",
      imgAlt: "SiliconIndia Blockchain Development Company",
      text: "Silicon India Promising Company",
    },
    {
      link: "https://topsoftwarecompanies.co/india/software-development/agencies/ahmedabad",
      imgSrc: "/images/review-top-software-developers.png",
      imgAlt: "top software developers",
      text: "Top Software Companies",
    },
    {
      link: "https://clutch.co/profile/brilworks-software#summary",
      imgSrc:"/images/global_award_spring_2024.webp",
      imgAlt: "global award spring",
      text: "Global Award Spring",
      imgClass: "w-[150px]",
    },
    {
      link: "https://clutch.co/profile/brilworks-software#summary",
      imgSrc:"/images/global_award_2023 (1).webp",
      imgAlt: "global award fall",
      text: "Global Award Fall",
      imgClass: "w-[150px]",
    }

  ];

  return (
    <div className="bg-sectionBG section-padding">
      <div className="container max-w-[1536px] mx-auto reveal">
        <HonorText />
        <div className="honors-swiper reveal">
          <Swiper
            modules={[Pagination, Autoplay, Virtual]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 500 }}
            loopfillgroupwithblank
            speed={1500}
            loop={true}
            virtual
            breakpoints={{
              1475: {
                slidesPerView: 4,
              },
              1028: {
                slidesPerView: 3,
              },
              991: {
                slidesPerView: 2,
              },
              767: {
                slidesPerView: 2,
              },
              575: {
                slidesPerView: 1,
              },
            }}
          >
            {isLoading ? (
              <div className="flex align-middle justify-center">
                <FetchDataSpinner />
              </div>
            ) : (
              slidesData?.map((data, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="award ng-scope">
                      <Link
                        href={data.link ? data.link : "#"}
                        target="_blank"
                        rel="nofollow noopener"
                      >
                        <div className="award_sec8_img1">
                          <Image
                            className={data.imgClass}
                            src={data.imgSrc}
                            alt={data.imgAlt}
                            width="180"
                            height="120"
                          />
                        </div>

                        <div className="review-text">
                          <p className="xl:text-[20px] lg:text-[18px] text-[1rem]">
                            {data.text}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Honors;
