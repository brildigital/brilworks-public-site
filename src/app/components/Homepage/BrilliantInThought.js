import React from "react";
import ButtonV2 from "../Common/ButtonV2";

const brilliantData = [
  { value: "98%", description: "Project Success Rate" },
  { value: "120+", description: "Projects Completed" },
  { value: "8+", description: "Years of Experience" },
  { value: "17K+", description: "Hours Delivered" },
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
            <p className="font-[family-name:var(--font-body)] text-[#374151] text-base leading-[1.75] mb-7">
              Welcome to Brilworks — a tech-first company with a passion to
              create great products for businesses around the world. We&apos;re
              agile, transparent, and we believe in delivering results you can
              measure.
            </p>
            <ButtonV2
              redirect="/about-us/"
              label="About Us →"
              variant="secondary"
              className="w-fit"
            />
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-0.5">
            {brilliantData.map((data, index) => (
              <div
                key={index}
                className={`bg-white p-7 relative overflow-hidden group transition-all duration-200 ${
                  index === 0
                    ? "rounded-tl-2xl"
                    : index === 1
                      ? "rounded-tr-2xl"
                      : index === 2
                        ? "rounded-bl-2xl"
                        : "rounded-br-2xl"
                }`}
              >
                {/* Blue left border on hover */}
                <div className="absolute top-0 left-0 w-[3px] h-full bg-themeColor opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="font-[family-name:var(--font-heading)] text-themeColor text-5xl font-extrabold tracking-[-2px] leading-none">
                  {data.value}
                </div>
                <div className="font-[family-name:var(--font-body)] text-[#6b7280] text-sm font-medium mt-1.5">
                  {data.description}
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
