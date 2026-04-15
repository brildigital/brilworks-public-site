"use client";
import React, { useState } from "react";

const FAQS = [
  { q: "Is the ebook really free?", a: "Yes — 100% free. Drop your email and we'll send the PDF instantly. No credit card, no paywall." },
  { q: "Who is this guide for?", a: "CTOs, VPs of Engineering, engineering managers, and startup founders — anyone making technical decisions or shipping products." },
  { q: "How long does it take to read?", a: "About 30–40 minutes cover-to-cover. Skimmable in 10 minutes if you just want the frameworks and checklists." },
  { q: "Can I share this with my team?", a: "Absolutely — that's the whole point. Forward the PDF, drop it in your team docs, or use it in an internal tech talk." },
  { q: "Will I get spam after I download?", a: "No. You'll get the ebook, and one email every 4–6 weeks when we publish a new one. One-click unsubscribe, always." },
  { q: "Does Brilworks help with this directly?", a: "Yes — we offer engineering services for everything we write about. The ebook is useful either way." },
];

const EbookFAQ = () => {
  const [openFaq, setOpenFaq] = useState(0);

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
            FAQ
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
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          {FAQS.map((f, i) => (
            <div
              key={f.q}
              style={{ borderBottom: "1px solid #e5e7eb", padding: "20px 0" }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: 0,
                  padding: 0,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#0d0f1a",
                  letterSpacing: "-0.2px",
                  textAlign: "left",
                }}
                aria-expanded={openFaq === i}
              >
                <span>{f.q}</span>
                <span
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    color: "#017eeb",
                    flexShrink: 0,
                    marginLeft: 16,
                  }}
                >
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>
              {openFaq === i && (
                <p
                  style={{
                    margin: "14px 0 0",
                    fontSize: 15,
                    color: "#6b7280",
                    lineHeight: 1.65,
                  }}
                >
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EbookFAQ;
