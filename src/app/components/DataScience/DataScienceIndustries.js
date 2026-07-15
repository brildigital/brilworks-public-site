import React from "react";

const industries = [
  "Healthcare",
  "Fintech",
  "Retail & E-Commerce",
  "Logistics",
  "SaaS",
  "Manufacturing",
];

const DataScienceIndustries = () => {
  return (
    <div className="bg-[#f5f7fb]" id="industries">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="mb-7 reveal">
          <span className="flex items-center gap-[9px] font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-themeColor mb-4">
            Deep domain expertise
          </span>
          <h2
            className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.06] text-[#0B1020] mb-3"
            style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
          >
            We&apos;ve moved data in these worlds.
          </h2>
          <p className="font-Figtree text-[#525a6b] text-[16px] leading-[1.55] max-w-[62ch]">
            Pipeline patterns differ by industry. The compliance rules, the data
            shapes, the latency people will tolerate. We have shipped in each of
            these.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 reveal">
          {industries.map((name) => (
            <span
              key={name}
              className="border border-[#e4e8f0] rounded-full px-5 py-[11px] font-Figtree text-[14.5px] font-semibold text-[#0B1020] bg-white hover:-translate-y-0.5 hover:border-themeColor hover:text-themeColor transition-[transform,border-color,color] duration-200 cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataScienceIndustries;
