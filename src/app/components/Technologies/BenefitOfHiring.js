"use client";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";

const BenefitOfHiring = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const benefitOfHiringFlutterFlow = {
    title: (
      <>
        Why Choose Brilworks as your
        <br className="lg:block hidden" /> Flutterflow App Development Partner
      </>
    ),
    description:
      "As a leading Flutterflow development partner, Brilworks helps you create stunning and functional mobile applications. Our team of skilled developers is dedicated to delivering exceptional results, ensuring your app meets the highest standards of quality and user experience.",
    points: [
      "Expert Flutterflow Developers",
      "Rapid App Development",
      "Continuous Support",
      "Dedicated Resources On-Demand",
      "Complete Autonomy",
      "Scalable Projects",
    ],
  };

  const benefitOfHiringBubble = {
    title: (
      <>
        Why Choose Brilworks for
        <br className="lg:block hidden" /> Bubble Development
      </>
    ),
    description:
      "Let's build groundbreaking solutions together. Brilworks offers expert Bubble developers and rigorous quality assurance to ensure your app is exceptional.",
    points: [
      "Expertise",
      "Dedicated Resources on-Demand",
      "Quality Assurance",
      "Rapid Development",
      "Support and Maintenance",
      "Design and User Experience",
    ],
  };
  const benefitOfHiringAdalo = {
    title: (
      <>
        Why Choose Brilworks for
        <br className="lg:block hidden" /> Adalo App Development
      </>
    ),
    description:
      "As a pioneer in Adalo development, Brilworks offers unparalleled expertise and a commitment to excellence. Our team of skilled developers has built over 100+ enterprise-level solutions, each a testament to our expertise.",
    points: [
      "Experienced Team",
      "Dedicated Resources on-Demand",
      "Fast Turnaround",
      "Client-Centric Approach",
      "Support and Maintenance",
      "Design and User Experience",
    ],
  };
  const benefitOfHiringLowCode = {
    title: <>Why Choose Brilworks?</>,
    description:
      "As a leading no-code development agency, our team of experts helps businesses worldwide build innovative solutions with low code mobile app development. We work with popular no-code and low-code platforms to deliver results quickly and efficiently.",
    points: [
      "Dedicated Resources On-Demand",
      "Expert Team",
      "Cost-Effective Solutions",
      "Custom development",
      "Continuous Support",
      "Complete Autonomy",
    ],
  };
  const benefitOfHiringMobileApp = {
    title: <>WWhy Choose Us?</>,
    description:
      "Hiring a dedicated development team from a Mobile App Development Company empowers companies across the globe to access expert talent without any limitation of location. It enables you to keep up with the pace of technological change while keeping your costs down.",
    points: [
      "Extensive Talent Pool",
      "Proven Track Record",
      "Transparent Communication",
      "Quality Assurance",
      "Flexible Engagement Models",
      "Complete Autonomy",
    ],
  };

  const showDataBasedOnPathname = {
    "/hire-flutterflow-developer/": benefitOfHiringFlutterFlow,
    "/hire-bubble-developer/": benefitOfHiringBubble,
    "/hire-adalo-developer/": benefitOfHiringAdalo,
    "/hire-low-code-no-code-developer/": benefitOfHiringLowCode,
    "/hire-mobile-app-developer/": benefitOfHiringMobileApp,
  };

  const { title, description, points } = showDataBasedOnPathname[pathname];

  return (
    <div className="xl:py-[6rem] md:py-[4rem] py-[2rem] workpadd_borderTop end-to-end">
      <div className="end-To-end">
        <div className="solutions text-center m-0">
          <h2 className="!w-full pb-8 uppercase">{title}</h2>
        </div>
      </div>

      <div className="endTO_text_content home_sec2_txt4 xl:mb-[4rem] md:mb-[3rem] md-[2rem]">
        <p
          className={`md:px-[6rem] ${
            isMobile ? "text-start" : ""
          } md:!text-[1.3rem]`}
        >
          {description}
        </p>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-[2rem] gap-y-16 reveal">
        <div className="text-center benefit-developer-effect">
          <img
            decoding="async"
            loading="lazy"
            src="/images/Dedicated-Resources-On-Demand.png"
            alt={points?.[0]}
            className="w-[50px] mx-auto"
          />
          <p className="mt-[20px] lg:text-[20px] text-[14px]">{points?.[0]}</p>
        </div>

        <div className="text-center benefit-developer-effect">
          <img
            decoding="async"
            loading="lazy"
            src="/images/Emergency-Support.png"
            alt={points?.[1]}
            className="w-[50px] mx-auto"
          />
          <p className="mt-[20px] lg:text-[20px] text-[14px]">{points?.[1]}</p>
        </div>

        <div className="text-center benefit-developer-effect">
          <img
            decoding="async"
            loading="lazy"
            src="/images/Scalable-Projects.png"
            alt={points?.[2]}
            className="w-[50px] mx-auto"
          />
          <p className="mt-[20px] lg:text-[20px] text-[14px]">{points?.[2]}</p>
        </div>

        <div className="text-center benefit-developer-effect">
          <img
            decoding="async"
            loading="lazy"
            src="/images/Quick-Turnaround-Time.png"
            alt={points?.[3]}
            className="w-[50px] mx-auto"
          />
          <p className="mt-[20px] lg:text-[20px] text-[14px]">{points?.[3]}</p>
        </div>

        <div className="text-center benefit-developer-effect">
          <img
            decoding="async"
            loading="lazy"
            src="/images/Complete-Autonomy.png"
            alt={points?.[4]}
            className="w-[50px] mx-auto"
          />
          <p className="mt-[20px] lg:text-[20px] text-[14px]">{points?.[4]}</p>
        </div>

        <div className="text-center benefit-developer-effect">
          <img
            decoding="async"
            loading="lazy"
            src="/images/Quality-Infrastructure.png"
            alt={points?.[5]}
            className="w-[50px] mx-auto"
          />
          <p className="mt-[20px] lg:text-[20px] text-[14px]">{points?.[5]}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitOfHiring;
