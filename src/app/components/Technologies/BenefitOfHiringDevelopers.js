"use client";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";

const BenefitOfHiringDevelopers = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const showTitleBasedOnPathname = {
    "/hire-reactjs-developer/": "React JS",
    "/hire-java-developer/": "Java",
    "/hire-nodejs-developer/": "Node JS",
    "/hire-react-native-developer/": "React Native",
    "/hire-aws-developer/": "AWS",
    "/hire-ui-ux-designer/": "UI UX",
    "/hire-blockchain-developer/": "Blockchain",
  };

  const title = showTitleBasedOnPathname[pathname] || {};

  return (
    <div className="mx-auto service_width md:py-[6rem] pb-[2rem] pt-0 workpadd_borderTop end-to-end">
      <div className="end-To-end">
        <div className="endTO_text solutions m-0">
          <h2 className="!w-full py-8">
            BENEFITS OF HIRING DEDICATED DEVELOPERS
          </h2>
        </div>
      </div>

      <div className="endTO_text_content home_sec2_txt4 mb-[5rem]">
        <p
          className={`md:px-[6rem] medium-font ${
            isMobile ? "text-start" : ""
          } md:!text-[1.3rem]`}
        >
          Hiring a dedicated development team from a {title} Development Company
          empowers companies across the globe to access expert talent without
          any limitation of location. It enables you to keep up with the pace of
          technological change while keeping your costs down.
        </p>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-[2rem] gap-y-16 reveal">
        <div className="text-center benefit-developer-effect">
          <img
            decoding="async"
            loading="lazy"
            src="/images/Dedicated-Resources-On-Demand.png"
            alt="Dedicated Resources On-Demand"
            className="w-[50px] mx-auto"
          />
          <p className="mt-[20px] lg:text-[20px] text-[14px] medium-font">
            Dedicated Resources On-Demand
          </p>
        </div>

        <div className="text-center benefit-developer-effect">
          <img
            decoding="async"
            loading="lazy"
            src="/images/Emergency-Support.png"
            alt="Emergency Support"
            className="w-[50px] mx-auto"
          />
          <p className="mt-[20px] lg:text-[20px] text-[14px] medium-font">
            Emergency Support
          </p>
        </div>

        <div className="text-center benefit-developer-effect">
          <img
            decoding="async"
            loading="lazy"
            src="/images/Scalable-Projects.png"
            alt="Scalable Projects"
            className="w-[50px] mx-auto"
          />
          <p className="mt-[20px] lg:text-[20px] text-[14px] medium-font">
            Scalable Projects
          </p>
        </div>

        <div className="text-center benefit-developer-effect">
          <img
            decoding="async"
            loading="lazy"
            src="/images/Quick-Turnaround-Time.png"
            alt="Quick-Turnaround Time"
            className="w-[50px] mx-auto"
          />
          <p className="mt-[20px] lg:text-[20px] text-[14px] medium-font">
            Quick-Turnaround Time
          </p>
        </div>

        <div className="text-center benefit-developer-effect">
          <img
            decoding="async"
            loading="lazy"
            src="/images/Complete-Autonomy.png"
            alt="Complete Autonomy"
            className="w-[50px] mx-auto"
          />
          <p className="mt-[20px] lg:text-[20px] text-[14px] medium-font">
            Complete Autonomy
          </p>
        </div>

        <div className="text-center benefit-developer-effect">
          <img
            decoding="async"
            loading="lazy"
            src="/images/Quality-Infrastructure.png"
            alt="Quality Infrastructure"
            className="w-[50px] mx-auto"
          />
          <p className="mt-[20px] lg:text-[20px] text-[14px] medium-font">
            Quality Infrastructure
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitOfHiringDevelopers;
