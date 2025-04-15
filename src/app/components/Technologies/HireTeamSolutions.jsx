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
      icon: "/images/Fintech.svg",
    },
    {
      title: "Healthcare",
      description:
        "HIPAA-compliant patient data exchanges, drug traceability networks, and secure EHRs using zero-knowledge proofs.",
      icon: "/images/Healthcare.svg",
    },
    {
      title: "Supply Chain",
      description:
        "End-to-end visibility with smart sensors and blockchain. Cut counterfeit risks by 90% and streamline audits.",
      icon: "/images/supply-chain.svg",
    },
    {
      title: "Real Estate",
      description:
        "Tokenized property ownership, automated escrow, and transparent title transfers reducing legal delays.",
      icon: "/images/real-estate.svg",
    },
    {
      title: "Government",
      description:
        "Tamper-proof voting systems, public record management, and citizen ID platforms with biometric verification.",
      icon: "/images/government.svg",
    },
    {
      title: "Energy",
      description:
        "Peer-to-peer energy trading platforms, carbon credit tracking, and grid management via decentralized ledgers.",
      icon: "/images/energy.svg",
    },
  ],
};

const HireTeamSolutions = () => {
  const pathname = usePathname();
  const showDataBasedOnPathname = {
    "/hire-reactjs-developer/": reactJsSolutions,
    "/hire-nodejs-developer/": nodeJSSolutionsList,
    "/hire-blockchain-developer/": blockchainSolutions,
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
