const ServiceWhyUs = ({ sectionLabel = "Why Brilworks", heading, subhead, items = [] }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
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
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {items.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl transition-all hover:-translate-y-0.5"
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                padding: "32px 28px",
              }}
            >
              <div
                className="rounded-[14px] flex items-center justify-center mb-5"
                style={{ width: 64, height: 64, background: b.tint }}
              >
                {b.icon}
              </div>
              <h3
                className="font-bold mb-3"
                style={{ fontSize: 18, color: "#0d0f1a" }}
              >
                {b.title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6b7280" }}>
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceWhyUs;
