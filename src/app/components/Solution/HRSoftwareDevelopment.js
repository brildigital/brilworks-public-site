"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "../Services/ServiceHeroSection";
import AboutOurExpertise from "../Services/AboutOurExpertise";
import MultipleCardInGrid from "../Common/MultipleCardInGrid";
import SolutionContactForm from "./SolutionContactForm";

const ServicesSection = dynamic(() => import("../Common/ServicesSection"));

const MultipleCardWithIconBG = dynamic(() =>
  import("../Common/MultipleCardWithIconBG")
);
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));

const HRSoftwareDevelopment = () => {
  const hrServices1 = {
    title: "What We Build for HR Teams",
    servicesList: [
      {
        title: "Applicant Tracking Systems",
        value: "hr-service1-2",
        description:
          "Post jobs, collect applications, screen candidates, schedule interviews, and manage your hiring pipeline from one dashboard.",
        imageSrc: "/images/v2/applicant-tracking-systems.webp",
        imageAlt: "Applicant Tracking Systems image",
      },
      {
        title: "Employee Onboarding Platforms",
        value: "hr-service1-3",
        description:
          "Digital paperwork, training schedules, equipment requests, and first-week tasks that new hires complete before day one.",
        imageSrc: "/images/v2/employee-onboarding-platforms.webp",
        imageAlt: "Employee Onboarding Platforms image",
      },
      {
        title: "Performance Management Tools",
        value: "hr-service1-4",
        description:
          "Set goals, track progress, schedule reviews, collect 360 feedback, and document performance conversations throughout the year.",
        imageSrc: "/images/v2/performance-management-tools.webp",
        imageAlt: "Performance Management Tools image",
      },
      {
        title: "Time & Attendance Systems",
        value: "hr-service1-5",
        description:
          "Clock in/out, PTO requests, shift scheduling, overtime tracking, and attendance reports that sync with payroll.",
        imageSrc: "/images/v2/time-attendance-systems.webp",
        imageAlt: "Time & Attendance Systems image",
      },
      {
        title: "Employee Self-Service Portals",
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
        value: "hr-service2-7",
        description:
          "Assign training courses, track completion, test knowledge, manage certifications, and maintain compliance records.",
        imageSrc: "/images/v2/learning-management-systems.webp",
        imageAlt: "Learning Management Systems image",
      },
      {
        title: "Payroll Integration Software",
        value: "hr-service2-8",
        description:
          "Connect your HR system to payroll providers so employee data, hours, and deductions flow automatically.",
        imageSrc: "/images/v2/payroll-integration-software.webp",
        imageAlt: "Payroll Integration Software image",
      },
      {
        title: "Benefits Administration Platforms",
        value: "hr-service2-9",
        description:
          "Enrollment workflows, plan comparisons, life event changes, and open enrollment that employees can complete online.",
        imageSrc: "/images/v2/benefits-administration-platforms.webp",
        imageAlt: "Benefits Administration Platforms image",
      },
      {
        title: "Recruitment Marketing Tools",
        value: "hr-service2-10",
        description:
          "Career site builders, job board integrations, candidate nurture campaigns, and employer brand content management.",
        imageSrc: "/images/v2/recruitment-marketing-tools.webp",
        imageAlt: "Recruitment Marketing Tools image",
      },
      {
        title: "HR Analytics Dashboards",
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
      icon: "/images/Quick-Turnaround-Time.png",
      description:
        "Pay for actual development hours. Works well when you're not entirely sure what features you'll need until you see the first version working.",
    },
    {
      title: "Fixed Cost",
      icon: "/images/v2/budget-estimate.svg",
      description:
        "One agreed price for a defined set of features. Best when you know exactly what you want built and the scope won't change.",
    },
    {
      title: "Staff Augmentation",
      icon: "/images/v2/dedicated-dev-team.svg",
      description:
        "Our developers work as part of your existing team, following your sprint cycles and using your project management tools.",
    },
    {
      title: "Dedicated Development Team",
      icon: "/images/v2/dedicated-dev-team.svg",
      description:
        "A complete team assigned only to your project—developers, designers, testers, and a project manager who keeps everything moving.",
    },
  ];

  const whyChooseUsDevelopmentData = {
    title: "Why HR Teams Choose Brilworks",
    benefits: [
      {
        title: "Top-Rated Developers",
        icon: "/images/v2/Senior_talent_at_competitive_rates.svg",
        description:
          "Our developers consistently receive top ratings for code quality, communication, and meeting deadlines.",
      },
      {
        title: "HR Domain Knowledge",
        icon: "/images/v2/proven-expertise.svg",
        description:
          "We've built recruitment platforms, employee portals, and management tools. We understand HRIS workflows, compliance needs, and what HR teams actually do all day.",
      },
      {
        title: "Agile & Transparent",
        icon: "/images/v2/Agile_Development_Excellence.svg",
        description:
          "You see working software every two weeks, not mockups or promises. We adjust based on feedback from your HR team as we build.",
      },
      {
        title: "Clear Communication",
        icon: "/images/v2/transparent-comm.svg",
        description:
          "We explain technical tradeoffs in plain English. No jargon, no making you feel stupid for asking questions.",
      },
      {
        title: "Post-Launch Support",
        icon: "/images/v2/ongoing-support-icon.svg",
        description:
          "Your HR needs change as you grow. We stick around to add features, fix issues, train new users, and keep the software working as your team evolves.",
      },
    ],
  };

  return (
    <>
      <ServiceHeroSection
        title="HR Software Development"
        description="Custom software for human resources teams. We build applicant tracking systems, employee management platforms, payroll integrations, performance review tools, and onboarding applications."
        buttonText="Start Your App Journey"
        imageSrc="/images/v2/hr-software-development.webp"
      />
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

      <SeeingBelieving />
      <SolutionContactForm
        title="Let's Talk About Your Project"
        description={
          <>
            Tell us which HR processes are eating up your team's time. We'll
            explain what we'd build, how long it would take, and what it would
            cost. Most conversations start with "our current process is..." and
            we go from there. No pressure, no sales pitch. Just a straight
            discussion about whether custom software makes sense for your
            situation. Contact us to start the conversation. We respond within
            one business day.
          </>
        }
      />
      <HomePageBlogs />
    </>
  );
};

export default HRSoftwareDevelopment;
