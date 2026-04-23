"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

function TechStackWeWorkWith({
  bgClass = "bg-[#fafafa]",
  active = "",
  title,
  description,
  techStackList = [],
}) {
  const [activeTab, setActiveTab] = useState("all");

  const allItems = techStackList.flatMap((t) => t.items || []);
  const activeItems =
    activeTab === "all"
      ? allItems
      : techStackList.find((t) => t.value === activeTab)?.items || [];

  return (
    <section className={`main-section-padding ${bgClass}`}>
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-themeColor inline-block !mb-3">
            Technology
          </span>
          <h2 className="lg:text-[44px] md:text-[36px] text-[30px] font-extrabold leading-[1.1] tracking-[-1px] text-[#0d0f1a]">
            {title || "Technologies We Use"}
          </h2>
          <p className="text-[17px] text-[#6b7280] mt-3 max-w-[560px] mx-auto leading-[1.6]">
            {description ||
              "Modern, battle-tested stack chosen for scalability, performance, and developer velocity."}
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex gap-2 flex-wrap justify-center !mb-8">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeTab === "all"
                ? "bg-themeColor text-white border-themeColor"
                : "bg-white text-[#6b7280] border-[#e5e7eb] hover:border-themeColor hover:text-themeColor"
            }`}
          >
            All
          </button>
          {techStackList.map(({ title: tabTitle, value }) => (
            <button
              key={value}
              onClick={() => setActiveTab(value)}
              className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === value
                  ? "bg-themeColor text-white border-themeColor"
                  : "bg-white text-[#6b7280] border-[#e5e7eb] hover:border-themeColor hover:text-themeColor"
              }`}
            >
              {tabTitle}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {activeItems.map(({ label, icon, color, iconifyIcon }, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2.5 py-5 px-4 rounded-2xl bg-white border border-[#e5e7eb] text-sm font-medium transition-all duration-300 hover:border-themeColor w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[calc(25%-12px)] lg:w-[calc(16.666%-14px)] xl:w-[calc(12.5%-14px)]"
            >
              {iconifyIcon ? (
                <Image
                  className="w-8 h-8 object-contain"
                  src={iconifyIcon}
                  alt={label}
                  height={32}
                  width={32}
                />
              ) : icon ? (
                <FontAwesomeIcon
                  icon={icon}
                  className="w-8 h-8"
                  style={{ color }}
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-[#e8f0fd] flex items-center justify-center text-xs text-themeColor font-bold">
                  {label?.[0]}
                </div>
              )}
              <span className="text-[#212121] text-center">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStackWeWorkWith;
