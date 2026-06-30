import Link from "next/link";
import "../../../styles/EnterpriseHome.css";

const EnterpriseFinalCTA = () => {
  return (
    <section className="bw-home">
      <div className="wrap">
        <div className="final">
          <h2>Tell us what you&apos;re building.</h2>
          <p>
            Send us the problem — you&apos;ll get back a practical plan, not
            a sales pitch. Start a project, or bring our certified engineers
            onto your team.
          </p>
          <div className="ctas">
            <Link className="btn btn-primary" href="/contact-us/">
              Start the conversation
            </Link>
          </div>
          <div className="ticks">
            <span>Start with a scoped data audit</span>
            <span>You own the code</span>
            <span>No obligation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseFinalCTA;
