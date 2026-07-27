const ServiceHonors = ({
  sectionLabel = "Recognized By",
  heading = "Trusted & Awarded by Industry Leaders",
  items = [],
}) => {
  return (
    <section className="py-16">
      <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
        <div
          className="text-center mx-auto"
          style={{ maxWidth: 720, marginBottom: 32 }}
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
            {sectionLabel}
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
            {heading}
          </h2>
        </div>
        <div
          className="flex flex-wrap items-center justify-center"
          style={{ gap: "32px 56px", opacity: 0.85 }}
        >
          {items.map((h) => (
            <div
              key={h.label}
              className="flex items-center gap-2.5"
              style={{ color: "#6b7280", fontWeight: 600, fontSize: 14 }}
            >
              {h.icon}
              {h.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHonors;
