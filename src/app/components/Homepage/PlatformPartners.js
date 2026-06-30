"use client";

const PARTNERS = [
  { name: "Snowflake", logo: "/images/v2/snowflake_partner.webp" },
  { name: "Databricks", logo: "/images/v2/databricks_partner.webp" },
  { name: "AWS", logo: "/images/v2/aws_partner.webp" },
  { name: "FlutterFlow", logo: "/images/v2/flutterflow_partner.webp" },
  { name: "Storyblok", logo: "/images/v2/storyblok_partner.webp" },
  { name: "adalo", logo: "/images/v2/adalo_partner.webp" },
];

const PlatformPartners = () => {
  const logos = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-16 bg-white overflow-hidden max-w-[1280px] container mx-auto">
      <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
        <div
          className="text-center mx-auto"
          style={{ maxWidth: 720, marginBottom: 40 }}
        >
          <span
            className="inline-block mb-4"
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#017eeb",
            }}
          >
            Our Platform Partnerships
          </span>
          <h2
            className="font-extrabold"
            style={{
              fontSize: "clamp(22px, 2.4vw, 30px)",
              letterSpacing: "-1px",
              lineHeight: 1.15,
              color: "#0d0f1a",
            }}
          >
            Built on the Platforms That Power Modern Data
          </h2>
          <p
            className="mt-3"
            style={{ fontSize: 15, lineHeight: 1.7, color: "#6b7280" }}
          >
            We partner with leading cloud and data platforms to deliver
            reliable, scalable solutions backed by certified expertise.
          </p>
        </div>
      </div>
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
    </section>
  );
};

export default PlatformPartners;
