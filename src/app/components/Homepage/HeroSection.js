"use client";
import React from "react";
import ButtonV2 from "../Common/ButtonV2";
import Link from "next/link";

const trustStats = [
  { value: "120+", label: "Projects Completed" },
  { value: "98%", label: "Project Success Rate" },
  { value: "100%", label: "Job Success · Upwork" },
  { value: "4.8★", label: "Rating on Clutch" },
];

const HeroSection = () => {
  return (
    <div className="hero-section font-[family-name:var(--font-body)] min-h-screen">
      <div className="hero-grid-overlay"></div>
      <div className="hero-glow-orb"></div>
      <div className="banner-layer min-h-screen flex items-center">
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2]">
          <div className="flex lg:flex-row flex-col items-center gap-10 lg:gap-12 pt-[100px] pb-20">
            {/* Left Column - Content */}
            <div className="lg:w-[58%] w-full flex flex-col items-start justify-center">
              {/* Eyebrow */}
              <div className="hero-eyebrow inline-flex items-center gap-2 bg-[rgba(26,92,204,0.15)] border border-[rgba(26,92,204,0.3)] rounded-full px-[14px] py-[6px] text-[#00b4d8] text-xs font-semibold tracking-[0.1em] hero-fade-down">
                <span className="w-1.5 h-1.5 bg-[#00b4d8] rounded-full hero-blink"></span>
                <span>30+ AI Agents Running in Production</span>
              </div>

              {/* H1 */}
              <h1 className="hero-h1 text-[clamp(36px,3.8vw,54px)] font-extrabold text-white tracking-[-1.5px] leading-[1.1]">
                We Build{" "}
                <span className="text-[#1A5CCC]">AI Agents</span>
                <br />
                That Run Your Business
              </h1>

              {/* Subtitle */}
              <p className="hero-sub text-[18px] text-white/[0.62] leading-[1.7] max-w-[600px] hero-fade-up">
                Custom AI agents for customer support, lead qualification,
                document processing, and workflow automation — running 24/7.
              </p>

              {/* CTAs */}
              <div className="hero-ctas flex flex-wrap gap-[14px] hero-fade-up">
                <ButtonV2
                  size="large"
                  label="Book Free Consultation"
                />
                <ButtonV2
                  size="large"
                  label="Get MVP in 48 hrs"
                  variant="secondary"
                  redirect="/mvp-in-48-hours/"
                  icon={<span>⚡</span>}
                />
              </div>

              {/* Ghost CTA - Ebook */}
              <Link
                href="/ebooks/"
                className="inline-flex items-center gap-1.5 text-[#00b4d8] text-sm font-medium hover:gap-2.5 transition-all duration-200 hero-fade-up"
              >
                Download AI MVP Guide (120+ CTOs) →
              </Link>

              {/* Trust Bar — mt-[40px] per mockup */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/[0.08] rounded-xl overflow-hidden border border-white/[0.08] mt-[40px] w-full hero-fade-up">
                {trustStats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/[0.04] hover:bg-white/[0.08] transition-colors py-[18px] px-5 text-center"
                  >
                    <div className="font-[family-name:var(--font-heading)] text-white text-[26px] font-extrabold tracking-[-0.5px] leading-none">
                      {stat.value}
                    </div>
                    <div className="text-white/[0.45] text-[11px] mt-0.5 tracking-[0.04em]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Visual Card Stack */}
            <div className="lg:w-[42%] w-full hidden lg:flex items-center justify-center relative">
              <div className="relative w-full max-w-[440px]">
                {/* Float Card 1 - Lead Qualifier */}
                <div className="absolute -top-8 -right-6 w-[180px] bg-white/[0.05] border border-white/10 rounded-2xl p-5 backdrop-blur-[10px] hero-float-1 z-10">
                  <div className="text-[10px] font-bold text-[#00b4d8] tracking-[0.1em] mb-3">
                    LIVE AGENT
                  </div>
                  <div className="font-[family-name:var(--font-heading)] text-[15px] font-bold text-white mb-1.5">
                    Lead Qualifier
                  </div>
                  <div className="text-xs text-white/50 leading-[1.5]">
                    Responded in 90 secs
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden mt-2.5">
                    <div
                      className="h-full rounded-full hero-bar-fill"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                </div>

                {/* Main Card - AI Dashboard */}
                <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-5 backdrop-blur-[10px] hero-float-main">
                  <div className="text-[10px] font-bold text-[#00b4d8] tracking-[0.1em] mb-3">
                    AI PERFORMANCE DASHBOARD
                  </div>
                  <div className="font-[family-name:var(--font-heading)] text-[15px] font-bold text-white mb-1.5">
                    Customer Support Agent
                  </div>
                  <div className="font-[family-name:var(--font-heading)] text-[32px] font-extrabold text-[#1A5CCC] my-2">
                    1,247
                  </div>
                  <div className="text-xs text-white/50 leading-[1.5]">
                    Queries handled today · 82% automated
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden mt-2.5">
                    <div
                      className="h-full rounded-full hero-bar-fill"
                      style={{ width: "82%" }}
                    ></div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {["WhatsApp", "Email", "Live Chat", "24/7"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold text-[#1A5CCC] bg-[rgba(26,92,204,0.15)] border border-[rgba(26,92,204,0.3)] px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Float Card 2 - Upwork Score */}
                <div className="absolute -bottom-7 -left-5 w-[200px] bg-white/[0.05] border border-white/10 rounded-2xl p-5 backdrop-blur-[10px] hero-float-2 z-10">
                  <div className="text-[10px] font-bold text-[#00b4d8] tracking-[0.1em] mb-3">
                    UPWORK SCORE
                  </div>
                  <div className="font-[family-name:var(--font-heading)] text-[15px] font-bold text-white mb-1">
                    Job Success
                  </div>
                  <div className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-[#1A5CCC] my-1">
                    100%
                  </div>
                  <div className="text-xs text-white/50">
                    Top Rated Agency
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
