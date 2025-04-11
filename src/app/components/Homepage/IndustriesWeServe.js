import React from "react";
import Heading from "../HTMLComponents/Heading";
import Link from "next/link";
import Image from "next/image";

const IndustriesWeServe = ({
  title = "Industries We Serve",
  darkBackground = true,
}) => {
  const textColor = darkBackground ? "text-white" : "text-colorBlack";
  const industriesWeServeData = [
    {
      title: "Finance",
      imageSrc: "/images/v2/usd-circle.svg",
      imageAlt: "fintech-icon",
      href: "/industry/fintech-software-development/",
    },
    {
      title: "Media and Entertainment",
      imageSrc: "/images/v2/media-entertainmnet-icon.svg",
      imageAlt: "media-entertainment-icon",
      href: "/industry/media-entertainment-software-development/",
    },
    {
      title: "Healthcare",
      imageSrc: "/images/v2/heathcare-icon.svg",
      imageAlt: "healthcare-icon",
      href: "/industry/healthcare-software-development/",
    },
    {
      title: "Logistics",
      imageSrc: "/images/v2/logistic-icon.svg",
      imageAlt: "logistic-icon",
      href: "/industry/fleet-management-software-development/",
    },
    {
      title: "E-commerce",
      imageSrc: "/images/v2/shopping-cart-check.svg",
      imageAlt: "1-commerce-icon",
    },
    {
      title: "SaaS",
      imageSrc: "/images/v2/software-as-service-icon.svg",
      imageAlt: "saas-icon",
    },
    {
      title: "Education",
      imageSrc: "/images/v2/user-graduate.svg",
      imageAlt: "education-icon",
    },
    {
      title: "Manufacturing",
      imageSrc: "/images/v2/manufaturing-icon.svg",
      imageAlt: "manufaturing-icon",
    },
    {
      title: "Social",
      imageSrc: "/images/v2/social-media-notification.svg",
      imageAlt: "socia;-icon",
    },
    {
      title: "Travel & Hospitality",
      imageSrc: "/images/v2/plane-departure.svg",
      imageAlt: "travel-icon",
    },
    {
      title: "Fashion",
      imageSrc: "/images/v2/fashion-icon.svg",
      imageAlt: "fashion-icon",
    },
    {
      title: "Staffing",
      imageSrc: "/images/v2/staffing-icon.svg",
      imageAlt: "staffing-icon",
    },
    {
      title: "Advertising",
      imageSrc: "/images/v2/bullhorn.svg",
      imageAlt: "advertising-icon",
    },
    {
      title: "Consumer Service",
      imageSrc: "/images/v2/user-headset.svg",
      imageAlt: "consumer-s-icon",
    },
    {
      title: "Retail FMCG",
      imageSrc: "/images/v2/marketplace-store.svg",
      imageAlt: "reatil-icon",
    },
  ];
  return (
    <div className={darkBackground ? "we-serve-bg" : "bg-themeLight"}>
      <div className={darkBackground ? "we-serve-dark" : ""}>
        <div className="container max-w-[1280px] mx-auto main-section-padding reveal">
          <Heading
            type="h2"
            className={`lg:!text-[34px] md:!text-3xl !text-2xl ${textColor} lg:mb-10 md:mb-8 mb-6`}
            text={title}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesWeServeData?.map(
              ({ title, imageSrc, imageAlt, href }, index) => (
                <div className="trusted-by-border rounded-2xl" key={index}>
                  <div
                    className={`flex flex-col items-center justify-center ${
                      darkBackground
                        ? "border border-[#2D3540] bg-[#081121] hover:border-white hover:border-b-2"
                        : "bg-white"
                    } p-5 rounded-2xl`}
                  >
                    {href ? (
                      <Link href={href}>
                        <Image
                          src={imageSrc}
                          alt={imageAlt}
                          className={`w-auto mx-auto mb-4 ${
                            darkBackground ? "" : "invert"
                          }`}
                          width={32}
                          height={32}
                        />

                        <p className={`${textColor} md:text-xl text-lg `}>
                          {title}
                        </p>
                      </Link>
                    ) : (
                      <>
                        <Image
                          src={imageSrc}
                          alt={imageAlt}
                          className={`w-auto mx-auto mb-4 ${
                            darkBackground ? "" : "invert"
                          } `}
                          width={32}
                          height={32}
                        />
                        <p className={`${textColor} md:text-xl text-lg`}>
                          {title}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeServe;
