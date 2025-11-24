"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";
import CTASection from "../Common/CTASection";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import AboutOurExpertise from "./AboutOurExpertise";
import MultipleCardInGrid from "../Common/MultipleCardInGrid";

const Honors = dynamic(() => import("../Homepage/Honors"));
const ServicesSection = dynamic(() => import("../Common/ServicesSection"));
const IndustriesWeServe = dynamic(() =>
  import("../Homepage/IndustriesWeServe")
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const MultipleCardWithIconBG = dynamic(() =>
  import("../Common/MultipleCardWithIconBG")
);
const TechStackWeWorkWith = dynamic(() =>
  import("../Technologies/TechStackWeWorkWith")
);
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const FitnessAppDevelopmentServices = () => {
  const fitnessAppServices = {
    title: "Types of Fitness Apps We Develop",
    servicesList: [
      {
        title: "Workout Training Apps",
        value: "web-service-1",
        description:
          "Comprehensive workout planning and tracking applications with exercise libraries, video demonstrations, customizable routines, progress tracking, and personalized training plans tailored to individual fitness goals.",
        imageSrc: "/images/v2/workout-training-apps.webp",
        imageAlt: "Native App Development image",
      },
      {
        title: "Nutrition & Diet Apps",
        value: "web-service-2",
        description:
          "Complete nutrition tracking solutions featuring calorie counters, meal planning, recipe databases, macro tracking, barcode scanning, and personalized dietary recommendations based on user goals.",
        imageSrc: "/images/v2/nutrition-diet-apps.webp",
        imageAlt: "Cross-Platform Development image",
      },
      {
        title: "Yoga & Meditation Apps",
        value: "web-service-3",
        description:
          "Mindfulness and wellness platforms offering guided meditation sessions, yoga routines, breathing exercises, sleep stories, stress management tools, and progress tracking for mental health.",
        imageSrc: "/images/v2/yoga-meditation-apps.webp",
        imageAlt: "PWA development image",
      },
      {
        title: "Running & Cycling Apps",
        value: "web-service-4",
        description:
          "GPS-enabled tracking apps for runners and cyclists with route mapping, distance tracking, pace monitoring, elevation tracking, social challenges, and integration with wearable devices.",
        imageSrc: "/images/v2/running-cycling-apps.webp",
        imageAlt: "IoT App Development image",
      },
      {
        title: "Personal Training Apps",
        value: "web-service-5",
        description:
          "Connect trainers with clients through virtual training platforms featuring live sessions, on-demand workouts, progress monitoring, communication tools, payment processing, and scheduling systems.",
        imageSrc: "/images/v2/personal-training-apps.webp",
        imageAlt: "Wearable App Development image",
      },
      {
        title: "Gym Management Apps",
        value: "web-service-6",
        description:
          "All-in-one solutions for fitness centers including member management, class scheduling, attendance tracking, billing and payments, staff management, and equipment maintenance tracking.",
        imageSrc: "/images/v2/gym-management-apps.webp",
        imageAlt: "Wearable App Development image",
      },
    ],
  };

  const whyChooseUsFitnessAppDevelopmentData = {
    title: "Why Choose Us",
    benefits: [
      {
        title: "Expert Team",
        icon: "/images/v2/extensive-pool.svg",
        description:
          "Experienced developers specializing in fitness and health technology",
      },
      {
        title: "Fast Delivery",
        icon: "/images/v2/fi_2612924.svg",
        description:
          "Agile development process ensuring timely project completion",
      },
      {
        title: "Custom Solutions",
        icon: "/images/v2/fi_11448887.svg",
        description:
          "Tailored apps designed specifically for your unique requirements",
      },
      {
        title: "Cross-Platform",
        icon: "/images/v2/Cross_Platform_Efficiency.svg",
        description: "Apps that work seamlessly on iOS and Android devices",
      },
      {
        title: "Secure & Compliant",
        icon: "/images/v2/trusted.svg",
        description: "HIPAA-compliant solutions protecting user health data",
      },
      {
        title: "Ongoing Support",
        icon: "/images/v2/ongoing-support-icon.svg",
        description: "Dedicated maintenance and support after launch",
      },
    ],
  };

  return (
    <>
      <ServiceHeroSection
        title="Fitness App Development"
        description="Transform your fitness vision into reality with cutting-edge mobile applications. We build innovative, user-friendly fitness apps that motivate users and drive engagement."
        buttonText="Start Your App Journey"
        imageSrc="/images/v2/fitness-app-development.webp"
      />
      <AboutOurExpertise
        title="About Our Company"
        description1="We are a leading fitness app development company specializing in creating comprehensive health and wellness solutions. With over a decade of experience in mobile app development, our team combines technical expertise with a deep understanding of the fitness industry. We've helped gyms, personal trainers, wellness coaches, and fitness startups launch successful apps that have collectively served millions of users worldwide."
        description2="Our mission is to make fitness accessible, engaging, and effective through technology. We leverage the latest technologies including AI, machine learning, wearable integrations, and real-time analytics to create apps that truly make a difference in people's lives."
      />

      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="service-section"
        serviceData={fitnessAppServices}
      />

      <MultipleCardWithIconBG
        bgClass="bg-sectionBG"
        data={whyChooseUsFitnessAppDevelopmentData}
      />
      <Honors />
      <ClientReviews />

      <SeeingBelieving />
      <IndustriesWeServe darkBackground={false} />
      <HomePageBlogs />
      <CTASection
        descriptionClass="md:w-4/5"
        title="Build your next high-impact web application with a trusted partner. Let’s turn your idea into a responsive, secure, and scalable digital experience."
        buttonText="Get a Free Consultation"
      />
      <ServicesFAQ />
    </>
  );
};

export default FitnessAppDevelopmentServices;
