import Image from "next/image";
import React from "react";
import PortfolioContactForm from "../Portfolio/PortfolioContactForm";

const stripHtml = (html = "") => String(html).replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

const EbookFirstSection = ({
  title,
  imageSrc,
  ebookFileUrl,
  whatsInside,
  readTimeMinutes,
  pageCount,
}) => {
  const plainTitle = stripHtml(title);
  const previews = (whatsInside && whatsInside.length ? whatsInside : [
    "The frameworks, checklists, and decision trees we use in real projects",
    "Step-by-step playbooks — skimmable, scannable, shipped-today",
    "Trade-offs, red flags, and real examples from live engagements",
    "A practical 30–40 minute read, zero fluff, forever reference",
  ]).slice(0, 4);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#0d0f1a",
        padding: "120px 0 80px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(ellipse 55% 45% at 80% 30%, rgba(26,92,204,0.22) 0%, transparent 70%), radial-gradient(ellipse 40% 55% at 15% 85%, rgba(0,180,216,0.10) 0%, transparent 60%), linear-gradient(160deg, #0d0f1a 0%, #111428 50%, #0a0c1e 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.06,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        id="download-ebook-form"
        className="container max-w-[1280px] md:px-10 px-5 mx-auto"
        style={{ position: "relative", zIndex: 1 }}
      >
        <nav
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.55)",
            marginBottom: 20,
          }}
          aria-label="Breadcrumb"
        >
          <a href="/" style={{ color: "rgba(255,255,255,0.75)" }}>
            Home
          </a>
          <span style={{ margin: "0 8px", opacity: 0.5 }}>›</span>
          <a href="/ebooks/" style={{ color: "rgba(255,255,255,0.75)" }}>
            Ebooks
          </a>
          <span style={{ margin: "0 8px", opacity: 0.5 }}>›</span>
          <span style={{ color: "rgba(255,255,255,0.9)" }}>{plainTitle}</span>
        </nav>

        <div className="grid lg:grid-cols-[1.1fr_440px] grid-cols-1 gap-10 lg:gap-14 items-start">
          <div>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(26,92,204,0.18)",
                border: "1px solid rgba(26,92,204,0.35)",
                borderRadius: 9999,
                padding: "7px 16px",
                color: "#00b4d8",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L14.39 8.26L21 9.27L16 14.14L17.18 20.99L12 17.77L6.82 20.99L8 14.14L3 9.27L9.61 8.26L12 2Z"
                  fill="#00dbd3"
                />
              </svg>
              Free Ebook · No Paywall
            </span>

            <h1
              style={{
                fontSize: "clamp(32px, 3.6vw, 50px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-1.3px",
                color: "#fff",
                marginBottom: 20,
              }}
              dangerouslySetInnerHTML={{ __html: title || "" }}
            />

            <p
              className="!mb-5"
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.70)",
                marginTop: 0,
                maxWidth: 560,
              }}
            >
              A practical, expert-crafted playbook by Brilworks engineering
              leads — rooted in real projects shipped for startups and
              enterprises. Free, instant PDF, no sales pitch.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 36,
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex" }} aria-hidden="true">
                {["SK", "MJ", "AP", "RT"].map((i, idx) => (
                  <span
                    key={i}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #1A5CCC, #00b4d8)",
                      border: "2px solid #0d0f1a",
                      marginLeft: idx === 0 ? 0 : -10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 13,
                    }}
                  >
                    {i}
                  </span>
                ))}
              </div>
              <div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  <strong style={{ color: "#fff" }}>2,000+</strong>{" "}
                  engineering leaders have downloaded this
                </div>
                <span
                  style={{
                    color: "#f7b500",
                    fontSize: 14,
                    letterSpacing: 2,
                    display: "block",
                    marginTop: 6,
                  }}
                  aria-label="4.8 stars"
                >
                  ★★★★★{" "}
                  <span
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      letterSpacing: 0,
                    }}
                  >
                    4.8 from 127 reviews
                  </span>
                </span>
              </div>
            </div>

            <div
              style={{
                marginTop: 4,
                paddingTop: 28,
                borderTop: "1px solid rgba(255,255,255,0.08)",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px 32px",
              }}
              className="ebk-whats-inside"
              aria-label="What's inside the guide"
            >
              {previews.map((p, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    color: "rgba(255,255,255,0.88)",
                    fontSize: 14,
                    lineHeight: 1.45,
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: "rgba(0,219,211,0.15)",
                      border: "1px solid rgba(0,219,211,0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 2,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12L10 17L19 7"
                        stroke="#00dbd3"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: p }} />
                </div>
              ))}
            </div>
          </div>

          <aside
            style={{
              background: "#fff",
              borderRadius: 18,
              padding: "24px 22px 22px",
              boxShadow: "0 30px 60px -20px rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,255,255,0.1)",
              position: "relative",
            }}
          >
            {imageSrc ? (
              <div
                style={{
                  width: 120,
                  margin: "-54px auto 14px",
                  filter: "drop-shadow(0 20px 40px rgba(1,126,235,0.5))",
                }}
              >
                <Image
                  src={imageSrc}
                  alt={`${plainTitle} — ebook cover`}
                  width={180}
                  height={252}
                  priority
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 8,
                  }}
                />
              </div>
            ) : (
              <div
                style={{
                  width: 140,
                  aspectRatio: "3/4",
                  margin: "-80px auto 20px",
                  borderRadius: 10,
                  background:
                    "linear-gradient(160deg, #1a3a8f 0%, #017eeb 50%, #00dbd3 100%)",
                  padding: "18px 14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "left",
                  boxShadow: "0 30px 60px -15px rgba(1,126,235,0.55)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                    color: "#fff",
                    lineHeight: 1.2,
                    letterSpacing: "-0.3px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {plainTitle}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.75)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  Brilworks
                </div>
              </div>
            )}

            <h2
              style={{
                fontSize: 20,
                fontWeight: 800,
                letterSpacing: "-0.4px",
                color: "#0d0f1a",
                textAlign: "center",
                marginBottom: 4,
                lineHeight: 1.25,
              }}
            >
              Get the Free Ebook
            </h2>
            <p
              style={{
                fontSize: 13,
                color: "#6b7280",
                textAlign: "center",
                marginBottom: 16,
              }}
            >
              Instant PDF. No credit card, no spam.
            </p>

            <PortfolioContactForm
              darkMode={false}
              showPhoneField={false}
              showCompanyField={true}
              downloadFileUrl={ebookFileUrl}
            />

            <p
              style={{
                textAlign: "center",
                marginTop: 10,
                fontSize: 11.5,
                color: "#9ca3af",
                lineHeight: 1.5,
              }}
            >
              No spam · Unsubscribe anytime
            </p>
          </aside>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .ebk-whats-inside { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default EbookFirstSection;
