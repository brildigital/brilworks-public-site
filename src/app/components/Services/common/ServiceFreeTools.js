import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ServiceFreeTools = ({
  sectionLabel = "Free Tools",
  heading,
  subhead,
  tools = [],
  exploreHref,
  exploreLabel = "Explore All Tools",
}) => {
  return (
    <section className="py-16 md:py-24" style={{ background: "#f1f5fb" }}>
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
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.name}
                href={tool.href}
                className="flex items-center gap-4 rounded-2xl transition-all hover:-translate-y-0.5 bg-white"
                style={{
                  border: "1px solid #e5e7eb",
                  padding: "20px 24px",
                  textDecoration: "none",
                }}
              >
                <div
                  className="rounded-[10px] flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 44,
                    height: 44,
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <Icon size={20} color="#017eeb" strokeWidth={1.7} />
                </div>
                <span
                  style={{ fontSize: 15, fontWeight: 600, color: "#0d0f1a" }}
                >
                  {tool.name}
                </span>
              </Link>
            );
          })}
        </div>
        {exploreHref && (
          <div className="text-center mt-10">
            <Link
              href={exploreHref}
              className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
              style={{
                background: "#2f6bff",
                color: "#fff",
                border: "1px solid #2f6bff",
                padding: "14px 28px",
                fontSize: 15,
              }}
            >
              {exploreLabel} <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceFreeTools;
