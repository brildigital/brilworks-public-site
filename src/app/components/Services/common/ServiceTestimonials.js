import { Star } from "lucide-react";

const ServiceTestimonials = ({
  sectionLabel = "Client Stories",
  heading,
  subhead,
  items = [],
}) => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 svc-dark-section-bg">
      <div
        className="relative mx-auto px-5 md:px-10"
        style={{ maxWidth: 1280, zIndex: 1 }}
      >
        <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
          <span
            className="inline-block mb-4"
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#2f6bff",
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
              color: "#0b1e33",
            }}
          >
            {heading}
          </h2>
          <p
            className="mt-4"
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "#566678",
            }}
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
          {items.map((t) => (
            <div
              key={t.role}
              className="rounded-2xl"
              style={{
                background: "#ffffff",
                border: "1px solid #e4eaf1",
                padding: "32px 28px",
                boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)",
              }}
            >
              <div className="flex gap-0.5 mb-4" style={{ color: "#facc15" }}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p
                className="mb-6"
                style={{
                  color: "#0b1e33",
                  fontSize: 15,
                  lineHeight: 1.7,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="rounded-full flex items-center justify-center font-bold text-white"
                  style={{
                    width: 44,
                    height: 44,
                    background: "linear-gradient(135deg, #2f6bff, #1e4fd6)",
                    fontSize: 16,
                  }}
                >
                  {t.initials}
                </div>
                <div className="flex flex-col">
                  <span
                    className="font-semibold"
                    style={{ fontSize: 14, color: "#0b1e33" }}
                  >
                    {t.name}
                  </span>
                  <span style={{ color: "#6b7a8a", fontSize: 12 }}>
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;
