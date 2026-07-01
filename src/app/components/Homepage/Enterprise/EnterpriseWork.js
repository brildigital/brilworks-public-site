import Link from "next/link";
import "../../../styles/EnterpriseHome.css";

const CASES = [
  {
    tag: "Data engineering",
    title: "Pipelines & warehousing",
    body: "Ingestion, transformation, and a modeled warehouse your whole team can trust as one source of truth.",
    metric: "ETL / ELT · dbt · Snowflake · Databricks",
    link: "/data-engineering-services/",
  },
  {
    tag: "Data quality",
    title: "Quality & observability",
    body: "Tests and monitoring that catch bad data before it ever reaches a dashboard or an agent.",
    metric: "checks · alerting · lineage",
    link: "/case-studies/saas-data-quality/",
  },
  {
    tag: "AI agents",
    title: "Production AI, grounded on your data",
    body: "Agents and LLM apps that answer from your trusted warehouse — not a generic model guessing.",
    metric: "RAG · MLOps · model integration",
    link: "/ai-agent-development-services/",
  },
  {
    tag: "Analytics",
    title: "Analytics & BI",
    body: "One consistent view across your systems, so every team works from the same numbers.",
    metric: "dashboards · metrics layer",
    link: "/business-intelligence-services/",
  },
];

const NUMS = [
  {
    v: "Foundation first",
    l: "We build the data layer before the agent — so the AI holds up in production.",
  },
  {
    v: "You own it all",
    l: "Your cloud, your warehouse, your code. Zero lock-in.",
  },
  {
    v: "Certified",
    l: "Snowflake, Databricks, and AWS Advanced Tier partners.",
  },
  {
    v: "Start small",
    l: "Begin with a scoped data audit or a focused proof of concept.",
  },
];

const EnterpriseWork = () => {
  return (
    <section className="bw-home" id="work">
      <div className="wrap">
        <p className="eyebrow rv">What we build</p>
        <h2 className="sec rv d1">From data foundation to running agent.</h2>
        <p className="sub rv d2">
          The core engagement: we build the layers in the order they have to
          be built — and you own every part of it.
        </p>
        <div className="cases">
          {CASES.map((c, i) => (
            <Link className="case rv" href={c.link} key={c.tag} style={{ transitionDelay: `${0.06 + i * 0.08}s` }}>
              <span className="tag">{c.tag}</span>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
              <div className="metric">{c.metric}</div>
            </Link>
          ))}
        </div>
        <div className="nums">
          {NUMS.map((n, i) => (
            <div className="num rv" key={n.v} style={{ transitionDelay: `${0.06 + i * 0.07}s` }}>
              <div className="v" style={{ fontSize: 19 }}>
                {n.v}
              </div>
              <div className="l">{n.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseWork;
