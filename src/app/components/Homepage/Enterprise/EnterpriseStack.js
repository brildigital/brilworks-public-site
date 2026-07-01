import "../../../styles/EnterpriseHome.css";
import Link from "next/link";

const STACK = [
  {
    title: "Product engineering",
    body: "MVP to enterprise scale, built to last past the demo.",
    href: "/product-engineering-development-services/",
  },
  {
    title: "Web & SaaS",
    body: "Scalable web apps and platforms on React and Node.",
    href: "/web-app-development-services/",
  },
  {
    title: "Mobile apps",
    body: "iOS, Android, and React Native.",
    href: "/react-native-app-development-services/",
  },
  {
    title: "Cloud & DevOps",
    body: "AWS architecture, CI/CD, Kubernetes.",
    href: "/aws-consulting-services/",
  },
];

const EnterpriseStack = () => {
  return (
    <section className="bw-home alt" id="services">
      <div className="wrap">
        <p className="eyebrow rv">The stack underneath</p>
        <h2 className="sec rv d1">Everything around the data, too.</h2>
        <p className="sub rv d2">
          Pipelines and agents don&apos;t ship alone. We bring the product,
          cloud, and platform engineering that puts them in front of real
          users.
        </p>
        <div className="stack">
          {STACK.map((s, i) => (
            <Link className="scard rv" key={s.title} href={s.href} style={{ transitionDelay: `${0.06 + i * 0.08}s` }}>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseStack;
