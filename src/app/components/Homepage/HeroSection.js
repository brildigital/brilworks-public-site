"use client";
import React, { useState, useEffect } from "react";
import ButtonV2 from "../Common/ButtonV2";
import Link from "next/link";

const rotatingPhrases = [
  { prefix: "30+", suffix: "AI Agents in Production" },
  { prefix: "120+", suffix: "Custom Software Projects Delivered" },
  { prefix: "50+", suffix: "Mobile App Development Projects" },
  { prefix: "98%", suffix: "Software Development Success Rate" },
  { prefix: "10+", suffix: "Years of Product Engineering" },
];

const trustStats = [
  { value: "120+", label: "Projects Completed" },
  { value: "98%", label: "Project Success Rate" },
  { value: "97%", label: "Job Success · Upwork" },
  { value: "5★", label: "Rating on Clutch" },
];

const HeroSection = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % rotatingPhrases.length);
        setVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const current = rotatingPhrases[phraseIndex];

  return (
    <div className="hero-section font-Figtree min-h-screen">
      <div className="hero-grid-overlay"></div>
      <div className="hero-glow-orb"></div>
      <div className="banner-layer min-h-screen flex items-center">
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2]">
          <div className="flex lg:flex-row flex-col items-center gap-10 lg:gap-12 pt-[100px] pb-20">
            {/* Left Column - Content */}
            <div className="lg:w-[58%] w-full flex flex-col items-start justify-center">
              {/* Eyebrow */}
              <div className="hero-eyebrow inline-flex items-center gap-2 bg-[rgba(26,92,204,0.15)] border border-[rgba(26,92,204,0.3)] rounded-full px-[14px] py-[6px] text-[#00b4d8] text-xs font-semibold tracking-[0.1em] hero-fade-down overflow-hidden">
                <span className="w-1.5 h-1.5 bg-[#00b4d8] rounded-full hero-blink flex-shrink-0"></span>
                <span
                  aria-live="polite"
                  style={{
                    display: "inline-flex",
                    gap: "0.3em",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(6px)",
                  }}
                >
                  <span className="text-white">{current.prefix}</span>
                  <span>{current.suffix}</span>
                </span>
                {/* SEO: all phrases in DOM for crawlers, visually hidden */}
                <span className="sr-only">
                  {rotatingPhrases.map((p, i) => (
                    <span key={i}>{p.prefix} {p.suffix}. </span>
                  ))}
                </span>
              </div>

              {/* H1 */}
              <h1 className="hero-h1 font-extrabold text-white tracking-[-1.5px] leading-[1.1]" style={{ fontSize: "clamp(26px, 3.2vw, 54px)" }}>
                <span className="whitespace-nowrap">
                  We Build{" "}
                  <span className="text-[#1A5CCC]">Software & AI Agents</span>
                </span>
                <br />
                That Run Your Business
              </h1>

              {/* Subtitle */}
              <p className="hero-sub text-[18px] text-white/60 leading-[1.7] max-w-[600px] hero-fade-up">
                From AI agents to full-stack apps — we build the software that
                runs your business. Shipped fast, built to last.
              </p>

              {/* CTAs */}
              <div className="hero-ctas flex flex-wrap items-center gap-[14px] hero-fade-up">
                <ButtonV2
                  size="large"
                  label="Book Free Consultation"
                />
              </div>

              {/* Secondary Links */}
              <div className="flex flex-wrap items-center gap-5 hero-fade-up">
                <Link
                  href="/ai-solutions/"
                  className="inline-flex items-center gap-2 text-white/60 text-sm font-medium hover:text-white/90 transition-colors duration-200"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M12 2a4 4 0 0 1 4 4v2H8V6a4 4 0 0 1 4-4z" /><rect x="3" y="8" width="18" height="12" rx="2" /><circle cx="9" cy="14" r="1.5" /><circle cx="15" cy="14" r="1.5" /></svg>
                  See AI Solutions
                </Link>
                <span className="text-white/20">|</span>
                <Link
                  href="/ebooks/"
                  className="inline-flex items-center gap-1.5 text-[#00b4d8] text-sm font-medium hover:gap-2.5 transition-all duration-200"
                >
                  Free AI Guide (120+ CTOs) →
                </Link>
              </div>

              {/* Trust Bar — mt-[40px] per mockup */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/[0.08] rounded-xl overflow-hidden border border-white/[0.08] mt-[40px] w-full hero-fade-up">
                {trustStats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/[0.04] hover:bg-white/[0.08] transition-colors py-[18px] px-5 text-center"
                  >
                    <div className="font-Figtree text-white text-[26px] font-extrabold tracking-[-0.5px] leading-none">
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
                  <div className="font-Figtree text-[15px] font-bold text-white mb-1.5">
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
                  <div className="font-Figtree text-[15px] font-bold text-white mb-1.5">
                    Customer Support Agent
                  </div>
                  <div className="font-Figtree text-[32px] font-extrabold text-[#1A5CCC] my-2">
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
                  <div className="font-Figtree text-[15px] font-bold text-white mb-1">
                    Job Success
                  </div>
                  <div className="font-Figtree text-2xl font-extrabold text-[#1A5CCC] my-1">
                    97%
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
