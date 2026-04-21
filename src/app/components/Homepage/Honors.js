import React from "react";

const SvgIcon = ({ color, children }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    {children}
  </svg>
);

const honors = [
  {
    icon: <SvgIcon color="#eab308"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></SvgIcon>,
    title: "Top Software Companies", org: "GoodFirms · 2025–26",
  },
  {
    icon: <SvgIcon color="#ea580c"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></SvgIcon>,
    title: "Global Award Spring", org: "Clutch · 2025",
  },
  {
    icon: <SvgIcon color="#dc2626"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></SvgIcon>,
    title: "Global Award Fall", org: "Clutch · 2024",
  },
  {
    icon: <SvgIcon color="#7c3aed"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></SvgIcon>,
    title: "Top 10 Agency 2026", org: "SelectedFirms",
  },
  {
    icon: <SvgIcon color="#0891b2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></SvgIcon>,
    title: "Adalo Expert", org: "No-Code Certified",
  },
  {
    icon: <SvgIcon color="#1A5CCC"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></SvgIcon>,
    title: "AWS Partner", org: "Advanced Tier",
  },
];

const Honors = () => {
  return (
    <div className="bg-white py-20">
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
              <div>{honor.icon}</div>
              <div>
                <div className="font-Figtree text-[13px] font-bold text-[#0d0f1a]">
                  {honor.title}
                </div>
                <div className="font-Figtree text-[11px] text-[#6b7280]">
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
