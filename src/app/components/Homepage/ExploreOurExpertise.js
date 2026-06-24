"use client";
import React from "react";
import { Smartphone, Globe, Cloud, Users, Database } from "lucide-react";
import Link from "next/link";

const serviceIcons = {
  mobile: <Smartphone size={28} color="#7c3aed" strokeWidth={1.75} />,
  web: <Globe size={28} color="#1A5CCC" strokeWidth={1.75} />,
  cloud: <Cloud size={28} color="#0891b2" strokeWidth={1.75} />,
  team: <Users size={28} color="#16a34a" strokeWidth={1.75} />,
  data: <Database size={28} color="#017eeb" strokeWidth={1.75} />,
};

const serviceCards = [
  {
    iconKey: "mobile",
    title: "Mobile App Development",
    description:
      "iOS, Android, React Native — apps that users actually want to open.",
    tags: ["iOS", "Android", "React Native"],
    link: "/react-native-app-development-services/",
  },
  {
    iconKey: "web",
    title: "Web & SaaS Development",
    description:
      "Scalable web apps and SaaS platforms built for growth from day one.",
    tags: ["React", "Node.js", "AWS"],
    link: "/web-app-development-services/",
  },
  {
    iconKey: "cloud",
    title: "Cloud & DevOps",
    description:
      "AWS architecture, CI/CD pipelines, Kubernetes — reliability at scale.",
    tags: ["AWS", "Kubernetes", "DevOps"],
    link: "/aws-consulting-services/",
  },
  {
    iconKey: "data",
    title: "Data Engineering",
    description:
      "Pipelines, warehouses, and cost optimization on Snowflake & Databricks.",
    tags: ["Snowflake", "Databricks", "dbt"],
    link: "/data-engineering-services/",
  },
  {
    iconKey: "team",
    title: "Staff Augmentation",
    description:
      "Extend your team with pre-vetted developers — on your timezone.",
    tags: ["Dedicated Team", "Flexible"],
    link: "/hire-dedicated-software-development-team/",
  },
];

const ExploreOurExpertise = () => {
  return (
    <div className="bg-white">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        {/* Section Header */}
        <div className="mb-14 reveal">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase block mb-3 text-themeColor">
            Explore our Expertise
          </span>
          <h2 className="text-[clamp(30px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] text-[#0d0f1a]">
            Full-Stack Software Engineering
          </h2>
          <p className="text-[17px] text-[#6b7280] mt-3 max-w-[560px]">
            From MVP to enterprise scale — we cover every layer of the modern
            technology stack.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {serviceCards.map((card, index) => (
            <Link
              href={card.link}
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreOurExpertise;
