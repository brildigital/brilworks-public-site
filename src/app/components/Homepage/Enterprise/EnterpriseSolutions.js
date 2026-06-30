import "../../../styles/EnterpriseHome.css";

const INDUSTRIES = [
  {
    name: "SaaS",
    c: "Anchor",
    body: "Product analytics you trust and AI features that hold up in production.",
  },
  {
    name: "Fintech",
    c: "Next",
    body: "Audit-ready pipelines, fraud and risk agents, low-latency data.",
  },
  {
    name: "Healthtech",
    c: "Long game",
    body: "Compliant data unification across records and connected devices.",
  },
];

const EnterpriseSolutions = () => {
  return (
    <section className="bw-home alt" id="solutions">
      <div className="wrap">
        <p className="eyebrow">Solutions by industry</p>
        <h2 className="sec">Built for where your data lives.</h2>
        <p className="sub">
          Not generalists. Data &amp; AI packaged around the pains and data
          shapes of a specific vertical.
        </p>
        <div className="inds">
          {INDUSTRIES.map((ind) => (
            <div className="ind" key={ind.name}>
              <h4>{ind.name}</h4>
              <span className="c">{ind.c}</span>
              <p>{ind.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSolutions;
