import Link from "next/link";
import "../../../styles/EnterpriseHome.css";

const WAYS = [
  {
    wk: "We build",
    title: "Fixed-scope projects",
    desc: "Data platforms, AI agents, and edge builds delivered end to end — one accountable team from pipeline to production.",
    chips: ["Fixed scope", "You own the code", "Pipeline to production"],
    quote: "Transparent, delivered exactly what was scoped — no surprises.",
    who: "Executive · Service Buddy",
    cta: { label: "See the work →", href: "#work" },
  },
  {
    wk: "We staff",
    title: "Certified engineers, in your team",
    desc: "Snowflake- and Databricks-certified data and AI engineers, embedded in your team and on your timezone. Scale without the hiring cycle.",
    chips: ["Certified", "Your timezone", "In your repo & standups"],
    quote: "They feel like an extension of our internal team, not a vendor.",
    who: "CEO · Rastrack",
    cta: { label: "Hire engineers →", href: "/hire-engineers/" },
  },
];

const WayCard = ({ wk, title, desc, chips, quote, who, cta }) => (
  <div className="way flex flex-col">
    <p className="wk">{wk}</p>
    <h3>{title}</h3>
    <p>{desc}</p>
    <div className="chips pt-2">
      {chips.map((c) => (
        <span key={c}>{c}</span>
      ))}
    </div>
    <div className="qbox">
      &ldquo;{quote}&rdquo;
      <span className="who">{who}</span>
    </div>
    <Link className="lnk mt-auto" href={cta.href}>
      {cta.label}
    </Link>
  </div>
);

const EnterpriseTwoWays = () => (
  <section className="bw-home alt" id="hire">
    <div className="wrap">
      <p className="eyebrow">However you need us</p>
      <h2 className="sec">Build with us, or build with our people.</h2>
      <p className="sub">
        Two engagement models, one bar for quality. Most clients start with one
        and grow into the other.
      </p>
      <div className="ways">
        {WAYS.map((w) => (
          <WayCard key={w.wk} {...w} />
        ))}
      </div>
    </div>
  </section>
);

export default EnterpriseTwoWays;
