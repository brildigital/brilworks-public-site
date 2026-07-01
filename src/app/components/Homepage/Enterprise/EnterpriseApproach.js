import "../../../styles/EnterpriseHome.css";

const STEPS = [
  {
    n: "01 / INGEST",
    title: "Raw data in",
    body: "Every source — apps, APIs, files, legacy databases — without losing a row.",
  },
  {
    n: "02 / ENGINEER",
    title: "Pipelines you trust",
    body: "Clean, tested, scheduled. The part nobody sees and everything depends on.",
  },
  {
    n: "03 / MODEL",
    title: "A warehouse that answers",
    body: "One source of truth your team queries — and the AI grounds itself in.",
  },
  {
    n: "04 / RUN",
    title: "Agents that act",
    body: "AI on clean data, shipped to production. Answers that hold up, not demos.",
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
          Most teams jump straight to the agent — then it hallucinates,
          because the data underneath is stale, duplicated, or untrusted. We
          build in the order it has to be built: foundation first, agent
          last.
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
