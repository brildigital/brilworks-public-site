"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";
import {
  MapPin,
  Route,
  AlertTriangle,
  Bell,
  History,
  Settings2,
  WifiOff,
  Plug,
  Cloud,
  BarChart2,
} from "lucide-react";
import {
  faReact,
  faAngular,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import ButtonV2 from "../Common/ButtonV2";
import ServicesSection from "../Common/ServicesSection";
import TypesOfAppWeDevelop from "./TypesOfAppWeDevelop";
import MultipleCardWithIconBG from "../Common/MultipleCardWithIconBG";
import MultipleKeyValueWithBG from "../Common/MultipleKeyValueWithBG";
import "../../styles/ServiceLightTheme.css";

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
        icon: <MapPin size={28} color="#1A5CCC" strokeWidth={1.75} />,
      },
      {
        title: "Route History and Optimization",
        icon: <Route size={28} color="#1A5CCC" strokeWidth={1.75} />,
      },
      {
        title: "Accident Detection and Management",
        icon: <AlertTriangle size={28} color="#1A5CCC" strokeWidth={1.75} />,
      },
      {
        title: "Automated Alerts",
        icon: <Bell size={28} color="#1A5CCC" strokeWidth={1.75} />,
      },
      {
        title: "Historical Fleet Data",
        icon: <History size={28} color="#1A5CCC" strokeWidth={1.75} />,
      },
      {
        title: "Engine Diagnostics",
        icon: <Settings2 size={28} color="#1A5CCC" strokeWidth={1.75} />,
      },
      {
        title: "Offline Tracking",
        icon: <WifiOff size={28} color="#1A5CCC" strokeWidth={1.75} />,
      },
      {
        title: "API Integration",
        icon: <Plug size={28} color="#1A5CCC" strokeWidth={1.75} />,
      },
      {
        title: "Cloud Based",
        icon: <Cloud size={28} color="#1A5CCC" strokeWidth={1.75} />,
      },
      {
        title: "Analytics & Reporting",
        icon: <BarChart2 size={28} color="#1A5CCC" strokeWidth={1.75} />,
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
      <section
        className="relative overflow-hidden svc-hero-bg"
        style={{ padding: "120px 0 80px" }}
      >
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-[60px] items-center">
            <div>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 text-[12px] font-semibold uppercase border"
                style={{
                  background: "#ffffff",
                  borderColor: "#e4eaf1",
                  color: "#566678",
                  letterSpacing: "0.1em",
                  boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)",
                }}
              >
                Fleet Management App
                <br className="md:block hidden" /> Development Services
              </span>
              <h1
                className="font-extrabold mb-5"
                style={{
                  fontSize: "clamp(34px, 4vw, 54px)",
                  letterSpacing: "-1.5px",
                  lineHeight: 1.1,
                  color: "#0b1e33",
                }}
              >
                Custom Fleet Management Mobile &amp; Web App Development
              </h1>
              <p
                className="mb-8"
                style={{
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: "#566678",
                  maxWidth: 580,
                }}
              >
                At Brilworks, we design and build custom fleet management apps
                for mobile and web that transform fleet operations. We build
                smartest solutions for managing fleets, tracking shipments, and
                optimising last-mile delivery. Our fleet management app
                development services give you the tools to reduce costs,
                increase visibility and deliver better service.
              </p>
              <div className="flex flex-wrap gap-3.5 my-10">
                <ButtonV2
                  size="large"
                  label="Get My Free Consultation"
                  redirect="#section-contact-form"
                  scrollingButton
                  className="hover:!text-themeColor"
                />
                <Link
                  href="/portfolio/"
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-black/5"
                  style={{
                    background: "transparent",
                    color: "#0b1e33",
                    border: "1px solid #e4eaf1",
                    padding: "16px 32px",
                    fontSize: 16,
                  }}
                >
                  View Case Studies
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div
                className="w-full rounded-2xl overflow-hidden"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e4eaf1",
                  boxShadow: "0 4px 24px rgba(11,30,51,0.08)",
                  padding: 8,
                }}
              >
                <Image
                  className="rounded-xl object-cover w-full"
                  src="/images/v2/fleet-mgmt-banner.webp"
                  alt="Fleet Management App Development Services"
                  width={565}
                  height={650}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
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
        bgClassName="svc-mid-cta-bg"
        title="Start Building Your Fleet Management App Today"
        description="Modern fleet runs on technology. Let’s build the solution that keeps yours ahead of the curve."
      />
      <FleetManagmentFAQs />
    </>
  );
};

export default FleetManagementNGPS;
