"use client";
import {
  Calendar,
  Check,
  ChevronRight,
  ClipboardList,
  Heart,
  MessageCircle,
  Smartphone,
  Users,
  Video,
  Activity,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { scrollToSection } from "../lib/commonFunction";

const Exora = () => {
  const exoraFeatures = [
    {
      icon: ClipboardList,
      title: "Smart Questionnaires",
      desc: "Interactive health assessments to track symptoms, pain levels, and recovery milestones with intelligent follow-up questions.",
    },
    {
      icon: Video,
      title: "Exercise Library",
      desc: "Comprehensive video-guided exercises tailored to each patient's recovery plan with progress tracking and reminders.",
    },
    {
      icon: MessageCircle,
      title: "Real-Time Chat",
      desc: "Secure messaging between doctors and patients for quick questions, updates, and continuous support throughout recovery.",
    },
    {
      icon: Activity,
      title: "Progress Tracking",
      desc: "Visual dashboards showing recovery progress, completed exercises, and health metrics over time for both patients and doctors.",
    },
    {
      icon: Calendar,
      title: "Follow-Up Management",
      desc: "Automated reminders for appointments, medication, exercises, and check-ins to ensure consistent care.",
    },
    {
      icon: Users,
      title: "Patient Management",
      desc: "Centralized dashboard for doctors to manage multiple patients, view analytics, and optimize care plans efficiently.",
    },
  ];
  return (
    <div>
      <section className="container max-w-7xl main-section-padding mx-auto mt-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
              <span>Stay in Sync, Stay Healthy</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Connected Care for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
                {" "}
                Better Recovery
              </span>
            </h1>
            <p className="text-xl text-gray-600 md:!mb-8 !mb-5 leading-relaxed">
              A two-sided healthcare platform connecting doctors and patients.
              Manage recovery, track progress, share exercises, and communicate
              in real-time for optimal post-surgery care.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium border-2 border-gray-200 hover:border-green-300 transition-all duration-300">
                Watch Demo
              </button>
            </div> */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#download-app"
                onClick={(e) => scrollToSection(e, "download-app")}
                className="group bg-gradient-to-r from-green-600 to-green-700 text-white px-8 md:py-4 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="https://www.youtube.com/shorts/OzHKM4TJ43s"
                target="_blank"
                className="bg-white text-gray-900 px-8 md:py-4 py-3 rounded-full font-medium border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 text-center"
              >
                Watch Demo
              </Link>
            </div>
            <div className="mt-12 flex items-center md:space-x-8 space-x-5">
              <div>
                <div className="text-3xl font-bold text-gray-900">5K+</div>
                <div className="text-sm text-gray-600">Active Patients</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">
                  Healthcare Providers
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Recovery Success</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-400 rounded-3xl transform rotate-3 opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-2">
              <Image
                src="https://d11qzsb0ksp6iz.cloudfront.net/assets/exora-banner-1759756411673.webp"
                alt="Exora App Interface"
                width={610}
                height={430}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="bg-gradient-to-b from-white to-green-50">
        <div className="conatiner max-w-7xl mx-auto main-section-padding text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building a Connected Healthcare Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto !mb-16">
            We designed and built a two-sided healthcare platform that helps
            doctors manage patients, assign follow-ups, share exercises, and
            stay in touch through real-time chat.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-green-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                For Doctors
              </h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">
                    Manage patient cases and recovery plans
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">
                    Assign custom exercises and follow-ups
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">
                    Real-time chat with patients
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">
                    Track patient progress and compliance
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-green-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                For Patients
              </h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">
                    Track recovery progress daily
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">
                    Complete health questionnaires easily
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">
                    Access prescribed exercises with videos
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">
                    Stay connected with your doctor 24/7
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need for Recovery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools designed to streamline post-surgery care and
              improve patient outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exoraFeatures.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border-2 border-green-100 hover:border-green-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="bg-gradient-to-b from-green-50 to-white"
      >
        <div className="container max-w-7xl main-section-padding-top mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Exora Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, intuitive workflow designed for seamless healthcare
              delivery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-green-100">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Doctor Creates Plan
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Healthcare providers create personalized recovery plans with
                  exercises, questionnaires, and follow-up schedules tailored to
                  each patient's needs.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                <ChevronRight className="w-8 h-8 text-green-300" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-green-100">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Patient Engages
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Patients receive their care plan, complete daily exercises,
                  fill out health questionnaires, and track their recovery
                  progress in real-time.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                <ChevronRight className="w-8 h-8 text-green-300" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-green-100">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Monitor & Adjust
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Doctors monitor patient progress, receive alerts for concerns,
                communicate via chat, and adjust treatment plans as needed for
                optimal outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Exora?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Transform post-surgery care with technology that improves
                outcomes and enhances patient experience.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Improved Recovery Outcomes",
                    desc: "Data-driven insights help doctors make better decisions for faster patient recovery",
                  },
                  {
                    title: "Enhanced Patient Engagement",
                    desc: "Interactive tools keep patients motivated and committed to their recovery plan",
                  },
                  {
                    title: "Time Efficiency",
                    desc: "Reduce administrative burden and focus more time on patient care",
                  },
                  {
                    title: "Better Communication",
                    desc: "Real-time messaging eliminates gaps in care and builds trust",
                  },
                  {
                    title: "Compliance Tracking",
                    desc: "Monitor patient adherence to treatment plans and intervene when needed",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
                <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
                <div className="text-gray-600">Patient Satisfaction</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl mt-8">
                <div className="text-4xl font-bold text-gray-900 mb-2">40%</div>
                <div className="text-gray-600">Faster Recovery</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
                <div className="text-4xl font-bold text-gray-900 mb-2">80%</div>
                <div className="text-gray-600">Time Saved</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl mt-8">
                <div className="text-4xl font-bold text-gray-900 mb-2">99%</div>
                <div className="text-gray-600">Care Continuity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="download-app">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="https://d11qzsb0ksp6iz.cloudfront.net/assets/exora-mockup-1-1762506623761.webp"
                alt="Exora app"
                width="800"
                height="400"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Download Exora Today
              </h2>
              <p className="text-xl text-gray-600 md:!mb-8 !mb-5 leading-relaxed">
                Get the Exora app on your mobile device and experience seamless
                post-surgery care. Available for both healthcare providers and
                patients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.brilworksdigital.exora&hl=en_IN"
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
                <a
                  href="https://testflight.apple.com/join/fG7FBgYQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center space-x-3 bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:shadow-xl"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </a>
              </div>
              <div className="mt-8 flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  Free for patients. Healthcare providers can start with a
                  30-day trial. HIPAA compliant and secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Post-Surgery Care?
          </h2>
          <p className="md:text-xl text-lg text-white/90 md:!mb-8 !mb-5">
            Join hundreds of healthcare providers and thousands of patients
            using Exora for better recovery outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us/"
              className="bg-white text-green-600 px-8 md:py-4 py-3 rounded-full font-medium border-2 border-white hover:shadow-xl transition-all duration-300"
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

export default Exora;
