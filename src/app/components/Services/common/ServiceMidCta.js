import Link from "next/link";

const ServiceMidCta = ({ headline, pitch, buttonLabel, buttonHref = "#contact" }) => {
  return (
    <section
      className="relative overflow-hidden text-center svc-mid-cta-bg"
      style={{ padding: "56px 0" }}
    >
      <div className="absolute inset-0 pointer-events-none svc-mid-cta-glow" />
      <div
        className="relative mx-auto px-5 md:px-10"
        style={{ maxWidth: 700, zIndex: 1 }}
      >
        <h3
          className="font-extrabold mb-3.5"
          style={{
            fontSize: "clamp(24px, 3vw, 36px)",
            color: "#fff",
            lineHeight: 1.2,
            letterSpacing: "-0.5px",
          }}
        >
          {headline}
        </h3>
        <p
          className="mb-7"
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: 16,
            lineHeight: 1.7,
          }}
        >
          {pitch}
        </p>
        <Link
          href={buttonHref}
          className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0d0f1a] hover:!text-white hover:!border-[#0d0f1a] mt-5 w-full sm:w-auto"
          style={{
            background: "#fff",
            color: "#017eeb",
            border: "1px solid #fff",
            padding: "16px 32px",
            fontSize: 16,
          }}
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
};

export default ServiceMidCta;
