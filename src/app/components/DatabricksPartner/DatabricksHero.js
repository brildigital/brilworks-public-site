import React from "react";
import Image from "next/image";
import ButtonV2 from "../Common/ButtonV2";
import Link from "next/link";

const DatabricksHero = () => {
  return (
    <div className="hero-section font-Figtree min-h-[calc(100vh-200px)]">
      <div className="hero-grid-overlay"></div>
      <div className="hero-glow-orb"></div>
      <div className="banner-layer min-h-[calc(100vh-200px)] flex items-center">
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2]">
          <div className="pt-[140px] pb-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left content */}
              <div>
                {/* Databricks badge */}
                <div className="flex items-center gap-[11px] mb-6 hero-fade-down">
                  <span className="w-[30px] h-[30px] rounded-[7px] bg-white flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px]">
                      <path d="M12 3L3 8l9 5 9-5-9-5z" fill="#FF3621" />
                      <path d="M3 12l9 5 9-5" stroke="#FF3621" strokeWidth="2" strokeLinejoin="round" fill="none" />
                      <path d="M3 16l9 5 9-5" stroke="#FF3621" strokeWidth="2" strokeLinejoin="round" fill="none" />
                    </svg>
                  </span>
                  <span className="font-Figtree font-bold text-[21px] text-white tracking-[-0.01em]">
                    databricks
                  </span>
                </div>

                {/* H1 */}
                <h1
                  className="hero-h1 font-extrabold text-white tracking-[-0.03em] leading-[1.06] mb-4"
                  style={{ fontSize: "clamp(34px, 5vw, 56px)" }}
                >
                  Engineer enterprise data &amp; AI{" "}
                  <span className="text-[#3c7dde]">on Databricks.</span>
                </h1>

                {/* Lead */}
                <p
                  className="text-white/70 hero-fade-up max-w-[48ch] leading-[1.55]"
                  style={{ fontSize: "clamp(16px, 1.9vw, 19px)" }}
                >
                  Brilworks is a certified Databricks partner. We build your
                  lakehouse on one platform, run data engineering at scale, and
                  take ML and GenAI from notebook to production on data your
                  teams can trust.
                </p>

                {/* CTAs */}
                <div className="flex gap-3 flex-wrap items-center hero-fade-up mt-8">
                  <ButtonV2 size="large" label="Let's connect" />
                  <Link
                    href="#services"
                    className="inline-flex items-center gap-2 px-[22px] py-[15px] rounded-[10px] text-white text-[15px] font-semibold border border-white/20 hover:bg-white/[0.08] transition-all duration-200"
                  >
                    See what we do
                  </Link>
                </div>
              </div>

              {/* Right — Hero image */}
              <div className="hidden lg:flex justify-center items-center hero-fade-up">
                <div className="relative w-full max-w-[520px] aspect-square">
                  {/* Blurred gray 3D backdrop */}
                  <div className="absolute inset-0 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_60px_-12px_rgba(41,181,232,0.25)]" />
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent blur-2xl" />
                  {/* Image on top */}
                  <Image
                    src="/images/v2/databricks_hero.webp"
                    alt="Databricks lakehouse data engineering and AI platform"
                    fill
                    sizes="(max-width: 1024px) 0vw, 50vw"
                    className="object-contain relative z-[1] drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)] rounded-3xl p-2"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabricksHero;
