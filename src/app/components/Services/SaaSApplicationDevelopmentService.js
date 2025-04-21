"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";
import CTASection from "../Common/CTASection";

const ServicesSection = dynamic(() => import("../Common/ServicesSection"));
const MultipleCardWithIconBG = dynamic(() =>
  import("../Common/MultipleCardWithIconBG")
);
const Honors = dynamic(() => import("../Homepage/Honors"));
const IndustriesWeServe = dynamic(() =>
  import("../Homepage/IndustriesWeServe")
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const SaaSApplicationDevelopmentService = () => {
  const saasAppDevelopmentServices = {
    title: "Our Services",
    servicesList: [
      {
        title: "Idea productization and brand design",
        value: "saas-app-dev-1",
        description:
          "We help you refine your concept, develop a compelling brand identity, and create a clear roadmap for your SaaS.",
        imageSrc: "/images/v2/idea-productization-brand-design.webp",
        imageAlt: "Idea productization img",
      },
      {
        title: "SaaS Consulting",
        value: "saas-app-dev-2",
        description:
          "Expert guidance throughout your SaaS journey, from initial concept to market launch. We help you define your product strategy, identify market fit, and create a winning business model.",
        imageSrc: "/images/v2/saas-consulting.webp",
        imageAlt: "SaaS consulting img",
      },
      {
        title: "SaaS Architecture Design",
        value: "saas-app-dev-3",
        description:
          "We design scalable and secure architectures that can support your growth and ensure a reliable user experience.",
        imageSrc: "/images/v2/saas-architecture-design.webp",
        imageAlt: "SaaS architecture img",
      },
      {
        title: "SaaS Application Development",
        value: "saas-app-dev-4",
        description:
          "Our skilled developers leverage cutting-edge technologies to build high-performing and secure SaaS applications.",
        imageSrc: "/images/v2/saas-application-development.webp",
        imageAlt: "SaaS application dev img",
      },
      {
        title: "SaaS Support and Maintenance",
        value: "saas-app-dev-5",
        description:
          "Bug fixes, updates, and ongoing optimization - we've got you covered. We keep your software optimized and up-to-date, ensuring peak performance and a seamless user experience.",
        imageSrc: "/images/v2/saas-support-and-maintenance.webp",
        imageAlt: "SaaS Support img",
      },
      {
        title: "SaaS Platform Migration",
        value: "saas-app-dev-6",
        description:
          "We ensure a smooth transition to your new SaaS home. Our team seamlessly migrates your software from on-premise servers or another platform, minimizing downtime and ensuring a successful move to the cloud.",
        imageSrc: "/images/v2/saas-platform-migration.webp",
        imageAlt: "SaaS Platform migration img",
      },
    ],
  };

  const whyChooseUsSaasAppData = {
    title: "Here's what sets us apart",
    benefits: [
      {
        title: "Fast Track Your Idea",
        icon: "/images/v2/fi_7020010.svg",
        description:
          "We don't just code, we co-create. Our experts refine your vision and propel it through efficient development, all under one roof.",
      },
      {
        title: "UX Obsessed Design",
        icon: "/images/v2/user-experience.svg",
        description:
          "We craft interfaces that captivate users while building fortresses around your data. Your SaaS will be both stunning and secure.",
      },
      {
        title: "Scalable Architecture from Day One",
        icon: "/images/v2/fi_8109512.svg",
        description:
          "Forget costly overhauls – your application seamlessly adapts to your ever-expanding needs. We design your SaaS to flex with your growth.",
      },
      {
        title: "Collaborative Development for Success",
        icon: "/images/v2/fi_10227466.svg",
        description:
          "We're not just developers; we're your partners in success. Clear communication and collaboration ensure your vision becomes a reality.",
      },
      {
        title: "Future-Proof Tech Stack Expertise",
        icon: "/images/v2/extensive-pool.svg",
        description:
          "We stay ahead of the curve, leveraging cutting-edge technology to create a future-proof SaaS. Stay competitive with a solution that never goes out of style.",
      },

      {
        title: "Continuous Innovation for Your SaaS",
        icon: "/images/v2/fi_1829892.svg",
        description:
          "We offer ongoing support and maintenance, constantly evolving it to meet changing needs and user demands.",
      },
    ],
  };

  return (
    <>
      <ServiceHeroSection
        title="SaaS Application Development Services"
        description="Trusted by industry leaders, we deliver exceptional Sass solutions for forward-thinking companies. Let us help you achieve your design goals with clean, scalable code."
        buttonText="Get a Quote"
        imageSrc="/images/v2/saas-service-banner.webp"
      />
      <CTASection
        titleClass="md:w-[70%]"
        descriptionClass="md:w-4/5"
        title="Your Trusted Partner for Next-Gen SaaS Development"
        description="At Briworks, we’re a team of award-winning SaaS architect and developers with proven track record of building secure, scalable, and user-centric cloud applications. We leverage the latest technology and industry best practices to deliver future proof  solutions that optimize your operations, drive growth, and captivate users. Partner with us and experience the difference - expertise, agility, and dedication to your success."
        buttonText="Let’s Discuss"
        darkBackground={false}
      />
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="service-section"
        serviceData={saasAppDevelopmentServices}
      />
      <MultipleCardWithIconBG data={whyChooseUsSaasAppData} />
      <Honors />
      <CTASection
        titleClass="md:w-[70%]"
        title="Connect with our experts for a no-obligation discussion about your vision and how we can bring it to life."
        buttonText="Get a Quote"
      />
      <IndustriesWeServe darkBackground={false} />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default SaaSApplicationDevelopmentService;
