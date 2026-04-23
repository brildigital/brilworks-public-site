import React from "react";
import Link from "next/link";
import ButtonV2 from "../Common/ButtonV2";

const IndustryMidCTA = ({
  title = "Ready to Build Your App?",
  description = "Get a free consultation and project estimate. We respond within 24 hours.",
}) => {
  return (
    <section className="bg-[#0d0f1a] py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(1,126,235,0.10)_0%,transparent_70%)]"></div>
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2] text-center">
        <h3
          className="font-extrabold text-white tracking-[-1px] leading-[1.2] !mb-3"
          style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
        >
          {title}
        </h3>
        <p className="text-white/50 text-base !mb-8 max-w-[576px] mx-auto">
          {description}
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <ButtonV2
            size="large"
            label="Get Free Consultation"
            redirect="#section-contact-form"
            scrollingButton
          />
          <Link
            href="/portfolio/"
            className="inline-flex items-center whitespace-nowrap rounded-md px-[30px] py-3 font-medium text-white border border-white/20 bg-transparent hover:bg-white/[0.08] hover:border-white/40 transition-all duration-300"
          >
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustryMidCTA;
