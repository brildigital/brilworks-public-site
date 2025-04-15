"use client";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import Heading from "../HTMLComponents/Heading";
import ButtonV2 from "../Common/ButtonV2";
import Image from "next/image";

const TechnologyCombination = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const javaTechCombination = {
    title: "Full Stack Java Development to Level Up Your Web Apps",
    buttonText: "Hire Full Stack Java Developers",
    combinationDataList: [
      {
        images: [
          { src: "/images/v2/java-logo.svg", alt: "java" },
          { src: "/images/v2/angular-logo.svg", alt: "angularjs" },
        ],
        title: "Java Angular Developer",
        description:
          "With the combination of Angular and Java technologies, you can use end-to-end full-stack development to get a fast and powerful web application in no time. It has been used to create real-world applications in enterprise projects that can handle large amounts of traffic and provide a smooth user experience.",
        minHeight: "150px",
      },
      {
        images: [
          { src: "/images/v2/java-logo.svg", alt: "java" },
          { src: "/images/v2/react-logo.svg", alt: "reactjs" },
        ],
        title: "Java React Developer",
        description:
          "We bring you React’s great front-end for your users and provide Java’s robust backend to rapidly build your solution. Our full stack experts are well-versed in bringing you the best of both these technologies.",
        minHeight: "150px",
      },
    ],
  };
  const reactTechCombination = {
    title: "The Right React JS Combination Just for You",
    buttonText: "Hire Full Stack Reactjs Developers",
    combinationDataList: [
      {
        images: [
          { src: "/images/v2/react-logo.svg", alt: "reactjs" },
          { src: "/images/v2/node-logo.svg", alt: "nodejs" },
        ],
        title: "React Node Developer",
        description:
          "React Node is a powerful combination of the two popular JavaScript technologies, Reactjs and Node.js. Hire React Node developer from us to add amazing functionality and scalability to your projects.",
        minHeight: "120px",
      },
      {
        images: [
          { src: "/images/v2/react-logo.svg", alt: "reactjs" },
          { src: "/images/v2/java-logo.svg", alt: "java" },
        ],
        title: "React Java Developer",
        description:
          "Modernize your projects with a React-driven website and Java backend. We’ll create an app that’s visually beautiful, full of features, and works on every device. Hire full stack react developers from us to build a feature-rich interface without making the backend unreadable or redundant.",
        minHeight: "120px",
      },
    ],
  };
  const nodeTechCombination = {
    title: "Hire Node JS Developer to AMP It Up A Notch",
    buttonText: "Hire Full Stack Nodejs Developers",
    combinationDataList: [
      {
        images: [
          { src: "/images/v2/node-logo.svg", alt: "nodejs" },
          { src: "/images/v2/react-logo.svg", alt: "reactjs" },
        ],
        title: "Node React Developer",
        description:
          "This master combination of our full stack Node js and React js will help you build complex apps with a clean codebase and great performance. Acquire our front-end + back-end services to receive full support on the development of your project.",
        minHeight: "120px",
      },
      {
        images: [
          { src: "/images/v2/node-logo.svg", alt: "nodejs" },
          { src: "/images/v2/angular-logo.svg", alt: "angularjs" },
        ],
        title: "Node Angular Developer",
        description:
          "This powerful duo of full stack Node js + Angular can design an engaging and interactive user interface that interacts with the backend easily. Acquire our highly scalable and robust front-end + backend services to bring your business an edge over your competitors.",
        minHeight: "120px",
      },
    ],
  };

  const showDataBasedOnPathname = {
    "/hire-java-developer/": javaTechCombination,
    "/hire-reactjs-developer/": reactTechCombination,
    "/hire-nodejs-developer/": nodeTechCombination,
  };

  const combinationData = showDataBasedOnPathname[pathname] || {};

  return (
    <div
      className={pathname === "/hire-reactjs-developer/" ? "" : "bg-themeLight"}
    >
      <div className="container max-w-[1280px] mx-auto main-section-padding">
        <Heading
          type="h2"
          className="lg:!text-[34px] md:!text-3xl !text-2xl mb-3"
          text={combinationData.title}
        />

        <div className="grid sxl:grid-cols-2 md:grid-cols-1 grid-cols-1 sxl:gap-10 md:gap-7.5 gap-5 slg:py-10 md:py-7.5 py-5 reveal">
          {combinationData.combinationDataList?.map((contentData, index) => (
            <div
              className="rounded-2xl border border-borderGray bg-white md:p-7.5 p-5"
              key={index}
            >
              <div className="flex gap-5 pb-6">
                {contentData.images.map((image, index) => (
                  <div className="brilliant-icon rounded-md" key={index}>
                    <div className="flex items-center justify-center sxl:w-[82px] w-16 sxl:h-[82px] h-16 bg-white rounded-md">
                      <Image
                        className="slg:w-auto w-[70%]"
                        src={image.src}
                        alt={image.alt}
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="md:!text-xl !text-lg font-medium pb-4">
                {contentData.title}
              </p>
              <p
                className={`text-base ${
                  pathname === "/hire-java-developer/"
                    ? "md:h-[150px] min-h-[150px]"
                    : "md:h-[120px] min-h-[120px]"
                }`}
              >
                {contentData.description}
              </p>
            </div>
          ))}
        </div>

        <ButtonV2
          redirect="#section-contact-form"
          label={combinationData.buttonText}
          className="md:mt-5 mt-4 hover:!text-themeColor w-fit mx-auto"
          scrollingButton
        />
      </div>
    </div>
  );
};

export default TechnologyCombination;
