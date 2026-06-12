import React from "react";
import { Database, LineChart, Cpu, Network, Lightbulb, ShieldCheck } from "lucide-react";

const dataIcons = {
  strategy: <Lightbulb size={28} color="#7c3aed" strokeWidth={1.75} />,
  modernization: <Database size={28} color="#eab308" strokeWidth={1.75} />,
  ai: <Cpu size={28} color="#ea580c" strokeWidth={1.75} />,
  ops: <ShieldCheck size={28} color="#1A5CCC" strokeWidth={1.75} />,
  pipeline: <Network size={28} color="#0891b2" strokeWidth={1.75} />,
  analytics: <LineChart size={28} color="#16a34a" strokeWidth={1.75} />,
};

const dataSolutions = [
  {
    iconKey: "strategy",
    proof: "AI roadmaps & platform strategy",
    title: "Strategy & Consulting",
    description:
      "We assess your data maturity, define an AI roadmap, and architect a platform strategy that aligns technology to business outcomes — before a single line of code is written.",
  },
  {
    iconKey: "modernization",
    proof: "Cloud migration & data quality",
    title: "Data & Cloud Modernization",
    description:
      "Modernize legacy data infrastructure with scalable cloud-native architectures. We handle ETL/ELT pipelines, data quality, governance, and migration to Snowflake, BigQuery, or Databricks.",
  },
  {
    iconKey: "ai",
    proof: "AI agents & workflow automation",
    title: "AI & Automation",
    description:
      "From LLM-powered applications to multi-step AI agents — we build systems that automate complex workflows, reduce manual effort, and embed intelligence directly into your operations.",
  },
  {
    iconKey: "ops",
    proof: "MLOps, LLMOps & AIOps",
    title: "Operationalize & Scale",
    description:
      "Take AI from proof-of-concept to enterprise production. We set up MLOps, LLMOps, and AIOps pipelines to monitor, retrain, and scale AI systems with 99.9% reliability.",
  },
  {
    iconKey: "pipeline",
    proof: "Real-time streaming & batching",
    title: "Data Engineering",
    description:
      "Build robust, scalable data pipelines that ingest, transform, and serve data across your entire stack — streaming with Kafka or batch with Spark, tailored to your throughput needs.",
  },
  {
    iconKey: "analytics",
    proof: "Predictive & prescriptive insights",
    title: "Advanced Analytics & BI",
    description:
      "Turn raw numbers into strategic clarity. Interactive dashboards, predictive models, and self-serve BI tools your teams actually use — built on Tableau, Power BI, or custom UI.",
  },
];

const DataScienceSolutions = () => {
  return (
    <div className="bg-[#f8f9ff] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-themeColor to-transparent"></div>

      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="mb-14 reveal">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase block mb-3 text-themeColor">
            Our Data & AI Capabilities
          </span>
          <h2 className="text-[clamp(30px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] text-[#0d0f1a]">
            End-to-End Data & AI Solutions
          </h2>
          <p className="text-[17px] text-[#6b7280] mt-3 max-w-[560px]">
            From strategy and data modernization to AI agents in production — one team accountable across the entire data-to-AI journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {dataSolutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-themeColor relative overflow-hidden group reveal"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-themeColor to-[#00b4d8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="mb-4">{dataIcons[solution.iconKey]}</div>

              <div className="flex items-center gap-1.5 bg-blue-50 rounded-md px-2.5 py-1.5 mb-4 w-fit">
                <span className="text-themeColor text-xs font-semibold">
                  ✓ {solution.proof}
                </span>
              </div>

              <h4 className="font-Figtree text-base font-bold text-gray-900 mb-2">
                {solution.title}
              </h4>
              <p className="font-Figtree text-[13px] text-colorGray leading-[1.65] mb-4">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataScienceSolutions;
