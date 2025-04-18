import React from "react";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";
import UpskillStaffAugmentation from "./UpskillStaffAugmentation";

const ServicesPricingPlans = dynamic(() => import("./ServicesPricingPlans"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const TechStackWeUse = dynamic(() => import("./TechStackWeUse"));
const MultipleCardWithIconBG = dynamic(() =>
  import("../Common/MultipleCardWithIconBG")
);
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));
const StaffAugmentation = () => {
  const whyStaffAugmentationData = {
    title: "Why Brilworks For IT Staff Augmentation Service",
    benefits: [
      {
        title: "Cost-effective",
        icon: "/images/v2/fi_1611179.svg",
        description:
          "With our IT staff augmentation services, you gain access to the talent you need without the burden of overhead costs associated with traditional hiring processes.",
      },
      {
        title: "Seamless Staffing",
        icon: "/images/v2/fi_17099449.svg",
        description:
          "We connect you with pre-vetted, highly skilled professionals who can seamlessly integrate into your existing team.",
      },
      {
        title: "Highly Skilled Developers",
        icon: "/images/v2/fi_18810346.svg",
        description:
          "By choosing us, you gain access to a pool of highly skilled developers, software engineers, business analysts, Scrum Masters, and QA specialists.",
      },
      {
        title: "Flexibility and Scalability",
        icon: "/images/v2/scale-project.svg",
        description:
          "Our staff augmentation services provide unmatched flexibility. Scale your IT team up or down seamlessly to meet your project requirements and evolving business needs.",
      },
      {
        title: "Domain Expertise",
        icon: "/images/v2/fi_11333971.svg",
        description:
          "Whether you operate in finance, healthcare, e-commerce, or any other sector, we have the expertise to support you.",
      },
      {
        title: "Dedicated Support",
        icon: "/images/v2/fi_9759919.svg",
        description:
          "Client satisfaction is our priority. We are committed to providing ongoing support and clear communication throughout your partnership with us.",
      },
    ],
  };
  return (
    <>
      <ServiceHeroSection
        title="IT Staff Augmentation Service"
        description="Access a global pool of experts for the niche skillset you need. Our IT Staff augmentation service offers a strategic solution to bridge the talent gap and incorporate immediate expertise into your team."
        buttonText="Scale Your Team Today"
        showGridData={true}
      />
      <UpskillStaffAugmentation />
      <MultipleCardWithIconBG
        bgClass="bg-sectionBG"
        data={whyStaffAugmentationData}
      />
      <ClientReviews />
      <ServicesPricingPlans />
      <TechStackWeUse />
      <ServicesFAQ />
    </>
  );
};

export default StaffAugmentation;
