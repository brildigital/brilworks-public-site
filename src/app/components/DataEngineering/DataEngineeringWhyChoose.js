import React from "react";
import {
  ShieldCheck,
  CircleDollarSign,
  Layers,
  BarChart3,
  Lock,
  Plus,
  Clock,
  Activity,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Certified on both platforms",
    desc: "Snowflake and Databricks certified, with production shipping history, not just training badges.",
  },
  {
    icon: CircleDollarSign,
    title: "Cost built into delivery",
    desc: "We size, tune, and cut idle spend as part of the work, so what you launch already runs lean.",
  },
  {
    icon: Layers,
    title: "Full scope, one team",
    desc: "Migration, pipelines, governance, and the AI layer. No handoff between three vendors.",
  },
  {
    icon: BarChart3,
    title: "Measurable outcomes",
    desc: "Faster queries, lower bills, AI in production. Numbers you can point to, not adoption slides.",
  },
  {
    icon: Lock,
    title: "Governance from day one",
    desc: "Access control and lineage early, so fintech and healthcare pass audit without a retrofit.",
  },
  {
    icon: Plus,
    title: "Zero lock-in",
    desc: "We build on your cloud and your repo. You own the whole stack when we leave.",
  },
  {
    icon: Clock,
    title: "Results in weeks",
    desc: "A first trustworthy dashboard or a measured cost cut lands in weeks, not quarters.",
  },
  {
    icon: Activity,
    title: "Real-time when it matters",
    desc: "Streaming pipelines for the workloads that cannot wait for a nightly batch.",
  },
];

const DataEngineeringWhyChoose = () => {
  return (
    <div className="bg-[#f5f7fb]" id="why">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="text-center max-w-[60ch] mx-auto mb-12 reveal">
          <span className="flex items-center justify-center gap-[9px] font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-themeColor mb-4">
            <span className="w-[22px] h-[1px] bg-themeColor inline-block"></span>
            Why Brilworks
          </span>
          <h2
            className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.06] text-[#0B1020] mb-3"
            style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
          >
            Data engineers who ship, then stay accountable
          </h2>
          <p className="font-Figtree text-[16px] text-[#525a6b] leading-[1.55] m-0">
            We do not just hand over a diagram. We engineer the platform and
            stand behind the numbers it produces.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="bg-white border border-[#e4e8f0] rounded-[14px] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(11,16,32,0.3)] hover:border-[#dce7ff] reveal"
              >
                <div className="w-9 h-9 rounded-[9px] bg-[#f5f7fb] flex items-center justify-center mb-[14px]">
                  <Icon
                    className="w-[19px] h-[19px] text-themeColor"
                    strokeWidth={1.7}
                  />
                </div>
                <h3 className="font-Figtree font-semibold text-[15.5px] text-[#0B1020] mb-[6px] m-0">
                  {r.title}
                </h3>
                <p className="font-Figtree text-[13.5px] text-[#525a6b] leading-[1.5] m-0">
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

export default DataEngineeringWhyChoose;
