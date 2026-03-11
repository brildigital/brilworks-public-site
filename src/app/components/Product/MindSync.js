"use client";
import {
  Check,
  ChevronRight,
  Heart,
  MessageCircle,
  Users,
  Brain,
  Zap,
  Sparkles,
  Shield,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { scrollToSection } from "../lib/commonFunction";

const MindSync = () => {
  return (
    <div>
      <section className="pt-16">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Matchmaking</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Connect Hearts,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  {" "}
                  Sync Minds
                </span>
              </h1>
              <p className="text-xl text-gray-600 md:!mb-8 !mb-5 leading-relaxed">
                Welcome to MindSync, the dating app that revolutionizes how you
                connect with others. Our advanced AI matches you with people who
                share your values, interests, and personality traits for truly
                meaningful relationships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#download-app"
                  onClick={(e) => scrollToSection(e, "download-app")}
                  className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 md:py-4 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  Start Your Journey
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="https://www.youtube.com/shorts/lXJ-9EghV2c"
                  target="_blank"
                  className="bg-white text-gray-900 px-8 md:py-4 py-3 rounded-full font-medium border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 text-center"
                >
                  See How It Works
                </Link>
              </div>
              <div className="mt-12 flex items-center md:space-x-10 space-x-5">
                <div>
                  <div className="text-3xl font-bold text-gray-900">2K+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Matches Made</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">92%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-pink-300 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-2">
                <Image
                  src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/mindsync-mockup-1759756960049.webp`}
                  alt="Mynd Sync App"
                  width={610}
                  height={430}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology Section */}
      <section>
        <div className="conatainer max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Brain className="w-4 h-4" />
              <span>Powered by Advanced AI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Intelligence Meets Romance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unlike traditional dating apps, MindSync uses cutting-edge AI to
              understand what truly matters to you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl border-2 border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Smart Matching
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI analyzes your values, interests, and personality traits
                to find compatible matches that go beyond superficial
                connections.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl border-2 border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Real-Time Learning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The more you use MindSync, the better it understands your
                preferences, continuously improving match quality.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl border-2 border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quality Over Quantity
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Receive fewer, but significantly more compatible matches. Every
                match is worth your time and attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need for Meaningful Connections
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Features designed to help you find love, friendship, or meaningful
              relationships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Compatibility Algorithms
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced algorithms assess personality traits, values, and
                lifestyle preferences to ensure genuine compatibility.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Verified Profiles
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Photo verification and profile authenticity checks ensure you're
                connecting with real people, not bots or fake accounts.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Smart Conversations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered conversation starters and icebreakers help you make
                meaningful first impressions and keep chats flowing.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Relationship Goals
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Whether seeking love, friendship, or companionship, find matches
                aligned with your relationship intentions.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Interest Matching
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Connect over shared hobbies, passions, and interests. Build
                relationships on common ground that matters.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Daily Picks
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Receive curated daily matches based on your preferences. Quality
                matches delivered to you every single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section>
        <div className="container max-w-7xl main-section-padding-bottom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How MindSync Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to finding meaningful connections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-lg border-2 border-purple-100">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Create Your Profile
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tell us about yourself, your interests, values, and what
                  you're looking for. Our AI analyzes your responses to
                  understand your unique personality.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                <ChevronRight className="w-8 h-8 text-purple-300" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-lg border-2 border-purple-100">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Get Smart Matches
                </h3>
                <p className="text-gray-600 leading-relaxed md:w-11/12 w-full">
                  Receive highly compatible matches based on deep personality
                  analysis. Browse profiles of people who truly align with you.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                <ChevronRight className="w-8 h-8 text-purple-300" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-lg border-2 border-purple-100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Start Connecting
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Match, chat, and build meaningful relationships. Use
                conversation starters and enjoy seamless communication with your
                matches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-purple-50 to-white">
        <div className="container main-section-padding max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real people, real connections, real love stories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-purple-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 !mb-6 leading-relaxed">
                "MindSync changed my life! The AI matching is incredible - my
                partner and I have so much in common. We've been together for 6
                months."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Sarah M.</div>
                  <div className="text-sm text-gray-600">New York, NY</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-purple-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 !mb-6 leading-relaxed">
                "Finally, a dating app that gets it right. Every match felt
                meaningful, and I found someone who shares my values and life
                goals. Best decision ever!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Michael T.</div>
                  <div className="text-sm text-gray-600">Los Angeles, CA</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-purple-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 !mb-6 leading-relaxed">
                "I was skeptical about dating apps, but MindSync proved me
                wrong. The quality of matches is outstanding, and I met my
                soulmate within weeks!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  E
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Emily R.</div>
                  <div className="text-sm text-gray-600">Chicago, IL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section
        id="download-app"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/mind-sync-mockup-1762509215838.webp`}
                alt="Mind Sync app"
                width="800"
                height="400"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Start Your Love Story Today
              </h2>
              <p className="md:text-xl text-lg text-gray-600 md:!mb-8 !mb-5 leading-relaxed">
                Download MindSync now and discover meaningful connections.
                Available on iOS and Android. Join millions finding love through
                intelligent matchmaking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.brilworks.mindsync"
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
              <div className="mt-8 space-y-3">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Free to download and create your profile
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Premium features available for enhanced matching
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Perfect Match is Waiting
          </h2>
          <p className="md:text-xl text-lg text-white/90 md:!mb-8 !mb-5">
            Join MindSync today and experience the future of dating.
            Intelligent, meaningful connections await.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us/"
              className="bg-white text-purple-600 px-8 md:py-4 py-3 rounded-full font-medium border-2 border-white hover:shadow-xl transition-all duration-300"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact-us/"
              className="bg-transparent text-white px-8 md:py-4 py-3 rounded-full font-medium border-2 border-white hover:bg-white/10 hover:shadow-xl transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MindSync;
