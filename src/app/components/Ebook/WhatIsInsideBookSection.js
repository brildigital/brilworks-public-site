"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatSrcUrl } from "../lib/commonFunction";

const MOCK_THEMES = [
  { bg: "linear-gradient(135deg, #072b5a, #017eeb 60%, #00dbd3)", tagBg: "#e0f2fe", tagColor: "#0369a1" },
  { bg: "linear-gradient(135deg, #1e1a47, #4338ca 60%, #6366f1)", tagBg: "#e0e7ff", tagColor: "#3730a3" },
  { bg: "linear-gradient(135deg, #064e3b, #059669 60%, #34d399)", tagBg: "#d1fae5", tagColor: "#065f46" },
  { bg: "linear-gradient(135deg, #1a0b3a, #4f46e5 60%, #a855f7)", tagBg: "#f3e8ff", tagColor: "#6b21a8" },
  { bg: "linear-gradient(135deg, #0c3a4a, #0d9488 60%, #14b8a6)", tagBg: "#ccfbf1", tagColor: "#115e59" },
];

const ChapterRow = ({ chapter, index, reverse }) => {
  const theme = MOCK_THEMES[index % MOCK_THEMES.length];
  const image = chapter?.Image?.filename;

  return (
    <article
      style={{
        display: "grid",
        gridTemplateColumns: "360px 1fr",
        gap: 48,
        alignItems: "center",
        marginBottom: 48,
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 20,
        padding: 32,
        direction: reverse ? "rtl" : "ltr",
      }}
      className="ebk-chapter-row"
    >
      <div
        style={{
          aspectRatio: "4/3",
          borderRadius: 14,
          padding: 28,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: theme.bg,
          direction: "ltr",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)",
          }}
        />
        {image ? (
          <Image
            src={formatSrcUrl(image)}
            alt={chapter?.Image?.alt || chapter?.Title || "chapter preview"}
            width={280}
            height={210}
            style={{
              position: "relative",
              zIndex: 1,
              width: "auto",
              height: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              borderRadius: 10,
              boxShadow: "0 20px 40px -10px rgba(0,0,0,0.35)",
            }}
          />
        ) : (
          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "80%",
              background: "#fff",
              borderRadius: 10,
              padding: 18,
              boxShadow: "0 20px 40px -10px rgba(0,0,0,0.35)",
              textAlign: "left",
            }}
          >
            <div style={{ height: 6, borderRadius: 3, background: "#0d0f1a", marginBottom: 12, width: "60%" }} />
            <div style={{ height: 4, borderRadius: 2, background: "#e5e7eb", marginBottom: 6, width: "90%" }} />
            <div style={{ height: 4, borderRadius: 2, background: "#e5e7eb", marginBottom: 6, width: "80%" }} />
            <div style={{ height: 4, borderRadius: 2, background: "#e5e7eb", marginBottom: 6, width: "60%" }} />
            <span
              style={{
                display: "inline-block",
                padding: "2px 8px",
                background: theme.tagBg,
                color: theme.tagColor,
                fontSize: 10,
                fontWeight: 700,
                borderRadius: 9999,
                marginTop: 4,
              }}
            >
              Chapter {index + 1}
            </span>
          </div>
        )}
      </div>
      <div style={{ direction: "ltr" }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#017eeb",
            marginBottom: 8,
          }}
        >
          Chapter {index + 1}
        </div>
        <h3
          style={{
            fontSize: 26,
            fontWeight: 800,
            letterSpacing: "-0.6px",
            lineHeight: 1.25,
            color: "#0d0f1a",
            marginBottom: 14,
          }}
          dangerouslySetInnerHTML={{ __html: chapter?.Title || "" }}
        />
        {chapter?.Description1 && (
          <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 14 }}>
            {chapter.Description1}
          </p>
        )}
        {chapter?.Description2 && (
          <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 18 }}>
            {chapter.Description2}
          </p>
        )}
        {chapter?.ListItem?.length > 0 && (
          <ul style={{ listStyle: "none", padding: 0, marginBottom: 4 }}>
            {chapter.ListItem.map(
              ({ Display_text }, i) =>
                Display_text && (
                  <li
                    key={i}
                    style={{
                      position: "relative",
                      paddingLeft: 28,
                      marginBottom: 10,
                      fontSize: 15,
                      color: "#212121",
                      lineHeight: 1.55,
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 3,
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "rgba(1,126,235,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12L10 17L19 7"
                          stroke="#017eeb"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {Display_text}
                  </li>
                )
            )}
          </ul>
        )}
      </div>
    </article>
  );
};

const WhatIsInsideBookSection = ({ bookDescription, buttontext }) => {
  const chapters = (bookDescription || []).slice(1).filter((c) => c?.Title);

  return (
    <section
      className="main-section-padding"
      style={{ background: "#fafafa" }}
    >
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
        <div className="text-center" style={{ marginBottom: 48 }}>
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
            What's Inside
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
            dangerouslySetInnerHTML={{
              __html: bookDescription?.[0]?.Key || "Inside the Guide",
            }}
          />
          {bookDescription?.[0]?.Value && (
            <p
              style={{
                fontSize: 17,
                color: "#6b7280",
                maxWidth: 640,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
              dangerouslySetInnerHTML={{ __html: bookDescription[0].Value }}
            />
          )}
        </div>

        <style>{`
          @media (max-width: 980px) {
            .ebk-chapter-row { grid-template-columns: 1fr !important; gap: 28px !important; padding: 24px !important; direction: ltr !important; }
          }
        `}</style>

        {chapters.map((chapter, index) => (
          <ChapterRow
            key={index}
            chapter={chapter}
            index={index}
            reverse={index % 2 === 1}
          />
        ))}

        <div className="text-center" style={{ marginTop: 40 }}>
          <Link
            href="#download-ebook-form"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#017eeb",
              color: "#fff",
              border: "1px solid #017eeb",
              borderRadius: 6,
              padding: "16px 32px",
              fontWeight: 600,
              fontSize: 16,
              textDecoration: "none",
              transition: "all 0.3s",
            }}
          >
            {buttontext || "Get the Full Guide (Free)"} →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatIsInsideBookSection;
