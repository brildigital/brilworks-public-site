"use client";
import { motion } from "framer-motion";
import {
  MessagesSquare,
  ClipboardList,
  Code,
  Rocket,
  ArrowRight,
  Clock,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const processSteps = [
  {
    step: "1",
    title: "Discovery Call",
    duration: "20 min",
    description: "Share your idea, goals, and current state",
    icon: MessagesSquare,
    illustration:
      "M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z",
  },
  {
    step: "2",
    title: "Scope & Plan",
    duration: "4 hours",
    description: "Define MVP features, tech stack, and roadmap",
    icon: ClipboardList,
    illustration: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    step: "3",
    title: "Rapid Build",
    duration: "36 hours",
    description: "Create working prototype with core features",
    icon: Code,
    illustration: "M10 20l4-16m-4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    step: "4",
    title: "Review & Deploy",
    duration: "8 hours",
    description: (
      <>
        Test, refine, and launch your
        <br /> MVP
      </>
    ),
    icon: Rocket,
    illustration: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

export default function ProcessSection() {
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

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="circuit-pattern opacity-30"></div>
      <div className="holographic-overlay"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-5xl font-bold mb-6"
            data-testid="text-process-title"
          >
            How the <span className="gradient-text">48-hour process</span> works
          </h2>
          <p
            className="text-lg text-[#94a3b8] max-w-3xl mx-auto"
            data-testid="text-process-subtitle"
          >
            From idea to working MVP in just 48 hours. Here's our proven
            step-by-step process.
          </p>
        </motion.div>

        {/* Process Flow */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-themeColor via-accent to-thefrom-themeColor opacity-30 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
                data-testid={`card-process-${index}`}
              >
                {/* Step Number */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-themeColor to-accent rounded-full flex items-center justify-center shadow-2xl shadow-[#017eeb4D] group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Process Card */}
                <div className="bg-[#121a2b33] backdrop-blur-sm border border-[#017eeb33] rounded-2xl p-6 hover:shadow-2xl hover:shadow-[#017eeb1A] hover:border-primary/40 transition-all duration-500 group-hover:transform group-hover:scale-105">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-[#017eeb1A] rounded-xl flex items-center justify-center border border-[#017eeb33]">
                      <step.icon className="text-themeColor text-xl group-hover:text-accent transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3
                      className="text-xl font-semibold mb-2 group-hover:text-themeColor transition-colors duration-300"
                      data-testid={`text-process-title-${index}`}
                    >
                      {step.title}
                    </h3>
                    <div
                      className="text-sm text-accent font-medium mb-3 bg-accent/10 px-3 py-1 rounded-full inline-block"
                      data-testid={`text-process-duration-${index}`}
                    >
                      {step.duration}
                    </div>
                    <p
                      className="text-[#94a3b8] text-sm leading-relaxed"
                      data-testid={`text-process-description-${index}`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connection Arrow (for large screens) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-2">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center">
                      <ArrowRight className="text-themeColor w-5 h-5" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div
            className="inline-flex items-center text-xs md:text-base justify-center space-x-2 bg-[#017eeb1A] text-themeColor px-6 py-3 rounded-full font-medium border border-[#017eeb33]"
            data-testid="text-process-guarantee"
          >
            <Clock className="text-themePrimary w-5 md:w-8 h-5 md:h-8" />
            <span>Total time: 48 hours • Results guaranteed</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
