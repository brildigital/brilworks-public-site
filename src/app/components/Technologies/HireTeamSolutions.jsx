import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import Heading from "../HTMLComponents/Heading";

const reactJsSolutions = {
  title: "ReactJS Solutions Precision-Engineered for Your Industry",
  description:
    "Tailored for eCommerce, Healthcare, Fintech & Beyond. We engineer React solutions that solve your industry’s unique challenges 72% of clients see ROI within 12 weeks.",
  solutions: [
    {
      title: "eCommerce",
      description:
        "Power your storefronts with React’s dynamic capabilities. We build performant interfaces featuring AI-driven recommendations, one-click checkouts, and real-time inventory updates.",
      icon: "/images/v2/shopping-cart-check.svg",
    },
    {
      title: "Healthcare",
      description:
        "Deliver HIPAA-compliant platforms that streamline care. Our React-powered telemedicine portals, EHR systems, and AI triage tools reduce administrative workload.",
      icon: "/images/v2/heathcare-icon.svg",
    },
    {
      title: "Fintech",
      description:
        "Build React applications that balance speed with ironclad security. Our solutions include real-time transaction dashboards, biometric KYC workflows, and crypto interfaces audited for ISO 27001 compliance.",
      icon: "/images/v2/usd-circle.svg",
    },
    {
      title: "Real Estate",
      description:
        "Accelerate lead conversion with React tools like 3D virtual tours, AI-powered matching engines, and smart contract integrations.",
      icon: "/images/v2/real-estate.svg",
    },
    {
      title: "eLearning",
      description:
        "Create React-based learning systems that include interactive VR classrooms, AI tutors, and certification trackers proven to boost learner retention by 41%.",
      icon: "/images/v2/user-graduate.svg",
    },
    {
      title: "Software & High-Tech",
      description:
        "Stay ahead with React architectures built for scale. We deliver AI-augmented dashboards, IoT management panels, and legacy modernization strategies.",
      icon: "/images/v2/manufaturing-icon.svg",
    },
  ],
};
const nodeJSSolutionsList = {
  title: "Industry-Specific Node.js Solutions",
  description:
    "We build Node.js applications tailored for industries like eCommerce, healthcare, fintech, and beyond.",
  solutions: [
    {
      title: "eCommerce",
      description:
        "Our Node.js solutions empower eCommerce platforms with scalable architectures, enabling real-time inventory tracking and seamless payment integration. This results in a responsive, reliable online shopping experience even during peak traffic.",
      icon: "/images/v2/shopping-cart-check.svg",
    },
    {
      title: "Healthcare",
      description:
        "We develop HIPAA-compliant applications that support telemedicine and secure patient portals. Node.js facilitates the creation of responsive, secure systems designed to protect sensitive patient data while ensuring smooth remote consultations.",
      icon: "/images/v2/heathcare-icon.svg",
    },
    {
      title: "Fintech",
      description:
        "Our Node.js development drives secure transaction processing and integrates AI-powered fraud detection with real-time analytics, meeting the high demands of modern financial services.",
      icon: "/images/v2/usd-circle.svg",
    },
    {
      title: "Real Estate",
      description:
        "We build advanced listing platforms featuring AI-powered search and efficient property management solutions, streamlining the discovery and administration of real estate assets.",
      icon: "/images/v2/real-estate.svg",
    },
    {
      title: "eLearning",
      description:
        "Interactive platforms developed with Node.js enable real-time collaboration and progress tracking, fostering engaging and efficient online learning experiences.",
      icon: "/images/v2/user-graduate.svg",
    },
    {
      title: "Manufacturing",
      description:
        "Our solutions leverage Node.js to integrate IoT-enabled predictive maintenance systems and AI-driven supply chain optimization, helping manufacturers boost efficiency and minimize downtime.",
      icon: "/images/v2/manufaturing-icon.svg",
    },
  ],
};

const blockchainSolutions = {
  title: "Blockchain Solutions Tailored to Your Industry",
  description:
    "Custom-built for Finance, Healthcare, Supply Chain & More. 68% of clients achieve ROI within 6 months.",
  solutions: [
    {
      title: "Finance",
      description:
        "DeFi platforms, cross-border payment systems, and fraud-proof ledgers that reduce transaction costs by 70%.",
      icon: "/images/v2/usd-circle.svg",
    },
    {
      title: "Healthcare",
      description:
        "HIPAA-compliant patient data exchanges, drug traceability networks, and secure EHRs using zero-knowledge proofs.",
      icon: "/images/v2/heathcare-icon.svg",
    },
    {
      title: "Supply Chain",
      description:
        "End-to-end visibility with smart sensors and blockchain. Cut counterfeit risks by 90% and streamline audits.",
      icon: "/images/v2/shopping-cart-check.svg",
    },
    {
      title: "Real Estate",
      description:
        "Tokenized property ownership, automated escrow, and transparent title transfers reducing legal delays.",
      icon: "/images/v2/building-white.svg",
    },
    {
      title: "Government",
      description:
        "Tamper-proof voting systems, public record management, and citizen ID platforms with biometric verification.",
      icon: "/images/v2/real-estate.svg",
    },
    {
      title: "Energy",
      description:
        "Peer-to-peer energy trading platforms, carbon credit tracking, and grid management via decentralized ledgers.",
      icon: "/images/v2/star-white.svg",
    },
  ],
};

const reactNativeSolutionsList = {
  title: "Industries We Serve",
  description:
    "We build mobile apps with React Native for e-commerce, healthcare, fintech, and beyond.",
  solutions: [
    {
      title: "eCommerce",
      description:
        "Build an app with real-time product browsing and secure payment integrations. We create responsive, scalable mobile apps that handle peak traffic, enhancing the shopping experience for iOS and Android users.",
      icon: "/images/v2/shopping-cart-check.svg",
    },
    {
      title: "Healthcare",
      description:
        "Develop HIPAA-compliant React Native apps for telemedicine and patient portals. Our solutions ensure secure data handling and seamless remote consultations, delivering reliable, user-friendly mobile experiences.",
      icon: "/images/v2/heathcare-icon.svg",
    },
    {
      title: "Fintech",
      description:
        "Our React Native development drives fintech apps with secure transaction processing and AI-powered fraud detection. Real-time analytics and cross-platform compatibility meet the demands of modern financial services.",
      icon: "/images/v2/usd-circle.svg",
    },
    {
      title: "Real Estate",
      description:
        "Adopt AI-powered mobile apps for real estate with our React development. Our custom mobile apps simplify listing discovery and administration, optimized for iOS and Android users.",
      icon: "/images/v2/real-estate.svg",
    },
    {
      title: "eLearning",
      description:
        "Build scalable apps for interactive eLearning with real-time collaboration and progress tracking to deliver efficient learning experiences, accessible across devices for students and educators.",
      icon: "/images/v2/user-graduate.svg",
    },
    {
      title: "Manufacturing",
      description:
        "We leverage React Native to create apps integrating IoT-enabled predictive maintenance and supply chain optimization. Our solutions enhance manufacturing efficiency with real-time data.",
      icon: "/images/v2/manufaturing-icon.svg",
    },
  ],
};

const whiteLabelSolutionsList = {
  title: "Industries We Empower with White Label Solutions",
  description: "",
  solutions: [
    {
      title: "Digital Agencies & SaaS Providers",
      description:
        "Resell branded tools like CRM platforms, analytics dashboards, or marketing automation software—expand your service offerings without in-house development.",
      icon: "/images/v2/white_label_digital_agency.svg",
    },
    {
      title: "Fintech & Banking",
      description:
        "Offer white-label payment gateways, mobile banking apps, or AI-driven fraud detection tools. Let financial institutions modernize under their brand, not yours.",
      icon: "/images/v2/white_label_fintech.svg",
    },
    {
      title: "Healthcare & Telemedicine",
      description:
        "Rebrandable HIPAA-compliant telehealth platforms, patient portals, and appointment schedulers. Ideal for clinics or healthcare IT providers.",
      icon: "/images/v2/white_label_healthcare.svg",
    },
    {
      title: "EdTech & Corporate Training",
      description:
        "Deliver customizable LMS platforms, certification tools, or virtual classroom software. Schools and enterprises get turnkey solutions; you earn recurring revenue.",
      icon: "/images/v2/white_label_edtech.svg",
    },
    {
      title: "eCommerce & Retail",
      description:
        "White-label marketplace platforms, inventory management systems, or loyalty apps. Retailers scale faster while you monetize seamless, branded tech.",
      icon: "/images/v2/white_label_ecommerce.svg",
    },
    {
      title: "Real Estate & PropTech",
      description:
        "Provide brokers with AI-powered property search tools, tenant portals, or lease management systems. Position your agency as a one-stop tech partner.",
      icon: "/images/v2/white_label_real_estate.svg",
    },
    {
      title: "Travel & Hospitality",
      description:
        "Resell booking engines, reservation systems, or loyalty programs. Hotels and travel agencies keep their branding; you handle the tech.",
      icon: "/images/v2/white_label_travel.svg",
    },
    {
      title: "Logistics & Supply Chain",
      description:
        "Offer branded fleet management tools, IoT-enabled tracking systems, or warehouse optimization platforms, to help clients cut costs without coding.",
      icon: "/images/v2/white_label_logistics.svg",
    },
  ],
};

const reactJSDevelopmentSvervice = {
  title: "Our Engagement Process",
  description:
    "We keep the path from concept to delivery transparent and structured:",
  solutions: [
    {
      title: "Discovery & Alignment",
      description:
        "Understand your product vision, user needs, and technical constraints. We define scope, priorities, and measurable outcomes.",
      icon: "/images/v2/shopping-cart-check.svg",
    },
    {
      title: "Design & Architecture",
      description:
        "Translate requirements into component-level designs, state management strategy, and performance plans.",
      icon: "/images/v2/heathcare-icon.svg",
    },
    {
      title: "Iterative Development",
      description:
        "Build in small, reviewable increments. Each sprint delivers visible progress, enabling feedback loops and course correction.",
      icon: "/images/v2/usd-circle.svg",
    },
    {
      title: "Quality & Optimization",
      description:
        "Continuous testing, code reviews, performance profiling, and accessibility checks ensure robustness before launch.",
      icon: "/images/v2/real-estate.svg",
    },
    {
      title: "Launch & Support",
      description:
        "Deploy with observability, monitor real usage, and iterate. Optionally retain us for ongoing feature velocity or team augmentation.",
      icon: "/images/v2/user-graduate.svg",
    },
  ],
};

const HireTeamSolutions = () => {
  const pathname = usePathname();
  const showDataBasedOnPathname = {
    "/hire-reactjs-developer/": reactJsSolutions,
    "/hire-nodejs-developer/": nodeJSSolutionsList,
    "/hire-blockchain-developer/": blockchainSolutions,
    "/hire-react-native-developer/": reactNativeSolutionsList,
    "/hire-white-label-developer/": whiteLabelSolutionsList,
    "/reactjs-development-services/": reactJSDevelopmentSvervice,
  };

  const currentData = showDataBasedOnPathname[pathname];

  return (
    <section className="bg-themeLight">
      <div className="container max-w-[1280px] main-section-padding mx-auto reveal">
        <Heading
          type="h2"
          className="text-colorBlack lg:!text-[34px] md:!text-3xl !text-2xl"
          text={currentData.title}
        />
        {currentData.description && (
          <p className="md:text-lg text-base md:!mt-2.5 !mt-2">
            {currentData.description}
          </p>
        )}

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 md:gap-7.5 lg:gap-10 lg:pt-10 md:pt-7.5 pt-5">
          {currentData.solutions.map(({ title, icon, description }) => (
            <div
              className="bg-white flex flex-col justify-start items-start border rounded-2xl border-borderGray md:px-7.5 md:py-5 p-5"
              key={title}
            >
              <div className="flex items-center justify-start bg-white rounded-md md:mb-[18px] mb-5">
                <Image
                  className="md:w-8 md:h-8 w-6 h-6 invert"
                  src={icon}
                  alt={`${title}-icon`}
                  width={32}
                  height={32}
                />
              </div>
              <Heading
                type="h3"
                className="text-colorBlack md:!text-xl !text-lg font-medium"
                text={title}
              />
              <p className="md:text-lg text-base pt-4">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireTeamSolutions;
