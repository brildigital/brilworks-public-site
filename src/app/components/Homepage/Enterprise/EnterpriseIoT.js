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
            <h2>Where the data starts: the device.</h2>
            <p>
              Embedded and edge-AI engineering for teams whose data is born
              on hardware — feeding the same trusted pipelines we build for
              everyone else.
            </p>
            <a className="softlink" href="#">
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
