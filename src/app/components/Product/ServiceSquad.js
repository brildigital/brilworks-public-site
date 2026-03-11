"use client";
import {
  MapPin,
  MessageSquare,
  Star,
  Shield,
  Clock,
  CreditCard,
  Sparkles,
  Wrench,
  Droplet,
  Zap,
  Hammer,
  Paintbrush,
  Scissors,
  Bug,
  WashingMachine,
  Search,
  Calendar,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceSquad = () => {
  const [openFaqIndex, setOpenFaqIndex] = React.useState(0);

  const faqs = [
    {
      question: "How do I book a service on ServiceSquad?",
      answer:
        "Booking is simple! Browse services, select your preferred professional, choose a date and time, add your address, and confirm. The entire process takes less than 2 minutes.",
    },
    {
      question: "When do I need to pay for the service?",
      answer:
        'ServiceSquad offers "Pay After Service" - you only pay after the service is completed. This ensures you\'re satisfied with the quality before making payment.',
    },
    {
      question: "How are service professionals verified?",
      answer:
        "All professionals go through a thorough verification process by our admin team. We check their experience, credentials, and background before approval.",
    },
    {
      question: "Can I track the professional in real-time?",
      answer:
        'Yes! Once the professional marks themselves as "On The Way", you can track their live location on the map with ETA and distance updates.',
    },
    {
      question: "What if I need to cancel my booking?",
      answer:
        'You can cancel bookings that are in "Pending" or "Accepted" status. Simply go to your booking details and select cancel with a reason.',
    },
    {
      question: "Can I chat with the professional before service?",
      answer:
        "Yes! Once your booking is accepted, you can communicate directly with the professional through our in-app chat feature.",
    },
    {
      question: "How do I become a service provider?",
      answer:
        "Download the app, apply to become a provider by selecting your services and providing your experience details. Our admin team will review and approve within 24-48 hours.",
    },
    {
      question: "What service categories are available?",
      answer:
        "We offer 9 major categories: Home Cleaning, Beauty & Spa, Repairs & Maintenance, Appliance Repair, Painting, Pest Control, Plumbing, Electrical, and Carpentry with 100+ services.",
    },
    {
      question: "Is there a minimum booking requirement?",
      answer:
        "No minimum booking requirement! You can book a single service or multiple services based on your needs.",
    },
    {
      question: "How does the rating system work?",
      answer:
        "After service completion, you can rate the professional from 1-5 stars and leave a written review. This helps maintain quality and helps other users make informed decisions.",
    },
  ];

  const features = [
    {
      icon: MapPin,
      title: "Live Tracking",
      description:
        "Track your service professional's location in real-time with accurate ETA updates.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Star,
      title: "Verified Professionals",
      description:
        "All service providers are admin-verified. View ratings and reviews before booking.",
      color: "from-blue-900 to-blue-800",
    },
    {
      icon: CreditCard,
      title: "Pay After Service",
      description:
        "No upfront payment. Review the service quality first, then pay securely.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: MessageSquare,
      title: "In-App Chat",
      description:
        "Communicate directly with professionals through secure messaging.",
      color: "from-blue-900 to-blue-800",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose from available time slots that fit your schedule.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description:
        "Rate and review professionals to maintain high service standards.",
      color: "from-blue-900 to-blue-800",
    },
  ];

  const services = [
    {
      icon: Sparkles,
      name: "Home Cleaning",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Scissors,
      name: "Beauty & Spa",
      color: "from-blue-900 to-blue-800",
    },
    {
      icon: Wrench,
      name: "Repairs & Maintenance",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: WashingMachine,
      name: "Appliance Repair",
      color: "from-blue-900 to-blue-800",
    },
    {
      icon: Paintbrush,
      name: "Painting",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Bug,
      name: "Pest Control",
      color: "from-blue-900 to-blue-800",
    },
    {
      icon: Droplet,
      name: "Plumbing",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Zap,
      name: "Electrical",
      color: "from-blue-900 to-blue-800",
    },
    {
      icon: Hammer,
      name: "Carpentry",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Select Service",
      description:
        "Browse 9 service categories with 100+ services. Choose from verified professionals.",
      color: "from-orange-500 to-orange-600",
    },
    {
      number: "02",
      icon: Calendar,
      title: "Book Time",
      description:
        "Pick your preferred date and time slot. Add your service address.",
      color: "from-blue-900 to-blue-800",
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Get Service",
      description:
        "Track location in real-time. Rate experience and pay after completion.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-40 -right-40 w-96 h-96 bg-[#FF6B35] opacity-5 rounded-full blur-3xl"
            style={{ animation: "float 6s ease-in-out infinite" }}
          ></div>
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#004E89] opacity-5 rounded-full blur-3xl"
            style={{ animation: "float 6s ease-in-out infinite 1s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#FF6B35] opacity-5 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-50 px-5 py-2 rounded-full shadow-sm mb-8 border border-orange-200">
                <Star className="w-4 h-4 text-[#FF6B35] fill-[#FF6B35]" />
                <span className="text-sm font-semibold text-gray-800">
                  Trusted by 10,000+ Users
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Professional Home Services
                <span
                  className="block mt-2 bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #FF6B35, #004E89)",
                  }}
                >
                  At Your Doorstep
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Book verified professionals for all your home service needs.
                Simple booking, live tracking, and secure payment after service
                completion.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="https://play.google.com/store/apps/details?id=com.brilworks.servicesquad"
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
                  href="https://apps.apple.com/app/service-squad-home-services/id6755956890"
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

              <div className="flex items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse"></div>
                  <span className="font-medium">500+ Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#004E89] rounded-full animate-pulse"></div>
                  <span className="font-medium">9 Service Categories</span>
                </div>
              </div>
            </div>

            <div className="relative lg:pl-8">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FF6B35] opacity-10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF6B35] opacity-10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#004E89] opacity-10 rounded-full blur-2xl"></div>
                <Image
                  src="/images/v2/servicesquad-hero.webp"
                  alt="Professional Service Provider"
                  width={600}
                  height={800}
                  className="relative w-full max-w-md mx-auto h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #FF6B35, #004E89)",
                }}
              >
                ServiceSquad
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for convenience, security, and peace of mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#FF6B35] transition-all duration-300 hover:shadow-xl"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6B35] transition-colors">
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

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #FF6B35, #004E89)",
                }}
              >
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              9 main service categories with 100+ professional services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-50 rounded-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[#FF6B35] hover:bg-white hover:shadow-lg"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-all duration-300`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors">
                  {service.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How It{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #FF6B35, #004E89)",
                }}
              >
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Book in 3 simple steps
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200 z-0">
                    <div className="absolute top-1/2 right-0 w-2 h-2 bg-[#FF6B35] rounded-full -translate-y-1/2 animate-pulse"></div>
                  </div>
                )}
                <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#FF6B35] transition-all duration-300 relative group hover:shadow-2xl z-10">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-125 transition-transform duration-300`}
                    >
                      {step.number}
                    </div>
                  </div>

                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 mt-6 mx-auto shadow-md group-hover:scale-110 transition-all duration-300`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center group-hover:text-[#FF6B35] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section
        className="py-20 lg:py-32 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(135deg, #FF6B35 0%, #004E89 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
            style={{ animation: "float 6s ease-in-out infinite" }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
            style={{ animation: "float 6s ease-in-out infinite 1.5s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Download ServiceSquad Today
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Join 10,000+ users booking home services the easy way
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center my-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.brilworks.servicesquad"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:shadow-xl"
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
                href="https://apps.apple.com/app/service-squad-home-services/id6755956890"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:shadow-xl"
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-white" id="faq">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #FF6B35, #004E89)",
                }}
              >
                Questions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about ServiceSquad
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                  className={`w-full bg-white border-2 rounded-2xl p-6 text-left transition-all duration-300 group ${
                    openFaqIndex === index
                      ? "border-[#FF6B35] shadow-2xl scale-[1.02]"
                      : "border-gray-200 hover:border-[#FF6B35] hover:shadow-xl"
                  }`}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3
                      className={`text-lg font-semibold pr-8 transition-colors duration-300 ${
                        openFaqIndex === index
                          ? "text-[#FF6B35]"
                          : "text-gray-900 group-hover:text-[#FF6B35]"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <ChevronRight
                      className={`w-6 h-6 text-[#FF6B35] flex-shrink-0 transition-all duration-500 ${
                        openFaqIndex === index
                          ? "transform rotate-90 scale-125"
                          : "group-hover:scale-110"
                      }`}
                    />
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openFaqIndex === index
                        ? "max-h-96 mt-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="bg-white border border-gray-200 rounded-3xl p-12 md:p-16 text-center shadow-lg">
            <Wrench className="w-16 h-16 mx-auto mb-6 text-[#FF6B35]" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get in touch with us to learn more about ServiceSquad and how we
              can help with your home service needs.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#004E89] text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105 my-3"
            >
              Contact Us
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceSquad;
