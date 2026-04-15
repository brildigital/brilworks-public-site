import React from "react";

const WHY_CARDS = [
  {
    title: "Written by builders, not marketers",
    desc: "Authored by Brilworks engineering leads who ship the systems they write about. Real projects, not theory.",
    bg: "#e8f0fd",
    stroke: "#017eeb",
    path: (
      <>
        <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#017eeb" opacity="0.15" />
        <path d="M12 2L2 7L12 12L22 7L12 2Z M2 7V17L12 22 M22 7V17L12 22 M12 12V22" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
  {
    title: "Real code, real architecture",
    desc: "Diagrams, snippets, and decision trees you can actually apply — not generic frameworks or vendor talking points.",
    bg: "#eef2ff",
    stroke: "#4f46e5",
    path: (
      <>
        <path d="M3 12L12 3L21 12L12 21L3 12Z" fill="#4f46e5" opacity="0.15" />
        <path d="M9 12L11 14L15 10" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M12 3L21 12L12 21L3 12L12 3Z" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
  {
    title: "30–40 min read, forever reference",
    desc: "Cover-to-cover in under an hour. Keep the PDF, share it with your team, hand it to new hires on day one.",
    bg: "#d1fae5",
    stroke: "#10b981",
    path: (
      <>
        <circle cx="12" cy="12" r="10" fill="#10b981" opacity="0.15" />
        <path d="M12 6V12L16 14" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="12" cy="12" r="9" stroke="#10b981" strokeWidth="1.8" fill="none" />
      </>
    ),
  },
  {
    title: "No paywall, no credit card",
    desc: "100% free. Drop your email, get the PDF. Unsubscribe any time and keep the ebook forever.",
    bg: "#ccfbf1",
    stroke: "#0d9488",
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" fill="#0d9488" opacity="0.15" />
        <path d="M7 12L10 15L17 8" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#0d9488" strokeWidth="1.8" fill="none" />
      </>
    ),
  },
  {
    title: "Trusted by 2,000+ readers",
    desc: "Downloaded by CTOs, engineering managers, and founders across startups, scale-ups, and Fortune 500s.",
    bg: "#f3e8ff",
    stroke: "#a855f7",
    path: (
      <>
        <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="#a855f7" opacity="0.15" />
        <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
  {
    title: "Shipped, not shelved",
    desc: "Every framework is something we've applied in live engagements — with the trade-offs and sharp edges called out.",
    bg: "#dbeafe",
    stroke: "#1e40af",
    path: (
      <>
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#1e40af" opacity="0.15" />
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#1e40af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
];

const ReasonToReadBook = ({ reasonToRead }) => {
  const title = reasonToRead?.[0]?.Key || "Why Read This Ebook";
  const description =
    reasonToRead?.[0]?.Value ||
    "We wrote the guide we wish we'd had — rooted in real projects, not theory.";

  return (
    <section className="main-section-padding" style={{ background: "#fff" }}>
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
            Why Read This
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
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            style={{
              fontSize: 17,
              color: "#6b7280",
              maxWidth: 640,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {WHY_CARDS.map((c) => (
            <div
              key={c.title}
              className="ebk-why-card"
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 16,
                padding: 32,
                transition: "all 0.3s",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  background: c.bg,
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  {c.path}
                </svg>
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#0d0f1a",
                  marginBottom: 10,
                  letterSpacing: "-0.3px",
                }}
              >
                {c.title}
              </h3>
              <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.6, margin: 0 }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonToReadBook;
