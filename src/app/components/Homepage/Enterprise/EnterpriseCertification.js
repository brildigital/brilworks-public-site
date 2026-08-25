import Link from "next/link";
import Image from "next/image";
import "../../../styles/EnterpriseHome.css";
import { ArrowBigRightDash, ArrowRightIcon, MoveUpRight } from "lucide-react";

const CAPABILITIES = [
  "Databricks lakehouse architecture & implementation",
  "Spark & Delta Lake pipeline engineering",
  "Databricks consulting across AWS, Azure & GCP",
  "MLflow model deployment & lifecycle management",
  "Real-time streaming & ETL/ELT data pipelines",
  "Unity Catalog data governance & security",
];

const CLOUDS = ["Azure", "AWS", "GCP", "Databricks"];

const CheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="9" cy="9" r="9" fill="rgba(255,255,255,0.14)" />
    <path
      d="M5.5 9.3l2.1 2.1 4.9-4.9"
      stroke="#7db1ff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BadgeIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="8.5"
      r="6"
      fill="#7db1ff"
      stroke="#fff"
      strokeWidth="1.1"
    />
    <path
      d="M8.4 13.6L6.5 21l5.5-2.9L17.5 21l-1.9-7.4"
      fill="#7db1ff"
      stroke="#fff"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
  </svg>
);

const EnterpriseCertification = () => {
  return (
    <section className="bw-home cert-section" id="databricks-partner">
      <div className="wrap">
        <div className="cert-grid">
          <div className="cert-badge rv">
            <Image
              src="/images/v2/Databricks-Partner-Badge.svg"
              alt="Brilworks certified Databricks partner badge"
              width={220}
              height={214}
              className="cert-mark-img"
            />
            <a
              href="https://partners.databricks.com/s/directory/listing?recordId=001Vp00000dsH62IAE"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              <BadgeIcon />
              Certified Databricks Partner
              <ArrowRightIcon className="mt-0.5" size={15} />
            </a>
            <div className="cert-clouds">
              {CLOUDS.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>

          <div className="cert-content">
            <p className="eyebrow rv">
              Certified Databricks Consulting Partner
            </p>
            <h2 className="sec rv d1 !mt-4 !mb-7">
              Certified Databricks Partner for Lakehouse &amp; AI Engineering
            </h2>
            <p className="sub rv d2">
              Brilworks is an officially certified Databricks partner,
              delivering lakehouse architecture, Spark and Delta Lake pipelines,
              and production-grade MLOps for enterprise data teams across AWS,
              Azure, and GCP.
            </p>
            <ul className="cert-list rv d3 !mt-10">
              {CAPABILITIES.map((c) => (
                <li key={c}>
                  <CheckIcon />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact-us/" className="btn btn-primary rv d4">
              Talk to a Databricks Expert{" "}
              <ArrowRightIcon className="mt-1" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseCertification;
