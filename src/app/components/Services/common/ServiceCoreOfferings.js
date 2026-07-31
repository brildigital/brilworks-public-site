import Image from "next/image";
import { Check } from "lucide-react";

const ServiceCoreOfferings = ({
  id = "services",
  sectionLabel,
  heading,
  subhead,
  items = [],
}) => {
  return (
    <section id={id} className="py-16 md:py-24" style={{ background: "#f1f5fb" }}>
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

        {items.map((svc) => (
          <div key={svc.title} className="py-10 lg:py-12">
            <div className="grid items-center gap-8 lg:gap-[60px] grid-cols-1 lg:grid-cols-2">
              <div className={svc.reverse ? "lg:order-2" : ""}>
                <div className="w-full overflow-hidden rounded-2xl relative flex items-center justify-center">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    width={200}
                    height={120}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={svc.reverse ? "lg:order-1" : ""}>
                <h3
                  className="font-bold mb-4"
                  style={{
                    fontSize: "clamp(22px, 2.4vw, 28px)",
                    letterSpacing: "-0.3px",
                    lineHeight: 1.3,
                    color: "#0d0f1a",
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  className="mb-5"
                  style={{
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: "#6b7280",
                  }}
                >
                  {svc.body}
                </p>
                <ul className="list-none">
                  {svc.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 mb-2.5"
                      style={{ fontSize: 14, color: "#212121" }}
                    >
                      <span
                        style={{
                          color: "#017eeb",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        <Check size={16} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCoreOfferings;
