import Link from "next/link";
import CalPopupButton from "../ServicePage/CalPopupButton";
import "../../styles/EnterpriseHome.css";
import "../../styles/ServicePage.css";

const DEFAULT_CTAS = [
  {
    label: "Book a scoping call →",
    cal: true,
    calLink: "vikas-singh-bril/30-min-product-eng-review",
    primary: true,
  },
  { label: "Start the conversation", href: "/contact-us/", primary: false },
];

const DEFAULT_TICKS = [
  "30-minute discovery call",
  "100% IP ownership",
  "No obligation",
];

const FinalCTA = ({
  tag = "✦ Start here",
  h2 = "Tell us what you're building.",
  p = "Send us the problem — you'll get back a practical plan, not a sales pitch. Start a project, or bring our certified engineers onto your team.",
  ctas = DEFAULT_CTAS,
  ticks = DEFAULT_TICKS,
  altBg = false,
}) => (
  <section className={`bw-home${altBg ? " alt" : ""}`}>
    <div className="wrap">
      <div className="sp-final rv">
        {tag && <span className="sp-tag">{tag}</span>}
        <h2>{h2}</h2>
        <p className="!mt-4">{p}</p>
        <div className="ctas mt-4">
          {ctas.map((c, i) =>
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
        {ticks && ticks.length > 0 && (
          <div className="ticks">
            {ticks.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  </section>
);

export default FinalCTA;
