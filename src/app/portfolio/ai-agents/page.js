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

const indexCss = `
  .aiai { --brand-primary: #0A4D8C; --brand-deep: #0B2545; --brand-soft: #F4F8FC; --brand-line: #D9E3EF; --brand-ink: #0F1724; --brand-muted: #5A6B82; color: var(--brand-ink); line-height: 1.65; }
  .aiai h1, .aiai h2, .aiai h3, .aiai h4 { font-family: 'Playfair Display', Georgia, serif; font-weight: 700; letter-spacing: -0.01em; color: var(--brand-deep); }
  .aiai h1 { font-size: clamp(2.2rem, 4.2vw, 3.4rem); line-height: 1.08; margin-bottom: 20px !important; }
  .aiai h2 { font-size: clamp(1.6rem, 2.6vw, 2.2rem); line-height: 1.2; }
  .aiai h3 { font-size: 1.3rem; line-height: 1.3; }
  .aiai p { font-size: 1rem; }
  .aiai a { color: var(--brand-primary); text-decoration: none; }
  .aiai .container { max-width: 1280px; margin: 0 auto !important; padding: 0 20px; }
  @media (min-width: 768px) { .aiai .container { padding: 0 40px; } }

  .aiai .hero { padding: 130px 0 72px; background: linear-gradient(180deg, var(--brand-soft) 0%, #fff 100%); border-bottom: 1px solid var(--brand-line); }
  @media (min-width: 768px) { .aiai .hero { padding: 150px 0 88px; } }
  .aiai .hero-inner { max-width: 820px; }
  .aiai .hero .chip { display: inline-flex; align-items: center; gap: 10px; padding: 7px 15px; background: #fff; border: 1px solid var(--brand-line); color: var(--brand-deep); border-radius: 999px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; font-weight: 500; margin-bottom: 20px !important; }
  .aiai .hero .chip .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--brand-primary); }
  .aiai .hero .subhead { font-size: 1.15rem; color: var(--brand-muted); max-width: 720px; line-height: 1.55; }

  .aiai .grid-section { padding: 72px 0 96px; }
  .aiai .grid { display: grid; grid-template-columns: 1fr; gap: 22px; }
  @media (min-width: 700px) { .aiai .grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1024px) { .aiai .grid { grid-template-columns: repeat(3, 1fr); gap: 26px; } }

  .aiai .card { display: flex; flex-direction: column; background: #fff; border: 1px solid var(--brand-line); border-radius: 14px; padding: 28px 26px; transition: transform 0.18s, border-color 0.18s, box-shadow 0.18s; position: relative; overflow: hidden; }
  .aiai .card:hover { border-color: var(--card-accent); transform: translateY(-3px); box-shadow: 0 12px 28px rgba(11,37,69,0.08); text-decoration: none; }
  .aiai .card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: var(--card-accent); }
  .aiai .card .chip { display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; background: var(--card-accent-soft); color: var(--card-accent-deep); border-radius: 999px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.72rem; font-weight: 500; margin-bottom: 18px !important; align-self: flex-start; }
  .aiai .card .chip .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--card-accent); }
  .aiai .card h3 { margin-bottom: 14px !important; }
  .aiai .card p.tag { color: var(--brand-muted); font-size: 0.95rem; line-height: 1.55; margin-bottom: 22px !important; flex: 1; }
  .aiai .card .stat-row { display: flex; gap: 18px; padding-top: 18px; border-top: 1px solid var(--brand-line); margin-bottom: 18px !important; flex-wrap: wrap; }
  .aiai .card .stat { display: flex; flex-direction: column; min-width: 0; }
  .aiai .card .stat .v { font-family: 'Playfair Display', Georgia, serif; font-size: 1.3rem; font-weight: 700; color: var(--card-accent-deep); line-height: 1; }
  .aiai .card .stat .l { font-size: 0.72rem; color: var(--brand-muted); margin-top: 4px !important; line-height: 1.35; }
  .aiai .card .more { font-size: 0.86rem; font-weight: 500; color: var(--card-accent-deep); display: inline-flex; align-items: center; gap: 6px; align-self: flex-start; }
  .aiai .card:hover .more { color: var(--card-accent); }

  .aiai .cta-band { background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-deep) 100%); color: #fff; padding: 72px 0; text-align: center; }
  .aiai .cta-band h2 { color: #fff; margin-bottom: 14px !important; }
  .aiai .cta-band p { color: rgba(255,255,255,0.92); font-size: 1.05rem; max-width: 600px; margin: 0 auto 28px !important; }
  .aiai .cta-band .btn { display: inline-flex; align-items: center; gap: 8px; padding: 13px 26px; background: #fff; color: var(--brand-deep); border-radius: 8px; font-weight: 500; font-size: 0.95rem; text-decoration: none; transition: transform 0.18s; }
  .aiai .cta-band .btn:hover { transform: translateY(-1px); text-decoration: none; }
`;

export default function Page() {
  const entries = Object.entries(aiAgentCaseStudies);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: indexCss }} />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
      />
      <main className="aiai">
        <header className="hero">
          <div className="container">
            <div className="hero-inner">
              <div className="chip">
                <span className="dot"></span>
                AI agent solutions · {entries.length} patterns
              </div>
              <h1>Production-grade AI agents, engineered for outcomes.</h1>
              <p className="subhead">
                {entries.length} patterns Brilworks has built and shipped —
                planning, content operations, research, finance, engineering,
                media, and education. Pick a pattern to see the challenge it
                solves, how it works, what the outcomes look like, and whether
                it fits.
              </p>
            </div>
          </div>
        </header>

        <section className="grid-section">
          <div className="container">
            <div className="grid">
              {entries.map(([slug, data]) => (
                <Link
                  key={slug}
                  href={`/portfolio/ai-agents/${slug}/`}
                  className="card"
                  style={{
                    "--card-accent": data.accent,
                    "--card-accent-soft": data.accentSoft,
                    "--card-accent-deep": data.accentDeep,
                  }}
                >
                  <div className="chip">
                    <span className="dot"></span>
                    {data.chip}
                  </div>
                  <h3>{data.heroHeadline}</h3>
                  <p className="tag">{data.breadcrumb}</p>
                  <div className="stat-row">
                    {data.heroStats.slice(0, 2).map((s, i) => (
                      <div className="stat" key={i}>
                        <div className="v">{s.value}</div>
                        <div className="l">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <span className="more">See the case study →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container">
            <h2>Not sure which pattern fits?</h2>
            <p>
              Book a 30-minute scoping call and we'll map your workflow against
              the twelve patterns, tell you honestly what fits and what
              doesn't, and what it would take to ship.
            </p>
            <a href="https://www.brilworks.com/contact/" className="btn">
              Book a scoping call →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
