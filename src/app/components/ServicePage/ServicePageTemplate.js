import Link from "next/link";
import { Cpu, Cloud, Brain, RefreshCw, ShieldCheck, Layers, Wifi, Zap, Lock, FlaskConical } from "lucide-react";
import CalPopupButton from "./CalPopupButton";
import "../../styles/EnterpriseHome.css";
import "../../styles/ServicePage.css";

const CAP_ICONS = { Cpu, Cloud, Brain, RefreshCw, ShieldCheck, Layers, Wifi, Zap, Lock, FlaskConical };

/**
 * Reusable template for embedded / IoT / firmware service pages.
 *
 * Pass a single `data` prop shaped like the embeddedSoftwareData example.
 * Every section is optional — omit the key and the section is skipped.
 */
const ServicePageTemplate = ({ data }) => {
  const {
    hero,
    proof,
    capabilities,
    why,
    work,
    engage,
    process,
    industries,
    faq,
    cta,
  } = data;

  return (
    <div className="bw-home">
      {/* ── Hero ── */}
      {hero && (
        <section className="sp-hero !pt-28">
          <div className="sp-grid-bg" aria-hidden="true" />
          <div className="wrap">
            <div className="sp-hgrid">
              {/* Left */}
              <div>
                <span className="sp-tag rv">{hero.tag}</span>
                <h1 className="rv d1">
                  {hero.h1.map((part, i) =>
                    part.accent ? (
                      <span key={i} className="lit">
                        {part.text}
                      </span>
                    ) : (
                      part.text
                    ),
                  )}
                </h1>
                <p className="sp-lede rv d2 !mt-4">{hero.lede}</p>
                <div className="ctas rv d3">
                  {hero.ctas.map((c, i) =>
                    c.cal ? (
                      <CalPopupButton
                        key={i}
                        label={c.label}
                        calLink={c.calLink}
                        className={`btn ${c.primary ? "btn-primary" : "btn-ghost"}`}
                      />
                    ) : (
                      <Link
                        key={i}
                        className={`btn ${c.primary ? "btn-primary" : "btn-ghost"}`}
                        href={c.href}
                      >
                        {c.label}
                      </Link>
                    ),
                  )}
                </div>
                {hero.micro && (
                  <p className="sp-micro rv d4 !mt-4">
                    {hero.micro.map((m, i) => (
                      <span key={i}>
                        {m.star ? (
                          <span className="star">{m.text}</span>
                        ) : m.sep ? (
                          <span className="sep">/</span>
                        ) : (
                          <b>{m.text}</b>
                        )}
                      </span>
                    ))}
                  </p>
                )}
              </div>

              {/* Right — stats grid */}
              {hero.stats && (
                <div className="sp-stats rv d2">
                  {hero.stats.map((s, i) => (
                    <div className="sp-stat" key={i}>
                      <div className="v">{s.v}</div>
                      <div className="l">{s.l}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Proof marquee ── */}
      {proof && (
        <section
          className="sp-proof !py-7"
          aria-label="Technology capabilities"
        >
          <div className="wrap">
            <div className="sp-mqwrap">
              <div className="sp-mq">
                {[...(proof.items ?? proof), ...(proof.items ?? proof)].map(
                  (item, i) => (
                    <span className="it" key={i}>
                      <span className="s">&#9656;</span> <b>{item.bold}</b>
                      {item.label && <> &middot; {item.label}</>}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Capabilities ── */}
      {capabilities && (
        <section>
          <div className="wrap">
            <div className="sp-capshead">
              <div className="sp-shead rv">
                <span className="sp-tag">{capabilities.tag}</span>
                <h2 className="!mb-4">{capabilities.h2}</h2>
                <p>{capabilities.p}</p>
              </div>
            </div>

            <div className="sp-caps">
              {capabilities.list.map((cap, i) => (
                <div
                  className={`sp-capcard rv cc-${i}`}
                  key={i}
                  style={{ transitionDelay: `${0.05 + i * 0.07}s` }}
                >
                  <div className="sp-card-top">
                    <div className="sp-cn">{cap.n}</div>
                    {cap.icon && (() => { const Icon = CAP_ICONS[cap.icon]; return Icon ? <div className="sp-cicon"><Icon size={26} strokeWidth={1.5} /></div> : null; })()}
                  </div>
                  <h3>{cap.h3}</h3>
                  <p className="cd">{cap.p}</p>
                  {cap.chips && (
                    <div className="sp-chips">
                      {cap.chips.map((c) => (
                        <span key={c}>{c}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Why / Differentiators ── */}
      {why && (
        <section className="alt">
          <div className="wrap">
            <div className="sp-shead rv">
              <span className="sp-tag">{why.tag}</span>
              <h2>{why.h2}</h2>
              <p className="!mt-4">{why.p}</p>
            </div>
            <div className="sp-diff">
              {why.cards.map((c, i) => (
                <div
                  className="sp-dcard rv"
                  key={i}
                  style={{ transitionDelay: `${0.06 + i * 0.07}s` }}
                >
                  <div className="dx">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h4>{c.h4}</h4>
                    <p>{c.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Work / Case studies ── */}
      {work && (
        <section>
          <div className="wrap">
            <div className="sp-shead rv">
              <span className="sp-tag">{work.tag}</span>
              <h2>{work.h2}</h2>
              <p className="!mt-4">{work.p}</p>
            </div>
            <div className="sp-builds">
              {work.builds.map((b, i) => (
                <a
                  className="sp-build rv cursor-default"
                  key={i}
                  href={b.href || "#"}
                  style={{ transitionDelay: `${0.06 + i * 0.1}s` }}
                >
                  <span className="dom">{b.dom}</span>
                  <h3>{b.h3}</h3>
                  <p className="desc">{b.desc}</p>
                  {b.spec && (
                    <div className="spec">
                      {b.spec.map(([sl, sv], j) => (
                        <div key={j}>
                          <div className="sl">{sl}</div>
                          <div className="sv">{sv}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  {b.stk && (
                    <div className="stk">
                      {b.stk.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                  )}
                  {/* <span className="open">
                    {b.open || "Read the build"} <span className="ar">→</span>
                  </span> */}
                </a>
              ))}
            </div>
            {work.quotes && (
              <div className="sp-pq rv">
                {work.quotes.map((q, i) => (
                  <blockquote key={i}>
                    <div className="stars">{"★".repeat(q.stars ?? 5)}</div>
                    <p>{q.text}</p>
                    <cite>{q.cite}</cite>
                  </blockquote>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── Engagement models ── */}
      {engage && (
        <section className="alt">
          <div className="wrap">
            <div className="sp-shead rv">
              <span className="sp-tag">{engage.tag}</span>
              <h2>{engage.h2}</h2>
              <p className="!mt-4">{engage.p}</p>
            </div>
            <div className="sp-models">
              {engage.models.map((m, i) => (
                <div
                  className="sp-model rv"
                  key={i}
                  style={{ transitionDelay: `${0.06 + i * 0.1}s` }}
                >
                  <div className="mi">{m.icon}</div>
                  <h3>{m.h3}</h3>
                  <p className="md">{m.md}</p>
                  <div className="bill">
                    <b>Priced:</b> {m.bill}
                  </div>
                </div>
              ))}
            </div>
            {engage.quote && (
              <div className="sp-flownote rv" style={{ marginTop: 42 }}>
                {engage.quote.text}
                <cite>{engage.quote.cite}</cite>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── Process ── */}
      {process && (
        <section>
          <div className="wrap">
            <div className="sp-shead rv">
              <span className="sp-tag">{process.tag}</span>
              <h2>{process.h2}</h2>
              {process.p && <p className="!mt-4">{process.p}</p>}
            </div>
            <div className={`sp-flow steps-${process.steps.length}`}>
              {process.steps.map((s, i) => (
                <div
                  className="sp-fstep rv"
                  key={i}
                  style={{ transitionDelay: `${0.06 + i * 0.07}s` }}
                >
                  <div className="node">{s.n}</div>
                  <h4>{s.h4}</h4>
                  <p>{s.p}</p>
                </div>
              ))}
            </div>
            {process.quote && (
              <div className="sp-flownote rv">
                {process.quote.text}
                <cite>{process.quote.cite}</cite>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── Industries ── */}
      {industries && (
        <section className="alt">
          <div className="wrap">
            <div className="sp-shead rv">
              <span className="sp-tag">{industries.tag}</span>
              <h2>{industries.h2}</h2>
              {industries.p && <p className="!mt-4">{industries.p}</p>}
            </div>
            <div className="sp-indrow rv d1">
              {industries.items.map((item, i) => (
                <span key={i} className={item.lead ? "lead" : ""}>
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {faq && (
        <section>
          <div className="wrap">
            <div className="sp-shead rv">
              <span className="sp-tag">{faq.tag}</span>
              <h2>{faq.h2}</h2>
            </div>
            <div className="sp-qgrid">
              {faq.items.map((item, i) => (
                <div
                  className="sp-qitem rv"
                  key={i}
                  style={{ transitionDelay: `${0.06 + i * 0.07}s` }}
                >
                  <p className="qq">{item.q}</p>
                  <p className="qa">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Final CTA ── */}
      {cta && (
        <section className={cta.altBg ? "alt" : ""}>
          <div className="wrap">
            <div className="sp-final rv">
              <span className="sp-tag">{cta.tag}</span>
              <h2>{cta.h2}</h2>
              <p className="!mt-4">{cta.p}</p>
              <div className="ctas mt-4">
                {cta.ctas.map((c, i) =>
                  c.cal ? (
                    <CalPopupButton
                      key={i}
                      label={c.label}
                      calLink={c.calLink}
                      className={`btn ${c.primary ? "btn-primary" : "btn-ghost"}`}
                    />
                  ) : (
                    <Link
                      key={i}
                      className={`btn ${c.primary ? "btn-primary" : "btn-ghost"}`}
                      href={c.href}
                    >
                      {c.label}
                    </Link>
                  ),
                )}
              </div>
              {cta.ticks && (
                <div className="ticks">
                  {cta.ticks.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ServicePageTemplate;
