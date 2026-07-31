import GradientFAQAccordion from "../../Common/GradientFAQAccordion";

const ServiceFaq = ({
  sectionLabel = "Common Questions",
  heading,
  faqs = [],
  idPrefix = "faq",
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
        </div>
        <div className="mx-auto" style={{ maxWidth: 860 }}>
          {faqs.map((item, i) => (
            <GradientFAQAccordion
              key={i + 1}
              id={`${idPrefix}-${i + 1}`}
              question={item.q}
              answer={item.a}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFaq;
