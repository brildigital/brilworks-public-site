"use client";
import Link from "next/link";
import "../styles/ServiceLightTheme.css";

const CASE_STUDIES = [
  {
    slug: "saas-data-quality",
    classKey: "cs-saas",
    industryLabel: "SaaS · Analytics",
    title: "Reducing bad data incidents by 90% for a growing SaaS company.",
    subtitle:
      "A B2B SaaS platform relied on analytics for product decisions, customer success, and executive reporting. We built a data quality and observability layer that caught issues before they reached the business.",
    stats: [
      { value: "90%", label: "Fewer bad data incidents" },
      { value: "75%", label: "Faster issue detection" },
    ],
  },
  {
    slug: "customer-data-platform",
    classKey: "cs-saas",
    industryLabel: "SaaS · Customer Data",
    title:
      "Unifying customer data across 11 systems into a single source of truth.",
    subtitle:
      "A growing SaaS company had customer information scattered across sales, support, billing, product, and marketing platforms. We built a unified customer data platform that gave the entire company a shared view of every customer.",
    stats: [
      { value: "11 → 1", label: "Systems consolidated" },
      { value: "80%", label: "Faster customer insights" },
    ],
  },
  {
    slug: "ecommerce-analytics-platform",
    classKey: "cs-ecommerce",
    industryLabel: "E-Commerce",
    title: "Reducing reporting delays from days to minutes for retailer.",
    subtitle:
      "An omnichannel retailer had data spread across Shopify, Amazon, Meta Ads, Google Ads, and its ERP system. We built a centralized analytics platform that gave every team the same answers.",
    stats: [
      { value: "85%", label: "Less reporting time" },
      { value: "5×", label: "Faster dashboard performance" },
    ],
  },
  {
    slug: "fintech-pipeline-optimization",
    classKey: "cs-fintech",
    industryLabel: "Fintech",
    title: "Cutting a fintech's pipeline costs 60% while making it 4x faster.",
    subtitle:
      "A payments-analytics platform came to us to fix a slow nightly job. We rebuilt the pipeline underneath it instead, in stages, while it kept running.",
    stats: [
      { value: "60%", label: "Lower warehouse cost" },
      { value: "4×", label: "Faster pipeline" },
    ],
  },
];

const CaseStudiesHub = () => {
  return (
    <>
      <style>{`
        .cs-card { transition: all 0.3s; }
        .cs-card:hover { border-color: #2f6bff; transform: translateY(-4px); box-shadow: 0 12px 32px rgba(11,30,51,0.08); }
        .cs-card:hover .cs-arrow { transform: translateX(4px); }
        .cs-saas .cs-cover { background: linear-gradient(135deg, #072a52, #1e40af 60%, #60a5fa); }
        .cs-saas .cs-tag { background: #dbeafe; color: #1e40af; }
        .cs-fintech .cs-cover { background: linear-gradient(135deg, #1a0b3a, #4f46e5 60%, #a855f7); }
        .cs-fintech .cs-tag { background: #f3e8ff; color: #6b21a8; }
        .cs-ecommerce .cs-cover { background: linear-gradient(135deg, #064e3b, #059669 60%, #34d399); }
        .cs-ecommerce .cs-tag { background: #d1fae5; color: #065f46; }
        .cs-dataeng .cs-cover { background: linear-gradient(135deg, #0c3a4a, #0d9488 60%, #14b8a6); }
        .cs-dataeng .cs-tag { background: #ccfbf1; color: #115e59; }
        .cs-ai .cs-cover { background: linear-gradient(135deg, #0f172a, #6366f1 60%, #818cf8); }
        .cs-ai .cs-tag { background: #e0e7ff; color: #3730a3; }
        .cs-analytics .cs-cover { background: linear-gradient(135deg, #451a03, #d97706 60%, #fbbf24); }
        .cs-analytics .cs-tag { background: #fef3c7; color: #92400e; }
      `}</style>

      {/* ============ HERO ============ */}
      <section
        className="svc-hero-bg relative overflow-hidden"
        style={{ padding: "120px 0 80px" }}
      >
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-10">
          <nav
            style={{ fontSize: 13, color: "#6b7a8a", marginBottom: 20 }}
            aria-label="Breadcrumb"
          >
            <Link href="/" style={{ color: "#566678" }}>
              Home
            </Link>
            <span style={{ margin: "0 8px", opacity: 0.5 }}>›</span>
            <span style={{ color: "#0b1e33" }}>Case Studies</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-[60px] items-center">
            <div>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 text-[12px] font-semibold uppercase border"
                style={{
                  background: "#ffffff",
                  borderColor: "#e4eaf1",
                  color: "#566678",
                  letterSpacing: "0.1em",
                  boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)",
                }}
              >
                Case Studies
              </span>
              <h1
                className="font-extrabold !mb-5"
                style={{
                  fontSize: "clamp(34px, 4vw, 54px)",
                  letterSpacing: "-1.5px",
                  lineHeight: 1.1,
                  color: "#0b1e33",
                }}
              >
                Real Engagements.{" "}
                <span style={{ color: "#2f6bff" }}>Real Outcomes.</span>
              </h1>
              <p
                className="!mb-0"
                style={{
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: "#566678",
                  maxWidth: 620,
                }}
              >
                A closer look at how we've helped SaaS, fintech, and e-commerce
                teams fix broken data, cut costs, and ship faster — with the
                architecture, tradeoffs, and outcomes called out.
              </p>
            </div>

            {/* Stats grid — right side */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: `${CASE_STUDIES.length}`, label: "Case Studies" },
                  { value: "3", label: "Industries Covered" },
                  { value: "90%+", label: "Avg. Efficiency Gain" },
                  { value: "100%", label: "Real Architecture & Tradeoffs" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl transition-all svc-stat-card"
                    style={{ padding: "28px 24px" }}
                  >
                    <div
                      className="font-extrabold leading-none mb-2"
                      style={{
                        color: "#2f6bff",
                        fontSize: "clamp(32px, 3vw, 42px)",
                        letterSpacing: "-1px",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        color: "#6b7a8a",
                        fontSize: 13,
                        fontWeight: 500,
                        lineHeight: 1.4,
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CASE STUDY GRID ============ */}
      <section style={{ background: "#fff", padding: "72px 0 96px" }}>
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-8">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}/`}
                className={`cs-card ${cs.classKey}`}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 20,
                  padding: 28,
                  background: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                }}
              >
                <div
                  className="cs-cover"
                  style={{
                    borderRadius: 14,
                    marginBottom: 22,
                    padding: "28px 24px",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    gap: 32,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.25) 0%, transparent 50%)",
                    }}
                  />
                  {cs.stats.map((s) => (
                    <div
                      key={s.label}
                      style={{ position: "relative", zIndex: 1, color: "#fff" }}
                    >
                      <div
                        style={{
                          fontSize: "clamp(28px, 2.6vw, 36px)",
                          fontWeight: 800,
                          letterSpacing: "-1px",
                          lineHeight: 1,
                        }}
                      >
                        {s.value}
                      </div>
                      <div
                        style={{ fontSize: 12, opacity: 0.75, marginTop: 6 }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <span
                  className="cs-tag"
                  style={{
                    display: "inline-flex",
                    alignSelf: "flex-start",
                    alignItems: "center",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: 9999,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  {cs.industryLabel}
                </span>
                <h3
                  className="!mb-2.5"
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    letterSpacing: "-0.4px",
                    lineHeight: 1.3,
                    color: "#0b1e33",
                  }}
                >
                  {cs.title}
                </h3>
                <p
                  className="!mb-6"
                  style={{
                    fontSize: 14,
                    color: "#566678",
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                >
                  {cs.subtitle}
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: "#2f6bff",
                    fontWeight: 700,
                    fontSize: 14,
                  }}
                >
                  Read Case Study{" "}
                  <span
                    className="cs-arrow"
                    style={{ transition: "transform 0.25s" }}
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section
        className="svc-mid-cta-bg relative overflow-hidden text-center"
        style={{ padding: "56px 0" }}
      >
        <div className="absolute inset-0 pointer-events-none svc-mid-cta-glow" />
        <div
          className="relative mx-auto px-5 md:px-10"
          style={{ maxWidth: 700, zIndex: 1 }}
        >
          <h3
            className="font-extrabold mb-3.5"
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              color: "#fff",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
            }}
          >
            Want outcomes like these for your product?
          </h3>
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 16,
              lineHeight: 1.7,
            }}
          >
            Tell us what's broken or slow today and get a free consultation on
            how we'd approach it.
          </p>
          <a
            href="/contact-us/"
            className="mt-7 inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
            style={{
              background: "#fff",
              color: "#2f6bff",
              border: "1px solid #fff",
              padding: "16px 32px",
              fontSize: 16,
            }}
          >
            Get Free Consultation
          </a>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesHub;
