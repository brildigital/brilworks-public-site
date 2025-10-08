"use client";
import {
  Heart,
  Stethoscope,
  Car,
  Building,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Shield,
  Smartphone,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";
import { useState } from "react";
import Cal from "@calcom/embed-react";

export default function PrebuiltSolutionsPage() {
  const [schedule, setSchedule] = useState(false);
  const solutions = [
    {
      icon: Heart,
      title: "Dating & Matchmaking App",
      description:
        "AI-powered matching algorithms with real-time chat, video calls, and advanced privacy controls for modern dating platforms.",
      category: "Social & Lifestyle",
      pricing: "From $15,000",
      timeline: "4-6 weeks",
      features: [
        "Smart AI Matching Algorithm",
        "Real-time In-app Messaging",
        "Video & Voice Calls",
        "Advanced Privacy Controls",
        "Location-based Discovery",
        "Profile Verification",
        "Interest-based Filtering",
        "Premium Subscription System",
        "Push Notifications",
        "Admin Dashboard",
      ],
      technologies: [
        "React Native",
        "Node.js",
        "MongoDB",
        "Socket.io",
        "AWS",
        "AI/ML",
      ],
      imageSrc: "/images/v2/imockup-1.webp",
      highlights: [
        "Advanced AI matching with 95% accuracy",
        "End-to-end encrypted messaging",
        "Video dating with real-time filters",
        "Comprehensive safety features",
      ],
    },
    {
      icon: Stethoscope,
      title: "Post-Surgery Patients Care",
      description:
        "White-label digital health platform for comprehensive post-surgery monitoring and care coordination with telemedicine integration.",
      category: "Healthcare",
      pricing: "From $25,000",
      timeline: "6-8 weeks",
      features: [
        "Patient Monitoring Dashboard",
        "Care Plan Management",
        "Telemedicine Integration",
        "Health Records Management",
        "Medication Reminders",
        "Symptom Tracking",
        "Doctor-Patient Communication",
        "Appointment Scheduling",
        "Emergency Alerts",
        "Analytics & Reporting",
      ],
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "WebRTC",
        "AWS",
        "HIPAA Compliance",
      ],
      imageSrc: "/images/v2/imockup-3.webp",
      highlights: [
        "HIPAA compliant platform",
        "Real-time health monitoring",
        "Integrated telemedicine",
        "Comprehensive care coordination",
      ],
      featured: true,
    },
    {
      icon: Car,
      title: "Taxi & Ride Booking App",
      description:
        "Complete ride-hailing solution with real-time tracking, multiple payment options, and comprehensive driver management system.",
      category: "Transportation",
      pricing: "From $20,000",
      timeline: "5-7 weeks",
      features: [
        "Real-time GPS Tracking",
        "Multiple Payment Options",
        "Driver & Passenger Apps",
        "Admin Dashboard",
        "Fare Calculation",
        "Route Optimization",
        "Rating & Review System",
        "Emergency Features",
        "Multi-language Support",
        "Analytics Dashboard",
      ],
      technologies: [
        "React Native",
        "Node.js",
        "MongoDB",
        "Google Maps API",
        "Stripe",
        "AWS",
      ],
      imageSrc: "/images/v2/imockup-2.webp",
      highlights: [
        "Real-time tracking with ETA",
        "Multiple payment gateways",
        "Advanced route optimization",
        "Comprehensive driver management",
      ],
    },
    {
      icon: Building,
      title: "Enclave (Society Management)",
      description:
        "Comprehensive platform for residential community management with visitor tracking, facility booking, and automated billing.",
      category: "Property Management",
      pricing: "From $12,000",
      timeline: "3-5 weeks",
      features: [
        "Visitor Management System",
        "Automated Billing & Payments",
        "Maintenance Request System",
        "Amenity Booking",
        "Notice Board",
        "Complaint Management",
        "Event Management",
        "Security Features",
        "Mobile App for Residents",
        "Admin Panel",
      ],
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Razorpay",
        "AWS",
        "SMS Gateway",
      ],
      imageSrc: "/images/v2/imockup-4.webp",
      highlights: [
        "Complete society management",
        "Automated billing system",
        "Visitor tracking with QR codes",
        "Mobile-first design",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We analyze your requirements and create a detailed project plan with timelines and deliverables.",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description:
        "Our UI/UX team creates wireframes and prototypes to visualize the final product.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "We develop the solution using agile methodology with regular testing and quality assurance.",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "We deploy your solution and provide ongoing support and maintenance services.",
    },
  ];

  const features = [
    {
      title: "Rapid Deployment",
      description:
        "Launch your platform in weeks, not months, with our pre-built solutions.",
      icon: Clock,
      bgColor: "bg-blue-100 text-blue-600",
    },
    {
      title: "Battle-Tested",
      description:
        "Our solutions are proven in production with real users and real data.",
      icon: Shield,
      bgColor: "bg-green-100 text-green-600",
    },
    {
      title: "Mobile-First",
      description:
        "Built with mobile-first approach for optimal user experience across devices.",
      icon: Smartphone,
      bgColor: "bg-purple-100 text-purple-600",
    },
    {
      title: "Scalable Architecture",
      description:
        "Cloud-native solutions that scale with your business growth.",
      icon: Globe,
      bgColor: "bg-cyan-100 text-cyan-600",
    },
    {
      title: "Customizable",
      description:
        "Fully customizable to match your brand and specific requirements.",
      icon: CheckCircle,
      bgColor: "bg-orange-100 text-orange-600",
    },
    {
      title: "Ongoing Support",
      description:
        "Comprehensive support and maintenance to keep your platform running smoothly.",
      icon: Users,
      bgColor: "bg-red-100 text-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-navyBlue">
        <div className="container max-w-[1280px] main-section-padding mx-auto">
          <div className="flex flex-col items-center gap-6 mt-20">
            <div className="flex items-center w-fit gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 text-sm font-medium text-blue-400 md:mb-6 mb-3 sm:mx-auto mr-auto">
              <Building className="w-4 h-4" />
              <span>Ready-to-Deploy Solutions</span>
            </div>
            <div>
              <Heading
                type="h1"
                className="!text-white"
                text={
                  <>
                    Pre-Built Solutions&nbsp;
                    <br className="sm:hidden block" />
                    <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-themeSecondary">
                      Ready to Deploy
                    </span>
                  </>
                }
              />
            </div>
            <p className="text-gray-300 lg:text-xl md:text-lg text-base sm:text-center text-left md:pr-10 pr-0 w-full max-w-4xl">
              Launch faster with our battle-tested, white-label platforms. Fully
              customizable to match your brand and business needs with rapid
              deployment capabilities.
            </p>

            <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#solutions"
                className="sm:w-fit w-full flex items-center justify-center px-8 py-4 bg-themeColor text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={(e) => scrollToSection(e, "solutions")}
              >
                Explore Solutions
              </Link>
              <Link
                href="#contact"
                className="sm:w-fit w-full flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 transition-all duration-200"
                onClick={(e) => scrollToSection(e, "contcat")}
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="bg-slate-50">
        <div className="max-w-7xl main-section-padding mx-auto px-6">
          <div className="text-center mb-16">
            <Heading
              type="h2"
              className="lg:!text-[40px] md:!text-3xl !text-2xl font-semibold mb-3"
              text="Our Pre-Built Platform Solutions"
            />

            <p className="lg:text-xl md:text-lg text-base text-slate-600 max-w-3xl mx-auto">
              Choose from our comprehensive collection of white-label platforms,
              each designed for rapid deployment and customization
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  solution.featured ? "ring-2 ring-blue-500" : ""
                }`}
              >
                {solution.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      Featured Platform
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                        solution.featured
                          ? "bg-gradient-to-br from-blue-500 to-cyan-500"
                          : "bg-slate-200"
                      }`}
                    >
                      <solution.icon
                        className={`w-8 h-8 ${
                          solution.featured ? "text-white" : "text-slate-700"
                        }`}
                      />
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-themeColor !mt-5">
                        {solution.category}
                      </p>
                      {/* <p className="text-lg font-semibold text-slate-900">
                        {solution.pricing}
                      </p> */}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-slate-600 !mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      Key Highlights
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {solution.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">
                      Core Features
                    </h4>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                      {solution.features.slice(0, 6).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Mockup Preview */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">
                      Live Demo Preview
                    </h4>
                    <div className="flex justify-center">
                      <Image
                        src={solution.imageSrc}
                        alt={`mockup-${index}`}
                        width={400}
                        height={700}
                        className="overflow-hidden max-w-xs mx-auto hover:shadow-3xl transition-all duration-500 hover:scale-105"
                      />
                      {/* <solution.mockup /> */}
                    </div>
                  </div>

                  {/* Timeline & Pricing */}
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-6">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span className="font-semibold text-slate-900">
                          Timeline
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">
                        {solution.timeline}
                      </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Users className="w-4 h-4 text-green-500" />
                        <span className="font-semibold text-slate-900">
                          Team Size
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">4-6 Developers</p>
                    </div>
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                      solution.featured
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:scale-[1.02]"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    View Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section>
        <div className="max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <Heading
              type="h2"
              className="lg:!text-[40px] md:!text-3xl !text-2xl font-semibold mb-3"
              text="Our Development Process"
            />
            <p className="lg:text-xl md:text-lg text-base text-slate-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure rapid delivery without
              compromising on quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Prebuilt Solutions */}
      <section className="bg-slate-50">
        <div className="max-w-7xl main-section-padding mx-auto px-6">
          <div className="text-center mb-8 md:mb-12">
            <Heading
              type="h2"
              className="lg:!text-[40px] md:!text-3xl !text-2xl font-semibold mb-3"
              text="Why Choose Our Prebuilt Solutions?"
            />

            <p className="lg:text-xl md:text-lg text-base text-slate-600 max-w-3xl mx-auto">
              Get to market faster with our battle-tested, production-ready
              platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl sm:p-8 p-5 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
            {/* <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Rapid Deployment
              </h3>
              <p className="text-slate-600">
                Launch your platform in weeks, not months, with our pre-built
                solutions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Battle-Tested
              </h3>
              <p className="text-slate-600">
                Our solutions are proven in production with real users and real
                data.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Mobile-First
              </h3>
              <p className="text-slate-600">
                Built with mobile-first approach for optimal user experience
                across devices.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Scalable Architecture
              </h3>
              <p className="text-slate-600">
                Cloud-native solutions that scale with your business growth.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Customizable
              </h3>
              <p className="text-slate-600">
                Fully customizable to match your brand and specific
                requirements.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Ongoing Support
              </h3>
              <p className="text-slate-600">
                Comprehensive support and maintenance to keep your platform
                running smoothly.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-themeColor to-navyBlue">
        <div className="max-w-7xl main-section-padding mx-auto text-center">
          <Heading
            type="h2"
            className="lg:!text-[40px] md:!text-3xl !text-2xl font-semibold mb-3 text-white"
            text="Ready to Launch Your Platform?"
          />

          <p className="lg:text-xl md:text-lg text-base text-slate-100 max-w-3xl mx-auto !mb-4">
            Choose from our pre-built solutions or let us create a custom
            platform tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-themeColor font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button
              onClick={() => setSchedule(true)}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 transition-all duration-200"
            >
              Schedule a Demo
            </button>
          </div>
          {schedule && (
            <div className="w-full mt-10">
              <Cal
                calLink="vikas-singh-bril/free-consultation"
                config={{ theme: "light" }}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// "use client";
// import React from "react";
// import Heading from "../HTMLComponents/Heading";
// import Link from "next/link";
// import { CircleArrowLeft } from "lucide-react";

// const prebuildSolutions = [
//   {
//     title: "Post Surgery Care App",
//     description:
//       "Monitor recovery, manage follow-ups, and track patient health seamlessly with an intuitive post-surgery care mobile app.",
//     image:
//       "https://d11qzsb0ksp6iz.cloudfront.net/assets/exora-banner-1759756411673.webp",
//     link: "/portfolio/healthcare-mobile-app/",
//   },
//   {
//     title: "Fitness & Wellness App",
//     description:
//       "Empower users to achieve health goals with personalized fitness tracking, workout plans, and wellness insights powered by AI.",
//     image:
//       "https://d11qzsb0ksp6iz.cloudfront.net/assets/fitnest-app-mockup-1759749065112.webp",
//     link: "/portfolio/mobile-fitness-app/",
//   },

//   {
//     title: "Dating & Matchmaking App",
//     description:
//       "Connect people smarter with AI-based matchmaking, real-time chat, and secure profile verification features.",
//     image:
//       "https://d11qzsb0ksp6iz.cloudfront.net/assets/mindsync-mockup-1759756960049.webp",
//   },
//   {
//     title: "White Label Society & Community Management App",
//     description:
//       "Manage gated communities or societies with a customizable white-label app for communication, payments, and security management.",
//     image:
//       "https://d11qzsb0ksp6iz.cloudfront.net/assets/enclave-connect-mockup-1759756976416.webp",
//   },
//   {
//     title: "Taxi Ride Hailing App",
//     description:
//       "Launch your Uber-like ride-hailing platform with live tracking, fare estimation, driver management, and easy payment options.",
//     image:
//       "https://d11qzsb0ksp6iz.cloudfront.net/assets/cabuno-mockuo--1759756970528.webp",
//   },
// ];

// const PreBuildSolutions = () => {
//   return (
//     <>
//       <div className="hire-team-section-l !scroll-[unset]">
//         <div className="banner-layer h-full min-h-[600px] md:max-h-[600px] max-h-full">
//           <div className="container max-w-[1280px] main-section-padding !pt-24 mx-auto">
//             <div className="flex flex-col items-start justify-center h-full min-h-[500px] md:max-h-[700px] max-h-full">
//               <Heading
//                 type="h1"
//                 className="text-white"
//                 text={"Pre-Build AI & Automation Solutions"}
//               />
//               <p className="text-white lg:text-2xl md:text-xl text-lg !mt-5">
//                 Speed up your digital transformation with pre-build solutions.
//                 Our ready-to-use AI and
//                 <br className="hidden md:block" />
//                 automation tools help you launch faster, reduce development
//                 time, and focus on scaling your business.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container max-w-[1280px] main-section-padding-bottom mx-auto">
//         <div className="mb-4">
//           <Link
//             href="/ai-tools/"
//             className="flex gap-2 bg-white hover:bg-themeLight w-fit p-2 rounded-md"
//           >
//             <CircleArrowLeft /> Back
//           </Link>
//         </div>
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
//           {prebuildSolutions.map((tool) => (
//             <Link
//               key={tool.title}
//               href={tool.link || "#"}
//               target="_blank"
//               className="cursor-pointer border rounded-xl hover:shadow-xl transition-shadow overflow-hidden group"
//             >
//               <img
//                 src={tool.image}
//                 alt={tool.title}
//                 className="w-full h-auto object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
//               />

//               {/*  <div
//                 className={`${tool.bg} flex items-center justify-center p-6`}
//               >
//                 <div className="w-72 h-40 flex items-center justify-center">
//                   <Image
//                     src={tool.image}
//                     alt={tool.title}
//                     fill
//                     className="object-contain"
//                   />
//                   <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center ">
//                     {tool?.title}
//                   </p>
//                 </div>
//               </div> */}
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                   {tool.title}
//                 </h3>
//                 <p className="text-base text-gray-600">{tool.description}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default PreBuildSolutions;
