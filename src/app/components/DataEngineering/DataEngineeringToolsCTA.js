import React from "react";
import Link from "next/link";
import {
  Calculator,
  Cpu,
  ArrowRightLeft,
  ShieldCheck,
  BarChart3,
  GitCompare,
} from "lucide-react";

const tools = [
  { icon: Calculator, name: "Snowflake Cost Estimator" },
  { icon: BarChart3, name: "Databricks Cost Estimator" },
  { icon: Cpu, name: "AI Readiness Audit" },
  { icon: ArrowRightLeft, name: "Migration Cost Calculator" },
  { icon: ShieldCheck, name: "Data Quality Assessment" },
  { icon: GitCompare, name: "Snowflake vs Databricks Advisor" },
];

const DataEngineeringToolsCTA = () => {
  return (
    <div className="bg-white">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="text-center max-w-[60ch] mx-auto mb-12 reveal">
          <span className="flex items-center justify-center gap-[9px] font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-themeColor mb-4">
            <span className="w-[22px] h-[1px] bg-themeColor inline-block"></span>
            Free tools
          </span>
          <h2
            className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.06] text-[#0B1020] mb-3"
            style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
          >
            Size up your data stack before you commit
          </h2>
          <p className="font-Figtree text-[16px] text-[#525a6b] leading-[1.55] m-0">
            Free calculators and assessments for Snowflake and Databricks teams.
            Get numbers in minutes, no sales call required.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-4 bg-[#f5f7fb] border border-[#e4e8f0] rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-themeColor"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-[#e4e8f0] flex items-center justify-center shrink-0">
                  <Icon
                    className="w-5 h-5 text-themeColor"
                    strokeWidth={1.7}
                  />
                </div>
                <span className="font-Figtree font-semibold text-[15px] text-[#0B1020]">
                  {tool.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10 reveal">
          <Link
            href="/data-engineering-tools/"
            className="c-button outline-none overflow-hidden whitespace-nowrap transition-all duration-300 c-btn-primary c-btn-large"
          >
            Explore all tools &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataEngineeringToolsCTA;
