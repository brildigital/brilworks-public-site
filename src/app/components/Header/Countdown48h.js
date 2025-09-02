"use client";

import React, { useEffect, useState, useRef } from "react";
import { Clock, Timer } from "lucide-react";
import { useMediaQuery } from "react-responsive";

/**
 * 48-hour countdown timer component
 *
 * - Starts (or resumes) a single 48-hour countdown
 * - Persists end timestamp in localStorage so reloads keep the same timer
 * - Displays days/hours/minutes/seconds; updates every second
 * - Shows the Lucide <Clock /> icon
 *
 * Usage: <Countdown48h storageKey="my-48h-timer" />
 */

export default function Countdown48h({ storageKey = "countdown_48h_end" }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const DURATION_MS = 48 * 60 * 60 * 1000; // 48 hours
  const [remainingMs, setRemainingMs] = useState(DURATION_MS);
  const intervalRef = useRef(null);

  // helper: format remaining milliseconds to string
  function formatRemaining(ms) {
    if (ms <= 0) return "00:00:00:00";

    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // zero-pad function
    const z = (n) => String(n).padStart(2, "0");

    if (days > 0) {
      return `${days}d ${z(hours)}:${z(minutes)}:${z(seconds)}`;
    }
    // no days, show HH:MM:SS
    const totalHours = Math.floor(totalSeconds / 3600); // show 24+ hours if any
    return `${z(totalHours)}:${z(minutes)}:${z(seconds)}`;
  }
  const startInterval = (end) => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    const tick = () => {
      const now = Date.now();
      const rem = Math.max(0, end - now);
      setRemainingMs(rem);

      if (rem <= 0) {
        localStorage.removeItem(storageKey);
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    tick();
    intervalRef.current = setInterval(tick, 1000);
  };

  // ✅ resetTimer
  function resetTimer() {
    const newEnd = Date.now() + DURATION_MS;
    localStorage.setItem(storageKey, String(newEnd));
    startInterval(newEnd);
  }

  useEffect(() => {
    let end = null;
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = parseInt(stored, 10);
        if (!Number.isNaN(parsed) && parsed > Date.now()) {
          end = parsed;
        }
      }
    } catch (e) {}

    if (!end) {
      end = Date.now() + DURATION_MS;
      localStorage.setItem(storageKey, String(end));
    }

    startInterval(end);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  return !isMobile ? (
    <div className="w-fit max-w-md mx-auto bg-[#081124] px-3 py-2 rounded-md shadow-xl flex items-center gap-2">
      <Timer className="w-8 h-8 text-accent" />
      <p className="text-lg font-semibold text-[#00DBD3] tabular-nums">
        {formatRemaining(remainingMs)}
      </p>

      {/* 🔄 Reset button to renew 48h slot */}
      {/* <button
        onClick={resetTimer}
        className="ml-4 px-3 py-2 bg-[#0b1220] text-sm rounded hover:bg-[#121a2b] transition"
      >
        Reset
      </button> */}
    </div>
  ) : (
    ""
  );
}
