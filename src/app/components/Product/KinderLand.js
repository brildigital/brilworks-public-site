"use client";
import {
  Check,
  ChevronRight,
  BookOpen,
  Shield,
  Gamepad2,
  Palette,
  Sparkles,
  Trophy,
  Star,
  Heart,
  Brain,
  Smile,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { scrollToSection } from "../lib/commonFunction";

const KinderLand = () => {
  return (
    <div>
      <section className="pt-16">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-100 to-green-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Learning Through Play</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Unlock a World of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-green-400">
                  {" "}
                  Fun & Learning
                </span>
              </h1>
              <p className="text-xl text-gray-600 md:!mb-8 !mb-5 leading-relaxed">
                Unlock a world of fun and learning with Kinderland! Designed for
                curious young minds, Kinderland combines education and
                entertainment to make every moment a learning adventure. Whether
                it's phonics, numbers, alphabets, or shapes, Kinderland turns
                everyday lessons into exciting games that your child will love!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#download-app"
                  onClick={(e) => scrollToSection(e, "download-app")}
                  className="group bg-gradient-to-r from-sky-400 to-green-400 text-white px-8 md:py-4 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  Start Learning Journey
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.brilworks.games.kinderland&hl=en"
                  target="_blank"
                  className="bg-white text-gray-900 px-8 md:py-4 py-3 rounded-full font-medium border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 text-center"
                >
                  Download on Play Store
                </Link>
              </div>
              <div className="mt-12 flex items-center md:space-x-10 space-x-5">
                <div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Safe & Ad-Free</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Learning Games</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    Ages 2-8
                  </div>
                  <div className="text-sm text-gray-600">Perfect For</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-300 to-green-300 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-2">
                <div className="flex items-center justify-center bg-gradient-to-br from-sky-400 to-green-400 rounded-2xl">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/kinderland-case-study-1759145795626.webp`}
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

      {/* Why Choose Kinderland Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-100 to-green-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              <span>Why Choose Kinderland</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Perfect Learning Companion
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Designed to make learning fun, safe, and engaging for every child
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Educational Games Galore",
                description:
                  "Dive into a variety of games that teach essential skills like reading, counting, matching, and problem-solving. Kinderland covers it all—phonics, alphabet tracing, number learning, shapes, colors, and more!",
              },
              {
                icon: Shield,
                title: "100% Safe & Ad-Free",
                description:
                  "Rest easy knowing your child is in a secure, ad-free environment with no in-app purchases. Kinderland is built for worry-free playtime.",
              },
              {
                icon: Gamepad2,
                title: "Interactive & Engaging",
                description:
                  "From memory games to puzzles, Kinderland's interactive challenges keep kids engaged while boosting cognitive and motor skills. Learning has never been so much fun!",
              },
              {
                icon: Palette,
                title: "Bright & Colorful Design",
                description:
                  "Eye-catching visuals and lively music make learning enjoyable and keep your child coming back for more.",
              },
              {
                icon: Sparkles,
                title: "Easy Navigation for Kids",
                description:
                  "Kinderland's intuitive, kid-friendly interface empowers children to explore and learn independently, fostering confidence and self-reliance.",
              },
              {
                icon: Trophy,
                title: "Positive Reinforcement",
                description:
                  "Celebrate your child's success with fun rewards, cheerful animations, and encouraging feedback that make learning feel like play!",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom right, #38bdf8, #4ade80)",
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
      <section className="bg-gradient-to-br from-sky-50 to-green-50">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything your child needs for a comprehensive learning
              experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📚",
                title: "Fun Phonics & Alphabet Games",
                description: "Perfect for early reading skills",
              },
              {
                icon: "🔢",
                title: "Number Learning",
                description: "Interactive games to make counting fun",
              },
              {
                icon: "🎨",
                title: "Color & Shape Recognition",
                description: "Boost visual learning with engaging activities",
              },
              {
                icon: "🧩",
                title: "Memory & Puzzle Games",
                description: "Sharpen problem-solving skills",
              },
              {
                icon: "👶",
                title: "Kid-Friendly Interface",
                description: "Easy for little ones to navigate",
              },
              {
                icon: "🎯",
                title: "Progressive Learning",
                description: "Adapts to your child's skill level",
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

      {/* How It Works Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Kinderland Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to start your child's learning adventure
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Download & Install",
                description: "Get Kinderland from Google Play Store",
              },
              {
                step: "2",
                title: "Choose Activities",
                description: "Browse fun educational games and lessons",
              },
              {
                step: "3",
                title: "Learn & Play",
                description: "Watch your child enjoy learning through play",
              },
              {
                step: "4",
                title: "Track Progress",
                description: "Celebrate achievements and growth",
              },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 to-green-400 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <ChevronRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-green-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section
        id="download-app"
        className="bg-gradient-to-r from-sky-400 to-green-400"
      >
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center text-white">
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Kinderland Learning Adventure! 🚀
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Give your child the gift of learning through play. Kinderland is
              more than just a game—it's a joyful journey where education meets
              excitement. Download Kinderland today and watch your child thrive
              in a world of fun and learning! 🌈🎈
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.brilworks.games.kinderland&hl=en"
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
            <div className="mt-10 flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>Free to Download</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>No Ads</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>Safe for Kids</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Parents Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from parents who love Kinderland
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Jennifer Smith",
                role: "Parent of 5-year-old",
                quote:
                  "Kinderland has been a game-changer! My daughter loves the colorful games and I love that she's learning without even realizing it. The ad-free environment gives me peace of mind.",
                rating: 5,
              },
              {
                name: "David Martinez",
                role: "Father of twins",
                quote:
                  "Both my kids are hooked on Kinderland! The variety of educational games keeps them engaged, and I've noticed significant improvement in their alphabet and number recognition.",
                rating: 5,
              },
              {
                name: "Priya Patel",
                role: "Preschool teacher & mom",
                quote:
                  "As an educator, I appreciate how well-designed Kinderland is. The progressive learning approach and positive reinforcement are exactly what young learners need. Highly recommend!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-sky-400 text-sky-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-50">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="bg-gradient-to-br from-sky-400 to-green-400 rounded-3xl p-12 md:p-16 text-center text-white">
            <Brain className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start the Learning Adventure?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of happy parents and kids who are making learning
              fun with Kinderland. Download now and watch your child discover
              the joy of learning!
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center mt-8 bg-white text-sky-600 px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300"
            >
              Get in Touch
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KinderLand;
