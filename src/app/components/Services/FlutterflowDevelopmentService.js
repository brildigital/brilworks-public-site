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

const FlutterflowDevelopmentService = () => {
  const flutterflowDevelopmentServices = {
    title: "Flutterflow Development Services We Offer",
    servicesList: [
      {
        title: "Flutter web development",
        value: "flutterflow-service-1",
        description:
          "Our experts leverage Flutterflow, a visual development platform, to create stunning and feature-rich web apps with an expedited development process.",
        imageSrc: "/images/v2/flutter-flow-web-dev.webp",
        imageAlt: "Flutter Flutter img",
      },
      {
        title: "Flutterflow app development",
        value: "flutterflow-service-2",
        description:
          "We provide access to a dedicated team of highly skilled Flutter developers who possess in-depth knowledge and experience to bring your web app vision to life.",
        imageSrc: "/images/v2/flutterflow-app-development.webp",
        imageAlt: "Flutterflow app img",
      },
      {
        title: "Hire dedicated Flutter developers",
        value: "flutterflow-service-3",
        description:
          "Get access to dedicated developers with proven experience in building successful Flutter projects. Our team is comprised of highly skilled developers who can tackle any development challenge.",
        imageSrc: "/images/v2/hire-dedicated-flutter-developers.webp",
        imageAlt: "Hire Flutter developer img",
      },
      {
        title: "MVP development",
        value: "flutterflow-service-4",
        description:
          "Validate your app concept quickly and efficiently by leveraging our expertise in creating minimum viable products (MVPs).",
        imageSrc: "/images/v2/mvp-development.webp",
        imageAlt: "Frappe Integration img",
      },
      {
        title: "Custom app development",
        value: "flutterflow-service-5",
        description:
          "We don't believe in a one-size-fits-all approach. Our team will craft a bespoke web app tailored to your specific needs and functionalities.",
        imageSrc: "/images/v2/custom-app-development.webp",
        imageAlt: "Frappe Support and Maintenance img",
      },
      {
        title: "Advanced integrations",
        value: "flutterflow-service-6",
        description:
          "Seamlessly integrate your web app with essential services like Firebase, Stripe, and third-party APIs to unlock powerful features and functionalities.",
        imageSrc: "/images/v2/advanced-integrations.webp",
        imageAlt: "Advanced integrations img",
      },
    ],
  };

  const whyChooseUsFlutterflowData = {
    title: "Why Choose Brilworks?",
    benefits: [
      {
        title: "Top talent",
        icon: "/images/v2/fi_9789607.svg",
        description:
          "We have the best Flutter talent who have rich experience in Flutter web and app development.",
      },
      {
        title: "Faster Development",
        icon: "/images/v2/code-window.svg",
        description:
          "Get your app to market quicker with our expertise in FlutterFlow's rapid development tools.",
      },
      {
        title: "Dedicate expert",
        icon: "/images/v2/fi_9601941.svg",
        description:
          "Vetted expert who becomes an integral part of your team in just 48 hours.",
      },
      {
        title: "Expert Developers",
        icon: "/images/v2/developer-icon.svg",
        description:
          "Our team consists of highly skilled FlutterFlow developers who stay up-to-date on the latest features and best practices.",
      },
      {
        title: "Flexible engagement model",
        icon: "/images/v2/flexible-engagement.svg",
        description:
          "Choose the pricing model that best suits you: fixed fees for predictable costs or hourly billing.",
      },

      {
        title: "Enhanced UX Focus",
        icon: "/images/v2/fi_8297191.svg",
        description:
          "We prioritize user experience by crafting intuitive and visually appealing UIs with FlutterFlow.",
      },
    ],
  };
  return (
    <>
      <ServiceHeroSection
        title="Leading Flutterflow Development Company"
        description="We are a top-rated Flutterflow development company, creating next-gen apps for SMBs and enterprises at record speed using Flutterflow."
        buttonText="Connect Now"
        imageSrc="/images/v2/flutterflow-banner.webp"
      />
      <CTASection
        titleClass="md:w-[70%]"
        descriptionClass="md:w-4/5"
        title="We offer premium Flutterflow development services to turn your dreams into reality"
        description="Our FlutterFlow development services include FlutterFlow web and app development. Hire pre-vetted Flutter developers from Brilworks to work with your own team. Contact us today and hire top-rated Flutter experts in just 48 hours."
        buttonText="Let’s Discuss"
        darkBackground={false}
      />
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="service-section"
        serviceData={flutterflowDevelopmentServices}
      />
      <MultipleCardWithIconBG data={whyChooseUsFlutterflowData} />
      <Honors />
      <CTASection
        title={
          <>
            Ready to Build Your Dream App?
            <br className="md:block hidden" /> Let's discuss how our Flutterflow
            development expertise can help.
          </>
        }
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

export default FlutterflowDevelopmentService;
