import React from "react";
import {
  Layers,
  AlignLeft,
  Warehouse,
  BrainCircuit,
  Sparkles,
  ShieldCheck,
  Activity,
  CircleDollarSign,
  BarChart4,
} from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Migration to Databricks",
    desc: "Move off legacy warehouses, Hadoop, or scattered data lakes onto the lakehouse. We migrate in phases, reconcile against the source, and run parallel until you trust the new platform.",
  },
  {
    icon: AlignLeft,
    title: "Data engineering & pipelines",
    desc: "Build and maintain Spark and Delta Live Tables pipelines that feed the lakehouse, orchestrated and tuned to hold up as volume grows.",
  },
  {
    icon: Warehouse,
    title: "Lakehouse architecture",
    desc: "Design the Delta Lake foundation, medallion layers, and table structure that let analytics and ML run on the same governed data.",
  },
  {
    icon: BrainCircuit,
    title: "ML & MLOps",
    desc: "Take models from notebook to production with MLflow, feature stores, and serving pipelines that stay monitored and reproducible.",
  },
  {
    icon: Sparkles,
    title: "GenAI on Databricks",
    desc: "Build RAG systems, agents, and LLM applications on Mosaic AI, grounded in your own governed data instead of generic models.",
  },
  {
    icon: ShieldCheck,
    title: "Unity Catalog & governance",
    desc: "Centralized access controls, lineage, and audit across every workspace, so the lakehouse stays compliant and consistent as teams grow.",
  },
  {
    icon: Activity,
    title: "Real-time & streaming",
    desc: "Structured Streaming architectures for fraud detection, telemetry, and operational data that has to land and react in seconds.",
  },
  {
    icon: CircleDollarSign,
    title: "Cost optimization",
    desc: "Right-size clusters, tune Spark jobs, and cut idle compute to bring Databricks spend down without slowing anything that matters.",
  },
  {
    icon: BarChart4,
    title: "BI integration",
    desc: "Connect Databricks to Power BI, Tableau, and Looker with Databricks SQL and a clean semantic layer, so every team queries the same source.",
  },
];

const DatabricksServices = () => {
  return (
    <div className="bg-white" id="services">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="mb-11 reveal">
          <span className="flex items-center gap-[9px] font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-themeColor mb-4">
            <span className="w-[22px] h-[1px] bg-themeColor inline-block"></span>
            What we deliver
          </span>
          <h2
            className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.06] text-[#0B1020]"
            style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
          >
            Our Databricks services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-11">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div key={i} className="reveal">
                <div className="w-[34px] h-[34px] mb-[14px]">
                  <Icon className="w-[34px] h-[34px] text-[#0B1020]" strokeWidth={1.6} />
                </div>
                <h3 className="font-Figtree font-semibold text-[17px] text-[#0B1020] m-0 mb-2">
                  {svc.title}
                </h3>
                <p className="font-Figtree text-[14.5px] text-[#525a6b] leading-[1.55] m-0">
                  {svc.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DatabricksServices;
