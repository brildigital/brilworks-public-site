"use client";
import React from "react";
import Heading from "../HTMLComponents/Heading";
import Link from "next/link";
import { CircleArrowLeft } from "lucide-react";

const tools = [
  {
    title: "AI Dashboard",
    description:
      "Visualize data and insights with an AI-powered dashboard. Get real-time analytics, trends, and reports in a simple, interactive view.",
    image: "/images/v2/ai-powered-dashboard-banner.webp",
    link: "https://nlp-sql-frontend-six.vercel.app/dashboard",
    bg: "bg-[#6366F1] text-white",
  },
  {
    title: "AI Resume Match",
    description:
      "Match resumes with job descriptions instantly using AI. Improve hiring efficiency with automated candidate-job fit analysis.",
    image: "/images/v2/ai-resume-match.webp",
    link: "https://jobai.brilworks.com/",
    bg: "bg-[#D946EF] text-white",
  },
];

const AIInsightsAndAutomation = () => {
  return (
    <>
      <div className="hire-team-section-l !scroll-[unset]">
        <div className="banner-layer h-full min-h-[600px] md:max-h-[600px] max-h-full">
          <div className="container max-w-[1280px] main-section-padding !pt-24 mx-auto">
            <div className="flex flex-col items-start justify-center h-full min-h-[500px] md:max-h-[700px] max-h-full">
              <Heading
                type="h1"
                className="text-white"
                text={"AI Insights and Automation"}
              />
              <p className="text-white lg:text-2xl md:text-xl text-lg !mt-5">
                Unlock the power of AI to automate repetitive tasks and gain
                real-time insights.
                <br className="hidden md:block" />
                From predictive analytics to workflow automation, explore how AI
                can drive efficiency, <br className="hidden md:block" />{" "}
                innovation, and growth for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-[1280px] main-section-padding-bottom mx-auto">
        <div className="mb-4">
          <Link
            href="/ai-tools/"
            className="flex gap-2 bg-white hover:bg-themeLight w-fit p-2 rounded-md"
          >
            <CircleArrowLeft /> Back
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.link || "#"}
              target="_blank"
              className="cursor-pointer rounded-xl shadow-md hover:shadow-xl transition-shadow bg-white overflow-hidden group"
            >
              <img
                src={tool.image}
                alt={tool.title}
                className="w-full h-[240px] object-cover  transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
              {/* <img
                src={tool.image}
                alt={tool.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
              /> */}

              {/*  <div
                className={`${tool.bg} flex items-center justify-center p-6`}
              >
                <div className="w-72 h-40 flex items-center justify-center">
                   <Image
                    src={tool.image}
                    alt={tool.title}
                    fill
                    className="object-contain"
                  /> 
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center ">
                    {tool?.title}
                  </p>
                </div>
              </div>*/}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {tool.title}
                </h3>
                <p className="text-base text-gray-600">{tool.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AIInsightsAndAutomation;
