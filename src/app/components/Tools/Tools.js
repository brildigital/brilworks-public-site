"use client";
import React, { useState, useEffect } from "react";
import Heading from "../HTMLComponents/Heading";
import ButtonV2 from "../Common/ButtonV2";
import Link from "next/link";
import { ArrowRight, Search, CheckCircle, Star } from "lucide-react";
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
    badge: "popular",
  },
  {
    title: "ROI Calculator",
    description:
      "Quickly measure profitability by calculating return on investment. Enter costs and gains to evaluate business success instantly.",
    bg: "bg-indigo-200",
    link: "/tools/roi-calculator/",
    tags: ["MARKETING", "SALES", "OTHER"],
    badge: "popular",
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
    badge: "popular",
  },
  {
    title: "MVP Development Cost Calculator",
    description:
      "Quickly calculate how much it costs to launch your MVP. Ideal for startups validating ideas with limited budgets.",
    bg: "bg-rose-200",
    link: "/tools/mvp-development-cost-calculator/",
    tags: ["BUSINESS", "DEVELOPMENT", "OTHER"],
    badge: "popular",
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
    badge: "new",
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
    badge: "new",
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
      "Evaluate the pros and cons of cross-platform and native development. Get clear insights to select the right approach for your app's budget and goals.",
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
      "Take this 2-minute quiz to evaluate your startup's technical readiness and get personalized insights to move from idea to launch confidently.",
    bg: "bg-lime-200",
    link: "/tools/tech-readiness-assessment-tool/",
    tags: ["BUSINESS", "DEVELOPMENT", "OTHER"],
  },
  {
    title: "Digital Transformation Readiness Checker",
    description:
      "Take this quick readiness check to assess your organization's digital maturity and uncover the next steps to drive successful transformation.",
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
      "Assess your app's scalability across tech stack, performance, and architecture — and uncover what's holding back your growth.",
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
      "Test, compare, and optimize your app's performance to ensure smooth, fast, and reliable user experiences.",
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
  {
    title: "AI App Development Cost Calculator",
    description:
      "Instantly estimate the cost of building your AI-powered mobile or web application.",
    bg: "bg-violet-200",
    link: "/tools/ai-app-development-cost-calculator/",
    tags: ["SALES", "DEVELOPMENT", "OTHER"],
    badge: "new",
  },
  {
    title: "SaaS Pricing Model Calculator",
    description:
      "Estimate SaaS revenue based on pricing tiers and user growth.",
    bg: "bg-teal-200",
    link: "/tools/saas-pricing-model-calculator/",
    tags: ["SALES", "DEVELOPMENT", "OTHER"],
  },
  {
    title: "Build vs Buy Software Calculator",
    description:
      "Compare custom software development and SaaS costs instantly.",
    bg: "bg-orange-200",
    link: "/tools/build-vs-buy-software-calculator/",
    tags: ["BUSINESS", "DEVELOPMENT", "OTHER"],
  },
  {
    title: "SaaS Metrics Calculator",
    description:
      "Measure revenue performance and customer acquisition efficiency.",
    bg: "bg-lime-200",
    link: "/tools/saas-metrics-calculator/",
    tags: ["BUSINESS", "DEVELOPMENT", "OTHER"],
  },
  {
    title: "App Rebuild vs Refactor Calculator",
    description:
      "Analyze cost, complexity, and long-term scalability to decide whether rebuilding your app or refactoring your existing codebase is the smarter investment.",
    bg: "bg-rose-200",
    link: "/tools/app-rebuild-vs-refactor-calculator/",
    tags: ["BUSINESS", "DEVELOPMENT", "OTHER"],
  },
  {
    title: "Mobile App Monetization Strategy Selector",
    description:
      "Identify the ideal revenue model for your app. Compare subscriptions, ads, freemium, and hybrid models to maximize profitability.",
    bg: "bg-slate-200",
    link: "/tools/mobile-app-monetization-strategy-selector/",
    tags: ["BUSINESS", "DEVELOPMENT", "OTHER"],
  },
  {
    title: "Outsourcing Readiness Checker",
    description:
      "Take this quick assessment to discover whether your business is prepared for outsourcing. Get actionable insights in minutes.",
    bg: "bg-cyan-100",
    link: "/tools/outsourcing-readiness-checker/",
    tags: ["BUSINESS", "SALES", "OTHER"],
  },
];

const INITIAL_VISIBLE_COUNT = 12;

const featuredToolSlugs = [
  "/tools/app-development-cost-calculator/",
  "/tools/roi-calculator/",
  "/tools/mvp-development-cost-calculator/",
];

const featuredBadges = ["Most Used", "Top Rated", "Startup Favorite"];
const featuredIconBgs = ["bg-blue-100", "bg-violet-100", "bg-green-100"];

const categories = [
  "MARKETING",
  "DEVELOPMENT",
  "SALES",
  "SEO",
  "BUSINESS",
  "OTHER",
];

const testimonials = [
  {
    quote:
      "The cost calculator helped us nail our investor pitch. We had exact budget numbers instead of guesses.",
    author: "Sarah M.",
    role: "Startup Founder, FinTech",
  },
  {
    quote:
      "We used the MVP calculator and timeline estimator to plan our product roadmap. Saved us weeks of back-and-forth with vendors.",
    author: "James R.",
    role: "CTO, HealthTech Startup",
  },
  {
    quote:
      "The ROI calculator is a must-have. Simple, fast, and accurate. I use it before every campaign to justify budget allocation.",
    author: "Priya K.",
    role: "Marketing Director, B2B SaaS",
  },
];

const stats = [
  { value: "12,000+", label: "Estimates Generated" },
  { value: "500+", label: "Startups Using Tools" },
  { value: "40+", label: "Free Calculators" },
  { value: "40+", label: "Countries Reached" },
];

const Tools = () => {
  const [activeTag, setActiveTag] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const posthog = usePostHog();

  useEffect(() => {
    if (posthog) {
      const rawUserData = Cookies.get("user-data");
      const userData = rawUserData ? JSON.parse(rawUserData) : {};
      posthog.capture("tools_page", {
        page: "tools",
        city: userData?.city,
        region: userData?.region,
        country: userData?.country,
      });
    }
  }, [posthog]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const filteredTools = toolsData.filter((tool) => {
    const matchesTag = activeTag === "" || tool.tags.includes(activeTag);
    const matchesSearch = tool.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const isFiltering = activeTag !== "" || debouncedSearch !== "";
  const visibleTools = isFiltering || showAll
    ? filteredTools
    : filteredTools.slice(0, INITIAL_VISIBLE_COUNT);
  const hasMore = !isFiltering && filteredTools.length > INITIAL_VISIBLE_COUNT && !showAll;

  const featuredTools = toolsData.filter((t) =>
    featuredToolSlugs.includes(t.link)
  );

  return (
    <>
      {/* ═══ HERO SECTION ═══ */}
      <section className="bg-navyBlue relative overflow-hidden">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial gradients */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(26,92,204,0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(0,180,216,0.08) 0%, transparent 60%)",
          }}
        />

        <div className="container max-w-[1280px] mx-auto md:px-10 px-5 relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 bg-[rgba(26,92,204,0.15)] border border-[rgba(26,92,204,0.3)] rounded-full px-3.5 py-1.5 text-[#00b4d8] text-xs font-semibold tracking-widest uppercase mb-7">
            <Star className="w-3.5 h-3.5" />
            40+ FREE TOOLS &mdash; NO SIGNUP REQUIRED
          </span>

          {/* H1 */}
          <Heading
            type="h1"
            className="text-white !font-extrabold max-w-[720px]"
            text="Free Calculators Built for Software Teams & Startups"
          />

          {/* Subtitle */}
          <p className="text-gray-400 lg:text-lg md:text-base text-base !mt-6 max-w-[600px] leading-relaxed">
            Estimate app development costs, plan your MVP budget, calculate SaaS
            metrics, and make confident tech decisions &mdash; all in seconds,
            with zero friction.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-8">
            <ButtonV2
              redirect="/contact-us/"
              label="Get a Free Project Estimate"
              className="hover:!text-colorWhite"
              icon={<ArrowRight className="w-4 h-4" />}
            />
            <a
              href="#all-tools"
              className="c-button c-btn-medium outline-none overflow-hidden whitespace-nowrap transition-all duration-300 border border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("all-tools")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Browse All Tools
            </a>
          </div>

          {/* Trust Strip */}
          <div className="flex flex-wrap gap-5 mt-10 pt-6 border-t border-white/10">
            {[
              "No account required",
              "100% free, forever",
              "Instant results",
              "Built by Brilworks \u2014 10+ years in software",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-white/50 text-sm font-medium"
              >
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10 mt-10">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/[0.03] p-5 text-center"
              >
                <div className="text-2xl md:text-[28px] font-extrabold bg-gradient-to-r from-themeColor to-accent bg-clip-text text-transparent pb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BREADCRUMB ═══ */}
      <div className="bg-white">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5 py-3">
          <nav className="text-sm text-gray-400" aria-label="Breadcrumb">
            <Link href="/" className="text-themeColor hover:underline">
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <span className="text-gray-600 font-medium">Tools</span>
          </nav>
        </div>
      </div>

      {/* ═══ FEATURED TOOLS ═══ */}
      <section className="bg-white pt-10 pb-0">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-themeColor block mb-4">
            Most Popular Tools
          </span>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {featuredTools.map((tool, index) => (
              <Link
                href={tool.link}
                key={tool.link}
                className="border-2 border-themeColor rounded-2xl p-7 bg-[#f2f9fe] hover:bg-[#e8f0fd] transition-all duration-300 hover:-translate-y-1 flex flex-col relative overflow-hidden"
              >
                <span className="absolute top-3.5 right-3.5 bg-gradient-to-r from-themeColor to-accent text-white text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full">
                  {featuredBadges[index]}
                </span>
                <div
                  className={`w-16 h-16 rounded-[14px] ${featuredIconBgs[index]} flex items-center justify-center mb-3`}
                >
                  <Star className="w-7 h-7 text-themeColor" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                  {tool.title}
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed flex-1">
                  {tool.description}
                </p>
                <span className="mt-4 text-themeColor font-semibold text-sm inline-flex items-center gap-1.5">
                  Use Tool Now <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ALL TOOLS ═══ */}
      <section
        id="all-tools"
        className="bg-white pt-12 pb-16 md:pb-24"
      >
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          {/* Section Header */}
          <Heading
            type="h2"
            className="!font-extrabold text-gray-900 mb-3"
            text="All Tools & Calculators"
          />
          <p className="text-[17px] text-gray-500 mb-8 max-w-[560px]">
            Browse by category or search to find the right calculator for your
            project.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between gap-5 md:mb-8 mb-5">
            <div className="flex gap-2 overflow-x-auto md:flex-wrap pb-1 md:pb-0 no-scrollbar">
              <button
                className={`px-4 !py-1.5 !rounded-md cursor-pointer border border-themeColor flex-shrink-0 transition-all duration-300 ${
                  activeTag === ""
                    ? "bg-themeColor text-white"
                    : "hover:!text-white hover:!bg-themeColor"
                }`}
                onClick={() => setActiveTag("")}
              >
                <p className="text-xs md:text-sm font-semibold">ALL</p>
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`transition-all duration-300 lg:!px-3 px-2 !py-1.5 cursor-pointer !rounded-md border border-themeColor flex-shrink-0 ${
                    activeTag === category
                      ? "bg-themeColor text-white"
                      : "hover:!text-white hover:!bg-themeColor"
                  }`}
                  onClick={() =>
                    setActiveTag(activeTag === category ? "" : category)
                  }
                >
                  <p className="text-xs md:text-sm font-semibold">{category}</p>
                </button>
              ))}
            </div>
            <div className="w-full sxl:!w-1/5">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="relative w-full">
                  <input
                    id="user-search"
                    className="w-full font-medium rounded-md py-2 px-2 text-sm appearance-none border border-gray-300 !pr-10 focus:outline-none focus:border-themeColor"
                    value={searchTerm}
                    placeholder="Search tools..."
                    autoComplete="off"
                    onChange={(e) => setSearchTerm(e.target.value)}
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

          {/* Tools Grid */}
          <div
            className={`grid ${
              visibleTools.length > 0
                ? "md:grid-cols-3 grid-cols-1"
                : "grid-cols-1"
            } md:gap-5 gap-5`}
          >
            {visibleTools.length > 0 ? (
              visibleTools.map((tool) => (
                <Link
                  href={tool.link}
                  key={tool.link}
                  className="bg-white rounded-2xl border border-gray-200 hover:border-themeColor transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
                >
                  {/* Top Section */}
                  <div
                    className={`${tool.bg} flex items-center justify-center p-6 relative min-h-[160px]`}
                  >
                    {tool.badge === "popular" && (
                      <span className="absolute top-3 right-3 bg-amber-100 text-amber-800 text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full">
                        POPULAR
                      </span>
                    )}
                    {tool.badge === "new" && (
                      <span className="absolute top-3 right-3 bg-green-100 text-green-800 text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full">
                        NEW
                      </span>
                    )}
                    <div className="w-72 h-32 flex items-center justify-center">
                      <p className="text-xl md:text-2xl lg:text-3xl font-extrabold text-center leading-snug">
                        {tool.title}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="p-4 md:p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-900">
                      {tool.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-[15px] flex-1 leading-relaxed">
                      {tool.description}
                    </p>
                    {tool.tags && (
                      <div className="mt-3">
                        {tool.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block bg-gray-100 text-gray-600 text-xs font-medium mr-2 px-2.5 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="text-themeColor font-semibold mt-4 inline-flex items-center gap-1.5 text-sm">
                      Use Tool Now <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center text-gray-400 text-xl font-medium py-10">
                No tools found matching your search.
              </div>
            )}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(true)}
                className="c-button c-btn-medium outline-none overflow-hidden whitespace-nowrap transition-all duration-300 c-btn-secondary mx-auto"
              >
                Show All {filteredTools.length} Tools
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ═══ MID-PAGE CTA ═══ */}
      <section className="bg-navyBlue py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 80% at 50% 50%, rgba(26,92,204,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5 text-center relative z-10">
          <Heading
            type="h2"
            className="text-white !font-extrabold mb-3"
            text="Need Custom Software Development?"
          />
          <p className="text-white/50 text-base mb-8 max-w-[576px] mx-auto">
            Our tools give you estimates &mdash; our team turns them into
            reality. Talk to our experts about your project.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <ButtonV2
              redirect="/contact-us/"
              label="Book Free Consultation"
              className="hover:!text-colorWhite"
            />
            <Link
              href="/portfolio/"
              className="c-button c-btn-medium outline-none overflow-hidden whitespace-nowrap transition-all duration-300 border border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="bg-[#fafafa] py-16">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-themeColor block mb-3">
              WHAT USERS SAY
            </span>
            <Heading
              type="h2"
              className="!font-extrabold text-gray-900"
              text="Trusted by Founders & Product Teams"
            />
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl p-7 bg-white"
              >
                <div className="text-amber-400 text-base mb-3 tracking-wider">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <p className="text-[15px] text-gray-700 leading-relaxed italic mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-900">
                  {t.author}
                </p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="bg-white py-16 md:py-20">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          <div className="bg-[#f2f9fe] border border-gray-200 rounded-2xl py-14 px-6 md:px-12 text-center">
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-themeColor block mb-4">
              READY TO BUILD?
            </span>
            <Heading
              type="h2"
              className="!font-extrabold text-gray-900 mb-3"
              text="Turn Your Estimates Into a Real Product"
            />
            <p className="text-[17px] text-gray-500 mb-7 max-w-[520px] mx-auto">
              You&apos;ve done the research. Now let Brilworks bring your vision
              to life with a dedicated team of engineers, designers, and
              strategists.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <ButtonV2
                redirect="/contact-us/"
                label="Get a Free Project Estimate"
                className="hover:!text-colorWhite"
                icon={<ArrowRight className="w-4 h-4" />}
              />
              <ButtonV2
                redirect="/services/"
                label="Explore Our Services"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tools;
