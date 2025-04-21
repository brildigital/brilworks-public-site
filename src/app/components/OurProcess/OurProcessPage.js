"use client";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";
import dynamic from "next/dynamic";
import ServiceHeroSection from "../Services/ServiceHeroSection";
import ServicesSection from "../Common/ServicesSection";

const ToolsAndGetInTouch = dynamic(() =>
  import("../Portfolio/ToolsAndGetInTouch")
);

const OurProcessPage = () => {
  const ourProcessServices1 = {
    title: "Our Process For End-To-End Project Development",
    desc: "We’ll understand your project needs and goals to guide you from the project initiation to the release phase. Depending on your goals, we provide consultation and an end-to-end development plan.",
    servicesList: [
      {
        title: "Requirements Analysis",
        value: "our-process-one-1",
        description:
          "We follow a rigorous process of requirement analysis in which we go through the business needs using various techniques. It includes end-to-end sessions with the client team and project team.",
        imageSrc: "/images/v2/requirement-analysis.webp",
        imageAlt: "requirements-analysis",
        processTags: [
          "Idea Validation",
          "Project Estimation",
          "Technical Feasibility",
          "Operational Feasibility",
          "Legal Feasibility",
        ],
      },
      {
        title: "Prototype or MVP",
        value: "our-process-one-2",
        description:
          "After identifying the business needs and understanding the market, we develop the product with the help of our industry experts and create a minimum viable product to verify its usability.",
        imageSrc: "/images/v2/prototype-of-mvp.webp",
        imageAlt: "Prototype",
        processTags: [
          "Technology selection",
          "Basic features",
          "Performance features",
        ],
      },
      {
        title: "Design Sprint",
        value: "our-process-one-3",
        description:
          "When planning your product, we ensure that user experience is at the core of our development. Our best practices have led to a flow of product development that enriches user experience.",
        imageSrc: "/images/v2/design-sprint.webp",
        imageAlt: "Design spirit",
        processTags: [
          "Design brief",
          "User persona",
          "User journey",
          "Wireframing",
        ],
      },
      {
        title: "Development Sprint",
        value: "our-process-one-4",
        description:
          "We work together to ensure the delivery of the product is on time while ensuring that all the intended features are in place. We ensure the delivery of a stable build before a launch. Internal demos ensure that we are ready for testing prior to any release.",
        imageSrc: "/images/v2/development-sprint.webp",
        imageAlt: "End to end development",
        processTags: [
          "Gantt chart",
          "RACI matrix",
          "Project roadmap Back",
          "Daily standups",
          "Backlog estimation",
          "Sprint retrospectives",
        ],
      },
      {
        title: "Quality Assurance",
        value: "our-process-one-5",
        description:
          "Our quality assurance team supports our developers by testing the product in various environments and scenarios. Our testing experts test across all the product requirements through both automated and manual approaches. We ensure that the entire product is properly tested before going to market.",
        imageSrc: "/images/v2/quality-assurance.webp",
        imageAlt: "Quality Analysis",
        processTags: [
          "Usability testing",
          "Functionality testing",
          "Compatibility testing",
          "Performance testing",
          "Penetration testing",
        ],
      },
      {
        title: "Implementation & Deployment",
        value: "our-process-one-6",
        description:
          "When the software is ready for release, we orchestrate the build from sprint to the staging server. This allows us to test the product in a live environment thereby removing any risk of failure. Once everyone is satisfied, we take the product live.",
        imageSrc: "/images/v2/implementation-deployment.webp",
        imageAlt: "Implemnetation Deployment",
        processTags: [
          "Setting up servers",
          "Building CI/CD pipeline",
          "Tests at staging server",
          "Preparing & implementing a deployment plan",
        ],
      },
      {
        title: "Maintenance & Support",
        value: "our-process-one-7",
        description:
          "Maintenance keeps the application running smoothly by providing 24x7x365 days support for complete peace of mind. It’s the best way to ensure that your new app is up-to-date and secure, which means users will continue to love it.",
        imageSrc: "/images/v2/maintenance-support.webp",
        imageAlt: "Maintenance and Support",
        processTags: [
          "Corrective software maintenance",
          "Preventive software maintenance",
          "Perfective software maintenance",
          "Adaptive software maintenance",
        ],
      },
    ],
  };
  const ourProcessServices2 = {
    title: "Our Process for Team Extension",
    desc: "Whether you want to add a member to your existing team or build an entire SCRUM team from scratch, We’ll handle all the search, interviewing and vetting to help you find the right team members.",
    servicesList: [
      {
        title: "Screening & Shortlisting",
        value: "our-process-two-1",
        description:
          "Phase I begins with sorting, filtering, and assessing candidates against our stringent criteria. This helps us to determine the best candidates for each role.",
        imageSrc: "/images/v2/screening-shortlisting.webp",
        imageAlt: "Screening-and-Shortlisting",
        processTags: [
          "Reviewing skills",
          "Behavioral traits",
          "Culture fit",
          "Overall experience",
        ],
      },
      {
        title: "Language Proficiency",
        value: "our-process-two-2",
        description:
          "We test each candidate’s language proficiency through a series of assessments to understand their speaking, writing, and collaboration skills.",
        imageSrc: "/images/v2/language-proficiency.webp",
        imageAlt: "language-proficiency",
        processTags: [
          "Reading",
          "Written communication ability",
          "Pronunciation & speaking",
          "Clarity & fluency",
          "Overall communication skills",
        ],
      },
      {
        title: " Aptitude Assessment",
        value: "our-process-two-3",
        description:
          "Each candidate is given a timed aptitude test to help assess their decision-making, problem-solving, and critical thinking skills. These tests help us determine if they have the skills you are looking for. We also use this test as an indicator of how well they will fit into your company culture.",
        imageSrc: "/images/v2/aptitude-assessment.webp",
        imageAlt: "aptitude-test",
        processTags: [
          "Reasoning skills",
          "Learning across disciplines",
          "Working across cultural boundaries",
        ],
      },
      {
        title: "Technical Evaluation",
        value: "our-process-two-4",
        description:
          "We conduct rigorous skill review tests to review your technical capabilities and professional knowledge",
        imageSrc: "/images/v2/technical-evaluation.webp",
        imageAlt: "technical-evaluation",
        processTags: [
          "Domain knowledge",
          "Technical know-how",
          "Proficiency with tools & technologies",
          "Industry-ready skills",
        ],
      },
      {
        title: "Team Extension",
        value: "our-process-two-5",
        description:
          "The final matchmaking process to connect you with the right talent for your business. Our mission is to keep your project on track by providing you with the skills and talent you need.",
        imageSrc: "/images/v2/team-extension.webp",
        imageAlt: "team-extension",
        processTags: [
          "Remote talent",
          "Pre-vetted talent",
          "Available in your timezone",
        ],
      },
    ],
  };

  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <>
      <ServiceHeroSection
        pageTitleText="How We Work"
        title="Time Tested Processes for All Your Project Needs"
        description="Over the past decade, we’ve developed a flexible production process that enables us to deliver high-quality solutions on time, regardless of scale. Our experienced team offers a breadth of technical expertise to meet any client’s needs from finding the right talent to managing end-to-end projects."
        buttonText="Contact Us"
        imageSrc="/images/v2/our-procee-banner.webp"
      />
      <ServicesSection
        sectionId="process-one"
        serviceData={ourProcessServices1}
      />
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="process-two"
        imageOnLeft={true}
        serviceData={ourProcessServices2}
      />
      <ToolsAndGetInTouch />
    </>
  );
};

export default OurProcessPage;
