"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";

const ContactFormV2 = dynamic(() => import("./ContactFormV2"));

const trustItems = [
  "Working prototype delivered in Week 1",
  "98% project success rate across 120+ projects",
  "100% Job Success on Upwork — verified",
  "Starting at $2,000 for AI agent projects",
];

const ContactUs = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <div className="bg-[#f8f9ff] py-24" id="cta">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 lg:gap-20 items-start">
          {/* Left — Trust Content */}
          <div className="reveal">
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase block mb-3 text-themeColor">
              Start a Project
            </span>
            <h2 className="text-[clamp(30px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] text-[#0d0f1a] mb-3">
              Tell Us What You&apos;re Building
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[#6b7280] text-base leading-[1.7] mb-8">
              We&apos;ll respond within 24 hours with a practical plan — not a
              sales pitch. No obligation, no pushy follow-ups.
            </p>

            <div className="flex flex-col gap-3">
              {trustItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 font-[family-name:var(--font-body)] text-sm text-[#374151]"
                >
                  <span className="w-5 h-5 bg-[#10b981] rounded-full flex items-center justify-center text-white text-[11px] shrink-0">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal">
            <ContactFormV2 showProjectType={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
