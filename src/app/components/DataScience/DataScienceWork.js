import React from "react";
import Link from "next/link";
import { ArrowUpRight, TrendingDown, Zap, ShieldCheck, Layers } from "lucide-react";

const cases = [
  {
    tag: "Data Engineering",
    icon: Zap,
    accent: "#1A5CCC",
    title: "Turned a failing nightly pipeline into a 90 minute job",
    body: "A fintech analytics platform rebuilt its data pipeline without downtime. Incremental processing and a redesigned workflow cut costs, reduced alerts, and delivered fresh data before the workday.",
    stats: [
      { value: "4×", label: "Faster pipeline" },
      { value: "60%", label: "Lower cost" },
    ],
    link: "/case-studies/fintech-pipeline-optimization/",
  },
  {
    tag: "Data Engineering",
    icon: Layers,
    accent: "#1A5CCC",
    title: "When every team has a different answer",
    body: "An omnichannel retailer struggled with disconnected data across twelve systems. We unified every source into a centralized analytics platform with automated pipelines and consistent metrics.",
    stats: [
      { value: "85%", label: "Less reporting time" },
      { value: "5×", label: "Faster dashboards" },
    ],
    link: "/case-studies/ecommerce-analytics-platform/",
  },
  {
    tag: "Data Quality",
    icon: ShieldCheck,
    accent: "#0d9e6a",
    title: "The dashboard said revenue dropped 40%",
    body: "A growing SaaS company couldn't trust its analytics because broken pipelines and missing records kept slipping through. We added data quality checks and observability across the entire pipeline.",
    stats: [
      { value: "90%", label: "Fewer bad data" },
      { value: "<15m", label: "Issue detection" },
    ],
    link: "/case-studies/saas-data-quality/",
  },
  {
    tag: "Customer Data Platform",
    icon: TrendingDown,
    accent: "#7c3aed",
    title: "Eleven systems. Zero agreement.",
    body: "Customer information lived across eleven different systems. We built a unified customer platform that gave every team one consistent view of accounts, revenue, and engagement.",
    stats: [
      { value: "11→1", label: "Systems unified" },
      { value: "95%", label: "Less reconciliation" },
    ],
    link: "/case-studies/customer-data-platform/",
  },
];

const DataScienceWork = () => {
  return (
    <div className="bg-[#f5f7fb]" id="work">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="mb-9 reveal">
          <span className="flex items-center gap-[9px] font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-themeColor mb-4">
            Work that speaks for itself
          </span>
          <h2
            className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.06] text-[#0B1020] mb-3"
            style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
          >
            Three builds, one through-line.
          </h2>
          <p className="font-Figtree text-[#525a6b] text-[16px] leading-[1.55] max-w-[62ch]">
            A pure-data rebuild, an agent shipped into production, and one
            project that ran the whole arc end to end. Every metric says how we
            got there.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <Link
                href={c.link}
                key={i}
                className="group relative border border-[#e4e8f0] rounded-2xl bg-white overflow-hidden hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(11,16,32,0.4)] transition-[transform,box-shadow] duration-300 reveal block"
              >
                {/* Top accent bar */}
                <div
                  className="h-[3px] w-full"
                  style={{ background: `linear-gradient(90deg, ${c.accent}, ${c.accent}66)` }}
                />

                {/* Decorative number */}
                <span className="absolute top-5 right-6 font-Figtree text-[72px] font-extrabold leading-none text-[#f0f2f6] select-none group-hover:text-[#e8ecf4] transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="p-6 sm:p-7 flex flex-col h-full relative z-[1]">
                  {/* Icon + Tag */}
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${c.accent}12` }}
                    >
                      <Icon className="w-[20px] h-[20px]" style={{ color: c.accent }} />
                    </span>
                    <span
                      className="font-mono text-[11px] font-semibold tracking-[0.08em] uppercase"
                      style={{ color: c.accent }}
                    >
                      {c.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-Figtree font-bold text-[20px] text-[#0B1020] tracking-[-0.02em] mb-3 leading-[1.3] max-w-[90%]">
                    {c.title}
                  </h3>

                  {/* Body */}
                  <p className="font-Figtree text-[14px] text-[#525a6b] leading-[1.65] mb-6 flex-1">
                    {c.body}
                  </p>

                  {/* Stats row */}
                  <div className="flex gap-6 pt-5 border-t border-[#e4e8f0]">
                    {c.stats.map((s, j) => (
                      <div key={j}>
                        <div
                          className="font-Figtree text-[24px] font-extrabold tracking-[-0.02em] leading-none mb-1"
                          style={{ color: c.accent }}
                        >
                          {s.value}
                        </div>
                        <div className="font-mono text-[11px] text-[#8a91a1] tracking-[0.04em]">
                          {s.label}
                        </div>
                      </div>
                    ))}

                    {/* Arrow */}
                    <div className="ml-auto self-center">
                      <span className="w-9 h-9 rounded-full border border-[#e4e8f0] group-hover:border-transparent group-hover:bg-[#0B1020] flex items-center justify-center transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 text-[#8a91a1] group-hover:text-white transition-colors duration-300" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DataScienceWork;
