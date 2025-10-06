"use client";
import React, { useState, useEffect } from "react";
import Heading from "../HTMLComponents/Heading";
import Link from "next/link";

const tools = [
  {
    title: "AI Insights & Automation",
    description:
      "Automate workflows with n8n and AI. Connect apps, streamline processes, and reduce manual work with smart, customizable automation.",
    image: "/images/v2/n8n-ai.webp",
    link: "/ai-tools/ai-insights-and-automation",
    bg: "bg-[#EA4B71] text-white",
  },
  {
    title: "AI Chatbot & Conversational Solution",
    description:
      "Engage customers with intelligent AI-powered chatbots. Deliver human-like conversations for support, sales, and onboarding—available 24/7.",
    image: "/images/ai-bot.png",
    link: "/ai-tools/ai-chatbot-conversational-solution",
    bg: "bg-themeColor text-white",
  },
  {
    title: "Pre-Build Solutions",
    description:
      "Access ready-to-deploy AI solutions built for speed and efficiency. Save time with pre-configured tools for business, marketing, and productivity.",
    image: "/images/prebuild-solutions.png",
    link: "/ai-tools/pre-build-solutions",
    bg: "bg-green-600 text-white",
  },
  {
    title: "AWS Partner Solution",
    description:
      "Leverage our expertise as an official AWS Partner. Scale applications, optimize cloud infrastructure, and integrate AI solutions with enterprise-grade reliability.",
    image: "/images/aws-partner.png",
    link: "/ai-tools/aws-partner-solution",
    bg: "bg-[#ff9900] text-white",
  },
  {
    title: "MVP in 48 Hours",
    description:
      "Validate your startup idea fast. Get a working Minimum Viable Product in just 48 hours, powered by AI and rapid prototyping.",
    image: "/images/mvp.png",
    link: "/mvp-in-48-hours/",
    bg: "bg-navyBlue text-white",
  },
  {
    title: "Free Mockups",
    description:
      "Access free, high-quality design mockups to showcase your brand, apps, or websites. Download and use instantly for presentations and pitches.",
    image: "/images/mockups.png",
    link: "/free-mockups/",
    bg: "bg-themeSecondary text-white",
  },
];

const AITools = () => {
  return (
    <>
      <div className="hire-team-section-l !scroll-[unset]">
        <div className="banner-layer h-full min-h-[600px] md:max-h-[700px] max-h-full">
          <div className="container max-w-[1280px] main-section-padding !pt-24 mx-auto">
            <div className="flex flex-col items-start justify-center h-full min-h-[500px] md:max-h-[700px] max-h-full">
              <Heading
                type="h1"
                className="text-white"
                text={
                  <>
                    AI Tools to Boost Productivity,
                    <br className="md:block hidden" /> Creativity & Business
                    Growth
                  </>
                }
              />
              <p className="text-white lg:text-2xl md:text-xl text-lg !mt-5">
                Discover a curated list of powerful AI tools for marketing,
                automation, content creation, and business.
                <br className="hidden md:block" />
                Compare features, explore use cases, and find the right tool to
                save time and scale smarter.
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
              href={tool.link}
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

export default AITools;
