"use client";
import {
  Heart,
  Brain,
  Baby,
  BookOpen,
  Zap,
  Lock,
  CheckCircle,
  Lightbulb,
  Music,
  TrendingUp,
  Shield,
  Eye,
  ChevronRight,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { scrollToSection } from "../lib/commonFunction";

const Elara = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{
                  background: "linear-gradient(to right, #fde8f1, #f9d6ea)",
                  color: "#8f2d56",
                }}
              >
                <Heart className="w-4 h-4" />
                <span>Your Pregnancy Companion</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Companion Through Every Stage of
                <span
                  className="block text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #c13b77, #f472b6)",
                  }}
                >
                  {" "}
                  Motherhood
                </span>
              </h1>
              <p className="text-xl text-gray-600 md:!mb-8 !mb-5 leading-relaxed">
                Elara is your personalized maternal wellness companion.
                Expert-curated content, tracking tools, and mindful practices to
                nurture both you and your baby.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#download-app"
                  onClick={(e) => scrollToSection(e, "download-app")}
                  className="group text-white px-8 md:py-4 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(to right, #c13b77, #f472b6)",
                  }}
                >
                  Start Your Journey
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://play.google.com/store/apps/details?id=com.brilworksdigital.Elara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 px-8 md:py-4 py-3 rounded-full font-medium border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 text-center"
                >
                  Download Now
                </a>
              </div>
              <div className="mt-12 flex items-center md:space-x-10 space-x-5">
                <div>
                  <div className="text-3xl font-bold text-gray-900">40+</div>
                  <div className="text-sm text-gray-600">Yoga Sessions</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Privacy First</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">Free</div>
                  <div className="text-sm text-gray-600">Forever</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl transform rotate-3"
                style={{
                  background:
                    "linear-gradient(to bottom right, #fde8f1, #f7d6e6)",
                }}
              ></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-2">
                <div
                  className="flex items-center justify-center rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #f472b6 0%, #8b5a40 50%, #6b4f42 100%)",
                  }}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/Gemini_Generated_Image_c54aa5c54aa5c54a_1-1773999215829.webp`}
                    alt="Elara App"
                    width={610}
                    height={430}
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Elara Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{
                background: "linear-gradient(to right, #fde8f1, #f9d6ea)",
                color: "#8f2d56",
              }}
            >
              <Star className="w-4 h-4" />
              <span>Why Choose Elara</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Maternal Wellness
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for a healthy, happy pregnancy journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Baby,
                title: "Week-by-Week Tracking",
                description:
                  "Track your baby's growth with beautiful visualizations, size comparisons, and developmental milestones at every stage.",
              },
              {
                icon: Music,
                title: "Prenatal Yoga & Meditation",
                description:
                  "40+ expert-curated yoga sequences and guided meditations designed safely for pregnancy and bonding.",
              },
              {
                icon: Brain,
                title: "Mood & Wellness Tracking",
                description:
                  "Daily mood check-ins and private journaling to monitor your emotional and mental well-being.",
              },
              {
                icon: Lightbulb,
                title: "Personalized Recommendations",
                description:
                  "Smart algorithm suggests the perfect yoga session or meditation based on your pregnancy stage.",
              },
              {
                icon: TrendingUp,
                title: "Progress Tracking",
                description:
                  "Visual representations of your pregnancy journey with beautiful milestones and insights.",
              },
              {
                icon: Heart,
                title: "Holistic Wellness",
                description:
                  "Combined physical, mental, and emotional support all in one beautiful, private app.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background:
                      "linear-gradient(135deg, #c13b77 0%, #f472b6 100%)",
                  }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section
        style={{
          background: "linear-gradient(to bottom right, #fff1f6, #fff0f6)",
        }}
      >
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything designed for your pregnancy and wellness journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📊",
                title: "Baby Growth Tracker",
                description:
                  "Week-by-week development tracking with size comparisons",
              },
              {
                icon: "🧘‍♀️",
                title: "40+ Yoga Sequences",
                description:
                  "Trimester-specific prenatal yoga for safe practice",
              },
              {
                icon: "🎧",
                title: "Guided Meditations",
                description: "Calming sessions for sleep, anxiety, and bonding",
              },
              {
                icon: "📝",
                title: "Wellness Journal",
                description: "Private daily journaling and mood tracking",
              },
              {
                icon: "✨",
                title: "Smart Recommendations",
                description:
                  "Personalized sessions based on your pregnancy stage",
              },
              {
                icon: "📍",
                title: "Milestone Tracking",
                description:
                  "Track your pregnancy journey with beautiful visuals",
              },
              {
                icon: "🎯",
                title: "Streak Tracking",
                description: "Build consistent self-care habits week by week",
              },
              {
                icon: "❤️",
                title: "Gratitude Prompts",
                description: "Reflection exercises to enhance your wellness",
              },
              {
                icon: "🔒",
                title: "100% Private",
                description: "Your health data never shared with third parties",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pregnancy Tracking Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{
                background: "linear-gradient(to right, #fde8f1, #f9d6ea)",
                color: "#8f2d56",
              }}
            >
              <Baby className="w-4 h-4" />
              <span>PREGNANCY TRACKING</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Track Your Baby's
              <span
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #c13b77, #f472b6)",
                }}
              >
                Beautiful Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch your baby grow week by week with automatic calculations,
              beautiful visualizations, and important developmental milestones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Week Calculator",
                desc: "Automatic pregnancy week tracking",
              },
              {
                name: "Size Comparisons",
                desc: "Fun baby size comparisons each week",
              },
              {
                name: "Dev. Milestones",
                desc: "Important baby milestones tracked",
              },
              {
                name: "Trimester Guides",
                desc: "Comprehensive stage-specific guides",
              },
              {
                name: "What to Expect",
                desc: "Prepare for each pregnancy stage",
              },
              {
                name: "Baby Facts",
                desc: "Fascinating baby development facts",
              },
              {
                name: "Visual Timeline",
                desc: "Beautiful pregnancy journey timeline",
              },
              { name: "Health Tips", desc: "Week-by-week wellness guidance" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border"
                style={{ borderColor: "#c13b77" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto"
                  style={{
                    background:
                      "linear-gradient(135deg, #c13b77 0%, #f472b6 100%)",
                  }}
                >
                  <Baby className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yoga & Meditation Section */}
      <section
        style={{
          background: "linear-gradient(to bottom right, #fff1f6, #fff0f6)",
        }}
      >
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{
                background: "linear-gradient(to right, #fde8f1, #f9d6ea)",
                color: "#8f2d56",
              }}
            >
              <Music className="w-4 h-4" />
              <span>WELLNESS PRACTICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Prenatal Yoga &
              <span
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #c13b77, #f472b6)",
                }}
              >
                {" "}
                Meditation
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              40+ expert-curated yoga sequences and guided meditations designed
              specifically for pregnancy. Strengthen your body, calm your mind,
              and bond with your baby.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #c13b77 0%, #f472b6 100%)",
                  }}
                >
                  <Music className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    40+ Yoga Sequences
                  </h3>
                  <p className="text-gray-600">
                    Extensive library of prenatal yoga videos filtered by
                    trimester and focus area
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #c13b77 0%, #f472b6 100%)",
                  }}
                >
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Guided Meditations
                  </h3>
                  <p className="text-gray-600">
                    Calming audio meditations for relaxation, sleep, anxiety
                    relief, and bonding with baby
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #c13b77 0%, #f472b6 100%)",
                  }}
                >
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Smart Recommendations
                  </h3>
                  <p className="text-gray-600">
                    Daily personalized suggestions based on your pregnancy week
                    and wellness needs
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #c13b77 0%, #f472b6 100%)",
                  }}
                >
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Progress Tracking
                  </h3>
                  <p className="text-gray-600">
                    Bookmark your favorite sessions and track your wellness
                    journey with insights
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl p-6">
                <div className="space-y-4">
                  <div
                    className="rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, #f9d6ea 0%, #f7d0e8 100%)",
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(135deg, #c13b77 0%, #f472b6 100%)",
                        }}
                      >
                        <Music className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          Today's Session
                        </div>
                        <div className="text-sm text-gray-600">
                          Gentle Flow Yoga
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
                      <div className="font-semibold text-gray-900">
                        12 minutes
                      </div>
                      <div className="text-sm text-gray-600">
                        Perfect for your pregnancy stage
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Sessions This Week
                    </h4>
                    <div className="space-y-3">
                      {[
                        "Relaxing Meditation",
                        "Sleep Guidance",
                        "Labor Prep Yoga",
                      ].map((session, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-2 rounded-lg"
                          style={{
                            background:
                              "linear-gradient(to right, #fde8f1, #f9d6ea)",
                          }}
                        >
                          <Music
                            className="w-5 h-5 flex-shrink-0"
                            style={{ color: "#c13b77" }}
                          />
                          <span className="text-sm font-medium text-gray-700">
                            {session}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Tracking Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{
                background: "linear-gradient(to right, #fde8f1, #f9d6ea)",
                color: "#8f2d56",
              }}
            >
              <Brain className="w-4 h-4" />
              <span>WELLNESS JOURNAL</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mood & Wellness
              <span
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #c13b77, #f472b6)",
                }}
              >
                {" "}
                Tracking
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Monitor your emotional well-being with daily mood check-ins,
              private journaling, and meaningful reflection exercises tailored
              for expectant mothers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #c13b77 0%, #f472b6 100%)",
                  }}
                >
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Daily Mood Check-ins
                  </h3>
                  <p className="text-gray-600">
                    Simple mood tracking with emoji selections to monitor your
                    emotional well-being
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #c13b77 0%, #f472b6 100%)",
                  }}
                >
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Private Journal
                  </h3>
                  <p className="text-gray-600">
                    Safe space for daily reflections, thoughts, and memories
                    during your pregnancy
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #c13b77 0%, #f472b6 100%)",
                  }}
                >
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Streak Tracking
                  </h3>
                  <p className="text-gray-600">
                    Build consistent self-care habits with weekly streak
                    tracking and insights
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #c13b77 0%, #f472b6 100%)",
                  }}
                >
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Gratitude Prompts
                  </h3>
                  <p className="text-gray-600">
                    Reflection exercises and gratitude prompts to enhance your
                    wellness journey
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl p-6">
                <div className="space-y-4">
                  <div
                    className="rounded-2xl p-6 shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, #f9d6ea 0%, #f7d0e8 100%)",
                    }}
                  >
                    <div className="font-bold text-gray-900 mb-4 text-center">
                      How are you feeling today?
                    </div>
                    <div className="flex gap-2 justify-between">
                      {["😊", "😌", "😐", "😔"].map((emoji, i) => (
                        <button
                          key={i}
                          className="text-3xl p-3 rounded-lg bg-white hover:shadow-md transition-all"
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      This Week
                    </h4>
                    <div className="space-y-3">
                      {[
                        "Monday: Happy",
                        "Tuesday: Grateful",
                        "Wednesday: Peaceful",
                      ].map((entry, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 rounded-lg"
                          style={{
                            background:
                              "linear-gradient(to right, #fde8f1, #f9d6ea)",
                          }}
                        >
                          <Heart
                            className="w-5 h-5 flex-shrink-0"
                            style={{ color: "#c13b77" }}
                          />
                          <span className="text-sm text-gray-700">{entry}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Journal Entry
                    </h4>
                    <div
                      className="rounded-lg p-4"
                      style={{
                        background:
                          "linear-gradient(to right, #fde8f1, #f9d6ea)",
                      }}
                    >
                      <p className="text-sm text-gray-700 italic">
                        "Feeling grateful today. Baby has been very active and
                        I'm enjoying this moment..."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is Elara For Section */}
      <section
        style={{
          background: "linear-gradient(to bottom right,#fff1f6, #fff0f6)",
        }}
      >
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Who Is Elara For?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Perfect for every stage of your motherhood journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "First-Time Mothers",
                desc: "Guidance and support for your first pregnancy",
              },
              {
                name: "Expecting Mothers",
                desc: "All stages of pregnancy with expert guidance",
              },
              {
                name: "Wellness Focused",
                desc: "Those wanting holistic prenatal care",
              },
              {
                name: "New Mothers",
                desc: "Postnatal wellness and recovery support",
              },
              {
                name: "Fitness Minded",
                desc: "Safe pregnancy exercise routines",
              },
              {
                name: "Mindfulness Seekers",
                desc: "Meditation and mental wellness",
              },
              {
                name: "Busy Moms",
                desc: "Quick 5-30 minute wellness sessions",
              },
              {
                name: "Health Conscious",
                desc: "Evidence-based pregnancy guidance",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border"
                style={{ borderColor: "#c13b77" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto"
                  style={{
                    background:
                      "linear-gradient(135deg, #c13b77 0%, #f472b6 100%)",
                  }}
                >
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section
      >
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 border px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                borderColor: "#c13b77",
                color: "#c13b77",
                background: "rgba(193, 59, 119, 0.08)",
              }}
            >
              <Lock className="w-4 h-4" />
              <span>Privacy & Security</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold  mb-6">
              Your Maternal Health Data is Sacred
            </h2>

            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              We take data security seriously. Your sensitive health information
              is protected with industry-leading encryption and never shared
              with third parties.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div
              className="bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              style={{ borderColor: "rgba(193, 59, 119, 0.25)" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background:
                    "linear-gradient(135deg, #c13b77 0%, #f472b6 100%)",
                }}
              >
                <Shield className="w-7 h-7 " />
              </div>
              <h3 className="text-xl font-bold  mb-3">
                Encrypted Data
              </h3>
              <p className="text-gray-800">
                All data is encrypted in transit and at rest using
                industry-standard encryption protocols.
              </p>
            </div>

            <div
              className="bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              style={{ borderColor: "rgba(193, 59, 119, 0.25)" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background:
                    "linear-gradient(135deg, #c13b77 0%, #f472b6 100%)",
                }}
              >
                <Eye className="w-7 h-7 " />
              </div>
              <h3 className="text-xl font-bold  mb-3">
                Full Control
              </h3>
              <p className="text-gray-800">
                You have complete control over your data and can delete your
                account anytime with all data removal.
              </p>
            </div>

            <div
              className="bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              style={{ borderColor: "rgba(193, 59, 119, 0.25)" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background:
                    "linear-gradient(135deg, #c13b77 0%, #f472b6 100%)",
                }}
              >
                <Lock className="w-7 h-7 " />
              </div>
              <h3 className="text-xl font-bold  mb-3">Compliance</h3>
              <p className="text-gray-800">
                Fully compliant with GDPR, PDPL, and major international privacy
                standards.
              </p>
            </div>
          </div>

          <div
            className="bg-white/5 backdrop-blur-sm border rounded-2xl p-8 lg:p-12"
            style={{ borderColor: "rgba(193, 59, 119, 0.25)" }}
          >
            <h3 className="text-2xl font-bold  mb-8 text-center">
              Security Features
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "End-to-end encrypted data transmission",
                "GDPR and PDPL compliant",
                "Secure Firebase authentication",
                "Complete control over your data",
                "No data sharing with third parties",
                "Data stored securely at rest",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #c13b77 0%, #f472b6 100%)",
                    }}
                  >
                    <CheckCircle className="w-4 h-4 " />
                  </div>
                  <span className="text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section
        id="download-app"
        style={{ background: "linear-gradient(to right, #c13b77, #f472b6)" }}
      >
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center text-white">
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your Mindful Motherhood Journey Today
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Elara is completely free with no hidden charges. Every mother
              deserves access to quality wellness resources during this special
              time. Your journey to mindful motherhood starts here. 💕
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.brilworksdigital.Elara"
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
              {/* App Store removed - only Google Play link is provided */}
            </div>
            <div className="mt-10 flex items-center justify-center space-x-8 flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>40+ Yoga Sessions</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>100% Free & Private</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Expert-Curated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Elara;
