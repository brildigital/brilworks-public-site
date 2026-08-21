"use client";
import Link from "next/link";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";
import { installScrollDepth, trackEvent } from "../lib/tracking";
import "../../styles/ServiceLightTheme.css";

// Proof numbers — tune these in one place. The value prop for this page is
// speed, depth of work, and breadth of industries shipped. Swap `caseStudyCount`
// in for a live number once we have it; hardcoded only for the hero strip.
const PROOF = [
  { value: "10+", label: "Years building software" },
  { value: "120+", label: "Products shipped" },
  { value: "AWS", label: "Consulting Partner" },
  { value: "15", label: "Industries served" },
];

const PortfolioBanner = ({ caseStudyCount }) => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    const removeDepth = installScrollDepth("portfolio");
    return () => {
      window.removeEventListener("scroll", scrollEffect);
      removeDepth();
    };
  }, []);

  const handleCta = (name) => () => {
    trackEvent("portfolio_hero_cta_click", { cta: name });
  };

  return (
    <section className="relative overflow-hidden svc-hero-bg pt-20 pb-14 md:pb-[80px]">
      <div className="container max-w-[1280px] main-section-padding mx-auto flex items-center justify-center">
        <div className="w-full">
          <h1
            className="font-semibold leading-[1.08] tracking-tight text-[32px] md:text-[44px] lg:text-[56px] max-w-[920px] !mb-5"
            style={{ color: "#0b1e33" }}
          >
            Engineering teams and AI agents that{" "}
            <span style={{ color: "#2f6bff" }}>ship at agency speed.</span>
          </h1>

          <p
            className="md:text-lg text-base md:max-w-[640px] !mb-8 leading-relaxed"
            style={{ color: "#566678" }}
          >
            Production-ready MVPs in weeks, not quarters — for founders, product
            teams, and scaleups.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4 !mb-12">
            <Link
              href="/contact-us/"
              prefetch={false}
              onClick={handleCta("primary_estimate")}
              className="inline-flex items-center gap-2 font-medium rounded-md px-5 md:px-6 py-3 text-sm md:text-base transition-colors hover:opacity-90"
              style={{ background: "#2f6bff", color: "#fff" }}
            >
              Get a free project estimate
              <span aria-hidden>→</span>
            </Link>

            <a
              href="#recent-work"
              onClick={handleCta("secondary_scroll_to_work")}
              className="inline-flex items-center gap-2 font-medium rounded-md px-5 md:px-6 py-3 text-sm md:text-base transition-colors hover:bg-black/5"
              style={{ color: "#0b1e33", border: "1px solid #e4eaf1" }}
            >
              Explore the work
              <span aria-hidden>↓</span>
            </a>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 md:gap-x-10 max-w-[820px] pt-6"
            style={{ borderTop: "1px solid #e4eaf1" }}
          >
            {PROOF.map((p, i) => (
              <div key={i} className="flex flex-col">
                <span
                  className="font-bold text-2xl md:text-3xl leading-none"
                  style={{ color: "#0b1e33" }}
                >
                  {p.value}
                </span>
                <span
                  className="font-medium text-sm md:text-base leading-snug !mt-2"
                  style={{ color: "#6b7a8a" }}
                >
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioBanner;
