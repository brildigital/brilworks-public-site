import Image from "next/image";
import PortfolioContactForm from "../Portfolio/PortfolioContactForm";

const steps = [
  {
    title: "We Respond in 24 Hours",
    desc: "Our team reaches out within 24 business hours with a developer profile matching your requirements.",
  },
  {
    title: "Share Your Requirements",
    desc: "Discuss your project scope with our technical team. NDA signed on request.",
  },
  {
    title: "Get a Detailed Proposal",
    desc: "Receive a hiring plan with developer profiles, timeline, and engagement cost.",
  },
  {
    title: "Kick Off Your Project",
    desc: "Dedicated developer onboarded, with weekly updates and full transparency.",
  },
];

const HireTeamHeroSection = ({
  technologyText,
  title,
  description,
  badge,
  trustItems = ["Expert Engineers", "Free Consultation", "NDA on Request"],
}) => {
  return (
    <>
      {/* Hero */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-bg"></div>
        <div className="portfolio-hero-grid"></div>
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2] pt-[120px] pb-16">
          <div className="flex flex-col md:flex-row items-stretch justify-start lg:gap-12 md:gap-10 gap-6">
            <h1 className="sr-only">{technologyText}</h1>

            {/* Left: Copy + What Happens Next */}
            <div className="md:w-[55%] w-full flex flex-col justify-between gap-8">
              <div>
                <span className="inline-flex items-center gap-2 bg-[rgba(26,92,204,0.15)] border border-[rgba(26,92,204,0.3)] rounded-full px-[14px] py-[6px] text-[#00b4d8] text-xs font-semibold tracking-[0.1em] !mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
                  {badge || technologyText}
                </span>

                <h2
                  className="font-extrabold text-white tracking-[-1px] leading-[1.15] !mb-4"
                  style={{ fontSize: "clamp(28px, 3vw, 44px)" }}
                >
                  {title}
                </h2>

                <p className="text-white/60 text-[17px] leading-[1.6] !mb-6 max-w-[560px]">
                  {description}
                </p>

                <div className="text-white grid md:grid-cols-3 grid-cols-1 gap-3">
                  {trustItems.map((item) => (
                    <div key={item} className="flex gap-2 items-center">
                      <Image
                        className="w-5 h-5"
                        src="/images/v2/white-tick-icon.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <span className="text-sm text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What Happens Next */}
              <div className="bg-white/[0.03] rounded-2xl border border-white/10 md:p-7 p-5 backdrop-blur-[10px]">
                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#00b4d8] !mb-6">
                  What Happens Next
                </p>
                <div className="flex flex-col gap-5">
                  {steps.map((step, i) => (
                    <div
                      key={i}
                      className="flex gap-3 items-start justify-start"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full text-white bg-themeColor text-sm font-bold flex items-center justify-center">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-[15px] text-white font-semibold leading-tight">
                          {step.title}
                        </p>
                        <p className="text-[13px] text-white/60 mt-1 leading-[1.5] font-light">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="md:w-[45%] w-full flex flex-col justify-center bg-white/[0.04] rounded-2xl border border-white/10 md:p-7 p-5 backdrop-blur-[10px]">
              <p className="text-white/80 text-[15px] md:text-3xl font-semibold !mb-5">
                Enter the details to proceed
              </p>
              <PortfolioContactForm showPhoneField={true} messageField={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      {/* <section className="bg-[#0d0f1a] border-t border-white/10">
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/[0.08] rounded-xl overflow-hidden border border-white/[0.08]">
            {[
              { value: "120+", label: "Projects Shipped" },
              { value: "20+", label: "Countries Served" },
              { value: "5★", label: "Clutch Rating" },
              { value: "24hr", label: "Response Time" },
            ].map(({ value, label }, i) => (
              <div key={i} className="bg-white/[0.03] py-6 px-5 text-center">
                <div className="text-white text-[26px] md:text-[32px] font-extrabold tracking-[-0.5px] leading-none">
                  {value}
                </div>
                <div className="text-white/70 text-[12px] md:text-[13px] mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default HireTeamHeroSection;
