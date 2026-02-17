"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";
import {
  faReact,
  faAngular,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import SolutionHeroSection from "./SolutionHeroSection";
import ServicesSection from "../Common/ServicesSection";
import TypesOfAppWeDevelop from "./TypesOfAppWeDevelop";
import MultipleCardWithIconBG from "../Common/MultipleCardWithIconBG";
import MultipleKeyValueWithBG from "../Common/MultipleKeyValueWithBG";

const FleetManagmentFAQs = dynamic(() => import("./SolutionFAQ"));
const SolutionContactForm = dynamic(() => import("./SolutionContactForm"));
const TechStackWeWorkWith = dynamic(
  () => import("../Technologies/TechStackWeWorkWith"),
);
const SolutionEngagementAndHowCanStart = dynamic(
  () => import("./SolutionEngagementAndHowCanStart"),
);

const FleetManagementNGPS = () => {
  const fleetServices1 = {
    title: "Our Logistics Solutions",
    buttonText: "Build My Fleet Management App",
    servicesList: [
      {
        title: "Fleet Management App Development",
        description:
          "We build apps that allow you to monitor and optimise your vehicle fleets in real time. Track drivers, plan routes, capture performance data and reduce idle time so your fleet becomes a strategic asset, not just a cost centre.",
        value: "fleet-one-1",
        imageSrc: "/images/v2/fleet-telematics-solutions.webp",
        imageAlt: "Fleet Telematics Solutions",
        btnText: "Explore Fleet Solutions",
      },
      {
        title: "Inventory Management App Development",
        description:
          "From warehouse operations to inventory tracking and procurement workflows, our supply-chain apps give you the visibility you need to make decisions based on data. You’ll get accurate status updates, alerts on delays or stock-outs, and control over processes end-to-end.",
        value: "fleet-one-2",
        imageSrc: "/images/v2/fleet-maintenance-and-predictions.webp",
        imageAlt: "Fleet Maintenance Predictions",
        btnText: "Discover Supply Chain Apps",
      },
      {
        title: "On-Demand Logistics App Development",
        description:
          "On-demand logistics apps for dynamic routing, real-time tracking for customers and dispatchers, helping you win in competitive markets.",
        value: "fleet-one-3",
        imageSrc: "/images/v2/fleet-management-integration.webp",
        imageAlt: "Fleet Management Integration",
        btnText: "Learn More",
      },
      {
        title: "Route Optimisation App Development",
        description:
          "For companies managing complex transportation logistics, we build apps that integrate order volumes, traffic data, vehicle capacities and delivery constraints to plan efficient trips, reduce costs and improve reliability.",
        value: "fleet-one-4",
        imageSrc: "/images/v2/driver-management-and-safety.webp",
        imageAlt: "Driver Management Safety",
        btnText: "Learn More",
      },
      {
        title: "Custom Enterprise Logistics App Development ",
        description:
          "Your business is unique. If you need a tailored solution. We design custom logistics apps built to your requirements, with future-proof architecture, data analytics modules and support across mobile and web platforms.",
        value: "fleet-one-5",
        imageSrc: "/images/v2/fuel-consumption-control-apps.webp",
        imageAlt: "Fuel Consumption Control Apps",
        btnText: "Start a Custom Project",
      },
    ],
  };

  const fleetServices2 = {
    title: "Custom Fleet Management Software Services",
    buttonText: "Speak With Our Experts",
    servicesList: [
      {
        title: "GPS Fleet Tracking",
        description:
          "We’re smarter than most fleet managers. Our software developers have extensive experience in fleet-tracking solutions. Through a combination of real-time GPS tracking, route optimization, and manual regrouping, our proprietary software allows you to easily monitor your fleet anywhere, while on the move.",
        value: "fleet-two-1",
        imageSrc: "/images/v2/gps-fleet-tracking.webp",
        imageAlt: "Delivery Management Software",
      },
      {
        title: "Traffic Management Software",
        description:
          "Never be caught out by unexpected road conditions. Our traffic management software lets your team stay informed and updated by providing real-time visibility, insight, and control.",
        value: "fleet-two-2",
        imageSrc: "/images/v2/traffic-mgmt-app.webp",
        imageAlt: "Traffic-Management-Software",
      },
      {
        title: "Delivery Management Software",
        description:
          "Our online POS system makes managing consignment paperwork, sending real-time notifications, and creating delivery records easy!",
        value: "fleet-two-3",
        imageSrc: "/images/v2/delivery-management-software.webp",
        imageAlt: "GPS-Fleet-Tracking",
      },
      {
        title: "Transportation Software",
        description:
          "Let our software will deliver information about the fastest, cheapest, and most convenient for you to transport goods. We bring you the greatest value in pricing and cost savings every time you move goods.",
        value: "fleet-two-4",
        imageSrc: "/images/v2/transportation-software.webp",
        imageAlt: "Transportation-Software",
      },
      {
        title: "Supply Chain Management Software",
        description:
          "Our supply chain tracking services make it easy to track, manage and maintain the movement of all your inventory, making sure that you’re aware of its location at all times.",
        value: "fleet-two-5",
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

  const techStackList = [
    {
      title: "Frontend",
      value: "frontend",
      items: [
        { label: "ReactJS", icon: faReact, color: "#61DBFB" },
        { label: "AngularJS", icon: faAngular, color: "#DD0031" },
        { label: "VueJS", icon: faVuejs, color: "#42B883" },
      ],
    },
    {
      title: "Backend",
      value: "backend",
      items: [
        { label: "Python", iconifyIcon: "/images/python.svg" },
        { label: "NodeJS", iconifyIcon: "/images/node-icon.svg" },
        { label: "Java", iconifyIcon: "/images/java.svg" },
      ],
    },
    {
      title: "Mobile",
      value: "mobile-development",
      items: [
        { label: "React Native", icon: faReact, color: "#61DBFB" },
        { label: "Flutter", iconifyIcon: "/images/flutter.svg" },
        { label: "Swift", iconifyIcon: "/images/swift-language.svg" },
        { label: "Kotlin", iconifyIcon: "/images/kotlin-icon.svg" },
      ],
    },
    {
      title: "Databases",
      value: "databases",
      items: [
        {
          label: "MongoDB",
          iconifyIcon: "/images/mongodb.svg",
        },
        {
          label: "PostgreSQL",
          iconifyIcon: "/images/postgresql.svg",
        },
        { label: "Firebase", iconifyIcon: "/images/firebase-icon.svg" },
      ],
    },
    {
      title: "Integrations",
      value: "integrations",
      items: [
        { label: "Google Maps API" },
        { label: "Fleet Telematics" },
        {
          label: "IoT Sensors",
        },
        {
          label: "ERP/CRM Connectors",
        },
      ],
    },
    {
      title: "Cloud",
      value: "cloud-devops",
      items: [
        { label: "AWS", iconifyIcon: "/images/aws.svg" },
        { label: "Azure", iconifyIcon: "/images/azure.svg" },
        {
          label: "Google Cloud Platform",
          iconifyIcon: "/images/v2/google-cloud-icon.svg",
        },
      ],
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
            Fleet Management App
            <br className="md:block hidden" /> Development Services
          </>
        }
        title="Custom Fleet Management Mobile & Web App Development"
        description="At Brilworks, we design and build custom fleet management apps for mobile and web that transform fleet operations. We build smartest solutions for managing fleets, tracking shipments, and optimising last-mile delivery. Our fleet management app development services give you the tools to reduce costs, increase visibility and deliver better service. "
        imageSrc="/images/v2/fleet-mgmt-banner.webp"
      />
      <ServicesSection sectionId="services-one" serviceData={fleetServices1} />
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="services-two"
        imageOnLeft={true}
        serviceData={fleetServices2}
      />
      <TypesOfAppWeDevelop data={fleetAppWeDevelop} />
      <TechStackWeWorkWith
        active="frontend"
        title="Technologies We Use"
        techStackList={techStackList}
      />
      <MultipleCardWithIconBG bgClass="bg-sectionBG" data={fleetMgmtFeature} />
      <MultipleKeyValueWithBG
        bgClass="bg-white"
        buttonText="Let’s Get In Touch"
        title="What Makes Brilworks The Best Fleet Management Software Development Company?"
        description="We know it can be frustrating to keep track of all your vehicles on the road, but with our fleet management software and GPS tracking system, we make it easier than ever to keep track of all your moves."
        keyValueData={fleetExperienceShowCase}
      />
      <SolutionEngagementAndHowCanStart />
      <SolutionContactForm
        title="Start Building Your Fleet Management App Today"
        description="Modern fleet runs on technology. Let’s build the solution that keeps yours ahead of the curve."
      />
      <FleetManagmentFAQs />
    </>
  );
};

export default FleetManagementNGPS;
