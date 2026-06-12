import React from "react";

const agents = [
  {
    title: "Customer Support Agent",
    desc: "Answers from a live order feed. Stopped guessing once we grounded it in real data.",
  },
  {
    title: "Reporting Agent",
    desc: "Takes plain-language questions against the warehouse. Replaced 40 spreadsheets.",
  },
  {
    title: "Document Processing Agent",
    desc: "Pulls structured data out of messy PDFs and writes it straight to the pipeline.",
  },
];

const DataScienceAgentsBand = () => {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(700px 400px at 85% 0%, rgba(52,229,160,.16), transparent 60%), #0B1020",
      }}
      id="agents"
    >
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="mb-9 reveal">
          <span className="flex items-center gap-[9px] font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-[#34d399] mb-4">
            <span className="w-[22px] h-[1px] bg-[#34d399] inline-block"></span>
            The payoff
          </span>
          <h2
            className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.06] text-white mb-3"
            style={{ fontSize: "clamp(28px, 4vw, 46px)", maxWidth: "16ch" }}
          >
            30+ AI agents.{" "}
            <span className="text-[#34d399]">Running live.</span> Right now.
          </h2>
          <p
            className="font-Figtree text-white/60 leading-[1.55]"
            style={{ fontSize: "17px", maxWidth: "48ch" }}
          >
            They run because the data underneath them is clean. Most teams hire an AI agent development company and skip that part. We build the pipeline before the agent.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {agents.map((agent, i) => (
            <div
              key={i}
              className="border border-white/[0.08] rounded-2xl p-[22px] bg-white/[0.025] hover:-translate-y-1 hover:border-[#34d399]/40 transition-all duration-300 reveal"
            >
              <div className="flex items-center gap-[7px] font-mono text-[11px] font-semibold text-[#34d399] tracking-[0.06em] mb-3">
                <span className="w-[7px] h-[7px] rounded-full bg-[#34d399] hero-blink shrink-0"></span>
                LIVE IN PRODUCTION
              </div>
              <h3 className="font-Figtree font-semibold text-[16px] text-white tracking-[-0.01em] mb-2">
                {agent.title}
              </h3>
              <p className="font-Figtree text-[13px] text-white/60 leading-[1.55] m-0">
                {agent.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataScienceAgentsBand;
