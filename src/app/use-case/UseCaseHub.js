"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatSrcUrl } from "../components/lib/commonFunction";
import "../styles/ServiceLightTheme.css";

const TOPIC_RULES = [
  { key: "genai", label: "Generative AI", classKey: "t-ai", match: /\b(gen.?ai|generative|llm|gpt|rag)\b/i },
  { key: "aws", label: "AWS & Cloud", classKey: "t-cloud", match: /\b(aws|cloud|azure|gcp|serverless)\b/i },
  { key: "ai", label: "AI / ML", classKey: "t-ml", match: /\b(ai|ml|machine.?learning)\b/i },
  { key: "iot", label: "IoT", classKey: "t-iot", match: /\b(iot)\b/i },
  { key: "mobile", label: "Mobile", classKey: "t-mobile", match: /\b(mobile|ios|android|react.?native|flutter)\b/i },
  { key: "saas", label: "SaaS", classKey: "t-saas", match: /\b(saas|multi.?tenant)\b/i },
];

const INDUSTRY_RULES = [
  { key: "healthcare", label: "Healthcare", match: /\b(health)\b/i },
  { key: "fintech", label: "Fintech", match: /\b(fin(tech|ance)|payment|bank)\b/i },
  { key: "media", label: "Media & Entertainment", match: /\b(media|entertain)\b/i },
  { key: "manufacturing", label: "Manufacturing", match: /\b(manufactur)\b/i },
  { key: "retail", label: "Retail", match: /\b(retail|ecommerce|e.?commerce)\b/i },
];

function classify(hay = "") {
  const topic = TOPIC_RULES.find((r) => r.match.test(hay));
  const industry = INDUSTRY_RULES.find((r) => r.match.test(hay));
  return {
    topic: topic || { key: "other", label: "Other", classKey: "t-other" },
    industry: industry || null,
  };
}

const formatSlug = (s = "") =>
  s
    .split("/")
    .filter(Boolean)
    .pop()
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

const UseCaseHub = ({ useCases = [] }) => {
  const enriched = useMemo(
    () =>
      useCases.map((uc) => {
        const ts = (uc?.content?.title_section || [])[0] || {};
        const slugOnly = uc.slug.replace(/^use-case\//, "");
        const title = ts?.title || uc.name || formatSlug(slugOnly);
        const description =
          ts?.description ||
          uc?.content?.Metatags?.description ||
          "Real-world use case engineered by Brilworks — architecture, tradeoffs, and outcomes.";
        const banner = ts?.banner_image?.filename || uc?.content?.Metatags?.og_image;
        const { topic, industry } = classify(`${title} ${slugOnly}`);
        return {
          slug: slugOnly,
          href: `/use-case/${slugOnly}/`,
          title,
          description,
          banner,
          topic,
          industry,
        };
      }),
    [useCases]
  );

  const [activeTopic, setActiveTopic] = useState("all");
  const [activeIndustry, setActiveIndustry] = useState("all");

  const visible = enriched.filter((uc) => {
    if (activeTopic !== "all" && uc.topic.key !== activeTopic) return false;
    if (activeIndustry !== "all" && uc.industry?.key !== activeIndustry) return false;
    return true;
  });

  const topicTabs = [{ key: "all", label: "All Topics" }, ...TOPIC_RULES.map((r) => ({ key: r.key, label: r.label }))];
  const industryTabs = [{ key: "all", label: "All Industries" }, ...INDUSTRY_RULES.map((r) => ({ key: r.key, label: r.label }))];

  return (
    <>
      <style>{`
        .uc-card { transition: all 0.3s; }
        .uc-card:hover { border-color: #017eeb; transform: translateY(-4px); }
        .uc-card:hover .uc-arrow { transform: translateX(4px); }
        .uc-topic-btn { transition: all 0.25s; }
        .uc-topic-btn:hover { border-color: #017eeb; color: #017eeb; }
        .t-ai .uc-cover { background: linear-gradient(135deg, #1a0b3a, #4f46e5 60%, #a855f7); }
        .t-ai .uc-tag { background: #f3e8ff; color: #6b21a8; }
        .t-cloud .uc-cover { background: linear-gradient(135deg, #072b5a, #017eeb 60%, #00dbd3); }
        .t-cloud .uc-tag { background: #e0f2fe; color: #0369a1; }
        .t-ml .uc-cover { background: linear-gradient(135deg, #1e1a47, #4338ca 60%, #6366f1); }
        .t-ml .uc-tag { background: #e0e7ff; color: #3730a3; }
        .t-iot .uc-cover { background: linear-gradient(135deg, #0c3a4a, #0d9488 60%, #14b8a6); }
        .t-iot .uc-tag { background: #ccfbf1; color: #115e59; }
        .t-mobile .uc-cover { background: linear-gradient(135deg, #064e3b, #059669 60%, #34d399); }
        .t-mobile .uc-tag { background: #d1fae5; color: #065f46; }
        .t-saas .uc-cover { background: linear-gradient(135deg, #072a52, #1e40af 60%, #60a5fa); }
        .t-saas .uc-tag { background: #dbeafe; color: #1e40af; }
        .t-other .uc-cover { background: linear-gradient(135deg, #1e1a47, #4338ca 60%, #6366f1); }
        .t-other .uc-tag { background: #e0e7ff; color: #3730a3; }
      `}</style>

      {/* ============ HERO ============ */}
      <section className="svc-hero-bg" style={{ position: "relative", overflow: "hidden", padding: "120px 0 80px" }}>
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto" style={{ position: "relative", zIndex: 1 }}>
          <nav style={{ fontSize: 13, color: "#6b7a8a", marginBottom: 20 }} aria-label="Breadcrumb">
            <Link href="/" style={{ color: "#566678" }}>Home</Link>
            <span style={{ margin: "0 8px", opacity: 0.5 }}>›</span>
            <span style={{ color: "#0b1e33" }}>Use Cases</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-[60px] items-center">
            <div>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#ffffff", border: "1px solid #e4eaf1",
                borderRadius: 9999, padding: "7px 16px", color: "#566678",
                fontSize: 12, fontWeight: 600, letterSpacing: "0.12em",
                textTransform: "uppercase", marginBottom: 24,
                boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)",
              }}>
                Real Engagements · Shipped
              </span>
              <h1 className="!mb-5" style={{
                fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 800,
                lineHeight: 1.08, letterSpacing: "-1.5px", color: "#0b1e33",
              }}>
                Use Cases from Real{" "}
                <span style={{ color: "#2f6bff" }}>
                  Brilworks Engagements
                </span>
              </h1>
              <p className="!mb-8" style={{
                fontSize: 18, lineHeight: 1.65, color: "#566678",
                maxWidth: 640,
              }}>
                Real engagements shipped for healthcare, fintech, media, manufacturing, and retail teams —
                with the architecture, tradeoffs, and outcomes called out.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Healthcare", "Fintech", "Media & Entertainment", "Manufacturing", "Retail", "IoT"].map((t) => (
                  <span key={t} style={{
                    display: "inline-flex", alignItems: "center",
                    background: "#ffffff",
                    border: "1px solid #e4eaf1",
                    borderRadius: 9999, padding: "6px 14px",
                    fontSize: 12, fontWeight: 600, color: "#566678",
                  }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Stats grid — right side */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: `${enriched.length}+`, lbl: "Use Cases" },
                  { num: "100+", lbl: "Engagements" },
                  { num: "5+", lbl: "Industries" },
                  { num: "4.8★", lbl: "Client Rating" },
                ].map((s) => (
                  <div key={s.lbl} className="rounded-2xl transition-all svc-stat-card" style={{ padding: "28px 24px" }}>
                    <div className="font-extrabold leading-none mb-2" style={{ color: "#2f6bff", fontSize: "clamp(32px, 3vw, 42px)", letterSpacing: "-1px" }}>
                      {s.num}
                    </div>
                    <div style={{ color: "#6b7a8a", fontSize: 13, fontWeight: 500, lineHeight: 1.4 }}>
                      {s.lbl}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ LIBRARY ============ */}
      <section id="library" style={{ background: "#fff", padding: "56px 0 96px" }}>
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
          <div className="text-center" style={{ marginBottom: 24 }}>
            <span style={{
              display: "inline-block", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#017eeb", marginBottom: 10,
            }}>Browse By Industry</span>
            <h2 className="!mb-2" style={{
              fontSize: "clamp(28px, 3vw, 38px)", fontWeight: 800,
              letterSpacing: "-1px", lineHeight: 1.1, color: "#0d0f1a",
            }}>Explore Every Use Case</h2>
          </div>

          {/* Industry filter */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 32 }}>
            {industryTabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveIndustry(t.key)}
                className="uc-topic-btn"
                style={{
                  fontFamily: "inherit",
                  background: activeIndustry === t.key ? "#017eeb" : "#fff",
                  border: `1px solid ${activeIndustry === t.key ? "#017eeb" : "#e5e7eb"}`,
                  borderRadius: 9999, padding: "9px 20px",
                  fontSize: 14, fontWeight: 600,
                  color: activeIndustry === t.key ? "#fff" : "#212121",
                  cursor: "pointer",
                }}
              >{t.label}</button>
            ))}
          </div>

          {visible.length ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 md:gap-6">
              {visible.map((uc) => (
                <Link
                  key={uc.slug}
                  href={uc.href}
                  className={`uc-card ${uc.topic.classKey}`}
                  style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: 20, padding: 24,
                    background: "#fff",
                    display: "flex", flexDirection: "column",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="uc-cover"
                    style={{
                      aspectRatio: "16/10", borderRadius: 14, marginBottom: 18,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      padding: 24, position: "relative", overflow: "hidden",
                    }}
                  >
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35) 0%, transparent 50%)",
                    }} />
                    {uc.banner ? (
                      <Image
                        src={formatSrcUrl(uc.banner)}
                        alt={`${uc.title} — use case preview`}
                        width={360}
                        height={220}
                        style={{
                          position: "relative", zIndex: 1,
                          width: "100%", height: "100%",
                          objectFit: "cover",
                          borderRadius: 10,
                          boxShadow: "0 20px 40px -10px rgba(0,0,0,0.35)",
                        }}
                      />
                    ) : (
                      <div style={{
                        position: "relative", zIndex: 1,
                        textAlign: "center", color: "#fff",
                        padding: 18,
                      }}>
                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", opacity: 0.85, marginBottom: 8, textTransform: "uppercase" }}>
                          {uc.topic.label}{uc.industry ? ` · ${uc.industry.label}` : ""}
                        </div>
                        <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.3px", lineHeight: 1.2 }}>
                          {uc.title}
                        </div>
                      </div>
                    )}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
                    {uc.industry && (
                      <span style={{
                        display: "inline-flex", alignItems: "center",
                        fontSize: 11, fontWeight: 700, padding: "4px 10px",
                        borderRadius: 9999, letterSpacing: "0.05em", textTransform: "uppercase",
                        background: "#017eeb", color: "#fff",
                      }}>{uc.industry.label}</span>
                    )}
                    <span className="uc-tag" style={{
                      display: "inline-flex", alignItems: "center",
                      fontSize: 11, fontWeight: 600, padding: "4px 10px",
                      borderRadius: 9999, letterSpacing: "0.03em",
                    }}>{uc.topic.label}</span>
                  </div>
                  <h3 className="!mb-2" style={{
                    fontSize: 18, fontWeight: 700, letterSpacing: "-0.4px",
                    lineHeight: 1.35, color: "#0d0f1a",
                  }}>{uc.title}</h3>
                  <p className="!mb-5" style={{
                    fontSize: 14, color: "#6b7280", lineHeight: 1.55, flex: 1,
                  }}>{uc.description}</p>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    color: "#017eeb", fontWeight: 700, fontSize: 14,
                  }}>
                    Read Use Case <span className="uc-arrow" style={{ transition: "transform 0.25s" }}>→</span>
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center" style={{ padding: "60px 20px", color: "#6b7280" }}>
              No use cases match these filters. Try clearing one.
            </div>
          )}
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="svc-mid-cta-bg" style={{ padding: "80px 0", position: "relative", overflow: "hidden" }}>
        <div className="svc-mid-cta-glow" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto" style={{ position: "relative", zIndex: 1 }}>
          <div className="text-center" style={{ maxWidth: 680, margin: "0 auto" }}>
            <h2 className="!mb-3" style={{
              color: "#fff", fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 800, letterSpacing: "-0.8px", lineHeight: 1.2,
            }}>Got a use case of your own?</h2>
            <p className="!mb-7" style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.6 }}>
              Tell us the problem. We'll share what we'd ship, in plain language, in a free 30-minute call.
            </p>
            <Link href="/contact-us/" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#fff", color: "#2f6bff",
              border: "1px solid #fff", borderRadius: 6,
              padding: "16px 32px", fontWeight: 700, fontSize: 16,
              textDecoration: "none",
            }}>Book a Free Consultation →</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default UseCaseHub;
