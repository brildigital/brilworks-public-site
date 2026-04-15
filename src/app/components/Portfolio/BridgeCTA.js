import React from "react";
import Link from "next/link";
import ButtonV2 from "../Common/ButtonV2";

const BridgeCTA = () => {
  return (
    <section className="bg-[#0d0f1a] py-16 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(1,126,235,0.10)_0%,transparent_70%)]"></div>

      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2] text-center">
        <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#00b4d8] inline-block mb-3">
          Building Something Similar?
        </span>
        <h3
          className="font-extrabold text-white tracking-[-1px] leading-[1.2] mb-3"
          style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
        >
          We Take on 3-4 New Mobile Projects Per Quarter
        </h3>
        <p className="text-white/55 text-base mb-8 max-w-[576px] mx-auto">
          Tell us about your app idea — we&apos;ll show you how we&apos;d approach
          the architecture, design, and launch.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <ButtonV2
            size="large"
            label="Get a Free App Consultation"
          />
          <Link
            href="/portfolio/"
            className="c-button c-btn-large border border-white/20 text-white bg-transparent hover:bg-white/[0.08] hover:border-white/40 transition-all duration-300 rounded-md px-[30px] py-3 font-medium whitespace-nowrap inline-flex items-center"
          >
            See More Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BridgeCTA;
