import React from "react";
import {
  Layers,
  AlignLeft,
  CircleDollarSign,
  Cpu,
  ShieldCheck,
  Activity,
  BarChart4,
  Sun,
  Code2,
} from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Migration to Snowflake",
    desc: "Move off Teradata, SQL Server, Hadoop, or legacy warehouses onto Snowflake. We migrate in phases, reconcile every table against the source, and keep the old system running until you trust the new one.",
  },
  {
    icon: AlignLeft,
    title: "Data engineering & pipelines",
    desc: "Build and maintain the ELT pipelines that feed Snowflake on dbt, Fivetran, and Airflow. Tuned to hold up when volume and table count climb.",
  },
  {
    icon: CircleDollarSign,
    title: "Cost optimization",
    desc: "Cut Snowflake spend 20 to 40% through warehouse right-sizing, auto-suspend, and query tuning. Fixed-price engagement, results in weeks.",
  },
  {
    icon: Cpu,
    title: "AI/ML data foundation",
    desc: "Prepare clean, governed data in Snowflake so the AI, agents, and models you build on top of it hold up in production instead of breaking on bad inputs.",
  },
  {
    icon: ShieldCheck,
    title: "Governance & modeling",
    desc: "Warehouse design, access controls, lineage, and dbt modeling that keep Snowflake compliant and consistent as your team and data grow.",
  },
  {
    icon: Activity,
    title: "Real-time analytics",
    desc: "Streaming architectures on Snowflake for fraud detection, telemetry, and operational dashboards that reflect what's happening now, not last night.",
  },
  {
    icon: BarChart4,
    title: "BI integration & visualization",
    desc: "Connect Snowflake to Power BI, Tableau, and Looker with optimized query patterns and a clean semantic layer, so reports load fast and every team reads the same numbers.",
  },
  {
    icon: Sun,
    title: "Managed services & support",
    desc: "Ongoing monitoring, performance tuning, and proactive cost control after launch, so the platform stays fast and cheap to run.",
  },
  {
    icon: Code2,
    title: "Training & enablement",
    desc: "Hands-on workshops and certification prep that build Snowflake capability inside your own team, so you depend on us less over time.",
  },
];

const SnowflakeServices = () => {
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
            Our Snowflake services
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

export default SnowflakeServices;
