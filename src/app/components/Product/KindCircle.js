"use client";
import {
  Check,
  ChevronRight,
  Users,
  Shield,
  Sparkles,
  Star,
  Heart,
  Calendar,
  BookOpen,
  UserCheck,
  Baby,
  Gift,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { scrollToSection } from "../lib/commonFunction";

const KindCircle = () => {
  return (
    <div>
      <section className="pt-16">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'linear-gradient(to right, #ccfbf1, #a7f3d0)', color: '#216883' }}>
                <Sparkles className="w-4 h-4" />
                <span>Supporting Parents of Neurodivergent Children</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Supporting Parents of
                <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #216883, #49d2c8)' }}>
                  {" "}
                  Neurodivergent Children
                </span>
              </h1>
              <p className="text-xl text-gray-600 md:!mb-8 !mb-5 leading-relaxed">
                Kind Circle is a dedicated community platform connecting parents raising children with autism, ADHD, learning disabilities, and other neurodivergent conditions. Find support, share experiences, and access expert resources all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#download-app"
                  onClick={(e) => scrollToSection(e, "download-app")}
                  className="group text-white px-8 md:py-4 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  style={{ background: 'linear-gradient(to right, #216883, #49d2c8)' }}
                >
                  Join the Community
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.brilworksdigital.KindCircle"
                  target="_blank"
                  className="bg-white text-gray-900 px-8 md:py-4 py-3 rounded-full font-medium border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 text-center"
                >
                  Download on Play Store
                </Link>
              </div>
              <div className="mt-12 flex items-center md:space-x-10 space-x-5">
                <div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Secure & Private</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">Verified</div>
                  <div className="text-sm text-gray-600">Professionals</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl transform rotate-3" style={{ background: 'linear-gradient(to bottom right, #ccfbf1, #a7f3d0)' }}></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-2">
                <div className="flex items-center justify-center rounded-2xl" style={{ background: 'linear-gradient(to bottom right, #216883, #49d2c8)' }}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/kindcircle-1770726348659.webp`}
                    alt="KindCircle App"
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

      {/* Why Choose KindCircle Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: 'linear-gradient(to right, #ccfbf1, #a7f3d0)', color: '#216883' }}>
              <Star className="w-4 h-4" />
              <span>Why Choose KindCircle</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Supportive Community
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End the isolation and find the support you need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Connect With Your Community",
                description:
                  "Match with other parents facing similar challenges. Connect based on your child's condition, age, and location. Join a supportive network that truly understands your journey.",
              },
              {
                icon: UserCheck,
                title: "Access Verified Professionals",
                description:
                  "Browse verified doctors, therapists, and specialists. Find child psychologists, speech therapists, and occupational therapists. Direct messaging with healthcare providers.",
              },
              {
                icon: BookOpen,
                title: "Comprehensive Resource Library",
                description:
                  "Curated articles and guides by experts. Browse by condition: Autism, ADHD, Anxiety, Learning Disabilities. Evidence-based strategies and practical advice.",
              },
              {
                icon: Calendar,
                title: "Community Events & Workshops",
                description:
                  "Discover local and virtual events. Join webinars, workshops, and social gatherings. RSVP and track your event attendance. Create and host your own events.",
              },
              {
                icon: Baby,
                title: "Manage Children's Profiles",
                description:
                  "Add multiple children with detailed profiles. Track conditions, age, and important information. Keep notes about interests and preferences. Secure and private storage.",
              },
              {
                icon: Shield,
                title: "Privacy & Security",
                description:
                  "Your data is encrypted and protected. Control what information you share. Verified healthcare professionals only. Safe and moderated community environment.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: 'linear-gradient(to bottom right, #216883, #49d2c8)',
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
      <section style={{ background: 'linear-gradient(to bottom right, #f0fdfa, #ecfdf5)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to connect, learn, and grow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🤝",
                title: "Smart Parent Matching",
                description: "Algorithm to match with similar parents",
              },
              {
                icon: "💬",
                title: "Real-Time Chat",
                description: "Private messaging with parents and professionals",
              },
              {
                icon: "📅",
                title: "Event Calendar",
                description: "RSVP system for community events",
              },
              {
                icon: "📚",
                title: "Searchable Library",
                description: "Comprehensive resource library",
              },
              {
                icon: "👨‍⚕️",
                title: "Doctor Directory",
                description: "Verified professionals with badges",
              },
              {
                icon: "👶",
                title: "Multiple Profiles",
                description: "Manage profiles for multiple children",
              },
              {
                icon: "📍",
                title: "Location-Based",
                description: "Connect with families in your area",
              },
              {
                icon: "🔔",
                title: "Push Notifications",
                description: "Stay updated on messages and events",
              },
              {
                icon: "📱",
                title: "Offline Access",
                description: "Access saved resources offline",
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

      {/* Who Is KindCircle For Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Who Is KindCircle For?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A supportive community for families navigating neurodivergence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Autism Spectrum", desc: "Parents of children with ASD" },
              { name: "ADHD", desc: "Families managing attention challenges" },
              { name: "Learning Disabilities", desc: "Parents supporting learning differences" },
              { name: "Anxiety & Depression", desc: "Families dealing with mental health" },
              { name: "Speech Delays", desc: "Parents navigating language delays" },
              { name: "All Neurodivergent", desc: "Anyone raising neurodivergent children" },
              { name: "Healthcare Providers", desc: "Professionals serving these communities" },
              { name: "Newly Diagnosed", desc: "Families starting their journey" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border"
                style={{ borderColor: '#49d2c8' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ background: 'linear-gradient(to bottom right, #216883, #49d2c8)' }}>
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

      {/* How It Works Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #f0fdfa, #ecfdf5)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How KindCircle Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to join your supportive community
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                title: "Create Profile",
                description: "Set up your profile and add your children",
              },
              {
                step: "2",
                title: "Find Matches",
                description: "Connect with parents facing similar challenges",
              },
              {
                step: "3",
                title: "Access Resources",
                description: "Browse expert articles and guides",
              },
              {
                step: "4",
                title: "Connect",
                description: "Message parents and verified professionals",
              },
              {
                step: "5",
                title: "Join Events",
                description: "Attend workshops and community gatherings",
              },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(to bottom right, #216883, #49d2c8)' }}>
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 4 && (
                  <ChevronRight className="hidden md:block absolute top-8 -right-4 w-8 h-8" style={{ color: '#49d2c8' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <Heart className="w-16 h-16 mx-auto mb-6" style={{ color: '#216883' }} />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Kind Circle exists to end the isolation many parents feel when raising neurodivergent children. We believe every family deserves access to support, expert guidance, and a community that understands their unique journey.
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
                Whether you're newly diagnosed or years into your journey, Kind Circle provides the tools, connections, and resources you need to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section
        id="download-app"
        style={{ background: 'linear-gradient(to right, #216883, #49d2c8)' }}
      >
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center text-white">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Your Community Today! 💚
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of parents finding support, making connections, and accessing the resources they need. Your community is waiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.brilworksdigital.KindCircle"
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
                <span>Verified Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Platform Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <Gift className="w-16 h-16 mx-auto mb-6" style={{ color: '#216883' }} />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Support the Platform
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Help us grow and reach more families in need
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Optional Donations",
                  description: "Help us grow and keep the platform accessible for all families",
                },
                {
                  title: "Support Development",
                  description: "Support development of new features and improvements",
                },
                {
                  title: "Reach More Families",
                  description: "Help us reach more families who need support and resources",
                },
                {
                  title: "Community Growth",
                  description: "Contribute to building a stronger, more connected community",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl"
                  style={{ background: 'linear-gradient(to bottom right, #f0fdfa, #ecfdf5)' }}
                >
                  <Gift className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#216883' }} />
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
      <section style={{ background: 'linear-gradient(to bottom right, #216883, #49d2c8)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="bg-white rounded-3xl p-12 md:p-16 text-center">
            <Heart className="w-16 h-16 mx-auto mb-6" style={{ color: '#216883' }} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Find Your Community?
            </h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Join KindCircle today and connect with parents who understand your journey. Access expert resources, verified professionals, and a supportive community that's here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Link
                href="https://play.google.com/store/apps/details?id=com.brilworksdigital.KindCircle"
                target="_blank"
                className="inline-flex items-center text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300"
                style={{ background: 'linear-gradient(to right, #216883, #49d2c8)' }}
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

export default KindCircle;
