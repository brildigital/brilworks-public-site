"use client";
import React, { useState } from "react";
import Heading from "../HTMLComponents/Heading";
import Link from "next/link";
import {
  ArrowRight,
  ScanSearch,
  Search,
  SearchCheck,
  SearchX,
} from "lucide-react";
import Image from "next/image";

const Tools = () => {
  const [activeTag, setActiveTag] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
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
  const toolsData = [
    {
      title: "Software Development Cost Calculator",
      description:
        "Estimate software project costs fast. Select platform, complexity, and features to get accurate budget and timeline insights.",
      image: "/images/ach.png", // replace with your actual image path
      bg: "bg-blue-200",
      link: "/tools/project-estimate/",
      tags: ["DEVELOPMENT", "SALES"],
    },
    {
      title: "ROI Calculator",
      description:
        "Quickly measure profitability by calculating return on investment. Enter costs and gains to evaluate business success instantly.",
      image: "/images/business.png",
      bg: "bg-indigo-200",
      link: "/tools/roi-calculator/",
      tags: ["MARKETING", "SALES", "OTHER"],
    },
  ];

  const filteredTools =
    activeTag === "" // when ALL is selected
      ? toolsData
      : toolsData.filter((tool) => tool.tags.includes(activeTag));

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
                simplify complex tasks. From business valuations to engineering
                formulas, get accurate results in seconds and make smarter
                decisions with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-[1280px] main-section-padding xl:py-[60px] md:py-10 py-5 mx-auto">
        <div className="flex flex-col md:flex-row gap-5 md:mb-8 mb-5">
          <div className="flex flex-wrap md:mb-8 mb-0 gap-2">
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
            <form
              // className="md:pb-0 !pb-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative w-full">
                <input
                  id="user-search"
                  className={`w-full bg-[#F8FAFC] font-medium rounded-md py-2 px-2 text-xs md:text-sm appearance-none border !pr-8 focus:outline-none focus:border-themeColor hover:border-themeColor focus:ring-0 focus:ring-themeColor`}
                  value={searchTerm}
                  type="search"
                  placeholder="Search"
                  autoComplete="off"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  disabled={!searchTerm && !toolsData?.length}
                />

                <Search className="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-2.5" />
                {/* <Image
                  src="/images/v2/search-normal.svg"
                  width={24}
                  height={24}
                  alt="search-icon"
                  className="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-2.5"
                /> */}
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
            <div className="text-center text-xl font-medium py-10">
              No data found
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tools;
