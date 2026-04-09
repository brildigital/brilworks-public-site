"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CheckSquare } from "lucide-react";
import Cal from "@calcom/embed-react";

export default function CalendarSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      id="calendar-section"
      className="py-20 relative overflow-hidden"
      ref={ref}
    >
      <div className="neural-bg opacity-60"></div>
      <div className="holographic-overlay"></div>
      <div className="circuit-pattern opacity-30"></div>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#121a2b33] backdrop-blur-sm border border-[#017eeb33] rounded-2xl p-2 md:p-8 mb-8 shadow-2xl shadow-[#017eeb1A]"
          data-testid="card-calendar-widget"
        >
          <div className="flex items-center flex-col text-center mb-2">
            <h3
              className="text-3xl font-bold mb-2 !bg-gradient-to-r from-themeColor to-accent bg-clip-text text-transparent"
              data-testid="text-calendar-widget-title"
            >
              Free Walkthrough / How to Start
            </h3>
            <p
              className="text-[#94a3b8]"
              data-testid="text-calendar-widget-description"
            >
              We offer a free 20-minute walkthrough to get going. Here’s what to
              expect:
            </p>
          </div>
          <ul className="grid grid-cols-2 text-left text-[#94a3b8] max-w-5xl mx-auto mt-6 space-y-2 mb-4">
            <li className="flex gap-2">
              <CheckSquare className="text-themeColor flex-shrink-0" />
              We’ll review your idea, whatever form it’s in-sketches, mockups,
              just a concept.
            </li>
            <li className="flex gap-2">
              <CheckSquare className="text-themeColor flex-shrink-0" />
              Discuss goals, timeline, potential resources.
            </li>
            <li className="flex gap-2">
              <CheckSquare className="text-themeColor flex-shrink-0" />
              Show how Brilworks can help build your MVP in 48 hours.
            </li>
            <li className="flex gap-2">
              <CheckSquare className="text-themeColor flex-shrink-0" />
              No obligation, complete transparency, NDA if needed.
            </li>
          </ul>

          <div
            className="bg-[#192134] rounded-xl md:pt-8 min-h-[400px] h-full flex items-center justify-center"
            data-testid="calendar-widget-placeholder"
          >
            <div className="w-full">
              <Cal
                calLink="vikas-singh-bril/free-consultation"
                config={{ theme: "light" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
