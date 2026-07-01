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
        <p className="eyebrow">The stack underneath</p>
        <h2 className="sec">Everything around the data, too.</h2>
        <p className="sub">
          Pipelines and agents don&apos;t ship alone. We bring the product,
          cloud, and platform engineering that puts them in front of real
          users.
        </p>
        <div className="stack">
          {STACK.map((s) => (
            <Link className="scard" key={s.title} href={s.href}>
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
