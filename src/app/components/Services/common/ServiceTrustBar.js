const ServiceTrustBar = ({ items = [] }) => {
  return (
    <section
      aria-label="Trust indicators"
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #e4eaf1",
        padding: "28px 0",
      }}
    >
      <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
        <div
          className="flex flex-wrap items-center justify-center"
          style={{ gap: "12px 40px" }}
        >
          {items.map((t) => (
            <div
              key={t.label}
              className="inline-flex items-center gap-2 whitespace-nowrap"
              style={{ fontSize: 13, fontWeight: 600, color: "#212121" }}
            >
              {t.icon}
              {t.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTrustBar;
