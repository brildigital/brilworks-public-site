import React from "react";
import Image from "next/image";
import Link from "next/link";

const cases = [
  {
    tag: "Data Engineering",
    image: "/images/v2/data_engineering_hero.webp",
    title: "Turned a failing nightly pipeline into a 90 minute job",
    body: "A fintech analytics platform rebuilt its data pipeline without downtime. Incremental processing and a redesigned workflow cut costs, reduced alerts, and delivered fresh data before the workday.",
    metric:
      "4× faster pipeline, 60% lower warehouse cost, and ~1 off-hours page per month",
    link: "/case-studies/fintech-pipeline-optimization/",
  },
  {
    tag: "Data Engineering",
    image: "/images/v2/ai_agent_hero.webp",
    title: "When every team has a different answer",
    body: "An omnichannel retailer struggled with disconnected data across twelve systems. We unified every source into a centralized analytics platform with automated pipelines and consistent metrics.",
    metric:
      "85% less reporting time, 5× faster dashboards, and one source of truth",
    link: "/case-studies/ecommerce-analytics-platform/",
  },
  {
    tag: "Data Quality",
    image: "/images/v2/data_agent_hero.webp",
    title: "The dashboard said revenue dropped 40%",
    body: "A growing SaaS company couldn’t trust its analytics because broken pipelines and missing records kept slipping through. We added data quality checks and observability across the entire pipeline.",
    metric:
      "90% fewer bad data incidents and issue detection in under 15 minutes",
    link: "/case-studies/saas-data-quality/",
  },
  {
    tag: "Customer Data Platform",
    image: "/images/v2/data_eng_hero_2.webp",
    title: "Eleven systems. Zero agreement.",
    body: "Customer information lived across eleven different systems. We built a unified customer platform that gave every team one consistent view of accounts, revenue, and engagement.",
    metric:
      "11 systems unified into one platform with 95% less manual reconciliation",
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
          {cases.map((c, i) => (
            <Link
              href={c.link}
              key={i}
              className="border border-[#e4e8f0] rounded-2xl overflow-hidden bg-white hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(11,16,32,0.4)] transition-[transform,box-shadow] duration-300 reveal block"
            >
              {/* Thumbnail */}
              <div className="h-[160px] sm:h-[190px] md:h-[220px] relative overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" /> */}
                <span className="absolute bottom-4 left-4 z-[2] font-mono text-[10.5px] font-semibold tracking-[0.08em] uppercase bg-gray-400 border border-gray-400 rounded-full px-[11px] py-[5px] text-white backdrop-blur-sm">
                  {c.tag}
                </span>
              </div>
              {/* Body */}
              <div className="p-4 sm:p-6">
                <h3 className="font-Figtree font-semibold text-[18px] text-[#0B1020] tracking-[-0.01em] mb-2">
                  {c.title}
                </h3>
                <p className="font-Figtree text-[14px] text-[#525a6b] leading-[1.55] mb-4">
                  {c.body}
                </p>
                <div className="flex gap-2 pt-4 border-t border-[#e4e8f0] font-mono text-[12.5px] font-semibold text-[#0B1020]">
                  <span className="text-[#0d9e6a]">↓</span>
                  {c.metric}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataScienceWork;
