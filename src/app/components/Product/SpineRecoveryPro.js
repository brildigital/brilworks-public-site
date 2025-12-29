"use client";
import {
  ShieldCheck,
  Activity,
  FileText,
  LayoutTemplate,
  Users,
  Lock,
  CheckCircle,
  ChevronRight,
  BarChart3,
  Stethoscope,
  Building2,
  Smartphone,
  PhoneCall,
  MessageCircle,
} from "lucide-react";
import React, { useState } from "react";
import HospitalContactForm from "./HospitalContactForm";
import SpineRecoveryFooter from "../Footer/SpineRecoveryFooter";
import SpineRecoveryPageHeader from "../Header/SpineRecoveryPageHeader";

const SpineRecoveryPro = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);

  const features = [
    {
      icon: Building2,
      title: "Hospital-Wide Standards",
      desc: "Create and lock global recovery templates to ensure consistency across all doctors and departments.",
      color: "blue",
    },
    {
      icon: Activity,
      title: "Automated Monitoring",
      desc: "Receive alerts only for non-compliant or high-pain patients, delegating routine monitoring to nursing staff.",
      color: "emerald",
    },
    {
      icon: Smartphone,
      title: "Patient Compliance",
      desc: "Apple Health & Google Fit integration with video-guided exercises and adherence logging for objective data.",
      color: "purple",
    },
    {
      icon: ShieldCheck,
      title: "Audit-Ready Logs",
      desc: "Generate comprehensive reports for legal defense with objective documentation of care delivery.",
      color: "amber",
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      desc: "Visualize recovery trajectories instantly with comprehensive dashboards and compliance metrics.",
      color: "cyan",
    },
    {
      icon: MessageCircle,
      title: "Secure Communication",
      desc: "HIPAA-compliant chat for immediate complication triage and continuous patient support.",
      color: "pink",
    },
  ];

  const problems = [
    {
      icon: FileText,
      title: "Non-Standardized Care",
      description:
        "Protocols vary by doctor, leading to inconsistent patient outcomes and operational inefficiencies that are hard to scale.",
      color: "red",
    },
    {
      icon: ShieldCheck,
      title: "Medico-Legal Exposure",
      description:
        "Without objective proof of patient compliance or care delivery, hospitals lack a defensible audit trail during disputes.",
      color: "amber",
    },
    {
      icon: Activity,
      title: "Patient Drop-offs",
      description:
        "Manual follow-ups fall through the cracks. Patients disengage, leading to higher complication rates and readmissions.",
      color: "blue",
    },
  ];

  const adminFeatures = [
    "Create and lock global recovery templates.",
    "Monitor compliance rates across all doctors.",
    "Identify at-risk patients before readmission.",
    "Generate audit-ready reports for legal defense.",
  ];

  const doctorFeatures = [
    "Assign pre-built exercise & questionnaire plans.",
    "Receive alerts only for non-compliant or high-pain patients.",
    "Visualize recovery trajectory instantly.",
    "Delegate day-to-day monitoring to nursing staff.",
  ];

  const patientFeatures = [
    "Apple Health & Google Fit integration (Steps, HR).",
    "Video-guided exercises with adherence logging.",
    "Daily pain score & symptom tracking.",
    "Secure chat for immediate complication triage.",
  ];

  const techFeatures = [
    { icon: Lock, title: "HIPAA Ready", desc: "Encryption at rest & transit" },
    { icon: Users, title: "RBAC", desc: "Strict role-based access" },
    {
      icon: LayoutTemplate,
      title: "Isolated Data",
      desc: "Hospital-scoped collections",
    },
    {
      icon: BarChart3,
      title: "99.9% Uptime",
      desc: "High availability SLA",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <SpineRecoveryPageHeader openContactForm={openContactForm} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden">
        <div className="container max-w-7xl mx-auto main-section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-200">
                <ShieldCheck className="h-4 w-4" />
                <span>Enterprise Risk Management System</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
                Standardize Post-Op{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
                  Spine Care Protocols
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Replace informal, doctor-dependent recovery with a hospital-wide
                standard. SpineRecovery Pro enables hospitals to enforce
                consistent workflows, objectively document compliance, and
                reduce medico-legal risk.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openContactForm}
                  className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-700/25 hover:shadow-blue-700/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
                >
                  Request Hospital Demo
                  <ChevronRight className="h-5 w-5" />
                </button>
                <button
                  onClick={openContactForm}
                  className="bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                >
                  <PhoneCall className="h-5 w-5 text-blue-700" />
                  Talk to SpineRecovery Pro
                </button>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>Audit-Ready Logs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>SaaS Deployment</span>
                </div>
              </div>
            </div>

            {/* Dashboard Visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-700 to-indigo-600 rounded-2xl opacity-20 blur-2xl"></div>
              <div className="relative bg-white rounded-xl shadow-2xl border border-gray-200 p-2">
                <div className="bg-gray-50 rounded-lg p-6 space-y-6">
                  {/* Header Mockup */}
                  <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                    <div>
                      <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-2"></div>
                      <div className="h-3 w-48 bg-gray-100 rounded"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xs">
                        85%
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded border border-gray-100 shadow-sm">
                      <div className="text-xs text-gray-400 font-semibold uppercase">
                        Compliance Rate
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mt-1">
                        94.2%
                      </div>
                      <div className="text-xs text-emerald-600 mt-1">
                        ↑ 12% vs last month
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border border-gray-100 shadow-sm">
                      <div className="text-xs text-gray-400 font-semibold uppercase">
                        Active Protocols
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mt-1">
                        1,240
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Standardized Workflows
                      </div>
                    </div>
                  </div>

                  {/* List Mockup */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-100">
                      <div className="h-8 w-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 w-3/4 bg-gray-200 rounded mb-1"></div>
                        <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-100">
                      <div className="h-8 w-8 bg-amber-100 rounded-full flex items-center justify-center">
                        <Activity className="h-4 w-4 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 w-3/4 bg-gray-200 rounded mb-1"></div>
                        <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="bg-white" id="solutions">
        <div className="container max-w-7xl mx-auto main-section-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The "Hidden" Risk in Post-Op Care
            </h2>
            <p className="text-lg text-gray-600">
              Most hospitals believe they manage recovery, but the reality is
              often informal, doctor-dependent, and impossible to audit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div
                  className={`bg-${problem.color}-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6`}
                >
                  <problem.icon
                    className={`h-6 w-6 text-${problem.color}-600`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Value / Feature Showcase */}
      <section className="bg-slate-900 text-white" id="features">
        <div className="container max-w-7xl mx-auto main-section-padding">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              A System of Record for Recovery
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              SpineRecovery Pro isn't just an app; it's a B2B SaaS platform
              designed to align hospital administration, clinical teams, and
              patient behavior.
            </p>
          </div>

          {/* For Hospital Admins */}
          <div className="space-y-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 text-blue-400 font-semibold mb-4">
                  <Building2 className="h-5 w-5" />
                  <span>FOR HOSPITAL ADMINS</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">
                  Enforce Hospital-Wide Standards
                </h3>
                <ul className="space-y-4">
                  {adminFeatures.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                <div className="flex justify-between items-end mb-6">
                  <div className="space-y-2">
                    <div className="h-4 w-32 bg-slate-600 rounded"></div>
                    <div className="h-6 w-48 bg-slate-500 rounded"></div>
                  </div>
                  <div className="bg-blue-600 text-xs px-2 py-1 rounded">
                    Admin View
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-24 bg-slate-700/50 rounded-lg border border-slate-600 w-full"></div>
                  <div className="h-24 bg-slate-700/50 rounded-lg border border-slate-600 w-full"></div>
                  <div className="h-24 bg-slate-700/50 rounded-lg border border-slate-600 w-full"></div>
                </div>
              </div>
            </div>

            {/* Feature 2: For Doctors */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-slate-800 rounded-xl p-8 border border-slate-700 relative overflow-hidden">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-700 h-20 rounded-lg"></div>
                  <div className="bg-slate-700 h-20 rounded-lg"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-600"></div>
                    <div className="flex-1 space-y-2 py-1">
                      <div className="h-3 bg-slate-600 w-3/4 rounded"></div>
                      <div className="h-2 bg-slate-700 w-1/2 rounded"></div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-600"></div>
                    <div className="flex-1 space-y-2 py-1">
                      <div className="h-3 bg-slate-600 w-3/4 rounded"></div>
                      <div className="h-2 bg-slate-700 w-1/2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 text-emerald-400 font-semibold mb-4">
                  <Stethoscope className="h-5 w-5" />
                  <span>FOR DOCTORS & NURSES</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">
                  Automated Patient Monitoring
                </h3>
                <ul className="space-y-4">
                  {doctorFeatures.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 3: Patient Compliance */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 text-purple-400 font-semibold mb-4">
                  <Smartphone className="h-5 w-5" />
                  <span>OBJECTIVE DOCUMENTATION</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">
                  Validating Patient Adherence
                </h3>
                <p className="text-slate-400 mb-6">
                  Subjective claims of "I rested" are replaced with objective
                  data points.
                </p>
                <ul className="space-y-4">
                  {patientFeatures.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-purple-500 shrink-0 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 flex justify-center items-center">
                <div className="w-64 h-[500px] border-4 border-slate-700 rounded-3xl bg-slate-950 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 w-full h-full bg-slate-800 p-4 space-y-4">
                    <div className="w-full h-40 bg-slate-700 rounded-xl mb-4"></div>
                    <div className="w-full h-12 bg-blue-900/40 border border-blue-700/50 rounded-lg flex items-center px-4">
                      <div className="w-2/3 h-2 bg-blue-600 rounded"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-24 bg-slate-700 rounded-lg"></div>
                      <div className="h-24 bg-slate-700 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Tech Stack */}
      <section className="bg-gray-50 border-t border-gray-200" id="security">
        <div className="container max-w-7xl mx-auto main-section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Architecture
            </h2>
            <p className="text-lg text-gray-600">
              Built for security, scalability, and hospital integration.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {techFeatures.map((feature, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-blue-300 transition-colors"
              >
                <feature.icon className="h-8 w-8 text-blue-700 mb-4" />
                <h4 className="font-bold text-gray-900 mb-1">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white"
        id="contact"
      >
        <div className="container max-w-7xl mx-auto main-section-padding text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Stop Managing Recovery with Paper & Memory
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join forward-thinking hospitals using SpineRecovery Pro to
            standardize care, reduce liability, and improve patient outcomes.
          </p>

          <div className="relative max-w-2xl w-full mx-auto mt-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/0 rounded-3xl blur opacity-30"></div>
            <div className="relative bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Ready to modernize care?
                  </h3>
                  <p className="text-blue-100 text-sm">
                    Join 20+ forward-thinking medical centers
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <button
                    onClick={openContactForm}
                    className="px-8 py-4 bg-white text-blue-700 rounded-xl font-bold hover:bg-blue-50 hover:scale-[1.02] active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    Request Hospital Demo
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={openContactForm}
                    className="px-8 py-4 bg-blue-800 text-white rounded-xl font-bold hover:bg-blue-900 transition-all border border-white/10 flex items-center justify-center gap-2"
                  >
                    Talk to Team
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-8 text-white/60 text-xs font-medium uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-emerald-400"></div>
                Limited Spots
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                Launch Q1 2026
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-purple-400"></div>
                Early Access
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SpineRecoveryFooter />

      {/* Hospital Contact Form Modal */}
      <HospitalContactForm
        isOpen={isContactFormOpen}
        onClose={closeContactForm}
      />
    </div>
  );
};

export default SpineRecoveryPro;
