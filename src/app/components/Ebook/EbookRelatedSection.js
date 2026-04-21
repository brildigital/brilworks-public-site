import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatSrcUrl } from "../lib/commonFunction";

const stripHtml = (html = "") =>
  String(html).replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

const TOPIC_MAP = [
  { re: /\b(ai|gpt|llm|genai|generative|rag|ml)\b/i, bg: "linear-gradient(135deg, #1a0b3a, #4f46e5 60%, #a855f7)", label: "Generative AI", tagBg: "#f3e8ff", tagColor: "#6b21a8" },
  { re: /\b(aws|cloud|azure|gcp|serverless|lambda|migration)\b/i, bg: "linear-gradient(135deg, #072b5a, #017eeb 60%, #00dbd3)", label: "AWS & Cloud", tagBg: "#e0f2fe", tagColor: "#0369a1" },
  { re: /\b(mobile|ios|android|react.?native|flutter|app)\b/i, bg: "linear-gradient(135deg, #064e3b, #059669 60%, #34d399)", label: "Mobile", tagBg: "#d1fae5", tagColor: "#065f46" },
  { re: /\b(devops|kubernetes|k8s|docker|ci.?cd|deploy)\b/i, bg: "linear-gradient(135deg, #0c3a4a, #0d9488 60%, #14b8a6)", label: "DevOps", tagBg: "#ccfbf1", tagColor: "#115e59" },
  { re: /\b(saas|multi.?tenant|subscription)\b/i, bg: "linear-gradient(135deg, #072a52, #1e40af 60%, #60a5fa)", label: "SaaS", tagBg: "#dbeafe", tagColor: "#1e40af" },
  { re: /\b(hir|talent|staff)\b/i, bg: "linear-gradient(135deg, #2a1a5a, #6d28d9 60%, #a78bfa)", label: "Hiring", tagBg: "#ede9fe", tagColor: "#5b21b6" },
  { re: /\b(payment|fintech|finance|cross.?border)\b/i, bg: "linear-gradient(135deg, #1a3a0a, #166534 60%, #4ade80)", label: "Fintech", tagBg: "#dcfce7", tagColor: "#166534" },
];

function classify(name = "", slug = "") {
  const hay = `${name} ${slug}`;
  for (const t of TOPIC_MAP) if (t.re.test(hay)) return t;
  return { bg: "linear-gradient(135deg, #1e1a47, #4338ca 60%, #6366f1)", label: "Ebook", tagBg: "#e0e7ff", tagColor: "#3730a3" };
}

async function fetchRelatedEbooks(currentSlug) {
  try {
    const url = `https://api.storyblok.com/v2/cdn/stories?starts_with=ebooks/&per_page=6&version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    return (data?.stories || [])
      .filter((s) => s.slug !== `ebooks/${currentSlug}` && s.slug !== currentSlug)
      .slice(0, 3);
  } catch (e) {
    console.error("fetchRelatedEbooks failed", e);
    return [];
  }
}

const EbookRelatedSection = async ({ currentSlug }) => {
  const ebooks = await fetchRelatedEbooks(currentSlug);
  if (!ebooks?.length) return null;

  return (
    <section className="main-section-padding" style={{ background: "#fafafa" }}>
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
        <div className="text-center" style={{ marginBottom: 56 }}>
          <span
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#017eeb",
              marginBottom: 14,
            }}
          >
            More Free Ebooks
          </span>
          <h2
            style={{
              fontSize: "clamp(30px, 3.3vw, 42px)",
              fontWeight: 800,
              letterSpacing: "-1px",
              lineHeight: 1.1,
              color: "#0d0f1a",
              marginBottom: 14,
            }}
          >
            More from the Brilworks library
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "#6b7280",
              maxWidth: 640,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Pick a playbook, read it in 30 minutes, ship better systems this
            week.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {ebooks.map((ebook) => {
            const plainName = stripHtml(ebook.name);
            const topic = classify(plainName, ebook.slug);
            const slugOnly = ebook.slug.replace(/^ebooks\//, "");
            const cover = ebook?.content?.ebookImage?.filename;
            return (
              <Link
                key={ebook.slug}
                href={`/ebooks/${slugOnly}`}
                className="ebk-related-card"
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 20,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
              >
                <div
                  style={{
                    aspectRatio: "4/3",
                    borderRadius: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 24,
                    marginBottom: 16,
                    position: "relative",
                    overflow: "hidden",
                    background: topic.bg,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35) 0%, transparent 50%)",
                    }}
                  />
                  {cover ? (
                    <Image
                      src={formatSrcUrl(cover)}
                      alt={`${plainName} — ebook cover`}
                      width={130}
                      height={180}
                      style={{
                        position: "relative",
                        zIndex: 1,
                        width: "auto",
                        height: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                        filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.35))",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        position: "relative",
                        zIndex: 1,
                        width: 110,
                        aspectRatio: "3/4",
                        background: "#fff",
                        borderRadius: 8,
                        padding: "14px 12px",
                        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.35)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        textAlign: "left",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 7,
                          fontWeight: 700,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "#017eeb",
                        }}
                      >
                        {topic.label}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 800,
                          color: "#0d0f1a",
                          lineHeight: 1.2,
                          letterSpacing: "-0.2px",
                        }}
                      >
                        {plainName}
                      </div>
                      <div
                        style={{
                          fontSize: 8,
                          fontWeight: 700,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "#6b7280",
                        }}
                      >
                        Brilworks
                      </div>
                    </div>
                  )}
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: 9999,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    alignSelf: "flex-start",
                    marginBottom: 10,
                    background: topic.tagBg,
                    color: topic.tagColor,
                  }}
                >
                  {topic.label}
                </span>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#0d0f1a",
                    letterSpacing: "-0.3px",
                    lineHeight: 1.35,
                    marginBottom: 8,
                  }}
                >
                  {plainName}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#6b7280",
                    lineHeight: 1.55,
                    marginBottom: 20,
                    flex: 1,
                  }}
                >
                  Expert-crafted guide by Brilworks engineering leads —
                  architecture, tradeoffs, and production-ready patterns.
                </p>
                <span
                  style={{
                    color: "#017eeb",
                    fontWeight: 700,
                    fontSize: 14,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  Get Free Ebook →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EbookRelatedSection;
