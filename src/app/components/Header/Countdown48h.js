"use client";
import React, { useEffect, useState, useRef } from "react";
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

export default function Countdown48h({
  children,
  storageKey = "countdown_48h_end",
}) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const DURATION_MS = 48 * 60 * 60 * 1000; // 48 hours
  const [remainingMs, setRemainingMs] = useState(DURATION_MS);
  const intervalRef = useRef(null);

  // helper: format remaining milliseconds to string
  // function formatRemaining(ms) {
  //   if (ms <= 0) return "00:00:00:00";

  //   const totalSeconds = Math.floor(ms / 1000);
  //   const days = Math.floor(totalSeconds / 86400);
  //   const hours = Math.floor((totalSeconds % 86400) / 3600);
  //   const minutes = Math.floor((totalSeconds % 3600) / 60);
  //   const seconds = totalSeconds % 60;

  //   // zero-pad function
  //   const z = (n) => String(n).padStart(2, "0");

  //   if (days > 0) {
  //     return `${days}d ${z(hours)}:${z(minutes)}:${z(seconds)}`;
  //   }
  //   // no days, show HH:MM:SS
  //   const totalHours = Math.floor(totalSeconds / 3600); // show 24+ hours if any
  //   return `${z(totalHours)}:${z(minutes)}:${z(seconds)}`;
  // }

  function formatParts(ms) {
    if (ms <= 0) return [0, 0, 0, 0];
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return [days, hours, minutes, seconds];
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

  const [days, hours, minutes, seconds] = formatParts(remainingMs);
  const z = (n) => String(n).padStart(2, "0");

  return !isMobile ? (
    <div className="w-full flex items-center gap-3">
      {/* Left Text */}
      <div className="font-semibold text-xl text-white">
        Hurry Up! Free Mockups ends in:&nbsp;
      </div>
      {/* Countdown */}
      <div className="mr-3">
        <div className="flex items-center gap-1 text-xl font-bold">
          <span>{z(days)}</span> : <span>{z(hours)}</span> :{" "}
          <span>{z(minutes)}</span> : <span>{z(seconds)}</span>
        </div>

        {/* Labels under timer */}
        <div className="flex gap-[14px] text-xs text-gray-500">
          <span className="!font-semibold">Days</span>
          <span className="!font-semibold">Hrs</span>
          <span className="!font-semibold">Mins</span>
          <span className="!font-semibold">Secs</span>
        </div>
      </div>
      {children}
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
