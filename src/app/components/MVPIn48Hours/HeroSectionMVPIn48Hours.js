"use client";
import { motion } from "framer-motion";
import { ArrowRight, ShieldHalf } from "lucide-react";
import { scrollToSection } from "../lib/commonFunction";

const HeroSectionMVPIn48Hours = () => {
  return (
    // <section className="hero-gradient text-white relative overflow-hidden min-h-screen flex items-center">
    //   {/* Floating Orbs */}
    //   <div className="floating-orbs">
    //     <div className="floating-orb"></div>
    //     <div className="floating-orb"></div>
    //     <div className="floating-orb"></div>
    //   </div>

    //   {/* Background Grid */}
    //   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

    //   {/* Animated Icons */}
    //   <motion.div
    //     className="absolute top-20 left-20 text-primary/30"
    //     animate={{
    //       y: [0, -20, 0],
    //       rotate: [0, 180, 360],
    //     }}
    //     transition={{
    //       duration: 6,
    //       repeat: Infinity,
    //       ease: "easeInOut",
    //     }}
    //   >
    //     <Sparkles className="w-8 h-8" />
    //   </motion.div>

    //   <motion.div
    //     className="absolute top-32 right-32 text-secondary/30"
    //     animate={{
    //       y: [0, 15, 0],
    //       rotate: [0, -180, -360],
    //     }}
    //     transition={{
    //       duration: 8,
    //       repeat: Infinity,
    //       ease: "easeInOut",
    //       delay: 2,
    //     }}
    //   >
    //     <Zap className="w-6 h-6" />
    //   </motion.div>

    //   <motion.div
    //     className="absolute bottom-32 left-32 text-accent/30"
    //     animate={{
    //       y: [0, -25, 0],
    //       x: [0, 10, 0],
    //     }}
    //     transition={{
    //       duration: 7,
    //       repeat: Infinity,
    //       ease: "easeInOut",
    //       delay: 1,
    //     }}
    //   >
    //     <Code className="w-7 h-7" />
    //   </motion.div>

    //   <div className="container max-w-[1280px] mx-auto px-6 py-20 relative z-10">
    //     <div className="text-center">
    //       <motion.h1
    //         className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
    //         initial={{ opacity: 0, y: 30 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //         data-testid="hero-title"
    //       >
    //         Launch your <span className="gradient-text-n">MVP in 48 hours</span>{" "}
    //         <br />
    //         Free one-on-one walkthrough
    //       </motion.h1>

    //       <motion.p
    //         className="text-lg md:text-[22px] text-gray-400 !mb-8 max-w-[800px] mx-auto"
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8, delay: 0.2 }}
    //         data-testid="hero-subtitle"
    //       >
    //         Founder or builder? Bring your idea or rough prototype. Leave with a
    //         scoped plan, working slice, and clear next step.
    //       </motion.p>

    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8, delay: 0.6 }}
    //       >
    //         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    //           <button
    //             onClick={() => scrollToSection("cta")}
    //             className="relative bg-gradient-to-r from-[#1cb9d5] from-themeColor to-themeColor flex gap-5 mx-auto items-center text-background px-6 py-2 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all shadow-xl overflow-hidden group"
    //             data-testid="hero-cta-button"
    //           >
    //             <motion.div
    //               className="absolute inset-0 bg-white/20"
    //               initial={{ x: "-100%" }}
    //               whileHover={{ x: "100%" }}
    //               transition={{ duration: 0.6 }}
    //             />
    //             <Calendar className="mr-2 w-5 h-5 relative z-10" />
    //             <span className="relative z-10">
    //               Start Your Free Walkthrough
    //             </span>
    //           </button>
    //         </motion.div>
    //       </motion.div>
    //     </div>
    //     <div className="px-6 pt-20">
    //       <motion.div
    //         className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
    //         initial={{ opacity: 0, y: 30 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //         viewport={{ once: true }}
    //       >
    //         {stats.map((stat, index) => (
    //           <div
    //             key={index}
    //             className="text-center"
    //             data-testid={`stat-item-${index}`}
    //           >
    //             <div
    //               className={`text-4xl font-bold mb-2 ${
    //                 index === 0
    //                   ? "text-themeColor"
    //                   : index === 1
    //                   ? "text-[#1cb9d5]"
    //                   : index === 2
    //                   ? "text-[#1cb9d5]"
    //                   : "text-themeColor"
    //               }`}
    //             >
    //               {stat.value}
    //             </div>
    //             <div className="text-gray-400">{stat.label}</div>
    //           </div>
    //         ))}
    //       </motion.div>

    //       <motion.div
    //         className="text-center mt-8"
    //         initial={{ opacity: 0 }}
    //         whileInView={{ opacity: 1 }}
    //         transition={{ duration: 0.8, delay: 0.3 }}
    //         viewport={{ once: true }}
    //       >
    //         <p
    //           className="text-gray-500 font-medium"
    //           data-testid="stats-tagline"
    //         >
    //           No fluff • Pure build time • Limited weekly slots
    //         </p>
    //       </motion.div>
    //     </div>
    //   </div>
    // </section>
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
              className="text-xl text-[#94a3b8] !mb-8 max-w-3xl mx-auto"
              data-testid="text-hero-subheading"
            >
              From idea to functioning prototype, Brilworks helps you validate
              fast, build smart, and go live—without the long delays.
            </p>
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
              <div className="bg-card/50 border border-[#017eeb33] rounded-lg p-4 backdrop-blur-sm group-hover:bg-card/70 transition-all duration-300">
                <div className="text-2xl font-bold bg-gradient-to-r from-themeColor to-accent bg-clip-text text-transparent">
                  120k+
                </div>
                <div className="text-sm text-[#94a3b8]">Projects Completed</div>
              </div>
            </div>
            <div className="text-center group" data-testid="metric-community">
              <div className="bg-card/50 border border-[#017eeb33] rounded-lg p-4 backdrop-blur-sm group-hover:bg-card/70 transition-all duration-300">
                <div className="text-2xl font-bold bg-gradient-to-r from-themeColor to-accent bg-clip-text text-transparent">
                  8+
                </div>
                <div className="text-sm text-[#94a3b8]">
                  Years of Experience
                </div>
              </div>
            </div>
            <div className="text-center group" data-testid="metric-agents">
              <div className="bg-card/50 border border-[#017eeb33] rounded-lg p-4 backdrop-blur-sm group-hover:bg-card/70 transition-all duration-300">
                <div className="text-2xl font-bold bg-gradient-to-r from-themeColor to-accent bg-clip-text text-transparent">
                  98+
                </div>
                <div className="text-sm text-[#94a3b8]">
                  Project Success Rate
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-flex items-center md:text-base space-x-2 bg-[#192134] px-4 py-2 rounded-full text-xs text-[#94a3b8]"
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
