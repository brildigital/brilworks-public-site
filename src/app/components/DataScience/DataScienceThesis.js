import React from "react";

const arcNodes = [
  {
    idx: "RAW DATA",
    title: "Ingest",
    desc: "Pull from every source: apps, APIs, files, legacy databases. Without losing a row.",
    progress: 25,
    isGreen: false,
  },
  {
    idx: "ENGINEERED",
    title: "Pipeline",
    desc: "Clean, tested, scheduled. The part nobody sees and everything depends on.",
    progress: 50,
    isGreen: false,
  },
  {
    idx: "MODELED",
    title: "Warehouse",
    desc: "One source of truth your team can query. And your models can too.",
    progress: 75,
    isGreen: false,
  },
  {
    idx: "RUNNING",
    title: "Agents",
    desc: "AI that acts on clean data, so the answers hold up in production.",
    progress: 100,
    isGreen: true,
  },
];

const DataScienceThesis = () => {
  return (
    <div className="bg-white" id="thesis">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="mb-[42px] reveal">
          <span className="flex items-center gap-[9px] font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-themeColor mb-4">
            <span className="w-[22px] h-[1px] bg-themeColor inline-block"></span>
            Why this order matters
          </span>
          <h2
            className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.2] text-[#0B1020] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 46px)", maxWidth: "18ch" }}
          >
            An AI agent is only as good as the{" "}
            <em className="not-italic text-themeColor">data feeding it.</em>
          </h2>
          <p
            className="font-Figtree text-[#525a6b] leading-[1.5]"
            style={{ fontSize: "clamp(16px, 2vw, 20px)", maxWidth: "58ch" }}
          >
            Most teams skip straight to the agent. Then it hallucinates, because the data underneath is stale, duplicated, or nobody trusts it. We build the path in the order it has to be built. Foundation first. Agent last.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {arcNodes.map((node, i) => (
            <div
              key={i}
              className="group border border-[#e4e8f0] rounded-2xl p-6 bg-white hover:border-[#c8d9f8] hover:-translate-y-1 hover:shadow-[0_18px_40px_-22px_rgba(11,16,32,0.3)] transition-all duration-300 reveal"
            >
              <div className="font-mono text-[12px] font-semibold text-themeColor tracking-[0.1em]">
                {node.idx}
              </div>
              <h3 className="font-Figtree text-[17px] font-semibold text-[#0B1020] tracking-[-0.01em] mt-3 mb-2">
                {node.title}
              </h3>
              <p className="font-Figtree text-[13.5px] text-[#525a6b] leading-[1.6] m-0">
                {node.desc}
              </p>
              <div
                className="h-[3px] rounded-[3px] mt-4 bg-themeColor/[0.18] group-hover:bg-gradient-to-r group-hover:from-themeColor group-hover:to-[#34d399] transition-all duration-300"
                style={{ width: `${node.progress}%` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataScienceThesis;
