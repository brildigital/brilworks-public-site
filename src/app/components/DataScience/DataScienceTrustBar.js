import React from "react";

const stats = [
  { value: "40+", label: "Pipelines in production", isGreen: false },
  { value: "2.1B", label: "Rows processed daily", isGreen: false },
  { value: "30+", label: "AI agents running live", isGreen: true },
  { value: "99.7%", label: "Pipeline uptime SLA", isGreen: true },
];

const DataScienceTrustBar = () => {
  return (
    <div className="bg-[#10162a] border-t border-white/[0.06]">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto py-[42px]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center relative py-2">
              {i < stats.length - 1 && (
                <span className="hidden md:block absolute right-0 top-[14%] h-[72%] w-[1px] bg-white/[0.08]"></span>
              )}
              <div
                className={`font-Figtree font-bold tracking-[-0.02em] leading-none ${
                  stat.isGreen ? "text-[#34d399]" : "text-white"
                }`}
                style={{ fontSize: "clamp(30px, 4.2vw, 44px)" }}
              >
                {stat.value}
              </div>
              <div className="font-Figtree text-[13px] text-white/50 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataScienceTrustBar;
