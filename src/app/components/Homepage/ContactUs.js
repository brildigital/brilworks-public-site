"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";

const ContactFormV2 = dynamic(() => import("./ContactFormV2"));

const trustItems = [
  "Working prototype in Week 1 — guaranteed",
  "No obligation, no pushy follow-ups",
  "You own the code and the repo from day one",
  "AI agent projects start at $2,000",
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
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 lg:gap-20 items-center">
          {/* Left — Trust Content */}
          <div className="reveal">
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase block mb-3 text-themeColor">
              Start a Project
            </span>
            <h2 className="text-[clamp(30px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] text-[#0d0f1a] mb-3">
              Tell Us What You&apos;re Building
            </h2>
            <p className="font-Figtree text-[#6b7280] text-[17px] leading-[1.7] mb-6">
              Tell us your idea — we&apos;ll send back a practical plan, not a sales pitch.
            </p>

            <div className="flex flex-col gap-3">
              {trustItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 font-Figtree text-sm text-[#374151]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal">
            <ContactFormV2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
