"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import {
  blogListStaticData,
  hireTeamMenuItems,
  industryMenuItems,
  servicesMenuItems,
} from "../lib/constants";

const Sitemap = () => {
  const industryUseCases = [
    {
      title: "AWS in IoT",
      slug: "/use-case/aws-in-IoT/",
    },
    {
      title: "AWS in E-Commerce",
      slug: "/use-case/aws-in-ecommerce/",
    },
    {
      title: "AWS in Healthcare",
      slug: "/use-case/aws-in-healthcare/",
    },
    {
      title: "Generative AI in Retail",
      slug: "/use-case/generative-ai-in-retail/",
    },
    {
      title: "Generative AI in Finance",
      slug: "/use-case/gen-ai-in-fintech/",
    },
    {
      title: "Generative AI in Healthcare",
      slug: "/use-case/generative-ai-in-healthcare/",
    },
    {
      title: "Generative AI in Manufacturing",
      slug: "/use-case/generative-ai-in-manufacturing/",
    },
    {
      title: "Generative AI in Media & Entertainment",
      slug: "/use-case/generative-ai-in-media-and-entertainment/",
    },
  ];

  const renderTickMarkIcon = () => {
    return (
      <Image
        className="w-[15px]"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cg clip-path='url(%23clip0_30_12)'%3E%3Ccircle cx='10' cy='10' r='10' fill='%23017EEB'/%3E%3Cpath d='M8.08102 13.9311C8.18816 14.0217 8.34951 14.0235 8.45897 13.9333C10.8471 11.9585 13.024 9.88733 15.6214 7.7973C15.8456 7.61698 15.9792 7.36482 15.9978 7.08682C16.0551 6.22275 14.9755 5.65693 14.2418 6.23531C12.0196 7.98443 10.1719 9.57103 8.44857 11.2108C8.1099 10.8884 7.65676 10.4271 7.09779 9.83522C6.66554 9.3777 5.88549 9.2986 5.36077 9.79257C4.89989 10.2261 4.8779 10.9221 5.31028 11.3773C6.35388 12.4751 7.00913 13.0229 8.08102 13.9311Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_30_12'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
        alt="right"
        width="20"
        height="20"
      />
    );
  };

  return (
    <div className="mt-[6rem] md:mt-[9rem] my-[15px] mx-auto md:w-1/2 w-[90%]">
      <div className="flex align-middle justify-center">
        <h1 className="text-[30px] leading-9 font-bold">Site Map</h1>
      </div>
      <div className="py-10">
        <div className="mb-4">
          <h3 className="text-2xl border-b border-b-[#c5ccd0] font-bold pb-2 mb-3">
            ABOUT BRILWORKS
          </h3>
          <div className="grid gap-2 md:grid-cols-3 grid-cols-2">
            <div>
              <li>
                <Link href="/" className="font-medium">
                  Home
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="/contact-us/" className="font-medium">
                  Contact
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="/portfolio/" className="font-medium">
                  Our work
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="/career/" className="font-medium">
                  Career
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="/blog/" className="font-medium">
                  Blog
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="/our-process/" className="font-medium">
                  Our process
                </Link>
              </li>
            </div>

            <div>
              <li>
                <Link href="/about-us/" className="font-medium">
                  About
                </Link>
              </li>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-2xl border-b border-b-[#c5ccd0] font-bold pb-2 mb-3">
            OUR WORK
          </h3>

          <div className="grid-cols-1">
            <div>
              <li>
                <Link
                  href="/portfolio/an-ultimate-recruitment-referral-platform-to-streamline-recruitment-efforts/"
                  className="font-medium"
                >
                  An Ultimate Recruitment Referral Platform to Streamline
                  Recruitment Efforts
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link
                  href="/portfolio/innovative-platform-for-comprehensive-supply-chain-management/"
                  className="font-medium"
                >
                  Innovative Platform for Comprehensive Supply Chain Management
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link
                  href="/portfolio/performance-optimization-of-a-standalone-app-for-a-cultural-institution/"
                  className="font-medium"
                >
                  Performance Optimization of a Standalone App for a Cultural
                  Institution
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link
                  href="/portfolio/a-powerful-inventory-management-app-to-reduce-order-processing-time/"
                  className="font-medium"
                >
                  A Powerful Inventory Management App to Reduce Order Processing
                  Time
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link
                  href="/portfolio/ai-powered-platform-to-simplify-podcast-creation/"
                  className="font-medium"
                >
                  AI-Powered Platform to Simplify Podcast Creation
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link
                  href="/portfolio/ai-driven-stock-prediction-platform-to-provide-traders-with-insights/"
                  className="font-medium"
                >
                  AI-Driven Stock Prediction Platform to Provide Traders with
                  Insights
                </Link>
              </li>
            </div>
          </div>
        </div>

        <div className="mb-4">
          {industryMenuItems
            .filter((data) => data.name === "INDUSTRY")
            .map((mainSection) => (
              <div key={mainSection.name}>
                <h3 className="text-2xl border-b border-b-[#c5ccd0] font-bold pb-2 mb-3">
                  {mainSection.name}
                </h3>
                <div className="grid gap-2 md:grid-cols-3 grid-cols-1">
                  {mainSection.subSections.map((subSection) => (
                    <div key={subSection.name}>
                      <li>
                        <Link href={subSection.path} className="font-medium">
                          {subSection.name}
                        </Link>
                      </li>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          <div className="flex items-center gap-2 w-full mb-2 mt-3">
            {renderTickMarkIcon()}
            <div>
              <h2 className="text-base font-bold">USE CASES</h2>
            </div>
          </div>
          <div className="grid gap-2 grid-cols-1 mb-4 md:grid-cols-2">
            {industryUseCases.map((subSection) => (
              <div key={subSection.title}>
                <li>
                  <Link href={subSection.slug} className="font-medium">
                    {subSection.title}
                  </Link>
                </li>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-2xl border-b border-b-[#c5ccd0] font-bold pb-2 mb-3">
            SERVICES
          </h3>
          {servicesMenuItems.map((mainSection) => (
            <div key={mainSection.name}>
              <div
                className="flex items-center gap-2 w-full my-2"
                key={mainSection.name}
              >
                {renderTickMarkIcon()}
                <div>
                  <h2 className="text-base font-bold">{mainSection.name}</h2>
                </div>
              </div>
              <div
                className={`grid gap-2 md:grid-cols-2 grid-cols-1 mb-4 ${
                  mainSection.name === "PRODUCT ENGINEERING" ||
                  mainSection.name === "LOW-CODE/NO-CODE DEVELOPMENT"
                    ? "md:grid-cols-2"
                    : "md:grid-cols-3"
                }`}
              >
                {mainSection.subSections.map((subSection) => (
                  <div key={subSection.name}>
                    <li>
                      <Link href={subSection.path} className="font-medium">
                        {subSection.name}
                      </Link>
                    </li>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="text-2xl border-b border-b-[#c5ccd0] font-bold pb-2 mb-3">
            HIRE TEAM
          </h3>
          {hireTeamMenuItems.map((mainSection) => (
            <div key={mainSection.name}>
              <div
                className="flex items-center gap-2 w-full my-2"
                key={mainSection.name}
              >
                {renderTickMarkIcon()}
                <div>
                  <h2 className="text-base font-bold">{mainSection.name}</h2>
                </div>
              </div>
              <div className="grid gap-2 md:grid-cols-2 grid-cols-1 mb-4">
                {mainSection.subSections.map((subSection) => (
                  <div key={subSection.name}>
                    <li>
                      <Link href={subSection.path} className="font-medium">
                        {subSection.name}
                      </Link>
                    </li>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="text-2xl border-b border-b-[#c5ccd0] font-bold pb-2 mb-3">
            BLOGS
          </h3>

          <div className="grid gap-[10px] grid-cols-1">
            {blogListStaticData.length ? (
              blogListStaticData.map(({ loc, name }, index) => {
                return (
                  <div key={index}>
                    <li>
                      <Link
                        as={`/blog/${loc?.split("/").filter(Boolean).pop()}/`}
                        href={`/blog/[slug]`}
                        className="font-medium"
                      >
                        {name}
                      </Link>
                    </li>
                  </div>
                );
              })
            ) : (
              <div className="flex align-middle justify-center">
                <FetchDataSpinner />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
