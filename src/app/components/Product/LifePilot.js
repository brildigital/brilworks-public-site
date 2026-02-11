"use client";
import {
  Check,
  ChevronRight,
  Brain,
  Shield,
  Sparkles,
  Star,
  Heart,
  MessageSquare,
  Image as ImageIcon,
  Zap,
  Lock,
  Smartphone,
  Calendar,
  Dumbbell,
  Home,
  Sparkles as SparklesIcon,
  History,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { scrollToSection } from "../lib/commonFunction";

const LifePilot = () => {
  return (
    <div>
      <section className="pt-16">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'linear-gradient(to right, #dbeafe, #e0e7ff)', color: '#1e40af' }}>
                <Sparkles className="w-4 h-4" />
                <span>AI Personal Assistant</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your AI-Powered
                <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #3078f5, #6366f1)' }}>
                  {" "}
                  Life Companion
                </span>
              </h1>
              <p className="text-xl text-gray-600 md:!mb-8 !mb-5 leading-relaxed">
                LifePilot AI is a personal assistant application designed to provide AI-based guidance across multiple everyday domains. Get intelligent assistance for productivity, fitness, wellness, home maintenance, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#download-app"
                  onClick={(e) => scrollToSection(e, "download-app")}
                  className="group text-white px-8 md:py-4 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  style={{ background: 'linear-gradient(to right, #3078f5, #6366f1)' }}
                >
                  Start Your Journey
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.brilworks.lifePilot"
                  target="_blank"
                  className="bg-white text-gray-900 px-8 md:py-4 py-3 rounded-full font-medium border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 text-center"
                >
                  Download on Play Store
                </Link>
              </div>
              <div className="mt-12 flex items-center md:space-x-10 space-x-5">
                <div>
                  <div className="text-3xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600">AI Assistants</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">AI</div>
                  <div className="text-sm text-gray-600">Powered</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Secure</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl transform rotate-3" style={{ background: 'linear-gradient(to bottom right, #bfdbfe, #c7d2fe)' }}></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-2">
                <div className="flex items-center justify-center rounded-2xl" style={{ background: 'linear-gradient(to bottom right, #3078f5, #6366f1)' }}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/lifepilot-1770726381502.webp`}
                    alt="LifePilot AI App"
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

      {/* Why Choose LifePilot Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: 'linear-gradient(to right, #dbeafe, #e0e7ff)', color: '#1e40af' }}>
              <Star className="w-4 h-4" />
              <span>Why Choose LifePilot AI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Intelligent Life Assistant
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get AI-powered guidance across multiple domains of your daily life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: SparklesIcon,
                title: "Specialized AI Assistants",
                description:
                  "Five dedicated assistants: Astrology Advisor, Fitness Coach, Mental Wellness, DIY Home Fix, and Scheduling & Productivity. Each focused on a specific area of your life.",
              },
              {
                icon: MessageSquare,
                title: "AI-Powered Conversations",
                description:
                  "Text-based conversations with context-aware responses. Support for text and image inputs with formatted, readable responses. Copy responses for easy sharing.",
              },
              {
                icon: ImageIcon,
                title: "Image Analysis",
                description:
                  "Upload images from camera or photo library. Receive AI-generated observations perfect for home maintenance guidance and general visual analysis.",
              },
              {
                icon: History,
                title: "Conversation History",
                description:
                  "All conversations saved automatically. Access previous chats anytime, continue earlier conversations, and organize chats by assistant category.",
              },
              {
                icon: Shield,
                title: "Privacy & Security",
                description:
                  "Firebase authentication, encrypted user data, account management controls. Designed to align with GDPR and CCPA requirements.",
              },
              {
                icon: Smartphone,
                title: "Cross-Platform Support",
                description:
                  "Available on Android, iOS, and web. Conversation data syncs across all supported devices for seamless access anywhere.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: 'linear-gradient(to bottom right, #3078f5, #6366f1)',
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

      {/* Specialized AI Assistants Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #eff6ff, #eef2ff)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Specialized AI Assistants
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Five dedicated assistants, each focused on a specific area of your life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: SparklesIcon,
                name: "Astrology Advisor",
                desc: "Astrological information and insights based on your input",
              },
              {
                icon: Dumbbell,
                name: "Fitness Coach",
                desc: "Workout routines, nutrition guidance, and fitness tips",
              },
              {
                icon: Heart,
                name: "Mental Wellness",
                desc: "Mindfulness practices, stress management, and emotional well-being",
              },
              {
                icon: Home,
                name: "DIY Home Fix",
                desc: "Step-by-step guidance for home repair and improvement tasks",
              },
              {
                icon: Calendar,
                name: "Scheduling & Productivity",
                desc: "Planning, goal setting, and task organization assistance",
              },
            ].map((assistant, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border"
                style={{ borderColor: '#3078f5' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ background: 'linear-gradient(to bottom right, #3078f5, #6366f1)' }}>
                  <assistant.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                  {assistant.name}
                </h3>
                <p className="text-gray-600 text-sm text-center">{assistant.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for intelligent life assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "💬",
                title: "AI Conversations",
                description: "Context-aware text-based conversations",
              },
              {
                icon: "🖼️",
                title: "Image Analysis",
                description: "Upload and analyze images with AI",
              },
              {
                icon: "📝",
                title: "Formatted Responses",
                description: "Readable, well-structured AI responses",
              },
              {
                icon: "📋",
                title: "Copy Responses",
                description: "Easy copy functionality for sharing",
              },
              {
                icon: "💾",
                title: "Auto-Save History",
                description: "All conversations saved automatically",
              },
              {
                icon: "🔍",
                title: "Organized Chats",
                description: "Organize by assistant category",
              },
              {
                icon: "🔐",
                title: "Secure Authentication",
                description: "Firebase-powered security",
              },
              {
                icon: "🌐",
                title: "Cross-Platform",
                description: "Android, iOS, and web support",
              },
              {
                icon: "⚙️",
                title: "Account Settings",
                description: "Profile and preference management",
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
      <section style={{ background: 'linear-gradient(to bottom right, #eff6ff, #eef2ff)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How LifePilot Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to get AI-powered assistance
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                title: "Choose Assistant",
                description: "Select from 5 specialized AI assistants",
              },
              {
                step: "2",
                title: "Ask Questions",
                description: "Type your query or upload an image",
              },
              {
                step: "3",
                title: "Get AI Response",
                description: "Receive intelligent, context-aware answers",
              },
              {
                step: "4",
                title: "Save & Organize",
                description: "Conversations auto-saved and organized",
              },
              {
                step: "5",
                title: "Access Anywhere",
                description: "Sync across all your devices",
              },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(to bottom right, #3078f5, #6366f1)' }}>
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 4 && (
                  <ChevronRight className="hidden md:block absolute top-8 -right-4 w-8 h-8" style={{ color: '#6366f1' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'linear-gradient(to right, #dbeafe, #e0e7ff)', color: '#1e40af' }}>
                <Star className="w-4 h-4" />
                <span>Perfect For</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Who Can Use LifePilot?
              </h2>
              <div className="space-y-4">
                {[
                  "Users seeking AI-assisted productivity guidance",
                  "People looking for fitness and wellness support",
                  "Homeowners needing DIY repair assistance",
                  "Anyone wanting astrological insights",
                  "Professionals managing schedules and goals",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#3078f5' }} />
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Design & Accessibility
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Clean Modern UI",
                  "Cross-Platform",
                  "Visual Distinction",
                  "Smooth Navigation",
                  "Export & Share",
                  "Data Sync",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2">
                      <Zap className="w-5 h-5" style={{ color: '#3078f5' }} />
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
        style={{ background: 'linear-gradient(to right, #3078f5, #6366f1)' }}
      >
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center text-white">
            <Brain className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your AI Journey Today! 🚀
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Download LifePilot AI and get intelligent assistance across productivity, fitness, wellness, home maintenance, and more. Your personal AI companion is ready to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.brilworks.lifePilot"
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
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>5+ Assistants</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>Cross-Platform</span>
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
              <Lock className="w-16 h-16 mx-auto mb-6" style={{ color: '#3078f5' }} />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Privacy & Security
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your data privacy and security are our top priorities
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Firebase Authentication",
                  description: "Secure authentication powered by Firebase",
                },
                {
                  title: "Encrypted Data",
                  description: "All user data is encrypted in transit",
                },
                {
                  title: "GDPR & CCPA Compliant",
                  description: "Designed to align with privacy regulations",
                },
                {
                  title: "Account Controls",
                  description: "Full account and data management controls",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl"
                  style={{ background: 'linear-gradient(to bottom right, #eff6ff, #eef2ff)' }}
                >
                  <Shield className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#3078f5' }} />
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

      {/* Final CTA Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #3078f5, #6366f1)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="bg-white rounded-3xl p-12 md:p-16 text-center">
            <Brain className="w-16 h-16 mx-auto mb-6" style={{ color: '#3078f5' }} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Get AI-powered guidance across productivity, fitness, wellness, home maintenance, and more. Download LifePilot AI today and experience the future of personal assistance!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Link
                href="https://play.google.com/store/apps/details?id=com.brilworks.lifePilot"
                target="_blank"
                className="inline-flex items-center text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300"
                style={{ background: 'linear-gradient(to right, #3078f5, #6366f1)' }}
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

export default LifePilot;
