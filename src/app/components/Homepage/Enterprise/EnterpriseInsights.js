import Link from "next/link";
import "../../../styles/EnterpriseHome.css";

const POSTS = [
  {
    kicker: "Data platforms",
    title: "What is Snowflake? A practical guide to the cloud data platform",
    link: "/blog/what-is-snowflake/",
  },
  {
    kicker: "Data platforms",
    title: "What is Databricks? A complete guide for modern data teams",
    link: "/blog/what-is-databricks-a-complete-guide-for-modern-data-teams/",
  },
];

const EnterpriseInsights = () => {
  return (
    <section className="bw-home alt">
      <div className="wrap">
        <p className="eyebrow">Insights</p>
        <h2 className="sec">From the Brilworks engineering mindset.</h2>
        <div className="posts">
          {POSTS.map((p) => (
            <Link className="post" href={p.link} key={p.link}>
              <span className="pk">{p.kicker}</span>
              <h4>{p.title}</h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseInsights;
