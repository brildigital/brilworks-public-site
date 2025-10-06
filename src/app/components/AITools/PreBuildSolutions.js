"use client";
import React, { useState, useEffect } from "react";
import Heading from "../HTMLComponents/Heading";
import Link from "next/link";

const tools = [
  {
    title: "AI Dashboard",
    description:
      "Visualize data and insights with an AI-powered dashboard. Get real-time analytics, trends, and reports in a simple, interactive view.",
    image: "/images/v2/ai-dashboard.webp",
    // link: "/ai-tools/ai-dashboard",
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

const PreBuildSolutions = () => {
  return (
    <>
      <div className="hire-team-section-l !scroll-[unset]">
        <div className="banner-layer h-full min-h-[600px] md:max-h-[700px] max-h-full">
          <div className="container max-w-[1280px] main-section-padding !pt-24 mx-auto">
            <div className="flex flex-col items-start justify-center h-full min-h-[500px] md:max-h-[700px] max-h-full">
              <Heading
                type="h1"
                className="text-white"
                text={"Pre-Build AI & Automation Solutions"}
              />
              <p className="text-white lg:text-2xl md:text-xl text-lg !mt-5">
                Speed up your digital transformation with pre-build solutions.
                Our ready-to-use AI and
                <br className="hidden md:block" />
                automation tools help you launch faster, reduce development
                time, and focus on scaling your business.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-[1280px] main-section-padding xl:py-[60px] md:py-10 py-5 mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.link || "#"}
              target="_blank"
              className="cursor-pointer rounded-xl shadow-md hover:shadow-xl transition-shadow bg-white overflow-hidden group"
            >
              {/* <img
                src={tool.image}
                alt={tool.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
              /> */}

              <div
                className={`${tool.bg} flex items-center justify-center p-6`}
              >
                <div className="w-72 h-40 flex items-center justify-center">
                  {/* <Image
                    src={tool.image}
                    alt={tool.title}
                    fill
                    className="object-contain"
                  /> */}
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center ">
                    {tool?.title}
                  </p>
                </div>
              </div>
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

export default PreBuildSolutions;
