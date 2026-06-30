import "../../../styles/EnterpriseHome.css";

const STACK = [
  {
    title: "Product engineering",
    body: "MVP to enterprise scale, built to last past the demo.",
  },
  {
    title: "Web & SaaS",
    body: "Scalable web apps and platforms on React and Node.",
  },
  {
    title: "Mobile apps",
    body: "iOS, Android, and React Native.",
  },
  {
    title: "Cloud & DevOps",
    body: "AWS architecture, CI/CD, Kubernetes.",
  },
];

const EnterpriseStack = () => {
  return (
    <section className="bw-home alt" id="services">
      <div className="wrap">
        <p className="eyebrow">The stack underneath</p>
        <h2 className="sec">Everything around the data, too.</h2>
        <p className="sub">
          Pipelines and agents don&apos;t ship alone. We bring the product,
          cloud, and platform engineering that puts them in front of real
          users.
        </p>
        <div className="stack">
          {STACK.map((s) => (
            <div className="scard" key={s.title}>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseStack;
