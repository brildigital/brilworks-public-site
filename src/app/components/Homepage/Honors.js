import React from "react";

const honors = [
  { icon: "🏆", title: "Top Software Companies", org: "GoodFirms · 2025–26" },
  { icon: "🥇", title: "Global Award Spring", org: "Clutch · 2025" },
  { icon: "🎖️", title: "Global Award Fall", org: "Clutch · 2024" },
  { icon: "🌟", title: "Top 10 Agency 2026", org: "SelectedFirms" },
  { icon: "⚡", title: "Adalo Expert", org: "No-Code Certified" },
  { icon: "☁️", title: "AWS Partner", org: "Advanced Tier" },
];

const Honors = () => {
  return (
    <div className="bg-[#f8f9ff] py-20">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-center reveal">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase block mb-3 text-themeColor">
            Recognition
          </span>
          <h2 className="text-[clamp(30px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] text-[#0d0f1a]">
            We&apos;re Pleased to Share Some of the Honors
          </h2>
        </div>

        {/* Honors Grid */}
        <div className="flex flex-wrap justify-center gap-4 reveal">
          {honors.map((honor, index) => (
            <div
              key={index}
              className="bg-white border border-[#e5e7eb] rounded-xl px-6 py-5 flex items-center gap-3.5 transition-all duration-300 hover:border-themeColor hover:shadow-[0_8px_24px_rgba(26,92,204,0.12)]"
            >
              <div className="text-[28px]">{honor.icon}</div>
              <div>
                <div className="font-[family-name:var(--font-heading)] text-[13px] font-bold text-[#0d0f1a]">
                  {honor.title}
                </div>
                <div className="font-[family-name:var(--font-body)] text-[11px] text-[#6b7280]">
                  {honor.org}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Honors;
