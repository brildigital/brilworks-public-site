import React from "react";
import { Layers, AlignLeft, CircleDollarSign, Cpu } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Platform migration",
    desc: "Move off Teradata, SQL Server, Hadoop, or legacy warehouses onto a Snowflake or Databricks lakehouse. Migrated in phases, reconciled table by table, with the old system live until you trust the new one.",
    bullets: [
      "Legacy warehouse and Hadoop migration",
      "Reconciled row-by-row, zero silent loss",
      "Phased cutover, no big-bang risk",
    ],
  },
  {
    icon: AlignLeft,
    title: "Data pipeline & ELT engineering",
    desc: "Build and maintain the pipelines that feed your warehouse on dbt, Fivetran, Airflow, and Spark. Tuned to hold up when volume and table count climb, not just on sample data.",
    bullets: [
      "Batch and streaming pipelines",
      "dbt-first, tested transformations",
      "Built to be debugged and owned by your team",
    ],
  },
  {
    icon: CircleDollarSign,
    title: "Cost optimization",
    desc: "Cut Snowflake and Databricks spend 20 to 40% through warehouse right-sizing, auto-suspend, and query tuning. A fixed-price engagement that usually pays for itself in weeks.",
    bullets: [
      "Fixed-price audit, fast payback",
      "Warehouse right-sizing and tuning",
      "Itemized plan, not vague advice",
    ],
  },
  {
    icon: Cpu,
    title: "AI/ML data foundation",
    desc: "Prepare clean, governed data so the AI, agents, and models you build hold up in production instead of breaking on bad inputs. Plus the governance, lineage, and modeling that keep it compliant as you scale.",
    bullets: [
      "Clean, governed, AI-ready data",
      "MLOps and feature pipelines",
      "Access control and lineage built in",
    ],
  },
];

const DataEngineeringServices = () => {
  return (
    <div className="bg-white" id="services">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="text-center max-w-[60ch] mx-auto mb-12 reveal">
          <span className="flex items-center justify-center gap-[9px] font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-themeColor mb-4">
            What we build
          </span>
          <h2
            className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.06] text-[#0B1020] mb-3"
            style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
          >
            Core data engineering services
          </h2>
          <p className="font-Figtree text-[16px] text-[#525a6b] leading-[1.55] m-0">
            Full-lifecycle data engineering, from the pipeline that ingests raw
            data to the AI layer that runs on top of it.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            const isFlipped = i % 2 !== 0;
            return (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-14 items-center reveal ${
                  isFlipped ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Visual */}
                <div className="h-[280px] rounded-2xl border border-[#e4e8f0] relative overflow-hidden bg-gradient-to-br from-[#eaf0ff] to-[#f5f7fb]">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(11,16,32,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(11,16,32,.04) 1px, transparent 1px)",
                      backgroundSize: "26px 26px",
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon
                      className="w-[74px] h-[74px] text-themeColor opacity-85"
                      strokeWidth={1.3}
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-Figtree font-semibold text-[23px] text-[#0B1020] mb-3">
                    {svc.title}
                  </h3>
                  <p className="font-Figtree text-[15.5px] text-[#525a6b] leading-[1.55] mb-4">
                    {svc.desc}
                  </p>
                  <ul className="list-none m-0 p-0">
                    {svc.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="font-Figtree text-[14.5px] text-[#525a6b] py-[7px] pl-[26px] relative before:content-['✓'] before:absolute before:left-0 before:text-themeColor before:font-bold"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DataEngineeringServices;
