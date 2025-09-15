"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Clock,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  CheckCircle2Icon,
  Check,
  CheckCheck,
  CheckLine,
  CheckSquare,
} from "lucide-react";
import Cal from "@calcom/embed-react";
import { scrollToSection } from "../lib/commonFunction";

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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
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

  const handleBookingClick = () => {
    // Track CTA click
    console.log("Calendar booking CTA clicked");
    // Here you would integrate with actual calendar booking service
    // For example: window.open('https://calendly.com/your-link', '_blank');
  };

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
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2
            className="text-3xl md:text-5xl font-bold mb-6"
            data-testid="text-calendar-title"
          >
            Free Walkthrough / How to Start
          </h2>
          <p
            className="text-lg text-[#94a3b8] max-w-2xl mx-auto"
            data-testid="text-calendar-subtitle"
          >
            We offer a free 20-minute walkthrough to get going. Here’s what to
            expect:
          </p>
        </motion.div> */}

        {/* Calendar Widget Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#121a2b33] backdrop-blur-sm border border-[#017eeb33] rounded-2xl p-2 md:p-8 mb-8 shadow-2xl shadow-[#017eeb1A]"
          data-testid="card-calendar-widget"
        >
          <div className="flex items-center flex-col text-center mb-2">
            {/* <CalendarDays className="text-themeColor w-10 h-10 mb-4" /> */}
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

          {/* Calendar Widget Integration Point */}
          <div
            className="bg-[#192134] rounded-xl md:pt-8 min-h-[400px] h-full flex items-center justify-center"
            data-testid="calendar-widget-placeholder"
          >
            {/* <div className="flex items-center flex-col">
              <Clock className="text-themeColor w-8 h-8 mb-4" />
              <p className="text-[#94a3b8] font-medium">
                Calendar Widget Integration
              </p>
              <p className="text-sm text-[#94a3b8] !mt-2">
                Available slots: Mon-Fri, 9 AM - 6 PM EST
              </p>
            </div> */}
            <div className="w-full">
              <Cal
                calLink="vikas-singh-bril/free-consultation"
                config={{ theme: "light" }}
              />
            </div>
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          <button
            onClick={(e) => scrollToSection(e, "calendar-section")}
            className="relative bg-gradient-to-r from-themeColor to-[#1cb9d5] flex gap-2 mx-auto items-center text-background px-6 py-2 rounded-md text-lg font-semibold hover:shadow-2xl transition-all shadow-xl overflow-hidden group mb-12 hover:scale-105"
            data-testid="hero-cta-button"
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
           
            <span className="relative">Book My Free Walkthrough</span>
            <ArrowRight className="m-0 w-5 h-5" />
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}
