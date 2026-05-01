import React from "react";
import ButtonV2 from "../Common/ButtonV2";
import Link from "next/link";

const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" fill="#017eeb" opacity="0.15"/>
    <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" stroke="#017eeb" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M9 12L11 14L15 10" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconStar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" stroke="#017eeb" strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>
);
const IconRocket = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4.5 16.5L3 22L8.5 20.5M15.4 8L13 5.6L9.5 9.1L4 14.5C4 16 5 17.5 6.5 18.5C8 19.5 9.5 19.5 11 19.5L16.4 14C18 12.4 18 10 16.5 8.5C15 7 12.6 7 11 8.6Z" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TRUST = [
  { icon: <IconShield />, label: "AWS Consulting Partner" },
  { icon: <IconStar />,   label: "50+ AI Apps Shipped" },
  { icon: <IconRocket />, label: "15+ Models Deployed" },
  { icon: <IconShield />, label: "98% Client Satisfaction" },
];

const STATS = [
  { value: "50+",  label: "AI Apps Shipped" },
  { value: "15+",  label: "Models Deployed" },
  { value: "98%",  label: "Client Satisfaction" },
  { value: "20+",  label: "Countries Served" },
];

function AISolutionsFirstSection({
  title,
  description,
  videoLink,
  buttontext,
  buttonURL,
}) {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="portfolio-hero" aria-labelledby="ai-sol-hero-heading">
        <div className="portfolio-hero-bg" />
        <div className="portfolio-hero-grid" />

        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] grid-cols-1 gap-10 lg:gap-[60px] items-center pt-[160px] pb-20 lg:pb-[100px]">

            {/* Left — text */}
            <div>
              <span className="inline-flex items-center gap-2 bg-[rgba(26,92,204,0.15)] border border-[rgba(26,92,204,0.3)] rounded-full px-[14px] py-[6px] text-[#00b4d8] text-xs font-semibold tracking-[0.1em] !mb-7">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                AI Solutions
              </span>

              <h1
                id="ai-sol-hero-heading"
                className="font-extrabold text-white tracking-[-1.5px] leading-[1.1] !mb-4"
                style={{ fontSize: "clamp(36px, 3.8vw, 54px)" }}
              >
                {title}
              </h1>

              {description && (
                <p className="text-[18px] text-white/60 leading-[1.7] max-w-[600px] !mb-10">
                  {description}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-4 !mb-12">
                <ButtonV2
                  size="large"
                  label={buttontext || "Get Started Now"}
                  redirect={buttonURL?.url || "/contact-us/"}
                  {...(buttonURL?.url ? { target: "_blank" } : {})}
                />
                <Link
                  href="/contact-us/"
                  className="inline-flex items-center whitespace-nowrap rounded-md px-[30px] py-3 font-medium text-white border border-white/20 bg-transparent hover:bg-white/[0.08] hover:border-white/40 transition-all duration-300"
                >
                  Talk to an Expert
                </Link>
              </div>

              <div className="flex flex-wrap gap-[18px]" style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
                {["Free 30-min consultation", "48-hour proposal", "No commitment"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2">
                    <span style={{ color: "#00dbd3" }}><IconCheck /></span>{t}
                  </span>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/[0.08] rounded-xl overflow-hidden border border-white/[0.08] mt-10">
                {STATS.map(({ value, label }, index) => (
                  <div
                    key={index}
                    className="bg-white/[0.03] hover:bg-white/[0.08] transition-colors py-5 px-5 text-center"
                  >
                    <div className="text-white text-[28px] font-extrabold tracking-[-0.5px] leading-none">
                      {value}
                    </div>
                    <div className="text-white/50 text-[12px] mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — video */}
            {videoLink && (
              <div className="hidden lg:block">
                <div
                  className="w-full rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    backdropFilter: "blur(10px)",
                    padding: 8,
                  }}
                >
                  <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: "62%" }}>
                    <iframe
                      className="absolute inset-0 w-full h-full rounded-xl"
                      src={videoLink}
                      title="AI Solution demo"
                      style={{ border: "none" }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile video — shown below text on small screens */}
          {videoLink && (
            <div className="lg:hidden pb-16">
              <div
                className="w-full rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  backdropFilter: "blur(10px)",
                  padding: 8,
                }}
              >
                <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-xl"
                    src={videoLink}
                    title="AI Solution demo"
                    style={{ border: "none" }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────────────── */}
      <section
        aria-label="Trust indicators"
        style={{ background: "#fafafa", borderBottom: "1px solid #e5e7eb", padding: "28px 0" }}
      >
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="flex flex-wrap items-center justify-center" style={{ gap: "12px 40px" }}>
            {TRUST.map((t) => (
              <div
                key={t.label}
                className="inline-flex items-center gap-2 whitespace-nowrap"
                style={{ fontSize: 13, fontWeight: 600, color: "#212121" }}
              >
                {t.icon}{t.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AISolutionsFirstSection;
