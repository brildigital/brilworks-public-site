"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const IndustriesWeHelp = () => {
  const pathname = usePathname();
  const DevopsIndutryWeHelp = [
    {
      title: "Healthcare",
      imageSrc: "/images/cardio.png",
      imageAlt: "healthcare-icon",
    },
    {
      title: "Fintech",
      imageSrc: "/images/fintech-icon.png",
      imageAlt: "fintech-icon",
    },
    {
      title: "Education",
      imageSrc: "/images/online-education.png",
      imageAlt: "education-icon",
    },
    {
      title: "Retail",
      imageSrc: "/images/retails.png",
      imageAlt: "retail-icon",
    },
    {
      title: "Fleet Management",
      imageSrc: "/images/logistics.png",
      imageAlt: "logistics-icon",
    },
    {
      title: "Media & Entertainment",
      imageSrc: "/images/entertainment.png",
      imageAlt: "media-entertainment-icon",
    },
  ];

  const DigitalIndutryWeHelp = [
    {
      title: "Healthcare",
      imageSrc: "/images/cardio.png",
      imageAlt: "healthcare-icon",
    },
    {
      title: "Fintech",
      imageSrc: "/images/fintech-icon.png",
      imageAlt: "fintech-icon",
    },
    {
      title: "Education",
      imageSrc: "/images/online-education.png",
      imageAlt: "education-icon",
    },
    {
      title: "Media & Entertainment",
      imageSrc: "/images/entertainment.png",
      imageAlt: "media-entertainment-icon",
    },
    {
      title: "Logistics",
      imageSrc: "/images/logistics.png",
      imageAlt: "logistic-icon",
    },
    {
      title: "Retail",
      imageSrc: "/images/retails.png",
      imageAlt: "retail-icon",
    },
    {
      title: "Ecommerce",
      imageSrc: "/images/shopping.png",
      imageAlt: "ecommerce-icon",
    },
    {
      title: "Real Estate",
      imageSrc: "/images/find.png",
      imageAlt: "real-estate-icon",
    },
    {
      title: "Food & Restaurant",
      imageSrc: "/images/food-restaurant.png",
      imageAlt: "food-icon",
    },
    {
      title: "Sports",
      imageSrc: "/images/sports.png",
      imageAlt: "sports-icon",
    },
    {
      title: "Travel",
      imageSrc: "/images/travels.png",
      imageAlt: "travel-icon",
    },
  ];
  const ProductEngineeringWeHelp = [
    {
      title: "Healthcare",
      imageSrc: "/images/cardio.png",
      imageAlt: "healthcare-icon",
    },
    {
      title: "Fintech",
      imageSrc: "/images/fintech-icon.png",
      imageAlt: "fintech-icon",
    },
    {
      title: "Retail",
      imageSrc: "/images/retails.png",
      imageAlt: "retail-icon",
    },
    {
      title: "Media & Entertainment",
      imageSrc: "/images/entertainment.png",
      imageAlt: "media-entertainment-icon",
    },
    {
      title: "Logistics",
      imageSrc: "/images/logistics.png",
      imageAlt: "logistic-icon",
    },
    {
      title: "Oil & Gas",
      imageSrc: "/images/oil-gas.png",
      imageAlt: "logistic-icon",
    },
    {
      title: "Telecoms",
      imageSrc: "/images/telecom.png",
      imageAlt: "telecom-icon",
    },
    {
      title: "Manufaturing",
      imageSrc: "/images/industry.png",
      imageAlt: "manufaturing-icon",
    },
  ];

  const GenerativeAIWeHelp = [
    {
      title: "Healthcare",
      imageSrc: "/images/cardio.png",
      imageAlt: "healthcare-icon",
    },
    {
      title: "Fintech",
      imageSrc: "/images/fintech-icon.png",
      imageAlt: "fintech-icon",
    },
    {
      title: "Restaurant",
      imageSrc: "/images/food-restaurant.png",
      imageAlt: "food-icon",
    },
    {
      title: "Ecommerce",
      imageSrc: "/images/shopping.png",
      imageAlt: "ecommerce-icon",
    },
    {
      title: "Logistics",
      imageSrc: "/images/logistics.png",
      imageAlt: "logistic-icon",
    },
    {
      title: "Social Networking",
      imageSrc: "/images/social-networking.png",
      imageAlt: "ecommerce-icon",
    },
    {
      title: "Games & Sports",
      imageSrc: "/images/game-sports.png",
      imageAlt: "sports-icon",
    },
    {
      title: "Travel",
      imageSrc: "/images/travels.png",
      imageAlt: "travel-icon",
    },
    {
      title: "Aviation",
      imageSrc: "/images/aviation.png",
      imageAlt: "travel-icon",
    },
    {
      title: "Real Estate",
      imageSrc: "/images/find.png",
      imageAlt: "real-estate-icon",
    },
    {
      title: "Education",
      imageSrc: "/images/online-education.png",
      imageAlt: "education-icon",
    },
    {
      title: "On-Demand",
      imageSrc: "/images/on-demand.png",
      imageAlt: "education-icon",
    },
    {
      title: "Entertainment",
      imageSrc: "/images/entertainment.png",
      imageAlt: "media-entertainment-icon",
    },
    {
      title: "Government",
      imageSrc: "/images/government.png",
      imageAlt: "gov-icon",
    },
    {
      title: "Agriculture",
      imageSrc: "/images/agriculture.png",
      imageAlt: "agriculture-icon",
    },
  ];

  const FrappeWeHelp = [
    {
      title: "Manufaturing",
      imageSrc: "/images/industry.png",
      imageAlt: "manufaturing-icon",
    },
    {
      title: "Entertainment",
      imageSrc: "/images/entertainment.png",
      imageAlt: "media-entertainment-icon",
    },
    {
      title: "Healthcare",
      imageSrc: "/images/cardio.png",
      imageAlt: "healthcare-icon",
    },
    {
      title: "Education",
      imageSrc: "/images/online-education.png",
      imageAlt: "education-icon",
    },
    {
      title: "Fintech",
      imageSrc: "/images/fintech-icon.png",
      imageAlt: "fintech-icon",
    },
    {
      title: "Ecommerce",
      imageSrc: "/images/shopping.png",
      imageAlt: "ecommerce-icon",
    },
  ];

  const showDataBasedOnPathname = {
    "/devops-consulting-services/": DevopsIndutryWeHelp,
    "/digital-experience-services/": DigitalIndutryWeHelp,
    "/aws-consulting-services/": DigitalIndutryWeHelp,
    "/kubernetes-consulting-services/": DigitalIndutryWeHelp,
    "/product-engineering-development-services/": ProductEngineeringWeHelp,
    "/saas-application-development-services/": ProductEngineeringWeHelp,
    "/generative-ai-development-services/": GenerativeAIWeHelp,
    "/low-code-no-code-development-services/": GenerativeAIWeHelp,
    "/erp-next-development-services/": GenerativeAIWeHelp,
    "/business-intelligence-services/": GenerativeAIWeHelp,
    "/frappe-development-services/": FrappeWeHelp,
    "/flutterflow-development-services/": FrappeWeHelp,
    "/adalo-development-services/": FrappeWeHelp,
  };

  const industriesHelpData = showDataBasedOnPathname[pathname] || {};

  return (
    <div className="container max-w-[1440px] main-section-padding !py-0 mx-auto">
      <h2 className="md:text-center text-left !mb-8">Industries We Help</h2>
      <div className="reveal flex flex-wrap md:gap-5 gap-3 justify-center">
        {industriesHelpData?.map(({ title, imageSrc, imageAlt }, index) => (
          <div
            className="flex items-center justify-center flex-col border border-[#8F9998] rounded-2xl shadow-none hover:shadow-lg md:p-6 p-4 md:w-[200px] w-[150px]"
            key={index}
          >
            {(pathname === "/aws-consulting-services/" &&
              title === "Healthcare") ||
            (pathname === "/generative-ai-development-services/" &&
              title === "Healthcare") ? (
              <Link
                href={
                  pathname === "/aws-consulting-services/"
                    ? "/use-case/aws-in-healthcare"
                    : "/use-case/generative-ai-in-healthcare"
                }
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-auto mx-auto md:mb-6 mb-4"
                  width={60}
                  height={60}
                />

                <span className="text-center lg:text-2xl md:text-xl text-base">
                  {title}
                </span>
              </Link>
            ) : (
              <>
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-auto md:mb-6 mb-4"
                  width={60}
                  height={60}
                />

                <span className="text-center lg:text-2xl md:text-xl text-base">
                  {title}
                </span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesWeHelp;
