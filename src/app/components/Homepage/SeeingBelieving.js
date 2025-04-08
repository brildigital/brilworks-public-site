"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import StoryblokClient from "storyblok-js-client";
import Heading from "../HTMLComponents/Heading";
import ButtonV2 from "../Common/ButtonV2";

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
        "https://a.storyblok.com/f/219851/565x400/75ad9804cf/building-swiper-based-mobile-app.webp",
      alt: "Social marketplace app",
      industry: "E-commerce",
      technology: ["iOS", "Android", ".Net"],
    },
    {
      title: "Connecting Pet Owners With Trusted Caregivers and Expert Advice",
      link: "/portfolio/pet-finding-app/",
      description:
        "We built a mobile app that helps pet owners find reliable caregivers, consult veterinarians, and connect with a community of pet lovers-all in one place.",
      image:
        "https://a.storyblok.com/f/219851/565x400/d47ae82eac/connecting-pet-owners.webp",
      alt: "Pet finder app",
      industry: "Social",
      technology: ["iOS", "Android", ".Net"],
    },
    {
      title: "Making Early Learning Fun with An Interactive Educational Game",
      link: "/portfolio/educational-game-app/",
      description:
        "We developed a safe, mobile game for kids aged 2-6, using gamified activities to teach alphabets, numbers, colors, and shapes in an engaging way.",
      image:
        "https://a.storyblok.com/f/219851/565x400/a8b82fb2a7/early-learning-app.webp",
      alt: "Educational mobile game",
      industry: "Ed-Tech",
      technology: ["iOS", "Android", ".Net"],
    },
    {
      title: "Streamlining Energy Audits with An All-In-One CRM Solution",
      link: "/portfolio/crm-solution/",
      description:
        "We built a specialized CRM platform that automates energy auditing, connecting key stakeholders and optimizing workflows from scheduling to invoicing.",
      image:
        "https://a.storyblok.com/f/219851/565x400/9918cfc298/crm-based-software.webp",
      alt: "Consulting App",
      industry: "Consulting",
      technology: ["iOS", "Android", ".Net"],
    },
  ];

  return (
    <div className="bg-sectionBG">
      <div className="container mx-auto max-w-[1280px] main-section-padding reveal">
        <div className="flex items-center justify-between">
          <Heading
            type="h2"
            className="lg:!text-[34px] md:!text-3xl !text-2xl"
            text="Because Seeing is Believing"
          />
          <div>
            <Link
              href="/portfolio/"
              className="md:text-xl text-lg font-medium text-themeColor hover:!underline cursor-pointer"
            >
              View All Work
            </Link>
          </div>
        </div>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-10 lg:pt-10 md:pt-8 pt-5">
          {portfolioDynamicItems?.length &&
            portfolioDynamicItems?.map(
              (
                { title, link, description, image, technology, industry },
                index
              ) => {
                return (
                  <div
                    className={`min-w-[300px] overflow-hidden h-full rounded-t-2xl w-fit flex flex-col ${
                      index % 2 ? "md:mt-18 lg:mt-28 mt-0" : ""
                    }`}
                    key={index}
                  >
                    <Link href={`${link}`} prefetch={true}>
                      <div className="relative group">
                        <Image
                          className="rounded-2xl lg:max-h-[400px] transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                          src={image}
                          alt={`casestudy-${index}`}
                          width="302"
                          height="240"
                          sizes="(min-width: 1040px) 42.35vw, (min-width: 640px) 60.84vw, calc(100vw - 30px)"
                        />
                        <Image
                          className="w-[56px] absolute bottom-3 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          src="/images/v2/read-icon.svg"
                          alt="Read Icon"
                          width="56"
                          height="56"
                        />
                      </div>
                      <div className="flex flex-col justify-between flex-1 py-4 items-start">
                        <div className="w-full flex items-center justify-between">
                          <Heading
                            className="md:!text-xl !text-lg font-medium"
                            type="h3"
                            text={title}
                          />
                          <div className="md:text-xl text-lg font-bold text-themeColor"></div>
                        </div>
                        <p className="text-colorGray md:text-lg text-base">
                          {description?.split(" ")?.length > 31
                            ? description?.split(" ")?.slice(0, 25)?.join(" ") +
                              "..."
                            : description}
                        </p>
                      </div>
                    </Link>

                    <div className="flex items-center justify-between">
                      <p className="bg-clip-text text-transparent bg-theme-gradient md:text-xl text-lg font-medium uppercase">
                        {industry}
                      </p>
                      <div className="flex items-center md:gap-2.5 gap-1.5">
                        {technology.map((data) => (
                          <div
                            className="bg-white md:px-4 px-2.5 py-1.5 md:py-[9px] border rounded-md"
                            key={data?.[0]}
                          >
                            {data}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
            )}
        </div>
        <div className="flex justify-center">
          <ButtonV2
            redirect="/portfolio/"
            label="Explore all Case Studies"
            className="hover:text-themeColor w-fit lg:mt-10 mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default SeeingBelieving;
