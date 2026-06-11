import React from "react";
import ButtonV2 from "../Common/ButtonV2";
import Link from "next/link";

const flowStages = [
  { step: "01 / Ingest", desc: "Raw, scattered data" },
  { step: "02 / Engineer", desc: "Pipelines you trust" },
  { step: "03 / Model", desc: "A warehouse that answers" },
  { step: "04 / Run", desc: "Agents that act on it" },
];

const DataScienceHeroSection = () => {
  return (
    <>
      <style>{`
        @keyframes heroFlow {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
        .hero-flow-line {
          position: absolute;
          left: 0;
          right: 0;
          top: 26px;
          height: 2px;
          background: rgba(255, 255, 255, 0.12);
          overflow: hidden;
          border-radius: 2px;
        }
        .hero-flow-line::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 40%;
          background: linear-gradient(90deg, transparent, #1A5CCC, #34d399, transparent);
          animation: heroFlow 3.4s linear infinite;
        }
      `}</style>

      <div className="hero-section font-Figtree min-h-[calc(100vh-200px)]">
        <div className="hero-grid-overlay"></div>
        <div className="hero-glow-orb"></div>
        <div className="banner-layer min-h-[calc(100vh-200px)] flex items-center">
          <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2]">
            <div className="pt-[100px] pb-8">
              {/* Eyebrow */}
              <p className="flex items-center gap-[9px] font-mono text-[12px] tracking-[0.16em] uppercase text-[#1A5CCC] font-semibold mb-3 hero-fade-down">
                <span className="w-[22px] h-[1px] bg-[#1A5CCC] inline-block"></span>
                Data Engineering &nbsp;/&nbsp; AI Agents
              </p>

              {/* H1 */}
              <h1
                className="hero-h1 font-extrabold text-white tracking-[-0.03em] leading-[1.02] mb-4"
                style={{ fontSize: "clamp(34px, 5.6vw, 64px)" }}
              >
                From{" "}
                <span
                  style={{
                    background: "linear-gradient(95deg, #fff 18%, #1A5CCC 55%, #34d399 92%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  raw data
                </span>
                <br />
                to running agents.
              </h1>

              {/* Lead */}
              <p
                className="text-white/70 hero-fade-up max-w-[58ch] leading-[1.5]"
                style={{ fontSize: "clamp(15px, 1.8vw, 18px)" }}
              >
                We engineer the data infrastructure under your business, then
                build the AI agents that run on top of it. One team owns the
                whole path: the pipelines, the warehouse, the models, and the
                agents in production.
              </p>

              {/* CTAs */}
              <div className="flex gap-3 flex-wrap items-center hero-fade-up mb-10 mt-6">
                <ButtonV2 size="large" label="Book Free Consultation" />
                <Link
                  href="#work"
                  className="inline-flex items-center gap-2 px-[22px] py-[15px] rounded-[10px] text-white text-[15px] font-semibold border border-white/20 hover:bg-white/[0.08] transition-all duration-200"
                >
                  See the work
                </Link>
              </div>

              {/* Flow Track */}
              <div className="hero-fade-up">
                <div className="relative">
                  {/* Animated sweep line — hidden on mobile */}
                  <div className="hero-flow-line hidden sm:block"></div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-0">
                    {flowStages.map((stage, i) => (
                      <div key={i} className="pr-5">
                        {/* dot — all same blue */}
                        <div className="w-[12px] h-[12px] rounded-full border-2 border-[#1A5CCC] bg-[#0d0f1a] relative z-[2] mb-7 shadow-[0_0_10px_1px_rgba(26,92,204,0.45)]"></div>
                        {/* step label — gray */}
                        <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-white/40 mb-1">
                          {stage.step}
                        </div>
                        {/* description — white */}
                        <div className="font-Figtree font-semibold text-[15px] tracking-[-0.01em] text-white">
                          {stage.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataScienceHeroSection;
