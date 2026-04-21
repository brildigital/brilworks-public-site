"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { scrollEffect } from "../lib/commonFunction";
import { portfolioDynamicItems } from "../lib/constants";

const gradients = [
  "bg-gradient-to-br from-[#667eea] to-[#764ba2]",
  "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
  "bg-gradient-to-br from-[#4facfe] to-[#00f2fe]",
  "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
];

const SeeingBelieving = ({
  title,
  bgClass,
  caseStudyToShow = 4,
  buttonText = "Explore all Case Studies",
}) => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  const caseStudies = portfolioDynamicItems?.slice(0, caseStudyToShow);

  return (
    <div className="bg-white">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        {/* Section Header */}
        <div className="mb-14 reveal">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase block mb-3 text-themeColor">
            {title || "Because Seeing is Believing"}
          </span>
          <h2 className="text-[clamp(30px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] text-[#0d0f1a]">
            Work That Speaks For Itself
          </h2>
          <p className="text-[17px] text-[#6b7280] mt-3 max-w-[560px]">
            Named clients. Verified outcomes. Not just pretty screenshots.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {caseStudies?.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="group border border-[#e5e7eb] rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_64px_rgba(0,0,0,0.1)] cursor-pointer reveal"
            >
              {/* Image Area */}
              <div
                className={`h-[200px] flex items-center justify-center relative overflow-hidden ${gradients[index % gradients.length]}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt || `case-study-${index}`}
                  fill
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex gap-2 mb-3">
                  {item.technology?.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="font-Figtree text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 rounded-full bg-[#e8f0fd] text-themeColor"
                    >
                      {tech}
                    </span>
                  ))}
                  <span className="font-Figtree text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 rounded-full bg-[#d1fae5] text-[#065f46]">
                    {item.industry}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-Figtree text-[17px] font-bold text-[#0d0f1a] leading-[1.3] mb-2">
                  {item.title}
                </h3>

                {/* Client */}
                {item.clientName && (
                  <p className="font-Figtree text-[13px] text-[#6b7280] mb-3">
                    {item.clientName}
                  </p>
                )}

                {/* Metric */}
                {item.metric && (
                  <div className="flex items-center gap-2 bg-[#d1fae5] rounded-lg px-3.5 py-2.5">
                    <span className="font-Figtree text-[22px] font-extrabold text-[#065f46]">
                      {item.metric.split(" ")[0]}
                    </span>
                    <span className="font-Figtree text-xs text-[#065f46] font-medium">
                      {item.metric.split(" ").slice(1).join(" ")}
                    </span>
                  </div>
                )}

                {/* Link */}
                <div className="flex items-center gap-1.5 text-[13px] font-semibold text-themeColor mt-4 group-hover:gap-2.5 transition-all duration-200">
                  View case study →
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SeeingBelieving;
