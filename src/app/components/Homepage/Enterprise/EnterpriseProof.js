"use client";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../../../styles/EnterpriseHome.css";

const REVIEWS = [
  {
    quote:
      "Great technical skills and exceptional communication. They adapted to our processes.",
    who: "COO · Eccocar, Spain",
  },
  {
    quote:
      "Incredibly professional, delivered on time, and proactive in their communication.",
    who: "Founder & CEO · Acenonyx",
  },
  {
    quote:
      "Transparent, responsive, delivered exactly what was scoped — no surprises.",
    who: "Executive · Service Buddy",
  },
  {
    quote:
      "Their team felt like an extension of ours. Highly recommend for any data project.",
    who: "VP Engineering · FinTech Client",
  },
  {
    quote:
      "Fast turnaround without compromising quality. We'll definitely work with them again.",
    who: "CTO · SaaS Startup",
  },
];

const AWARDS = [
  "GoodFirms · Top Software 2025–26",
  "Clutch Global · 2025",
  "Clutch Global · 2024",
  "SelectedFirms · Top 10 2026",
  "AWS Partner · Advanced Tier",
];

const CARD_WIDTH = 338; // 320px card + 18px gap

const EnterpriseProof = () => {
  const scrollRef = useRef(null);
  const rafRef = useRef(null);
  const pausedRef = useRef(false);
  const doubled = [...REVIEWS, ...REVIEWS];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const tick = () => {
      if (!pausedRef.current) {
        el.scrollLeft += 0.6;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    pausedRef.current = true;
    el.scrollBy({ left: dir * CARD_WIDTH, behavior: "smooth" });
    setTimeout(() => {
      pausedRef.current = false;
    }, 800);
  };

  return (
    <section className="bw-home">
      <div className="wrap">
        <p className="eyebrow">Trusted by the people we work with</p>
        <div className="proof-header">
          <h2 className="sec">5.0 on Clutch, across 22 reviews.</h2>
          <div className="rev-nav">
            <button
              className="rev-btn"
              onClick={() => scroll(-1)}
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="rev-btn"
              onClick={() => scroll(1)}
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div
          className="reviews"
          ref={scrollRef}
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
          style={{
            maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          {doubled.map((r, i) => (
            <div className="rev" key={i}>
              <div className="st">★★★★★</div>
              <p>&ldquo;{r.quote}&rdquo;</p>
              <div className="who">{r.who}</div>
            </div>
          ))}
        </div>
        <div className="awards">
          {AWARDS.map((a) => (
            <span key={a}>{a}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseProof;
