"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CATEGORIES,
  acceptAll,
  getConsent,
  initGtmConsentDefaults,
  rejectAll,
  setConsent,
} from "./consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [prefs, setPrefs] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    initGtmConsentDefaults();
    if (!getConsent()) setVisible(true);
  }, []);

  const handleAcceptAll = () => {
    acceptAll();
    setVisible(false);
  };

  const handleRejectAll = () => {
    rejectAll();
    setVisible(false);
  };

  const handleSavePrefs = () => {
    setConsent(prefs);
    setVisible(false);
  };

  const togglePref = (key) => {
    if (CATEGORIES[key].required) return;
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-[#e5e7eb] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="container max-w-[1280px] mx-auto md:px-10 px-5 py-5">
        {!showCustomize ? (
          <div className="flex md:flex-row flex-col items-start md:items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-[15px] text-[#0d0f1a] leading-[1.5] font-semibold mb-1">
                We use cookies to improve your experience
              </p>
              <p className="text-[13px] text-[#4b5563] leading-[1.5]">
                Some cookies are essential for the site to work. Others help us
                understand how you use the site and show relevant content. Read
                our{" "}
                <Link
                  href="/privacy-policy/"
                  className="text-themeColor hover:underline font-medium"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 md:flex-nowrap">
              <button
                type="button"
                onClick={() => setShowCustomize(true)}
                className="px-4 py-[9px] text-[13px] font-semibold text-[#4b5563] border border-[#d1d5db] rounded-md hover:bg-[#f9fafb] transition-colors whitespace-nowrap"
              >
                Customize
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-5 py-[9px] text-[13px] font-semibold text-white bg-themeColor hover:bg-[#0168c0] rounded-md transition-colors whitespace-nowrap"
              >
                Accept all
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-[15px] text-[#0d0f1a] leading-[1.5] font-semibold mb-1">
                  Cookie preferences
                </p>
                <p className="text-[13px] text-[#4b5563]">
                  Choose which cookies you want to allow. Necessary cookies
                  keep the site running and can&apos;t be disabled.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowCustomize(false)}
                className="text-[#6b7280] hover:text-[#0d0f1a] text-xl leading-none flex-shrink-0"
                aria-label="Close customize panel"
              >
                ×
              </button>
            </div>

            <div className="space-y-2 mb-4">
              {Object.entries(CATEGORIES).map(([key, { label, required }]) => (
                <label
                  key={key}
                  className={`flex items-center justify-between gap-3 p-3 rounded-md border border-[#e5e7eb] ${
                    required ? "bg-[#f9fafb]" : "bg-white cursor-pointer hover:border-themeColor/40"
                  }`}
                >
                  <div>
                    <p className="text-[13px] font-semibold text-[#0d0f1a]">
                      {label}
                      {required && (
                        <span className="ml-2 text-[11px] font-normal text-[#6b7280]">
                          (always on)
                        </span>
                      )}
                    </p>
                    <p className="text-[12px] text-[#6b7280] mt-0.5">
                      {categoryDescription(key)}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={prefs[key]}
                    disabled={required}
                    onChange={() => togglePref(key)}
                    className="w-4 h-4 accent-themeColor disabled:cursor-not-allowed"
                  />
                </label>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleSavePrefs}
                className="px-5 py-[9px] text-[13px] font-semibold text-white bg-themeColor hover:bg-[#0168c0] rounded-md transition-colors"
              >
                Save preferences
              </button>
              <button
                type="button"
                onClick={handleRejectAll}
                className="px-4 py-[9px] text-[13px] font-semibold text-[#4b5563] border border-[#d1d5db] rounded-md hover:bg-[#f9fafb] transition-colors"
              >
                Reject all
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-4 py-[9px] text-[13px] font-semibold text-[#4b5563] border border-[#d1d5db] rounded-md hover:bg-[#f9fafb] transition-colors"
              >
                Accept all
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

function categoryDescription(key) {
  switch (key) {
    case "necessary":
      return "Required for login, session management, and core site functionality.";
    case "analytics":
      return "Help us understand usage patterns so we can improve the site.";
    case "marketing":
      return "Used to personalize ads and measure campaign performance.";
    default:
      return "";
  }
}

export default CookieConsent;
