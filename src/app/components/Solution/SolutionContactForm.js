"use client";
import dynamic from "next/dynamic";

const PortfolioContactForm = dynamic(
  () => import("../Portfolio/PortfolioContactForm"),
  { ssr: false }
);

const SolutionContactForm = ({
  title,
  description,
  messageRequired = true,
  submitLabel,
  benefits,
}) => {
  const defaultBenefits = [
    "Free 30-minute consultation with a domain specialist",
    "Detailed project proposal within 48 hours",
    "48-hour risk-free trial — no commitment",
    "Response guaranteed within 24 business hours",
  ];

  const benefitsList = benefits || defaultBenefits;

  return (
    <section
      className="main-section-padding bg-[#0d0f1a] relative overflow-hidden"
      id="section-contact-form"
    >
      {/* Glow effects */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_60%_at_30%_40%,rgba(1,126,235,0.12)_0%,transparent_70%)]"></div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_40%_40%_at_80%_70%,rgba(0,219,211,0.06)_0%,transparent_60%)]"></div>

      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          {/* Left: Info */}
          <div>
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#00b4d8] inline-block !mb-3">
              Let&apos;s Talk
            </span>
            <h2 className="lg:text-[44px] md:text-[36px] text-[30px] font-extrabold leading-[1.1] tracking-[-1px] text-white !mb-4">
              {title || "Ready to Build Your Platform?"}
            </h2>
            <p className="text-[18px] text-white/60 leading-[1.7] !mb-8 max-w-none">
              {description ||
                "You're one conversation away from turning your idea into a scalable platform. Tell us what you're building — we'll show you how we can help."}
            </p>

            <ul className="list-none space-y-4 !mb-8">
              {benefitsList.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-white/60 text-[15px]"
                >
                  <span className="text-[#00dbd3] text-lg flex-shrink-0 mt-0.5">
                    &#10003;
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>

            <div>
              <div className="text-[13px] text-white/50 !mb-2">
                Or reach us directly:
              </div>
              <div className="text-white/60">
                <a
                  href="mailto:sales@brilworks.com"
                  className="text-[#00b4d8] hover:underline"
                >
                  sales@brilworks.com
                </a>
                &nbsp;|&nbsp;
                <a
                  href="tel:+919313644148"
                  className="text-[#00b4d8] hover:underline"
                >
                  +91 93136 44148
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form Card */}
          <div className="bg-white rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-[#212121] !mb-6">
              {submitLabel
                ? submitLabel.replace("Get ", "Get Your ")
                : "Get Your Free Consultation"}
            </h3>

            <PortfolioContactForm
              darkMode={false}
              showCompanyField={false}
              messageField={true}
              messageRequired={messageRequired}
              submitLabel={submitLabel}
            />

            <p className="text-[13px] text-[#6b7280] text-center !mt-3">
              No spam. No sales pitch. Just a genuine conversation about your
              project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionContactForm;
