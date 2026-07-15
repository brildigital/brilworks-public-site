import "../../../styles/EnterpriseHome.css";

const FLOW = [
  { n: "01", label: "Device & firmware" },
  { n: "02", label: "Edge AI / on-device ML" },
  { n: "03", label: "Into your data pipeline" },
  { n: "04", label: "Acted on by your agents" },
];

const EnterpriseIoT = () => {
  return (
    <section className="bw-home">
      <div className="wrap">
        <div className="iot">
          <div className="rv">
            <p className="eyebrow">New — edge to cloud</p>
            <h2>Engineering at the edge</h2>
            <p>
              Embedded software and edge AI that capture data at the source
              and deliver it into secure, production-ready pipelines built
              for analytics and AI.
            </p>
            <a className="softlink" href="/embedded-software-development-services/">
              Explore edge &amp; embedded →
            </a>
          </div>
          <div className="flow rv d2">
            {FLOW.map((f) => (
              <div className="frow" key={f.n}>
                <b>{f.n}</b> {f.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseIoT;
