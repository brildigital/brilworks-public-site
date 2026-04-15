"use client";
import React from "react";
import dynamic from "next/dynamic";

const PortfolioContactForm = dynamic(() => import("./PortfolioContactForm"), {
  ssr: false,
});

const ProjectOverviewSection = ({
  projectOverview,
  technology,
  casestudyFileUrl,
}) => {
  return (
    <section className="main-section-padding" id="overview">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
        <div className="grid lg:grid-cols-[2fr_1fr] grid-cols-1 gap-[60px] items-start">
          {/* Main Content */}
          <div>
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-themeColor inline-block mb-3">
              Overview
            </span>
            <h2 className="lg:text-[44px] md:text-[36px] text-[30px] font-extrabold leading-[1.1] tracking-[-1px] text-[#0d0f1a] mb-5">
              The Challenge &amp; Vision
            </h2>

            {projectOverview?.[0]?.Description1 && (
              <p className="text-[17px] text-[#6b7280] leading-[1.75] mb-5">
                {projectOverview[0].Description1}
              </p>
            )}

            {projectOverview?.[0]?.Description2 && (
              <p className="text-[17px] text-[#6b7280] leading-[1.75] mb-5">
                {projectOverview[0].Description2}
              </p>
            )}

            {/* Tech Stack Pills */}
            {technology?.length > 0 && (
              <div className="mt-6">
                <div className="text-[13px] font-semibold text-[#504f4f] mb-2 uppercase">
                  Tech Stack
                </div>
                <div className="flex gap-2 flex-wrap">
                  {technology.map((tech, index) => (
                    <span
                      key={index}
                      className="px-[14px] py-[6px] rounded-full border border-[#e5e7eb] text-[13px] font-medium text-[#504f4f]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar: Download Form (Sticky) */}
          <div className="lg:sticky lg:top-24" id="download-section">
            <div className="bg-white border border-[#e5e7eb] rounded-2xl p-8 relative overflow-hidden">
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-themeColor to-[#00dbd3]"></div>

              <h3 className="text-xl font-bold text-[#212121] mb-4">
                Get the Full Case Study
              </h3>
              <p className="text-sm text-[#6b7280] mb-4">
                Architecture decisions, design process, and detailed results — in a shareable PDF.
              </p>

              <PortfolioContactForm
                darkMode={false}
                showPhoneField={false}
                showCompanyField={false}
                downloadFileUrl={casestudyFileUrl}
              />

              <p className="text-xs text-[#6b7280] text-center mt-3">
                No spam — just the case study PDF.
              </p>
              <div className="flex gap-2 justify-center mt-3 flex-wrap">
                <span className="inline-flex items-center gap-1 bg-[rgba(26,92,204,0.15)] border border-[rgba(26,92,204,0.3)] px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#1A5CCC]">
                  5★ Clutch
                </span>
                <span className="inline-flex items-center gap-1 bg-[rgba(26,92,204,0.15)] border border-[rgba(26,92,204,0.3)] px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#1A5CCC]">
                  NDA Available
                </span>
                <span className="inline-flex items-center gap-1 bg-[rgba(26,92,204,0.15)] border border-[rgba(26,92,204,0.3)] px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#1A5CCC]">
                  120+ Products
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverviewSection;
