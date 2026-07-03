"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import AboutOurExpertise from "./AboutOurExpertise";
import MultipleCardInGrid from "../Common/MultipleCardInGrid";
import "../../styles/ServiceLightTheme.css";

const Honors = dynamic(() => import("../Homepage/Honors"));
const ServicesSection = dynamic(() => import("../Common/ServicesSection"));
const IndustriesWeServe = dynamic(() =>
  import("../Homepage/IndustriesWeServe")
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const MultipleCardWithIconBG = dynamic(() =>
  import("../Common/MultipleCardWithIconBG")
);
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const WhiteLabelAppDevelopment = () => {
  const whiteAppServices = {
    title: "Core White Label Solutions",
    servicesList: [
      {
        title: "Fitness and Wellness Apps",
        value: "web-service-1",
        description:
          "We build white label fitness platforms with workouts, diet plans, progress tracking, trainer dashboards, community features, and subscription modules. Ideal for coaches, gyms, wellness brands, and digital fitness platforms.",
        imageSrc: "/images/v2/Native-App-Development.webp",
        imageAlt: "Native App Development image",
      },
      {
        title: "Delivery and Logistics Apps",
        value: "web-service-2",
        description:
          "Our delivery stack includes apps for customer ordering, courier management, live tracking, route optimization, vendor dashboards, and automated dispatching. Suitable for food delivery, parcel delivery, and hyperlocal services.",
        imageSrc: "/images/v2/Cross-Platform-Development.webp",
        imageAlt: "Cross-Platform Development image",
      },
      {
        title: "Ride Hailing and Mobility Apps",
        value: "web-service-3",
        description:
          "We provide ready to deploy ride hailing systems with driver and rider apps, trip management, fare calculation, routing, and admin tools for fleet operations.",
        imageSrc: "/images/v2/Progressive-Web-App-(PWA) Development).webp",
        imageAlt: "PWA development image",
      },
      {
        title: "Marketplace and E-Commerce Apps",
        value: "web-service-4",
        description:
          "Our marketplace templates include multi vendor catalogs, cart and checkout flows, digital payments, order tracking, and seller dashboards. Good for retail brands and niche commerce models.",
        imageSrc: "/images/v2/IoT-App-Development.webp",
        imageAlt: "IoT App Development image",
      },
      {
        title: "On Demand Service Apps",
        value: "web-service-5",
        description:
          "We offer service booking apps for home services, beauty, cleaning, repairs, and professional appointments. These include provider profiles, booking systems, schedules, reviews, and in app payments.",
        imageSrc: "/images/v2/Wearable-App-Development.webp",
        imageAlt: "Wearable App Development image",
      },
      {
        title: "Learning and Education Apps",
        value: "web-service-6",
        description:
          "Our white label learning platforms include courses, quizzes, assignments, instructor dashboards, student progress, and community interaction.",
        imageSrc: "/images/v2/Wearable-App-Development.webp",
        imageAlt: "Wearable App Development image",
      },
      {
        title: "Membership and Community Apps",
        value: "web-service-7",
        description:
          "We create community driven apps for clubs, programs, creators, and organizations with feeds, groups, events, messaging, and content sections.",
        imageSrc: "/images/v2/Wearable-App-Development.webp",
        imageAlt: "Wearable App Development image",
      },
    ],
  };
  const mobileAppServiceEngagementData = [
    {
      title: "Fixed Price",
      icon: "/images/v2/budget-estimate.svg",
      description:
        "For projects with well-defined requirements, we work on a fixed-price model that gives you clarity from day one. We translate your scope into a structured execution plan, outline deliverables, and commit to a predictable budget.",
    },
    {
      title: "Time & Material",
      icon: "/images/Quick-Turnaround-Time.png",
      description:
        "When your roadmap is evolving or you’re working through discovery, iterations, and rapid validation, we shift to a time-and-material engagement. It gives you the flexibility to adjust priorities, experiment, and refine features without being locked into a rigid scope.",
    },
    {
      title: "Dedicated Team",
      icon: "/images/v2/dedicated-dev-team.svg",
      description:
        "For companies building long-term or scaling multiple product lines, we offer a dedicated team that integrates directly with your internal workflow. You get consistent talent—engineers, designers, PMs—aligned with your goals and committed to your roadmap.",
    },
  ];

  const whyChooseUsDevelopmentData = {
    title: "Why Choose Briworks for White Label Mobile Development Services",
    benefits: [
      {
        title: "Top 3% Talent",
        icon: "/images/v2/talent-availability.svg",
        description:
          "You work with developers who’ve already passed our filters for clarity, discipline, and problem-solving—people who don’t need babysitting to move a product forward.",
      },
      {
        title: "5-Star Rating",
        icon: "/images/v2/star.svg",
        description:
          "Our five-star record comes from consistent behaviour: clear communication, steady delivery, and a habit of fixing issues before they turn into excuses.",
      },
      {
        title: "100+ Completed Projects",
        icon: "/images/v2/why-n-2.svg",
        description:
          "Over a hundred builds have given us enough mileage to understand patterns, avoid traps, and guide your product without wasting cycles.",
      },
      {
        title: "AI-Driven Approach",
        icon: "/images/v2/fi_10644631.svg",
        description:
          "We use AI to cut slow steps, surface issues earlier, and keep engineering focused on the decisions that actually shape your product’s outcome.",
      },
      {
        title: "Real 24/7 Availability",
        icon: "/images/v2/24X7-support-mgmt.svg",
        description:
          "We operate across time zones with overlapping teams, so your project doesn’t sit idle—progress continues even when you’re offline.",
      },
    ],
  };

  return (
    <>
      {/* HERO */}
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
                White Label App Development
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
                White Label{" "}
                <span style={{ color: "#2f6bff" }}>Mobile App</span>{" "}
                Development Services
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
                We build ready to launch mobile applications that can be
                branded, customized, scaled, and shipped quickly. Our white
                label solutions cover fitness, wellness, delivery, ride
                hailing, education, marketplace, and on-demand services. Each
                solution is structured for fast deployment, flexible
                branding, and long term maintainability.
              </p>
              <div className="flex flex-wrap gap-3.5 my-10">
                <Link
                  href="/contact-us/"
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{
                    background: "#2f6bff",
                    color: "#fff",
                    border: "1px solid #2f6bff",
                    padding: "16px 32px",
                    fontSize: 16,
                  }}
                >
                  Start Your App Journey <ArrowRight size={16} strokeWidth={2} />
                </Link>
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
                  See What We Build
                </Link>
              </div>
              <div
                className="flex flex-wrap gap-[18px]"
                style={{ color: "#6b7a8a", fontSize: 14 }}
              >
                {[
                  "Ready-to-launch templates",
                  "Fast deployment",
                  "Flexible branding",
                ].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2"
                    style={{ color: "#6b7a8a" }}
                  >
                    <span style={{ color: "#16a34a" }}>
                      <Check size={16} strokeWidth={2.2} aria-hidden="true" />
                    </span>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div
                className="rounded-2xl overflow-hidden border border-[#e4eaf1] shadow-[0_4px_24px_rgba(11,30,51,0.08)]"
                style={{ background: "#fff" }}
              >
                <Image
                  className="object-cover w-full"
                  src="/images/v2/white-label-mobile-app-development-services-banner.webp"
                  alt="White Label Mobile App Development Services"
                  width={565}
                  height={650}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutOurExpertise
        title="Our White Label App Expertise"
        description1="We design repeatable app architectures that can adapt to different brands, features, and industries without rebuilding from scratch. You get a foundation that supports quick customization, publishes smoothly to the app stores, and stays stable when new modules are added."
        description2="Every product is built with clear functionality layers, intuitive workflows, and simple ways to extend the app for new business requirements. Our process includes transparent scoping, steady updates, and predictable delivery."
      />

      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="service-section"
        serviceData={whiteAppServices}
      />
      <MultipleCardInGrid
        // bgClass="bg-themeLight"
        title="Engagement Models For White Label App Development"
        cardData={mobileAppServiceEngagementData}
        buttonText="Know More"
        redirect="/contact-us/"
      />
      <MultipleCardWithIconBG
        bgClass="bg-sectionBG"
        data={whyChooseUsDevelopmentData}
      />
      <Honors />
      <ClientReviews light />

      <SeeingBelieving />
      <IndustriesWeServe darkBackground={false} />
      <HomePageBlogs />
      <ServicesFAQ />

      <section
        className="relative overflow-hidden text-center svc-mid-cta-bg"
        style={{ padding: "56px 0" }}
      >
        <div className="absolute inset-0 pointer-events-none svc-mid-cta-glow" />
        <div
          className="relative mx-auto px-5 md:px-10"
          style={{ maxWidth: 700, zIndex: 1 }}
        >
          <h3
            className="font-extrabold mb-3.5"
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              color: "#fff",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
            }}
          >
            Ready to Launch Your White Label App?
          </h3>
          <p
            className="mb-7"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 16,
              lineHeight: 1.7,
            }}
          >
            Build your next high-impact mobile app with a trusted partner.
            Let&apos;s turn your idea into a branded, ready-to-launch product.
          </p>
          <Link
            href="/contact-us/"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0b1e33] hover:!text-white hover:!border-[#0b1e33] mt-5"
            style={{
              background: "#fff",
              color: "#2f6bff",
              border: "1px solid #fff",
              padding: "16px 32px",
              fontSize: 16,
            }}
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default WhiteLabelAppDevelopment;
