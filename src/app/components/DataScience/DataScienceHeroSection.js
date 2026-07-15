import React from "react";
import Link from "next/link";
import { ArrowRight, BarChart, Code2, Cpu } from "lucide-react";

const flowStages = [
  { step: "01 / Ingest", desc: "Raw, scattered data" },
  { step: "02 / Engineer", desc: "Pipelines you trust" },
  { step: "03 / Model", desc: "A warehouse that answers" },
  { step: "04 / Run", desc: "Agents that act on it" },
];

const DataScienceHeroSection = () => {
  return (
    <div className="relative bg-[#0A0D14] overflow-hidden font-Figtree min-h-[100vh] flex flex-col justify-center border-b border-white/[0.06]">
      {/* Premium subtle grid background (not neon, very faint white lines) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Soft radial glow at the top, extremely subtle */}
      <div className="absolute top-[-20%] left-[50%] translate-x-[-50%] w-[80%] h-[60%] bg-[#1A5CCC] rounded-[100%] opacity-[0.07] blur-[60px] pointer-events-none z-0"></div>

      <div className="container max-w-[1280px] px-5 md:px-10 mx-auto relative z-10 pt-[140px] pb-[80px]">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column: Copy */}
          <div className="w-full lg:w-[55%] flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-300/10 border border-white/[0.1] hover:bg-white/[0.08] transition-[background-color] duration-200 mb-8 group">
              {/* Eyebrow */}
              <p className="flex items-center gap-[9px] font-mono text-[12px] tracking-[0.16em] uppercase text-themeColor font-semibold mb-3 hero-fade-down">
                Data Engineering &nbsp;/&nbsp; AI Agents
              </p>
            </div>

            <h1
              className="text-white font-extrabold tracking-[-0.03em] leading-[1.05] mb-6"
              style={{ fontSize: "clamp(40px, 5vw, 60px)" }}
            >
              From{"  "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d1d1d1] to-[#808080]">
                raw data{" "}
              </span>
              <br />
              to running agents.
            </h1>

            <div className="text-[#a0aabf] text-[17px] md:text-[20px] leading-[1.6] mb-10 max-w-[560px] font-light">
              Data engineering and AI agent development services — one team
              accountable from pipeline to production
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#0A0D14] hover:bg-gray-100 rounded-xl font-bold text-[16px] transition-colors duration-300"
              >
                Book Free Consultation
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/[0.05] text-white hover:bg-white/[0.1] border border-white/[0.1] rounded-xl font-semibold text-[16px] transition-colors duration-300"
              >
                Explore Our Work
              </Link>
            </div>
          </div>

          {/* Right Column: Premium Abstract UI/Visual */}
          <div className="w-full lg:w-[45%] relative">
            {/* Main Visual Card */}
            <div className="relative w-full rounded-2xl bg-[#111623] border border-white/[0.08] p-1 shadow-2xl shadow-black/50">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent rounded-2xl pointer-events-none"></div>

              <div className="bg-[#0A0D14] rounded-xl border border-white/[0.04] overflow-hidden">
                {/* Header bar */}
                <div className="h-10 border-b border-white/[0.05] flex items-center px-4 gap-2 bg-[#111623]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  </div>
                  <div className="mx-auto text-[11px] font-mono text-white/30 tracking-widest">
                    PRODUCTION_ENV
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-end mb-8">
                    <div>
                      <div className="text-[12px] font-semibold text-[#1A5CCC] tracking-wider mb-2">
                        SYSTEM PERFORMANCE
                      </div>
                      <div className="text-3xl font-extrabold text-white">
                        99.98%
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="px-3 py-1 rounded bg-[#1A5CCC]/10 text-[#1A5CCC] text-[11px] font-semibold border border-[#1A5CCC]/20">
                        STABLE
                      </div>
                    </div>
                  </div>

                  {/* Mock Chart / Stats */}
                  <div className="space-y-5">
                    {[
                      {
                        label: "Data Pipeline Throughput",
                        value: "2.4 TB / day",
                        progress: "85%",
                        icon: (
                          <BarChart size={14} className="text-emerald-400" />
                        ),
                      },
                      {
                        label: "AI Agent Resolution Rate",
                        value: "82% Auto",
                        progress: "70%",
                        icon: <Cpu size={14} className="text-blue-400" />,
                      },
                      {
                        label: "Software Build Success",
                        value: "100%",
                        progress: "100%",
                        icon: <Code2 size={14} className="text-indigo-400" />,
                      },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="group"
                        style={{ animationDelay: `${i * 150}ms` }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            {stat.icon}
                            <span className="text-[13px] text-white/60 font-medium">
                              {stat.label}
                            </span>
                          </div>
                          <span className="text-[13px] text-white/90 font-bold">
                            {stat.value}
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#1A5CCC] to-blue-400 rounded-full transition-[width] duration-1000 ease-out"
                            style={{ width: stat.progress }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Trust Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mt-20 pt-10 border-t border-white/[0.06]">
          <div className="flex flex-col md:items-center">
            <div className="text-[28px] md:text-[36px] font-bold text-white mb-1 tracking-tight">
              120+
            </div>
            <div className="text-sm text-white/50 font-medium">
              Projects Delivered
            </div>
          </div>
          <div className="flex flex-col md:items-center">
            <div className="text-[28px] md:text-[36px] font-bold text-white mb-1 tracking-tight">
              98%
            </div>
            <div className="text-sm text-white/50 font-medium">
              Success Rate
            </div>
          </div>
          <div className="flex flex-col md:items-center">
            <div className="text-[28px] md:text-[36px] font-bold text-white mb-1 tracking-tight">
              97%
            </div>
            <div className="text-sm text-white/50 font-medium">
              Job Success (Upwork)
            </div>
          </div>
          <div className="flex flex-col md:items-center">
            <div className="text-[28px] md:text-[36px] font-bold text-white mb-1 tracking-tight">
              5.0
            </div>
            <div className="text-sm text-white/50 font-medium">
              Rating on Clutch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataScienceHeroSection;
