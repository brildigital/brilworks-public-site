import React from "react";

const cases = [
  {
    tag: "Data Engineering",
    thumb: "data",
    title: "Cut warehouse spend without touching the dashboards",
    body: "A retail client's Snowflake bill climbed every month. We re-partitioned the heaviest tables and moved cold data to object storage. Nothing the analysts touched changed.",
    metric: "38% warehouse cost reduction, from re-partitioning and tiering storage",
  },
  {
    tag: "AI Agent",
    thumb: "ai",
    title: "A support agent that stopped guessing",
    body: "The first version hallucinated order statuses. We grounded it in a live data feed instead of a nightly export, so it answers from what's true right now.",
    metric: "71% escalation drop, after grounding the agent in real-time data",
  },
  {
    tag: "Data → Agent · full arc",
    thumb: "arc",
    title: "From spreadsheet chaos to a reporting agent",
    body: "A logistics ops team ran on 40 spreadsheets. We built the pipeline and warehouse first, then put an agent on top that answers questions in plain language.",
    metric: "Weekly report time: 2 days to 4 minutes",
  },
  {
    tag: "Data Engineering",
    thumb: "data",
    title: "A migration that didn't lose a single row",
    body: "Legacy on-prem database to a managed lakehouse. We ran both in parallel for three weeks and reconciled row counts daily before cutting over.",
    metric: "0 rows lost, verified by daily reconciliation",
  },
];

const thumbStyles = {
  data: "bg-gradient-to-br from-[#1a2342] to-[#0B1020]",
  ai: "bg-gradient-to-br from-[#0d3b2e] to-[#0B1020]",
  arc: "bg-gradient-to-br from-[#1a2342] via-[#0d2e2e] to-[#0B1020]",
};

const DataScienceWork = () => {
  return (
    <div className="bg-[#f5f7fb]" id="work">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="mb-9 reveal">
          <span className="flex items-center gap-[9px] font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-themeColor mb-4">
            <span className="w-[22px] h-[1px] bg-themeColor inline-block"></span>
            Work that speaks for itself
          </span>
          <h2
            className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.06] text-[#0B1020] mb-3"
            style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
          >
            Three builds, one through-line.
          </h2>
          <p className="font-Figtree text-[#525a6b] text-[16px] leading-[1.55] max-w-[62ch]">
            A pure-data rebuild, an agent shipped into production, and one project that ran the whole arc end to end. Every metric says how we got there.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <div
              key={i}
              className="border border-[#e4e8f0] rounded-2xl overflow-hidden bg-white hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(11,16,32,0.4)] transition-all duration-300 reveal"
            >
              {/* Thumbnail */}
              <div className={`h-[140px] flex items-end p-4 relative overflow-hidden ${thumbStyles[c.thumb]}`}>
                <div
                  className="absolute inset-0 opacity-50"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                ></div>
                <span className="relative z-[2] font-mono text-[10.5px] font-semibold tracking-[0.08em] uppercase bg-white/10 border border-white/20 rounded-full px-[11px] py-[5px] text-white">
                  {c.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-Figtree font-semibold text-[18px] text-[#0B1020] tracking-[-0.01em] mb-2">
                  {c.title}
                </h3>
                <p className="font-Figtree text-[14px] text-[#525a6b] leading-[1.55] mb-4">{c.body}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-[#e4e8f0] font-mono text-[12.5px] font-semibold text-[#0B1020]">
                  <span className="text-[#0d9e6a]">↓</span>
                  {c.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataScienceWork;
