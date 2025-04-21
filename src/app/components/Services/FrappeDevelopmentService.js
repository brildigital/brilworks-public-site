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

const FrappeDevelopmentService = () => {
  const frappeDevelopmentServices = {
    title: "Frappe Development Services We Offer",
    servicesList: [
      {
        title: "Frappe Application Development",
        value: "frappe-service-1",
        description:
          "Our services cover everything you need for Frappe application development. This includes analyzing your needs, designing custom apps, testing them thoroughly, deploying them smoothly, and providing ongoing support. We'll work closely with you to make sure everything fits your needs perfectly, giving your business efficient and reliable solutions.",
        imageSrc: "/images/v2/mobile-application-development.webp",
        imageAlt: "Custom Frappe Application Development img",
      },
      {
        title: "Frappe ERP Customization",
        value: "frappe-service-2",
        description:
          "Our experts then customize and configure your ERP to match your unique workflows and data requirements. If needed, we'll securely migrate your data from your existing system. Finally, we ensure that your tailored ERP is both secure and optimized for top performance, guaranteeing smooth operations for your business.",
        imageSrc: "/images/v2/frappe-erp-customization.webp",
        imageAlt: "Frappe ERP customization img",
      },
      {
        title: "Frappe Module Development",
        value: "frappe-service-3",
        description:
          "Our comprehensive services start with a Functionality Gap Analysis, where we identify any missing features in your Frappe setup. Our skilled developers then design and develop a custom Frappe module to fill these gaps and meet your specific needs.",
        imageSrc: "/images/v2/frappe-module-development.webp",
        imageAlt: "Frappe Module Dev img",
      },
      {
        title: "Frappe Integration Services",
        value: "frappe-service-4",
        description:
          "Our team focuses on Seamless Integration Development, building secure and effective connections between your Frappe system and chosen applications. We handle Data Mapping & Synchronization to guarantee seamless data flow, eradicating redundancy and silos.",
        imageSrc: "/images/v2/frappe-integration-services.webp",
        imageAlt: "Frappe Integration img",
      },
      {
        title: "Frappe Support and Maintenance",
        value: "frappe-service-5",
        description:
          "Our services include proactive System Monitoring & Updates to maintain performance and security of your Frappe system, with timely implementation of updates. For any issues, our team offers prompt Bug Fixes & Troubleshooting to ensure smooth operation.",
        imageSrc: "/images/v2/maintenance.webp",
        imageAlt: "Frappe Support and Maintenance mg",
      },
    ],
  };

  const whyChooseUsFrappeData = {
    title: "Why Choose Brilworks for Frappe Development?",
    benefits: [
      {
        title: "Develop custom solutions",
        icon: "/images/v2/fi_11448887.svg",
        description:
          "We build custom applications tailored precisely to your workflows, giving your business a leg up.",
      },
      {
        title: "Expertise",
        icon: "/images/v2/fi_9789607.svg",
        description:
          "Our team comprises expert Frappe developers with extensive experience in delivering high-quality solutions.",
      },
      {
        title: "Frappe integrations",
        icon: "/images/v2/fi_4618560.svg",
        description:
          "We will break down data silos and streamline information flow by integrating your Frappe system with other applications.",
      },
      {
        title: "Client-Centric Approach",
        icon: "/images/v2/fi_16911996.svg",
        description:
          "We prioritize client satisfaction and work closely with you to ensure that our solutions meet your expectations.",
      },
      {
        title: "Round-the-clock support",
        icon: "/images/v2/fi_2612924.svg",
        description:
          "We'll handle ongoing Frappe support and maintenance so you can focus on running your business with peace of mind.",
      },
      {
        title: "Personalized Attention",
        icon: "/images/v2/fi_2684839.svg",
        description:
          "Receive personalized attention from our dedicated support team, who are committed to understanding your specific needs and providing tailored solutions to meet them.",
      },
    ],
  };
  return (
    <>
      <ServiceHeroSection
        title="A Trusted Frappe Development Company"
        description="At Brilworks, we specialize in creating custom Frappe solutions for small and medium-sized businesses. Our experienced team is dedicated to helping startups and SMBs thrive by providing top-notch development services."
        buttonText="Consult our expert"
        imageSrc="/images/v2/frapee-service-banner.webp"
      />
      <CTASection
        titleClass="md:w-[70%]"
        descriptionClass="md:w-4/5"
        title="Frappe Development Solutions by Brilworks"
        description="Missing a Frappe feature? We'll plug the gap. We're the architects you've been searching for – from customizing existing Frappe applications to developing bespoke solutions from scratch, we have the expertise to meet your unique requirements."
        buttonText="Let’s Discuss"
        darkBackground={false}
      />
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="service-section"
        serviceData={frappeDevelopmentServices}
      />
      <MultipleCardWithIconBG data={whyChooseUsFrappeData} />
      <Honors />
      <CTASection
        titleClass="md:w-[70%]"
        title="Ready to take your business to the next level with our Frappe development services?"
        buttonText="Talk to Our Expert"
      />
      <IndustriesWeServe darkBackground={false} />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default FrappeDevelopmentService;
