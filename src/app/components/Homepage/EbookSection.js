import React from "react";
import Link from "next/link";

const EbookSection = () => {
  return (
    <div
      className="py-20"
      style={{
        background:
          "linear-gradient(135deg, #0f3d8c 0%, #1A5CCC 50%, #1e3a8a 100%)",
      }}
      id="ebook"
    >
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
        <div className="grid lg:grid-cols-[1fr_auto] grid-cols-1 gap-14 items-center reveal">
          {/* Left — Text */}
          <div>
            <span className="font-Figtree text-[11px] font-bold text-[#00b4d8] tracking-[0.12em] uppercase block mb-3">
              Free Resource
            </span>
            <h3 className="font-Figtree text-[clamp(26px,3vw,36px)] font-extrabold text-white tracking-[-0.5px] mb-3">
              How To Launch an AI MVP in 48 Hours
            </h3>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white mb-7">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              Downloaded by 120+ CTOs from startups and enterprises
            </div>
            <p className="font-Figtree text-white/80 text-[15px] leading-[1.7] mb-7">
              The exact framework Brilworks uses to take clients from idea to
              working prototype in one week. No fluff — just the process, the
              tools, and the decisions that matter.
            </p>
            <Link
              href="/ebooks/"
              className="inline-flex items-center gap-2 bg-white text-themeColor font-bold px-6 py-3 rounded-lg text-sm hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all duration-200 mt-4"
            >
              Download Free →
            </Link>
          </div>

          {/* Right — Ebook Cover */}
          <div className="w-[180px] h-[240px] bg-white/10 border border-white/20 rounded-xl p-6 flex flex-col justify-between shrink-0 hidden md:flex">
            <div>
              <div className="font-Figtree text-base font-extrabold text-white leading-[1.3]">
                How To Launch an AI MVP in 48 Hours
              </div>
            </div>
            <div className="font-Figtree text-[10px] text-white/70">
              brilworks.com · Free Guide
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookSection;
