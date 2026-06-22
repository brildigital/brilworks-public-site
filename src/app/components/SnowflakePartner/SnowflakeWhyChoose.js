import React from "react";
import {
  LayoutGrid,
  Database,
  ArrowRightLeft,
  ShieldCheck,
  BarChart3,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: LayoutGrid,
    title: "Certified Snowflake partner",
    desc: "Our engineers are Snowflake-certified and have shipped the platform in production, not just trained on it. You get people who have done this before.",
  },
  {
    icon: Database,
    title: "Cost built into the work",
    desc: "We size warehouses, tune queries, and kill idle spend as part of delivery, so the platform you launch is already running lean.",
  },
  {
    icon: ArrowRightLeft,
    title: "Full Snowflake scope",
    desc: "Migration, pipelines, governance, modeling, real-time analytics, and the AI layer on top. One team for the whole platform, not a handoff between vendors.",
  },
  {
    icon: ShieldCheck,
    title: "AI on a foundation that holds",
    desc: "Clean, governed data first, then the models and agents on top of it. AI built on Snowflake data that's actually production-ready.",
  },
  {
    icon: BarChart3,
    title: "Governance from day one",
    desc: "Access controls, lineage, and compliance built in early, so regulated industries like fintech and healthcare pass audit without a retrofit.",
  },
  {
    icon: Users,
    title: "Measurable outcomes",
    desc: "Faster queries, lower bills, AI in production. We deliver against numbers you can point to, not adoption slides.",
  },
];

const SnowflakeWhyChoose = () => {
  return (
    <div className="bg-[#f5f7fb]">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="mb-10 reveal">
          <span className="flex items-center gap-[9px] font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-themeColor mb-4">
            <span className="w-[22px] h-[1px] bg-themeColor inline-block"></span>
            Why enterprises choose us
          </span>
          <h2
            className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.06] text-[#0B1020]"
            style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
          >
            Why enterprises choose Brilworks for Snowflake
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
                  <Icon className="w-[23px] h-[23px] text-themeColor" strokeWidth={1.7} />
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

export default SnowflakeWhyChoose;
