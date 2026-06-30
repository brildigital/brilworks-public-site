"use client";

const PARTNERS = [
  { name: "Snowflake", logo: "/images/v2/snowflake_partner.webp" },
  { name: "Databricks", logo: "/images/v2/databricks_partner.webp" },
  { name: "AWS", logo: "/images/v2/aws_partner.webp" },
  { name: "FlutterFlow", logo: "/images/v2/flutterflow_partner.webp" },
  { name: "Storyblok", logo: "/images/v2/storyblok_partner.webp" },
  { name: "adalo", logo: "/images/v2/adalo_partner.webp" },
  { name: "dbtLabs", logo: "/images/v2/dbtlabs_partner.png" },
];

const EnterprisePartners = () => {
  const logos = [...PARTNERS, ...PARTNERS];
  return (
    <section className="bw-home partners">
      <div className="wrap">
        <p className="eyebrow">Official technology partners</p>
        <div
          className="relative w-full"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max animate-[partnerScroll_25s_linear_infinite]">
            {logos.map((p, i) => (
              <div
                key={i}
                className="flex items-center justify-center shrink-0 mx-10"
                style={{ width: 190, height: 90 }}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-[70px] max-w-[170px] object-contain opacity-90 transition-opacity duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
        <p className="pnote">
          Vetted partner status at the company level — and Snowflake- and
          Databricks-certified engineers on every engagement.
        </p>
      </div>
    </section>
  );
};

export default EnterprisePartners;
