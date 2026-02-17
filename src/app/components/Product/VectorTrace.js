"use client";
import {
  Check,
  ChevronRight,
  Building2,
  Shield,
  Sparkles,
  Star,
  Users,
  BarChart3,
  Wrench,
  Factory,
  Lock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { scrollToSection } from "../lib/commonFunction";

const VectorTrace = () => {
  return (
    <div>
      <section className="pt-16">
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'linear-gradient(to right, #e0f2fe, #dbeafe)', color: '#1e40af' }}>
                <Sparkles className="w-4 h-4" />
                <span>Complete Business Management Platform</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Business
                <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #ade7f3, #2f84c5)' }}>
                  {" "}
                  Operations
                </span>
              </h1>
              <p className="text-xl text-gray-600 md:!mb-8 !mb-5 leading-relaxed">
                VectorTrace is the all-in-one management solution designed for manufacturers, service providers, vendors, and customers. Streamline every aspect of your workflow from order placement to final delivery with powerful features and real-time tracking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#download-app"
                  onClick={(e) => scrollToSection(e, "download-app")}
                  className="group text-white px-8 md:py-4 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  style={{ background: 'linear-gradient(to right, #ade7f3, #2f84c5)' }}
                >
                  Get Started
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.brilworks.vectortrace"
                  target="_blank"
                  className="bg-white text-gray-900 px-8 md:py-4 py-3 rounded-full font-medium border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 text-center"
                >
                  Download on Play Store
                </Link>
              </div>
              <div className="mt-12 flex items-center md:space-x-10 space-x-5">
                <div>
                  <div className="text-3xl font-bold text-gray-900">4</div>
                  <div className="text-sm text-gray-600">User Types</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">Real-Time</div>
                  <div className="text-sm text-gray-600">Tracking</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Secure</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl transform rotate-3" style={{ background: 'linear-gradient(to bottom right, #e0f2fe, #dbeafe)' }}></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-2">
                <div className="flex items-center justify-center rounded-2xl" style={{ background: 'linear-gradient(to bottom right, #ade7f3, #2f84c5)' }}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/vectortrace-1770726355449.webp`}
                    alt="VectorTrace App"
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

      {/* Why Choose VectorTrace Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: 'linear-gradient(to right, #e0f2fe, #dbeafe)', color: '#1e40af' }}>
              <Star className="w-4 h-4" />
              <span>Why Choose VectorTrace</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              All-in-One Business Management
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete solution for companies, technicians, vendors, and customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "For Companies",
                description:
                  "Dashboard & analytics, order management, inventory control, product management, lead management, purchase orders, manufacturing operations, installation tracking, and more.",
              },
              {
                icon: Wrench,
                title: "For Technicians",
                description:
                  "Task dashboard, current tasks, task updates with photos, RMA tickets, and profile management. Access detailed job information and report completion in real-time.",
              },
              {
                icon: Factory,
                title: "For Vendors",
                description:
                  "Production management, batch processing, purchase order handling, dispatch management, RMA requests, asset tracking, and dashboard insights.",
              },
              {
                icon: Users,
                title: "For Customers",
                description:
                  "Order tracking, installation monitoring, order history, support center, and profile management. Real-time updates on installation progress.",
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description:
                  "Comprehensive reporting and analytics. Get insights into business performance, production metrics, and delivery performance across all modules.",
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description:
                  "Role-based access control, secure authentication, cloud-based storage with Firebase integration, and industry-standard encryption.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: 'linear-gradient(to bottom right, #ade7f3, #2f84c5)',
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

      {/* For Companies Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #f0f9ff, #eff6ff)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              🏢 For Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive business management tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Dashboard & Analytics", desc: "Comprehensive business insights" },
              { name: "Order Management", desc: "Track orders from creation to completion" },
              { name: "Inventory Control", desc: "Real-time tracking with alerts" },
              { name: "Product Management", desc: "Organize catalog with specifications" },
              { name: "Lead Management", desc: "Capture and convert leads efficiently" },
              { name: "Purchase Orders", desc: "Create and manage POs with vendors" },
              { name: "Manufacturing Operations", desc: "Oversee production processes" },
              { name: "Installation Tracking", desc: "Monitor field installations" },
              { name: "Technician Management", desc: "Assign tasks and track performance" },
              { name: "Vendor Management", desc: "Maintain vendor relationships" },
              { name: "Asset Management", desc: "Track assets and maintenance" },
              { name: "RMA Management", desc: "Handle returns and warranty claims" },
              { name: "Dispatch Coordination", desc: "Optimize logistics and delivery" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border"
                style={{ borderColor: '#ade7f3' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ background: 'linear-gradient(to bottom right, #ade7f3, #2f84c5)' }}>
                  <Building2 className="w-6 h-6 text-white" />
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

      {/* Key Features Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ✨ Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features to streamline your operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🔐",
                title: "Role-Based Access",
                description: "Secure multi-user operations",
              },
              {
                icon: "🔔",
                title: "Real-Time Notifications",
                description: "Updates across all modules",
              },
              {
                icon: "📱",
                title: "Mobile-Optimized",
                description: "On-the-go access",
              },
              {
                icon: "📊",
                title: "Comprehensive Reporting",
                description: "Advanced analytics and insights",
              },
              {
                icon: "📄",
                title: "Document Management",
                description: "File attachments and storage",
              },
              {
                icon: "🔒",
                title: "Secure Authentication",
                description: "Password management",
              },
              {
                icon: "☁️",
                title: "Cloud Storage",
                description: "Firebase integration",
              },
              {
                icon: "💻",
                title: "Responsive Design",
                description: "Works on all devices",
              },
              {
                icon: "📴",
                title: "Offline Capability",
                description: "Field operations support",
              },
              {
                icon: "📥",
                title: "Data Export",
                description: "PDF and other formats",
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

      {/* Perfect For Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #f0f9ff, #eff6ff)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              🎯 Perfect For
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ideal for various business types
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Manufacturing Companies", desc: "Complete production management" },
              { name: "Service Businesses", desc: "Installation and service tracking" },
              { name: "Distribution Companies", desc: "Logistics and delivery optimization" },
              { name: "Equipment Suppliers", desc: "Vendor and inventory management" },
              { name: "Field Service Operations", desc: "Technician coordination" },
              { name: "Multi-Vendor Companies", desc: "Manage vendors and technicians" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border"
                style={{ borderColor: '#ade7f3' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ background: 'linear-gradient(to bottom right, #ade7f3, #2f84c5)' }}>
                  <Check className="w-6 h-6 text-white" />
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
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How VectorTrace Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple workflow from order to delivery
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                title: "Setup",
                description: "Configure your business and roles",
              },
              {
                step: "2",
                title: "Order",
                description: "Place and track orders",
              },
              {
                step: "3",
                title: "Process",
                description: "Manage production and inventory",
              },
              {
                step: "4",
                title: "Install",
                description: "Track installations and services",
              },
              {
                step: "5",
                title: "Deliver",
                description: "Complete delivery and reporting",
              },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(to bottom right, #ade7f3, #2f84c5)' }}>
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 4 && (
                  <ChevronRight className="hidden md:block absolute top-8 -right-4 w-8 h-8" style={{ color: '#2f84c5' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section
        id="download-app"
        style={{ background: 'linear-gradient(to right, #ade7f3, #2f84c5)' }}
      >
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="text-center text-white">
            <Building2 className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Business Today! 🚀
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join businesses using VectorTrace to streamline operations from order placement to final delivery. Real-time tracking, comprehensive management, and secure cloud sync.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.brilworks.vectortrace"
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
                <span>Real-Time Tracking</span>
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

      {/* Security & Privacy Section */}
      <section>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <Lock className="w-16 h-16 mx-auto mb-6" style={{ color: '#2f84c5' }} />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                🔒 Security & Privacy
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your data security is our priority
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Industry-Standard Encryption",
                  description: "Protect your business information with advanced encryption",
                },
                {
                  title: "Secure Cloud Storage",
                  description: "Firebase integration with secure data storage",
                },
                {
                  title: "Role-Based Access Control",
                  description: "Secure multi-user operations with access control",
                },
                {
                  title: "Password Management",
                  description: "Secure authentication with password management",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl"
                  style={{ background: 'linear-gradient(to bottom right, #f0f9ff, #eff6ff)' }}
                >
                  <Shield className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#2f84c5' }} />
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
      <section style={{ background: 'linear-gradient(to bottom right, #ade7f3, #2f84c5)' }}>
        <div className="container max-w-7xl main-section-padding mx-auto">
          <div className="bg-white rounded-3xl p-12 md:p-16 text-center">
            <Building2 className="w-16 h-16 mx-auto mb-6" style={{ color: '#2f84c5' }} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              VectorTrace streamlines every aspect of your workflow from order placement to final delivery. Download today and experience complete business management with real-time tracking, comprehensive analytics, and secure cloud sync.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Link
                href="https://play.google.com/store/apps/details?id=com.brilworks.vectortrace"
                target="_blank"
                className="inline-flex items-center text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300"
                style={{ background: 'linear-gradient(to right, #ade7f3, #2f84c5)' }}
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

export default VectorTrace;
