"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";
import ServicesSection from "../Common/ServicesSection";

const TechStackWeUse = dynamic(() => import("./TechStackWeUse"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const CTASection = dynamic(() => import("../Common/CTASection"));
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

const KubernetesConsultingService = () => {
  const kubernetesServices = {
    title: "Kubernetes Consulting Services by Brilworks",
    servicesList: [
      {
        title: "Kubernetes Consultation",
        value: "kubernetes-service-1",
        description:
          "Our expert consultants guide you through every stage, from assessing your readiness to optimizing your deployment. We plan a tailored roadmap, whether it's modernizing legacy apps or building scalable cloud-native solutions.",
        imageSrc: "/images/v2/kubernetes-consultation.webp",
        imageAlt: "Kubernetes consultation img",
      },
      {
        title: "Kubernetes Application Development & Migration",
        value: "kubernetes-service-2",
        description:
          "Build and deploy containerized applications on Kubernetes with expert guidance. Streamline your development process and optimize delivery for efficiency.",
        imageSrc: "/images/v2/application-development-migration.webp",
        imageAlt: "Kubernetes Application img",
      },
      {
        title: "DevSecOps - Enabling Security & Compliance",
        value: "kubernetes-service-3",
        description:
          "Integrate security and compliance into your DevOps pipeline. Develop secure applications and meet industry regulations with expert assistance, ensuring peace of mind.",
        imageSrc: "/images/v2/decsecops-securing-compliance.webp",
        imageAlt: "DevSecOps img",
      },
      {
        title: "Kubernetes Professional Support",
        value: "kubernetes-service-4",
        description:
          "Get 24/7 support from certified Kubernetes professionals. Keep your clusters running smoothly, troubleshoot issues swiftly, and optimize deployments for peak performance.",
        imageSrc: "/images/v2/kubernetes-professional-support.webp",
        imageAlt: "Development DevOps img",
      },
      {
        title: "Kubernetes Training",
        value: "kubernetes-service-5",
        description:
          "Equip your developers with the knowledge and skills to master Kubernetes. Comprehensive training programs cover all aspects, from fundamental concepts to advanced topics, fostering success with the platform.",
        imageSrc: "/images/v2/kubernetes-training.webp",
        imageAlt: "Security compliance img",
      },
    ],
  };
  const whyChooseUsKubernetesData = {
    title: "Why Choose Brilworks?",
    benefits: [
      {
        title: "Transparency and support",
        icon: "/images/v2/why-n-2.svg",
        description:
          "We prioritize clear and constant communication throughout the entire process, ensuring you are involved and informed in every step. ",
      },
      {
        title: "Scalable team",
        icon: "/images/v2/fi_8109512.svg",
        description:
          "Gain the advantage of a flexible team structure that allows Brilworks to adjust resource allocation based on your specific project requirements.",
      },
      {
        title: "Proven track record",
        icon: "/images/v2/fi_10227466.svg",
        description:
          "We have empowered businesses across several domains with tailored Kubernetes solutions, helping them achieve an average 30% improvement and 40% reduction in downtime.",
      },
      {
        title: "Domain Expertise",
        icon: "/images/v2/fi_18610115.svg",
        description:
          "Our engineers specialize in architecting, deploying, and optimizing Kubernetes solutions tailored to meet the unique needs of our clients across industries.",
      },
      {
        title: "Certified team",
        icon: "/images/v2/fi_12773678.svg",
        description:
          "As a leading Kubernetes consulting service provider, we house a team of certified experts who hold certification from reputed organizations.",
      },

      {
        title: "Agile Development",
        icon: "/images/v2/fi_4288807.svg",
        description:
          "Our agile approach to Kubernetes implementation breaks down projects into smaller, interactive cycles, enabling you to gain value from your investment sooner.",
      },
    ],
  };
  return (
    <>
      <ServiceHeroSection
        title="Achieve resilience, scale, and savings"
        description="Boost your DevOps journey with our Kubernetes consulting service. Our experts plan a roadmap to achieve rapid deployments and seamless upgrades with our proven Kubernetes consulting services."
        buttonText="Let's Get Started"
        imageSrc="/images/v2/kubernates-consulting-banner.webp"
      />
      <ServicesSection
        sectionId="kubernetes-service"
        serviceData={kubernetesServices}
      />
      <MultipleCardWithIconBG
        bgClass="bg-sectionBG"
        data={whyChooseUsKubernetesData}
      />
      <Honors />
      <CTASection
        title="Transform your operations with Kubernetes expertise."
        description="Get in touch to discover how we can elevate your efficiency and performance."
        buttonText="Schedule a Call"
      />
      <TechStackWeUse />
      <IndustriesWeServe darkBackground={false} />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default KubernetesConsultingService;
