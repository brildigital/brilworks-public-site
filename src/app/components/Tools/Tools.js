"use client";
import React, { useState, useEffect } from "react";
import Heading from "../HTMLComponents/Heading";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { usePostHog } from "posthog-js/react";
import Cookies from "js-cookie";

const toolsData = [
  {
    title: "Software Development Cost Calculator",
    description:
      "Estimate software project costs fast. Select platform, complexity, and features to get accurate budget and timeline insights.",

    bg: "bg-blue-200",
    link: "/tools/app-development-cost-calculator/",
    tags: ["DEVELOPMENT", "SALES"],
  },
  {
    title: "ROI Calculator",
    description:
      "Quickly measure profitability by calculating return on investment. Enter costs and gains to evaluate business success instantly.",

    bg: "bg-indigo-200",
    link: "/tools/roi-calculator/",
    tags: ["MARKETING", "SALES", "OTHER"],
  },
  {
    title: "Build Uber-Like App: Get Your Cost Estimate",
    description:
      "Estimate the cost of building mobility and transport apps in minutes. Select features, platforms, and design options to get accurate budget and timeline insights.",

    bg: "bg-purple-200",
    link: "/tools/mobility-app-development-calculator/",
    tags: ["DEVELOPMENT", "BUSINESS", "MARKETING"],
  },
  {
    title: "Saas Development Cost Calculator",
    description:
      "Estimate the cost of building your SaaS platform in minutes. Choose features, complexity, and design to get accurate budget insights.",

    bg: "bg-teal-200",
    link: "/tools/saas-development-cost-calculator/",
    tags: ["DEVELOPMENT", "SEO", "OTHER"],
  },
  {
    title: "MVP Development Cost Calculator",
    description:
      "Quickly calculate how much it costs to launch your MVP. Ideal for startups validating ideas with limited budgets.",

    bg: "bg-rose-200",
    link: "/tools/mvp-development-cost-calculator/",
    tags: ["BUSINESS", "DEVELOPMENT", "OTHER"],
  },
  {
    title: "App Maintenance & Update Estimator",
    description:
      "Calculate ongoing app upkeep and update costs to plan your budget effectively.",

    bg: "bg-orange-200",
    link: "/tools/app-maintenance-cost-estimator/",
    tags: ["DEVELOPMENT", "OTHER"],
  },
  {
    title: "App Development Timeline Calculator",
    description:
      "Get accurate time estimates for building your app based on features, complexity, and team size.",
    bg: "bg-green-200",
    link: "/tools/app-development-timeline-calculator/",
    tags: ["DEVELOPMENT", "MARKETING", "OTHER"],
  },
  {
    title: "MVP Launch Timeline Estimator",
    description:
      "Quickly predict how many weeks your MVP will take to design, develop, and launch. Perfect for founders planning budgets, milestones, and product roadmaps.",
    bg: "bg-yellow-200",
    link: "/tools/mvp-launch-timeline-estimator/",
    tags: ["SALES", "OTHER"],
  },
  {
    title: "Feature Complexity vs Time Estimator",
    description:
      "Visualize how feature complexity impacts development time. Use our estimator to plan realistic timelines, manage resources effectively, and set accurate delivery expectations for your software projects.",
    bg: "bg-pink-200",
    link: "/tools/feature-complexity-vs-time-estimator/",
    tags: ["SALES", "BUSINESS", "OTHER"],
  },
  {
    title: "Testing & QA Timeline Calculator",
    description:
      "Easily forecast testing and QA durations based on project scope. Streamline test planning, optimize resources, and deliver reliable, high-quality software with accurate timeline estimates.",
    bg: "bg-lime-200",
    link: "/tools/testing-qa-timeline-estimator/",
    tags: ["SALES", "BUSINESS", "OTHER"],
  },
  {
    title: "Go-to-Market Timeline Planner",
    description:
      "Create a clear launch roadmap. Estimate key milestones, coordinate teams, and stay on track for a successful product release.",
    bg: "bg-cyan-100",
    link: "/tools/go-to-market-timeline-planner/",
    tags: ["MARKETING", "BUSINESS", "OTHER"],
  },
  {
    title: "Tech Stack Recommender",
    description:
      "Find the best technologies for your app. Get smart, data-driven stack suggestions to match your goals, budget, and scalability needs.",
    bg: "bg-violet-200",
    link: "/tools/tech-stack-recommender/",
    tags: ["DEVELOPMENT", "BUSINESS", "OTHER"],
  },
  {
    title: "Database Selector Tool",
    description:
      "Quickly identify the best database for your app. Compare features, scalability, and cost to make confident, data-driven technology choices.",
    bg: "bg-fuchsia-200",
    link: "/tools/database-selector-tool/",
    tags: ["DEVELOPMENT", "OTHER"],
  },
  {
    title: "Cross Platform vs Native Analyzer",
    description:
      "Evaluate the pros and cons of cross-platform and native development. Get clear insights to select the right approach for your app’s budget and goals.",
    bg: "bg-slate-200",
    link: "/tools/cross-platform-vs-native-analyzer/",
    tags: ["MARKETING", "BUSINESS", "OTHER"],
  },
  {
    title: "API Integration Feasibility Checker",
    description:
      "Analyze API compatibility and integration complexity. Get instant insights to plan secure, cost-effective, and successful third-party API connections for your application.",
    bg: "bg-amber-200",
    link: "/tools/api-integration-feasibility-checker/",
    tags: ["DEVELOPMENT", "BUSINESS", "OTHER"],
  },
  {
    title: "Cloud Service Cost Estimator",
    description:
      "Quickly calculate and compare cloud service expenses. Get accurate cost forecasts to plan budgets and optimize your infrastructure across leading cloud providers.",
    bg: "bg-neutral-200",
    link: "/tools/cloud-service-cost-estimator/",
    tags: ["DEVELOPMENT", "MARKETING", "OTHER"],
  },
  {
    title: "SaaS Profitability Calculator",
    description:
      "Quickly analyze revenue, costs, and margins to measure SaaS profitability. Plan budgets and forecast growth with clear, data-driven financial insights.",
    bg: "bg-blue-200",
    link: "/tools/saas-profitability-calculator/",
    tags: ["SALES", "BUSINESS", "OTHER"],
  },
  {
    title: "Customer Acquisition Cost (CAC) Estimator",
    description:
      "Estimate the true cost of acquiring each customer. Analyze marketing spend, conversion rates, and ROI to optimize campaigns and boost profitability.",
    bg: "bg-purple-200",
    link: "/tools/customer-acquisition-cost-estimator/",
    tags: ["SALES", "BUSINESS", "OTHER"],
  },
  {
    title: "Lifetime Value (LTV) Calculator",
    description:
      "Estimate the long-term revenue each customer brings to your business. Calculate retention impact, predict profitability, and make data-driven decisions to improve marketing strategies and boost overall customer lifetime value.",
    bg: "bg-teal-200",
    link: "/tools/lifetime-value-calculator/",
    tags: ["BUSINESS", "MARKETING", "OTHER"],
  },
  {
    title: "Automation Savings Estimator",
    description:
      "Discover potential cost and time savings through automation. Enter your current process details to instantly see how automation can reduce expenses, increase productivity, and improve ROI for your business.",
    bg: "bg-yellow-200",
    link: "/tools/automation-saving-estimator/",
    tags: ["BUSINESS", "MARKETING", "OTHER"],
  },
  {
    title: "MVP Feature Selector Quiz",
    description:
      "Find the essential features for your MVP. Take a quick quiz to prioritize must-have functionalities and launch smarter with reduced cost and risk.",
    bg: "bg-sky-200",
    link: "/tools/mvp-feature-selector-quiz/",
    tags: ["BUSINESS", "SALES", "OTHER"],
  },
  {
    title: "Find the Perfect App for Your Business",
    description:
      "Not sure what to build next? Take a quick assessment to uncover the ideal app type, features, and tech stack that align with your goals and audience.",
    bg: "bg-violet-200",
    link: "/tools/which-app-should-you-build/",
    tags: ["BUSINESS", "DEVELOPMENT", "OTHER"],
  },
  {
    title: "Is Your Startup Tech-Ready?",
    description:
      "Take this 2-minute quiz to evaluate your startup’s technical readiness and get personalized insights to move from idea to launch confidently.",
    bg: "bg-lime-200",
    link: "/tools/tech-readiness-assessment-tool/",
    tags: ["BUSINESS", "DEVELOPMENT", "OTHER"],
  },
  {
    title: "Digital Transformation Readiness Checker",
    description:
      "Take this quick readiness check to assess your organization’s digital maturity and uncover the next steps to drive successful transformation.",
    bg: "bg-rose-200",
    link: "/tools/digital-transformation-readiness-checker/",
    tags: ["BUSINESS", "DEVELOPMENT", "OTHER"],
  },
  {
    title: "Build Your SaaS Business Model Instantly",
    description:
      "Turn your SaaS idea into a clear, structured business model with pricing, positioning, and revenue strategy — all generated in seconds.",
    bg: "bg-cyan-100",
    link: "/tools/build-your-saas-business-model/",
    tags: ["BUSINESS", "DEVELOPMENT", "OTHER"],
  },
  {
    title: "Code Quality Analyzer (Lite)",
    description:
      "Quickly scan your code for issues, style inconsistencies, and optimization opportunities — no setup required.",
    bg: "bg-orange-200",
    link: "/tools/code-quality-analyzer/",
    tags: ["BUSINESS", "DEVELOPMENT", "OTHER"],
  },
  {
    title: "SaaS Scalability Readiness Checker",
    description:
      "Assess your app’s scalability across tech stack, performance, and architecture — and uncover what’s holding back your growth.",
    bg: "bg-fuchsia-200",
    link: "/tools/saas-scalability-readiness-checker/",
    tags: ["BUSINESS", "DEVELOPMENT", "OTHER"],
  },
  {
    title: "Legacy System Modernization Readiness Tool",
    description:
      "Find out how prepared your business is to upgrade outdated systems and embrace modern, scalable technologies.",
    bg: "bg-slate-200",
    link: "/tools/legacy-system-modernization-readiness/",
    tags: ["BUSINESS", "DEVELOPMENT", "OTHER"],
  },
  {
    title: "App Security Checklist Generator",
    description:
      "Instantly generate a tailored checklist to keep your app secure, compliant, and resilient against threats.",
    bg: "bg-indigo-200",
    link: "/tools/app-security-checklist-generator/",
    tags: ["BUSINESS", "DEVELOPMENT", "OTHER"],
  },
  {
    title: "Performance Benchmarking Tool",
    description:
      "Test, compare, and optimize your app’s performance to ensure smooth, fast, and reliable user experiences.",
    bg: "bg-green-200",
    link: "/tools/performance-benchmarking-tool/",
    tags: ["BUSINESS", "DEVELOPMENT", "OTHER"],
  },
  {
    title: "Scope of Work (SOW) Generator",
    description:
      "Generate precise, client-ready Scopes of Work with AI. Clearly outline goals, deliverables, and timelines for every project—instantly and professionally.",
    bg: "bg-pink-200",
    link: "/tools/scope-of-work-generator/",
    tags: ["BUSINESS", "SALES", "OTHER"],
  },
  {
    title: "Software Proposal Generator",
    description:
      "Craft polished software proposals in minutes. Impress clients with clear deliverables, timelines, and pricing using AI-generated proposal templates.",
    bg: "bg-amber-200",
    link: "/tools/software-proposal-generator/",
    tags: ["BUSINESS", "SALES", "OTHER"],
  },
  {
    title: "App Development Cost Breakdown Calculator",
    description:
      "Get a detailed breakdown of your app development cost based on features and complexity.",
    bg: "bg-blue-200",
    link: "/tools/app-development-cost-breakdown-calculator/",
    tags: ["BUSINESS", "DEVELOPMENT", "OTHER"],
  },
];

const Tools = () => {
  const [activeTag, setActiveTag] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const categories = [
    "MARKETING",
    "CONTENT",
    "DEVELOPMENT",
    "SALES",
    "SEO",
    "BUSINESS",
    "ENTERTAINMENT",
    "OTHER",
  ];

  const posthog = usePostHog();

  useEffect(() => {
    if (posthog) {
      posthog.capture("tools_page", {
        page: "tools",
        city: JSON.parse(Cookies.get("user-data"))?.city,
        region: JSON.parse(Cookies.get("user-data"))?.region,
        country: JSON.parse(Cookies.get("user-data"))?.country,
      });
    }
  }, [posthog]);

  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // const filteredTools =
  //   activeTag === "" // when ALL is selected
  //     ? toolsData
  //     : toolsData.filter((tool) => tool.tags.includes(activeTag));

  const filteredTools = toolsData.filter((tool) => {
    const matchesTag = activeTag === "" || tool.tags.includes(activeTag);
    const matchesSearch = tool.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <>
      <div className="hire-team-section-l !scroll-[unset]">
        <div className="banner-layer h-full min-h-[400px] md:max-h-[500px] max-h-full">
          <div className="container max-w-[1280px] main-section-padding !pt-24 mx-auto">
            <div className="flex flex-col items-start justify-center h-full min-h-[400px] md:max-h-[700px] max-h-full">
              <Heading
                type="h1"
                className="text-white"
                text="Free tools to run your business"
              />
              <p className="text-white lg:text-2xl md:text-xl text-lg !mt-5">
                Explore our collection of free calculators and tools designed to
                simplify complex tasks.
                <br className="hidden md:block" /> From business valuations to
                engineering formulas, get accurate results in seconds and make{" "}
                <br className="hidden md:block" />
                smarter decisions with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-[1280px] main-section-padding xl:py-[60px] md:py-10 py-5 mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-5 md:mb-8 mb-5">
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-4 !py-1.5 !rounded-md cursor-pointer border border-themeColor ${
                activeTag === ""
                  ? "bg-themeColor text-white"
                  : "hover:!text-white hover:!bg-themeColor"
              }`}
              onClick={() => setActiveTag("")}
            >
              <p className="text-xs md:text-sm font-medium">ALL</p>
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                className={`transition-all duration-300 lg:!px-3 px-2 !py-1.5 cursor-pointer !rounded-md border border-themeColor ${
                  activeTag === category
                    ? "bg-themeColor text-white "
                    : "hover:!text-white hover:!bg-themeColor"
                }`}
                onClick={() =>
                  setActiveTag(activeTag === category ? "" : category)
                }
              >
                <p className="text-xs md:text-sm font-medium">{category}</p>
              </button>
            ))}
          </div>
          <div className="w-full sxl:!w-1/5">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="relative w-full">
                <input
                  id="user-search"
                  className={`w-full font-medium rounded-md py-2 px-2 text-sm appearance-none border border-gray-300 !pr-10 focus:outline-none`}
                  value={searchTerm}
                  // type="search"
                  placeholder="Search"
                  autoComplete="off"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  disabled={!searchTerm && !toolsData?.length}
                />
                <button
                  type="submit"
                  className="bg-themeColor absolute top-1/2 transform -translate-y-1/2 right-0 p-2 rounded-r-md border-y border-themeColor"
                >
                  <Search className="text-white w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className={`grid ${
            filteredTools.length > 0
              ? "md:grid-cols-3 grid-cols-1"
              : "grid-cols-1"
          } md:gap-8 gap-5`}
        >
          {filteredTools.length > 0 ? (
            filteredTools?.map((tool, index) => (
              <Link
                href={tool?.link}
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
              >
                {/* Top Image Section */}
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

                {/* Bottom Text Section */}
                <div className="p-4 md:p-6 flex flex-col flex-1">
                  <h3 className="font-semibold text-lg md:text-xl mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-[15px] flex-1">
                    {tool.description}
                  </p>
                  {tool.tags && (
                    <div className="mt-3">
                      {tool.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-block bg-gray-200 text-gray-800 text-xs font-medium mr-2 px-2.5 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline">
                    Use Tool Now &nbsp; <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center text-gray-500 text-xl font-medium py-10">
              No data found
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tools;
