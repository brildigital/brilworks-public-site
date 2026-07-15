import React from "react";

const dataServices = [
  {
    title: "Data Pipeline Development",
    desc: "Ingestion, transformation, and scheduling. Built so the on-call engineer can actually read it.",
  },
  {
    title: "Data Warehouse & Lakehouse",
    desc: "Data warehouse services on Snowflake, BigQuery, and Databricks. One source of truth, modeled properly.",
  },
  {
    title: "ETL / ELT",
    desc: "dbt-first transformations with tests, so bad data gets caught before it reaches a dashboard.",
  },
  {
    title: "Real-Time Streaming",
    desc: "Kafka and Kinesis, for the cases where a nightly batch is too slow.",
  },
  {
    title: "Data Migration",
    desc: "Legacy to cloud, reconciled row by row. No silent data loss.",
  },
];

const aiServices = [
  {
    title: "AI Agent Development",
    desc: "Agents that act on your data and ship into real production, not demos.",
  },
  {
    title: "RAG & Knowledge Systems",
    desc: "Retrieval grounded in your warehouse, so answers point back to something real.",
  },
  {
    title: "MLOps & Model Infrastructure",
    desc: "The deployment, monitoring, and retraining that keep a model working after launch.",
  },
  {
    title: "Model Integration",
    desc: "Claude, GPT, or open models, wired into your stack and your data.",
  },
  {
    title: "AI Readiness Audit",
    desc: "Before the agent: is your data ready for one? We give you a straight answer.",
  },
];

const DataSciencePillars = () => {
  return (
    <div className="bg-[#f5f7fb]" id="services">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        {/* Header */}
        <div className="flex flex-col justify-between gap-2 mb-[38px] reveal">
          <span className="flex items-center gap-[9px] font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-themeColor mb-4">
            Data engineering & AI agent development
          </span>
          <h2
            className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.06] text-[#0B1020] m-0"
            style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
          >
            Two halves of one stack.
          </h2>
          <p
            className="font-Figtree text-[#525a6b] text-[16px] leading-[1.55] m-0"
            style={{ maxWidth: "47ch" }}
          >
            The data engineering on the left is what makes the AI on the right
            reliable. Most agencies do one. We do the path between them.
          </p>
        </div>

        {/* Columns */}
        <div className="grid lg:grid-cols-2 gap-5">
          {/* Data Engineering */}
          <div className="border border-[#e4e8f0] rounded-2xl p-7 bg-white overflow-hidden relative reveal">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-themeColor rounded-tl-2xl rounded-tr-2xl"></div>
            <div className="flex items-center gap-3 mb-5">
              <h3 className="font-Figtree font-semibold text-[21px] text-[#0B1020] tracking-[-0.01em] m-0">
                Data Engineering
              </h3>
            </div>
            {dataServices.map((svc, i) => (
              <div
                key={i}
                className={`py-[15px] hover:pl-2 transition-[padding] duration-200 ${
                  i > 0 ? "border-t border-[#e4e8f0]" : ""
                }`}
              >
                <div className="font-Figtree font-semibold text-[15.5px] text-[#0B1020] tracking-[-0.01em]">
                  {svc.title}
                </div>
                <div className="font-Figtree text-[13.5px] text-[#525a6b] mt-1">
                  {svc.desc}
                </div>
              </div>
            ))}
          </div>

          {/* AI Engineering */}
          <div className="border border-[#e4e8f0] rounded-2xl p-7 bg-white overflow-hidden relative reveal">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1A5CCC] rounded-tl-2xl rounded-tr-2xl"></div>
            <div className="flex items-center gap-3 mb-5">
              <h3 className="font-Figtree font-semibold text-[21px] text-[#0B1020] tracking-[-0.01em] m-0">
                AI Engineering
              </h3>
            </div>
            {aiServices.map((svc, i) => (
              <div
                key={i}
                className={`py-[15px] hover:pl-2 transition-[padding] duration-200 ${
                  i > 0 ? "border-t border-[#e4e8f0]" : ""
                }`}
              >
                <div className="font-Figtree font-semibold text-[15.5px] text-[#0B1020] tracking-[-0.01em]">
                  {svc.title}
                </div>
                <div className="font-Figtree text-[13.5px] text-[#525a6b] mt-1">
                  {svc.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center font-mono text-[12px] text-[#8a91a1] mt-8 reveal">
          the left side is what makes the right side work
        </p>
      </div>
    </div>
  );
};

export default DataSciencePillars;
