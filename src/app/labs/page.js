"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brilworksProducts } from "../lib/products";
import Heading from "../components/HTMLComponents/Heading";
import Image from "next/image";

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
          <div className={`grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-5`}>
            {brilworksProducts.length > 0 ? (
              brilworksProducts?.map((tool, index) => (
                <Link
                  href={tool?.link}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-themeColor/20 border rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
                >
                  <div className="relative">
                    <Image
                      src={tool.image}
                      alt={tool.title}
                      width={400}
                      height={380}
                      className="w-full h-[380px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <span className="view-template text-white text-sm font-semibold border border-white px-4 py-2 rounded-md">
                        View Template
                      </span>
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
                      Explore Now &nbsp; <ArrowRight size={16} />
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
