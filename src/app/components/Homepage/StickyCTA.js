"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPercent > 0.3);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0d0f1a]/95 backdrop-blur-md border-t border-white/10 py-3 px-5 transition-transform duration-300 md:flex hidden items-center justify-center gap-4">
      <span className="text-white/70 text-sm font-medium">
        Ready to start? We respond within 24 hours with a practical plan.
      </span>
      <Link
        href="/contact-us/"
        className="c-button c-btn-primary c-btn-medium outline-none overflow-hidden whitespace-nowrap transition-all duration-300 !py-2 !px-5 !text-sm"
      >
        Book Free Consultation
      </Link>
      <button
        onClick={() => setDismissed(true)}
        className="text-white/65 hover:text-white/90 transition-colors ml-2 leading-none"
        aria-label="Dismiss"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </button>
    </div>
  );
};

export default StickyCTA;
