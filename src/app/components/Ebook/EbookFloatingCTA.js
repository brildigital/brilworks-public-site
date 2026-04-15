"use client";
import React, { useEffect, useState } from "react";

const EbookFloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#download-ebook-form"
      aria-label="Scroll to download form"
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 50,
        background: "linear-gradient(135deg, #017eeb, #00dbd3)",
        color: "#fff",
        padding: "14px 22px",
        borderRadius: 9999,
        boxShadow: "0 20px 40px -10px rgba(1,126,235,0.55)",
        fontSize: 14,
        fontWeight: 700,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        cursor: "pointer",
        textDecoration: "none",
        transition: "transform 0.3s",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 5V19M5 12L12 19L19 12"
          stroke="#fff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Get Free PDF
    </a>
  );
};

export default EbookFloatingCTA;
