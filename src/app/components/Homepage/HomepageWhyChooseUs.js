import React from "react";

const stats = [
  { value: "48 hrs", label: "MVP onboarded and shipping" },
  { value: "200+", label: "Projects across 8 industries" },
  { value: "10+ yrs", label: "Building software that scales" },
  { value: "50+", label: "Senior engineers on staff" },
];

const HomepageWhyChooseUs = () => {
  return (
    <div className="bg-[#0a0c10]">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-16 reveal">
          <div className="lg:max-w-[480px]">
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase block mb-3 text-themeColor">
              Why Teams Pick Us
            </span>
            <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold tracking-[-1.5px] leading-[1.08] text-white">
              Agency delivery.
              <br />
              Product-team rigor.
            </h2>
          </div>
          <p className="text-[16px] leading-[1.7] text-[#9ca3af] lg:max-w-[460px] lg:pt-8">
            Most agencies demo Figma; most AI studios demo notebooks. We ship
            software&nbsp;&mdash; with CI, evals, runbooks, and an on-call pod the week
            you sign. If it doesn&apos;t hold up in production, we don&apos;t call it done.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 reveal">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${
                index < stats.length - 1
                  ? "lg:border-r lg:border-[#1f2937]"
                  : ""
              } lg:px-8 first:lg:pl-0 last:lg:pr-0`}
            >
              <div className="font-Figtree text-[clamp(36px,4vw,48px)] font-extrabold text-themeColor tracking-[-1px] leading-none mb-2">
                {stat.value}
              </div>
              <p className="font-Figtree text-[14px] text-[#9ca3af]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom accent line */}
        <div className="mt-14 h-[2px] bg-gradient-to-r from-themeColor via-themeSecondary to-transparent rounded-full reveal" />
      </div>
    </div>
  );
};

export default HomepageWhyChooseUs;
