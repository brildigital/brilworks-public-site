"use client";
import React from "react";
import Heading from "../HTMLComponents/Heading";
import ButtonV2 from "../Common/ButtonV2";
import Link from "next/link";
import Image from "next/image";
import "../../styles/ServiceLightTheme.css";
import {
  Zap,
  MessageSquare,
  LayoutGrid,
  Cloud,
  Clock,
  ImageIcon,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";

const tools = [
  {
    title: "AI Insights & Automation",
    description:
      "Cut manual work by 80%. Connect your apps, trigger smart workflows, and free your team to focus on growth — powered by n8n and AI, no code needed.",
    image: "/images/v2/ai-insights-and-automation.webp",
    link: "/ai-tools/ai-insights-and-automation",
    icon: Zap,
    iconBg: "bg-blue-50",
    iconColor: "text-[#017eeb]",
    accentColor: "#017eeb",
  },
  {
    title: "AI Chatbot & Conversational Solutions",
    description:
      "Resolve 70% of support tickets automatically. Deploy intelligent chatbots for sales, onboarding, and 24/7 customer support — human-like, always on.",
    image: "/images/v2/ai-chatbot-conversational-solutions.webp",
    link: "/ai-tools/ai-chatbot-conversational-solution",
    icon: MessageSquare,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    badge: "Most Popular",
    accentColor: "#4f46e5",
  },
  {
    title: "Pre-Built Solutions",
    description:
      "Launch 5x faster with production-ready platforms. Dating apps, fitness trackers, healthcare systems, taxi platforms — customizable and ready to deploy.",
    image: "/images/v2/pre-build-ai-automation-solutions.webp",
    link: "/ai-tools/pre-build-solutions",
    icon: LayoutGrid,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    accentColor: "#10b981",
  },
  {
    title: "AWS Partner Solutions",
    description:
      "Enterprise-grade reliability, backed by AWS. Scale applications, optimize cloud costs, and deploy AI with the infrastructure that Fortune 500s trust.",
    image: "/images/v2/aws-partner-solutions.webp",
    link: "/contact-us/?ref=aws-partner",
    icon: Cloud,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    accentColor: "#d97706",
  },
  {
    title: "MVP in 48 Hours",
    description:
      "Validate before you invest. Get a working, demoable Minimum Viable Product in 48 hours — powered by AI and rapid prototyping. Perfect for startups.",
    image: "/images/v2/mvp-in-48-hours.webp",
    link: "/mvp-in-48-hours/",
    icon: Clock,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    accentColor: "#0d9488",
  },
  {
    title: "Free Mockups",
    description:
      "Impress stakeholders from day one. Download free, high-quality design mockups for apps, websites, and pitch decks — ready to use instantly.",
    image: "/images/v2/free-mockups.webp",
    link: "/free-mockups/",
    icon: ImageIcon,
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-700",
    accentColor: "#0891b2",
  },
];

const stats = [
  { number: "120+", label: "Projects Delivered" },
  { number: "98%", label: "Project Success Rate" },
  { number: "30+", label: "AI Agents Live" },
  { number: "50+", label: "Happy Clients" },
];

const allTestimonials = [
  {
    quote:
      "Brilworks team members are an excellent group of professionals. Excellent knowledge of Java, Spring Boot, DB, and DevOps. Dedicated, available, and communication is excellent!",
    author: "Golan",
    role: "Director of R&D, Trackimo",
    initials: "G",
    avatarBg: "bg-[#1A5CCC]",
    meta: "3+ year relationship",
    source: "Clutch",
  },
  {
    quote:
      "I have been working with Brilworks for more than 4 years and could not be happier with the quality of their work and the support provided. The best part is they're always available.",
    author: "David Velasquez",
    role: "CEO, Rastrack",
    initials: "D",
    avatarBg: "bg-[#0891b2]",
    meta: "4+ year relationship",
    source: "Clutch",
  },
  {
    quote:
      "They were always attentive to adapt to the new development processes of our company. Great technical skills and exceptional communication throughout the engagement.",
    author: "COO",
    role: "Eccocar, Spain",
    initials: "E",
    avatarBg: "bg-[#7c3aed]",
    meta: "Clutch Verified",
    source: "Clutch",
  },
  {
    quote:
      "It was a pleasure working with the team at Brilworks Software. They are incredibly professional, delivered on time, and were very proactive in their communication.",
    author: "Founder & CEO",
    role: "Acenonyx",
    initials: "A",
    avatarBg: "bg-[#0d9488]",
    meta: "Clutch Verified",
    source: "Clutch",
  },
];

const clientNames = ["Rastrack", "Lyfecoin", "Orokii", "Tekstride", "Trackimo"];

const trustBadges = [
  { value: "5.0 / 5.0", label: "22 Clutch Reviews" },
  { value: "97% Job Success", label: "Upwork Verified" },
  { value: "Top 10 Agency", label: "SelectedFirms" },
];

const AITools = () => {
  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="svc-hero-bg relative overflow-hidden">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5 relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-[60px] items-center">
            <div>
              {/* Eyebrow */}
              <span
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-widest uppercase mb-7"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e4eaf1",
                  color: "#566678",
                  boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                AWS CERTIFIED PARTNER
              </span>

              {/* H1 */}
              <Heading
                type="h1"
                className="text-[#0b1e33] !font-extrabold max-w-[780px]"
                text={
                  <>
                    AI-Powered Solutions{" "}
                    <span className="text-[#2f6bff]">
                      Built for Your Business
                    </span>
                    <br className="md:block hidden" /> — Deploy in Days, Not
                    Months
                  </>
                }
              />

              {/* Subtitle */}
              <p className="text-[#566678] lg:text-lg md:text-base text-base !mt-6 max-w-[600px] leading-relaxed">
                From intelligent chatbots to workflow automation, Brilworks
                builds and deploys AI solutions that cut costs, save time, and
                scale with you. No bloated timelines. No black-box AI. Just
                results.
              </p>

              {/* CTAs */}
              <div className="flex gap-4 flex-wrap mt-10">
                <ButtonV2
                  redirect="/contact-us/"
                  label="Book a Free AI Consultation"
                  className="hover:!text-colorWhite"
                  icon={<ArrowRight className="w-4 h-4" />}
                />
                <a
                  href="#solutions"
                  className="c-button c-btn-medium outline-none overflow-hidden whitespace-nowrap transition-all duration-300 border border-[#e4eaf1] text-[#0b1e33] hover:bg-black/5"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("solutions")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore Solutions
                </a>
              </div>

              {/* Trust strip */}
              <div className="flex flex-wrap gap-5 mt-10 pt-6 border-t border-[#e4eaf1]">
                {[
                  "120+ Projects Delivered",
                  "98% Success Rate",
                  "30+ AI Agents Live",
                  "Deploy in 48 Hours",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-[#6b7a8a] text-sm font-medium"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats grid — right side */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl transition-all svc-stat-card"
                    style={{ padding: "28px 24px" }}
                  >
                    <div
                      className="font-extrabold leading-none mb-2"
                      style={{
                        color: "#2f6bff",
                        fontSize: "clamp(32px, 3vw, 42px)",
                        letterSpacing: "-1px",
                      }}
                    >
                      {stat.number}
                    </div>
                    <div
                      style={{
                        color: "#6b7a8a",
                        fontSize: 13,
                        fontWeight: 500,
                        lineHeight: 1.4,
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SOLUTIONS GRID ═══════════════════ */}
      <section id="solutions" className="bg-white py-16 md:py-24">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          {/* Section header */}
          <div className="mb-14">
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#017eeb] block mb-3">
              OUR AI SOLUTIONS
            </span>
            <Heading
              type="h2"
              className="!font-extrabold text-gray-900"
              text="Everything You Need to Build with AI"
            />
            <p className="text-[17px] text-gray-500 mt-3 max-w-[560px] leading-relaxed">
              Production-ready AI solutions, from chatbots and automation to
              full MVPs. Pick a solution, or let us build something custom.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.title}
                  href={tool.link}
                  className="group relative rounded-2xl border border-gray-200 hover:border-[#017eeb] transition-all duration-300 bg-white overflow-hidden flex flex-col"
                >
                  {/* Badge */}
                  {tool.badge && (
                    <span className="absolute top-4 right-4 z-10 bg-gradient-to-r from-[#007aeb] via-[#008ce7] to-[#00dbd3] text-white text-[10px] font-bold tracking-wide px-3 py-1 rounded-full uppercase">
                      {tool.badge}
                    </span>
                  )}

                  {/* Image */}
                  <div className="overflow-hidden">
                    <Image
                      src={tool.image}
                      alt={tool.title}
                      width={400}
                      height={220}
                      className="w-full h-[220px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-[14px] ${tool.iconBg} mb-4`}
                    >
                      <Icon className={`w-6 h-6 ${tool.iconColor}`} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight leading-snug">
                      {tool.title}
                    </h3>
                    <p className="text-[15px] text-gray-500 leading-relaxed mb-5 flex-1">
                      {tool.description}
                    </p>

                    {/* CTA */}
                    <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#017eeb] group-hover:gap-2.5 transition-all">
                      Explore
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>

                  {/* Bottom accent line on hover */}
                  <div
                    className="h-[3px] w-0 group-hover:w-full transition-all duration-300 ease-out"
                    style={{ backgroundColor: tool.accentColor }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SOCIAL PROOF ═══════════════════ */}
      <section className="bg-[#fafafa] py-16 md:py-20">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#017eeb] block mb-3">
              TRUSTED BY TEAMS WORLDWIDE
            </span>
            <Heading
              type="h2"
              className="!font-extrabold text-gray-900"
              text="Companies That Build with Brilworks"
            />
          </div>

          {/* Client strip */}
          <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap mb-10">
            {clientNames.map((name) => (
              <span
                key={name}
                className="text-xl md:text-2xl font-extrabold text-gray-300 tracking-tight select-none"
              >
                {name}
              </span>
            ))}
          </div>

          {/* Trust badges row */}
          <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap mb-14">
            {trustBadges.map((badge, i) => (
              <React.Fragment key={badge.label}>
                {i > 0 && (
                  <div className="w-px h-10 bg-gray-200 hidden md:block" />
                )}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-bold text-gray-800">
                      {badge.value}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">{badge.label}</div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[960px] mx-auto">
            {allTestimonials.map((t) => (
              <div
                key={t.author}
                className="border border-gray-200 rounded-2xl p-7 bg-white hover:border-[#017eeb] transition-all duration-300"
              >
                {/* Stars + source */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-amber-400 text-base tracking-wider">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    {t.source}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-[15px] text-gray-700 leading-relaxed mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {t.author}
                    </p>
                    <p className="text-xs text-gray-500 truncate">{t.role}</p>
                  </div>
                </div>

                {/* Meta */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <span className="text-[11px] text-gray-400 font-medium">
                    {t.meta}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ BOTTOM CTA ═══════════════════ */}
      <section className="svc-mid-cta-bg relative overflow-hidden py-16 md:py-20">
        <div className="svc-mid-cta-glow absolute inset-0 pointer-events-none" />

        <div className="container max-w-[1280px] mx-auto md:px-10 px-5 text-center relative z-10">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#00b4d8] block mb-4">
            LET&apos;S BUILD TOGETHER
          </span>
          <Heading
            type="h2"
            className="text-white !font-extrabold mb-4"
            text="Ready to Build with AI?"
          />
          <p className="text-white/80 text-[17px] leading-relaxed max-w-[560px] mx-auto mb-10">
            120+ projects delivered. 98% success rate. 8+ years of engineering
            excellence. Tell us what you&apos;re building, and our AI engineers
            will scope it, recommend the right approach, and give you a
            timeline. For free.
          </p>
          <div className="flex justify-center gap-4 flex-wrap mt-7">
            <ButtonV2
              redirect="/contact-us/"
              label="Book a Free AI Consultation"
              className="hover:!text-themeColor"
              icon={<ArrowRight className="w-4 h-4" />}
            />
            <Link
              href="/mvp-in-48-hours/"
              className="c-button c-btn-medium outline-none overflow-hidden whitespace-nowrap transition-all duration-300 border border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              Get an MVP in 48 Hours
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AITools;
