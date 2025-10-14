"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import StoryblokClient from "storyblok-js-client";
import Heading from "../HTMLComponents/Heading";
import ButtonV2 from "../Common/ButtonV2";
import { usePathname } from "next/navigation";
import { scrollEffect } from "../lib/commonFunction";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

const SeeingBelieving = ({
  title,
  bgClass = "bg-SectionBG",
  caseStudyToShow,
  buttonText = "Explore all Case Studies",
}) => {
  const pathname = usePathname();

  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  // const [caseStudyData, setCaseStudyData] = useState();
  // useEffect(() => {
  //   Storyblok.get("cdn/stories/", {
  //     starts_with: "portfolio/",
  //     per_page: 100,
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
  //       industry: data?.content?.industry,
  //       technology: data?.content?.technology,
  //     };
  //   });

  const portfolioDynamicItems = [
    {
      title: "Building a Swipe-Based Platform Connecting Artists and Buyers",
      link: "/portfolio/art-marketplace-app/",
      description:
        "We created a dynamic platform that allows art lovers to discover new pieces, communicate directly with artists, and complete purchases with ease, fostering a vibrant art community.",
      image:
        "https://d11qzsb0ksp6iz.cloudfront.net/assets/artistryhub-case-study-1759145783966.webp",
      alt: "Social marketplace app",
      industry: "E-commerce",
      technology: ["iOS", "Android", "Flutterflow"],
    },
    {
      title: "Connecting Pet Owners With Trusted Caregivers and Expert Advice",
      link: "/portfolio/pet-finding-app/",
      description:
        "We built a mobile app that helps pet owners find reliable caregivers, consult veterinarians, and connect with a community of pet lovers-all in one place.",
      image:
        "https://d11qzsb0ksp6iz.cloudfront.net/assets/petly-pet-finder-app-1759145787607.webp",
      alt: "Pet finder app",
      industry: "Social",
      technology: ["iOS", "Android", "Flutterflow"],
    },
    {
      title: "Making Early Learning Fun with An Interactive Educational Game",
      link: "/portfolio/educational-game-app/",
      description:
        "We developed a safe, mobile game for kids aged 2-6, using gamified activities to teach alphabets, numbers, colors, and shapes in an engaging way.",
      image:
        "https://d11qzsb0ksp6iz.cloudfront.net/assets/kinderland-case-study-1759145795626.webp",
      alt: "Educational mobile game",
      industry: "Ed-Tech",
      technology: ["iOS", "Android", "C#"],
    },
    {
      title: "Building a Healthcare Mobile App for Improved Patient Outcomes",
      link: "/portfolio/healthcare-mobile-app/",
      description:
        "We built a healthcare mobile app focused on improving patient outcomes with telemedicine, AI-driven health tracking, and real-time doctor-patient communication, making healthcare more accessible and engaging.",
      image:
        "https://d11qzsb0ksp6iz.cloudfront.net/assets/exora-banner-1759756411673.webp",
      alt: "Healthcare App",
      industry: "Healthcare",
      technology: ["React Native"],
    },
    // {
    //   title: "Streamlining Energy Audits with An All-In-One CRM Solution",
    //   link: "/portfolio/crm-solution/",
    //   description:
    //     "We built a specialized CRM platform that automates energy auditing, connecting key stakeholders and optimizing workflows from scheduling to invoicing.",
    //   image:
    //     "https://brilworks-storyblok-assets.s3.eu-central-1.amazonaws.com/assets/9918cfc298_crm-based-software.webp",
    //   alt: "Consulting App",
    //   industry: "Consulting",
    //   technology: ["NextJS", "NodeJS", "MySQL"],
    // },
  ];

  const fintechPortfolio = [
    {
      title:
        "AI-Driven Stock Prediction Platform to Provide Traders with Insights",
      link: "/portfolio/ai-driven-stock-prediction-platform-to-provide-traders-with-insights/",
      description:
        "Developing a mobile app for an ultimate AI stock prediction platform, allowing users to trade based on data-driven insights.",
      image:
        "https://d11qzsb0ksp6iz.cloudfront.net/assets/terrago-1760359156664.webp",
      alt: "Fintech App",
      industry: "Fintech",
      technology: ["React Native", "Java", "MySQL"],
    },
    {
      title:
        "A Powerful Inventory Management App to Reduce Order Processing Time",
      link: "/portfolio/a-powerful-inventory-management-app-to-reduce-order-processing-time/",
      description:
        "Developing a mobile inventory management solution for a leading seat manufacturer.",
      image:
        "https://d11qzsb0ksp6iz.cloudfront.net/assets/inventory-management-1760359134476.webp",
      alt: "E-commerce App",
      industry: "E-Commerce",
      technology: ["ReactJS", "NodeJS", "MongoDB"],
    },
  ];
  const healthcarePortfolio = [
    {
      title: "Building a Healthcare Mobile App for Improved Patient Outcomes",
      link: "/portfolio/healthcare-mobile-app/",
      description:
        "We built a healthcare mobile app focused on improving patient outcomes with telemedicine, AI-driven health tracking, and real-time doctor-patient communication, making healthcare more accessible and engaging.",
      image:
        "https://d11qzsb0ksp6iz.cloudfront.net/assets/exora-banner-1759756411673.webp",
      industry: "Healthcare",
      technology: ["React Native"],
    },
    {
      title: "Revolutionizing Health with a Smart, Data-Driven Fitness App",
      link: "/portfolio/mobile-fitness-app/",
      description:
        "We built a feature-rich fitness app that combines real-time performance tracking, personalized plans, and expert insights to help users achieve their health goals seamlessly.",
      image:
        "https://d11qzsb0ksp6iz.cloudfront.net/assets/fitnest-app-mockup-1759749065112.webp",
      industry: "Healthcare",
      technology: ["iOS", "Android", "React Native"],
    },
  ];

  const caseStudyData =
    pathname === "/industry/fintech-software-development/"
      ? fintechPortfolio
      : pathname === "/industry/healthcare-software-development/"
      ? healthcarePortfolio
      : portfolioDynamicItems;

  return (
    <div className={bgClass}>
      <div className="container mx-auto max-w-[1280px] main-section-padding reveal">
        <div className="flex items-center justify-between">
          <Heading
            type="h2"
            className="lg:!text-[34px] md:!text-3xl !text-2xl"
            text={title || "Because Seeing is Believing"}
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
          {caseStudyData?.length &&
            caseStudyData
              ?.filter(({ link }) => !pathname?.includes(link))
              ?.slice(0, caseStudyToShow)
              ?.map(
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
                              ? description
                                  ?.split(" ")
                                  ?.slice(0, 25)
                                  ?.join(" ") + "..."
                              : description}
                          </p>
                        </div>
                      </Link>

                      <div className="flex md:flex-row flex-col md:items-center justify-between items-start gap-2">
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
            label={buttonText}
            className="hover:text-themeColor w-fit lg:mt-10 mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default SeeingBelieving;
