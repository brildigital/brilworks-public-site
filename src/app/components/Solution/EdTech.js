"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";
import {
  faReact,
  faAngular,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { ShieldCheck, GraduationCap, Users, Lock } from "lucide-react";
import SolutionHeroSection from "./SolutionHeroSection";
import ServicesSection from "../Common/ServicesSection";
import MultipleCardWithIconBG from "../Common/MultipleCardWithIconBG";
import IndustryMidCTA from "./IndustryMidCTA";
import IndustryTrustBar from "./IndustryTrustBar";

const EdTechFAQs = dynamic(() => import("./SolutionFAQ"));
const SolutionContactForm = dynamic(() => import("./SolutionContactForm"));
const TechStackWeWorkWith = dynamic(
  () => import("../Technologies/TechStackWeWorkWith"),
  { ssr: false }
);
const SolutionEngagementAndHowCanStart = dynamic(() =>
  import("./SolutionEngagementAndHowCanStart")
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));

const EdTech = () => {
  const heroStats = [
    { value: "120+", label: "Products Shipped" },
    { value: "15+", label: "EdTech Platforms" },
    { value: "500K+", label: "Learners Served" },
    { value: "98%", label: "Client Retention" },
  ];

  const trustBarItems = [
    { icon: ShieldCheck, label: "AWS Consulting Partner" },
    { icon: GraduationCap, label: "15+ EdTech Platforms" },
    { icon: Users, label: "500K+ Learners Served" },
    { icon: Lock, label: "COPPA, FERPA & GDPR Ready" },
  ];

  const edTechServices1 = {
    title: "Our EdTech Development Solutions",
    desc: "End-to-end education technology solutions — from e-learning platforms to AI-driven adaptive learning systems.",
    buttonText: "Build My EdTech App",
    servicesList: [
      {
        title: "E-Learning Platform Development",
        iconSrc: "/images/v2/read-icon.svg",
        description:
          "End-to-end e-learning platforms with online courses, content delivery, video streaming, and student assessments. Built for scale from day one.",
        value: "e-learning-platform-development",
        btnText: "Build My Platform",
      },
      {
        title: "Learning Management System (LMS) Development",
        iconSrc: "/images/v2/experience-in- education-icon.svg",
        description:
          "Custom LMS with role-based access, gamification, progress tracking, and attendance management. Simplify training for any organization size.",
        value: "lms-development",
        btnText: "Build My LMS",
      },
      {
        title: "Mobile Learning App Development",
        iconSrc: "/images/v2/interactive-ui-icon.svg",
        description:
          "Cross-platform iOS & Android apps for on-the-go learning, exam preparation, and micro-courses. React Native & Flutter expertise.",
        value: "mobile-learning-app-development",
        btnText: "Build My App",
      },
      {
        title: "School & University Management Software",
        iconSrc: "/images/v2/calendar-icon.svg",
        description:
          "Automate admissions, scheduling, grading, and teacher-parent-student communication. Replace spreadsheets with a unified platform.",
        value: "school-university-management-software",
        btnText: "Build My System",
      },
      {
        title: "Virtual Classroom & Video Learning Platforms",
        iconSrc: "/images/v2/play-theme-icon.svg",
        description:
          "Real-time teaching with video conferencing, whiteboard, screen sharing, and recording. Zoom, Twilio, and custom WebRTC integrations.",
        value: "virtual-classroom-video-learning-platforms",
        btnText: "Build My Classroom",
      },
      {
        title: "Adaptive & AI-Driven Learning Solutions",
        iconSrc: "/images/v2/data-driven-icon.svg",
        description:
          "Intelligent systems that analyze learner behavior and personalize content paths. AI-powered assessments, recommendations, and analytics.",
        value: "adaptive-ai-learning-solutions",
        btnText: "Explore AI Solutions",
      },
      {
        title: "Custom EdTech Platform Development",
        iconSrc: "/images/v2/developer-icon.svg",
        description:
          "Have a unique EdTech idea? We build tailored solutions from MVP to enterprise. Your vision, our engineering — EdTech MVP development in 10-20 weeks.",
        value: "custom-edtech-platform-development",
        btnText: "Start My Project",
      },
    ],
  };

  const whyChooseUs = {
    title: "Why EdTech Founders Choose Us",
    benefits: [
      {
        title: "EdTech Domain Expertise",
        description:
          "15+ EdTech platforms built. We understand learner journeys, educator workflows, and compliance (COPPA, FERPA, GDPR).",
        icon: "/images/v2/experience-in- education-icon.svg",
      },
      {
        title: "Scalable Architecture",
        description:
          "Cloud-native, microservices-based architecture designed for large learner volumes. Auto-scaling from 100 to 1M+ users.",
        icon: "/images/v2/scalable-architecture-icon.svg",
      },
      {
        title: "Data-Driven Design",
        description:
          "Built-in analytics dashboards, learner behavior tracking, and engagement metrics. Data-informed decisions from day one.",
        icon: "/images/v2/data-driven-icon.svg",
      },
      {
        title: "User-First Approach",
        description:
          "UX research with real educators and learners. High adoption rates because we design for how people actually learn.",
        icon: "/images/v2/user-first-approach-icon.svg",
      },
      {
        title: "Ongoing Support",
        description:
          "Post-launch maintenance, performance optimization, and feature iterations. Your platform grows with your user base.",
        icon: "/images/v2/ongoing-support-icon.svg",
      },
    ],
  };

  const techStackList = [
    {
      title: "Frontend",
      value: "frontend",
      items: [
        { label: "ReactJS", icon: faReact, color: "#61DBFB" },
        { label: "AngularJS", icon: faAngular, color: "#DD0031" },
        { label: "VueJS", icon: faVuejs, color: "#42B883" },
      ],
    },
    {
      title: "Backend",
      value: "backend",
      items: [
        { label: "Python", iconifyIcon: "/images/python.svg" },
        { label: "NodeJS", iconifyIcon: "/images/node-icon.svg" },
        { label: "Java", iconifyIcon: "/images/java.svg" },
      ],
    },
    {
      title: "Mobile",
      value: "mobile-development",
      items: [
        { label: "React Native", icon: faReact, color: "#61DBFB" },
        { label: "Flutter", iconifyIcon: "/images/flutter.svg" },
        { label: "Swift", iconifyIcon: "/images/swift-language.svg" },
        { label: "Kotlin", iconifyIcon: "/images/kotlin-icon.svg" },
      ],
    },
    {
      title: "Databases",
      value: "databases",
      items: [
        { label: "MongoDB", iconifyIcon: "/images/mongodb.svg" },
        { label: "PostgreSQL", iconifyIcon: "/images/postgresql.svg" },
        { label: "Firebase", iconifyIcon: "/images/firebase-icon.svg" },
      ],
    },
    {
      title: "Integrations",
      value: "integrations",
      items: [
        { label: "Payment Gateways" },
        { label: "Video APIs (Zoom, Twilio)" },
        { label: "LMS APIs" },
        { label: "AI/ML Models" },
        { label: "ERP Connectors" },
      ],
    },
    {
      title: "Cloud",
      value: "cloud-devops",
      items: [
        { label: "AWS", iconifyIcon: "/images/aws.svg" },
        { label: "Azure", iconifyIcon: "/images/azure.svg" },
        {
          label: "Google Cloud Platform",
          iconifyIcon: "/images/v2/google-cloud-icon.svg",
        },
      ],
    },
  ];

  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => window.removeEventListener("scroll", scrollEffect);
  }, []);

  return (
    <>
      <SolutionHeroSection
        technologyText="EdTech Software Development Services"
        title='Build Your <span class="bg-gradient-to-r from-[#017eeb] to-[#00ffff] bg-clip-text" style="--tw-gradient-from:#017eeb;--tw-gradient-to:#00ffff;-webkit-background-clip:text;-webkit-text-fill-color:transparent">EdTech Platform</span> — Launch in 10-20 Weeks'
        description="From MVP to enterprise — we build custom LMS, e-learning platforms, and AI-powered education apps. Your EdTech startup development partner for scalable, compliant software."
        imageSrc="/images/v2/EdTech-Software-Development-Services-banner.webp"
        buttonText="Get My Free Consultation"
        stats={heroStats}
      />
      <IndustryTrustBar items={trustBarItems} />
      <ServicesSection sectionId="services-one" serviceData={edTechServices1} />
      <IndustryMidCTA
        title="Ready to Build an EdTech App?"
        description="Get a free consultation and project estimate. We respond within 24 hours."
      />
      <TechStackWeWorkWith
        active="frontend"
        title="Technologies We Use"
        techStackList={techStackList}
      />
      <MultipleCardWithIconBG data={whyChooseUs} />
      <ClientReviews />
      <SolutionEngagementAndHowCanStart />
      <EdTechFAQs />
      <SolutionContactForm
        title="Ready to Build Your EdTech Platform?"
        description="You're one conversation away from turning your EdTech idea into a scalable platform. Tell us what you're building — we'll show you how we can help."
        messageRequired={false}
        submitLabel="Get My Free EdTech Consultation"
        benefits={[
          "Free 30-minute consultation with an EdTech specialist",
          "Detailed project proposal within 48 hours",
          "48-hour risk-free trial — no commitment",
          "Response guaranteed within 24 business hours",
          "COPPA, FERPA & GDPR compliance built in",
        ]}
      />
    </>
  );
};

export default EdTech;
