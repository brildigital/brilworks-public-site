"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";
import {
  faReact,
  faAngular,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import SolutionHeroSection from "./SolutionHeroSection";
import ServicesSection from "../Common/ServicesSection";
import MultipleCardWithIconBG from "../Common/MultipleCardWithIconBG";

const EdTechFAQs = dynamic(() => import("./SolutionFAQ"));
const SolutionContactForm = dynamic(() => import("./SolutionContactForm"));
const TechStackWeWorkWith = dynamic(() =>
  import("../Technologies/TechStackWeWorkWith")
);
const SolutionEngagementAndHowCanStart = dynamic(() =>
  import("./SolutionEngagementAndHowCanStart")
);

const EdTech = () => {
  const edTechServices1 = {
    title: "Our EdTech Development Solutions",
    buttonText: "Build My Fleet Management App",
    servicesList: [
      {
        title: "E-Learning Platform Development",
        description:
          "We build end-to-end e-learning platforms that support online courses, content delivery, video streaming, and student assessments. With built-in analytics and user-friendly dashboards, our solutions help educators manage everything from enrollment to performance tracking.",
        value: "e-learning-platform-development",
        imageSrc: "/images/v2/E-Learning-Platform-Development.webp",
        imageAlt: "E-Learning Platform Development",
      },
      {
        title: "Learning Management System (LMS) Development",
        description:
          "Our LMS development services help schools and enterprises simplify training and upskilling. We design systems with role-based access, gamified learning, attendance tracking, and secure content management — all adaptable to your organization’s workflow.",
        value: "lms-development",
        imageSrc:
          "/images/v2/Learning-Management-System-(LMS)-Development.webp",
        imageAlt: "Learning Management System (LMS) Development",
      },
      {
        title: "Mobile Learning App Development",
        description:
          "Reach learners wherever they are. We create cross-platform mobile apps that deliver lessons, tests, and feedback in a clean and interactive format. Ideal for on-the-go learning, exam prep, or personalized tutoring experiences.",
        value: "mobile-learning-app-development",
        imageSrc: "/images/v2/Mobile-Learning-App-Development.webp",
        imageAlt: "Mobile Learning App Development",
      },
      {
        title: "School & University Management Software",
        description:
          "Our school management systems automate administrative tasks like admissions, scheduling, attendance, and communication between teachers, parents, and students. We help educational institutions run efficiently while improving student engagement.",
        value: "school-university-management-software",
        imageSrc: "/images/v2/School-University-Management-Software.webp",
        imageAlt: "School & University Management Software",
      },
      {
        title: "Virtual Classroom & Video Learning Platforms",
        description:
          "Enable real-time teaching with integrated video conferencing, whiteboard tools, breakout sessions, and recording features. We build virtual classroom software that gives educators full control and learners a seamless experience.",
        value: "virtual-classroom-video-learning-platforms",
        imageSrc: "/images/v2/Virtual-Classroom-Video-Learning-Platforms.webp",
        imageAlt: "Virtual Classroom & Video Learning Platforms",
      },
      {
        title: "Adaptive & AI-Driven Learning Solutions",
        description:
          "We design intelligent systems that analyze learner behavior, recommend personalized content, and adjust learning paths automatically. Perfect for training platforms, corporate learning, and education startups that want to use data to improve outcomes.",
        value: "adaptive-ai-learning-solutions",
        imageSrc: "/images/v2/Adaptive-AI-Driven-Learning-Solutions.webp",
        imageAlt: "Adaptive & AI-Driven Learning Solutions",
      },
      {
        title: "Custom EdTech Platform Development",
        description:
          "If you need a tailored solution, we develop custom EdTech products from the ground up — integrating your branding, curriculum logic, and monetization models. From MVPs for startups to enterprise-grade systems, we bring your education technology vision to life.",
        value: "custom-edtech-platform-development",
        imageSrc: "/images/v2/Custom-EdTech-Platform-Development.webp",
        imageAlt: "Custom EdTech Platform Development",
      },
    ],
  };

  const whyChooseUs = {
    title: "Why Choose Us",
    benefits: [
      {
        title: "Experience Across Education Sectors",
        description:
          "We’ve built software for schools, edtech startups, and enterprise training providers.",
        icon: "/images/v2/experience-in- education-icon.svg",
      },
      {
        title: "Scalable Architecture",
        description:
          "Designed to handle large numbers of learners, courses, and interactions.",
        icon: "/images/v2/scalable-architecture-icon.svg",
      },
      {
        title: "Data-Driven Design",
        description:
          "Every solution includes reporting and analytics to help you measure performance and engagement.",
        icon: "/images/v2/data-driven-icon.svg",
      },
      {
        title: "User-First Approach",
        description:
          "Our apps are intuitive for both educators and learners, ensuring adoption and satisfaction.",
        icon: "/images/v2/user-first-approach-icon.svg",
      },
      {
        title: "Ongoing Support",
        description:
          "We stay with you post-launch to maintain, update, and improve your platform as your audience grows.",
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
        {
          label: "MongoDB",
          iconifyIcon: "/images/mongodb.svg",
        },
        {
          label: "PostgreSQL",
          iconifyIcon: "/images/postgresql.svg",
        },
        { label: "Firebase", iconifyIcon: "/images/firebase-icon.svg" },
      ],
    },
    {
      title: "Integrations",
      value: "integrations",
      items: [
        { label: "Payment Gateways" },
        { label: "Video APIs (Zoom, Twilio)" },
        {
          label: "LMS APIs",
        },
        {
          label: "AI/ML Models",
        },
        {
          label: "ERP Connectors",
        },
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

    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <>
      <SolutionHeroSection
        technologyText="EdTech Software Development Company"
        title="EdTech Software Development Services"
        description="We design and develop education technology solutions that transform how learners, teachers, and organizations connect. From custom e-learning platforms to AI-powered learning apps, our EdTech software development services are designed to meet the growing demand for digital learning experiences."
        imageSrc="/images/v2/EdTech-Software-Development-Services-banner.webp"
        buttonText="Get a Free Consultation"
      />
      <ServicesSection sectionId="services-one" serviceData={edTechServices1} />
      <TechStackWeWorkWith
        active="frontend"
        title="Technologies We Use"
        techStackList={techStackList}
      />
      <MultipleCardWithIconBG bgClass="bg-sectionBG" data={whyChooseUs} />
      <SolutionEngagementAndHowCanStart />
      <SolutionContactForm />
      <EdTechFAQs />
    </>
  );
};

export default EdTech;
