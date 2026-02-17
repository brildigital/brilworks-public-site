"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";
import SolutionHeroSection from "./SolutionHeroSection";
import ServicesSection from "../Common/ServicesSection";

const HealthcareFAQs = dynamic(() => import("./SolutionFAQ"));
const SolutionContactForm = dynamic(() => import("./SolutionContactForm"));
const MultipleKeyValueWithBG = dynamic(
  () => import("../Common/MultipleKeyValueWithBG"),
);
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const TypesOfAppWeDevelop = dynamic(() => import("./TypesOfAppWeDevelop"));
const SolutionEngagementAndHowCanStart = dynamic(
  () => import("./SolutionEngagementAndHowCanStart"),
);

const HealthCare = () => {
  const healthcareServices1 = {
    title:
      "Leverage The Power of Technology with Our Healthcare Software Development Services",
    buttonText: "Build My Healthcare App",
    servicesList: [
      {
        title: "Telemedicine Software Developments",
        value: "healthcare-1-1",
        description:
          "Our custom healthcare software development services include application development, custom reporting, and real-time data interaction.",
        imageSrc: "/images/v2/telemedicine-img.webp",
        imageAlt: "Telemedicine-Software-Developments",
      },
      {
        title: "Remote Patient Monitoring Software",
        value: "healthcare-1-2",
        description:
          "With remote monitoring software, doctors can monitor patients’ health remotely via virtual care or vitals captured through wearable devices and IoT sensors. This improves patient outcomes by providing healthcare professionals with better tools to provide superior care at the most appropriate time.",
        imageSrc: "/images/v2/remote-patient-monitoring-software.webp",
        imageAlt: "Remote-Patient-Monitoring-Software",
      },
      {
        title: "mPrescription App Development",
        value: "healthcare-1-3",
        description:
          "We help simplify medication management by providing prescription mobile apps to store patient data, medical history, allergies, and prescriptions. Our apps are trusted by both doctors and patients alike.",
        imageSrc: "/images/v2/mprescription-app-development.webp",
        imageAlt: "mPrescription-App-Development.jpg",
      },
      {
        title: "Patient Engagement Solutions",
        value: "healthcare-1-4",
        description:
          "Your patients are a priority and we’ll help you create systems that deliver great care, improve patient satisfaction and increase revenue. Our patient engagement solutions allow patients and healthcare providers to connect anywhere and anytime with great ease.",
        imageSrc: "/images/v2/patient-engagement-solutions.webp",
        imageAlt: "Patient-Engagement-Solutions",
      },
      {
        title: "IoT Healthcare Software",
        value: "healthcare-1-5",
        description:
          "Our IoT software helps doctors make better decisions faster. It captures relevant patient information through smart sensors, then analyses it in real-time to generate valuable insights. We develop applications that empower doctors and medical staff with accurate and valuable patient data.",
        imageSrc: "/images/v2/iot-healthcare-software.webp",
        imageAlt: "IoT-Healthcare-Software",
      },
      {
        title: "Electronic Medical Record Software",
        value: "healthcare-1-6",
        description:
          "Growing patient expectations requires doctors to not just interact with their patients, but also provide them with efficient and comprehensive care. With our software, you can leverage your existing EMR/EHR platform to maximize clinical productivity and interact with patients via patient portals.",
        imageSrc: "/images/v2/electronic-medical-record-software.webp",
        imageAlt: "Electronic-Medical-Record-Software",
      },
    ],
  };
  const healthcareServices2 = {
    title:
      "Medical Software Development Services Catering to the Entire Healthcare Ecosystem",
    buttonText: "Speak With Our Experts",
    servicesList: [
      {
        title: "Healthcare Providers",
        value: "healthcare-2-1",
        description:
          "We assist healthcare providers to automate medical workflows, simplify tedious tasks and increase patient satisfaction. Improve your hospital efficiency and uptime while streamlining daily processes.",
        imageSrc: "/images/v2/healthcare-providers.webp",
        imageAlt: "Healthacre Provider",
      },
      {
        title: "Pharmaceutical Companies",
        value: "healthcare-2-2",
        description:
          "We believe that bringing together the best software options for pharma research and development can help you achieve your goals. Our team assists you from the outset of your drug development projects to the end of each phase in your clinical trial.",
        imageSrc: "/images/v2/pharmaceutical-companies.webp",
        imageAlt: "Pharmaceutical Companies",
      },
      {
        title: "Medical Device Manufacturers",
        value: "healthcare-2-3",
        description:
          "Medical device manufacturers are at the forefront of innovation, rapidly transforming how healthcare is delivered. Our software helps medical device manufacturers bring new functionality to their products.",
        imageSrc: "/images/v2/medical-device-manufactures.webp",
        imageAlt: "Medical Device Manufacturers",
      },
      {
        title: "Healthcare Startups",
        value: "healthcare-2-4",
        description:
          "We’re committed to helping healthcare startups bring their incredible ideas to life. From medicine to medicine delivery, health technology is changing at an exponential rate. Our team of experts uses their experience and expertise to deliver software solutions that are agile, scalable, reliable, and secure.",
        imageSrc: "/images/v2/healthcare-startups.webp",
        imageAlt: "Healthcare Startups",
      },
    ],
  };

  const healthcareExperienceShowCase = [
    {
      value: "HIPAA and GDPR",
      description: "Compliant Apps",
      color: "#FFE2E5",
    },
    {
      value: "Experience",
      description: "Proven mHealth",
      color: "#E9FFE2",
    },

    {
      value: "Agile",
      description: "Centric Model",
      color: "#FFE8FC",
    },
    {
      value: "Security",
      description: "First Approach",
      color: "#E5F4FF",
    },
    {
      value: "Un-Paralleled",
      description: "Code Quality",
      color: "#FCFFE3",
    },
    {
      value: "Well-Planned",
      description: "Architecture",
      color: "#F4ECFF",
    },
  ];

  const healthcareAppWeDevelop = {
    title: "Types Of Healthcare Apps We Develop",
    description:
      "By utilizing our expertise in working with various players in the healthcare industry, we provide healthcare application development services that make your product a crucial part of the overall healthcare ecosystem. Our services encompass the development of custom apps, designed to meet your business needs.",
    buttonText: "Let’s Get In Touch",
    imageSrc: "/images/v2/healthcare-app-type.webp",
    imageAlt: "healthcare-app-type",
    appTypesList: [
      "Appointment Scheduling Applications",
      "Medication Intake Tracking Apps",
      "Home Health Monitoring Apps",
      "Caregiver Management Apps",
      "Drug Inventory Tracking Apps",
      "Wearable Tech Apps",
    ],
  };

  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <>
      <SolutionHeroSection
        technologyText="Healthcare Software Development Services"
        title="Healthcare Software Development"
        description="Leverage our healthcare software development services to improve processes and patient experience. Resolve accessibility issues by offering remote consultations and telehealth solutions."
        imageSrc="/images/v2/helathcare-banner.webp"
      />
      <ServicesSection
        sectionId="services-one"
        serviceData={healthcareServices1}
      />
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="services-two"
        imageOnLeft={true}
        serviceData={healthcareServices2}
      />
      <TypesOfAppWeDevelop data={healthcareAppWeDevelop} />
      <MultipleKeyValueWithBG
        bgClass="bg-sectionBG"
        buttonText="Let’s Get In Touch"
        title="What Makes Brilworks The Best Healthcare Software Company?"
        description="It is no secret that innovation and technology play important roles in the healthcare industry. We help healthcare organizations innovate and transform their business in a way that makes them more responsive to the evolving needs of their patients."
        keyValueData={healthcareExperienceShowCase}
      />
      <SeeingBelieving
        bgClass="bg-white"
        title="Our Portfolio"
        buttonText="Work With Us"
      />
      <HomePageBlogs />
      <SolutionEngagementAndHowCanStart />
      <SolutionContactForm />
      <HealthcareFAQs />
    </>
  );
};

export default HealthCare;
