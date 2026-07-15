import Link from "next/link";
import "../../../styles/EnterpriseHome.css";

const EnterpriseHero = () => {
  return (
    <section className="bw-home hero">
      <div className="wrap">
        <div>
          <span className="pill rv">
            <b>★ 5.0</b> on Clutch · AWS · Databricks · Snowflake · dbtLabs
            Partners
          </span>
          <h1 className="rv d1">From raw data to running agents.</h1>
          <p className="lede rv d2">
            Brilworks is a Data &amp; AI engineering firm. We build the data
            foundation and the AI that runs on it, or embed certified engineers
            in your team to keep it running.
          </p>
          <div className="ctas rv mt-4">
            <Link className="btn btn-primary" href="#approach">
              See how we work
            </Link>
          </div>
          {/* <div className="trust rv d3">
            <span>
              <span className="star">★★★★★</span> 22 verified reviews on Clutch
            </span>
            <span>AWS · Snowflake · Databricks · dbtLabs partners</span>
            <span>Certified engineers on every engagement</span>
          </div> */}
        </div>
        <div className="rv d2">
          <div className="panel">
            <div className="ph">
              <span style={{ fontWeight: 600 }}>How we work</span>
              <span className="up">foundation first → agent last</span>
            </div>
            <div className="stage">
              <span className="ic">01</span>
              <div>
                <div className="nm">Ingest</div>
                <div className="meta">
                  Every source apps, APIs, legacy databases
                </div>
              </div>
            </div>
            <div className="stage">
              <span className="ic">02</span>
              <div>
                <div className="nm">Engineer</div>
                <div className="meta">Clean, tested, scheduled pipelines</div>
              </div>
            </div>
            <div className="stage">
              <span className="ic">03</span>
              <div>
                <div className="nm">Model</div>
                <div className="meta">
                  One source of truth in your warehouse
                </div>
              </div>
            </div>
            <div className="stage">
              <span className="ic">04</span>
              <div>
                <div className="nm">Run · AI agent</div>
                <div className="meta">Grounded on data you can trust</div>
              </div>
            </div>
            <div className="pf">
              <div>
                <div className="l">Built on</div>
                <div className="v">Snowflake · Databricks · AWS · dbtLabs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseHero;
