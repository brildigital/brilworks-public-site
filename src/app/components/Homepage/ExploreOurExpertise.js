"use client";
import React from "react";
import Link from "next/link";

const SvgIcon = ({ color, children }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const serviceIcons = {
  mobile: <SvgIcon color="#7c3aed"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></SvgIcon>,
  web: <SvgIcon color="#1A5CCC"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></SvgIcon>,
  cloud: <SvgIcon color="#0891b2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></SvgIcon>,
  team: <SvgIcon color="#16a34a"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></SvgIcon>,
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
    link: "/web-application-development-services/",
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
    iconKey: "team",
    title: "Staff Augmentation",
    description:
      "Extend your team with pre-vetted developers — on your timezone.",
    tags: ["Dedicated Team", "Flexible"],
    link: "/dedicated-development-team/",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
