"use client";
import {
  Shield,
  MapPin,
  Users,
  Lock,
  Bell,
  Zap,
  AlertCircle,
  UserCheck,
  Camera,
  ToggleLeft,
  Map,
  History,
  Eye,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PinkSignal = () => {
  const features = [
    {
      icon: Bell,
      title: "Instant SOS Alerts",
      description:
        "Send emergency alerts to trusted contacts with your live location in under 5 seconds.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description:
        "Share your live location with family members so they always know where you are.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Trusted Contacts",
      description:
        "Add and manage your circle of trusted family members and friends.",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description:
        "Complete control over your data with GDPR-compliant encryption and security.",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: Shield,
      title: "Location History",
      description:
        "Review past routes and activity logs for added safety and accountability.",
      color: "from-rose-500 to-red-500",
    },
    {
      icon: Zap,
      title: "Battery Optimized",
      description:
        "Advanced tracking technology that uses minimal battery power.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const daughterFeatures = [
    {
      icon: AlertCircle,
      title: "SOS Emergency Alert",
      description:
        "Instantly send your live GPS location to parents or trusted contacts in emergencies with one tap.",
    },
    {
      icon: MapPin,
      title: "Live Location Sharing",
      description:
        "Let your family follow your real-time location when needed for peace of mind.",
    },
    {
      icon: UserCheck,
      title: "Trusted Contacts",
      description:
        "Add and manage who can receive your alerts and track your location.",
    },
    {
      icon: Camera,
      title: "Media Sharing",
      description:
        "Optionally attach photos or voice notes to your SOS alert for more context.",
    },
    {
      icon: ToggleLeft,
      title: "Privacy Control",
      description:
        "Turn off location sharing or SOS anytime with one tap - you stay in control.",
    },
  ];

  const parentFeatures = [
    {
      icon: Map,
      title: "Live Map Tracking",
      description:
        "View your daughter's location in real time on an interactive map.",
    },
    {
      icon: Bell,
      title: "Instant SOS Notifications",
      description:
        "Receive immediate alerts with live location, time, and optional media attachments.",
    },
    {
      icon: History,
      title: "Location History",
      description:
        "Review past routes and activity logs to ensure safety and accountability.",
    },
    {
      icon: Users,
      title: "Multiple Profiles",
      description:
        "Link and manage several daughter profiles under one parent account.",
    },
  ];

  const securityFeatures = [
    "End-to-end encrypted data transmission",
    "GDPR and PDPL compliant",
    "Secure Firebase authentication",
    "Complete control over location sharing",
    "No data sharing with third parties",
    "Data stored securely at rest",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTEsIDExMywgMTMzLCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

        <div className="relative container max-w-7xl main-section-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Image
                  src="/images/v2/pinksignal-logo.png"
                  alt="PinkSignal"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                <span>Trusted by thousands of families</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Safety,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                  {" "}
                  Always Connected
                </span>
              </h1>

              <p className="text-xl text-gray-600 !mb-8 leading-relaxed">
                PinkSignal empowers women with instant SOS alerts, real-time
                location sharing, and peace of mind for families. Stay safe,
                stay connected.
              </p>

              <div className="flex flex-col gap-4 justify-center lg:justify-start">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.brilworksdigital.pinksignal&pcampaignid=web_share"
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
                    href="https://apps.apple.com/us/app/pinksignal-women-safety-app/id6754561696"
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
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
                <div>
                  <div className="text-3xl font-bold text-pink-600">1000+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-600">&lt;5s</div>
                  <div className="text-sm text-gray-600">Alert Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-600">24/7</div>
                  <div className="text-sm text-gray-600">Protection</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-[9/16] max-w-xs mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border-8 border-gray-800">
                  <div className="h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-pink-50 to-white">
                    <Image
                      src="/images/v2/pinksignal-logo.png"
                      alt="PinkSignal Logo"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      PinkSignal
                    </h3>
                    <p className="text-gray-600 text-center text-sm mb-6">
                      Women Safety App
                    </p>
                    <div className="w-full space-y-3">
                      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-4 px-6 rounded-xl text-center font-semibold shadow-md">
                        SOS Alert
                      </div>
                      <div className="bg-white border-2 border-pink-200 py-4 px-6 rounded-xl text-center font-semibold text-gray-700">
                        Live Tracking
                      </div>
                      <div className="bg-white border-2 border-pink-200 py-4 px-6 rounded-xl text-center font-semibold text-gray-700">
                        Safe Contacts
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Powerful Safety Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to stay safe and connected with your loved
              ones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-pink-200 transition-all duration-300 hover:shadow-xl"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
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

      {/* For Daughters Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-pink-50 to-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                FOR DAUGHTERS
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Feel Safe,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                  {" "}
                  Stay Independent
                </span>
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Whether you're commuting, traveling, or walking alone,
                PinkSignal ensures help is always one tap away.
              </p>

              <div className="space-y-6">
                {daughterFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-12 shadow-2xl">
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-600 to-rose-600 flex items-center justify-center">
                        <AlertCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          Emergency SOS
                        </div>
                        <div className="text-sm text-gray-500">
                          Tap to send alert
                        </div>
                      </div>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="text-red-800 font-semibold text-center">
                        Hold for 3 seconds to activate
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="font-semibold text-gray-900">
                        Location Sharing
                      </div>
                      <div className="w-12 h-6 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full relative">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                      <span>Sharing with 3 contacts</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Trusted Contacts
                    </h4>
                    <div className="space-y-2">
                      {["Mom", "Dad", "Sister"].map((contact, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg"
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-400"></div>
                          <span className="text-sm font-medium text-gray-700">
                            {contact}
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

      {/* For Parents Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-900">
                      Real-Time Location
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                      <span>Live</span>
                    </div>
                  </div>

                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Map className="w-16 h-16 text-indigo-400 opacity-50" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 bg-pink-600 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-gray-500 text-xs mb-1">
                        Last Update
                      </div>
                      <div className="font-semibold text-gray-900">
                        2 mins ago
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-gray-500 text-xs mb-1">Speed</div>
                      <div className="font-semibold text-gray-900">Walking</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                      <Bell className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        SOS Alert Received
                      </div>
                      <div className="text-sm text-gray-500">Just now</div>
                    </div>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 text-sm">
                      Your daughter has sent an emergency alert. View location
                      and respond immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                FOR PARENTS
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Stay Connected,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {" "}
                  Stay Informed
                </span>
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get peace of mind knowing your loved ones are safe. Monitor,
                receive alerts, and respond quickly when it matters most.
              </p>

              <div className="space-y-6">
                {parentFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

        <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 text-pink-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Lock className="w-4 h-4" />
              <span>Privacy & Security</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Your Privacy is Our Priority
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We take data security seriously. Your information is protected
              with industry-leading encryption and security standards.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Encrypted Data
              </h3>
              <p className="text-gray-400">
                All data is encrypted in transit and at rest using
                industry-standard encryption protocols.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Full Control
              </h3>
              <p className="text-gray-400">
                You have complete control over your location sharing and can
                disable it at any time.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6">
                <Lock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Compliance</h3>
              <p className="text-gray-400">
                Fully compliant with GDPR, PDPL, and major international privacy
                standards.
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Security Features
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-50">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="bg-gradient-to-br from-pink-600 to-rose-600 rounded-3xl p-12 md:p-16 text-center text-white">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Feel Safer?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of families who trust PinkSignal for their safety.
              Download now and experience peace of mind.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center mt-8 bg-white text-pink-600 px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PinkSignal;
