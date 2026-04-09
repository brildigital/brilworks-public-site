import React from "react";

const clutchBadges = [
  { icon: "🏆", text: "Top Development Company 2026" },
  { icon: "✅", text: "100% Job Success — Upwork" },
  { icon: "🌟", text: "AWS Advanced Partner" },
  { icon: "🎯", text: "Adalo Expert Certified" },
];

const clutchReviews = [
  {
    role: "COO",
    company: "Eccocar, Spain",
    quote:
      "They were always attentive to adapt to the new development processes of our company. Great technical skills and exceptional communication throughout the engagement.",
  },
  {
    role: "Founder & CEO",
    company: "Acenonyx",
    quote:
      "It was a pleasure working with the team at Brilworks Software. They are incredibly professional, delivered on time, and were very proactive in their communication.",
  },
  {
    role: "CEO",
    company: "Rastrack",
    quote:
      "I don't think there's anything they can improve on — everything works well for us. They feel like an extension of our internal team, not a vendor.",
  },
  {
    role: "Executive",
    company: "Service Buddy",
    quote:
      "Clients really like the new website. The team was transparent, responsive, and delivered exactly what was scoped — no surprises, no scope creep.",
  },
];

const ClutchReviews = () => {
  return (
    <div className="bg-[#f8f9ff] py-20">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
        {/* Section Header */}
        <div className="mb-14 reveal">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase block mb-3 text-themeColor">
            4.8★ on Clutch · Verified Client Reviews
          </span>
          <h2 className="text-[clamp(30px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] text-[#0d0f1a]">
            What Clutch Reviewers Say
          </h2>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] grid-cols-1 gap-10 lg:gap-[60px] items-start">
          {/* Left — Clutch Score Card */}
          <div className="bg-white rounded-2xl p-9 border border-[#e5e7eb] text-center lg:sticky lg:top-24 reveal">
            <div className="font-[family-name:var(--font-heading)] text-[22px] font-extrabold text-[#0d0f1a] mb-4">
              <span className="text-[#e51c34]">clutch</span>.co
            </div>
            <div className="font-[family-name:var(--font-heading)] text-[64px] font-extrabold text-[#0d0f1a] leading-none">
              4.8
            </div>
            <div className="text-[#fbbf24] text-[22px] tracking-[2px] my-2">
              ★★★★★
            </div>
            <div className="font-[family-name:var(--font-body)] text-[13px] text-[#6b7280]">
              Based on 47 verified reviews
            </div>

            {/* Badges */}
            <div className="mt-6 flex flex-col gap-2">
              {clutchBadges.map((badge, index) => (
                <div
                  key={index}
                  className="bg-[#f8f9ff] rounded-lg px-3.5 py-2.5 flex items-center gap-2 font-[family-name:var(--font-body)] text-xs font-semibold text-[#374151]"
                >
                  <span>{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Review Cards */}
          <div className="flex flex-col gap-4">
            {clutchReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white border border-[#e5e7eb] rounded-xl px-6 py-5 transition-shadow duration-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] reveal"
              >
                <div className="flex justify-between items-start mb-2.5">
                  <div>
                    <div className="font-[family-name:var(--font-body)] text-[13px] font-semibold text-[#0d0f1a]">
                      {review.role}
                    </div>
                    <div className="font-[family-name:var(--font-body)] text-xs text-[#6b7280]">
                      {review.company}
                    </div>
                  </div>
                  <div className="text-[#fbbf24] text-[13px]">★★★★★</div>
                </div>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#374151] leading-[1.7] italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClutchReviews;
