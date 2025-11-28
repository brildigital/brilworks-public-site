"use client";
import {
  Bell,
  Check,
  ChevronRight,
  Lock,
  MessageSquare,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { scrollToSection } from "../lib/commonFunction";

const EnclaveConnect = () => {
  const enclaveFeatures = [
    {
      icon: Lock,
      title: "Visitor Management",
      description:
        "Pre-approve visitors, generate digital passes, and maintain complete security logs with real-time notifications.",
    },
    {
      icon: Bell,
      title: "Community Updates",
      description:
        "Stay informed with instant notifications about events, maintenance schedules, and important announcements.",
    },
    {
      icon: Shield,
      title: "Security Management",
      description:
        "Enhanced security with digital gate passes, incident reporting, and 24/7 surveillance integration.",
    },
    {
      icon: Users,
      title: "Community Directory",
      description:
        "Connect with neighbors, find local services, and build a stronger community network.",
    },
    {
      icon: MessageSquare,
      title: "Complaint Management",
      description:
        "Submit and track maintenance requests with real-time status updates and efficient resolution workflows.",
    },
    {
      icon: Check,
      title: "Facility Booking",
      description:
        "Reserve amenities like clubhouses, sports courts, and community halls with easy scheduling.",
    },
  ];
  return (
    <div>
      <section className="">
        <div className="container max-w-7xl main-section-padding mx-auto mt-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-rose-50 text-rose-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-rose-600 rounded-full animate-pulse"></span>
                <span>Your Community, Connected</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Simplify Life in Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
                  {" "}
                  Gated Society
                </span>
              </h1>
              <p className="text-xl text-gray-600 md:!mb-8 !mb-5 leading-relaxed">
                Your all-in-one community management app designed to simplify
                and secure life in gated societies. From visitor management to
                community updates, experience seamless and secure digital
                living.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#download-app"
                  onClick={(e) => scrollToSection(e, "download-app")}
                  className="group bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 md:py-4 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Free
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="https://youtu.be/g5gnqXlJ7Hs"
                  target="_blank"
                  className="bg-white text-gray-900 px-8 md:py-4 py-3 rounded-full font-medium border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 text-center"
                >
                  Watch Demo
                </Link>
              </div>
              <div className="mt-12 flex items-center md:space-x-8 space-x-5">
                <div>
                  <div className="text-3xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Communities</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">4.9★</div>
                  <div className="text-sm text-gray-600">User Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-pink-200 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-2">
                <Image
                  src="https://d11qzsb0ksp6iz.cloudfront.net/assets/enclave-connect-mockup-1759756976416.webp"
                  alt="Enclave Connect App"
                  width={610}
                  height={430}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="bg-gradient-to-br from-rose-50 to-pink-50"
      >
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need in One Place
            </h2>
            <p className="md:text-xl text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features designed for residents, security personnel, and
              management committees
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-5">
            {enclaveFeatures.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-100 hover:border-rose-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section id="benefits" className="">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Enclave Connect?
              </h2>
              <p className="md:text-xl text-lg text-gray-600 md:!mb-8 !mb-5">
                Experience the difference with a platform built specifically for
                modern gated communities.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Enhanced Security",
                    desc: "Multi-layer security with encrypted data and secure visitor verification",
                  },
                  {
                    title: "Easy to Use",
                    desc: "Intuitive interface designed for all age groups and technical abilities",
                  },
                  {
                    title: "Real-time Updates",
                    desc: "Instant notifications keep everyone informed and connected",
                  },
                  {
                    title: "Cost Effective",
                    desc: "Reduce administrative costs while improving service quality",
                  },
                  {
                    title: "24/7 Support",
                    desc: "Dedicated customer support team available whenever you need help",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mt-1">
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

            <div className="grid grid-cols-2 md:gap-6 gap-4">
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  99.9%
                </div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl mt-8">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  24/7
                </div>
                <div className="text-gray-600">System Access</div>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl">
                <div className="text-4xl font-bold text-gray-900 mb-2">1M+</div>
                <div className="text-gray-600">Visitors Managed</div>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl mt-8">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  50K+
                </div>
                <div className="text-gray-600">Requests Resolved</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="download-app">
        <div className="container max-w-7xl main-section-padding-bottom mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <Image
                src="https://d11qzsb0ksp6iz.cloudfront.net/assets/enclave-mockup-1762509498972.webp"
                alt="Enclave app"
                width="800"
                height="400"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Download the App Today
              </h2>
              <p className="md:text-xl text-lg text-gray-600 md:!mb-8 !mb-5 leading-relaxed">
                Get Enclave Connect on your mobile device and stay connected
                with your community anytime, anywhere. Available on iOS and
                Android.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.brilworksdigital.enclaveconnect"
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
                  href="https://apps.apple.com/in/app/enclave-connect/id6753797049"
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
              <div className="md:!mt-8 !mt-5 flex items-start space-x-3">
                <Check className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  Free to download with premium features available. No credit
                  card required to get started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-rose-500 to-pink-600">
        <div className="container max-w-7xl main-section-padding mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Ready to Transform Your Community?
          </h2>
          <p className="md:text-xl text-lg text-white/90 md:!mb-8 !mb-5">
            Join thousands of communities already using Enclave Connect to
            simplify their daily operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us/"
              className="bg-white text-rose-600 px-8 md:py-4 py-3 rounded-full font-medium border-2 border-white hover:shadow-xl transition-all duration-300"
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

export default EnclaveConnect;
