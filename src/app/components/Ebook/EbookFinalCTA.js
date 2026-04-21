import React from "react";
import Link from "next/link";

const stripHtml = (html = "") =>
  String(html).replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

const EbookFinalCTA = ({ title }) => {
  const plainTitle = stripHtml(title);
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #017eeb 0%, #1a5ccc 50%, #0d0f1a 100%)",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 80% 20%, rgba(0,219,211,0.25) 0%, transparent 50%)",
        }}
      />
      <div
        className="container max-w-[1280px] md:px-10 px-5 mx-auto"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="text-center" style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2
            style={{
              color: "#fff",
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 800,
              letterSpacing: "-0.8px",
              lineHeight: 1.2,
              marginBottom: 14,
            }}
          >
            Ready to get the full guide?
          </h2>
          <p
            className="!mb-7"
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: 16,
              marginTop: 0,
              lineHeight: 1.6,
            }}
          >
            {plainTitle
              ? `${plainTitle} — free PDF, instant download, no spam.`
              : "Free PDF, instant download, no spam — just the playbook you came for."}
          </p>
          <Link
            href="#download-ebook-form"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#fff",
              color: "#017eeb",
              border: "1px solid #fff",
              borderRadius: 6,
              padding: "16px 32px",
              fontWeight: 700,
              fontSize: 16,
              textDecoration: "none",
              transition: "all 0.3s",
            }}
          >
            Get the Free Guide →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EbookFinalCTA;
