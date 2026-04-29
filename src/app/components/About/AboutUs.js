"use client";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";
import Image from "next/image";
import IndustriesWeServe from "../Homepage/IndustriesWeServe";
import CTASection from "../Common/CTASection";
import MeetOurTeam from "./MeetOurTeam";
import Link from "next/link";
import ButtonV2 from "../Common/ButtonV2";

// ── Inline SVG icons ──────────────────────────────────────────────────────────
const IconShield = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z"
      fill="#017eeb"
      opacity="0.15"
    />
    <path
      d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z"
      stroke="#017eeb"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M9 12L11 14L15 10"
      stroke="#017eeb"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const IconStar = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z"
      stroke="#017eeb"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);
const IconTeam = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="9" cy="8" r="4" stroke="#017eeb" strokeWidth="1.8" />
    <circle cx="17" cy="9" r="3" stroke="#017eeb" strokeWidth="1.8" />
    <path
      d="M2 21V19C2 16.8 3.8 15 6 15H12C14.2 15 16 16.8 16 19V21M16 21V19C16 17 14.5 15.5 12.5 15.2M22 21V19C22 17 20.5 15.5 18.5 15.2"
      stroke="#017eeb"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);
const IconCheck = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M20 6L9 17L4 12"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────
const TRUST = [
  { icon: <IconShield />, label: "AWS Consulting Partner" },
  { icon: <IconStar />, label: "120+ Projects Completed" },
  { icon: <IconTeam />, label: "60+ Expert Engineers" },
  { icon: <IconShield />, label: "98% Client Satisfaction" },
];

const STATS = [
  { value: "60+", label: "Expert Engineers" },
  { value: "120+", label: "Projects Completed" },
  { value: "8+", label: "Years of Experience" },
  { value: "98%", label: "Project Success Rate" },
];

const MISSION_VISION = [
  {
    icon: "/images/v2/our-mission.webp",
    badge: "Our Mission",
    heading: "Empowering Businesses to Build What Matters",
    body: "To empower businesses and startups with exceptional products that wow customers — through expertise, innovation, and a relentless focus on quality.",
    features: [
      "Customer-first thinking",
      "Outcome-driven delivery",
      "End-to-end ownership",
    ],
    reverse: false,
  },
  {
    icon: "/images/v2/our-vision.webp",
    badge: "Our Vision",
    heading: "A World Where Great Tech Is Accessible to Every Builder",
    body: "To be the engineering partner every founder and product team reaches for — not just for code, but for clarity, momentum, and confidence.",
    features: [
      "Long-term partnerships",
      "Transparent communication",
      "Continuous innovation",
    ],
    reverse: true,
  },
];

const BELIEFS = [
  {
    title: "Trustworthy Partnership",
    tint: "#e8f0fd",
    icon: "/images/v2/partnership.png",
    body: "We build lasting, trusted partnerships by providing top talent, expertise, and innovative solutions to tackle complex challenges with confidence.",
  },
  {
    title: "High Caliber Talent",
    tint: "#ede9fe",
    icon: "/images/v2/medal-star.svg",
    body: "We hire top talent to drive our vision, staying ahead with rising technologies to ensure innovation, excellence, and exceptional customer service.",
  },
  {
    title: "Growth Mindset",
    tint: "#d1fae5",
    icon: "/images/v2/growth-midset-img.png",
    body: "We provide end-to-end solutions, from strategy to execution, crafting intuitive experiences that align with your vision.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const AboutUs = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => window.removeEventListener("scroll", scrollEffect);
  }, []);

  return (
    <>
      {/* ── HERO (portfolio-hero dark theme) ────────────────────────────────── */}
      <section className="portfolio-hero" aria-labelledby="about-hero-heading">
        <div className="portfolio-hero-bg" />
        <div className="portfolio-hero-grid" />
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] grid-cols-1 gap-10 lg:gap-[60px] items-center pt-[160px] pb-20 lg:pb-[100px]">
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2 bg-[rgba(26,92,204,0.15)] border border-[rgba(26,92,204,0.3)] rounded-full px-[14px] py-[6px] text-[#00b4d8] text-xs font-semibold tracking-[0.1em] !mb-7">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                Trusted by 120+ companies across 20 countries
              </span>

              <h1
                id="about-hero-heading"
                className="font-extrabold text-white tracking-[-1.5px] leading-[1.1] !mb-4"
                style={{ fontSize: "clamp(36px, 3.8vw, 54px)" }}
              >
                Your Tech Partner in a{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #017eeb, #00ffff)",
                  }}
                >
                  Fast Changing
                </span>{" "}
                World.
              </h1>

              <p className="text-[18px] text-white/60 leading-[1.7] max-w-[600px] !mb-10">
                We create digital experiences that drive business performance —
                helping organizations adapt to shifts in customer behaviour and
                technology.
              </p>

              <div className="flex flex-wrap items-center gap-4 !mb-12">
                <ButtonV2
                  size="large"
                  label="Work With Us"
                  redirect="#section-contact-form"
                  scrollingButton
                />
                <Link
                  href="/portfolio/"
                  className="inline-flex items-center whitespace-nowrap rounded-md px-[30px] py-3 font-medium text-white border border-white/20 bg-transparent hover:bg-white/[0.08] hover:border-white/40 transition-all duration-300"
                >
                  View Our Work
                </Link>
              </div>

              {/* Stats row — edtech style */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/[0.08] rounded-xl overflow-hidden border border-white/[0.08]">
                {STATS.map(({ value, label }, index) => (
                  <div
                    key={index}
                    className="bg-white/[0.03] hover:bg-white/[0.08] transition-colors py-5 px-5 text-center"
                  >
                    <div className="text-white text-[28px] font-extrabold tracking-[-0.5px] leading-none">
                      {value}
                    </div>
                    <div className="text-white/50 text-[12px] mt-1">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — hero image */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full rounded-2xl overflow-hidden bg-white/[0.05] border border-white/10 backdrop-blur-[10px]">
                <Image
                  className="rounded-2xl object-cover w-full"
                  src="/images/v2/about-us-hero-img.webp"
                  alt="Brilworks team"
                  width={565}
                  height={470}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR (light) ───────────────────────────────────────────────── */}
      <section
        aria-label="Trust indicators"
        style={{
          background: "#fafafa",
          borderBottom: "1px solid #e5e7eb",
          padding: "28px 0",
        }}
      >
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div
            className="flex flex-wrap items-center justify-center"
            style={{ gap: "12px 40px" }}
          >
            {TRUST.map((t) => (
              <div
                key={t.label}
                className="inline-flex items-center gap-2 whitespace-nowrap"
                style={{ fontSize: 13, fontWeight: 600, color: "#212121" }}
              >
                {t.icon}
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION (light-blue, alternating) ──────────────────────── */}
      <section className="py-16 md:py-24" style={{ background: "#f2f9fe" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#017eeb",
              }}
            >
              Who We Are
            </span>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
                color: "#0d0f1a",
              }}
            >
              Purpose-Driven, People-First
            </h2>
          </div>

          {MISSION_VISION.map((item) => (
            <div
              key={item.badge}
              className={`grid items-center gap-8 lg:gap-[60px] grid-cols-1 lg:grid-cols-2 py-10 lg:py-12 ${item.reverse ? "lg:[direction:rtl]" : ""}`}
            >
              <div
                className={item.reverse ? "lg:[direction:ltr]" : ""}
                style={{ direction: "ltr" }}
              >
                <div
                  className="w-full overflow-hidden rounded-2xl flex items-center justify-center"
                  style={{
                    aspectRatio: "16/9",
                    background:
                      "linear-gradient(135deg, #e8f0fd 0%, #c3d6fb 100%)",
                    border: "1px solid #e5e7eb",
                    padding: 40,
                  }}
                >
                  <Image
                    src={item.icon}
                    alt={item.badge}
                    width={160}
                    height={160}
                    className="w-40 h-40 object-contain"
                  />
                </div>
              </div>
              <div
                className={item.reverse ? "lg:[direction:ltr]" : ""}
                style={{ direction: "ltr" }}
              >
                <span
                  className="inline-block mb-4 text-[11px] font-bold uppercase tracking-widest"
                  style={{ color: "#017eeb" }}
                >
                  {item.badge}
                </span>
                <h3
                  className="font-bold mb-4"
                  style={{
                    fontSize: "clamp(22px, 2.4vw, 30px)",
                    letterSpacing: "-0.3px",
                    lineHeight: 1.3,
                    color: "#0d0f1a",
                  }}
                >
                  {item.heading}
                </h3>
                <p
                  className="mb-5"
                  style={{ fontSize: 16, lineHeight: 1.7, color: "#6b7280" }}
                >
                  {item.body}
                </p>
                <ul className="list-none">
                  {item.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 mb-2.5"
                      style={{ fontSize: 14, color: "#212121" }}
                    >
                      <span
                        style={{
                          color: "#017eeb",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        <IconCheck />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MID-CTA (blue gradient) ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden text-center"
        style={{
          padding: "56px 0",
          background: "linear-gradient(135deg, #017eeb 0%, #0061c4 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,219,211,0.2) 0%, transparent 60%)",
          }}
        />
        <div
          className="relative mx-auto px-5 md:px-10"
          style={{ maxWidth: 700, zIndex: 1 }}
        >
          <h3
            className="font-extrabold mb-3.5"
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              color: "#fff",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
            }}
          >
            Ready to Build Something Great Together?
          </h3>
          <p
            className=""
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 16,
              lineHeight: 1.7,
            }}
          >
            Tell us your project idea and get a free consultation. We'll map a
            roadmap and estimate your timeline — no commitment.
          </p>
          <Link
            href="/contact-us/"
            className="mt-7 inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0d0f1a] hover:!text-white"
            style={{
              background: "#fff",
              color: "#017eeb",
              border: "1px solid #fff",
              padding: "16px 32px",
              fontSize: 16,
            }}
          >
            Let's Discuss
          </Link>
        </div>
      </section>

      {/* ── BELIEFS (white card grid) ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#017eeb",
              }}
            >
              Brilbelief
            </span>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
                color: "#0d0f1a",
              }}
            >
              The Beliefs of Brilworks
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              The principles that guide how we work, who we hire, and why
              clients come back.
            </p>
          </div>
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {BELIEFS.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl transition-all hover:-translate-y-0.5"
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  padding: "32px 28px",
                }}
              >
                <div
                  className="rounded-[14px] flex items-center justify-center mb-5"
                  style={{ width: 64, height: 64, background: b.tint }}
                >
                  <Image
                    src={b.icon}
                    alt={b.title}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontSize: 18, color: "#0d0f1a" }}
                >
                  {b.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6b7280" }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES (dark) ───────────────────────────────────────────────── */}
      <IndustriesWeServe
        title="Trusted by Companies across Industries"
        darkBackground={true}
      />

      {/* ── MEET OUR TEAM (dark) ────────────────────────────────────────────── */}
      <MeetOurTeam />

      {/* ── BOTTOM CTA ──────────────────────────────────────────────────────── */}
      <CTASection
        title="Let's Build Something Great Together."
        description="Tell us your project idea and get a free consultation to create an outstanding digital product."
        buttonText="Let's Discuss"
        darkBackground={false}
      />
    </>
  );
};

export default AboutUs;
