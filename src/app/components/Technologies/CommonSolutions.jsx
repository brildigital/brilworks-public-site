import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const reactJsSolutions = [
  {
    title: "eCommerce",
    description:
      "Power your storefronts with React’s dynamic capabilities. We build performant interfaces featuring AI-driven recommendations, one-click checkouts, and real-time inventory updates.",
    icon: "/images/eCommerce.svg",
  },
  {
    title: "Healthcare",
    description:
      "Deliver HIPAA-compliant platforms that streamline care. Our React-powered telemedicine portals, EHR systems, and AI triage tools reduce administrative workload.",
    icon: "/images/Healthcare.svg",
  },
  {
    title: "Fintech",
    description:
      "Build React applications that balance speed with ironclad security. Our solutions include real-time transaction dashboards, biometric KYC workflows, and crypto interfaces audited for ISO 27001 compliance.",
    icon: "/images/Fintech.svg",
  },
  {
    title: "Real Estate",
    description:
      "Accelerate lead conversion with React tools like 3D virtual tours, AI-powered matching engines, and smart contract integrations.",
    icon: "/images/real-estate.svg",
  },
  {
    title: "eLearning",
    description:
      "Create React-based learning systems that include interactive VR classrooms, AI tutors, and certification trackers proven to boost learner retention by 41%.",
    icon: "/images/eLearning.svg",
  },
  {
    title: "Software & High-Tech",
    description:
      "Stay ahead with React architectures built for scale. We deliver AI-augmented dashboards, IoT management panels, and legacy modernization strategies.",
    icon: "/images/software.png",
  },
];
const nodeJSSolutionsList = [
  {
    title: "eCommerce",
    description:
      "Scalable platforms with real-time inventory tracking and seamless payment integration.",
    icon: "/images/eCommerce.svg",
  },
  {
    title: "Healthcare",
    description:
      "HIPAA-compliant applications, telemedicine solutions, and secure patient portals.",
    icon: "/images/Healthcare.svg",
  },
  {
    title: "Fintech",
    description:
      "Secure transaction processing, AI-powered fraud detection, and real-time analytics.",
    icon: "/images/Fintech.svg",
  },
  {
    title: "Real Estate",
    description:
      "Advanced listing platforms, AI-powered search, and property management solutions.",
    icon: "/images/real-estate.svg",
  },
  {
    title: "eLearning",
    description:
      "Interactive learning platforms with real-time collaboration and progress tracking.",
    icon: "/images/eLearning.svg",
  },
  {
    title: "Manufacturing",
    description:
      "IoT-enabled smart, predictive maintenance systems and AI-driven supply chain optimization.",
    icon: "/images/Manufacturing.svg",
  },
];

const blockchainSolutions = [
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
];

const ServiceItem = ({ description, title, icon }) => (
  <div className="rounded-lg border cursor-pointer dedicated_team_card p-[2px]">
    <div className="flex flex-col gap-3 p-4 bg-white h-full rounded-lg">
      <h2 className="!text-2xl font-bold flex gap-3 items-center">
        <Image
          src={icon}
          height={32}
          width={32}
          className="w-[32px] h-[32px]"
          alt={title}
        />
        {title}
      </h2>
      <p className="text-base text-colorGray">{description}</p>
    </div>
  </div>
);

const CommonSolutions = () => {
  const pathname = usePathname();
  const mapToRender = {
    "/hire-reactjs-developer/": {
      title: "ReactJS Solutions Precision-Engineered for Your Industry",
      description:
        "Tailored for eCommerce, Healthcare, Fintech & Beyond. We engineer React solutions that solve your industry’s unique challenges 72% of clients see ROI within 12 weeks.",
      solutions: reactJsSolutions,
    },
    "/hire-nodejs-developer/": {
      title: "Industry-Specific Node.js Solutions",
      description:
        "We build Node.js applications tailored for industries like eCommerce, healthcare, fintech, and beyond.",
      solutions: nodeJSSolutionsList,
    },
    "/hire-blockchain-developer/": {
      title: "Blockchain Solutions Tailored to Your Industry",
      description:
        "Custom-built for Finance, Healthcare, Supply Chain & More. 68% of clients achieve ROI within 6 months.",
      solutions: blockchainSolutions,
    },
  };
  const currentData = mapToRender[pathname];
  return (
    <div className="container mx-auto pb-8 service_width">
      <div className="sm:w-[90%] w-[100%] mx-auto xl:py-[6rem] md:py-[4rem] py-[2rem] end-to-end reveal">
        <div className="endTO_text solutions flex flex-col md:items-center">
          <h2 className="!w-full p-0 uppercase">{currentData.title}</h2>
          <p className="md:w-[80%] text-left md:text-center text-base md:text-lg">
            {currentData.description}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-10 gap-4 reveal">
          {currentData.solutions.map((item) => (
            <ServiceItem
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonSolutions;
