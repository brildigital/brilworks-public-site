"use client";
import Image from "next/image";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect, scrollToSection } from "../lib/commonFunction";
import Button from "../Common/Button";
import { faJs, faDocker } from "@fortawesome/free-brands-svg-icons";
import HireTeamHeroSection from "../HireTeam/HireTeamHeroSection";
import MultipleCardInGrid from "../Common/MultipleCardInGrid";
import HireDevelopersInThreeSteps from "../HireTeam/HireDevelopersInThreeSteps";
import HireDevelopersPricingPlan from "../HireTeam/HireDevelopersPricingPlan";

const CommonServices = dynamic(() => import("./CommonServices"));
const WhyFirstSection = dynamic(() => import("./WhyFirstSection"));
const TechStackWeWorkWith = dynamic(() => import("./TechStackWeWorkWith"));

const HireTeamServices = dynamic(() => import("../HireTeam/HireTeamServices"));
const HireTeamSolutions = dynamic(() => import("./HireTeamSolutions"));
const WhyThisTech = dynamic(() => import("./WhyThisTech"));
const HiringModels = dynamic(() => import("./HiringModels"));
const BlockChainFAQs = dynamic(() => import("./TechnologyFAQ"));
const TechnologyDevelopers = dynamic(() => import("./TechnologyDevelopers"));
const WhyShouldHireDevelopers = dynamic(() =>
  import("./WhyShouldHireDevelopers")
);
const SolutionContactForm = dynamic(() =>
  import("../Solution/SolutionContactForm")
);
const BenefitOfHiringDevelopers = dynamic(() =>
  import("./BenefitOfHiringDevelopers")
);
const ThreeStepstoHireDeveloper = dynamic(() =>
  import("./ThreeStepstoHireDeveloper")
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
      <HireTeamServices bgClass="bg-themeLight" />
      <TechnologyDevelopers bgClass="bg-white" />
      <BenefitOfHiringDevelopers bgClass="bg-sectionBG" />
      <TechStackWeWorkWith
        bgClass="bg-white"
        active="blockchains"
        techStackList={techStackList}
      />
      <HireTeamSolutions />
      <WhyThisTech />
      <HiringModels />
      <HireDevelopersInThreeSteps
        bgClass="bg-themeLight"
        title="Blockchain Developers"
      />
      <HireDevelopersPricingPlan title="Blockchain Developer" />
      <HomePageBlogs />
      <SolutionContactForm />
      <BlockChainFAQs />
    </>
  );
};

export default BlockchainTechnology;
