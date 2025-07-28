import React from "react";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";
import CTASection from "../Common/CTASection";

const MultipleCardInGrid = dynamic(() =>
  import("../Common/MultipleCardInGrid")
);
const WhyDedicatedTeam = dynamic(() => import("./WhyDedicatedTeam"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const TechStackWeUse = dynamic(() => import("./TechStackWeUse"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));
const DedicatedTeam = () => {
  const dedicatedTeamFeatures = [
    {
      title: "Multiple Domain Expertise",
      imgSrc: "/images/v2/medal-star.svg",
      alt: "Icon representing multiple domain expertise",
    },
    {
      title: "Quality Project Management",
      imgSrc: "/images/v2/quality-project-mgmt-icon.svg",
      alt: "Icon representing quality project management",
    },
    {
      title: "Real-time Progress Tracking",
      imgSrc: "/images/v2/realtime-progress-tracking.svg",
      alt: "Icon representing real-time progress tracking",
    },
    {
      title: "Time-zone Compatibility",
      imgSrc: "/images/v2/time-zone-compatibility-icon.svg",
      alt: "Icon representing time-zone compatibility",
    },
    {
      title: "Cost-effective Development",
      imgSrc: "/images/v2/fi_1611179.svg",
      alt: "Icon representing cost-effective development",
    },
    {
      title: "Dedicated Delivery Management",
      imgSrc: "/images/v2/why-n-2.svg",
      alt: "Icon representing dedicated delivery management",
    },
    {
      title: "100+ Technology Experts",
      imgSrc: "/images/v2/extensive-pool.svg",
      alt: "Icon representing 100+ technology experts",
    },
    {
      title: "24/7 Support and Monitoring",
      imgSrc: "/images/v2/24X7-support-mgmt.svg",
      alt: "Icon representing 24/7 support and monitoring",
    },
  ];

  const benefitOfDedicatedTeam = [
    {
      title: "Tailored Expertis",
      icon: "/images/v2/fi_7626219.svg",
      description:
        "Access a team custom-built to meet your project's exact requirements. From development to customer support, each member possesses specialized skills aligned with your business needs.",
    },
    {
      title: "Cost-Efficiency",
      icon: "/images/v2/fi_1611179.svg",
      description:
        "Enjoy the benefits of a dedicated team without the overhead costs of hiring full-time employees. Our flexible models allow you to scale resources up or down as needed, optimizing your budget.",
    },
    {
      title: "Streamlined Communication",
      icon: "/images/v2/live-chat-icon.svg",
      description:
        "With a dedicated team, communication flows seamlessly. You'll have a single point of contact managing your project, ensuring clarity, responsiveness, and efficient problem-solving.",
    },
    {
      title: "Quality Assurance",
      icon: "/images/v2/fi_11338531.svg",
      description:
        "Our dedicated teams are driven by a commitment to excellence. Through rigorous testing, continuous feedback, and adherence to industry best practices, we ensure the highest quality deliverables for your business.",
    },
    {
      title: "Faster Time-to-Market",
      icon: "/images/v2/fi_11368204.svg",
      description:
        "Experience accelerated project timelines as our dedicated team focuses solely on your tasks. By eliminating distractions and prioritizing your goals, we help you bring your products and services to market faster.",
    },
    {
      title: "Scalability and Flexibility",
      icon: "/images/v2/scale-project.svg",
      description:
        "Adapt to changing business needs with ease. Whether you require additional resources for a new project or need to downsize after project completion, our dedicated teams offer the flexibility to scale up or down as required.",
    },
  ];

  return (
    <>
      <ServiceHeroSection
        title="Dedicated Software Development Team"
        description="Our team, comprised of expert developers with diverse expertise, is committed to delivering tailored solutions that meet your unique business needs."
        buttonText="Get a Dedicated Team"
        showGridData={true}
      />
      <CTASection
        titleClass="md:w-[70%]"
        descriptionClass="md:w-4/5"
        title="Dedicated Team Service: Tailored Solutions, Seamless Collaboration"
        description="Hire skilled developers, designers, project managers, and quality assurance specialists who work exclusively on your project within 48 hours. We ensure the highest quality of our services by building expertise in various business domains, sharing best practices, and maintaining a committed team of professionals."
        buttonText="Let’s Discuss"
        darkBackground={false}
      />
      <WhyDedicatedTeam
        title="Why Should You Hire Our Dedicated Development Team ?"
        cardData={dedicatedTeamFeatures}
      />
      <MultipleCardInGrid
        title="Benefits of Hiring a Dedicated Team"
        cardData={benefitOfDedicatedTeam}
      />
      <CTASection
        title="Let us tailor a team to suit your specific needs, ensuring seamless collaboration, exceptional quality, and unparalleled results."
        description="Tell us your project idea and get a free consultation to create an outstanding digital product."
        buttonText="Get Started Today"
      />
      <ClientReviews />
      <TechStackWeUse />
      <ServicesFAQ />
    </>
  );
};

export default DedicatedTeam;
