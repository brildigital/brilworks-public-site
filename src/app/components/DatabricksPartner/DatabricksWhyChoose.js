import React from "react";
import {
  LayoutGrid,
  Scaling,
  ArrowRightLeft,
  BrainCircuit,
  ShieldCheck,
  CircleDollarSign,
} from "lucide-react";

const reasons = [
  {
    icon: LayoutGrid,
    title: "Certified Databricks partner",
    desc: "Our engineers are Databricks-certified and have shipped Spark, Delta, and MLflow in production, not just trained on them. You get people who have done this before.",
  },
  {
    icon: Scaling,
    title: "Built for scale",
    desc: "Databricks earns its keep on heavy workloads. We design Spark jobs and Delta tables that stay fast and predictable as data volume climbs into billions of rows.",
  },
  {
    icon: ArrowRightLeft,
    title: "Full lakehouse scope",
    desc: "Migration, Spark pipelines, Unity Catalog, ML, and GenAI on top. One team for the whole lakehouse, not a handoff between vendors.",
  },
  {
    icon: BrainCircuit,
    title: "ML and GenAI to production",
    desc: "Most models die in notebooks. We build the MLOps, feature pipelines, and serving layer that get them deployed, monitored, and actually used.",
  },
  {
    icon: ShieldCheck,
    title: "Governance from day one",
    desc: "Unity Catalog access controls, lineage, and audit built in early, so regulated industries like fintech and healthcare pass review without a retrofit.",
  },
  {
    icon: CircleDollarSign,
    title: "Cost under control",
    desc: "We right-size clusters, tune jobs, and cut idle compute, so the platform scales without the bill scaling with it.",
  },
];

const DatabricksWhyChoose = () => {
  return (
    <div className="bg-[#f5f7fb]">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="mb-10 reveal">
          <span className="flex items-center gap-[9px] font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-themeColor mb-4">
            Why enterprises choose us
          </span>
          <h2
            className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.06] text-[#0B1020]"
            style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
          >
            Why enterprises choose Brilworks for Databricks
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="grid grid-cols-[46px_1fr] lg:grid-cols-[56px_1fr_1.4fr] gap-x-6 gap-y-2 items-center bg-white rounded-xl p-6 reveal"
              >
                <div className="w-[46px] h-[46px] rounded-[10px] bg-[#f5f7fb] border border-[#e4e8f0] flex items-center justify-center">
                  <Icon
                    className="w-[23px] h-[23px] text-themeColor"
                    strokeWidth={1.7}
                  />
                </div>
                <h3 className="font-Figtree font-semibold text-[18px] text-[#0B1020] m-0 leading-[1.25]">
                  {r.title}
                </h3>
                <p className="font-Figtree text-[15px] text-[#525a6b] m-0 col-span-full lg:col-span-1">
                  {r.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DatabricksWhyChoose;
