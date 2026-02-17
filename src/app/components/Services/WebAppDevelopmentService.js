"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";
import CTASection from "../Common/CTASection";
import {
  faAngular,
  faJs,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";

const Honors = dynamic(() => import("../Homepage/Honors"));
const ServicesSection = dynamic(() => import("../Common/ServicesSection"));
const IndustriesWeServe = dynamic(
  () => import("../Homepage/IndustriesWeServe"),
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const MultipleCardWithIconBG = dynamic(
  () => import("../Common/MultipleCardWithIconBG"),
);
const TechStackWeWorkWith = dynamic(
  () => import("../Technologies/TechStackWeWorkWith"),
);
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const WebAppDevelopmentService = () => {
  const webAppServices = {
    title: "Our Web Application Development Services",
    servicesList: [
      {
        title: "Custom Web Application Development",
        value: "web-service-1",
        description:
          "We craft bespoke web apps tailored to fit your process. We follow a consultative process to understand your workflow, customer needs, and growth vision before writing a single line of code.",
        imageSrc: "/images/v2/custom-web-application-development.webp",
        imageAlt: "Custom web application development image",
      },
      {
        title: "Frontend and Backend Development",
        value: "web-service-2",
        description:
          "We build structured, maintainable systems across both client and server sides. Everything is designed for clarity, consistency, and long-term use, nothing added without purpose.",
        imageSrc: "/images/v2/frontend-and-backend-development.webp",
        imageAlt: "Frontend and backend development image",
      },
      {
        title: "Progressive Web App (PWA) Development",
        value: "web-service-3",
        description:
          "Give users a native-app-like experience on the web. Our PWA solutions work offline, load instantly, and provide seamless interactions across devices and browsers.",
        imageSrc: "/images/v2/progressive-web-app-pwa-development.webp",
        imageAlt: "PWA development image",
      },
      {
        title: "Enterprise Web Development",
        value: "web-service-4",
        description:
          "For growing organizations and complex ecosystems, we develop enterprise-grade web solutions that scale effortlessly.",
        imageSrc: "/images/v2/enterprise-web-development.webp",
        imageAlt: "Enterprise web development image",
      },
      {
        title: "UI/UX Design for Web Applications",
        value: "web-service-5",
        description:
          "Design drives engagement. Our UI/UX designers create intuitive, user-friendly interfaces that enhance usability and customer satisfaction.",
        imageSrc: "/images/v2/ui-ux-design-for-web-applications.webp",
        imageAlt: "UI/UX web design image",
      },
      {
        title: "Web App Maintenance & Optimization",
        value: "web-service-6",
        description:
          "We provide ongoing support, performance monitoring, updates, and enhancements to ensure your web application runs smoothly and adapts to changing user needs.",
        imageSrc: "/images/v2/web-app-maintenance-optimization.webp",
        imageAlt: "Web app maintenance and optimization image",
      },
    ],
  };

  const whyChooseUsDevelopmentData = {
    title: "Why Choose Us for Your Web Application Development?",
    benefits: [
      {
        title: "Full-Cycle Development",
        icon: "/images/v2/fi_8099605.svg",
        description:
          "We handle everything from ideation and design to development and post-launch support. You get a dedicated partner throughout your digital journey.",
      },
      {
        title: "Scalable Architecture",
        icon: "/images/v2/fi_8109512.svg",
        description:
          "We architect web apps to grow with your business. From MVP to enterprise-grade scale, our solutions remain adaptable and future-proof.",
      },
      {
        title: "Expertise in Modern Tech",
        icon: "/images/v2/fi_780477.svg",
        description:
          "We bring deep expertise in modern frameworks and tools including ReactJS, Node.js, and cloud platforms, ensuring your web app is built on reliable, battle-tested technology.",
      },
      {
        title: "Agile & Transparent Process",
        icon: "/images/v2/fi_2907826.svg",
        description:
          "We follow agile methodologies with weekly sprints, demos, and continuous feedback cycles. You stay in control while we stay accountable.",
      },
      {
        title: "Focus on Security & Performance",
        icon: "/images/v2/security.svg",
        description:
          "Our development practices include robust data protection, authentication systems, and performance optimization from the ground up.",
      },
      {
        title: "On-Time, On-Budget Delivery",
        icon: "/images/v2/on-timeicon.svg",
        description:
          "With clear timelines and proactive communication, we ensure your project progresses without delays or surprises.",
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
        { label: "JavaScript", icon: faJs, color: "#F7DF1E" },
      ],
    },
    {
      title: "Backend",
      value: "backend",
      items: [
        { label: "Java", iconifyIcon: "/images/java.svg" },
        { label: "NodeJS", iconifyIcon: "/images/node-icon.svg" },
        { label: "Python", iconifyIcon: "/images/python.svg" },
        { label: ".Net", iconifyIcon: "/images/dot-net.svg" },
      ],
    },
    {
      title: "Mobile",
      value: "mobile",
      items: [
        { label: "Android", iconifyIcon: "/images/android-ui.svg" },
        { label: "React Native", icon: faReact, color: "#61DBFB" },
        { label: "Flutter", iconifyIcon: "/images/flutter.svg" },
      ],
    },
    {
      title: "Cloud",
      value: "cloud",
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

  return (
    <>
      <ServiceHeroSection
        title="Web App Development Services"
        description="We build scalable, high-performance, and intuitive web applications for startups to enterprises alike. As a trusted website development company, we provide end-to-end web development services. We blend robust backend systems with intuitive front-end design to build web apps."
        buttonText="Get Free Consultation"
        imageSrc="/images/v2/web-app-development-banner.webp"
      />
      {/* <CTASection
        titleClass="md:w-[70%]"
        descriptionClass="md:w-4/5"
        title="Ship Faster, Test Smarter, Deploy Smoother: DevOps Consulting for Modern Businesses"
        description="We're a leading DevOps consulting service company dedicated to building high-performing software delivery pipelines that streamline your workflow, accelerate releases, and empower your teams. Our expert consultants work alongside your team to identify your unique challenges and design a pipeline tailored to address your unique needs. We leverage the latest tools and cutting-edge technologies, from GitLab CI/CD to containerization solutions, to create a system that aligns perfectly with your specific needs."
        buttonText="Let’s Discuss"
        darkBackground={false}
      /> */}
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="service-section"
        serviceData={webAppServices}
      />
      <MultipleCardWithIconBG
        bgClass="bg-sectionBG"
        data={whyChooseUsDevelopmentData}
      />
      <Honors />
      <ClientReviews />
      <TechStackWeWorkWith active="frontend" techStackList={techStackList} />
      <SeeingBelieving />
      <IndustriesWeServe darkBackground={false} />
      <HomePageBlogs />
      <CTASection
        descriptionClass="md:w-4/5"
        title="Build your next high-impact web application with a trusted partner. Let’s turn your idea into a responsive, secure, and scalable digital experience."
        buttonText="Get a Free Consultation"
      />
      <ServicesFAQ />
    </>
  );
};

export default WebAppDevelopmentService;
