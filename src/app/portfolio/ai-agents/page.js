import Link from "next/link";
import { aiAgentCaseStudies } from "./[slug]/content";

export const metadata = {
  title: "AI Agent Solutions | Brilworks",
  description:
    "Production-grade AI agent patterns Brilworks builds and ships — planning, content ops, research, social, finance, engineering, education, and more.",
  openGraph: {
    title: "AI Agent Solutions | Brilworks",
    description:
      "Production-grade AI agent patterns Brilworks builds and ships — planning, content ops, research, social, finance, engineering, education, and more.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/ai-agents/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/ai-agents/`,
  },
};

const pageCss = `
  .cs-page { color: #0F1724; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }

  /* Hero */
  .cs-hero { max-width: 1200px; margin: 0 auto; padding: 140px 40px 48px; }
  @media (max-width: 768px) { .cs-hero { padding: 110px 20px 32px; } }
  .cs-hero h1 { font-size: clamp(2.2rem, 4.2vw, 3.2rem); font-weight: 700; letter-spacing: -0.02em; line-height: 1.1; margin: 0 0 20px; color: #0F1724; max-width: 820px; }
  .cs-hero-sub { font-size: 1.1rem; color: #5A6B82; line-height: 1.55; max-width: 720px; margin: 0; }

  /* Section header */
  .cs-header { max-width: 1200px; margin: 0 auto; padding: 48px 40px 0; }
  @media (max-width: 768px) { .cs-header { padding: 32px 20px 0; } }
  .cs-label { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #0F1724; margin-bottom: 16px; }
  .cs-header h2 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; letter-spacing: -0.02em; line-height: 1.1; margin: 0; color: #0F1724; }
  .cs-header-row { display: flex; justify-content: space-between; align-items: flex-end; }
  .cs-browse { font-size: 0.95rem; font-weight: 500; color: #0F1724; text-decoration: none; white-space: nowrap; display: inline-flex; align-items: center; gap: 6px; }
  .cs-browse:hover { color: #555; }
  @media (max-width: 600px) { .cs-header-row { flex-direction: column; align-items: flex-start; gap: 16px; } }

  /* Case study rows */
  .cs-list { max-width: 1200px; margin: 0 auto; padding: 48px 40px 80px; }
  @media (max-width: 768px) { .cs-list { padding: 32px 20px 60px; } }

  .cs-row { display: grid; grid-template-columns: 160px 1fr 160px 160px 160px; align-items: start; gap: 24px; padding: 32px 0; border-top: 1px solid #E5E5E5; text-decoration: none; color: inherit; transition: background 0.15s; }
  .cs-row:last-child { border-bottom: 1px solid #E5E5E5; }
  .cs-row:hover { background: #FAFAFA; }
  @media (max-width: 1024px) {
    .cs-row { grid-template-columns: 140px 1fr 130px 130px 130px; gap: 16px; }
  }
  @media (max-width: 900px) {
    .cs-row { grid-template-columns: 1fr; gap: 16px; padding: 24px 0; }
  }

  /* Left column: category + agent name */
  .cs-category { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #888; margin-bottom: 4px; }
  .cs-agent-name { font-size: 1rem; font-weight: 600; color: #0F1724; line-height: 1.3; }

  /* Middle: description */
  .cs-desc { font-size: 1rem; color: #333; line-height: 1.5; }

  /* Metrics: each in its own grid column */
  .cs-metric { display: flex; flex-direction: column; align-items: flex-start; }
  .cs-metric-value { font-size: 1.4rem; font-weight: 700; color: #0F1724; line-height: 1.2; white-space: nowrap; }
  .cs-metric-label { font-size: 0.7rem; color: #888; margin-top: 2px; line-height: 1.3; }

  /* Mobile: metrics row */
  @media (max-width: 900px) {
    .cs-metrics-mobile { display: flex; gap: 24px; flex-wrap: wrap; }
  }
`;

/* Extract a short category and agent name from the chip field.
   chip format: "Planning agent · Forces review before code"
   → category: "PLANNING", name: first part before " · " */
function parseChip(chip) {
  const parts = chip.split(" · ");
  return {
    category: (parts[0] || "").replace(/ agent$/i, "").trim(),
    subtitle: parts[1] || "",
  };
}

/* Map of slug → short display name */
const agentDisplayNames = {
  planner: "Planner",
  marketing: "Marketing Agent",
  research: "Research Agent",
  xagent: "X/Twitter Agent",
  lab: "Lab Agent",
  stock: "Stock Analyst",
  ideas: "Ideas Agent",
  finance: "Finance Agent",
  builder: "Builder Agent",
  ops: "Ops Agent",
  trainer: "Trainer Agent",
  video: "Video Agent",
  admissions: "Admissions OS",
  audit: "Tax Audit",
  invoicify: "Invoicify Agent",
  statementflow: "Statement Analyzer",
};

export default function Page() {
  const entries = Object.entries(aiAgentCaseStudies);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />
      <main className="cs-page">
        <section className="cs-hero">
          <h1>Production-grade AI agents, engineered for outcomes.</h1>
          <p className="cs-hero-sub">
            {entries.length} patterns Brilworks has built and shipped —
            planning, content operations, research, finance, engineering,
            media, and education. Pick a pattern to see the challenge it
            solves, how it works, and what the outcomes look like.
          </p>
        </section>

        <header className="cs-header">
          <p className="cs-label">Case Studies</p>
          <div className="cs-header-row">
            <h2>Work we&apos;ve shipped.</h2>
            <Link href="/portfolio/" className="cs-browse">
              Browse all {entries.length} →
            </Link>
          </div>
        </header>

        <section className="cs-list">
          {entries.map(([slug, data]) => {
            const { category } = parseChip(data.chip);
            const name = agentDisplayNames[slug] || slug;
            const stats = data.heroStats || [];

            return (
              <Link
                key={slug}
                href={`/portfolio/ai-agents/${slug}/`}
                className="cs-row"
              >
                <div className="cs-identity">
                  <div className="cs-category">{category}</div>
                  <div className="cs-agent-name">{name}</div>
                </div>

                <div className="cs-desc">{data.heroHeadline}</div>

                {stats.slice(0, 3).map((s, i) => (
                  <div className="cs-metric" key={i}>
                    <div className="cs-metric-value">{s.value}</div>
                    <div className="cs-metric-label">{s.label}</div>
                  </div>
                ))}
              </Link>
            );
          })}
        </section>
      </main>
    </>
  );
}
