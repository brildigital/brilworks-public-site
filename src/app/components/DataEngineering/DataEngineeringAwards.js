import React from "react";

const awards = [
  "Snowflake Partner",
  "Databricks Partner",
  "AWS Partner",
  "Clutch 5.0",
  "Top Data Engineering 2026",
];

const DataEngineeringAwards = () => {
  return (
    <div className="bg-white">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto py-16 text-center">
        <span className="flex items-center justify-center gap-[9px] font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-themeColor mb-4 reveal">
          <span className="w-[22px] h-[1px] bg-themeColor inline-block"></span>
          Recognition
        </span>
        <h2
          className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.06] text-[#0B1020] mb-8 reveal"
          style={{ fontSize: "clamp(20px, 2.6vw, 28px)" }}
        >
          Trusted &amp; awarded by industry leaders
        </h2>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 reveal">
          {awards.map((award, i) => (
            <span
              key={i}
              className="flex items-center gap-2 font-mono text-[13px] text-[#525a6b]"
            >
              <span className="text-themeColor">&#9733;</span>
              {award}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataEngineeringAwards;
