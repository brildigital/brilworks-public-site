import React from "react";
import ButtonV2 from "../Common/ButtonV2";
import Link from "next/link";

const stats = [
  { value: "20–40%", label: "Typical cost cut", accent: true },
  { value: "40+", label: "Pipelines in production", accent: false },
  { value: "2.1B", label: "Rows processed daily", accent: false },
  { value: "99.7%", label: "Pipeline uptime", accent: true },
];

const badges = [
  "Snowflake Partner",
  "Databricks Partner",
  "AWS Partner",
  "5.0 on Clutch",
];

const DataEngineeringHero = () => {
  return (
    <div className="hero-section font-Figtree min-h-[calc(100vh-200px)]">
      <div className="hero-grid-overlay"></div>
      <div className="hero-glow-orb"></div>
      <div className="banner-layer min-h-[calc(100vh-200px)] flex items-center">
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2]">
          <div className="pt-[140px] pb-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left content */}
              <div>
                <div className="flex items-center gap-[11px] mb-6 hero-fade-down">
                  <span className="w-[30px] h-[30px] rounded-[7px] bg-themeColor flex items-center justify-center shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-[18px] h-[18px]"
                    >
                      <path
                        d="M3 7l9-4 9 4-9 4-9-4z"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 12l9 4 9-4M3 17l9 4 9-4"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-themeColor">
                    Data Engineering Services
                  </span>
                </div>

                <h1
                  className="hero-h1 font-extrabold text-white tracking-[-0.03em] leading-[1.06] mb-4"
                  style={{ fontSize: "clamp(34px, 5vw, 56px)" }}
                >
                  Data engineering services that{" "}
                  <span className="text-themeColor">cut cost and ship AI.</span>
                </h1>

                <p
                  className="text-white/70 hero-fade-up max-w-[48ch] leading-[1.55]"
                  style={{ fontSize: "clamp(16px, 1.9vw, 19px)" }}
                >
                  Brilworks unifies your data on Snowflake and Databricks, cuts
                  what you overspend to run it, and gets AI into production on
                  data your teams can trust.
                </p>

                <div className="flex gap-3 flex-wrap items-center hero-fade-up mt-8">
                  <ButtonV2 size="large" label="Talk to an Expert" />
                  <Link
                    href="#services"
                    className="inline-flex items-center gap-2 px-[22px] py-[15px] rounded-[10px] text-white text-[15px] font-semibold border border-white/20 hover:bg-white/[0.08] transition-all duration-200"
                  >
                    See what we do
                  </Link>
                </div>

                <div className="flex flex-col gap-[7px] mt-6 hero-fade-up">
                  {[
                    "Fixed-price cost audit that pays for itself",
                    "Your cloud, your repo, no lock-in",
                    "Certified on Snowflake and Databricks",
                  ].map((tick, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 text-[13.5px] text-white/60"
                    >
                      <span className="text-[#34E5A0] font-bold">&#10003;</span>
                      {tick}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — Stat boxes */}
              <div className="hidden lg:block hero-fade-up">
                <div className="grid grid-cols-2 gap-[14px]">
                  {stats.map((stat, i) => (
                    <div
                      key={i}
                      className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5"
                    >
                      <div
                        className={`font-Figtree text-[30px] font-bold tracking-[-0.02em] leading-none ${
                          stat.accent ? "text-[#34E5A0]" : "text-white"
                        }`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-[12.5px] text-white/60 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Badge strip */}
            <div className="border-t border-white/[0.07] mt-12">
              <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 py-5">
                {badges.map((badge, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 font-mono text-[12.5px] text-white/60"
                  >
                    <span className="w-[6px] h-[6px] rounded-full bg-themeColor"></span>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataEngineeringHero;
