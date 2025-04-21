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

const AdaloDevelopmentService = () => {
  const adaloDevelopmentServices = {
    title: "Our offerings",
    servicesList: [
      {
        title: "Custom Adalo App Development",
        value: "adalo-service-1",
        description:
          "Our experts leverage Adalo, a visual development platform, to create stunning and feature-rich web apps with an expedited development process.",
        imageSrc: "/images/v2/custom-adalo-app-dev.webp",
        imageAlt: "Custom Adalo App Development img",
      },
      {
        title: "UI/UX Design",
        value: "adalo-service-2",
        description:
          "Engaging and user-friendly interfaces that enhance the overall app experience.",
        imageSrc: "/images/v2/ui-ux-design.webp",
        imageAlt: "UI/UX Design img",
      },
      {
        title: "Integration Services",
        value: "adalo-service-3",
        description:
          "Seamlessly integrate third-party services to enhance functionality.",
        imageSrc: "/images/v2/app-integration.webp",
        imageAlt: "Integration Services img",
      },
      {
        title: "Maintenance and Support",
        value: "adalo-service-4",
        description:
          "Continuous support is needed to ensure your app remains up-to-date and optimized.",
        imageSrc: "/images/v2/maintenance.webp",
        imageAlt: "Maintenance and Support img",
      },
    ],
  };

  const whyChooseUsAdaloData = {
    title: "Why Choose Brilworks?",
    benefits: [
      {
        title: "Expertise",
        icon: "/images/v2/fi_9789607.svg",
        description:
          "Our team consists of experienced Adalo developers who are passionate about delivering excellence.",
      },
      {
        title: "Client-Centric Approach",
        icon: "/images/v2/fi_16911996.svg",
        description:
          "Your satisfaction is our top priority, and we strive to exceed your expectations at every step.",
      },
      {
        title: "Creativity",
        icon: "/images/v2/user-experience.svg",
        description:
          "We think outside the box to create innovative solutions that set your app apart.",
      },
      {
        title: "Timely Delivery",
        icon: "/images/v2/fi_2612924.svg",
        description:
          "We understand the importance of deadlines and work diligently to deliver projects on time and within budget.",
      },
    ],
  };
  return (
    <>
      <ServiceHeroSection
        title="Adalo Development Services"
        description="Empower Your Business with Adalo Development Services. At Brilworks, we specialize in crafting intuitive and dynamic mobile and web applications using the powerful platform – Adalo."
        buttonText="Tell Us About Your Project"
        imageSrc="/images/v2/adalo-banner.webp"
      />
      <CTASection
        titleClass="md:w-[70%]"
        descriptionClass="md:w-4/5"
        title="Your Adalo Partner: Our Development Services"
        description="As a leading Adalo development company, we thrive on creating tailored solutions that cater to our clients' diverse needs. Our team of skilled developers combines technical prowess with creative flair to build apps that not only meet but exceed expectations."
        buttonText="Let’s Discuss"
        darkBackground={false}
      />
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="service-section"
        serviceData={adaloDevelopmentServices}
      />
      <MultipleCardWithIconBG data={whyChooseUsAdaloData} />
      <Honors />
      <CTASection
        titleClass="md:w-[70%]"
        title="Ready to transform your ideas into reality? Contact us today to discuss your project and take the first step toward success."
        buttonText="Let's Get Started"
      />
      <IndustriesWeServe darkBackground={false} />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default AdaloDevelopmentService;
