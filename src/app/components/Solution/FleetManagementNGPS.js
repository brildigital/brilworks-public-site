"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";
import SolutionHeroSection from "./SolutionHeroSection";
import ServicesSection from "../Common/ServicesSection";
import TypesOfAppWeDevelop from "./TypesOfAppWeDevelop";
import MultipleCardWithIconBG from "../Common/MultipleCardWithIconBG";
import MultipleKeyValueWithBG from "../Common/MultipleKeyValueWithBG";

const FleetManagmentFAQs = dynamic(() => import("./SolutionFAQ"));
const SolutionContactForm = dynamic(() => import("./SolutionContactForm"));
const SolutionEngagementAndHowCanStart = dynamic(() =>
  import("./SolutionEngagementAndHowCanStart")
);

const FleetManagementNGPS = () => {
  const fleetServices1 = {
    title:
      "Increase Your Fleet’s Efficiency With Our Fleet Management Software Solutions",
    buttonText: "Build My Fleet Management App",
    servicesList: [
      {
        title: "Fleet Telematics Solutions",
        description:
          "Our extensive fleet telematics solution is designed for large vehicle fleets and uses real-time sensor data, video analytics, and in-car computers to help you optimize the driving efficiency of your vehicles.",
        value: "fleet-one-1",
        imageSrc: "/images/v2/fleet-telematics-solutions.webp",
        imageAlt: "Fleet Telematics Solutions",
      },
      {
        title: "GPS Fleet Tracking",
        description:
          "We’re smarter than most fleet managers. Our software developers have extensive experience in fleet-tracking solutions. Through a combination of real-time GPS tracking, route optimization, and manual regrouping, our proprietary software allows you to easily monitor your fleet anywhere, while on the move.",
        value: "fleet-one-2",
        imageSrc: "/images/v2/gps-fleet-tracking.webp",
        imageAlt: "Delivery Management Software",
      },
      {
        title: "Fuel Consumption Control Apps",
        description:
          "Our fuel consumption control apps can collect and analyze data from your fleet to help you optimize fuel efficiency. Integrations with telematics and vehicle tracking systems let organizations ensure compliance with corporate policies, knowing that the whole supply chain has been accounted for.",
        value: "fleet-one-3",
        imageSrc: "/images/v2/fuel-consumption-control-apps.webp",
        imageAlt: "Fuel Consumption Control Apps",
      },
      {
        title: "Fleet Management Integration",
        description:
          "Easily generate reports on mileage to prevent the occurrence of vehicle downtime due to lack of maintenance. CFMS also allows you to record daily expenses, track accurate vehicle utilization history, and promote ride-sharing incentives available in various cities across the country.",
        value: "fleet-one-4",
        imageSrc: "/images/v2/fleet-management-integration.webp",
        imageAlt: "Fleet Management Integration",
      },
      {
        title: "Driver Management & Safety",
        description:
          "With its in-vehicle monitoring and reporting system, you can monitor driving behavior, boost safety and efficiency by reducing tailgating, assist drivers to reduce fatigue, and minimize idle-time.",
        value: "fleet-one-5",
        imageSrc: "/images/v2/driver-management-and-safety.webp",
        imageAlt: "Driver Management Safety",
      },
      {
        title: "Fleet Maintenance & Predictions",
        description:
          "Aggregate, monitor, and analyze data to trigger timely maintenance reminders, optimize service visits and simplify scheduling routine repairs.",
        value: "fleet-one-6",
        imageSrc: "/images/v2/fleet-maintenance-and-predictions.webp",
        imageAlt: "Fleet Maintenance Predictions",
      },
    ],
  };
  const fleetServices2 = {
    title: "Custom Fleet Management Software Services",
    buttonText: "Speak With Our Experts",
    servicesList: [
      {
        title: "Traffic Management Software",
        description:
          "Never be caught out by unexpected road conditions. Our traffic management software lets your team stay informed and updated by providing real-time visibility, insight, and control.",
        value: "fleet-two-1",
        imageSrc: "/images/v2/traffic-mgmt-app.webp",
        imageAlt: "Traffic-Management-Software",
      },
      {
        title: "Delivery Management Software",
        description:
          "Our online POS system makes managing consignment paperwork, sending real-time notifications, and creating delivery records easy!",
        value: "fleet-two-2",
        imageSrc: "/images/v2/delivery-management-software.webp",
        imageAlt: "GPS-Fleet-Tracking",
      },
      {
        title: "Transportation Software",
        description:
          "Let our software will deliver information about the fastest, cheapest, and most convenient for you to transport goods. We bring you the greatest value in pricing and cost savings every time you move goods.",
        value: "fleet-two-3",
        imageSrc: "/images/v2/transportation-software.webp",
        imageAlt: "Transportation-Software",
      },
      {
        title: "Supply Chain Management Software",
        description:
          "Our supply chain tracking services make it easy to track, manage and maintain the movement of all your inventory, making sure that you’re aware of its location at all times.",
        value: "fleet-two-4",
        imageSrc: "/images/v2/supply-chain-management-software.webp",
        imageAlt: "Supply-Chain-Management-Software",
      },
    ],
  };

  const fleetAppWeDevelop = {
    title: "The Benefits of Having Fleet Management Software",
    description:
      "By utilizing our expertise in working with various players in the healthcare industry, we provide healthcare application development services that make your product a crucial part of the overall healthcare ecosystem. Our services encompass the development of custom apps, designed to meet your business needs.",
    buttonText: "Let’s Get In Touch",
    imageSrc: "/images/v2/fleet-mgmt-app-we-develop.webp",
    imageAlt: "fleet-app-type",
    appTypesList: [
      "Appointment Scheduling Applications",
      "Medication Intake Tracking Apps",
      "Home Health Monitoring Apps",
      "Caregiver Management Apps",
      "Drug Inventory Tracking Apps",
      "Wearable Tech Apps",
    ],
  };

  const fleetMgmtFeature = {
    title: "Count on us to Build Feature-Rich Fleet Tracking System",
    benefits: [
      {
        title: "Real-time GPS vehicle tracking",
        icon: "/images/v2/realtime-gps-icon.svg",
      },
      {
        title: "Route History and Optimization",
        icon: "/images/v2/route-history-icon.svg",
      },
      {
        title: "Accident Detection and Management",
        icon: "/images/v2/accident-detection-icon.svg",
      },
      {
        title: "Automated Alerts",
        icon: "/images/v2/automates-alert-icon.svg",
      },
      {
        title: "Historical Fleet Data",
        icon: "/images/v2/historical-fleet-icon.svg",
      },
      {
        title: "Engine Diagnostics",
        icon: "/images/v2/engine-diagonastic-icon.svg",
      },
      {
        title: "Offline Tracking",
        icon: "/images/v2/offline-tracking-icon.svg",
      },
      { title: "API Integration", icon: "/images/v2/api-integration-icon.svg" },
      { title: "Cloud Based", icon: "/images/v2/cloud-based-icon.svg" },
      {
        title: "Analytics & Reporting",
        icon: "/images/v2/analytics-reporting-icon.svg",
      },
    ],
  };

  const fleetExperienceShowCase = [
    {
      value: "Round",
      description: "The Clock Availability",
      color: "#FFE2E5",
    },
    {
      value: "Agile",
      description: "Development Team",
      color: "#E9FFE2",
    },
    {
      value: "Expert",
      description: "Knowledge",
      color: "#FFE8FC",
    },
    {
      value: "User",
      description: "Oriented Solution",
      color: "#E5F4FF",
    },
    {
      value: "On Time",
      description: "Delivery",
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
        technologyText={
          <>
            Fleet Management Software
            <br className="md:block hidden" /> Development Company
          </>
        }
        title="Enhance your operations with custom fleet management Software Solutions"
        description="Improve your fleet’s productivity, visibility, and knowledge with the help of our custom fleet management app software development services"
        imageSrc="/images/v2/fleet-mgmt-banner.webp"
      />
      <ServicesSection sectionId="fleet-one" serviceData={fleetServices1} />
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="fleet-two"
        imageOnLeft={true}
        serviceData={fleetServices2}
      />
      <TypesOfAppWeDevelop data={fleetAppWeDevelop} />
      <MultipleCardWithIconBG bgClass="bg-sectionBG" data={fleetMgmtFeature} />
      <MultipleKeyValueWithBG
        bgClass="bg-white"
        buttonText="Let’s Get In Touch"
        title="What Makes Brilworks The Best Fleet Management Software Development Company?"
        description="We know it can be frustrating to keep track of all your vehicles on the road, but with our fleet management software and GPS tracking system, we make it easier than ever to keep track of all your moves."
        keyValueData={fleetExperienceShowCase}
      />
      <SolutionEngagementAndHowCanStart />
      <SolutionContactForm />
      <FleetManagmentFAQs />
    </>
  );
};

export default FleetManagementNGPS;
