"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brilworksProducts } from "../lib/products";
import Heading from "../components/HTMLComponents/Heading";

const page = () => {
  return (
    <div>
      <>
        <div className="hire-team-section-l !scroll-[unset]">
          <div className="banner-layer h-full min-h-[400px] md:max-h-[550px] max-h-full">
            <div className="container max-w-[1280px] main-section-padding !pt-24 mx-auto">
              <div className="flex flex-col items-start justify-center h-full min-h-[400px] md:max-h-[900px] max-h-full">
                <Heading
                  type="h1"
                  className="text-white"
                  text={
                    <>
                      Turning Ideas Into Impactful{" "}
                      <br className="hidden md:block" />
                      <span className="bg-clip-text text-transparent bg-theme-gradient">
                        Digital Products
                      </span>
                    </>
                  }
                />
                <p className="text-white lg:text-2xl md:text-xl text-lg !mt-5">
                  At Brilworks, we design, build, and launch intelligent
                  platforms across industries
                  <br /> from AI to HRTech, Real Estate to Voice Automation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container max-w-[1280px] main-section-padding xl:py-[60px] md:py-10 py-5 mx-auto">
          <div className={`grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-5`}>
            {brilworksProducts.length > 0 ? (
              brilworksProducts?.map((tool, index) => (
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

                    <div className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline">
                      Use Now &nbsp; <ArrowRight size={16} />
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
    </div>
  );
};

export default page;
