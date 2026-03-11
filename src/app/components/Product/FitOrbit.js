"use client";
import {
  TrendingUp,
  Trophy,
  Calculator,
  Library,
  Calendar,
  Dumbbell,
  Target,
  BarChart3,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FitOrbit = () => {
  const features = [
    {
      icon: Library,
      title: "Exercise Library",
      description:
        "Browse a wide range of exercises with clear instructions and visuals for strength, hypertrophy, endurance, or mobility.",
      color: "from-[#58CBD1] to-[#3da9b0]",
    },
    {
      icon: Calendar,
      title: "Custom Routines",
      description:
        "Build and organize your own workout routines. Set reps, customize your weekly schedule to fit your personal plan.",
      color: "from-[#3da9b0] to-[#2d8a90]",
    },
    {
      icon: TrendingUp,
      title: "Track Reps & Sets",
      description:
        "Log each workout with detailed tracking. Stay consistent and see your improvement over time.",
      color: "from-[#58CBD1] to-[#3da9b0]",
    },
    {
      icon: Trophy,
      title: "Personal Bests",
      description:
        "Record and celebrate your personal records. Automatically track your highest achievements in each exercise.",
      color: "from-[#3da9b0] to-[#2d8a90]",
    },
    {
      icon: Calculator,
      title: "1RM Calculator",
      description:
        "Estimate your one-rep max based on your latest lifts. Train smart and measure progress accurately.",
      color: "from-[#58CBD1] to-[#3da9b0]",
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description:
        "Visualize your gains over time with detailed history and stats. See how far you've come and stay motivated.",
      color: "from-[#3da9b0] to-[#2d8a90]",
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Stay Organized",
      description: "Structured routines keep you focused",
    },
    {
      icon: BarChart3,
      title: "Track Everything",
      description: "Monitor strength levels and improvements",
    },
    {
      icon: Dumbbell,
      title: "Build Habits",
      description: "Crush your fitness goals consistently",
    },
  ];

  return (
    <div className="min-h-screen mt-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(88, 203, 209, 0.1), rgba(61, 169, 176, 0.1))",
          }}
        ></div>

        <div className="relative container max-w-7xl main-section-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block mb-6 px-4 py-2 bg-[#58CBD1]/10 border border-[#58CBD1]/20 rounded-full">
                <span className="text-[#58CBD1] font-semibold">
                  Your Ultimate Fitness Companion
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Build Routines.
                <br />
                Track Progress.
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #58CBD1, #3da9b0)",
                  }}
                >
                  Smash Goals.
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-10 max-w-2xl lg:mx-0 mx-auto">
                Take your training to the next level with our all-in-one fitness
                app. Plan, track, and achieve your fitness goals effectively.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center my-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.brilworks.fitorbit&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center space-x-3 bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:shadow-xl"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </a>
              </div>

              <p className="text-slate-400 mt-6">
                Available on Google Play Store
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#58CBD1] to-[#3da9b0] rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-2">
                <div className="flex items-center justify-center bg-gradient-to-br  from-[#58CBD1] to-[#3da9b0] rounded-2xl">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/fitnest-app-mockup-1759749065112.webp`}
                    alt="Kinderland App"
                    width={610}
                    height={430}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Mockups Section */}
      <section className="py-12 bg-slate-900/50 lg:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            <Image
              src="/images/v2/fitorbit-mockup-1.png"
              alt="FitOrbit Workout Tracking"
              width={250}
              height={500}
              className="h-96 w-auto rounded-2xl shadow-2xl snap-center flex-shrink-0"
              style={{ boxShadow: "0 25px 50px -12px rgba(88, 203, 209, 0.2)" }}
            />
            <Image
              src="/images/v2/fitorbit-mockup-2.png"
              alt="FitOrbit Exercise Library"
              width={250}
              height={500}
              className="h-96 w-auto rounded-2xl shadow-2xl snap-center flex-shrink-0"
              style={{ boxShadow: "0 25px 50px -12px rgba(88, 203, 209, 0.2)" }}
            />
            <Image
              src="/images/v2/fitorbit-mockup-3.png"
              alt="FitOrbit Progress Tracking"
              width={250}
              height={500}
              className="h-96 w-auto rounded-2xl shadow-2xl snap-center flex-shrink-0"
              style={{ boxShadow: "0 25px 50px -12px rgba(88, 203, 209, 0.2)" }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-slate-900/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Powerful features designed for both beginners and experienced
              lifters
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8 hover:border-[#58CBD1]/50 transition-all duration-300 group"
              >
                <div
                  className="p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${feature.color
                      .split(" ")[0]
                      .replace("from-", "")}, ${feature.color
                      .split(" ")[1]
                      .replace("to-", "")})`,
                  }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {benefits.map((benefit, index) => (
              <div key={index}>
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom right, #58CBD1, #3da9b0)",
                  }}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-12 md:p-16 text-center"
            style={{
              backgroundImage: "linear-gradient(to right, #58CBD1, #3da9b0)",
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Fitness?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are crushing their fitness goals with
              FitOrbit. No fluff, just results.
            </p>
            <div className="flex items-center justify-center mt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.brilworks.fitorbit&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-fit flex items-center justify-center space-x-3 bg-white text-slate-900 px-6 py-3 rounded-2xl hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-slate-900">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-12 md:p-16 text-center">
            <Dumbbell className="w-16 h-16 mx-auto mb-6 text-[#58CBD1]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Have Questions?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Get in touch with us to learn more about FitOrbit and how it can
              help you achieve your fitness goals.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center bg-gradient-to-r from-[#58CBD1] to-[#3da9b0] text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105 my-3"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FitOrbit;
