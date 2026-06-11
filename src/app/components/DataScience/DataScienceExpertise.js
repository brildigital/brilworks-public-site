"use client";
import React from "react";
import { Server, Settings, Code, Layers } from "lucide-react";
import Link from "next/link";

const serviceIcons = {
  data: <Server size={28} color="#7c3aed" strokeWidth={1.75} />,
  ml: <Settings size={28} color="#1A5CCC" strokeWidth={1.75} />,
  viz: <Layers size={28} color="#0891b2" strokeWidth={1.75} />,
  engineer: <Code size={28} color="#16a34a" strokeWidth={1.75} />,
};

const serviceCards = [
  {
    iconKey: "data",
    title: "Data Architecture",
    description:
      "Scalable infrastructure designed to handle high-volume data streams securely.",
    tags: ["Snowflake", "BigQuery", "Redshift"],
  },
  {
    iconKey: "ml",
    title: "Predictive Modeling",
    description:
      "Deploy custom machine learning models to forecast trends and automate decisions.",
    tags: ["TensorFlow", "PyTorch", "Scikit-Learn"],
  },
  {
    iconKey: "viz",
    title: "Data Visualization",
    description:
      "Transform complex data sets into intuitive dashboards that drive action.",
    tags: ["Tableau", "Power BI", "D3.js"],
  },
  {
    iconKey: "engineer",
    title: "Data Engineering Teams",
    description:
      "Augment your team with vetted data engineers to build robust pipelines.",
    tags: ["Python", "Spark", "Airflow"],
  },
];

const DataScienceExpertise = () => {
  return (
    <div className="bg-white">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        {/* Section Header */}
        <div className="mb-14 reveal">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase block mb-3 text-themeColor">
            Explore our Data Expertise
          </span>
          <h2 className="text-[clamp(30px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] text-[#0d0f1a]">
            Full-Stack Data Engineering
          </h2>
          <p className="text-[17px] text-[#6b7280] mt-3 max-w-[560px]">
            From raw data to actionable AI models — we cover every layer of the modern data stack.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className="group border border-[#e5e7eb] rounded-2xl p-7 transition-all duration-300 hover:border-themeColor hover:bg-[#e8f0fd] reveal"
            >
              {/* Icon */}
              <div className="mb-3.5">{serviceIcons[card.iconKey]}</div>

              {/* Title */}
              <h4 className="font-Figtree text-[15px] font-bold text-[#0d0f1a] mb-2">
                {card.title}
              </h4>

              {/* Description */}
              <p className="font-Figtree text-[13px] text-[#6b7280] leading-[1.6]">
                {card.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mt-3">
                {card.tags.map((tag) => (
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
