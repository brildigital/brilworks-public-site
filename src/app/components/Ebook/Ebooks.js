"use client";
import { getEbooksData } from "../lib/getEbooks";
import { useEffect, useMemo, useState } from "react";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import Image from "next/image";
import Link from "next/link";
import { formatSrcUrl } from "../lib/commonFunction";

const TOPIC_RULES = [
  { key: "ai", label: "Generative AI", classKey: "t-ai", match: /\b(ai|gpt|llm|genai|generative|rag|ml|machine.?learning)\b/i },
  { key: "cloud", label: "AWS & Cloud", classKey: "t-cloud", match: /\b(aws|cloud|azure|gcp|serverless|lambda|migration)\b/i },
  { key: "mobile", label: "Mobile", classKey: "t-mobile", match: /\b(mobile|ios|android|react.?native|flutter|app)\b/i },
  { key: "devops", label: "DevOps", classKey: "t-devops", match: /\b(devops|kubernetes|k8s|docker|ci.?cd|deploy)\b/i },
  { key: "saas", label: "SaaS", classKey: "t-saas", match: /\b(saas|multi.?tenant|subscription)\b/i },
  { key: "product", label: "Product Engineering", classKey: "t-product", match: /\b(product|mvp|startup|engineering|founder)\b/i },
];

function classifyEbook(name = "", slug = "") {
  const haystack = `${name} ${slug}`;
  for (const rule of TOPIC_RULES) {
    if (rule.match.test(haystack)) return rule;
  }
  return { key: "product", label: "Product Engineering", classKey: "t-product" };
}

const WHY_CARDS = [
  {
    title: "Written by builders, not marketers",
    desc: "Every ebook is authored by a Brilworks engineering lead who has shipped the system they're writing about.",
    bg: "#e8f0fd",
    stroke: "#017eeb",
    path: <>
      <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#017eeb" opacity="0.15"/>
      <path d="M12 2L2 7L12 12L22 7L12 2Z M2 7V17L12 22 M22 7V17L12 22 M12 12V22" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </>,
  },
  {
    title: "Real code, real architecture",
    desc: "Diagrams, snippets, and decision trees you can actually apply — not generic frameworks or vendor talking points.",
    bg: "#eef2ff",
    stroke: "#4f46e5",
    path: <>
      <path d="M3 12L12 3L21 12L12 21L3 12Z" fill="#4f46e5" opacity="0.15"/>
      <path d="M9 12L11 14L15 10" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M12 3L21 12L12 21L3 12L12 3Z" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </>,
  },
  {
    title: "30-min reads, not 200 pages",
    desc: "Built for engineering leaders with zero time. Every ebook is skimmable, scannable, and ships in under an hour.",
    bg: "#d1fae5",
    stroke: "#10b981",
    path: <>
      <circle cx="12" cy="12" r="10" fill="#10b981" opacity="0.15"/>
      <path d="M12 6V12L16 14" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="12" cy="12" r="9" stroke="#10b981" strokeWidth="1.8" fill="none"/>
    </>,
  },
  {
    title: "No paywall, no credit card",
    desc: "100% free. We ask for your email so we can send it — that's it. Unsubscribe anytime, keep the ebook forever.",
    bg: "#ccfbf1",
    stroke: "#0d9488",
    path: <>
      <rect x="3" y="3" width="18" height="18" rx="3" fill="#0d9488" opacity="0.15"/>
      <path d="M7 12L10 15L17 8" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="#0d9488" strokeWidth="1.8" fill="none"/>
    </>,
  },
  {
    title: "Trusted by 5,000+ engineers",
    desc: "Downloaded by CTOs, engineering managers, and founders across startups, scale-ups, and Fortune 500s.",
    bg: "#f3e8ff",
    stroke: "#a855f7",
    path: <>
      <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="#a855f7" opacity="0.15"/>
      <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </>,
  },
  {
    title: "Updated for 2026",
    desc: "We retire outdated guides and rewrite for the current stack. Every ebook reflects what's shipping in production today.",
    bg: "#dbeafe",
    stroke: "#1e40af",
    path: <>
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#1e40af" opacity="0.15"/>
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#1e40af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </>,
  },
];

const TESTIMONIALS = [
  {
    initials: "DK",
    name: "Daniel K.",
    role: "CTO, Series B FinTech",
    quote: "The GenAI ebook saved us three weeks of architecture debate. The cost model alone paid for our entire AI budget review.",
  },
  {
    initials: "PS",
    name: "Priya S.",
    role: "VP Engineering, HealthTech",
    quote: "Finally — a Kubernetes guide that admits where the sharp edges are. We changed two configs before our next deploy based on it.",
  },
  {
    initials: "MR",
    name: "Marcus R.",
    role: "Principal Engineer, SaaS",
    quote: "The AWS migration playbook is what I hand new hires on day one. It's the only resource that survived my 'is this vendor fluff?' filter.",
  },
];

const FAQS = [
  { q: "Are these ebooks really free?", a: "Yes. Every ebook is 100% free. We ask for your email so we can send it to you (and occasionally share new guides) — no paywall, no credit card." },
  { q: "Who writes these ebooks?", a: "Every ebook is written by a Brilworks engineering lead — people who ship AI, cloud, and product engineering solutions for startups and enterprises daily." },
  { q: "How often do you publish new ebooks?", a: "We publish a new deep-dive ebook every 4–6 weeks. Subscribe and we'll email you when the next one drops — no other emails." },
  { q: "Can I share these with my team?", a: "Absolutely — that's the whole point. Forward the PDF to anyone, slot it into your onboarding docs, or use it in an internal tech talk." },
  { q: "Will you spam me after I download?", a: "No. You'll get the ebook you asked for and (if subscribed) one email every 4–6 weeks when a new ebook drops. One-click unsubscribe, always." },
  { q: "Can I request a topic for a future ebook?", a: "Yes — reply to any email we send you and tell us what you wish someone had written. A lot of our ebooks started as reader requests." },
];

const Ebooks = () => {
  const ITEMS_PER_PAGE = 9;
  const [ebooksDataPerPage, setEbooksDataPerPage] = useState([]);
  const [totalEbook, setTotalEbook] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTopic, setActiveTopic] = useState("all");
  const [openFaq, setOpenFaq] = useState(0);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const blogData = await getEbooksData(currentPage, ITEMS_PER_PAGE);
      setEbooksDataPerPage(blogData.storyData);
      setTotalEbook(blogData.totalData);
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => setIsLoading(false), 300);
  };

  useEffect(() => {
    fetchData();
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  const enrichedEbooks = useMemo(
    () =>
      (ebooksDataPerPage || []).map((ebook) => ({
        ...ebook,
        topic: classifyEbook(ebook?.name, ebook?.slug),
      })),
    [ebooksDataPerPage]
  );

  const filteredEbooks =
    activeTopic === "all"
      ? enrichedEbooks
      : enrichedEbooks.filter((e) => e.topic.key === activeTopic);

  const featuredEbook = enrichedEbooks[0];

  const getPaginationNumbers = (cp, total, per) => {
    const totalPages = Math.ceil(total / per);
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (cp > 3) pages.push("...");
      const start = Math.max(2, cp - 1);
      const end = Math.min(totalPages - 1, cp + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (cp < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <>
      <style>{`
        .ebk-topic-btn { transition: all 0.25s; }
        .ebk-topic-btn:hover { border-color: #017eeb; color: #017eeb; }
        .ebk-card { transition: all 0.3s; }
        .ebk-card:hover { border-color: #017eeb; transform: translateY(-4px); }
        .ebk-card:hover .ebk-cta-arrow { transform: translateX(4px); }
        .ebk-why-card { transition: all 0.3s; }
        .ebk-why-card:hover { border-color: #017eeb; transform: translateY(-4px); }
        .ebk-mini-shadow { box-shadow: 0 20px 40px -10px rgba(0,0,0,0.35); }
        .ebk-feature-shadow { box-shadow: 0 30px 60px -20px rgba(1,126,235,0.55), 0 10px 30px -10px rgba(0,219,211,0.35); }
        .t-ai .ebk-cover { background: linear-gradient(135deg, #1a0b3a, #4f46e5 60%, #a855f7); }
        .t-ai .ebk-tag { background: #f3e8ff; color: #6b21a8; }
        .t-cloud .ebk-cover { background: linear-gradient(135deg, #072b5a, #017eeb 60%, #00dbd3); }
        .t-cloud .ebk-tag { background: #e0f2fe; color: #0369a1; }
        .t-mobile .ebk-cover { background: linear-gradient(135deg, #064e3b, #059669 60%, #34d399); }
        .t-mobile .ebk-tag { background: #d1fae5; color: #065f46; }
        .t-devops .ebk-cover { background: linear-gradient(135deg, #0c3a4a, #0d9488 60%, #14b8a6); }
        .t-devops .ebk-tag { background: #ccfbf1; color: #115e59; }
        .t-product .ebk-cover { background: linear-gradient(135deg, #1e1a47, #4338ca 60%, #6366f1); }
        .t-product .ebk-tag { background: #e0e7ff; color: #3730a3; }
        .t-saas .ebk-cover { background: linear-gradient(135deg, #072a52, #1e40af 60%, #60a5fa); }
        .t-saas .ebk-tag { background: #dbeafe; color: #1e40af; }
      `}</style>

      {/* ============ HERO ============ */}
      <section style={{ position: "relative", overflow: "hidden", background: "#0d0f1a", padding: "120px 0 80px" }}>
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          background: "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(26,92,204,0.22) 0%, transparent 70%), radial-gradient(ellipse 40% 55% at 20% 80%, rgba(0,180,216,0.10) 0%, transparent 60%), linear-gradient(160deg, #0d0f1a 0%, #111428 50%, #0a0c1e 100%)",
        }} />
        <div style={{
          position: "absolute", inset: 0, opacity: 0.06, zIndex: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto" style={{ position: "relative", zIndex: 1 }}>
          <div className="grid lg:grid-cols-[1.15fr_1fr] grid-cols-1 gap-10 lg:gap-14 items-center">
            <div>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(26,92,204,0.18)", border: "1px solid rgba(26,92,204,0.35)",
                borderRadius: 9999, padding: "7px 16px", color: "#00b4d8",
                fontSize: 12, fontWeight: 600, letterSpacing: "0.12em",
                textTransform: "uppercase", marginBottom: 24,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L14.39 8.26L21 9.27L16 14.14L17.18 20.99L12 17.77L6.82 20.99L8 14.14L3 9.27L9.61 8.26L12 2Z" fill="#00dbd3"/>
                </svg>
                Free Resources • No Paywall
              </span>
              <h1 style={{
                fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 800,
                lineHeight: 1.08, letterSpacing: "-1.5px", color: "#fff", marginBottom: 20,
              }}>
                Free Expert Guides on{" "}
                <span style={{
                  background: "linear-gradient(90deg, #00b4d8 0%, #00dbd3 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  AI, Cloud &amp; Product Engineering
                </span>
              </h1>
              <p style={{
                fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.70)",
                marginBottom: 28, maxWidth: 560,
              }}>
                In-depth playbooks written by engineering leaders who ship AI, AWS, and mobile products daily.
                Downloaded by <strong style={{ color: "#fff" }}>5,000+ CTOs and engineers</strong> — no fluff, no sales pitch.
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32, flexWrap: "wrap" }}>
                <div style={{ display: "flex" }} aria-hidden="true">
                  {["SK", "MJ", "AP", "RT"].map((i, idx) => (
                    <span key={i} style={{
                      width: 36, height: 36, borderRadius: "50%",
                      background: "linear-gradient(135deg, #1A5CCC, #00b4d8)",
                      border: "2px solid #0d0f1a",
                      marginLeft: idx === 0 ? 0 : -10,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fff", fontWeight: 700, fontSize: 13,
                    }}>{i}</span>
                  ))}
                </div>
                <div>
                  <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, fontWeight: 500 }}>
                    <strong style={{ color: "#fff" }}>5,000+</strong> CTOs &amp; engineering leads read our ebooks
                  </div>
                  <span style={{ color: "#f7b500", fontSize: 14, letterSpacing: 2, display: "block", marginTop: 2 }} aria-label="5 out of 5 stars">★★★★★</span>
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}>
                <a href="#library" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#017eeb", color: "#fff",
                  border: "1px solid #017eeb", borderRadius: 6,
                  padding: "14px 28px", fontWeight: 600, fontSize: 15,
                  textDecoration: "none", transition: "all 0.3s",
                }}>Browse the Library →</a>
                <a href="#subscribe" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "transparent", color: "#fff",
                  border: "1px solid rgba(255,255,255,0.35)", borderRadius: 6,
                  padding: "14px 28px", fontWeight: 600, fontSize: 15,
                  textDecoration: "none", transition: "all 0.3s",
                }}>Get New Ebooks by Email</a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }} aria-label="Topics covered">
                {["Generative AI", "AWS & Cloud", "Mobile", "DevOps", "Product Engineering", "SaaS"].map((t) => (
                  <span key={t} style={{
                    display: "inline-flex", alignItems: "center",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRadius: 9999, padding: "6px 14px",
                    fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.85)",
                  }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Featured ebook */}
            {featuredEbook && (
              <aside style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 24, padding: 32,
                backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
              }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "rgba(0,180,216,0.18)",
                  border: "1px solid rgba(0,180,216,0.35)",
                  color: "#00dbd3", fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.1em", padding: "5px 12px",
                  borderRadius: 9999, textTransform: "uppercase", marginBottom: 20,
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L14.39 8.26L21 9.27L16 14.14L17.18 20.99L12 17.77L6.82 20.99L8 14.14L3 9.27L9.61 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                  Most Downloaded
                </span>
                <div className="ebk-feature-shadow" style={{
                  width: "100%", aspectRatio: "3 / 4", maxWidth: 240,
                  margin: "0 auto 24px", borderRadius: 14,
                  background: "linear-gradient(160deg, #1a3a8f 0%, #017eeb 50%, #00dbd3 100%)",
                  position: "relative", overflow: "hidden",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: 20,
                }}>
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35) 0%, transparent 40%)",
                  }} />
                  {featuredEbook?.content?.ebookImage?.filename ? (
                    <Image
                      src={formatSrcUrl(featuredEbook.content.ebookImage.filename)}
                      alt={featuredEbook?.content?.ebookImage?.alt || featuredEbook.name}
                      width={180}
                      height={240}
                      style={{ position: "relative", zIndex: 1, width: "auto", height: "100%", maxHeight: "100%", objectFit: "contain", filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))" }}
                    />
                  ) : (
                    <div style={{ position: "relative", zIndex: 1, color: "#fff", textAlign: "center" }}>
                      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", opacity: 0.85, marginBottom: 10, textTransform: "uppercase" }}>The CTO Series</div>
                      <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.5px", lineHeight: 1.2 }}>{featuredEbook.name}</div>
                    </div>
                  )}
                </div>
                <h2 style={{
                  color: "#fff", fontSize: 20, fontWeight: 700,
                  letterSpacing: "-0.3px", marginBottom: 8, lineHeight: 1.3,
                }}>{featuredEbook.name}</h2>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, marginBottom: 20 }}>
                  <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>Most downloaded this month</strong> · Free expert guide by Brilworks.
                </p>
                <Link href={`/ebooks/${featuredEbook.slug}`} className="mt-5" style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                  background: "#017eeb", color: "#fff",
                  border: "1px solid #017eeb", borderRadius: 6,
                  padding: "14px 28px", fontWeight: 600, fontSize: 15,
                  width: "100%", textDecoration: "none", transition: "all 0.3s",
                }}>Get Free Ebook →</Link>
              </aside>
            )}
          </div>
        </div>
      </section>

      {/* ============ TRUST BAR ============ */}
      <section style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "36px 0" }}>
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-6 md:gap-8 text-center">
            {[
              { num: "5,000+", lbl: "Downloads" },
              { num: totalEbook ? `${totalEbook}+` : "12", lbl: "Expert Ebooks" },
              { num: "4.8★", lbl: "Reader Rating" },
              { num: "120+", lbl: "CTOs Subscribed" },
            ].map((s) => (
              <div key={s.lbl}>
                <div style={{
                  fontSize: "clamp(28px, 3vw, 36px)", fontWeight: 800,
                  letterSpacing: "-0.8px", lineHeight: 1,
                }}>
                  <span style={{
                    background: "linear-gradient(90deg, #017eeb, #00dbd3)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>{s.num}</span>
                </div>
                <div style={{
                  fontSize: 12, fontWeight: 600, color: "#6b7280",
                  marginTop: 6, textTransform: "uppercase", letterSpacing: "0.05em",
                }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LIBRARY ============ */}
      <section id="library" className="main-section-padding" style={{ background: "#fff" }}>
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <span style={{
              display: "inline-block", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#017eeb", marginBottom: 14,
            }}>The Library</span>
            <h2 style={{
              fontSize: "clamp(30px, 3.5vw, 44px)", fontWeight: 800,
              letterSpacing: "-1px", lineHeight: 1.1,
              color: "#0d0f1a", marginBottom: 14,
            }}>Browse the Ebook Library</h2>
            <p style={{ fontSize: 17, color: "#6b7280", maxWidth: 620, margin: "0 auto", lineHeight: 1.6 }}>
              Every guide is free, written by a Brilworks engineering lead, and rooted in real projects we've shipped for startups and enterprises.
            </p>
          </div>

          {/* Topic filter */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 48 }} role="tablist" aria-label="Filter ebooks by topic">
            {[{ key: "all", label: "All Topics" }, ...TOPIC_RULES.map((r) => ({ key: r.key, label: r.label }))].map((t) => (
              <button
                key={t.key}
                role="tab"
                aria-selected={activeTopic === t.key}
                onClick={() => setActiveTopic(t.key)}
                className="ebk-topic-btn"
                style={{
                  fontFamily: "inherit",
                  background: activeTopic === t.key ? "#0d0f1a" : "#fff",
                  border: `1px solid ${activeTopic === t.key ? "#0d0f1a" : "#e5e7eb"}`,
                  borderRadius: 9999, padding: "10px 20px",
                  fontSize: 14, fontWeight: 600,
                  color: activeTopic === t.key ? "#fff" : "#212121",
                  cursor: "pointer",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {isLoading ? (
            <FetchDataSpinner />
          ) : filteredEbooks?.length ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 md:gap-6">
                {filteredEbooks.map((ebook, index) => (
                  <article
                    key={ebook.slug || index}
                    className={`ebk-card ${ebook.topic.classKey}`}
                    style={{
                      border: "1px solid #e5e7eb",
                      borderRadius: 20, padding: 24,
                      background: "#fff",
                      display: "flex", flexDirection: "column",
                    }}
                  >
                    <div className="ebk-cover" style={{
                      aspectRatio: "4 / 3", borderRadius: 14, marginBottom: 20,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      padding: 28, position: "relative", overflow: "hidden",
                    }}>
                      <div style={{
                        position: "absolute", inset: 0,
                        background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35) 0%, transparent 50%)",
                      }} />
                      {ebook?.content?.ebookImage?.filename ? (
                        <Image
                          src={formatSrcUrl(ebook.content.ebookImage.filename)}
                          alt={ebook?.content?.ebookImage?.alt || `${ebook.name} — free ebook by Brilworks`}
                          width={140}
                          height={180}
                          style={{
                            position: "relative", zIndex: 1,
                            width: "auto", height: "100%", maxHeight: "100%",
                            objectFit: "contain",
                            filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.35))",
                          }}
                        />
                      ) : (
                        <div className="ebk-mini-shadow" style={{
                          position: "relative", zIndex: 1,
                          width: 130, aspectRatio: "3/4", background: "#fff",
                          borderRadius: 10, padding: "16px 14px",
                          display: "flex", flexDirection: "column", justifyContent: "space-between",
                          textAlign: "left",
                        }}>
                          <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#017eeb" }}>{ebook.topic.label}</div>
                          <div style={{ fontSize: 13, fontWeight: 800, color: "#0d0f1a", letterSpacing: "-0.2px", lineHeight: 1.25 }}>{ebook.name}</div>
                          <div style={{ fontSize: 9, fontWeight: 700, color: "#6b7280", letterSpacing: "0.15em", textTransform: "uppercase" }}>Brilworks</div>
                        </div>
                      )}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                      <span className="ebk-tag" style={{
                        display: "inline-flex", alignItems: "center",
                        fontSize: 11, fontWeight: 700, padding: "4px 10px",
                        borderRadius: 9999, letterSpacing: "0.05em", textTransform: "uppercase",
                      }}>{ebook.topic.label}</span>
                      <span style={{ fontSize: 12, color: "#9ca3af", fontWeight: 500 }}>Free PDF</span>
                    </div>
                    <h3 style={{
                      fontSize: 18, fontWeight: 700, letterSpacing: "-0.4px",
                      lineHeight: 1.35, color: "#0d0f1a", marginBottom: 8,
                    }}>{ebook.name}</h3>
                    <p style={{
                      fontSize: 14, color: "#6b7280", lineHeight: 1.55,
                      marginBottom: 20, flex: 1,
                    }}>
                      Expert-crafted guide by Brilworks engineering leads — architecture, tradeoffs, and production-ready patterns.
                    </p>
                    <Link href={`/ebooks/${ebook.slug}`} className="mt-5" style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      color: "#017eeb", fontWeight: 700, fontSize: 14,
                      textDecoration: "none",
                    }}>
                      Get Free Ebook <span className="ebk-cta-arrow" style={{ transition: "transform 0.25s" }}>→</span>
                    </Link>
                  </article>
                ))}
              </div>

              {totalEbook > ITEMS_PER_PAGE && (
                <div className="flex justify-center" style={{ marginTop: 48 }}>
                  <ul className="flex flex-wrap items-center gap-2">
                    <li
                      className={`px-3 py-2 text-base font-medium rounded-md cursor-pointer ${
                        currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-colorBlack hover:text-themeColor"
                      }`}
                      onClick={() => { if (currentPage > 1) setCurrentPage(currentPage - 1); }}
                    >Prev</li>
                    {getPaginationNumbers(currentPage, totalEbook, ITEMS_PER_PAGE).map((page, idx) => (
                      <li
                        key={idx}
                        className={`w-10 h-10 flex items-center justify-center text-base font-medium border rounded-md cursor-pointer ${
                          currentPage === page
                            ? "bg-themeColor text-white border-themeColor"
                            : page === "..."
                            ? "border-none cursor-default text-colorBlack"
                            : "text-colorBlack hover:bg-sectionBG"
                        }`}
                        onClick={() => typeof page === "number" && setCurrentPage(page)}
                      >{page}</li>
                    ))}
                    <li
                      className={`px-3 py-2 text-base font-medium rounded-md cursor-pointer ${
                        currentPage === Math.ceil(totalEbook / ITEMS_PER_PAGE)
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-colorBlack hover:text-themeColor"
                      }`}
                      onClick={() => {
                        if (currentPage < Math.ceil(totalEbook / ITEMS_PER_PAGE)) setCurrentPage(currentPage + 1);
                      }}
                    >Next</li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <div className="text-center text-colorGray py-10">No ebooks found for this topic.</div>
          )}

          {/* Mid-CTA newsletter */}
          <div id="subscribe" style={{
            background: "linear-gradient(135deg, #017eeb 0%, #1a5ccc 50%, #0d0f1a 100%)",
            borderRadius: 28, padding: 48, position: "relative", overflow: "hidden",
            margin: "64px 0 0",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(circle at 80% 20%, rgba(0,219,211,0.25) 0%, transparent 50%)",
            }} />
            <div className="grid md:grid-cols-[1.3fr_1fr] grid-cols-1 gap-8 items-center" style={{ position: "relative", zIndex: 1 }}>
              <div>
                <h3 style={{
                  fontSize: "clamp(22px, 2.3vw, 30px)", fontWeight: 800,
                  letterSpacing: "-0.6px", color: "#fff",
                  marginBottom: 10, lineHeight: 1.2,
                }}>Get every new ebook, delivered.</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, margin: 0, lineHeight: 1.6 }}>
                  One expert guide every 4–6 weeks. No spam, no sales pitches — just the stuff engineering leaders tell us they wish they had.
                </p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const btn = e.currentTarget.querySelector("button");
                  if (btn) btn.textContent = "Subscribed ✓";
                }}
                style={{
                  display: "flex", flexDirection: "column", gap: 10,
                }}
              >
                <div style={{
                  display: "flex", gap: 10,
                  background: "rgba(255,255,255,0.08)", padding: 6,
                  borderRadius: 10, border: "1px solid rgba(255,255,255,0.18)",
                }}>
                  <label htmlFor="ebk-sub-email" style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: 0 }}>Work email</label>
                  <input
                    id="ebk-sub-email" type="email" required
                    placeholder="you@company.com" autoComplete="email"
                    style={{
                      flex: 1, background: "transparent", border: 0,
                      padding: "12px 14px", color: "#fff", fontFamily: "inherit",
                      fontSize: 15, outline: "none",
                    }}
                  />
                  <button type="submit" style={{
                    background: "#fff", color: "#017eeb", border: 0, borderRadius: 8,
                    padding: "12px 22px", fontFamily: "inherit", fontSize: 14, fontWeight: 700, cursor: "pointer",
                  }}>Subscribe</button>
                </div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 12 }}>Join 120+ CTOs. Unsubscribe anytime.</div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY SECTION ============ */}
      <section className="main-section-padding" style={{ background: "#fafafa" }}>
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <span style={{
              display: "inline-block", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#017eeb", marginBottom: 14,
            }}>Why Read These</span>
            <h2 style={{
              fontSize: "clamp(30px, 3.5vw, 44px)", fontWeight: 800,
              letterSpacing: "-1px", lineHeight: 1.1,
              color: "#0d0f1a", marginBottom: 14,
            }}>Why Engineering Leaders Read Brilworks Ebooks</h2>
            <p style={{ fontSize: 17, color: "#6b7280", maxWidth: 620, margin: "0 auto", lineHeight: 1.6 }}>
              We write the guides we wish we had five years ago — rooted in real projects, not theory.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {WHY_CARDS.map((c) => (
              <div key={c.title} className="ebk-why-card" style={{
                background: "#fff", border: "1px solid #e5e7eb",
                borderRadius: 16, padding: 32,
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20, background: c.bg,
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">{c.path}</svg>
                </div>
                <h3 style={{
                  fontSize: 18, fontWeight: 700, color: "#0d0f1a",
                  marginBottom: 10, letterSpacing: "-0.3px",
                }}>{c.title}</h3>
                <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="main-section-padding" style={{ background: "#0d0f1a", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          background: "radial-gradient(ellipse 50% 40% at 80% 20%, rgba(26,92,204,0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 10% 90%, rgba(0,180,216,0.10) 0%, transparent 60%)",
        }} />
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto" style={{ position: "relative", zIndex: 1 }}>
          <div className="text-center" style={{ marginBottom: 56 }}>
            <span style={{
              display: "inline-block", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#00b4d8", marginBottom: 14,
            }}>Reader Reviews</span>
            <h2 style={{
              fontSize: "clamp(30px, 3.5vw, 44px)", fontWeight: 800,
              letterSpacing: "-1px", lineHeight: 1.1,
              color: "#fff", marginBottom: 14,
            }}>What Readers Are Saying</h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", maxWidth: 620, margin: "0 auto", lineHeight: 1.6 }}>
              Honest feedback from CTOs and engineering managers who've applied these playbooks.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 20, padding: 32,
                backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
              }}>
                <span style={{ color: "#f7b500", fontSize: 14, letterSpacing: 2, marginBottom: 16, display: "block" }} aria-label="5 stars">★★★★★</span>
                <blockquote style={{
                  fontSize: 16, lineHeight: 1.65,
                  color: "rgba(255,255,255,0.88)", fontWeight: 400,
                  marginBottom: 24,
                }}>"{t.quote}"</blockquote>
                <div style={{
                  display: "flex", alignItems: "center", gap: 12,
                  paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.1)",
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "linear-gradient(135deg, #1a5ccc, #00dbd3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontWeight: 700, fontSize: 15,
                  }}>{t.initials}</div>
                  <div>
                    <strong style={{ color: "#fff", fontSize: 15, fontWeight: 700, display: "block" }}>{t.name}</strong>
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="main-section-padding" style={{ background: "#fff" }}>
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <span style={{
              display: "inline-block", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#017eeb", marginBottom: 14,
            }}>FAQ</span>
            <h2 style={{
              fontSize: "clamp(30px, 3.5vw, 44px)", fontWeight: 800,
              letterSpacing: "-1px", lineHeight: 1.1,
              color: "#0d0f1a", marginBottom: 14,
            }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: 17, color: "#6b7280", maxWidth: 620, margin: "0 auto", lineHeight: 1.6 }}>
              Everything you'd want to know before downloading.
            </p>
          </div>

          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            {FAQS.map((f, i) => (
              <div key={f.q} style={{ borderBottom: "1px solid #e5e7eb", padding: "20px 0" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  style={{
                    width: "100%", background: "transparent", border: 0, padding: 0,
                    cursor: "pointer", fontFamily: "inherit",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    fontSize: 17, fontWeight: 700, color: "#0d0f1a",
                    letterSpacing: "-0.2px", textAlign: "left",
                  }}
                  aria-expanded={openFaq === i}
                >
                  <span>{f.q}</span>
                  <span style={{ fontSize: 22, fontWeight: 400, color: "#017eeb", flexShrink: 0, marginLeft: 16 }}>
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <p style={{ margin: "14px 0 0", fontSize: 15, color: "#6b7280", lineHeight: 1.65 }}>{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section style={{ background: "#0d0f1a", padding: "80px 0", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(circle at 50% 0%, rgba(26,92,204,0.25) 0%, transparent 60%)",
        }} />
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto" style={{ position: "relative", zIndex: 1 }}>
          <div className="text-center" style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{
              color: "#fff", fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 800, letterSpacing: "-0.8px", lineHeight: 1.2,
              marginBottom: 14,
            }}>Start with the most downloaded one.</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, marginBottom: 28, lineHeight: 1.6 }}>
              Free expert guides on AI, Cloud, and Product Engineering. Pick one, read it in 30 minutes, ship better code this week.
            </p>
            {featuredEbook ? (
              <Link href={`/ebooks/${featuredEbook.slug}`} className="mt-5" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg, #017eeb, #00dbd3)",
                color: "#fff", border: "1px solid transparent", borderRadius: 6,
                padding: "14px 28px", fontWeight: 600, fontSize: 15,
                textDecoration: "none", transition: "all 0.3s",
              }}>Get the Free Ebook →</Link>
            ) : (
              <a href="#library" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg, #017eeb, #00dbd3)",
                color: "#fff", border: "1px solid transparent", borderRadius: 6,
                padding: "14px 28px", fontWeight: 600, fontSize: 15,
                textDecoration: "none", transition: "all 0.3s",
              }}>Browse the Library →</a>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Ebooks;
