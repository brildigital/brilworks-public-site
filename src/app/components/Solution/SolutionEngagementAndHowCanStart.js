import MultipleCardInGrid from "../Common/MultipleCardInGrid";
import MultipleCardWithIconBG from "../Common/MultipleCardWithIconBG";

const SolutionEngagementAndHowCanStart = () => {
  const industryEngagementData = [
    {
      title: "Dedicated Development Team",
      icon: "/images/v2/dedicated-dev-team.svg",
      description:
        "With our design & development ninjas by our side, there’s absolutely nothing we can’t achieve.",
    },
    {
      title: "Team Extension",
      icon: "/images/v2/team-extension.svg",
      description:
        "We’ve built and launched more than 120+ products in 20 countries across the globe.",
    },
    {
      title: "Project-Based Model",
      icon: "/images/v2/project-based-model-icon.svg",
      description:
        "We turn your product vision from brainstorming to a fully implemented real-world solution.",
    },
  ];
  const industryHowCanStartData = {
    title: "How Can You Get Started?",
    benefits: [
      {
        title: "Contact Us",
        icon: "/images/v2/contact-us-icon.svg",
        description:
          "Get in touch with us by filling out the contact form. Our experts will get back to you within 24 business hours.",
      },
      {
        title: "Consultation",
        icon: "/images/v2/consultant-icon.svg",
        description:
          "Let’s talk about your idea. We will discuss your requirement, create a roadmap and see how we can help you get there.",
      },
      {
        title: "Get a Budget Estimate",
        icon: "/images/v2/budget-estimate.svg",
        description:
          "We work with you to identify the project requirements and share a project proposal with budget and timeline estimates.",
      },
      {
        title: "Project Kickoff",
        icon: "/images/v2/project-kirchoff.svg",
        description:
          "Once the project is approved & the NDA is signed, we will assign our world-class team in an efficient & time-tested manner.",
      },
    ],
  };

  return (
    <>
      <MultipleCardInGrid
        bgClass="bg-themeLight"
        title="Our Engagement Models"
        cardData={industryEngagementData}
        buttonText="Know More"
      />
      <MultipleCardWithIconBG data={industryHowCanStartData} />
    </>
  );
};

export default SolutionEngagementAndHowCanStart;
