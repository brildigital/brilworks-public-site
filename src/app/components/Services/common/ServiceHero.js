import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const ServiceHero = ({
  label,
  labelIcon,
  titleLead,
  titleAccent,
  subhead,
  primaryCta,
  secondaryCta,
  trustPoints = [],
  stats = [],
}) => {
  return (
    <section className="relative overflow-hidden pt-20 pb-14 md:pt-[120px] md:pb-[80px]">
      <div className="absolute inset-0 -z-10 svc-hero-bg" />
      <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-[60px] items-center">
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 text-[12px] font-semibold uppercase"
              style={{
                background: "#ffffff",
                border: "1px solid #e4eaf1",
                color: "#566678",
                letterSpacing: "0.1em",
                boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)",
              }}
            >
              {labelIcon} {label}
            </span>
            <h1
              className="font-extrabold mb-5"
              style={{
                fontSize: "clamp(30px, 4vw, 54px)",
                letterSpacing: "-1.5px",
                lineHeight: 1.1,
                color: "#0b1e33",
              }}
            >
              {titleLead}{" "}
              <span style={{ color: "#2f6bff" }}>{titleAccent}</span>
            </h1>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "#566678",
                maxWidth: 580,
              }}
            >
              {subhead}
            </p>
            <div className="flex flex-wrap gap-3 my-8">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
                  style={{
                    background: "#2f6bff",
                    color: "#fff",
                    border: "1px solid #2f6bff",
                    padding: "14px 24px",
                    fontSize: 15,
                  }}
                >
                  {primaryCta.label} <ArrowRight size={16} />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-black/5"
                  style={{
                    background: "transparent",
                    color: "#2f6bff",
                    border: "1px solid #2f6bff",
                    padding: "14px 24px",
                    fontSize: 15,
                  }}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
            <div
              className="flex flex-wrap gap-x-5 gap-y-2.5"
              style={{ color: "#6b7a8a", fontSize: 14 }}
            >
              {trustPoints.map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <span style={{ color: "#16a34a" }}>
                    <Check size={16} />
                  </span>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl transition-all svc-stat-card"
                >
                  <div
                    className="font-extrabold leading-none mb-2"
                    style={{
                      color: "#2f6bff",
                      fontSize: "clamp(28px, 3vw, 42px)",
                      letterSpacing: "-1px",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      color: "#6b7a8a",
                      fontSize: 13,
                      fontWeight: 500,
                      lineHeight: 1.4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
