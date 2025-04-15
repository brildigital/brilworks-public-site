"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import TabAccordionDark from "../Common/TabAccordionDark";
import TabVerticalSticky from "../Common/TabVerticalSticky";
import Heading from "../HTMLComponents/Heading";
import { useMediaQuery } from "react-responsive";

const HireTeamServices = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const javaServices = {
    title: "Enhance Your Applications with Our Java Development Services.",
    desc: "Our services drive sustainable growth.",
    buttonText: "Get a Quote for your Project",
    servicesList: [
      {
        title: "Java Consulting",
        value: "java-service-1",
        imageSrc: "/images/v2/java-consulting.webp",
        description:
          "Our team has a unique combination of skills, experience, and cultural expertise (both domestically and internationally) to provide you with fast, accurate advice.",
      },
      {
        title: "Java Web Development",
        value: "java-service-2",
        imageSrc: "/images/v2/web-development.webp",
        description:
          "Our Full-stack Java Developers have the knowledge and experience to design, develop, release and support scalable web-based solutions for your business. They use modern technologies such as Spring Boot, Hibernate, and Microservices to help you organize your business into highly scalable applications.",
      },
      {
        title: "Java Software Development",
        value: "java-service-3",
        imageSrc: "/images/v2/java-software-development.webp",
        description:
          "Our Java Developers have a proven track record of delivering quality software at a rapid pace. They have extensive knowledge of enterprise-level technologies such as Java, C++, and other tools in order to create scalable, robust, and platform-independent software that is easily maintainable.",
      },
      {
        title: "Spring Core Development",
        value: "java-service-4",
        imageSrc: "/images/v2/java-spring-core-dev.webp",
        description:
          "Hire Spring boot developer to easily develop J2EE applications from plain old Java Objects to enterprises level services through Spring framework.",
      },

      {
        title: "Java App Development",
        value: "java-service-5",
        imageSrc: "/images/v2/java-app-development.webp",
        description:
          "Have you considered the benefits of hiring an app developer with Java programming skills? Our developers are skilled at java application development and in developing all types of mobile applications from games, and social media applications to enterprise solutions.",
      },
      {
        title: "Java Full Stack Development",
        value: "java-service-6",
        imageSrc: "/images/v2/java-full-stack-dev.webp",
        description:
          "Our team is proficient in full-stack java development. We do not believe in off-the-shelf frameworks or ready-made solutions. Instead, we work with our clients to build scalable applications that are highly scalable, performant, and maintainable.",
      },
    ],
  };
  const reactJSService = {
    title:
      "Build Feature-rich Frontend Applications With Our React Development Services",
    buttonText: "Get a Quote for your Project",
    servicesList: [
      {
        title: "Web Development",
        value: "reactjs-1",
        imageSrc: "/images/v2/web-development.webp",
        description:
          "Transform slow, clunky websites into React-powered rockets—3.2s average load time improvement in client projects.",
      },
      {
        title: "Migration and Updation Services",
        value: "reactjs-2",
        imageSrc: "/images/v2/migration-and-updation-services.webp",
        description:
          "Legacy app? We’ll rebuild it in React so smoothly, the only thing users will notice is the improvement.",
      },
      {
        title: "High-Performing PWAs",
        value: "reactjs-3",
        imageSrc: "/images/v2/high-performing-PWAs.webp",
        description:
          "We build PWAs that outpace native apps, 100% offline mode, 0% app store fees, and lightning-fast performance.",
      },
      {
        title: "eCommerce Development",
        value: "reactjs-4",
        imageSrc: "/images/v2/eCommerce-development.webp",
        description:
          "React storefronts built to convert—dynamic hydration, psychology-backed flows, and seamless user experiences that drive sales.",
      },
      {
        title: "SPA Development",
        value: "reactjs-5",
        imageSrc: "/images/v2/SPA-development.webp",
        description:
          "Blazing-fast SPAs, instant interactivity, smooth navigation, and scroll restoration that remembers every pixel.",
      },
      {
        title: "Dashboard Development",
        value: "reactjs-6",
        imageSrc: "/images/v2/dashboard-development.webp",
        description:
          "Transform your data into decisions—sleek, intuitive dashboards that blend real-time analytics with elegant design, turning complex metrics into instant insights.",
      },
    ],
  };
  const nodeJSService = {
    title:
      "Build Lightning-Fast Solutions With Our Node.js Development Services",
    buttonText: "Get a Quote for your Project",
    servicesList: [
      {
        title: "Web App Development",
        value: "nodejs-1",
        imageSrc: "/images/v2/web-development.webp",
        description:
          "We engineer high-traffic web applications that outperform industry benchmarks. Leveraging Node.js’s event-driven architecture, we build solutions that maintain sub-second response times, even with 10,000+ concurrent users. Our battle-tested approach ensures seamless scalability and 24/7 reliability.",
      },
      {
        title: "API Development & Integration",
        value: "nodejs-2",
        imageSrc: "/images/v2/api-dev.webp",
        description:
          "Our track record includes 100+ mission-critical API implementations. We design RESTful/GraphQL APIs with military-grade security and 99.99% uptime SLAs, having integrated complex ecosystems spanning fintech platforms, IoT networks, and global ERP systems.",
      },
      {
        title: "Legacy Modernization Leadership",
        value: "nodejs-3",
        imageSrc: "/images/v2/legacy-modernization-leadership.webp",
        description:
          "We’ve successfully migrated 50+ legacy systems to Node.js with zero business disruption. Our phased modernization approach combines reverse-engineering expertise with future-ready architecture design, typically achieving 3x performance improvements and 40% maintenance cost reductions.",
      },
      {
        title: "Real-Time Solution Specialists",
        value: "nodejs-4",
        imageSrc: "/images/v2/real-time-solution-specialists.webp",
        description:
          "Developers of enterprise-ready real-time systems, we create collaborative platforms and live data solutions using Node.js’s native capabilities. Our implementations power mission-critical communication tools and instant-update interfaces across industries.",
      },
      {
        title: "Microservices Architecture Authority",
        value: "nodejs-5",
        imageSrc: "/images/v2/microservices-architecture-authority.webp",
        description:
          "Architects of 50+ production-grade Node.js microservices ecosystems, we implement containerized, Kubernetes-optimized solutions that enable true CI/CD. Our modular designs have helped enterprises achieve 5x faster feature deployments.",
      },
      {
        title: "Serverless Development Innovators",
        value: "nodejs-6",
        imageSrc: "/images/v2/serverless-development-innovators.webp",
        description:
          "Leaders in serverless Node.js implementations, we optimize cloud costs while maintaining elastic scalability. Our solutions have reduced clients’ infrastructure expenses by 60%+ through intelligent AWS Lambda/Azure Functions architectures.",
      },
    ],
  };
  const awsService = {
    title: "Our AWS Development Services",
    buttonText: "Get a Quote for your Project",
    servicesList: [
      {
        title: "AWS Development Consulting",
        value: "aws-1",
        imageSrc: "/images/v2/AWS-dev-consulting.webp",
        description:
          "Our team of AWS consultants helps your business to establish and maintain a high-performance cloud environment. Our consulting services include development, deployment, migration & optimization.",
      },
      {
        title: "AWS App Development Services",
        value: "aws-2",
        imageSrc: "/images/v2/AWS-app-development-services.webp",
        description:
          "The AWS development experts at Brilworks build cutting-edge web and mobile applications, with custom features that are needed to gain a competitive advantage. Whether it is developing them from scratch or modernizing your legacy applications with AWS, our team can assist you with it all.",
      },
      {
        title: "AWS Cloud Migration Services",
        value: "aws-3",
        imageSrc: "/images/v2/AWS-cloud-migration-services.webp",
        description:
          "We know that a successful migration to the cloud is about more than just moving your workloads from on-premise applications to public cloud platforms. This is why we take the time to understand your application needs, business objectives, and migration requirements.",
      },
      {
        title: "DevOps AWS Services",
        value: "aws-4",
        imageSrc: "/images/v2/DevOps-AWS-services.webp",
        description:
          "DevOps on AWS is an end-to-end automation framework that uses AWS services like CodePipeline, AWS CodeBuild & AWSCodeDeploy to develop, test and deploy your applications in AWS. Our experts help you use services like these so that you can easily build and deploy compound cloud architectures on AWS.",
      },
      {
        title: "AWS Managed Services",
        value: "aws-5",
        imageSrc: "/images/v2/AWS-managed-services.webp",
        description:
          "We offer cost-optimized, seamless managed services that are built for the modern world of IT. Our goal is to help you make more informed decisions about your infrastructure and get more out of what you have.",
      },
    ],
  };
  const reactNativeService = {
    title: "Create cross-platform mobile apps with React Native",
    desc: "Our services drive sustainable growth.",
    buttonText: "Get a Quote for your Project",
    servicesList: [
      {
        title: "React Native App Consultation",
        value: "rn-1",
        imageSrc: "/images/v2/react-native-app-consulting.webp",
        description:
          "Our team will help you to get the entire project roadmap, project schedule, and the overall design and layout of your application to build a robust and customized mobile app with a native look and feel.",
      },
      {
        title: "React Native Cross-Platform App Development",
        value: "rn-2",
        imageSrc: "/images/v2/cross-platform-app-development.webp",
        description:
          "If you are looking for a React Native app development company to create an app that runs on multiple platforms, then look no further. Hire our React Native developers who are specialized in developing applications for both Android & iOS platforms.",
      },
      {
        title: "React Native Migration",
        value: "rn-3",
        imageSrc: "/images/v2/react-native-migration.webp",
        description:
          "Our team of experts is adept at moving apps from other platforms without data loss. We’re here to help you migrate legacy apps, or get them up to speed with the latest version of your app.",
      },
      {
        title: "React Native App Maintenance & Support",
        value: "rn-4",
        imageSrc: "/images/v2/react-native-app-maintenance.webp",
        description:
          "We offer support and maintenance services after the app deployment. Our team monitors the system and ensures high performance. Whether you need to boost uptime or reduce downtime, we’ve got your back.",
      },
      {
        title: "React Native UI/UX Development",
        value: "rn-5",
        imageSrc: "/images/v2/ux-development.webp",
        description:
          "Our React Native specialists design beautiful applications while leveraging the latest technology to create a seamless and delightful user experience.",
      },
      {
        title: "React Native Testing & Audit",
        value: "rn-6",
        imageSrc: "/images/v2/react-native-testing-audit.webp",
        description:
          "We’ll help you evaluate your application for responsiveness, bugs, performance, and stability. The team ensures that your app is running as smoothly as possible on all devices and operating system platforms.",
      },
    ],
  };
  const uiuxService = {
    title:
      "Experience the Perfect Blend of Creativity & Technology With Our UI/UX Designing Services",
    buttonText: "Get a Quote for your Project",
    servicesList: [
      {
        title: "UI UX Consulting Services",
        value: "ui-ux-1",
        imageSrc: "/images/v2/java-consulting.webp",
        description:
          "Our UX and UI design can help you set the tone of your brand, create designs that are visually appealing and easy for your users to navigate.",
      },
      {
        title: "UI UX Design Services",
        value: "ui-ux-2",
        imageSrc: "/images/v2/ui-ux-design-services.webp",
        description:
          "We believe in the power of intuitive design and are always on the lookout for new ways to streamline the user experience. Our team has proven expertise in creating human-centered experiences.",
      },
      {
        title: "UX Strategy",
        value: "ui-ux-3",
        imageSrc: "/images/v2/ux-strategy.webp",
        description:
          "Our strategy is a perfect blend of design, usability, and business principles. We identify your biggest needs and come up with an effective UX strategy to transform your brand into one that resonates with users.",
      },
      {
        title: "Mockups Designing",
        value: "ui-ux-4",
        imageSrc: "/images/v2/mockups-designing.webp",
        description:
          "Our talented team of UI/UX designers deliver mockups that make it easy for you to focus on what’s most important: creating a great product.",
      },
      {
        title: "Wireframe and Prototyping",
        value: "ui-ux-5",
        imageSrc: "/images/v2/wireframe-and-prototyping.webp",
        description:
          "With our expertly curated selection of UX professionals, you’ll get wireframe designers that offer a full range of services to make your product plan come alive.",
      },
    ],
  };
  const blockchainService = {
    title: "Build Trust-Centric Solutions With Our Blockchain Services",
    buttonText: "Get a Quote for your Project",
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

  const showDataBasedOnPathname = {
    "/hire-reactjs-developer/": reactJSService,
    "/hire-nodejs-developer/": nodeJSService,
    "/hire-java-developer/": javaServices,
    "/hire-aws-developer/": awsService,
    "/hire-react-native-developer/": reactNativeService,
    "/hire-ui-ux-designer/": uiuxService,
    "/hire-blockchain-developer/": blockchainService,
  };

  const hireServicesTeamData = showDataBasedOnPathname[pathname] || {};

  const bgThemePages = [
    "/hire-nodejs-developer/",
    "/hire-reactjs-developer/",
    "/hire-blockchain-developer/",
  ];

  return (
    <div className={bgThemePages.includes(pathname) ? "bg-themeLight" : ""}>
      <div className="border-b border-b-borderGray reveal">
        <div className="container max-w-[1280px] mx-auto main-section-padding !pb-0">
          <div className="lg:mb-10 md:mb-8 mb-6">
            <Heading
              type="h2"
              className="lg:!text-[34px] md:!text-3xl !text-2xl"
              text={hireServicesTeamData.title}
            />
            <p className="md:text-lg text-base !pt-[10px]">
              {hireServicesTeamData.desc}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`container max-w-[1280px] mx-auto reveal ${
          isMobile ? "main-section-padding !px-0" : ""
        }`}
      >
        {isMobile ? (
          hireServicesTeamData?.servicesList?.map((data, index) => (
            <div key={data.value}>
              <TabAccordionDark
                index={index + 1}
                darkMode={false}
                key={data?.value}
                data={data}
                handleOpen={handleOpen}
                open={open}
                buttonText={hireServicesTeamData?.buttonText}
              />
            </div>
          ))
        ) : (
          <TabVerticalSticky
            darkMode={false}
            sectionId={pathname.split("/").filter(Boolean)[0]}
            initialTabValue={hireServicesTeamData?.servicesList?.[0]?.value}
            data={hireServicesTeamData?.servicesList}
            buttonText={hireServicesTeamData?.buttonText}
          />
        )}
      </div>
    </div>
  );
};

export default HireTeamServices;
