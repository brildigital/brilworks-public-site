"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import { faJs, faDocker } from "@fortawesome/free-brands-svg-icons";
import HireTeamHeroSection from "../HireTeam/HireTeamHeroSection";
import MultipleCardInGrid from "../Common/MultipleCardInGrid";

const TechStackWeWorkWith = dynamic(() => import("./TechStackWeWorkWith"));
const ServicesSection = dynamic(() => import("../Common/ServicesSection"));
const MultipleCardWithIconBG = dynamic(() =>
  import("../Common/MultipleCardWithIconBG")
);
const HireTeamSolutions = dynamic(() => import("./HireTeamSolutions"));
const HiringModels = dynamic(() => import("./HiringModels"));
const BlockChainFAQs = dynamic(() => import("./TechnologyFAQ"));
const TechnologyDevelopers = dynamic(() => import("./TechnologyDevelopers"));
const SolutionContactForm = dynamic(() =>
  import("../Solution/SolutionContactForm")
);
const BenefitOfHiringDevelopers = dynamic(() =>
  import("./BenefitOfHiringDevelopers")
);
const HireDevelopersInThreeSteps = dynamic(() =>
  import("../HireTeam/HireDevelopersInThreeSteps")
);
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));

const why90PlusClientReturn = [
  {
    title: "Global Talent, Local Precision",
    description:
      "Our remote blockchain developers operate in your time zone. From London to Tokyo, we synchronize with your workflow—night shifts or dawn sprints, we adapt.",
    icon: "/images/v2/dediated-resource.svg",
  },
  {
    title: "Multi-Chain Mastery",
    description:
      "Ethereum, Hyperledger, Solana, or Polkadot. We build cross-chain ecosystems that communicate seamlessly, future-proofing your investments.",
    icon: "/images/v2/laptop.svg",
  },
  {
    title: "Cost-Efficient Innovation",
    description:
      "Access elite blockchain engineers at 50% less than in-house hires. No overheads, no training—just cutting-edge solutions.",
    icon: "/images/v2/dollar-black.svg",
  },
  {
    title: "Agile Engagement",
    description:
      "Project-based, dedicated teams, or on-demand developers. Monthly, hourly, or fixed-scope—we mold to your needs.",
    icon: "/images/v2/partnership.png",
  },
  {
    title: "24/7 Protocol Vigilance",
    description:
      "Our experts provide round-the-clock support, ensuring your blockchain network remains secure, updated, and optimized.",
    icon: "/images/v2/24-7-support.svg",
  },
  {
    title: "Rapid Deployment",
    description:
      "From concept to mainnet in record time. We deliver robust code without compromising security—even under tight deadlines.",
    icon: "/images/v2/growth-midset-img.png",
  },
];
const techStackList = [
  {
    title: "Blockchains",
    value: "blockchains",
    items: [
      { label: "Ethereum", iconifyIcon: "/images/ethereum.svg" },
      { label: "Hyperledger", iconifyIcon: "/images/hyperledger.svg" },
      { label: "Binance Chain", iconifyIcon: "/images/binance-chain.svg" },
      { label: "Polkadot", iconifyIcon: "/images/polkadot.svg" },
    ],
  },
  {
    title: "Languages",
    value: "languages",
    items: [
      { label: "JavaScript", icon: faJs, color: "#F7DF1E" },
      { label: "Go", iconifyIcon: "/images/go.svg" },
      { label: "Rust", iconifyIcon: "/images/rust.svg" },
      { label: "Solidity", iconifyIcon: "/images/solidity.svg" },
    ],
  },
  {
    title: "Frameworks",
    value: "frameworks",
    items: [
      { label: "Truffle", iconifyIcon: "/images/truffle.svg" },
      { label: "Hardhat", iconifyIcon: "/images/hardhat.svg" },
      { label: "Web3.js", iconifyIcon: "/images/web3js.svg" },
      { label: "Substrate", iconifyIcon: "/images/substrate.svg" },
    ],
  },
  {
    title: "Tools & Databases",
    value: "tools-databases",
    items: [
      { label: "GraphQL", iconifyIcon: "/images/graphql.svg" },
      { label: "IPFS", iconifyIcon: "/images/ipfs.svg" },
      { label: "MongoDB", iconifyIcon: "/images/mongodb.svg" },
      { label: "PostgreSQL", iconifyIcon: "/images/postgresql.svg" },
    ],
  },
  {
    title: "Cloud & DevOps",
    value: "cloud-devops",
    items: [
      { label: "AWS", iconifyIcon: "/images/aws.svg" },
      { label: "Azure", iconifyIcon: "/images/azure.svg" },
      { label: "Docker", icon: faDocker, color: "#2496ED" },
      { label: "Kubernetes", iconifyIcon: "/images/kubernetes.svg" },
    ],
  },
];

const BlockchainTechnology = () => {
  const blockchainService = {
    title: "Build Trust-Centric Solutions With Our Blockchain Services",
    buttonText: "Get Quote",
    servicesList: [
      {
        title: "Smart Contract Development",
        value: "blockchain-1",
        imageSrc: "/images/v2/smart-contract-dev.webp",
        description:
          "Self-executing contracts with zero loopholes. Code audited by third parties for vulnerabilities, ensuring ironclad compliance.",
      },
      {
        title: "DApp Development",
        value: "blockchain-2",
        imageSrc: "/images/v2/dapp-development.webp",
        description:
          "Decentralized apps that combine intuitive UX with blockchain’s power. Scalable, secure, and built for mass adoption.",
      },
      {
        title: "Blockchain Migration",
        value: "blockchain-3",
        imageSrc: "/images/v2/blockchain-migration.webp",
        description:
          "Transition legacy systems to blockchain smoothly. We ensure zero downtime, data integrity, and enhanced functionality.",
      },
      {
        title: "Enterprise Blockchain Solutions",
        value: "blockchain-4",
        imageSrc: "/images/v2/enterprise-blockchain-solutions.webp",
        description:
          "Permissioned networks tailored for industries needing privacy and control. Audit trails, role-based access, and GDPR compliance.",
      },
      {
        title: "Tokenization & DeFi Platforms",
        value: "blockchain-5",
        imageSrc: "/images/v2/tokenization-defi.webp",
        description:
          "Launch tokens, NFTs, or DeFi ecosystems with secure wallets, liquidity pools, and staking mechanisms that drive engagement.",
      },
      {
        title: "Blockchain Consulting",
        value: "blockchain-6",
        imageSrc: "/images/v2/blockchain-consulting.webp",
        description:
          "From consensus algorithms to governance models—strategic roadmaps that align blockchain with your business goals.",
      },
    ],
  };

  const blockchainBenefits = {
    title: "Why Blockchain? Strategic Advantages for Modern Enterprises",
    description: "",
    benefits: [
      {
        title: "Unbreakable Security",
        description:
          "Immutable ledgers and cryptographic hashing reduce breaches by 99%. Ideal for sectors handling sensitive data.",
        icon: "/images/v2/adv-security.svg",
      },
      {
        title: "Transparent Operations",
        description:
          "Every transaction is auditable, building stakeholder trust. Supply chain clients report 40% faster dispute resolution.",
        icon: "/images/v2/transparent.svg",
      },
      {
        title: "Cost Efficiency",
        description:
          "Automate middlemen processes. Banks using smart contracts cut operational costs by 30%.",
        icon: "/images/v2/cost-efficient.svg",
      },
      {
        title: "Future-Proof Scalability",
        description:
          "Layer-2 solutions and sharding enable networks to handle 10,000+ TPS, ready for global adoption.",
        icon: "/images/v2/future-proof-scalability.svg",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Built-in KYC/AML modules and automated reporting ensure adherence to evolving global standards.",
        icon: "/images/v2/regular-compliance.svg",
      },
      {
        title: "Ecosystem Growth",
        description:
          "Join a $30B+ industry with interoperability standards like Cosmos and Polkadot, ensuring long-term relevance.",
        icon: "/images/v2/growth.svg",
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
        technologyText="Hire Blockchain Developers"
        title="Hire Blockchain Developers to Revolutionize Your Digital Infrastructure"
        description="Our seasoned blockchain developers engineer secure, scalable, and decentralized solutions that transform industries. Whether you’re launching a dApp, integrating smart contracts, or building enterprise-grade blockchain networks, we’re your strategic partner."
        imageSrc="/images/v2/blockchain-banner.webp"
      />
      <MultipleCardInGrid
        title="Why 95% of Clients Return?"
        description="We don’t just write React code. We engineer user addiction. Here’s what sets us apart."
        cardData={why90PlusClientReturn}
      />
      <ServicesSection
        sectionId="services-one"
        serviceData={blockchainService}
        bgClass="bg-themeLight"
      />
      <TechnologyDevelopers bgClass="bg-white" />
      {/* <BenefitOfHiringDevelopers bgClass="bg-sectionBG" /> */}
      <TechStackWeWorkWith
        bgClass="bg-white"
        active="blockchains"
        techStackList={techStackList}
      />
      <HireTeamSolutions />
      <MultipleCardWithIconBG data={blockchainBenefits} />
      <HiringModels />
      <HireDevelopersInThreeSteps
        bgClass="bg-themeLight"
        title="Blockchain Developers"
      />
      <HomePageBlogs />
      <SolutionContactForm />
      <BlockChainFAQs />
    </>
  );
};

export default BlockchainTechnology;
