"use client";
import React from "react";
import Image from "next/image";
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
      <section className="portfolio-hero" aria-labelledby="hero-heading">
        <div className="portfolio-hero-bg"></div>
        <div className="portfolio-hero-grid"></div>
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] grid-cols-1 gap-10 lg:gap-[60px] items-center pt-[140px] pb-20">
            <div>
              <nav
                className="text-[13px] text-white/70 !mb-5"
                aria-label="Breadcrumb"
              >
                <Link
                  href="/"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Home
                </Link>
                {" / "}
                <Link
                  href="/ai-tools/"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  AI Tools
                </Link>
                {" / "}
                <span>AI Insights and Automation</span>
              </nav>
              <span className="inline-flex items-center gap-2 bg-[rgba(26,92,204,0.15)] border border-[rgba(26,92,204,0.3)] rounded-full px-[14px] py-[6px] text-[#00b4d8] text-xs font-semibold tracking-[0.1em] mb-6">
                AI TOOLS
              </span>
              <h1
                id="hero-heading"
                className="font-extrabold tracking-[-1.5px] leading-[1.1] mb-4 bg-gradient-to-r from-white via-white to-[#00ffff] bg-clip-text text-transparent"
                style={{
                  fontSize: "clamp(36px, 3.8vw, 54px)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI Insights and Automation
              </h1>
              <p className="text-[18px] text-white/60 leading-[1.7] max-w-[600px] !mb-10">
                Unlock the power of AI to automate repetitive tasks and gain
                real-time insights. From predictive analytics to workflow
                automation, explore how AI can drive efficiency, innovation, and
                growth for your business.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact-us/"
                  className="c-button c-btn-large bg-[#1A5CCC] text-white hover:bg-[#1450b8] transition-all duration-300 rounded-md px-[30px] py-3 font-medium whitespace-nowrap inline-flex items-center"
                >
                  Get Started
                </Link>
                <Link
                  href="/ai-tools/"
                  className="c-button c-btn-large border border-white/20 text-white bg-transparent hover:bg-white/[0.08] hover:border-white/40 transition-all duration-300 rounded-md px-[30px] py-3 font-medium whitespace-nowrap inline-flex items-center"
                >
                  Explore All AI Tools
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full rounded-2xl overflow-hidden bg-white/[0.05] border border-white/10 backdrop-blur-[10px]">
                <Image
                  src="/images/ai_insights.png"
                  alt="AI Insights and Automation"
                  width={565}
                  height={500}
                  className="rounded-2xl object-cover w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
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
