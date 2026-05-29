import React from "react";
import { Smile, TrendingUp, Shield } from "lucide-react";
import ButtonV2 from "../Common/ButtonV2";

const principles = [
  {
    icon: <Smile size={20} color="#1A5CCC" strokeWidth={1.75} />,
    title: "Your Team, Not a Vendor",
    description: "We embed into your workflow — standups, Slack, your timezone.",
  },
  {
    icon: <TrendingUp size={20} color="#16a34a" strokeWidth={1.75} />,
    title: "Ship Fast, Iterate Faster",
    description: "Working prototype in Week 1. Weekly demos. No 3-month silences.",
  },
  {
    icon: <Shield size={20} color="#ea580c" strokeWidth={1.75} />,
    title: "Transparent by Default",
    description: "You own the code, the repo, and every decision. No lock-in.",
  },
];

const BrilliantInThought = () => {
  return (
    <div className="bg-[#f8f9ff] border-b border-[#e5e7eb]">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 items-center reveal">
          {/* Left - Text */}
          <div>
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase block mb-3 text-themeColor">
              Who We Are
            </span>
            <h2 className="text-[clamp(30px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] text-[#0d0f1a] mb-5">
              Brilliant in Thoughts, Action &amp; Results
            </h2>
            <p className="font-Figtree text-[#374151] text-base leading-[1.75] mb-7">
              Welcome to Brilworks — a tech-first company with a passion to
              create great products for businesses around the world. We&apos;re
              agile, transparent, and we believe in delivering results you can
              measure.
            </p>
            <ButtonV2
              redirect="/about-us/"
              label="About Us →"
              variant="secondary"
              className="w-fit mt-2"
            />
          </div>

          {/* Right - How We Work */}
          <div className="flex flex-col gap-4">
            {principles.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white rounded-xl px-6 py-5 border border-[#e5e7eb] transition-all duration-200 hover:border-themeColor hover:-translate-y-0.5 hover:shadow-sm">
                <div className="shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <div className="font-Figtree text-[15px] font-bold text-[#0d0f1a] mb-0.5">
                    {item.title}
                  </div>
                  <div className="font-Figtree text-[13px] text-[#6b7280] leading-[1.6]">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrilliantInThought;
