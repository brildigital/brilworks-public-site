import { usePathname } from "next/navigation";
import React from "react";
import MultipleCardInGrid from "../Common/MultipleCardInGrid";

const reactJsAdvantages = {
  title: "Engineered Excellence: The Brilworks Advantage",
  description:
    "As a top-rated React development company, we’ve redefined what it means to deliver enterprise-grade solutions at startup speed. Here’s why top-rated companies and tech leaders trust us over generic agencies.",
  advantages: [
    {
      title: "Elite Talent, Rigorously Vetted",
      description:
        "Our vetted senior React developers hold React certifications + 4+ years of experience in front-end development. They specialize in niche needs, including React Native micro-optimizations, WebGL integrations, or HIPAA-compliant UI builds.",
      icon: "/images/v2/code-window.svg",
      badgeText: "Certified Experts",
      badgeColor: "bg-[#E5F4FF]",
    },
    {
      title: "Dedicated, Not Distracted",
      description:
        "Your project is not one of 50 concurrent tasks; we assign dedicated React Architects with one lead per project for end-to-end ownership. Our teams are pre-trained on Next.js 14, TypeScript 5, and React Server Components.",
      icon: "/images/v2/dedicates-no-distraction.svg",
      badgeText: "Focused Teams",
      badgeColor: "bg-[#E9FFE2]",
    },
    {
      title: "Metrics-Driven Professionalism",
      description:
        "We achieve 92% On-Time Delivery through agile sprints tracked via Jira with real-time client dashboards. Our thorough QA process ensures a low bug rate.",
      icon: "/images/v2/metric-driven.svg",
      badgeText: "On-Time Delivery",
      badgeColor: "bg-[#FFE8FC]",
    },
    {
      title: "Proven Across Industries",
      description:
        "Our track record spans multiple sectors, having built robust React platforms that manage significant activity, engineered compliant systems with exceptional reliability, and scaled applications to serve a wide audience.",
      icon: "/images/v2/buildings.svg",
      badgeText: "Industry Experts",
      badgeColor: "bg-[#FFE2E5]",
    },
    {
      title: "Transparent & Trusted",
      description:
        "We hold an ISO 27001 certification with our code security audited by recognized third-party auditors. Our all-inclusive pricing covers DevOps, UI/UX reviews, and tech debt management.",
      icon: "/images/v2/trusted.svg",
      badgeText: "Secure & Reliable",
      badgeColor: "bg-[#F4ECFF]",
    },
    {
      title: "Client-Centric Approach",
      description:
        "We architect growth by embedding our ReactJS experts as true partners in your business. Our approach begins with tailored onboarding, followed by proactive innovation and transparent impact tracking.",
      icon: "/images/v2/people-icon-vector.svg",
      badgeText: "True Partnership",
      badgeColor: "bg-[#FEF3E6]",
    },
  ],
};

const nodeJsAdvantages = {
  title: "Engineered Excellence: The Brilworks Advantage",
  description: "",
  advantages: [
    {
      title: "Modern Code Brilliance",
      description:
        "Our developers are fluent in cutting-edge languages like JavaScript (Node.js), Python, Java, and TypeScript, enabling them to craft high-quality, future-proof solutions tailored to your technical and business needs.",
      icon: "/images/v2/code-window.svg",
      badgeText: "Multi-Language Expertise",
      badgeColor: "bg-[#E5F4FF]",
    },
    {
      title: "Scalable Web Applications",
      description:
        "From real-time collaboration tools to enterprise-grade platforms, we engineer web applications that prioritize scalability, security, and performance optimization to handle evolving demands effortlessly.",
      icon: "/images/v2/scale-project.svg",
      badgeText: "Scalability Focus",
      badgeColor: "bg-[#E9FFE2]",
    },
    {
      title: "Robust RESTful APIs",
      description:
        "Our team designs and optimizes RESTful APIs that act as the backbone of your application, ensuring seamless integration between frontend, backend, and third-party services while maintaining data integrity.",
      icon: "/images/v2/robust-api.svg",
      badgeText: "API Excellence",
      badgeColor: "bg-[#FFE8FC]",
    },
    {
      title: "Software Development Excellence",
      description:
        "By combining Agile methodologies, rigorous testing, and iterative refinement, we deliver software development solutions that align with your goals, reduce time-to-market, and drive measurable ROI.",
      icon: "/images/v2/dedicates-no-distraction.svg",
      badgeText: "Quality-Driven",
      badgeColor: "bg-[#FFE2E5]",
    },
    {
      title: "Performance Optimization",
      description:
        "Beyond initial builds, we fine-tune applications for high-quality performance under heavy traffic, addressing bottlenecks, memory leaks, and latency to maintain stability and speed.",
      icon: "/images/v2/metric-driven.svg",
      badgeText: "High Performance",
      badgeColor: "bg-[#F4ECFF]",
    },
    {
      title: "Advanced Security Integration",
      description:
        "From authentication protocols to data encryption, we embed security best practices into every layer of development, safeguarding your applications against evolving cyber threats.",
      icon: "/images/v2/adv-security.svg",
      badgeText: "Security First",
      badgeColor: "bg-[#FEF3E6]",
    },
  ],
};

const reactNativeAdvantages = {
  title: "Engineered Excellence: The Brilworks Advantage",
  description:
    "Our React Native development services are built on a foundation of technical expertise and client-focused innovation. Here’s how we deliver unparalleled value:",
  advantages: [
    {
      title: "Cross-platform efficiency",
      description:
        "Our developers leverage React Native’s single-codebase approach to build apps for iOS and Android, reducing development time by up to 40%. Embrace cross-platform mobile app development that’s cost-effective and scalable.",
      icon: "/images/v2/Cross_Platform_Efficiency.svg",
      badgeText: "Single Codebase",
      badgeColor: "bg-[#E5F4FF]",
    },
    {
      title: "Native-like performance",
      description:
        "We craft React Native apps with native-like speed and responsiveness, using optimized components and tools like Hermes. We craft seamless user experiences, making us a top choice to hire React Native developers.",
      icon: "/images/v2/Native_Like_Performance.svg",
      badgeText: "Optimized Speed",
      badgeColor: "bg-[#E9FFE2]",
    },
    {
      title: "Rapid prototyping",
      description:
        "Accelerate your time-to-market with our rapid prototyping expertise. Our dedicated React Native developers create functional MVPs in weeks, enabling startups and enterprises to test ideas and iterate quickly while maintaining quality.",
      icon: "/images/v2/Rapid_Prototyping.svg",
      badgeText: "Faster MVPs",
      badgeColor: "bg-[#FFE8FC]",
    },
    {
      title: "Agile development excellence",
      description:
        "Using Agile methodologies, we deliver React Native app development with iterative sprints, rigorous testing, and client collaboration. This reduces risks, aligns with your vision, and drives measurable ROI for projects of any scale.",
      icon: "/images/v2/Agile_Development_Excellence.svg",
      badgeText: "Agile ROI",
      badgeColor: "bg-[#FFE2E5]",
    },
  ],
};

const BrilworksAdvantage = () => {
  const pathname = usePathname();

  const showDataBasedOnPathname = {
    "/hire-reactjs-developer/": reactJsAdvantages,
    "/hire-nodejs-developer/": nodeJsAdvantages,
    "/hire-react-native-developer/": reactNativeAdvantages,
  };

  const currentData = showDataBasedOnPathname[pathname];

  return (
    <MultipleCardInGrid
      title={currentData.title}
      description={currentData.description}
      cardData={currentData.advantages}
    />
  );
};

export default BrilworksAdvantage;
