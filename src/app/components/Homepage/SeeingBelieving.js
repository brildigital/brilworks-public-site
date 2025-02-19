"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { BelievingText } from "./BigText";
import Image from "next/image";
import LinkWithArrow from "../Common/LinkWithArrow";
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

const SeeingBelieving = () => {
  // const [caseStudyData, setCaseStudyData] = useState();
  // useEffect(() => {
  //   Storyblok.get("cdn/stories/", {
  //     starts_with: "portfolio/",
  //     per_page: 4,
  //     version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
  //   })
  //     .then((response) => {
  //       setCaseStudyData(response.data?.stories);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // const staticPortfolioList =
  //   caseStudyData?.length &&
  //   caseStudyData.map((data) => {
  //     console.log("object", data);
  //     return {
  //       title: data?.content?.title,
  //       link: `/${data?.full_slug}/`,
  //       description: data?.content?.description,
  //       image: data?.content?.images?.[0]?.filename,
  //       alt: data?.content?.images?.[0]?.meta_data?.alt,
  //     };
  //   });

  const portfolioItems = [
    {
      title: "VUGO",
      description:
        "Founded in 2015, Vugo is the first company to develop in-car advertising for the rideshare marketplace. Headquartered in Minneapolis, Minnesota, Vugo develops highly targeted, responsive ads on billboards above vehicles for hire.",
      link: "/portfolio/vugo/",
      shortDesc:
        "150% customer base increase with product engineering services for vugo",
      image: "https://a.storyblok.com/f/219851/500x375/77c04adb56/vugo.jpg",
      alt: "vugo",
      bgColor: "!bg-[#2cbc89]",
    },
    {
      title: "TRACKIMO",
      description:
        "Trackimo specializes in highly reliable and effective tracking solutions. The company's end-to-end global IoT platform provides personal safety and tracking solutions to more than 500,000 consumers and more than 50 enterprise clients worldwide.",
      link: "/portfolio/trackimo/",
      shortDesc:
        "Our product engineering and AWS consulting services enable Trackimo to support 60,000 active devices seamlessly.",
      image: "https://a.storyblok.com/f/219851/500x375/f472daac29/trackimo.jpg",
      alt: "trackimo",
      bgColor: "!bg-[#e8eed5]",
    },
    {
      title: "OROKII",
      description:
        "Orokii is an on-demand platform that allows you to send cross-border payments anywhere in the world at real-time prices. Orokii is making domestic and cross-border payments cheaper, faster, and safer using blockchain technology.",
      link: "/portfolio/orokii/",
      shortDesc:
        "More than 5000 customers onboarded in a year with product development services for orokii.",
      image: "/images/orokii1.webp",
      alt: "orokii",
      bgColor: "!bg-[#377df8]",
    },
    {
      title: "ECCOCAR",
      description:
        "Eccocar is a SaaS Company that provides technology for rental cars to adapt to new mobility trends and offers a mobility service on demand. Eccocar digitizes rent-a-car and new on-demand mobility providers, such as ride-hailing and ride-sharing operators, and generates white-label APPs for them to launch their service.",
      link: "/portfolio/eccocar/",
      shortDesc:
        "Eccocar successfully onboarded 1,000+ fleet managers/users through our product engineering and AWS consulting services",
      image:
        "https://a.storyblok.com/f/219851/500x375/8707c8ae6a/eccocar-1.jpg",
      alt: "eccocar",
      bgColor: "!bg-[#f13134]",
    },
    {
      title: "RASTRACK",
      description:
        "Rastrack is a satellite tracking and real-time monitoring company which helps owners track their vehicles with detailed analysis. Rastrack specializes in the control and satellite monitoring of assets or individuals using networking technologies.",
      link: "/portfolio/rastrack/",
      image: "/images/rastrack1.webp",
      alt: "rastrack",
      bgColor: "!bg-[#2cbc89]",
    },
  ];

  const portfolioDynamicItems = [
    {
      title: "Building a Swipe-Based Platform Connecting Artists and Buyers",
      link: "/portfolio/art-marketplace-app/",
      description:
        "We created a dynamic platform that allows art lovers to discover new pieces, communicate directly with artists, and complete purchases with ease, fostering a vibrant art community.",
      image:
        "https://a.storyblok.com/f/219851/2000x1333/b7c5823a97/social-marketplace-app.webp",
      alt: "Social marketplace app",
    },
    {
      title: "Connecting Pet Owners With Trusted Caregivers and Expert Advice",
      link: "/portfolio/pet-finding-app/",
      description:
        "We built a mobile app that helps pet owners find reliable caregivers, consult veterinarians, and connect with a community of pet lovers-all in one place.",
      image:
        "https://a.storyblok.com/f/219851/2000x1333/72dd9ce8ca/pet-finder-app.webp",
      alt: "Pet finder app",
    },
    {
      title: "Making Early Learning Fun with An Interactive Educational Game",
      link: "/portfolio/educational-game-app/",
      description:
        "We developed a safe, mobile game for kids aged 2-6, using gamified activities to teach alphabets, numbers, colors, and shapes in an engaging way.",
      image:
        "https://a.storyblok.com/f/219851/2000x1333/e42efd8c00/educational-mobile-game.webp",
      alt: "Educational mobile game",
    },
    {
      title: "Streamlining Energy Audits with An All-In-One CRM Solution",
      link: "/portfolio/crm-solution/",
      description:
        "We built a specialized CRM platform that automates energy auditing, connecting key stakeholders and optimizing workflows from scheduling to invoicing.",
      image:
        "https://a.storyblok.com/f/219851/2000x1333/d8a21f07f0/consulting-app.webp",
      alt: "Consulting App",
    },
  ];

  return (
    <div className="bg-sectionBG section-padding">
      <div className="container mx-auto max-w-[1280px] reveal">
        <BelievingText />
        <div className="w-full xl:w-[90%] mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 pt-4">
          {portfolioDynamicItems?.length &&
            portfolioDynamicItems?.map(
              ({ title, link, description, image }, index) => {
                return (
                  <div
                    className="min-w-[300px] h-full border border-themeColor shadow-none hover:shadow-lg bg-colorWhite rounded-[25px] w-fit flex flex-col"
                    key={index}
                  >
                    <Link href={`${link}`} prefetch={false}>
                      <Image
                        className="rounded-[25px] lg:max-h-[370px]"
                        src={image}
                        alt={`casestudy-${index}`}
                        width="302"
                        height="240"
                        sizes="(min-width: 1040px) 42.35vw, (min-width: 640px) 60.84vw, calc(100vw - 30px)"
                      />
                      <div className="flex flex-col justify-between flex-1 p-4 items-start">
                        <div className="w-full flex items-center justify-between">
                          <div className="text-2xl font-bold text-themeColor mb-1">
                            {title}
                          </div>
                        </div>
                        <p className="text-colorGray text-base">
                          {description?.split(" ")?.length > 31
                            ? description?.split(" ")?.slice(0, 25)?.join(" ") +
                              "..."
                            : description}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              }
            )}
        </div>
        <div>
          <LinkWithArrow
            href="/portfolio/"
            label=" View all works"
            className="justify-start mobile:justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default SeeingBelieving;
