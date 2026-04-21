import React from "react";

const TESTIMONIALS = [
  {
    initials: "DK",
    name: "Daniel K.",
    role: "CTO, Series B FinTech",
    quote:
      "The framework in this guide saved us weeks of architecture debate. The cost model alone paid for our entire budget review.",
  },
  {
    initials: "PS",
    name: "Priya S.",
    role: "VP Engineering, HealthTech",
    quote:
      "Finally — a Brilworks ebook that admits where the sharp edges are. We changed two decisions based on it before our next sprint.",
  },
];

const WhyBrilworks = ({ title, description }) => {
  return (
    <section
      className="main-section-padding"
      style={{
        background: "#0d0f1a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(ellipse 50% 40% at 80% 20%, rgba(26,92,204,0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 10% 90%, rgba(0,180,216,0.10) 0%, transparent 60%)",
        }}
      />
      <div
        className="container max-w-[1280px] md:px-10 px-5 mx-auto"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="text-center" style={{ marginBottom: 56 }}>
          <span
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#00b4d8",
              marginBottom: 14,
            }}
          >
            Reader Reviews
          </span>
          <h2
            style={{
              fontSize: "clamp(30px, 3.3vw, 42px)",
              fontWeight: 800,
              letterSpacing: "-1px",
              lineHeight: 1.1,
              color: "#fff",
              marginBottom: 14,
            }}
            dangerouslySetInnerHTML={{
              __html: title || "What Readers Are Saying",
            }}
          />
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 640,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
            dangerouslySetInnerHTML={{
              __html:
                description ||
                "Honest feedback from CTOs and engineering managers who've applied the playbooks.",
            }}
          />
        </div>

        <div
          className="grid md:grid-cols-2 grid-cols-1 gap-5"
          style={{ maxWidth: 900, margin: "0 auto" }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 20,
                padding: 32,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <span
                style={{
                  color: "#f7b500",
                  fontSize: 14,
                  letterSpacing: 2,
                  marginBottom: 16,
                  display: "block",
                }}
                aria-label="5 stars"
              >
                ★★★★★
              </span>
              <blockquote
                style={{
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.88)",
                  fontWeight: 400,
                  marginBottom: 24,
                }}
              >
                “{t.quote}”
              </blockquote>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  paddingTop: 20,
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #1a5ccc, #00dbd3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 15,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <strong
                    style={{
                      color: "#fff",
                      fontSize: 15,
                      fontWeight: 700,
                      display: "block",
                    }}
                  >
                    {t.name}
                  </strong>
                  <span
                    style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}
                  >
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBrilworks;
