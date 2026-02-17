"use client";
import {
  Check,
  ChevronRight,
  UtensilsCrossed,
  Sparkles,
  Star,
  Users,
  Menu,
  Table,
  UserPlus,
  TrendingUp,
  CreditCard,
  ChefHat,
  Cloud,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { scrollToSection } from "../lib/commonFunction";

const OrderNest = () => {
  return (
    <div>
      <section className="pt-16">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'linear-gradient(to right, #fef3c7, #fee2e2)', color: '#dc2626' }}>
                <Sparkles className="w-4 h-4" />
                <span>Restaurant Management System</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Run Your Restaurant
                <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #f97316, #dc2626)' }}>
                  {" "}
                  From Setup to Close
                </span>
              </h1>
              <p className="text-xl text-gray-600 md:!mb-8 !mb-5 leading-relaxed">
                OrderNest is the one place where restaurant teams run day-to-day service. Managers design menus, configure tables, invite staff, and track real-time sales. Front-of-house handles seatings and bills, while kitchen and bar crew see live tickets with status updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#download-app"
                  onClick={(e) => scrollToSection(e, "download-app")}
                  className="group text-white px-8 md:py-4 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  style={{ background: 'linear-gradient(to right, #f97316, #dc2626)' }}
                >
                  Get Started
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.brilworks.orderNest"
                  target="_blank"
                  className="bg-white text-gray-900 px-8 md:py-4 py-3 rounded-full font-medium border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 text-center"
                >
                  Download on Play Store
                </Link>
              </div>
              <div className="mt-12 flex items-center md:space-x-10 space-x-5">
                <div>
                  <div className="text-3xl font-bold text-gray-900">Real-Time</div>
                  <div className="text-sm text-gray-600">Live Updates</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">Cloud</div>
                  <div className="text-sm text-gray-600">Sync</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Secure</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl transform rotate-3" style={{ background: 'linear-gradient(to bottom right, #fed7aa, #fecaca)' }}></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-2">
                <div className="flex items-center justify-center rounded-2xl" style={{ background: 'linear-gradient(to bottom right, #f97316, #dc2626)' }}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/ordernest-1770726411206.webp`}
                    alt="OrderNest App"
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

      {/* Why Choose OrderNest Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: 'linear-gradient(to right, #fef3c7, #fee2e2)', color: '#dc2626' }}>
              <Star className="w-4 h-4" />
              <span>Why Choose OrderNest</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Restaurant Management
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything your restaurant team needs in one unified platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Menu,
                title: "Menu Management",
                description:
                  "Managers design and configure menus with ease. Update items, prices, and descriptions in real-time. Organize menus by categories and manage availability.",
              },
              {
                icon: Table,
                title: "Table Configuration",
                description:
                  "Configure tables and manage floor plans. Front-of-house handles seatings efficiently. Track table status and optimize seating arrangements.",
              },
              {
                icon: UserPlus,
                title: "Staff Management",
                description:
                  "Invite staff members and assign roles. Role-based dashboards for managers, servers, kitchen, and bar crew. Secure access control.",
              },
              {
                icon: TrendingUp,
                title: "Real-Time Sales Tracking",
                description:
                  "Track real-time sales and revenue. Monitor performance across locations. Get instant insights into your restaurant's performance.",
              },
              {
                icon: ChefHat,
                title: "Live Kitchen Tickets",
                description:
                  "Kitchen and bar crew see live tickets with status updates. Real-time order tracking from placement to completion. Streamlined kitchen operations.",
              },
              {
                icon: CreditCard,
                title: "Front-of-House Operations",
                description:
                  "Handle seatings and bills seamlessly. Built-in customer ordering keeps guests in the loop. Process payments and manage transactions efficiently.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: 'linear-gradient(to bottom right, #f97316, #dc2626)',
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
      <section style={{ background: 'linear-gradient(to bottom right, #fff7ed, #fef2f2)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful tools to streamline your restaurant operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📋",
                title: "Menu Design",
                description: "Create and manage menus easily",
              },
              {
                icon: "🪑",
                title: "Table Management",
                description: "Configure and track tables",
              },
              {
                icon: "👥",
                title: "Staff Invitations",
                description: "Invite and manage team members",
              },
              {
                icon: "📊",
                title: "Real-Time Sales",
                description: "Track sales and revenue live",
              },
              {
                icon: "🍽️",
                title: "Live Kitchen Tickets",
                description: "Real-time order tracking",
              },
              {
                icon: "💳",
                title: "Bill Management",
                description: "Handle payments and bills",
              },
              {
                icon: "📱",
                title: "Customer Ordering",
                description: "Built-in ordering system",
              },
              {
                icon: "📈",
                title: "Detailed Reports",
                description: "Track trends across locations",
              },
              {
                icon: "🔐",
                title: "Secure Accounts",
                description: "Role-based access control",
              },
              {
                icon: "☁️",
                title: "Cloud Sync",
                description: "Firebase/Expo cloud sync",
              },
              {
                icon: "⏰",
                title: "Shift Management",
                description: "Coordinate from setup to close",
              },
              {
                icon: "📍",
                title: "Multi-Location",
                description: "Manage multiple locations",
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

      {/* Role-Based Dashboards Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Role-Based Dashboards
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Customized views for every team member
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Managers", desc: "Design menus, configure tables, track sales" },
              { name: "Front-of-House", desc: "Handle seatings and bills" },
              { name: "Kitchen Crew", desc: "View live tickets with status updates" },
              { name: "Bar Staff", desc: "Manage bar orders and inventory" },
            ].map((role, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border"
                style={{ borderColor: '#f97316' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ background: 'linear-gradient(to bottom right, #f97316, #dc2626)' }}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                  {role.name}
                </h3>
                <p className="text-gray-600 text-sm text-center">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #fff7ed, #fef2f2)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How OrderNest Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple workflow from setup to service
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                title: "Setup",
                description: "Design menus and configure tables",
              },
              {
                step: "2",
                title: "Invite Staff",
                description: "Add team members with roles",
              },
              {
                step: "3",
                title: "Service",
                description: "Handle orders and seatings",
              },
              {
                step: "4",
                title: "Kitchen",
                description: "Live tickets and status updates",
              },
              {
                step: "5",
                title: "Reports",
                description: "Track sales and trends",
              },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(to bottom right, #f97316, #dc2626)' }}>
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 4 && (
                  <ChevronRight className="hidden md:block absolute top-8 -right-4 w-8 h-8" style={{ color: '#dc2626' }} />
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
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'linear-gradient(to right, #fef3c7, #fee2e2)', color: '#dc2626' }}>
                <Star className="w-4 h-4" />
                <span>Perfect For</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Who Can Use OrderNest?
              </h2>
              <div className="space-y-4">
                {[
                  "Restaurant managers and owners",
                  "Front-of-house staff and servers",
                  "Kitchen and bar crew",
                  "Multi-location restaurant chains",
                  "Quick service restaurants",
                  "Fine dining establishments",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#f97316' }} />
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Benefits
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Real-Time Updates",
                  "Cloud Sync",
                  "Secure Access",
                  "Multi-Location",
                  "Detailed Reports",
                  "Easy Setup",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2">
                      <Check className="w-5 h-5" style={{ color: '#f97316' }} />
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
        style={{ background: 'linear-gradient(to right, #f97316, #dc2626)' }}
      >
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center text-white">
            <UtensilsCrossed className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Streamline Your Restaurant Today! 🍽️
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join restaurants using OrderNest to coordinate every shift from setup to close. Real-time updates, cloud sync, and role-based dashboards keep your team in sync.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.brilworks.orderNest"
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
                <span>Real-Time Updates</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>Cloud Sync</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span>Secure & Reliable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <Cloud className="w-16 h-16 mx-auto mb-6" style={{ color: '#f97316' }} />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Built on Modern Technology
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Secure, reliable, and always in sync
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Firebase Integration",
                  description: "Secure cloud sync via Firebase for real-time data synchronization",
                },
                {
                  title: "Expo Framework",
                  description: "Built with Expo for cross-platform compatibility",
                },
                {
                  title: "Secure Accounts",
                  description: "Role-based access control with secure authentication",
                },
                {
                  title: "Real-Time Updates",
                  description: "Live updates across all devices and locations",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl"
                  style={{ background: 'linear-gradient(to bottom right, #fff7ed, #fef2f2)' }}
                >
                  <Cloud className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#f97316' }} />
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
      <section style={{ background: 'linear-gradient(to bottom right, #f97316, #dc2626)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="bg-white rounded-3xl p-12 md:p-16 text-center">
            <UtensilsCrossed className="w-16 h-16 mx-auto mb-6" style={{ color: '#f97316' }} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Restaurant?
            </h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              OrderNest keeps every shift coordinated from setup to close. Download today and experience seamless restaurant management with real-time updates, cloud sync, and role-based dashboards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Link
                href="https://play.google.com/store/apps/details?id=com.brilworks.orderNest"
                target="_blank"
                className="inline-flex items-center text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300"
                style={{ background: 'linear-gradient(to right, #f97316, #dc2626)' }}
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

export default OrderNest;
