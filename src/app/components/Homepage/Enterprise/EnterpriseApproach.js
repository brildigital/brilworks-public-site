import "../../../styles/EnterpriseHome.css";

const STEPS = [
  {
    n: "01 / INGEST",
    title: "Connect every source",
    body: "Apps, APIs, files, legacy systems, and databases. Every byte captured, nothing left behind.",
  },
  {
    n: "02 / ENGINEER",
    title: "Pipelines you can trust",
    body: "Cleaned, tested, scheduled, and monitored. The invisible layer every reliable AI system depends on.",
  },
  {
    n: "03 / MODEL",
    title: "A warehouse that answers",
    body: "A single source of truth your team can query and your AI can rely on.",
  },
  {
    n: "04 / RUN",
    title: "Agents that deliver",
    body: "Production-ready AI built on trusted data. Reliable answers that hold up long after the demo.",
  },
];

const EnterpriseApproach = () => {
  return (
    <section className="bw-home" id="approach">
      <div className="wrap">
        <p className="eyebrow rv">Why this order matters</p>
        <h2 className="sec rv d1">
          An AI agent is only as good as the data feeding it.
        </h2>
        <p className="sub rv d2">
          Most teams build the agent first. We build the foundation first.
          Because stale, duplicated, or unreliable data doesn&apos;t create
          intelligent agents. It creates confident mistakes.
        </p>
        <div className="steps">
          {STEPS.map((s, i) => (
            <div className="step rv" style={{ transitionDelay: `${0.06 + i * 0.08}s` }} key={s.n}>
              <div className="n">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseApproach;
