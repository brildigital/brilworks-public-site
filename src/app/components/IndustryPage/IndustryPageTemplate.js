import Link from "next/link";
import CalPopupButton from "../ServicePage/CalPopupButton";
import FinalCTA from "../Common/FinalCTA";
import "../../styles/EnterpriseHome.css";
import "../../styles/ServicePage.css";

const IndustryPageTemplate = ({ data }) => {
  const { hero, trustmarks, proof, approach, cta } = data;

  return (
    <div className="bw-home">
      {/* ── Hero ── */}
      {hero && (
        <section className="sp-hero !pt-28">
          <div className="sp-grid-bg" aria-hidden="true" />
          <div className="wrap">
            <div className="sp-hgrid">
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

              {/* Right — stats grid (light card style) */}
              {hero.stats && (
                <div className="ip-stats rv d2">
                  {hero.stats.map((s, i) => (
                    <div className="ip-stat" key={i}>
                      <div className={`v${s.nowrap ? " nowrap" : ""}`}>
                        {s.v}
                      </div>
                      <div className="l">{s.l}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Proof / build card ── */}
      {proof && (
        <section className="alt" id="proof">
          <div className="wrap">
            <div className="sp-shead rv">
              <span className="sp-tag">{proof.tag}</span>
              <h2>{proof.h2}</h2>
            </div>
            {proof.build && (
              <div className="ip-build rv">
                <div className="ip-bhead">
                  <span className="ip-dom">{proof.build.dom}</span>
                  {proof.build.pill && (
                    <span className="ip-pill">{proof.build.pill}</span>
                  )}
                </div>
                <h3>{proof.build.h3}</h3>
                <p className="ip-desc">{proof.build.desc}</p>
                {proof.build.spec && (
                  <div className="ip-spec">
                    {proof.build.spec.map(([sl, sv], i) => (
                      <div key={i}>
                        <div className="sl">{sl}</div>
                        <div className="sv">{sv}</div>
                      </div>
                    ))}
                  </div>
                )}
                {proof.build.stk && (
                  <div className="ip-stk">
                    {proof.build.stk.map((s, i) => (
                      <span key={i}>{s}</span>
                    ))}
                  </div>
                )}
                {proof.build.stance && (
                  <div className="ip-stance">
                    {proof.build.stance.pre}
                    <b>{proof.build.stance.bold}</b>
                    {proof.build.stance.post}
                  </div>
                )}
                {proof.build.outcome && (
                  <div className="ip-outcome">
                    <b>Result:</b> {proof.build.outcome}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── Approach / capabilities ── */}
      {approach && (
        <section id="approach">
          <div className="wrap">
            <div className="sp-shead rv">
              <span className="sp-tag">{approach.tag}</span>
              <h2>{approach.h2}</h2>
            </div>
            <div className="ip-caps">
              {approach.caps.map((cap, i) => (
                <div
                  className="ip-caprow rv"
                  key={i}
                  style={{ transitionDelay: `${0.05 + i * 0.08}s` }}
                >
                  <div className="ip-cn">{cap.cn}</div>
                  <h3>{cap.h3}</h3>
                  <div className="ip-cd">
                    {cap.cd}
                    {cap.chips && (
                      <div className="ip-chips">
                        {cap.chips.map((c) => (
                          <span key={c}>{c}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Final CTA ── */}
      {cta && <FinalCTA {...cta} />}
    </div>
  );
};

export default IndustryPageTemplate;
