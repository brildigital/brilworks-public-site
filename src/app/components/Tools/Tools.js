"use client";
import React, { useState, useEffect } from "react";
import Heading from "../HTMLComponents/Heading";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

const toolsData = [
  {
    title: "Software Development Cost Calculator",
    description:
      "Estimate software project costs fast. Select platform, complexity, and features to get accurate budget and timeline insights.",

    bg: "bg-blue-200",
    link: "/tools/project-estimate/",
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
    title: "Mobility App Development Cost Calculator",
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
  // {
  //   title: "MVP Development Cost Calculator",
  //   description:
  //     "Quickly calculate how much it costs to launch your MVP. Ideal for startups validating ideas with limited budgets.",

  //   bg: "bg-orange-200",
  //   link: "/tools/mvp-development-cost-calculator/",
  //   tags: ["BUSINESS", "DEVELOPMENT", "OTHER"],
  // },
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
