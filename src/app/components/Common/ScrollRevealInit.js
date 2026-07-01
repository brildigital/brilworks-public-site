"use client";
import { useEffect } from "react";

const ScrollRevealInit = () => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".rv").forEach((el) => el.classList.add("in"));
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll("section").forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);
  return null;
};

export default ScrollRevealInit;
