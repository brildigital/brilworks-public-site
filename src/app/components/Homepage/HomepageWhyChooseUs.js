import React from "react";

const whyItems = [
  {
    num: "01",
    stat: "98%",
    title: "Project Success Rate",
    description:
      "Across 120+ projects over 8 years — only 2 in 100 miss the mark. Track record you can verify on Clutch.",
    badge: "Clutch-verified",
  },
  {
    num: "02",
    stat: "Week 1",
    title: "Prototype — Guaranteed",
    description:
      "You test with real data before committing a single additional dollar. No more 3-month spec documents before you see anything.",
    badge: "Contractual commitment",
  },
  {
    num: "03",
    stat: "4+ yrs",
    title: "Average Client Relationship",
    description:
      "David Velasquez, CEO Rastrack: 'They are always available.' Long relationships happen when clients get results.",
    badge: "Client-verified",
  },
  {
    num: "04",
    stat: "AWS ✓",
    title: "Certified on the Platforms You Build On",
    description:
      "AWS Advanced Partner. Adalo Expert. Linnworks Partner. Verified by the platforms themselves — not self-reported.",
    badge: "Third-party certified",
  },
  {
    num: "05",
    stat: "17K+",
    title: "Hours Delivered",
    description:
      "Across EdTech, Fintech, Healthcare and E-Commerce. That is depth — not just a list of logos on a slide.",
    badge: "Upwork-logged",
  },
  {
    num: "06",
    stat: "100%",
    title: "Job Success on Upwork · 4.8★ Clutch",
    description:
      "Third-party verified. Two independent platforms agree. You can read every review — nothing is curated or hidden.",
    badge: "Public · Unedited",
  },
];

const HomepageWhyChooseUs = () => {
  return (
    <div className="bg-white">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        {/* Section Header */}
        <div className="mb-14 reveal">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase block mb-3 text-themeColor">
            Why Choose Brilworks?
          </span>
          <h2 className="text-[clamp(30px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] text-[#0d0f1a]">
            Six Reasons — All Verifiable
          </h2>
          <p className="text-[17px] text-[#6b7280] mt-3 max-w-[560px]">
            Not marketing claims. Every point below is backed by a stat, a
            client, or a certification.
          </p>
        </div>

        {/* Why Grid — 2x3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] rounded-2xl overflow-hidden border border-[#e5e7eb]">
          {whyItems.map((item, index) => (
            <div
              key={index}
              className={`p-9 bg-white border-r border-b border-[#e5e7eb] transition-colors duration-200 hover:bg-[#e8f0fd] relative group reveal ${
                index % 2 === 1 ? "border-r-0" : ""
              } ${index >= 4 ? "border-b-0" : ""}`}
            >
              {/* Number */}
              <div className="font-[family-name:var(--font-heading)] text-5xl font-extrabold text-[#e5e7eb] leading-none mb-4">
                {item.num}
              </div>

              {/* Stat */}
              <div className="font-[family-name:var(--font-heading)] text-[28px] font-extrabold text-themeColor mb-1.5">
                {item.stat}
              </div>

              {/* Title */}
              <h4 className="font-[family-name:var(--font-heading)] text-[17px] font-bold text-[#0d0f1a] mb-2">
                {item.title}
              </h4>

              {/* Description */}
              <p className="font-[family-name:var(--font-body)] text-[13px] text-[#6b7280] leading-[1.7]">
                {item.description}
              </p>

              {/* Badge */}
              <span className="inline-flex items-center gap-1.5 bg-[#d1fae5] rounded-full px-2.5 py-1 text-[11px] font-semibold text-[#065f46] mt-2.5">
                ✓ {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomepageWhyChooseUs;
