"use client";
import { motion } from "framer-motion";
import { ArrowRight, ShieldHalf } from "lucide-react";
import { scrollToSection } from "../lib/commonFunction";

const HeroSectionMVPIn48Hours = () => {
  return (
    <section className="min-h-screen relative pt-24 pb-16 overflow-hidden flex items-center">
      <div className="neural-bg"></div>
      <div className="circuit-pattern"></div>
      <div className="geometric-shapes"></div>
      <div className="data-streams"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-wide"
              data-testid="text-hero-headline"
            >
              Launch your <span className="gradient-text">MVP in 48 hours</span>
              <br />
              With a Free one-on-one Walkthrough
            </h1>
            <p
              className="text-xl text-[#566678] !mb-8 max-w-3xl mx-auto"
              data-testid="text-hero-subheading"
            >
              From idea to functioning prototype, Brilworks helps you validate
              fast, build smart, and go live—without the long delays.
            </p>
            <button
              onClick={(e) => scrollToSection(e, "calendar-section")}
              className="relative bg-[#2f6bff] text-white flex gap-2 mx-auto items-center px-6 py-2 rounded-md text-lg font-semibold hover:shadow-2xl transition-all shadow-xl overflow-hidden group mb-12 hover:scale-105"
              data-testid="hero-cta-button"
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              {/* <Calendar  /> */}
              <span className="">Book Your Free Walkthrough</span>
              <ArrowRight className="m-0 w-5 h-5" />
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center !mb-8 max-w-3xl mx-auto"
          >
            <div className="text-center group" data-testid="metric-installs">
              <div className="bg-white border border-[#e4eaf1] rounded-lg p-4 backdrop-blur-sm group-hover:bg-white transition-all duration-300">
                <div className="text-2xl font-bold text-[#2f6bff]">
                  120k+
                </div>
                <div className="text-sm text-[#566678]">Projects Completed</div>
              </div>
            </div>
            <div className="text-center group" data-testid="metric-community">
              <div className="bg-white border border-[#e4eaf1] rounded-lg p-4 backdrop-blur-sm group-hover:bg-white transition-all duration-300">
                <div className="text-2xl font-bold text-[#2f6bff]">
                  8+
                </div>
                <div className="text-sm text-[#566678]">
                  Years of Experience
                </div>
              </div>
            </div>
            <div className="text-center group" data-testid="metric-agents">
              <div className="bg-white border border-[#e4eaf1] rounded-lg p-4 backdrop-blur-sm group-hover:bg-white transition-all duration-300">
                <div className="text-2xl font-bold text-[#2f6bff]">
                  98+
                </div>
                <div className="text-sm text-[#566678]">
                  Project Success Rate
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-flex items-center md:text-base space-x-2 bg-white border border-[#e4eaf1] px-4 py-2 rounded-full text-xs text-[#566678]"
            data-testid="text-reassurance"
          >
            <ShieldHalf className="text-themeColor md:w-8 md:h-8 w-5 h-5" />
            <span>No fluff • Pure build time • Limited weekly slots</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionMVPIn48Hours;
