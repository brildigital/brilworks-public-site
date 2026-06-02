import React from "react";

const steps = [
  {
    number: "01",
    tag: "Define",
    title: "Share Your Requirements",
    description:
      "Tell us about your project, tech stack, and the kind of developer you need. NDA signed on request.",
  },
  {
    number: "02",
    tag: "Match",
    title: "Get Matched Profiles",
    description:
      "Receive 3–5 hand-picked developer profiles within 48 hours, complete with skills, experience, and availability.",
  },
  {
    number: "03",
    tag: "Interview",
    title: "Interview the Shortlist",
    description:
      "Run technical interviews directly with the developers. Take your time — no pressure, no pushy follow-ups.",
  },
  {
    number: "04",
    tag: "Onboard",
    title: "Onboard & Start Building",
    description:
      "Pick your developer. We handle contracts, onboarding, and setup. They start within a week.",
  },
];

const HireInFourSteps = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#0b0f1e" }}
    >
      {/* Subtle blue glow blobs matching the hero */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(1,126,235,0.5) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(0,180,216,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="container max-w-[1280px] main-section-padding mx-auto relative z-10 reveal">
        {/* Heading */}
        <div className="text-center md:mb-12 mb-8">
          <h2
            className="font-extrabold text-white tracking-[-0.5px] leading-[1.2]"
            style={{ fontSize: "clamp(24px, 2.5vw, 36px)" }}
          >
            Hire ReactJS Developers in{" "}
            <span style={{ color: "#017eeb" }}>4 Simple Steps</span>
          </h2>
          <p className="text-white/50 md:text-lg text-base mt-3 max-w-xl mx-auto">
            From requirement to onboarded developer — usually within a week.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 md:gap-6">
          {steps.map(({ number, tag, title, description }) => (
            <div
              key={number}
              className="flex flex-col justify-start items-start rounded-2xl md:p-6 p-5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Step number */}
              <span
                className="text-[52px] font-extrabold leading-none mb-4"
                style={{ color: "rgba(1,126,235,0.25)" }}
              >
                {number}
              </span>

              {/* Tag pill — matches hero badge style */}
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide mb-4"
                style={{
                  background: "rgba(1,126,235,0.15)",
                  border: "1px solid rgba(1,126,235,0.3)",
                  color: "#00b4d8",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#10b981" }}
                />
                {tag}
              </span>

              {/* Title */}
              <h3 className="text-white font-semibold lg:text-lg text-base mb-3 leading-snug">
                {title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireInFourSteps;
