"use client";
import { usePathname } from "next/navigation";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";

const BenefitOfHiringDevelopers = ({
  bgClass = "bg-white",
  title,
  description,
  cardData,
}) => {
  const pathname = usePathname();

  const developerBenefits = [
    {
      title: "Dedicated Resources On-Demand",
      imgSrc: "/images/v2/dediated-resource.svg",
      alt: "Dedicated Resources On-Demand",
    },
    {
      title: "Emergency Support",
      imgSrc: "/images/v2/e-support.png",
      alt: "Emergency Support",
    },
    {
      title: "Scalable Projects",
      imgSrc: "/images/v2/scale-project.svg",
      alt: "Scalable Projects",
    },
    {
      title: "Quick-Turnaround Time",
      imgSrc: "/images/v2/quick-turn-time.png",
      alt: "Quick-Turnaround Time",
    },
    {
      title: "Complete Autonomy",
      imgSrc: "/images/v2/complete-atonomy.png",
      alt: "Complete Autonomy",
    },
    {
      title: "Quality Infrastructure",
      imgSrc: "/images/v2/medal-star.svg",
      alt: "Quality Infrastructure",
    },
  ];

  const showTitleBasedOnPathname = {
    "/hire-reactjs-developer/": "React JS",
    "/hire-java-developer/": "Java",
    "/hire-nodejs-developer/": "Node JS",
    "/hire-react-native-developer/": "React Native",
    "/hire-aws-developer/": "AWS",
    "/hire-ui-ux-designer/": "UI UX",
    "/hire-blockchain-developer/": "Blockchain",
    "/hire-flutterflow-developer/": "Flutterflow",
    "/hire-mobile-app-developer/": "Mobile App",
    "/hire-adalo-developer/": "Adalo",
    "/hire-bubble-developer/": "Bubble",
    "/hire-low-code-no-code-developer/": "Low Code",
  };

  const benefitData = cardData || developerBenefits;

  const techTitle = showTitleBasedOnPathname[pathname] || {};

  return (
    <div className={bgClass}>
      <div className="container max-w-[1280px] main-section-padding mx-auto reveal">
        <Heading
          type="h2"
          className="lg:!text-[34px] md:!text-3xl !text-2xl"
          text={title || "Benefits of Hiring Dedicated Developers"}
        />
        <p className="md:text-lg text-base !pt-[10px] lg:!mb-10 md:!mb-7.5 !mb-5">
          {description ||
            `Hiring a dedicated development team from a ${techTitle} Development
          Company empowers companies across the globe to access expert talent
          without any limitation of location. It enables you to keep up with the
          pace of technological change while keeping your costs down.`}
        </p>
        <div className="grid md:grid-cols-3 grid-cols-2 lg:gap-10 md:gap-7.5 gap-6 reveal">
          {benefitData.map(({ title, imgSrc, alt }) => (
            <div
              key={title}
              className={`border border-borderGray rounded-2xl benefit-developer-effect md:px-8 md:py-5 p-3 ${
                bgClass === "bg-white" ? "" : "bg-white"
              }`}
            >
              <Image
                src={imgSrc}
                alt={alt}
                className="w-8 mx-auto"
                width="32"
                height="32"
              />
              <p className="!mt-4 lg:!text-xl md:!text-lg text-base text-center">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitOfHiringDevelopers;
