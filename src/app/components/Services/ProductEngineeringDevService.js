"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";
import CTASection from "../Common/CTASection";

const Honors = dynamic(() => import("../Homepage/Honors"));
const IndustriesWeServe = dynamic(() =>
  import("../Homepage/IndustriesWeServe")
);
const MultipleCardWithIconBG = dynamic(() =>
  import("../Common/MultipleCardWithIconBG")
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const ServicesSection = dynamic(() => import("../Common/ServicesSection"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const ProductEngineeringDevService = () => {
  const productDevelopmentServices = {
    title: "Our Product Development Services",
    servicesList: [
      {
        title: "Product Conceptualization and Ideation",
        value: "product-engineering-1",
        description:
          "Innovation is exciting, but the journey from concept to creation can be complex. We'll partner with you to transform your vision into a clear, actionable plan. We analyze technical feasibility and market trends, ensuring your product is viable and successful in the long run.",
        imageSrc: "/images/v2/product-conceptualization-ideation.webp",
        imageAlt: "Product Conceptualization img",
      },
      {
        title: "Product Design and Engineering",
        value: "product-engineering-2",
        description:
          "We combine user-centric design with robust engineering to create intuitive, scalable, and future-proof software solutions. Our expert designers and engineers collaborate seamlessly to bridge the gap between imagination and innovation.",
        imageSrc: "/images/v2/product-design-engineering.webp",
        imageAlt: "Product Design img",
      },
      {
        title: "Quality Assurance and Testing",
        value: "product-engineering-3",
        description:
          "Ship with confidence.  We go beyond functionality testing, ensuring exceptional performance, security, and user experience. Our QA and Testing services meticulously examine your software, identifying and eliminating bugs.",
        imageSrc: "/images/v2/quality-assurance-testing.webp",
        imageAlt: "Quality Assurance img",
      },
      {
        title: "UI/UX development services",
        value: "product-engineering-4",
        description:
          "Don't just build software, create unforgettable experiences. Our UI/UX design alchemists transform ideas into intuitive interfaces and captivating user journeys. We stay ahead of design trends, crafting UIs that are not only beautiful but scalable and adaptable.",
        imageSrc: "/images/v2/ux-development-services.webp",
        imageAlt: "UI/UX development img",
      },
      {
        title: "Application development services",
        value: "product-engineering-5",
        description:
          "From concept to creation, we're with you every step of the way. We collaborate closely with you to understand your vision, translate it into a concrete plan, and deliver a final product that exceeds expectations.",
        imageSrc: "/images/v2/application-development-services.webp",
        imageAlt: "Application development img",
      },
    ],
  };
  const whyChooseUsProductData = {
    title: "Why Choose Brilworks?",
    benefits: [
      {
        title: "Expert Team",
        icon: "/images/v2/extensive-pool.svg",
        description:
          "Skilled engineers with a wealth of experience to every project, ensuring successful product development from concept to launch.",
      },
      {
        title: "Scalable Solutions",
        icon: "/images/v2/fi_8109512.svg",
        description:
          "We build products that can grow with your business. Our solutions are designed to be adaptable and integrate seamlessly with future needs.",
      },
      {
        title: "Agile Approach",
        icon: "/images/v2/fi_4288807.svg",
        description:
          "We use a flexible, iterative development process to adapt to your needs and deliver high-quality results quickly.",
      },
      {
        title: "On-Time Delivery",
        icon: "/images/v2/fi_2612924.svg",
        description:
          "Our efficient processes and clear communication ensure your project is delivered on time and within budget.",
      },
      {
        title: "Quality Focus",
        icon: "/images/v2/fi_10227466.svg",
        description:
          "We are committed to delivering exceptional products. Our rigorous testing processes ensure your product is reliable, bug-free, and exceeds expectations.",
      },
      {
        title: "Transparent Communication",
        icon: "/images/v2/live-chat-icon.svg",
        description:
          "We believe in open communication throughout the development process. You'll always be informed and involved in every step of the product's journey.",
      },
    ],
  };
  return (
    <>
      <ServiceHeroSection
        title="Product Engineering & Development Service"
        description="From concept to creation, we partner with you throughout your engineering product development journey. Are you looking for a reliable partner to navigate the complexities of product engineering and development? Our team of experts brings innovative solutions to every stage."
        buttonText="Get Free Consultation"
        imageSrc="/images/v2/product-engineering-banner.webp"
      />
      <CTASection
        titleClass="md:w-[70%]"
        descriptionClass="md:w-4/5"
        title="Build High-Performance Products with Our Product Engineering Services"
        description="We combine cutting-edge technology with a deep understanding of user needs to deliver exceptional solutions that push boundaries and leave a lasting impression. Let's craft an innovative product that stands out in a crowded marketplace."
        buttonText="Let’s Discuss"
        darkBackground={false}
      />
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="service-section"
        serviceData={productDevelopmentServices}
      />
      <MultipleCardWithIconBG data={whyChooseUsProductData} />
      <Honors />
      <CTASection
        titleClass=""
        title="Leverage our expertise in product engineering services to optimize your product's performance."
        description="Get a free consultation to see how our expertise can bring your product vision to life."
        buttonText="Contact Us Now"
      />
      <IndustriesWeServe darkBackground={false} />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default ProductEngineeringDevService;
