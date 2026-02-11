"use client";
import {
  Check,
  ChevronRight,
  Scan,
  Shield,
  Heart,
  Sparkles,
  Star,
  Brain,
  Target,
  Lock,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { scrollToSection } from "../lib/commonFunction";

const Scaneat = () => {
  return (
    <div>
      <section className="pt-16">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Smart Food Scanner</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Make Informed Food Choices
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
                  {" "}
                  Instantly
                </span>
              </h1>
              <p className="text-xl text-gray-600 md:!mb-8 !mb-5 leading-relaxed">
                Make informed food choices instantly! Scaneat helps you understand what's really in your food with instant health analysis, ingredient insights, and smarter recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#download-app"
                  onClick={(e) => scrollToSection(e, "download-app")}
                  className="group bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 md:py-4 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  Start Scanning Now
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.brilworks.scaneat"
                  target="_blank"
                  className="bg-white text-gray-900 px-8 md:py-4 py-3 rounded-full font-medium border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 text-center"
                >
                  Download on Play Store
                </Link>
              </div>
              <div className="mt-12 flex items-center md:space-x-10 space-x-5">
                <div>
                  <div className="text-3xl font-bold text-gray-900">0-100</div>
                  <div className="text-sm text-gray-600">Health Score</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">Millions</div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Privacy-First</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-green-300 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-2">
                <div className="flex items-center justify-center bg-gradient-to-br from-blue-600 to-green-500 rounded-2xl p-8">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/scaneat-1770726297202.webp`}
                    alt="Scaneat App Logo"
                    width={400}
                    height={160}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Scaneat Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              <span>Why Choose Scaneat</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Smart Food Companion
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Empowering you to make healthier food choices with instant insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Scan,
                title: "Instant Barcode Scanning",
                description:
                  "Scan any food product barcode using your camera or enter manually. Works offline for previously scanned products with fast and accurate recognition.",
              },
              {
                icon: Heart,
                title: "Comprehensive Health Analysis",
                description:
                  "Get instant health scores (0-100) with official Nutri-Score integration. Analysis based on nutrition, ingredients, additives & processing level.",
              },
              {
                icon: Shield,
                title: "Allergen & Additive Alerts",
                description:
                  "Instant allergen detection, complete additive explanations, gluten-free indicators, and vegan/vegetarian badges with clear visual health warnings.",
              },
              {
                icon: Target,
                title: "Personalized Recommendations",
                description:
                  "Health-based guidance for each product, suggestions for healthier alternatives, and tips to improve your daily food choices.",
              },
              {
                icon: Lock,
                title: "Privacy-First Approach",
                description:
                  "No sign-up required, no tracking unless you choose, secure encrypted connections, and your data stays completely private.",
              },
              {
                icon: Brain,
                title: "Educational Insights",
                description:
                  "Learn what you eat with detailed ingredient breakdowns, health concern levels, and educational insights about nutrition and additives.",
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
                      "linear-gradient(to bottom right, #2563eb, #22c55e)",
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
      <section className="bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to understand what's in your food
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🔍",
                title: "Instant Barcode Scanning",
                description: "Scan products with your camera or enter manually",
              },
              {
                icon: "💚",
                title: "Health Score (0-100)",
                description: "Instant health analysis for every product",
              },
              {
                icon: "📋",
                title: "Detailed Ingredient Breakdown",
                description: "Full ingredient list with clear explanations",
              },
              {
                icon: "⚠️",
                title: "Allergen Detection",
                description: "Instant alerts for allergens and additives",
              },
              {
                icon: "🌱",
                title: "Diet Compatibility",
                description: "Vegan, Vegetarian & Gluten-free indicators",
              },
              {
                icon: "🎯",
                title: "Smart Recommendations",
                description: "Healthier alternatives and tips",
              },
              {
                icon: "📊",
                title: "Nutri-Score Integration",
                description: "Official nutrition grading system",
              },
              {
                icon: "🔒",
                title: "No Sign-Up Required",
                description: "Start scanning instantly, privacy-first",
              },
              {
                icon: "🌍",
                title: "Millions of Products",
                description: "Powered by OpenFoodFacts database",
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
              How Scaneat Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to make smarter food choices
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                title: "Scan Barcode",
                description: "Scan a food product barcode",
              },
              {
                step: "2",
                title: "View Health Score",
                description: "View instant health score & analysis",
              },
              {
                step: "3",
                title: "Explore Details",
                description: "Explore ingredient & additive details",
              },
              {
                step: "4",
                title: "Check Compatibility",
                description: "Check allergen and diet compatibility",
              },
              {
                step: "5",
                title: "Get Recommendations",
                description: "Get smarter food recommendations",
              },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-green-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 4 && (
                  <ChevronRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-green-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Understand Your Food Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                <span>Understand Your Food</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Scaneat Analyzes
              </h2>
              <div className="space-y-4">
                {[
                  "Nutrition (sugar, salt, fat, fiber, protein)",
                  "Ingredient quality & health risks",
                  "Additive safety & side effects",
                  "Processing level (NOVA classification)",
                  "Dietary compatibility (vegan, vegetarian, gluten-free)",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Perfect For
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Health-conscious users",
                  "People with food allergies",
                  "Parents & families",
                  "Vegans & vegetarians",
                  "Anyone wanting healthier eating",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2">
                      <Heart className="w-5 h-5 text-green-500" />
                      <p className="text-gray-700 font-medium">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section
        id="download-app"
        className="bg-gradient-to-r from-blue-600 to-green-500"
      >
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center text-white">
            <Smartphone className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Download Scaneat Today! 🥗
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Start making healthier food choices instantly. Scaneat helps you understand what's really in your food with instant health analysis, ingredient insights, and smarter recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.brilworks.scaneat"
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
            <div className="mt-10 flex items-center justify-center space-x-8 flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>No Sign-Up Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>Privacy-First</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>Millions of Products</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Security Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <Lock className="w-16 h-16 mx-auto mb-6 text-blue-600" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Privacy & Security
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your data privacy is our top priority
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "No Account Required",
                  description: "Start scanning instantly without creating an account",
                },
                {
                  title: "No Tracking",
                  description: "We don't track you unless you explicitly choose to",
                },
                {
                  title: "Secure Connections",
                  description: "All connections are encrypted and secure",
                },
                {
                  title: "Your Data Stays Private",
                  description: "We don't collect or store your personal information",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
                >
                  <Shield className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="bg-gray-50">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Availability
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Smartphone className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Android
                </h3>
                <p className="text-gray-600">Available now on Google Play</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg opacity-60">
                <Smartphone className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">iOS</h3>
                <p className="text-gray-600">Coming soon</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Smartphone className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Web</h3>
                <p className="text-gray-600">scaneat.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-green-500">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="bg-white rounded-3xl p-12 md:p-16 text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-green-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Make Healthier Choices?
            </h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Download Scaneat today and start making informed food choices. Understand what's really in your food with instant health analysis, ingredient insights, and smarter recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Link
                href="https://play.google.com/store/apps/details?id=com.brilworks.scaneat"
                target="_blank"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300"
              >
                Download Now
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-all duration-300"
              >
                Get in Touch
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scaneat;
