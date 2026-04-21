"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";
import { ShieldCheck, Stethoscope, Users, Lock } from "lucide-react";
import SolutionHeroSection from "./SolutionHeroSection";
import ServicesSection from "../Common/ServicesSection";
import IndustryMidCTA from "./IndustryMidCTA";
import IndustryTrustBar from "./IndustryTrustBar";

const HealthcareFAQs = dynamic(() => import("./SolutionFAQ"));
const SolutionContactForm = dynamic(() => import("./SolutionContactForm"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const MultipleCardWithIconBG = dynamic(() =>
  import("../Common/MultipleCardWithIconBG")
);
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const TypesOfAppWeDevelop = dynamic(() => import("./TypesOfAppWeDevelop"));
const SolutionEngagementAndHowCanStart = dynamic(() =>
  import("./SolutionEngagementAndHowCanStart")
);

const HealthCare = () => {
  const trustBarItems = [
    { icon: ShieldCheck, label: "AWS Consulting Partner" },
    { icon: Stethoscope, label: "HIPAA Compliant" },
    { icon: Users, label: "500K+ Patients Served" },
    { icon: Lock, label: "HL7 & GDPR Ready" },
  ];

  const healthcareServices1 = {
    title:
      "Leverage The Power of Technology with Our Healthcare Software Development Services",
    buttonText: "Build My Healthcare App",
    servicesList: [
      {
        title: "Telemedicine Software Developments",
        iconSrc: "/images/v2/heathcare-icon.svg",
        value: "healthcare-1-1",
        description:
          "Our custom healthcare software development services include application development, custom reporting, and real-time data interaction.",
        imageSrc: "/images/v2/telemedicine-img.webp",
        imageAlt: "Telemedicine-Software-Developments",
      },
      {
        title: "Remote Patient Monitoring Software",
        iconSrc: "/images/v2/realtime-icon.svg",
        value: "healthcare-1-2",
        description:
          "With remote monitoring software, doctors can monitor patients' health remotely via virtual care or vitals captured through wearable devices and IoT sensors. This improves patient outcomes by providing healthcare professionals with better tools to provide superior care at the most appropriate time.",
        imageSrc: "/images/v2/remote-patient-monitoring-software.webp",
        imageAlt: "Remote-Patient-Monitoring-Software",
      },
      {
        title: "mPrescription App Development",
        iconSrc: "/images/v2/interactive-ui-icon.svg",
        value: "healthcare-1-3",
        description:
          "We help simplify medication management by providing prescription mobile apps to store patient data, medical history, allergies, and prescriptions. Our apps are trusted by both doctors and patients alike.",
        imageSrc: "/images/v2/mprescription-app-development.webp",
        imageAlt: "mPrescription-App-Development.jpg",
      },
      {
        title: "Patient Engagement Solutions",
        iconSrc: "/images/v2/people-icon-vector.svg",
        value: "healthcare-1-4",
        description:
          "Your patients are a priority and we'll help you create systems that deliver great care, improve patient satisfaction and increase revenue. Our patient engagement solutions allow patients and healthcare providers to connect anywhere and anytime with great ease.",
        imageSrc: "/images/v2/patient-engagement-solutions.webp",
        imageAlt: "Patient-Engagement-Solutions",
      },
      {
        title: "IoT Healthcare Software",
        iconSrc: "/images/v2/iot-integration-icon.svg",
        value: "healthcare-1-5",
        description:
          "Our IoT software helps doctors make better decisions faster. It captures relevant patient information through smart sensors, then analyses it in real-time to generate valuable insights. We develop applications that empower doctors and medical staff with accurate and valuable patient data.",
        imageSrc: "/images/v2/iot-healthcare-software.webp",
        imageAlt: "IoT-Healthcare-Software",
      },
      {
        title: "Electronic Medical Record Software",
        iconSrc: "/images/v2/read-icon.svg",
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
        iconSrc: "/images/v2/cloud-based-icon.svg",
        value: "healthcare-2-1",
        description:
          "We assist healthcare providers to automate medical workflows, simplify tedious tasks and increase patient satisfaction. Improve your hospital efficiency and uptime while streamlining daily processes.",
        imageSrc: "/images/v2/healthcare-providers.webp",
        imageAlt: "Healthacre Provider",
      },
      {
        title: "Pharmaceutical Companies",
        iconSrc: "/images/v2/developer-icon.svg",
        value: "healthcare-2-2",
        description:
          "We believe that bringing together the best software options for pharma research and development can help you achieve your goals. Our team assists you from the outset of your drug development projects to the end of each phase in your clinical trial.",
        imageSrc: "/images/v2/pharmaceutical-companies.webp",
        imageAlt: "Pharmaceutical Companies",
      },
      {
        title: "Medical Device Manufacturers",
        iconSrc: "/images/v2/data-driven-icon.svg",
        value: "healthcare-2-3",
        description:
          "Medical device manufacturers are at the forefront of innovation, rapidly transforming how healthcare is delivered. Our software helps medical device manufacturers bring new functionality to their products.",
        imageSrc: "/images/v2/medical-device-manufactures.webp",
        imageAlt: "Medical Device Manufacturers",
      },
      {
        title: "Healthcare Startups",
        iconSrc: "/images/v2/scalable-architecture-icon.svg",
        value: "healthcare-2-4",
        description:
          "We're committed to helping healthcare startups bring their incredible ideas to life. From medicine to medicine delivery, health technology is changing at an exponential rate. Our team of experts uses their experience and expertise to deliver software solutions that are agile, scalable, reliable, and secure.",
        imageSrc: "/images/v2/healthcare-startups.webp",
        imageAlt: "Healthcare Startups",
      },
    ],
  };

  const whyChooseUsData = {
    title: "Why Healthcare Companies Choose Us",
    benefits: [
      {
        title: "HIPAA and GDPR",
        description: "Compliant Apps",
        icon: "/images/v2/secure-pymt-icon.svg",
      },
      {
        title: "Experience",
        description: "Proven mHealth",
        icon: "/images/v2/heathcare-icon.svg",
      },
      {
        title: "Agile",
        description: "Centric Model",
        icon: "/images/v2/fast-turnaround-icon.svg",
      },
      {
        title: "Security",
        description: "First Approach",
        icon: "/images/v2/fraud-detection-icon.svg",
      },
      {
        title: "Un-Paralleled",
        description: "Code Quality",
        icon: "/images/v2/quality-project-mgmt-icon.svg",
      },
      {
        title: "Well-Planned",
        description: "Architecture",
        icon: "/images/v2/scalable-architecture-icon.svg",
      },
    ],
  };

  const healthcareAppWeDevelop = {
    title: "Types Of Healthcare Apps We Develop",
    description:
      "By utilizing our expertise in working with various players in the healthcare industry, we provide healthcare application development services that make your product a crucial part of the overall healthcare ecosystem. Our services encompass the development of custom apps, designed to meet your business needs.",
    buttonText: "Let's Get In Touch",
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
        title='Build Your <span class="bg-gradient-to-r from-[#017eeb] to-[#00ffff] bg-clip-text" style="--tw-gradient-from:#017eeb;--tw-gradient-to:#00ffff;-webkit-background-clip:text;-webkit-text-fill-color:transparent">Healthcare Platform</span> — HIPAA Compliant'
        description="Leverage our healthcare software development services to improve processes and patient experience. Resolve accessibility issues by offering remote consultations and telehealth solutions."
        imageSrc="/images/v2/helathcare-banner.webp"
        stats={[
          { value: "120+", label: "Products Shipped" },
          { value: "HIPAA", label: "Compliant" },
          { value: "500K+", label: "Patients Served" },
          { value: "98%", label: "Client Retention" },
        ]}
      />
      <IndustryTrustBar items={trustBarItems} />
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
      <IndustryMidCTA
        title="Ready to Build a Healthcare App?"
        description="Get a free consultation and project estimate. We respond within 24 hours."
      />
      <TypesOfAppWeDevelop data={healthcareAppWeDevelop} />
      <MultipleCardWithIconBG
        bgClass="bg-sectionBG"
        data={whyChooseUsData}
      />
      <ClientReviews />
      <SeeingBelieving
        bgClass="bg-white"
        title="Our Portfolio"
        buttonText="Work With Us"
      />
      <HomePageBlogs />
      <SolutionEngagementAndHowCanStart />
      <HealthcareFAQs />
      <SolutionContactForm
        title="Ready to Build Your Healthcare Platform?"
        description="You're one conversation away from turning your healthcare idea into a HIPAA-compliant, scalable platform."
        messageRequired={false}
        submitLabel="Get My Free Healthcare Consultation"
        benefits={[
          "Free 30-minute consultation with a healthcare specialist",
          "Detailed project proposal within 48 hours",
          "48-hour risk-free trial — no commitment",
          "Response guaranteed within 24 business hours",
          "HIPAA & GDPR compliance built in",
        ]}
      />
    </>
  );
};

export default HealthCare;
