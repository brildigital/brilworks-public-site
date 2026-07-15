import React from "react";

const reasons = [
  {
    num: "01",
    big: "99.7%",
    body: "Pipeline uptime across production jobs. Measured, not promised.",
    isGreen: false,
  },
  {
    num: "02",
    big: "Week 3",
    body: "First trustworthy dashboard ships in three weeks, not three quarters.",
    isGreen: false,
  },
  {
    num: "03",
    big: "38%",
    body: "Average warehouse cost cut on the last five optimisation engagements.",
    isGreen: false,
  },
  {
    num: "04",
    big: "Real-time",
    body: "Agents query live feeds, not nightly exports. So the answers stay current.",
    isGreen: true,
  },
  {
    num: "05",
    big: "Zero lock-in",
    body: "We build on your cloud and your warehouse. You own the stack when we leave.",
    isGreen: false,
  },
  {
    num: "06",
    big: "30+",
    body: "Agents running live in client production today. Not in a sandbox.",
    isGreen: true,
  },
];

const DataScienceReasons = () => {
  return (
    <div className="bg-white">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="mb-[38px] reveal">
          <span className="flex items-center gap-[9px] font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-themeColor mb-4">
            Six reasons, all verifiable
          </span>
          <h2
            className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.06] text-[#0B1020]"
            style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
          >
            Not adjectives. Numbers you can check.
          </h2>
        </div>

        {/* Bordered grid — gap-px with bg color bleeds through as grid lines */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-[#e4e8f0] rounded-2xl overflow-hidden border border-[#e4e8f0]">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-white p-7 hover:bg-[#f5f7fb] transition-[background-color] duration-200 reveal"
            >
              <div className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8a91a1] mb-2">
                {r.num}
              </div>
              <div
                className={`font-Figtree font-bold tracking-[-0.02em] leading-none my-3 
                  text-themeColor`}
                style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
              >
                {r.big}
              </div>
              <p className="font-Figtree text-[13.5px] text-[#525a6b] leading-[1.55] m-0">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataScienceReasons;
