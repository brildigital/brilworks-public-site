"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import HireTeamHeroSection from "../HireTeam/HireTeamHeroSection";
import ServicesSection from "../Common/ServicesSection";

const JavaFAQs = dynamic(() => import("./TechnologyFAQ"));
const TechnologyDevelopers = dynamic(() => import("./TechnologyDevelopers"));
const TechnologyCombination = dynamic(() => import("./TechnologyCombination"));
const SolutionContactForm = dynamic(() =>
  import("../Solution/SolutionContactForm")
);
const BenefitOfHiringDevelopers = dynamic(() =>
  import("./BenefitOfHiringDevelopers")
);
const HireDevelopersInThreeSteps = dynamic(() =>
  import("../HireTeam/HireDevelopersInThreeSteps")
);
const HireDevelopersPricingPlan = dynamic(() =>
  import("../HireTeam/HireDevelopersPricingPlan")
);

const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const JavaTechnology = () => {
  const javaServices = {
    title: "Enhance Your Applications with Our Java Development Services.",
    desc: "Our services drive sustainable growth.",
    buttonText: "Get a Quote for your Project",
    servicesList: [
      {
        title: "Java Consulting",
        value: "java-service-1",
        imageSrc: "/images/v2/java-consulting.webp",
        description:
          "Our team has a unique combination of skills, experience, and cultural expertise (both domestically and internationally) to provide you with fast, accurate advice.",
      },
      {
        title: "Java Web Development",
        value: "java-service-2",
        imageSrc: "/images/v2/web-development.webp",
        description:
          "Our Full-stack Java Developers have the knowledge and experience to design, develop, release and support scalable web-based solutions for your business. They use modern technologies such as Spring Boot, Hibernate, and Microservices to help you organize your business into highly scalable applications.",
      },
      {
        title: "Java Software Development",
        value: "java-service-3",
        imageSrc: "/images/v2/java-software-development.webp",
        description:
          "Our Java Developers have a proven track record of delivering quality software at a rapid pace. They have extensive knowledge of enterprise-level technologies such as Java, C++, and other tools in order to create scalable, robust, and platform-independent software that is easily maintainable.",
      },
      {
        title: "Spring Core Development",
        value: "java-service-4",
        imageSrc: "/images/v2/java-spring-core-dev.webp",
        description:
          "Hire Spring boot developer to easily develop J2EE applications from plain old Java Objects to enterprises level services through Spring framework.",
      },

      {
        title: "Java App Development",
        value: "java-service-5",
        imageSrc: "/images/v2/mobile-app-img.webp",
        description:
          "Have you considered the benefits of hiring an app developer with Java programming skills? Our developers are skilled at java application development and in developing all types of mobile applications from games, and social media applications to enterprise solutions.",
      },
      {
        title: "Java Full Stack Development",
        value: "java-service-6",
        imageSrc: "/images/v2/java-full-stack-dev.webp",
        description:
          "Our team is proficient in full-stack java development. We do not believe in off-the-shelf frameworks or ready-made solutions. Instead, we work with our clients to build scalable applications that are highly scalable, performant, and maintainable.",
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
      <HireTeamHeroSection
        technologyText="Hire Java Developers"
        title="Hire Java Developer to Stay in Sync with Backend"
        description="Scale your application development team with our top-notch Java developers. Choose our Java development company to take your project to unforeseen heights of success."
        imageSrc="/images/v2/java-banner.webp"
      />
      <ServicesSection
        sectionId="hire-java-developer"
        serviceData={javaServices}
      />
      <TechnologyDevelopers />
      <BenefitOfHiringDevelopers />
      <TechnologyCombination />
      <HireDevelopersInThreeSteps title="Java Developers" />
      <HireDevelopersPricingPlan title="Java Developer" />
      <HomePageBlogs />
      <SolutionContactForm />
      <JavaFAQs />
    </>
  );
};

export default JavaTechnology;
