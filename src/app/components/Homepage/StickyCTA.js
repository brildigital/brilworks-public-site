"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
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
        className="c-button c-btn-primary c-btn-medium outline-none overflow-hidden whitespace-nowrap transition-all duration-300 !py-2 !px-5 !text-sm hover:text-themeColor"
      >
        Book Free Consultation
      </Link>
      <button
        onClick={() => setDismissed(true)}
        className="text-white/40 hover:text-white/70 transition-colors ml-2 leading-none"
        aria-label="Dismiss"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default StickyCTA;
