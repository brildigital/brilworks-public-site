import React from "react";
import { Database, LineChart, Cpu, Network, Lightbulb, ShieldCheck } from "lucide-react";
import Link from "next/link";

const dataIcons = {
  pipeline: <Network size={28} color="#0891b2" strokeWidth={1.75} />,
  analytics: <LineChart size={28} color="#16a34a" strokeWidth={1.75} />,
  ml: <Cpu size={28} color="#ea580c" strokeWidth={1.75} />,
  warehouse: <Database size={28} color="#eab308" strokeWidth={1.75} />,
  bi: <Lightbulb size={28} color="#7c3aed" strokeWidth={1.75} />,
  governance: <ShieldCheck size={28} color="#1A5CCC" strokeWidth={1.75} />,
};

const dataSolutions = [
  {
    iconKey: "pipeline",
    proof: "Real-time streaming & batching",
    title: "Data Pipelines & Engineering",
    description:
      "Robust, scalable ETL/ELT pipelines to extract, transform, and load data from multiple sources without latency.",
    link: "/services/data-engineering/",
  },
  {
    iconKey: "analytics",
    proof: "Actionable insights",
    title: "Advanced Analytics",
    description:
      "Uncover hidden patterns in your data with predictive and prescriptive analytics to drive strategic decisions.",
    link: "/services/data-analytics/",
  },
  {
    iconKey: "ml",
    proof: "Custom trained models",
    title: "Machine Learning Solutions",
    description:
      "From recommendation engines to computer vision, we deploy custom ML models tailored to your business needs.",
    link: "/services/machine-learning/",
  },
  {
    iconKey: "warehouse",
    proof: "Optimized storage",
    title: "Data Warehousing & Lakes",
    description:
      "Centralized, secure, and performant data storage architectures using modern cloud technologies like Snowflake & BigQuery.",
    link: "/services/data-warehousing/",
  },
  {
    iconKey: "bi",
    proof: "Interactive dashboards",
    title: "Business Intelligence",
    description:
      "Stunning, interactive dashboards and reports in Tableau, PowerBI, and custom UI that your team actually understands.",
    link: "/services/business-intelligence/",
  },
  {
    iconKey: "governance",
    proof: "Compliance & Security",
    title: "Data Governance & Quality",
    description:
      "Ensure your data is accurate, secure, and compliant with modern privacy standards (GDPR, HIPAA).",
    link: "/services/data-governance/",
  },
];

const DataScienceSolutions = () => {
  return (
    <div className="bg-[#f8f9ff] relative overflow-hidden">
      {/* Top gradient line — blue to teal */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-themeColor via-[#00b4d8] to-transparent"></div>

      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="mb-14 reveal">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase block mb-3 text-themeColor">
            Our Data Capabilities
          </span>
          <h2 className="text-[clamp(30px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] text-[#0d0f1a]">
            End-to-End Data Science Solutions
          </h2>
          <p className="text-[17px] text-[#6b7280] mt-3 max-w-[560px]">
            We help you navigate the entire data journey—from messy, siloed data to clear, predictive intelligence that accelerates your growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {dataSolutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-themeColor relative overflow-hidden group reveal"
            >
              {/* Top gradient bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-themeColor to-[#00b4d8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="mb-4">{dataIcons[solution.iconKey]}</div>

              <div className="flex items-center gap-1.5 bg-blue-50 rounded-md px-2.5 py-1.5 mb-4 w-fit">
                <span className="text-themeColor text-xs font-semibold">
                  ✓ {solution.proof}
                </span>
              </div>

              <h4 className="font-Figtree text-base font-bold text-gray-900 mb-2">
                {solution.title}
              </h4>
              <p className="font-Figtree text-[13px] text-colorGray leading-[1.65] mb-4">
                {solution.description}
              </p>

              <Link
                href={solution.link}
                className="text-sm font-semibold text-themeColor inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataScienceSolutions;
