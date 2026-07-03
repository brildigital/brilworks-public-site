"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";
import {
  ShieldCheck,
  Clapperboard,
  Tv2,
  Globe,
  Rss,
  Languages,
  MessageSquare,
  CreditCard,
  Cpu,
  Bell,
  Layout,
  Share2,
  Star,
  Award,
  RefreshCw,
  MessageCircle,
  LifeBuoy,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ButtonV2 from "../Common/ButtonV2";
import ServicesSection from "../Common/ServicesSection";
import IndustryMidCTA from "./IndustryMidCTA";
import IndustryTrustBar from "./IndustryTrustBar";
import "../../styles/ServiceLightTheme.css";

const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));

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
  const trustBarItems = [
    { icon: ShieldCheck, label: "AWS Consulting Partner" },
    { icon: Clapperboard, label: "10M+ Users Served" },
    { icon: Tv2, label: "4K Streaming Ready" },
    { icon: Globe, label: "12+ Countries Served" },
  ];

  const mediaEntertainmentService = {
    title: "Our Media And Entertainment Software Solutions",
    buttonText: "Build My Entertainment App",
    servicesList: [
      {
        title: "OTT Streaming Apps",
        iconSrc: "/images/v2/play-theme-icon.svg",
        value: "media-app-1",
        description:
          "Leverage our proven domain expertise along with cutting-edge technologies to create a streaming service that is as fast as it is instantly accessible.",
        imageSrc: "/images/v2/ott-streaming-app.webp",
        imageAlt: "OTT Streaming Apps",
      },
      {
        title: "Music Streaming Apps",
        iconSrc: "/images/v2/media-entertainmnet-icon.svg",
        value: "media-app-2",
        description:
          "Make the way to the melodies of your music streaming app. Our powerful backend helps you manage thousands of active listeners without any interruption or issue.",
        imageSrc: "/images/v2/music-streaming-apps.webp",
        imageAlt: "Music Streaming Apps",
      },
      {
        title: " Photo Editing & Sharing Apps",
        iconSrc: "/images/v2/social-integration-icon.svg",
        value: "media-app-3",
        description:
          "Become one of the most used photo editing and sharing apps. We help you create an Instagram-like app with your own photo editing and sharing features.",
        imageSrc: "/images/v2/photo-editing-sharing-apps.webp",
        imageAlt: "Photo Editing & Sharing Apps",
      },
      {
        title: "Ticket Booking Portals",
        iconSrc: "/images/v2/interactive-ui-icon.svg",
        value: "media-app-4",
        description:
          "We develop ticket booking portals for all kinds of events including movie theatres, live concerts, sports matches, etc. Our team is focused on providing a seamless ticket-booking experience to eager fans.",
        imageSrc: "/images/v2/ticket-booking-portals.webp",
        imageAlt: "Ticket Booking Portals",
      },
      {
        title: "Gaming apps",
        iconSrc: "/images/v2/developer-icon.svg",
        value: "media-app-5",
        description:
          "We create gaming apps across platforms and genres. In the world of gaming, we are known for our stable infrastructure, technical speed, efficient development process, and cutting-edge technology.",
        imageSrc: "/images/v2/gaming-apps.webp",
        imageAlt: "Gaming apps",
      },
      {
        title: "Content Aggregation Apps",
        iconSrc: "/images/v2/read-icon.svg",
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
        icon: <Rss size={28} color="#1A5CCC" strokeWidth={1.75} />,
      },
      {
        title: "Multilingual Support",
        icon: <Languages size={28} color="#1A5CCC" strokeWidth={1.75} />,
      },
      {
        title: "Live Chatting",
        icon: <MessageSquare size={28} color="#1A5CCC" strokeWidth={1.75} />,
      },
      {
        title: "Secure Payment Gateways",
        icon: <CreditCard size={28} color="#1A5CCC" strokeWidth={1.75} />,
      },
      {
        title: "IoT Integration",
        icon: <Cpu size={28} color="#1A5CCC" strokeWidth={1.75} />,
      },
      {
        title: "Push Notifications",
        icon: <Bell size={28} color="#1A5CCC" strokeWidth={1.75} />,
      },
      {
        title: "Interactive UI/UX",
        icon: <Layout size={28} color="#1A5CCC" strokeWidth={1.75} />,
      },
      {
        title: "Social Media Integration",
        icon: <Share2 size={28} color="#1A5CCC" strokeWidth={1.75} />,
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

  const whyChooseUsDevelopmentData = {
    title: "Why Choose Brilworks for Media & Entertainment",
    benefits: [
      {
        title: "Top-Rated Developers",
        icon: <Star size={28} color="#1A5CCC" strokeWidth={1.75} />,
        description:
          "Our team members consistently earn top ratings for their technical skills and communication.",
      },
      {
        title: "Proven Media Expertise",
        icon: <Award size={28} color="#1A5CCC" strokeWidth={1.75} />,
        description:
          "We have built streaming platforms, gaming apps, and content aggregation solutions for leading media companies.",
      },
      {
        title: "Agile & Transparent",
        icon: <RefreshCw size={28} color="#1A5CCC" strokeWidth={1.75} />,
        description:
          "You see progress regularly through sprints and working software, not after months of silence.",
      },
      {
        title: "Clear Communication",
        icon: <MessageCircle size={28} color="#1A5CCC" strokeWidth={1.75} />,
        description:
          "We explain technical decisions in plain language without overwhelming you with jargon.",
      },
      {
        title: "Post-Launch Support",
        icon: <LifeBuoy size={28} color="#1A5CCC" strokeWidth={1.75} />,
        description:
          "We provide training, fix bugs, make adjustments, and add features as your needs evolve.",
      },
    ],
  };

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
                Media And Entertainment
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
                <span style={{ color: "#2f6bff" }}>Media & Entertainment</span>{" "}
                App Development Services
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
                We take your customers on a visual delight with our
                entertainment software solutions. Create an immersive experience
                for your users and earn a competitive edge in the entertainment
                &amp; media industry.
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: "120+", label: "Products Shipped" },
                  { value: "10M+", label: "Users Served" },
                  { value: "4K+", label: "Streaming Ready" },
                  { value: "98%", label: "Client Retention" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl transition-all svc-stat-card text-center"
                    style={{ padding: "18px 12px" }}
                  >
                    <div
                      className="font-extrabold leading-none"
                      style={{ color: "#2f6bff", fontSize: 26 }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{ color: "#6b7a8a", fontSize: 12, marginTop: 6 }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
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
                  src="/images/v2/media-and-entertainment-banner.webp"
                  alt="Media And Entertainment"
                  width={565}
                  height={650}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <IndustryTrustBar items={trustBarItems} />
      <ServicesSection
        sectionId="services-one"
        serviceData={mediaEntertainmentService}
      />

      <IndustryMidCTA
        title="Ready to Build Your Media & Entertainment App?"
        description="Get a free consultation and project roadmap. We respond within 24 hours."
      />

      <TypesOfAppWeDevelop
        bgClass="bg-sectionBG"
        data={entertainmentAppWeDevelop}
      />
      <MultipleCardWithIconBG data={entertainmentFeature} />
      <MultipleKeyValueWithBG
        bgClass="bg-sectionBG"
        buttonText="Let's Get In Touch"
        title="What Makes Brilworks The Best Entertainment App Company?"
        description="We specialize in creating world-class entertainment apps to help you increase engagement and retain your customers over a longer period of time. Get ready to elevate your app to the next level of success with our media & entertainment software solutions."
        keyValueData={entertainmentExperienceShowCase}
      />
      <MultipleCardWithIconBG data={whyChooseUsDevelopmentData} />
      <ClientReviews light />
      <SolutionEngagementAndHowCanStart />
      <MediaNEntertainmentFAQs />
      <SolutionContactForm
        title="Launch Your Media & Entertainment Platform"
        description="Tell us about your streaming, gaming, or content platform vision. Our media tech experts will craft a tailored proposal."
        submitLabel="Get My Media App Proposal"
        benefits={[
          "4K-ready streaming architecture",
          "CDN-optimized content delivery",
          "Cross-platform mobile and web apps",
          "24/7 uptime monitoring and support",
        ]}
        bgClassName="svc-mid-cta-bg"
      />
    </>
  );
};

export default MediaAndEntertainment;
