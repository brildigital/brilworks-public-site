"use client";
import { useEffect } from "react";
import { ShieldCheck, Star, Users, Check } from "lucide-react";
import { scrollEffect } from "../lib/commonFunction";
import Image from "next/image";
import IndustriesWeServe from "../Homepage/IndustriesWeServe";
import MeetOurTeam from "./MeetOurTeam";
import Link from "next/link";
import ButtonV2 from "../Common/ButtonV2";
import "../../styles/ServiceLightTheme.css";

const IconShield = () => (
  <ShieldCheck size={18} color="#2f6bff" strokeWidth={1.8} aria-hidden="true" />
);
const IconStar = () => (
  <Star size={18} color="#2f6bff" strokeWidth={1.8} aria-hidden="true" />
);
const IconTeam = () => (
  <Users size={18} color="#2f6bff" strokeWidth={1.8} aria-hidden="true" />
);
const IconCheck = () => (
  <Check size={16} strokeWidth={2.2} aria-hidden="true" />
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
      {/* ── HERO (light theme) ──────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden svc-hero-bg"
        aria-labelledby="about-hero-heading"
      >
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] grid-cols-1 gap-10 lg:gap-[60px] items-center pt-[160px] pb-20 lg:pb-[100px]">
            {/* Left */}
            <div>
              <span
                className="inline-flex items-center gap-2 rounded-full px-[14px] py-[6px] text-xs font-semibold tracking-[0.1em] !mb-7 border"
                style={{
                  background: "#ffffff",
                  borderColor: "#e4eaf1",
                  color: "#566678",
                  boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                Trusted by 120+ companies across 20 countries
              </span>

              <h1
                id="about-hero-heading"
                className="font-extrabold tracking-[-1.5px] leading-[1.1] !mb-4"
                style={{
                  fontSize: "clamp(36px, 3.8vw, 54px)",
                  color: "#0b1e33",
                }}
              >
                Your Tech Partner in a{" "}
                <span style={{ color: "#2f6bff" }}>Fast Changing</span> World.
              </h1>

              <p
                className="text-[18px] leading-[1.7] max-w-[600px] !mb-10"
                style={{ color: "#566678" }}
              >
                We create digital experiences that drive business performance —
                helping organizations adapt to shifts in customer behaviour and
                technology.
              </p>

              <div className="flex flex-wrap items-center gap-4 !mb-12">
                <ButtonV2
                  size="large"
                  label="Work With Us"
                  redirect="/career/"
                  className={"hover:text-themeColor"}
                />
                <Link
                  href="/portfolio/"
                  className="inline-flex items-center whitespace-nowrap rounded-md px-[30px] py-3 font-medium transition-all duration-300 hover:bg-black/5"
                  style={{ color: "#0b1e33", border: "1px solid #e4eaf1" }}
                >
                  View Our Work
                </Link>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {STATS.map(({ value, label }, index) => (
                  <div
                    key={index}
                    className="rounded-2xl transition-all svc-stat-card text-center"
                    style={{ padding: "20px 16px" }}
                  >
                    <div
                      className="text-[28px] font-extrabold tracking-[-0.5px] leading-none"
                      style={{ color: "#2f6bff" }}
                    >
                      {value}
                    </div>
                    <div
                      className="text-[12px] mt-1"
                      style={{ color: "#6b7a8a" }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — hero image */}
            <div className="hidden lg:flex items-center justify-center">
              <div
                className="w-full rounded-2xl overflow-hidden"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e4eaf1",
                  boxShadow: "0 4px 24px rgba(11, 30, 51, 0.12)",
                }}
              >
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
          background: "#ffffff",
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
      <section className="py-16 md:py-24" style={{ background: "#f1f5fb" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#2f6bff",
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
                  style={{ color: "#2f6bff" }}
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
                          color: "#2f6bff",
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

      {/* ── EMPOWERING GREATNESS STATS ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="max-w-3xl mx-auto mb-12">
            <h2
              className="font-extrabold mb-4 text-center"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
                color: "#0d0f1a",
              }}
            >
              Empowering Greatness With Our Skills
            </h2>
            <p
              className="text-center"
              style={{ fontSize: 16, lineHeight: 1.7, color: "#6b7280" }}
            >
              Whether you&apos;re looking for products and web applications that
              excite, energize, and engage your customers or seek to transform
              your internal processes with seamless tech innovations, we have
              the right people, the right expertise, and the right insights to
              serve your business needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                value: "60%",
                label: "Professional Employee",
                tint: "#dbeafe",
                color: "#1d4ed8",
              },
              {
                value: "120+",
                label: "Projects Completed",
                tint: "#dcfce7",
                color: "#15803d",
              },
              {
                value: "8+",
                label: "Years of Experience",
                tint: "#ffe4e6",
                color: "#be123c",
              },
              {
                value: "98%",
                label: "Project Success Rate",
                tint: "#f3e8ff",
                color: "#7e22ce",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-7 flex flex-col"
                style={{ background: stat.tint }}
              >
                <div
                  className="text-[42px] font-extrabold leading-none mb-2 tracking-tight"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: stat.color, opacity: 0.75 }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID-CTA ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden text-center svc-mid-cta-bg"
        style={{ padding: "56px 0" }}
      >
        <div className="absolute inset-0 pointer-events-none svc-mid-cta-glow" />
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
            className="mt-7 inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0b1e33] hover:!text-white hover:!border-[#0b1e33]"
            style={{
              background: "#fff",
              color: "#2f6bff",
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
                color: "#2f6bff",
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

      {/* ── INDUSTRIES ──────────────────────────────────────────────────────── */}
      <IndustriesWeServe title="Trusted by Companies across Industries" />

      {/* ── MEET OUR TEAM ───────────────────────────────────────────────────── */}
      <MeetOurTeam />

      {/* ── BOTTOM CTA ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden text-center svc-mid-cta-bg"
        style={{ padding: "56px 0" }}
      >
        <div className="absolute inset-0 pointer-events-none svc-mid-cta-glow" />
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
            Let&apos;s Build Something Great Together.
          </h3>
          <p
            className="mb-7"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 16,
              lineHeight: 1.7,
            }}
          >
            Tell us your project idea and get a free consultation to create an
            outstanding digital product.
          </p>
          <Link
            href="/contact-us/"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0b1e33] hover:!text-white hover:!border-[#0b1e33] mt-5"
            style={{
              background: "#fff",
              color: "#2f6bff",
              border: "1px solid #fff",
              padding: "16px 32px",
              fontSize: 16,
            }}
          >
            Let&apos;s Discuss
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
