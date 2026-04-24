import Link from "next/link";
import { notFound } from "next/navigation";
import { aiAgentCaseStudies } from "./content";

export async function generateStaticParams() {
  return Object.keys(aiAgentCaseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const data = aiAgentCaseStudies[params.slug];
  if (!data) return {};
  return {
    title: `${data.title} | Brilworks`,
    description: data.description,
    openGraph: {
      title: `${data.title} | Brilworks`,
      description: data.description,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/ai-agents/${params.slug}/`,
      siteName:
        "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
      locale: "en-US",
      type: "article",
    },
    twitter: {
      title: `${data.title} | Brilworks`,
      description: data.description,
      card: "summary_large_image",
      site: "@_Brilworks",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/ai-agents/${params.slug}/`,
    },
  };
}

const pageCss = `
  .aiac { --brand-primary: #0A4D8C; --brand-deep: #0B2545; --brand-accent: #1E6FBF; --brand-soft: #F4F8FC; --brand-line: #D9E3EF; --brand-ink: #0F1724; --brand-muted: #5A6B82; --brand-success: #0E8A5F; --brand-danger: #B91C1C; --accent: #EA580C; --accent-soft: #FFEDD5; --accent-deep: #9A3412; color: var(--brand-ink); line-height: 1.65; }
  .aiac h1, .aiac h2, .aiac h3, .aiac h4 { font-family: 'Playfair Display', Georgia, serif; font-weight: 700; letter-spacing: -0.01em; color: var(--brand-deep); }
  .aiac h1 { font-size: clamp(2.2rem, 4.2vw, 3.6rem); line-height: 1.08; margin-bottom: 24px !important; }
  .aiac h2 { font-size: clamp(1.7rem, 2.8vw, 2.4rem); line-height: 1.2; }
  .aiac h3 { font-size: 1.35rem; }
  .aiac h4 { font-size: 1.1rem; }
  .aiac p { font-size: 1rem; }
  .aiac a { color: var(--brand-primary); text-decoration: none; }
  .aiac a:hover { text-decoration: underline; }
  .aiac .container { max-width: 1280px; margin: 0 auto !important; padding: 0 20px; }
  .aiac .container-narrow { max-width: 780px; margin: 0 auto !important; padding: 0 20px; }
  @media (min-width: 768px) {
    .aiac .container { padding: 0 40px; }
    .aiac .container-narrow { padding: 0 40px; }
  }

  .aiac .breadcrumb { color: var(--brand-muted); font-size: 0.88rem; margin-bottom: 24px !important; }
  .aiac .breadcrumb a { color: var(--brand-muted); }
  .aiac .breadcrumb a:hover { color: var(--brand-primary); text-decoration: none; }
  .aiac .breadcrumb .sep { margin: 0 10px !important; color: var(--brand-line); }

  .aiac .hero { padding: 130px 0 88px; border-bottom: 1px solid var(--brand-line); background: linear-gradient(180deg, var(--accent-soft) 0%, #fff 100%); position: relative; overflow: hidden; }
  @media (min-width: 768px) { .aiac .hero { padding: 150px 0 104px; } }
  .aiac .hero::before { content: ''; position: absolute; top: -60px; right: -60px; width: 320px; height: 320px; border-radius: 50%; background: var(--accent); opacity: 0.08; }
  .aiac .hero-inner { position: relative; z-index: 1; max-width: 820px; }
  .aiac .hero .chip { display: inline-flex; align-items: center; gap: 10px; padding: 7px 15px; background: #fff; border: 1px solid var(--accent); color: var(--accent-deep); border-radius: 999px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; font-weight: 500; margin-bottom: 24px !important; }
  .aiac .hero .chip .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); }
  .aiac .hero .subhead { font-size: 1.15rem; color: var(--brand-muted); margin-bottom: 36px !important; max-width: 680px; line-height: 1.55; }
  .aiac .hero .actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 40px !important; }
  .aiac .btn { display: inline-flex; align-items: center; gap: 8px; padding: 13px 24px; border-radius: 8px; font-weight: 500; font-size: 0.95rem; transition: all 0.2s; text-decoration: none; cursor: pointer; border: none; }
  .aiac .btn-primary { background: var(--accent); color: #fff; }
  .aiac .btn-primary:hover { background: var(--accent-deep); text-decoration: none; transform: translateY(-1px); }
  .aiac .btn-outline { background: transparent; color: var(--brand-deep); border: 1px solid var(--brand-line); }
  .aiac .btn-outline:hover { border-color: var(--accent); color: var(--accent-deep); text-decoration: none; }
  .aiac .hero-stats { display: flex; gap: 40px; padding-top: 28px; border-top: 1px solid var(--brand-line); flex-wrap: wrap; }
  .aiac .hero-stats .s { display: flex; flex-direction: column; }
  .aiac .hero-stats .s .v { font-family: 'Playfair Display', Georgia, serif; font-size: 1.9rem; font-weight: 700; color: var(--accent-deep); line-height: 1; }
  .aiac .hero-stats .s .l { font-size: 0.82rem; color: var(--brand-muted); margin-top: 6px !important; max-width: 180px; }

  .aiac section { padding: 88px 0; }
  .aiac section.alt { background: var(--brand-soft); }
  .aiac .eyebrow { display: inline-block; color: var(--accent); font-weight: 600; font-size: 0.78rem; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 16px !important; }
  .aiac .section-title { margin-bottom: 24px !important; max-width: 780px; }

  .aiac .challenge p { font-size: 1.08rem; color: var(--brand-ink); margin-bottom: 20px !important; line-height: 1.7; max-width: 780px; }
  .aiac .challenge p.lead { font-size: 1.2rem; color: var(--brand-deep); font-weight: 500; border-left: 3px solid var(--accent); padding-left: 20px; margin-bottom: 32px !important; max-width: 780px; }
  .aiac .challenge strong { color: var(--brand-deep); }
  .aiac .challenge em { color: var(--accent-deep); font-style: italic; }

  .aiac .svg-wrap { background: #fff; border: 1px solid var(--brand-line); border-radius: 14px; padding: 36px; box-shadow: 0 4px 14px rgba(11,37,69,0.08); overflow: auto; margin-bottom: 40px !important; }
  .aiac .svg-wrap svg { width: 100%; height: auto; min-width: 680px; display: block; }
  .aiac svg .d-label { font-family: inherit; font-size: 13px; fill: var(--brand-deep); font-weight: 500; }
  .aiac svg .d-sub { font-family: inherit; font-size: 11px; fill: var(--brand-muted); }
  .aiac svg .d-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; fill: var(--brand-deep); }
  .aiac svg .box-a { fill: #fff; stroke: var(--accent); stroke-width: 1.5; }
  .aiac svg .box-soft { fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.2; }
  .aiac svg .box-deep { fill: var(--accent); }
  .aiac svg .arr { stroke: var(--brand-muted); stroke-width: 1.5; fill: none; marker-end: url(#ah); }
  .aiac svg .diamond { fill: #fff; stroke: var(--accent); stroke-width: 1.5; }
  .aiac .steps { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; margin-top: 8px !important; }
  @media (max-width: 720px) { .aiac .steps { grid-template-columns: 1fr; } }
  .aiac .step { background: #fff; border: 1px solid var(--brand-line); border-radius: 12px; padding: 28px 28px 24px; position: relative; }
  .aiac .step .n { position: absolute; top: -14px; left: 24px; width: 32px; height: 32px; border-radius: 50%; background: var(--accent); color: #fff; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 0.95rem; }
  .aiac .step h4 { margin: 8px 0 10px !important; line-height: 1.3; }
  .aiac .step p { color: var(--brand-muted); font-size: 0.95rem; line-height: 1.65; }
  .aiac .step p em { color: var(--accent-deep); font-style: italic; }

  .aiac .outcomes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  @media (max-width: 900px) { .aiac .outcomes { grid-template-columns: 1fr; } }
  .aiac .outcome { background: #fff; border: 1px solid var(--brand-line); border-radius: 14px; padding: 32px 30px; }
  .aiac .outcome .metric { font-family: 'Playfair Display', Georgia, serif; font-size: 2.8rem; font-weight: 700; color: var(--accent); line-height: 1; margin-bottom: 8px !important; }
  .aiac .outcome .metric .u { font-size: 0.95rem; color: var(--brand-muted); font-family: inherit; font-weight: 400; margin-left: 8px !important; }
  .aiac .outcome h4 { margin-bottom: 10px !important; font-size: 1.1rem; }
  .aiac .outcome p { color: var(--brand-muted); font-size: 0.92rem; line-height: 1.55; }
  .aiac .outcomes-note { margin-top: 32px !important; font-size: 0.85rem; color: var(--brand-muted); font-style: italic; text-align: center; }

  .aiac .fit-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
  @media (max-width: 720px) { .aiac .fit-grid { grid-template-columns: 1fr; } }
  .aiac .fit-col { background: #fff; border: 1px solid var(--brand-line); border-radius: 14px; padding: 32px 34px; }
  .aiac .fit-col.yes { border-top: 4px solid var(--brand-success); }
  .aiac .fit-col.no { border-top: 4px solid var(--brand-danger); }
  .aiac .fit-col h4 { margin-bottom: 20px !important; display: flex; align-items: center; gap: 12px; font-size: 1.15rem; }
  .aiac .fit-col h4 .ic { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.9rem; font-weight: 700; font-family: inherit; }
  .aiac .fit-col.yes h4 .ic { background: var(--brand-success); }
  .aiac .fit-col.no h4 .ic { background: var(--brand-danger); }
  .aiac .fit-col ul { list-style: none; margin: 0 !important; padding: 0; }
  .aiac .fit-col ul li { padding: 12px 0 12px 26px; position: relative; color: var(--brand-ink); font-size: 0.96rem; border-bottom: 1px solid var(--brand-line); line-height: 1.5; }
  .aiac .fit-col ul li:last-child { border: none; }
  .aiac .fit-col ul li::before { content: ''; position: absolute; left: 0; top: 19px; width: 12px; height: 12px; border-radius: 50%; }
  .aiac .fit-col.yes ul li::before { background: var(--brand-success); }
  .aiac .fit-col.no ul li::before { background: var(--brand-danger); }

  .aiac .cta-band { background: linear-gradient(135deg, var(--accent) 0%, var(--accent-deep) 100%); color: #fff; padding: 80px 0; text-align: center; }
  .aiac .cta-band h2 { color: #fff; margin-bottom: 16px !important; }
  .aiac .cta-band p { color: rgba(255,255,255,0.92); font-size: 1.1rem; max-width: 640px; margin: 0 auto 36px !important; }
  .aiac .cta-band .buttons { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .aiac .cta-band .btn-primary { background: #fff; color: var(--accent-deep); }
  .aiac .cta-band .btn-primary:hover { background: rgba(255,255,255,0.92); }
  .aiac .cta-band .btn-outline { color: #fff; border-color: rgba(255,255,255,0.4); }
  .aiac .cta-band .btn-outline:hover { background: rgba(255,255,255,0.1); border-color: #fff; }
`;

export default function Page({ params }) {
  const data = aiAgentCaseStudies[params.slug];
  if (!data) return notFound();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
      />
      <main
        className="aiac"
        style={{
          "--accent": data.accent,
          "--accent-soft": data.accentSoft,
          "--accent-deep": data.accentDeep,
        }}
      >
        <header className="hero">
          <div className="container">
            <div className="hero-inner">
              <div className="breadcrumb">
                <Link href="/">Home</Link>
                <span className="sep">/</span>
                <Link href="/portfolio/">Portfolio</Link>
                <span className="sep">/</span>
                <span>{data.breadcrumb}</span>
              </div>
              <div className="chip">
                <span className="dot"></span>
                {data.chip}
              </div>
              <h1>{data.heroHeadline}</h1>
              <p className="subhead">{data.heroSubhead}</p>
              <div className="actions">
                <a href="#cta" className="btn btn-primary">
                  Book a 30-min scoping call →
                </a>
                <a href="#how" className="btn btn-outline">
                  See how it works
                </a>
                {data.prototypeUrl && (
                  <a
                    href={data.prototypeUrl}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener"
                  >
                    View the live prototype →
                  </a>
                )}
              </div>
              <div className="hero-stats">
                {data.heroStats.map((s, i) => (
                  <div className="s" key={i}>
                    <div className="v">{s.value}</div>
                    <div className="l">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section id="challenge">
          <div className="container challenge">
            <span className="eyebrow">{data.challenge.eyebrow}</span>
            <h2 className="section-title">{data.challenge.title}</h2>
            <p
              className="lead"
              dangerouslySetInnerHTML={{ __html: data.challenge.lead }}
            />
            {data.challenge.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </section>

        <section id="how" className="alt">
          <div className="container">
            <span className="eyebrow">{data.how.eyebrow}</span>
            <h2 className="section-title">{data.how.title}</h2>

            <div
              className="svg-wrap"
              dangerouslySetInnerHTML={{ __html: data.how.svgHtml }}
            />

            <div className="steps">
              {data.how.steps.map((s) => (
                <div className="step" key={s.n}>
                  <div className="n">{s.n}</div>
                  <h4>{s.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: s.body }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="outcomes">
          <div className="container">
            <span className="eyebrow">{data.outcomes.eyebrow}</span>
            <h2 className="section-title">{data.outcomes.title}</h2>

            <div className="outcomes">
              {data.outcomes.items.map((o, i) => (
                <div className="outcome" key={i}>
                  <div className="metric">
                    {o.metric}
                    <span className="u">{o.unit}</span>
                  </div>
                  <h4>{o.title}</h4>
                  <p>{o.body}</p>
                </div>
              ))}
            </div>
            <p className="outcomes-note">{data.outcomes.note}</p>
          </div>
        </section>

        <section id="fit" className="alt">
          <div className="container">
            <span className="eyebrow">{data.fit.eyebrow}</span>
            <h2 className="section-title">{data.fit.title}</h2>

            <div className="fit-grid">
              <div className="fit-col yes">
                <h4>
                  <span className="ic">✓</span>Strong fit if
                </h4>
                <ul>
                  {data.fit.yes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="fit-col no">
                <h4>
                  <span className="ic">✗</span>Not a fit if
                </h4>
                <ul>
                  {data.fit.no.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="cta-band">
          <div className="container-narrow">
            <h2>{data.cta.title}</h2>
            <p>{data.cta.body}</p>
            <div className="buttons">
              <a href="https://www.brilworks.com/contact/" className="btn btn-primary">
                Book a scoping call →
              </a>
              <Link href="/portfolio/" className="btn btn-outline">
                See other case studies
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
