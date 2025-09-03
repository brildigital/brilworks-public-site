"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Map,
  MousePointer,
  Puzzle,
  UserCheck,
  Rocket,
  Calculator,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";

const outcomes = [
  {
    icon: Map,
    title: "MVP Scope Map",
    description:
      "Crystal clear: what to build now, what to defer. Zero scope creep.",
    iconColor: "text-themeColor",
    imageSrc: "/images/v2/mvp-scope-map.webp",
  },
  {
    icon: MousePointer,
    title: "Clickable Demo",
    description:
      "Fast path using no-code or lightweight code. Show, don't tell.",
    iconColor: "text-accent",
    imageSrc: "/images/v2/clickable-demo.webp",
  },
  {
    icon: Puzzle,
    title: "Integration Plan",
    description: "Auth, data, payments, analytics. The full stack blueprint.",
    iconColor: "text-themeColor",
    imageSrc: "/images/v2/integration-plan.webp",
  },
  {
    icon: UserCheck,
    title: "User Story Pack",
    description:
      "5 core flows with acceptance criteria. Development-ready specs.",
    iconColor: "text-accent",
    imageSrc: "/images/v2/user-story-pack.webp",
  },
  {
    icon: Rocket,
    title: "Go-Live Checklist",
    description: "Deploy, track, iterate. From localhost to production.",
    iconColor: "text-themeColor",
    imageSrc: "/images/v2/go-live-checklist.webp",
  },
  {
    icon: Calculator,
    title: "Cost & Timeline",
    description: "Realistic resourcing and next milestones. No surprises.",
    iconColor: "text-accent",
    imageSrc: "/images/v2/cost-timeline.webp",
  },
];

export default function OutcomesSection() {
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
      <div className="holographic-overlay"></div>
      <div className="circuit-pattern opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-5xl font-bold mb-6"
            data-testid="text-outcomes-title"
          >
            Your 48-hour outcome
          </h2>
          <p
            className="text-lg text-[#94a3b8] max-w-2xl mx-auto"
            data-testid="text-outcomes-subtitle"
          >
            Skip months of planning paralysis. Get a complete roadmap and
            working prototype.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card/80 backdrop-blur-sm p-8 rounded-xl border border-[#017eeb33] hover:shadow-2xl hover:shadow-[#017eeb1A] hover:border-primary/40 transition-all duration-500 group"
              data-testid={`card-outcome-${index}`}
            >
              {/* <div
                className={`w-12 h-12 ${outcome.bgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-[#017eeb33]`}
              >
                <outcome.icon
                  className={`${outcome.iconColor} text-xl group-hover:text-accent transition-colors duration-300`}
                />
              </div> */}
              <div className="mb-5">
                <Image
                  className="rounded-2xl"
                  src={outcome?.imageSrc}
                  alt="img-c"
                  width="565"
                  height="600"
                />
              </div>

              <h3
                className="text-xl font-semibold mb-3 group-hover:text-themeColor transition-colors duration-300"
                data-testid={`text-outcome-title-${index}`}
              >
                {outcome.title}
              </h3>
              <p
                className="text-[#94a3b8]"
                data-testid={`text-outcome-description-${index}`}
              >
                {outcome.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <div
            className="inline-flex items-center text-xs md:text-base space-x-2 bg-[#017eeb1A] text-themeColor px-4 py-2 rounded-full font-medium"
            data-testid="text-outcomes-note"
          >
            <Lightbulb className="w-5 md:w-8 md:h-8 h-5" />
            <span>Come with an idea or a repo—both work</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
