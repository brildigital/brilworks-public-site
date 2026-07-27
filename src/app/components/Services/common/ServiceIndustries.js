const ServiceIndustries = ({
  sectionLabel = "Industries We Serve",
  heading,
  subhead,
  items = [],
}) => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
        <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
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
              fontSize: "clamp(28px, 3.2vw, 42px)",
              letterSpacing: "-1px",
              lineHeight: 1.15,
              color: "#0d0f1a",
            }}
          >
            {heading}
          </h2>
          <p
            className="mt-4"
            style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
          >
            {subhead}
          </p>
        </div>
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          }}
        >
          {items.map((ind) => (
            <div
              key={ind.label}
              className="text-center transition-all hover:-translate-y-0.5"
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 14,
                padding: "24px 16px",
              }}
            >
              <div className="mx-auto mb-3 flex items-center justify-center">
                {ind.icon}
              </div>
              <span
                style={{ fontSize: 13, fontWeight: 600, color: "#212121" }}
              >
                {ind.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceIndustries;
