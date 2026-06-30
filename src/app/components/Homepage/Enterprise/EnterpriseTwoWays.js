import Link from "next/link";
import "../../../styles/EnterpriseHome.css";

const EnterpriseTwoWays = () => {
  return (
    <section className="bw-home alt" id="hire">
      <div className="wrap">
        <p className="eyebrow">However you need us</p>
        <h2 className="sec">Build with us, or build with our people.</h2>
        <p className="sub">
          Two engagement models, one bar for quality. Most clients start with
          one and grow into the other.
        </p>
        <div className="ways">
          <div className="way">
            <p className="wk">We build</p>
            <h3>Fixed-scope projects</h3>
            <p>
              Data platforms, AI agents, and edge builds delivered end to end
              — one accountable team from pipeline to production.
            </p>
            <div className="chips">
              <span>Fixed scope</span>
              <span>You own the code</span>
              <span>Pipeline to production</span>
            </div>
            <Link className="lnk" href="#work">
              See the work →
            </Link>
          </div>
          <div className="way">
            <p className="wk">We staff</p>
            <h3>Certified engineers, in your team</h3>
            <p>
              Snowflake- and Databricks-certified data and AI engineers,
              embedded in your team and on your timezone. Scale without the
              hiring cycle.
            </p>
            <div className="chips">
              <span>Certified</span>
              <span>Your timezone</span>
              <span>In your repo &amp; standups</span>
            </div>
            <div className="qbox">
              &ldquo;They feel like an extension of our internal team, not a
              vendor.&rdquo;
              <span className="who">CEO · Rastrack</span>
            </div>
            <Link className="lnk" href="/hire-dedicated-software-development-team/">
              Hire engineers →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseTwoWays;
