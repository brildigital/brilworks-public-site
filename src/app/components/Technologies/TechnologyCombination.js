"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { scrollToSection } from "../lib/commonFunction";

const ContentBlock = ({ contentData }) => {
  return (
    <div className="hire_sec1_service_50">
      <div className="react-technology">
        <div className="relative z-10 rounded-[30px] !border-[1px] border-[#00dfb8]">
          <div className="dots_flex">
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
          </div>
          <div className="background-hover border-t-[1px] border-[#00dfb8]">
            <div className="style_sec3_swiper_home">
              <div className="flex gap-[1rem] pb-[2rem]">
                {contentData.images.map((image, index) => (
                  <img
                    key={index}
                    decoding="async"
                    loading="lazy"
                    src={image.src}
                    alt={image.alt}
                    className="w-[76px]"
                  />
                ))}
              </div>
              <div className="developer_sec6_title mb-2">
                <p>{contentData.title}</p>
              </div>
              <div className="hire_data_sec">
                <p
                  className={`md:h-[${contentData.minHeight}] min-h-[${contentData.minHeight}]`}
                >
                  {contentData.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TechnologyCombination = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const firstContentMap = {
    "/hire-reactjs-developer/": {
      images: [
        { src: "/images/3-1.png", alt: "reactjs" },
        { src: "/images/js-1.png", alt: "nodejs" },
      ],
      title: "1. React Node Developer",
      description:
        "React Node is a powerful combination of the two popular JavaScript technologies, Reactjs and Node.js. Hire React Node developer from us to add amazing functionality and scalability to your projects.",
      minHeight: "120px",
    },
    "/hire-java-developer/": {
      images: [
        { src: "/images/java_logo.png", alt: "java" },
        { src: "/images/angular_logo.png", alt: "angularjs" },
      ],
      title: "1. Java Angular Developer",
      description:
        "With the combination of Angular and Java technologies, you can use end-to-end full-stack development to get a fast and powerful web application in no time. It has been used to create real-world applications in enterprise projects that can handle large amounts of traffic and provide a smooth user experience.",
      minHeight: "150px",
    },
    "/hire-nodejs-developer/": {
      images: [
        { src: "/images/js-1.png", alt: "nodejs" },
        { src: "/images/3-1.png", alt: "reactjs" },
      ],
      title: "1. Node React Developer",
      description:
        "This master combination of our full stack Node js and React js will help you build complex apps with a clean codebase and great performance. Acquire our front-end + back-end services to receive full support on the development of your project.",
      minHeight: "120px",
    },
  };

  const secondContentMap = {
    "/hire-reactjs-developer/": {
      images: [
        { src: "/images/3-1.png", alt: "reactjs" },
        { src: "/images/java_logo.png", alt: "java" },
      ],
      title: "2. React Java Developer",
      description:
        "Modernize your projects with a React-driven website and Java backend. We’ll create an app that’s visually beautiful, full of features, and works on every device. Hire full stack react developers from us to build a feature-rich interface without making the backend unreadable or redundant.",
      minHeight: "120px",
    },
    "/hire-java-developer/": {
      images: [
        { src: "/images/java_logo.png", alt: "java" },
        { src: "/images/3-1.png", alt: "reactjs" },
      ],
      title: "2. Java React Developer",
      description:
        "We bring you React’s great front-end for your users and provide Java’s robust backend to rapidly build your solution. Our full stack experts are well-versed in bringing you the best of both these technologies.",
      minHeight: "150px",
    },
    "/hire-nodejs-developer/": {
      images: [
        { src: "/images/js-1.png", alt: "nodejs" },
        { src: "/images/angular_logo.png", alt: "angularjs" },
      ],
      title: "2. Node Angular Developer",
      description:
        "This powerful duo of full stack Node js + Angular can design an engaging and interactive user interface that interacts with the backend easily. Acquire our highly scalable and robust front-end + backend services to bring your business an edge over your competitors.",
      minHeight: "120px",
    },
  };

  const firstCombinationData = firstContentMap[pathname] || {};
  const secondCombinationData = secondContentMap[pathname] || {};

  const showButtonText = {
    "/hire-reactjs-developer/": "Hire Full Stack Reactjs Developers",
    "/hire-nodejs-developer/": "Hire Full Stack Nodejs Developers",
    "/hire-java-developer/": "Hire Full Stack Java Developers",
  };
  const showTitle = {
    "/hire-reactjs-developer/": (
      <>
        THE RIGHT REACT JS COMBINATIONS {!isMobile && <br />}
        JUST FOR YOU
      </>
    ),
    "/hire-nodejs-developer/": (
      <>
        HIRE STACK NODE JS DEVELOPER TO {!isMobile && <br />}
        AMP IT UP A NOTCH
      </>
    ),
    "/hire-java-developer/": (
      <>
        FULL STACK JAVA DEVELOPMENT TO {!isMobile && <br />}
        LEVEL UP YOUR WEB APPS
      </>
    ),
  };

  const buttonText = showButtonText[pathname] || null;
  const titleText = showTitle[pathname] || null;

  return (
    <div className="mx-auto service_width">
      <div className="solutions md:text-center text-left py-8">
        <h2 className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px]">
          {titleText}
        </h2>
      </div>

      <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-[4rem] reveal md:px-[3rem] lg:px-0">
        <ContentBlock contentData={firstCombinationData} />
        <ContentBlock contentData={secondCombinationData} />
      </div>

      <div className="section8_service py-[5rem]">
        <Link
          href="#section10_service"
          onClick={(e) => scrollToSection(e, "section10_service")}
        >
          <div
            className={`btn_flex mt-[4rem] ${isMobile ? "!px-8 !py-2" : ""}`}
          >
            <div className="chat_icon">
              <img
                decoding="async"
                loading="lazy"
                src="/images/hire-hand.png"
                alt="hire hand"
              />
            </div>
            <div className="chat_btn_technology">
              <p className="transition ng-binding xl:!text-[20px] lg:!text-[18px] md:!text-[15px] !text-[16px]">
                {buttonText}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TechnologyCombination;
