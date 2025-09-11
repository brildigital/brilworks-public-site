import React from "react";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Tools = () => {
  const tools = [
    {
      title: "Software Development Cost Calculator",
      description:
        "Estimate software project costs fast. Select platform, complexity, and features to get accurate budget and timeline insights.",
      image: "/images/ach.png", // replace with your actual image path
      bg: "bg-blue-200",
      link: "/tools/project-estimate/",
    },
    {
      title: "ROI Calculator",
      description:
        "Quickly measure profitability by calculating return on investment. Enter costs and gains to evaluate business success instantly.",
      image: "/images/business.png",
      bg: "bg-indigo-200",
      link: "/tools/roi-calculator/",
    },
  ];
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
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-5">
          {tools?.map((tool, index) => (
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
                  <p className="text-4xl font-bold text-center ">
                    {tool?.title}
                  </p>
                </div>
              </div>

              {/* Bottom Text Section */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-lg md:text-xl mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-[15px] flex-1">
                  {tool.description}
                </p>
                <div className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline">
                  Use Tool Now &nbsp; <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tools;
