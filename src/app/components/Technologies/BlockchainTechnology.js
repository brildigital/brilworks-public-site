"use client";
import Image from "next/image";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect, scrollToSection } from "../lib/commonFunction";
import Button from "../Common/Button";
import { faJs, faDocker } from "@fortawesome/free-brands-svg-icons";

const WhyFirstSection = dynamic(() => import("./WhyFirstSection"));
const TechStackWeWorkWith = dynamic(() => import("./TechStackWeWorkWith"));
const CommonSolutions = dynamic(() => import("./CommonSolutions"));
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

const blockchainFeatures = [
  {
    heading: "Global Talent, Local Precision",
    description:
      "Our remote blockchain developers operate in your time zone. From London to Tokyo, we synchronize with your workflow—night shifts or dawn sprints, we adapt.",
    icon: "/images/Global.svg",
  },
  {
    heading: "Multi-Chain Mastery",
    description:
      "Ethereum, Hyperledger, Solana, or Polkadot. We build cross-chain ecosystems that communicate seamlessly, future-proofing your investments.",
    icon: "/images/Multi-chain.svg",
  },
  {
    heading: "Cost-Efficient Innovation",
    description:
      "Access elite blockchain engineers at 50% less than in-house hires. No overheads, no training—just cutting-edge solutions.",
    icon: "/images/Cost-Effective.svg",
  },
  {
    heading: "Agile Engagement",
    description:
      "Project-based, dedicated teams, or on-demand developers. Monthly, hourly, or fixed-scope—we mold to your needs.",
    icon: "/images/Engagement.svg",
  },
  {
    heading: "24/7 Protocol Vigilance",
    description:
      "Our experts provide round-the-clock support, ensuring your blockchain network remains secure, updated, and optimized.",
    icon: "/images/handSettingIcon.svg",
  },
  {
    heading: "Rapid Deployment",
    description:
      "From concept to mainnet in record time. We deliver robust code without compromising security—even under tight deadlines.",
    icon: "/images/Development.svg",
  },
];
const blockchainServices = [
  {
    imgSrc: "/images/smart-contracts-devlopment.png",
    title: "Smart Contract Development",
    description:
      "Self-executing contracts with zero loopholes. Code audited by third parties for vulnerabilities, ensuring ironclad compliance.",
  },
  {
    imgSrc: "/images/dapp-devlopment.png",
    title: "DApp Development",
    description:
      "Decentralized apps that combine intuitive UX with blockchain’s power. Scalable, secure, and built for mass adoption.",
  },
  {
    imgSrc: "/images/mvp-devlopment.png",
    title: "Blockchain Migration",
    description:
      "Transition legacy systems to blockchain smoothly. We ensure zero downtime, data integrity, and enhanced functionality.",
  },
  {
    imgSrc: "/images/custom-blockchain-solutions.png",
    title: "Enterprise Blockchain Solutions",
    description:
      "Permissioned networks tailored for industries needing privacy and control. Audit trails, role-based access, and GDPR compliance.",
  },
  {
    imgSrc: "/images/nft-marketplace-devlpment.png",
    title: "Tokenization & DeFi Platforms",
    description:
      "Launch tokens, NFTs, or DeFi ecosystems with secure wallets, liquidity pools, and staking mechanisms that drive engagement.",
  },
  {
    imgSrc: "/images/blockchain-app-consultation.png",
    title: "Blockchain Consulting",
    description:
      "From consensus algorithms to governance models—strategic roadmaps that align blockchain with your business goals.",
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
      <section className="portfolio mt-[6rem]">
        <div className="mx-auto service_width">
          <div className="relative">
            <p>
              <Image
                className="h-[46vh] md:block hidden rounded-[20px]"
                src="https://a.storyblok.com/f/219851/1398x780/7ccfffe9b5/block-chain.webp"
                alt="Blockchain banner"
                priority
                width="1398"
                height="780"
                sizes="(min-width: 1040px) 80vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
                media="(min-width: 768px)"
              />
              <Image
                className="h-[300px] block md:hidden rounded-[20px]"
                src="/images/block-chain-mobile.webp"
                alt="Blockchain banner"
                priority
                width="320"
                height="250"
                sizes="(min-width: 1040px) 80vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
                media="(max-width: 767px)"
              />
            </p>
            <div className="service_sec1_position">
              <div className="flex self-end justify-between w-[96%] mx-auto">
                <div className="txt">
                  <div className="how-we flex items-center gap-[1rem]">
                    <h1 className="font-style-solution-head line-height-normal uppercase xl:text-[4.5rem] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]">
                      HIRE
                      <div className="flex items-center gap-1">
                        <Image
                          className="w-[auto]"
                          src="/images/1.png"
                          alt="curly bracket"
                          width="24"
                          height="94"
                        />
                        BLOCKCHAIN
                        <Image
                          className="w-[auto]"
                          src="/images/2.png"
                          alt="curly bracket"
                          width="24"
                          height="94"
                        />
                      </div>
                      DEVELOPERS
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width xl:py-[6rem] md:py-[4rem] py-[2rem]">
          <div className="flex !flex-col lg:!flex-row gap-[1.5rem]">
            <div className="basis-[45%]">
              <div className="home_sec2_txt3 like_text">
                <p className="!p-0 !ml-[0] !w-full uppercase">
                  Hire Blockchain Developers to Revolutionize Your Digital
                  Infrastructure
                </p>
              </div>
            </div>
            <div className="basis-[55%]">
              <div className="home_sec2_txt4">
                <p className="!text-left !text-[1.2rem]">
                  Our seasoned blockchain developers engineer secure, scalable,
                  and decentralized solutions that transform industries. Whether
                  you’re launching a dApp, integrating smart contracts, or
                  building enterprise-grade blockchain networks, we’re your
                  strategic partner.
                </p>

                <div className="flex !flex-col md:!flex-row gap-6 mt-8 md:mt-[50px]">
                  <div>
                    <Button
                      innerClassName="flex items-center justify-center gap-1"
                      className="!pr-5"
                      redirect="#pricing"
                      label="Plan & Pricing"
                      icon="right-arrow"
                      scrollingButton
                    />
                  </div>
                  <div>
                    <Button
                      innerClassName="flex items-center justify-center gap-1"
                      className="!pr-5"
                      redirect="#section10_service"
                      label="Hire Blockchain Developers"
                      icon="right-arrow"
                      scrollingButton
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WhyFirstSection
          title="Why 95% of Clients Return?"
          description="We don’t just code blockchains. We architect trust. Here’s what makes us unparalleled:
Global Talent, Local Precision. Our remote blockchain developers operate in your time zone. From London to Tokyo, we synchronize with your workflow night shifts or dawn sprints, we adapt."
          firstSectionFeatures={blockchainFeatures}
        />
        <div className="mx-auto service_width xl:py-[2rem] md:py-[1.5rem] py-[1rem] workpadd_borderTop end-to-end">
          <div className="grid md:grid-cols-5 grid-cols-1 gap-6 md:flex-row justify-between">
            <div className="end-To-end md:col-span-2">
              <div className="endTO_text solutions">
                <h2 className="!w-full p-0 uppercase text-left">
                  Build Trust-Centric Solutions With Our Blockchain Services
                </h2>
              </div>
            </div>

            <div className="service_grid_img reveal md:col-span-3">
              <div className="flex flex-col overflow-y-auto md:h-[500px] custom-scrollbar md:gap-[40px] gap-[10px]">
                {blockchainServices.map(
                  ({ imgSrc, title, description }, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row gap-6"
                    >
                      <div className="basis-[15%]">
                        <div className="flex md:justify-end">
                          <img
                            className="max-w-[48px] object-cover"
                            decoding="async"
                            loading="lazy"
                            src={imgSrc}
                            alt={title}
                          />
                        </div>
                      </div>

                      <div className="service_txt basis-[85%]">
                        <div className="service_num">&lt; 0{index + 1}.</div>
                        <div className="service_title">
                          <h3>{title}</h3>
                        </div>
                        <div className="py-4">
                          <p>{description}</p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center xl:pt-[2rem] md:pt-[1.5rem] pt-[1rem]">
            <Button
              innerClassName="flex items-center justify-center gap-2"
              className="!pr-5"
              redirect="#section10_service"
              label="Get A Quote For Your Project"
              scrollingButton
              icon={
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z"></path>
                  <path d="M7 7h10v2H7zm0 4h7v2H7z"></path>
                </svg>
              }
            />
          </div>
        </div>

        <TechnologyDevelopers />

        <BenefitOfHiringDevelopers />
        <TechStackWeWorkWith
          active="blockchains"
          techStackList={techStackList}
        />
      </section>
      <CommonSolutions />
      <WhyThisTech />
      <HiringModels />
      <ThreeStepstoHireDeveloper />

      <WhyShouldHireDevelopers />

      <SolutionContactForm />
      <BlockChainFAQs />
    </>
  );
};

export default BlockchainTechnology;
