"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";
import SolutionHeroSection from "./SolutionHeroSection";
import ServicesSection from "../Common/ServicesSection";

const MediaNEntertainmentFAQs = dynamic(() => import("./SolutionFAQ"));
const SolutionContactForm = dynamic(() => import("./SolutionContactForm"));
const TypesOfAppWeDevelop = dynamic(() => import("./TypesOfAppWeDevelop"));
const MultipleKeyValueWithBG = dynamic(
  () => import("../Common/MultipleKeyValueWithBG"),
);
const MultipleCardWithIconBG = dynamic(
  () => import("../Common/MultipleCardWithIconBG"),
);
const SolutionEngagementAndHowCanStart = dynamic(
  () => import("./SolutionEngagementAndHowCanStart"),
);

const MediaAndEntertainment = () => {
  const mediaEntertainmentService = {
    title: "Our Media And Entertainment Software Solutions",
    buttonText: "Build My Entertainment App",
    servicesList: [
      {
        title: "OTT Streaming Apps",
        value: "media-app-1",
        description:
          "Leverage our proven domain expertise along with cutting-edge technologies to create a streaming service that is as fast as it is instantly accessible.",
        imageSrc: "/images/v2/ott-streaming-app.webp",
        imageAlt: "OTT Streaming Apps",
      },
      {
        title: "Music Streaming Apps",
        value: "media-app-2",
        description:
          "Make the way to the melodies of your music streaming app. Our powerful backend helps you manage thousands of active listeners without any interruption or issue.",
        imageSrc: "/images/v2/music-streaming-apps.webp",
        imageAlt: "Music Streaming Apps",
      },
      {
        title: " Photo Editing & Sharing Apps",
        value: "media-app-3",
        description:
          "Become one of the most used photo editing and sharing apps. We help you create an Instagram-like app with your own photo editing and sharing features.",
        imageSrc: "/images/v2/photo-editing-sharing-apps.webp",
        imageAlt: "Photo Editing & Sharing Apps",
      },
      {
        title: "Ticket Booking Portals",
        value: "media-app-4",
        description:
          "We develop ticket booking portals for all kinds of events including movie theatres, live concerts, sports matches, etc. Our team is focused on providing a seamless ticket-booking experience to eager fans.",
        imageSrc: "/images/v2/ticket-booking-portals.webp",
        imageAlt: "Ticket Booking Portals",
      },
      {
        title: "Gaming apps",
        value: "media-app-5",
        description:
          "We create gaming apps across platforms and genres. In the world of gaming, we are known for our stable infrastructure, technical speed, efficient development process, and cutting-edge technology.",
        imageSrc: "/images/v2/gaming-apps.webp",
        imageAlt: "Gaming apps",
      },
      {
        title: "Content Aggregation Apps",
        value: "media-app-6",
        description:
          "These apps are the new way to get quality content and videos. We are a trusted app aggregator providing a one-stop solution for customers and businesses to quickly find high-quality databases on any topic or industry.",
        imageSrc: "/images/v2/content-aggregation-apps.webp",
        imageAlt: "Content Aggregation Apps",
      },
    ],
  };

  const entertainmentAppWeDevelop = {
    title:
      "Leverage Our Comprehensive Solutions To Develop Media & Entertainment Apps",
    description:
      "Elevate your audience engagement and improve customer retention with ease. We bring extensive knowledge of the media and entertainment industry to help you increase your global reach and grow to new heights.",
    buttonText: "Speak With Our Experts",
    imageSrc: "/images/v2/media-ent-type-app.webp",
    imageAlt: "media-and-entertainment-type",
    appTypesList: [
      "Streamlines Business Processes",
      "Generates Valuable Insights",
      "Lowers Operational Costs",
      "Improves Fleet Efficiency",
      "Extends Vehicle Lifeline",
      "Maximizes Driver Safety",
    ],
  };

  const entertainmentFeature = {
    title: "Features That Elevate Our Media And Entertainment Software",
    benefits: [
      {
        title: "Real-time Content Feeds",
        icon: "/images/v2/realtime-icon.svg",
      },
      {
        title: "Multilingual Support",
        icon: "/images/v2/multilingual-icon.svg",
      },
      {
        title: "Live Chatting",
        icon: "/images/v2/live-chat-icon.svg",
      },
      {
        title: "Secure Payment Gateways",
        icon: "/images/v2/secure-pymt-icon.svg",
      },
      {
        title: "IoT Integration",
        icon: "/images/v2/iot-integration-icon.svg",
      },
      {
        title: "Push Notifications",
        icon: "/images/v2/push-notification-icon.svg",
      },
      {
        title: "Interactive UI/UX",
        icon: "/images/v2/interactive-ui-icon.svg",
      },
      {
        title: "Social Media Integration",
        icon: "/images/v2/social-integration-icon.svg",
      },
    ],
  };

  const entertainmentExperienceShowCase = [
    {
      value: "GDPR",
      description: "Compliant Apps",
      color: "#FFE2E5",
    },
    {
      value: "Appealing",
      description: "UI/UX Experience",
      color: "#E9FFE2",
    },
    {
      value: "Expert",
      description: "Knowledge",
      color: "#FFE8FC",
    },
    {
      value: "Agile",
      description: "Centric Model",
      color: "#E5F4FF",
    },
    {
      value: "Un-Paralleled",
      description: "Code Quality",
      color: "#F4ECFF",
    },
    {
      value: "Security",
      description: "First Approach",
      color: "#FCFFE3",
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
        technologyText="Media And Entertainment"
        title="Media And Entertainment App Development Services"
        description="We take your customers on a visual delight with our entertainment software solutions. Create an immersive experience for your users and earn a competitive edge in the entertainment & media industry."
        imageSrc="/images/v2/media-and-entertainment-banner.webp"
      />
      <ServicesSection
        sectionId="services-one"
        serviceData={mediaEntertainmentService}
      />
      <TypesOfAppWeDevelop
        bgClass="bg-sectionBG"
        data={entertainmentAppWeDevelop}
      />
      <MultipleCardWithIconBG data={entertainmentFeature} />
      <MultipleKeyValueWithBG
        bgClass="bg-sectionBG"
        buttonText="Let’s Get In Touch"
        title="What Makes Brilworks The Best Entertainment App Company?"
        description="We specialize in creating world-class entertainment apps to help you increase engagement and retain your customers over a longer period of time. Get ready to elevate your app to the next level of success with our media & entertainment software solutions."
        keyValueData={entertainmentExperienceShowCase}
      />
      <SolutionEngagementAndHowCanStart />
      <SolutionContactForm />
      <MediaNEntertainmentFAQs />
    </>
  );
};

export default MediaAndEntertainment;
