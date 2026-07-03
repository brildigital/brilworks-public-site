import React from "react";
import { ShieldCheck, Star, Rocket, Check } from "lucide-react";
import ButtonV2 from "../Common/ButtonV2";
import Link from "next/link";
import "../../styles/ServiceLightTheme.css";

const IconShield = () => <ShieldCheck size={18} color="#017eeb" strokeWidth={1.8} aria-hidden="true" />;
const IconStar = () => <Star size={18} color="#017eeb" strokeWidth={1.8} aria-hidden="true" />;
const IconRocket = () => <Rocket size={18} color="#017eeb" strokeWidth={1.8} aria-hidden="true" />;
const IconCheck = () => <Check size={16} strokeWidth={2.2} aria-hidden="true" />;

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
      <section className="svc-hero-bg relative overflow-hidden" aria-labelledby="ai-sol-hero-heading">
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] grid-cols-1 gap-10 lg:gap-[60px] items-center pt-[160px] pb-20 lg:pb-[100px]">

            {/* Left — text */}
            <div>
              <span
                className="inline-flex items-center gap-2 rounded-full px-[14px] py-[6px] text-xs font-semibold tracking-[0.1em] !mb-7"
                style={{ background: "#ffffff", border: "1px solid #e4eaf1", color: "#566678", boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)" }}
              >
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                AI Solutions
              </span>

              <h1
                id="ai-sol-hero-heading"
                className="font-extrabold tracking-[-1.5px] leading-[1.1] !mb-4"
                style={{ fontSize: "clamp(36px, 3.8vw, 54px)", color: "#0b1e33" }}
              >
                {title}
              </h1>

              {description && (
                <p className="text-[18px] leading-[1.7] max-w-[600px] !mb-10" style={{ color: "#566678" }}>
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
                  className="inline-flex items-center whitespace-nowrap rounded-md px-[30px] py-3 font-medium transition-all duration-300"
                  style={{ color: "#0b1e33", border: "1px solid #e4eaf1", background: "#ffffff" }}
                >
                  Talk to an Expert
                </Link>
              </div>

              <div className="flex flex-wrap gap-[18px]" style={{ color: "#6b7a8a", fontSize: 14 }}>
                {["Free 30-min consultation", "48-hour proposal", "No commitment"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2">
                    <span style={{ color: "#2f6bff" }}><IconCheck /></span>{t}
                  </span>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {STATS.map(({ value, label }, index) => (
                  <div
                    key={index}
                    className="rounded-2xl transition-all svc-stat-card text-center"
                    style={{ padding: "18px 12px" }}
                  >
                    <div className="font-extrabold tracking-[-0.5px] leading-none" style={{ color: "#2f6bff", fontSize: 26 }}>
                      {value}
                    </div>
                    <div style={{ color: "#6b7a8a", fontSize: 12, marginTop: 6 }}>{label}</div>
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
                    background: "#ffffff",
                    border: "1px solid #e4eaf1",
                    boxShadow: "0 4px 24px rgba(11,30,51,0.08)",
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
                  background: "#ffffff",
                  border: "1px solid #e4eaf1",
                  boxShadow: "0 4px 24px rgba(11,30,51,0.08)",
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
