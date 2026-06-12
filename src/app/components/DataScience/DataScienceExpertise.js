"use client";
import React from "react";
import { Search, Layers, Zap, TrendingUp } from "lucide-react";

const methodologySteps = [
  {
    step: "01",
    icon: <Search size={28} color="#7c3aed" strokeWidth={1.75} />,
    title: "Assess",
    subtitle: "Data Readiness & Problem Framing",
    description:
      "We map your data landscape, identify gaps, and assess AI readiness. You get a clear problem statement and a prioritized roadmap — before any engineering begins.",
    tags: ["Data Audit", "Gap Analysis", "AI Roadmap"],
  },
  {
    step: "02",
    icon: <Layers size={28} color="#1A5CCC" strokeWidth={1.75} />,
    title: "Architect",
    subtitle: "Scalable Foundations & Quick Wins",
    description:
      "We design cloud-native data infrastructure and deliver early wins — clean pipelines, a governed data layer, and foundational ML models that prove value fast.",
    tags: ["Data Platform", "Cloud Migration", "Governance"],
  },
  {
    step: "03",
    icon: <Zap size={28} color="#ea580c" strokeWidth={1.75} />,
    title: "Automate",
    subtitle: "AI Agents & Workflow Intelligence",
    description:
      "AI moves into production. We build and deploy AI agents, LLM-powered applications, and automation workflows that replace manual processes at scale.",
    tags: ["AI Agents", "LLM Apps", "Workflow Automation"],
  },
  {
    step: "04",
    icon: <TrendingUp size={28} color="#16a34a" strokeWidth={1.75} />,
    title: "Scale",
    subtitle: "Measure Impact & Expand AI Footprint",
    description:
      "We instrument your AI systems with MLOps and LLMOps tooling, measure ROI, retrain models, and help you expand AI across every department that can benefit.",
    tags: ["MLOps", "LLMOps", "AIOps"],
  },
];

const DataScienceExpertise = () => {
  return (
    <div className="bg-white">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        {/* Section Header */}
        <div className="mb-14 reveal">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase block mb-3 text-themeColor">
            Our Methodology
          </span>
          <h2 className="text-[clamp(30px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] text-[#0d0f1a]">
            From Data Chaos to AI in Production
          </h2>
          <p className="text-[17px] text-[#6b7280] mt-3 max-w-[560px]">
            A structured, four-phase approach that takes you from raw, siloed data to enterprise-grade AI — with measurable outcomes at every step.
          </p>
        </div>

        {/* Methodology Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {methodologySteps.map((item, index) => (
            <div
              key={index}
              className="group border border-[#e5e7eb] rounded-2xl p-7 transition-all duration-300 hover:border-themeColor hover:bg-[#e8f0fd] reveal relative overflow-hidden"
            >
              {/* Step number — large background watermark */}
              <span className="absolute top-4 right-5 text-[52px] font-extrabold text-[#f0f2fa] group-hover:text-[#d6e4fb] leading-none select-none transition-colors duration-300">
                {item.step}
              </span>

              {/* Icon */}
              <div className="mb-3.5 relative z-[1]">{item.icon}</div>

              {/* Title */}
              <h4 className="font-Figtree text-[17px] font-extrabold text-[#0d0f1a] mb-1 relative z-[1]">
                {item.title}
              </h4>

              {/* Subtitle */}
              <p className="font-Figtree text-[11px] font-semibold text-themeColor uppercase tracking-[0.08em] mb-3 relative z-[1]">
                {item.subtitle}
              </p>

              {/* Description */}
              <p className="font-Figtree text-[13px] text-[#6b7280] leading-[1.6] relative z-[1]">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mt-4 relative z-[1]">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-Figtree text-[10px] font-semibold text-[#6b7280] bg-[#f8f9ff] px-1.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataScienceExpertise;
