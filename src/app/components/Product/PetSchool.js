"use client";
import {
  Award,
  BarChart2,
  BookOpen,
  Check,
  ChevronRight,
  MessageSquare,
  Star,
  Video,
  Zap,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const PRIMARY = "#2A4A30";
const ACCENT = "#C8883C";

const features = [
  {
    icon: BookOpen,
    title: "Structured Lessons",
    description:
      "Step-by-step training sessions designed by pet behaviour experts. Each lesson builds on the last, so progress feels natural and rewarding.",
    tag: "Dogs & Cats",
  },
  {
    icon: Zap,
    title: "Daily Streaks",
    description:
      "Consistency is the secret to training success. PetSchool tracks your daily sessions and celebrates streaks to keep you and your pet on track.",
    tag: "Habit forming",
  },
  {
    icon: Award,
    title: "Badges & Achievements",
    description:
      "Earn Common, Rare, Epic, and Legendary badges as you and your pet hit milestones. Share your wins with the community.",
    tag: "4 rarity tiers",
  },
  {
    icon: BarChart2,
    title: "Progress Tracking",
    description:
      "Weekly activity charts, completion rates, and detailed history so you can see exactly how far you and your pet have come.",
    tag: "Visual charts",
  },
  {
    icon: Video,
    title: "Video Training Library",
    description:
      "Watch expert training demonstrations before each session. Short, clear clips that show exactly what you need to do — no guesswork.",
    tag: "HD demos",
  },
  {
    icon: MessageSquare,
    title: "Community Feed",
    description:
      "Share training wins, ask questions, and cheer on other pet parents. A supportive community of dog and cat owners just like you.",
    tag: "Like & comment",
  },
];

const trainingTypes = [
  { emoji: "🎓", name: "Obedience", desc: "Sit, stay, come, heel — the essential commands every pet should know." },
  { emoji: "🛡️", name: "Safety", desc: "Drop it, leave it, boundary training — keep your pet safe in any situation." },
  { emoji: "🐾", name: "Socialisation", desc: "Calm greetings, meeting new people, reducing anxiety around other animals." },
  { emoji: "✨", name: "Tricks", desc: "High five, roll over, play dead — fun tricks that strengthen your bond." },
  { emoji: "⚡", name: "Agility", desc: "Jump, weave, climb — physical challenges that exercise body and mind." },
];

const levels = [
  { label: "Beginner", color: "#A8C9AD", desc: "Perfect for puppies and kittens, or any pet starting fresh with training." },
  { label: "Intermediate", color: "#FFCC80", desc: "Build on the basics with more complex commands and sequences." },
  { label: "Expert", color: "#CE93D8", desc: "Advanced challenges for experienced pets and dedicated owners." },
];

const PetSchool = () => {
  return (
    <div>
      {/* Hero */}
      <section className="pt-16" style={{ background: PRIMARY }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)" }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: ACCENT }}
                ></span>
                <span>Now available on iOS</span>
              </div>

              <h1
                className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Train your pet,{" "}
                <span className="block italic" style={{ color: ACCENT }}>
                  one lesson at a time
                </span>
              </h1>

              <p className="text-xl mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                PetSchool makes expert pet training fun and achievable. Build
                daily streaks, earn badges, and watch your dog or cat grow —
                lesson by lesson.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-5">
                <a
                  href="https://apps.apple.com/app/petschool/id6771285946"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center space-x-3 bg-white text-gray-900 px-6 py-3 rounded-2xl hover:shadow-xl transition-all duration-300"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs font-medium opacity-70">Download on the</div>
                    <div className="text-base font-bold">App Store</div>
                  </div>
                </a>

                <div
                  className="flex items-center justify-center space-x-3 px-6 py-3 rounded-2xl cursor-default"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.2)" }}
                >
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>Coming soon on</div>
                    <div className="text-base font-bold text-white">Google Play</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center md:space-x-10 space-x-5">
                {[
                  { val: "50+", label: "Training Lessons" },
                  { val: "5", label: "Training Categories" },
                  { val: "20+", label: "Achievements" },
                ].map((s, i) => (
                  <React.Fragment key={s.label}>
                    {i > 0 && <div className="w-px h-10" style={{ background: "rgba(255,255,255,0.15)" }} />}
                    <div>
                      <div className="text-3xl font-bold text-white">{s.val}</div>
                      <div className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{s.label}</div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-transparent rounded-3xl shadow-2xl overflow-hidden p-2">
                  <Image
                    src="/images/petschool.webp"
                    alt="PetSchool App Icon"
                    width={610}
                    height={430}
                    className="w-full h-auto rounded-2xl"
                  />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ background: "#E8F0E9", color: PRIMARY }}
            >
              <Star className="w-4 h-4" />
              <span>Everything you need</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Built for real pet parents
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No complicated systems. No jargon. Just a clear, step-by-step path
              to a well-trained pet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "#E8F0E9", color: PRIMARY }}
                >
                  <f.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{f.description}</p>
                <span
                  className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: "#FBF0E3", color: "#9A6020" }}
                >
                  {f.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Categories */}
      <section style={{ background: PRIMARY }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-12">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{ background: `rgba(200,136,60,0.15)`, color: ACCENT }}
            >
              5 Training Categories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              One app for{" "}
              <em className="italic" style={{ color: ACCENT }}>every skill</em>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
              From first commands to advanced agility — PetSchool covers every
              stage of your pet&apos;s training journey.
            </p>
          </div>

          <div className="grid md:grid-cols-5 grid-cols-2 gap-4 mb-12">
            {trainingTypes.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 text-center"
                style={{ background: "rgba(255,255,255,0.07)", border: "1.5px solid rgba(255,255,255,0.1)" }}
              >
                <div className="text-4xl mb-3">{t.emoji}</div>
                <div className="font-bold text-white mb-2">{t.name}</div>
                <div className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{t.desc}</div>
              </div>
            ))}
          </div>

          {/* Skill Levels */}
          <div
            className="rounded-2xl p-7"
            style={{ background: "rgba(255,255,255,0.07)" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Skill Levels
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {levels.map((lv) => (
                <div
                  key={lv.label}
                  className="rounded-2xl p-5"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1.5px solid rgba(255,255,255,0.1)" }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex gap-1 items-end">
                      {[8, 12, 16].map((h, j) => (
                        <div
                          key={j}
                          className="w-1 rounded-sm"
                          style={{ height: h, background: j < [1, 2, 3][levels.indexOf(lv)] ? lv.color : "rgba(255,255,255,0.18)" }}
                        />
                      ))}
                    </div>
                    <span className="font-semibold text-sm" style={{ color: lv.color }}>{lv.label}</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{lv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gradient-to-b from-white to-gray-50">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How PetSchool Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, consistent, and rewarding for you and your pet
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Download & Sign Up", desc: "Get the app and create your profile in minutes" },
              { step: "2", title: "Set Up Pet Profile", desc: "Add your pet's name, breed, and age for tailored lessons" },
              { step: "3", title: "Start a Lesson", desc: "Pick a category and skill level — watch the demo, then train" },
              { step: "4", title: "Build Streaks & Earn Badges", desc: "Come back daily, track progress, and celebrate every milestone" },
            ].map((s, i) => (
              <div key={i} className="text-center relative">
                <div
                  className="w-14 h-14 rounded-full text-white text-xl font-bold flex items-center justify-center mx-auto mb-4"
                  style={{ background: PRIMARY }}
                >
                  {s.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
                {i < 3 && (
                  <ChevronRight className="hidden md:block absolute top-5 -right-4 w-8 h-8 text-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download-app" style={{ background: PRIMARY }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center text-white">
            <div className="text-5xl mb-6">🐾</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start training{" "}
              <em className="italic" style={{ color: ACCENT }}>today</em>
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
              Free to download. Your pet&apos;s best self is one lesson away.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
              <a
                href="https://apps.apple.com/app/petschool/id6771285946"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-3 bg-white text-gray-900 px-6 py-3 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center space-x-8 flex-wrap gap-4">
              {["50+ Lessons", "Free to Download", "Dogs & Cats"].map((t) => (
                <div key={t} className="flex items-center space-x-2">
                  <Check className="w-5 h-5" style={{ color: ACCENT }} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PetSchool;
