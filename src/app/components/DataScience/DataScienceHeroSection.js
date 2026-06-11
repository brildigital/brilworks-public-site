"use client";
import React, { useState, useEffect } from "react";
import { Database } from "lucide-react";
import ButtonV2 from "../Common/ButtonV2";
import Link from "next/link";

const rotatingPhrases = [
  { prefix: "96%", suffix: "Client Retention Rate" },
  { prefix: "99.9%", suffix: "Platform Reliability" },
  { prefix: "4.8/5", suffix: "CSAT Score" },
  { prefix: "100M+", suffix: "Lives Impacted by Our AI" },
  { prefix: "50+", suffix: "Data Pipelines in Production" },
];

const trustStats = [
  { value: "96%", label: "Client Retention" },
  { value: "99.9%", label: "Platform Reliability" },
  { value: "4.8/5", label: "CSAT Score" },
  { value: "5★", label: "Rating on Clutch" },
];

const DataScienceHeroSection = () => {
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
            <div className="lg:w-[62%] w-full flex flex-col items-start justify-center min-w-0">
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
                <span className="sr-only">
                  {rotatingPhrases.map((p, i) => (
                    <span key={i}>
                      {p.prefix} {p.suffix}.{" "}
                    </span>
                  ))}
                </span>
              </div>

              {/* H1 */}
              <h1
                className="hero-h1 font-extrabold text-white tracking-[-1.5px] leading-[1.1]"
                style={{ fontSize: "clamp(26px, 3.2vw, 54px)" }}
              >
                Raw{" "}<span className="text-[#1A5CCC]">Data</span>{" "}to{" "}Running{" "}
                <span className="text-[#1A5CCC]">Agents</span>
              </h1>

              {/* Subtitle */}
              <p className="hero-sub text-[18px] text-white/60 leading-[1.7] max-w-[600px] hero-fade-up">
                Data engineering, AI strategy, and agent development — one team accountable from data readiness to enterprise-scale AI in production.
              </p>

              {/* CTAs */}
              <div className="hero-ctas flex flex-wrap items-center gap-[14px] hero-fade-up">
                <ButtonV2 size="large" label="Book Free Consultation" />
              </div>

              {/* Secondary Links */}
              {/* <div className="flex flex-wrap items-center gap-5 hero-fade-up">
                <Link
                  href="/services/data-science/"
                  className="inline-flex items-center gap-2 text-white/60 text-sm font-medium hover:text-white/90 transition-colors duration-200"
                >
                  <Database size={14} strokeWidth={2} className="shrink-0" />
                  Explore Data Services
                </Link>
                <span className="text-white/20">|</span>
                <Link
                  href="/ebooks/"
                  className="inline-flex items-center gap-1.5 text-[#00b4d8] text-sm font-medium hover:gap-2.5 transition-all duration-200"
                >
                  Free AI Strategy Guide (100+ CTOs) →
                </Link>
              </div> */}

              {/* Trust Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/[0.08] rounded-xl overflow-hidden border border-white/[0.08] mt-7 w-full hero-fade-up">
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

            {/* Right Column - Pipeline Journey Cards */}
            <div className="lg:w-[38%] w-full hidden lg:flex items-center justify-center">
              <div className="w-full max-w-[400px] flex flex-col gap-3 relative">

                {/* Vertical timeline connector */}
                <div className="absolute left-[19px] top-[48px] bottom-[48px] w-[2px] bg-gradient-to-b from-[#1A5CCC] via-[#00b4d8] to-green-400 opacity-25 rounded-full"></div>

                {/* Step 1 — Raw Data Ingestion */}
                <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-5 backdrop-blur-[10px] hero-float-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-[rgba(26,92,204,0.2)] border border-[rgba(26,92,204,0.4)] flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#1A5CCC]"></div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#00b4d8] tracking-[0.1em]">
                        STEP 1 · INGEST
                      </div>
                      <div className="font-Figtree text-[14px] font-bold text-white">
                        Raw Data Ingestion
                      </div>
                    </div>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-2">
                    <div
                      className="h-full rounded-full hero-bar-fill"
                      style={{ width: "98%" }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-white/50">3.2TB ingested today</span>
                    <div className="flex gap-1">
                      {["Kafka", "S3"].map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-semibold text-[#00b4d8] bg-[rgba(0,180,216,0.15)] px-1.5 py-0.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step 2 — Model Training */}
                <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-5 backdrop-blur-[10px] hero-float-main ml-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-[rgba(26,92,204,0.2)] border border-[rgba(26,92,204,0.4)] flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#00b4d8] hero-blink"></div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#00b4d8] tracking-[0.1em]">
                        STEP 2 · MODEL
                      </div>
                      <div className="font-Figtree text-[14px] font-bold text-white">
                        ML Model Training
                      </div>
                    </div>
                  </div>
                  {/* Mini bar chart */}
                  <div className="flex items-end gap-[3px] h-[32px] mb-2">
                    {[32, 56, 44, 68, 58, 82, 72, 88, 78, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-[#1A5CCC]"
                        style={{ height: `${h}%`, opacity: 0.45 + i * 0.055 }}
                      ></div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-white/50">94.2% accuracy</span>
                    <div className="flex gap-1">
                      {["PyTorch", "Airflow"].map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-semibold text-[#1A5CCC] bg-[rgba(26,92,204,0.15)] border border-[rgba(26,92,204,0.2)] px-1.5 py-0.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step 3 — Agent Running */}
                <div className="bg-white/[0.05] border border-green-400/20 rounded-2xl p-5 backdrop-blur-[10px] hero-float-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-green-400/10 border border-green-400/30 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-green-400 hero-blink"></div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#00b4d8] tracking-[0.1em]">
                        STEP 3 · DEPLOY
                      </div>
                      <div className="font-Figtree text-[14px] font-bold text-white">
                        Agent Running
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-Figtree text-[26px] font-extrabold text-green-400 leading-none">
                        12
                      </div>
                      <div className="text-[10px] text-white/50 mt-0.5">decisions / min</div>
                    </div>
                    <div className="text-right">
                      <div className="font-Figtree text-[13px] font-bold text-white">
                        Revenue Optimizer
                      </div>
                      <div className="flex items-center gap-1 justify-end mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 hero-blink shrink-0"></span>
                        <span className="text-[11px] text-green-400 font-semibold">Active</span>
                      </div>
                    </div>
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

export default DataScienceHeroSection;
