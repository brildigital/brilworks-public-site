"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  BarChart3,
  Lock,
  Clock,
  DollarSign,
  Building2,
  Star,
  Award,
  RefreshCw,
  MessageCircle,
  LifeBuoy,
  ArrowRight,
} from "lucide-react";
import AboutOurExpertise from "../Services/AboutOurExpertise";
import MultipleCardInGrid from "../Common/MultipleCardInGrid";
import SolutionContactForm from "./SolutionContactForm";
import IndustryMidCTA from "./IndustryMidCTA";
import IndustryTrustBar from "./IndustryTrustBar";
import "../../styles/ServiceLightTheme.css";

const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));

const ServicesSection = dynamic(() => import("../Common/ServicesSection"));

const MultipleCardWithIconBG = dynamic(
  () => import("../Common/MultipleCardWithIconBG"),
);
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));

const HRSoftwareDevelopment = () => {
  const trustBarItems = [
    { icon: ShieldCheck, label: "AWS Consulting Partner" },
    { icon: Users, label: "8+ Years of HR Software Experience" },
    { icon: BarChart3, label: "98% Project Success Rate" },
    { icon: Lock, label: "HRIS & GDPR Compliance" },
  ];

  const heroStats = [
    { value: "120+", label: "Products Shipped" },
    { value: "25+", label: "HR Platforms" },
    { value: "50K+", label: "Employees Managed" },
    { value: "98%", label: "Client Retention" },
  ];

  const hrServices1 = {
    title: "What We Build for HR Teams",
    servicesList: [
      {
        title: "Applicant Tracking Systems",
        iconSrc: "/images/v2/people-icon-vector.svg",
        value: "hr-service1-2",
        description:
          "Post jobs, collect applications, screen candidates, schedule interviews, and manage your hiring pipeline from one dashboard.",
        imageSrc: "/images/v2/applicant-tracking-systems.webp",
        imageAlt: "Applicant Tracking Systems image",
      },
      {
        title: "Employee Onboarding Platforms",
        iconSrc: "/images/v2/calendar-icon.svg",
        value: "hr-service1-3",
        description:
          "Digital paperwork, training schedules, equipment requests, and first-week tasks that new hires complete before day one.",
        imageSrc: "/images/v2/employee-onboarding-platforms.webp",
        imageAlt: "Employee Onboarding Platforms image",
      },
      {
        title: "Performance Management Tools",
        iconSrc: "/images/v2/data-driven-icon.svg",
        value: "hr-service1-4",
        description:
          "Set goals, track progress, schedule reviews, collect 360 feedback, and document performance conversations throughout the year.",
        imageSrc: "/images/v2/performance-management-tools.webp",
        imageAlt: "Performance Management Tools image",
      },
      {
        title: "Time & Attendance Systems",
        iconSrc: "/images/v2/clock-icon.svg",
        value: "hr-service1-5",
        description:
          "Clock in/out, PTO requests, shift scheduling, overtime tracking, and attendance reports that sync with payroll.",
        imageSrc: "/images/v2/time-attendance-systems.webp",
        imageAlt: "Time & Attendance Systems image",
      },
      {
        title: "Employee Self-Service Portals",
        iconSrc: "/images/v2/interactive-ui-icon.svg",
        value: "hr-service1-6",
        description:
          "Let employees update their information, download pay stubs, request time off, view benefits, and access company documents.",
        imageSrc: "/images/v2/employee-self-service-portals.webp",
        imageAlt: "Employee Self-Service Portals image",
      },
    ],
  };
  const hrServices2 = {
    title: "What We Build to Empower HR Teams",
    servicesList: [
      {
        title: "Learning Management Systems",
        iconSrc: "/images/v2/read-icon.svg",
        value: "hr-service2-7",
        description:
          "Assign training courses, track completion, test knowledge, manage certifications, and maintain compliance records.",
        imageSrc: "/images/v2/learning-management-systems.webp",
        imageAlt: "Learning Management Systems image",
      },
      {
        title: "Payroll Integration Software",
        iconSrc: "/images/v2/api-integration-icon.svg",
        value: "hr-service2-8",
        description:
          "Connect your HR system to payroll providers so employee data, hours, and deductions flow automatically.",
        imageSrc: "/images/v2/payroll-integration-software.webp",
        imageAlt: "Payroll Integration Software image",
      },
      {
        title: "Benefits Administration Platforms",
        iconSrc: "/images/v2/crm-icon.svg",
        value: "hr-service2-9",
        description:
          "Enrollment workflows, plan comparisons, life event changes, and open enrollment that employees can complete online.",
        imageSrc: "/images/v2/benefits-administration-platforms.webp",
        imageAlt: "Benefits Administration Platforms image",
      },
      {
        title: "Recruitment Marketing Tools",
        iconSrc: "/images/v2/social-integration-icon.svg",
        value: "hr-service2-10",
        description:
          "Career site builders, job board integrations, candidate nurture campaigns, and employer brand content management.",
        imageSrc: "/images/v2/recruitment-marketing-tools.webp",
        imageAlt: "Recruitment Marketing Tools image",
      },
      {
        title: "HR Analytics Dashboards",
        iconSrc: "/images/v2/analytics-reporting-icon.svg",
        value: "hr-service2-11",
        description:
          "Headcount reports, turnover analysis, time-to-hire metrics, diversity data, and compensation insights in real-time.",
        imageSrc: "/images/v2/hr-analytics-dashboards.webp",
        imageAlt: "HR Analytics Dashboards image",
      },
    ],
  };

  const hrServiceEngagementData = [
    {
      title: "Time & Material",
      icon: <Clock size={32} color="#1A5CCC" strokeWidth={1.75} />,
      description:
        "Pay for actual development hours. Works well when you're not entirely sure what features you'll need until you see the first version working.",
    },
    {
      title: "Fixed Cost",
      icon: <DollarSign size={32} color="#1A5CCC" strokeWidth={1.75} />,
      description:
        "One agreed price for a defined set of features. Best when you know exactly what you want built and the scope won't change.",
    },
    {
      title: "Staff Augmentation",
      icon: <Users size={32} color="#1A5CCC" strokeWidth={1.75} />,
      description:
        "Our developers work as part of your existing team, following your sprint cycles and using your project management tools.",
    },
    {
      title: "Dedicated Development Team",
      icon: <Building2 size={32} color="#1A5CCC" strokeWidth={1.75} />,
      description:
        "A complete team assigned only to your project—developers, designers, testers, and a project manager who keeps everything moving.",
    },
  ];

  const whyChooseUsDevelopmentData = {
    title: "Why HR Teams Choose Brilworks",
    benefits: [
      {
        title: "Top-Rated Developers",
        icon: <Star size={28} color="#1A5CCC" strokeWidth={1.75} />,
        description:
          "Our developers consistently receive top ratings for code quality, communication, and meeting deadlines.",
      },
      {
        title: "HR Domain Knowledge",
        icon: <Award size={28} color="#1A5CCC" strokeWidth={1.75} />,
        description:
          "We've built recruitment platforms, employee portals, and management tools. We understand HRIS workflows, compliance needs, and what HR teams actually do all day.",
      },
      {
        title: "Agile & Transparent",
        icon: <RefreshCw size={28} color="#1A5CCC" strokeWidth={1.75} />,
        description:
          "You see working software every two weeks, not mockups or promises. We adjust based on feedback from your HR team as we build.",
      },
      {
        title: "Clear Communication",
        icon: <MessageCircle size={28} color="#1A5CCC" strokeWidth={1.75} />,
        description:
          "We explain technical tradeoffs in plain English. No jargon, no making you feel stupid for asking questions.",
      },
      {
        title: "Post-Launch Support",
        icon: <LifeBuoy size={28} color="#1A5CCC" strokeWidth={1.75} />,
        description:
          "Your HR needs change as you grow. We stick around to add features, fix issues, train new users, and keep the software working as your team evolves.",
      },
    ],
  };

  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden svc-hero-bg"
        style={{ padding: "120px 0 80px" }}
      >
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-[60px] items-center">
            <div>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 text-[12px] font-semibold uppercase border"
                style={{
                  background: "#ffffff",
                  borderColor: "#e4eaf1",
                  color: "#566678",
                  letterSpacing: "0.1em",
                  boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)",
                }}
              >
                HR Software Development Services
              </span>
              <h1
                className="font-extrabold mb-5"
                style={{
                  fontSize: "clamp(34px, 4vw, 54px)",
                  letterSpacing: "-1.5px",
                  lineHeight: 1.1,
                  color: "#0b1e33",
                }}
              >
                Custom <span style={{ color: "#2f6bff" }}>HR Software</span>{" "}
                Development
              </h1>
              <p
                className="mb-8"
                style={{
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: "#566678",
                  maxWidth: 580,
                }}
              >
                Custom software for human resources teams. We build applicant
                tracking systems, employee management platforms, payroll
                integrations, performance review tools, and onboarding
                applications.
              </p>
              <div className="flex flex-wrap gap-3.5 my-10">
                <Link
                  href="#section-contact-form"
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{
                    background: "#2f6bff",
                    color: "#fff",
                    border: "1px solid #2f6bff",
                    padding: "16px 32px",
                    fontSize: 16,
                  }}
                >
                  Start Your App Journey <ArrowRight size={16} strokeWidth={2} />
                </Link>
                <Link
                  href="/portfolio/"
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-black/5"
                  style={{
                    background: "transparent",
                    color: "#0b1e33",
                    border: "1px solid #e4eaf1",
                    padding: "16px 32px",
                    fontSize: 16,
                  }}
                >
                  See Our Work
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {heroStats.map((s) => (
                  <div
                    key={s.label}
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
                      {s.value}
                    </div>
                    <div
                      style={{
                        color: "#6b7a8a",
                        fontSize: 13,
                        fontWeight: 500,
                        lineHeight: 1.4,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <IndustryTrustBar items={trustBarItems} />
      <AboutOurExpertise
        title="About Brilworks HR Solutions"
        description1="For 8 years, we've been building software for HR departments that need technology to match their workflows. Your HR team shouldn't spend half their day updating spreadsheets, chasing signatures, or copying data between systems."
        description2={
          <>
            Most HR software forces you to change how you work. We do the
            opposite—we build around your existing processes. Whether you're
            hiring 5 people a year or 50, managing remote teams across time
            zones, or just trying to get performance reviews done without the
            annual scramble, we create tools that fit.
            <br />
            <br />
            We've completed 120+ projects with a 98% success rate. HR teams pick
            us because we ask about their daily frustrations before writing any
            code.
          </>
        }
      />

      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="services-one"
        serviceData={hrServices1}
      />
      <ServicesSection
        bgClass="bg-sectionBG"
        sectionId="services-two"
        imageOnLeft={true}
        serviceData={hrServices2}
      />
      <IndustryMidCTA
        title="Ready to Build Your HR Platform?"
        description="Get a free consultation and project estimate. We respond within 24 hours."
        light
      />
      <MultipleCardInGrid
        title="How We Work With You"
        cardData={hrServiceEngagementData}
        buttonText="Know More"
        redirect="/contact-us/"
      />
      <MultipleCardWithIconBG
        bgClass="bg-sectionBG"
        data={whyChooseUsDevelopmentData}
      />
      <ClientReviews light />
      <SeeingBelieving />
      <SolutionContactForm
        title="Ready to Build Your HR Platform?"
        description="You're one conversation away from automating your HR workflows and freeing your team from manual processes."
        submitLabel="Get My Free HR Consultation"
        benefits={[
          "Free 30-minute consultation with an HR tech specialist",
          "Detailed project proposal within 48 hours",
          "48-hour risk-free trial — no commitment",
          "Response guaranteed within 24 business hours",
          "HRIS integration and compliance guidance included",
        ]}
        bgClassName="svc-mid-cta-bg"
      />
      <HomePageBlogs />
    </>
  );
};

export default HRSoftwareDevelopment;
