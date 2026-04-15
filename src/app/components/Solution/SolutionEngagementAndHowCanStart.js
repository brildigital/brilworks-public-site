import Link from "next/link";
import Image from "next/image";

const SolutionEngagementAndHowCanStart = () => {
  const engagementModels = [
    {
      iconSrc: "/images/v2/dedicated-dev-team.svg",
      title: "Dedicated Development Team",
      description:
        "A full team (devs, QA, PM, designer) working exclusively on your product. Best for funded startups building a core platform.",
    },
    {
      iconSrc: "/images/v2/team-extension.svg",
      title: "Team Extension",
      description:
        "Add our engineers to your existing team. They integrate with your processes, tools, and culture. Best for scaling quickly.",
    },
    {
      iconSrc: "/images/v2/project-based-model-icon.svg",
      title: "Project-Based Model",
      description:
        "Fixed scope, fixed timeline, fixed price. We handle everything from design to deployment. Best for MVPs and defined projects.",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Contact Us",
      description: "Fill out the form. We respond within 24 business hours.",
    },
    {
      step: 2,
      title: "Free Consultation",
      description:
        "We discuss your requirements, target users, and build a roadmap together.",
    },
    {
      step: 3,
      title: "Proposal & Estimate",
      description:
        "Detailed project proposal with timeline, milestones, and transparent pricing.",
    },
    {
      step: 4,
      title: "Project Kickoff",
      description:
        "Your dedicated team starts building. Weekly demos, Slack access, full transparency.",
    },
  ];

  return (
    <>
      {/* Engagement Models */}
      <section className="main-section-padding">
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
          <div className="text-center mb-14">
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-themeColor inline-block !mb-3">
              How We Work
            </span>
            <h2 className="lg:text-[44px] md:text-[36px] text-[30px] font-extrabold leading-[1.1] tracking-[-1px] text-[#0d0f1a]">
              Our Engagement Models
            </h2>
            <p className="text-[17px] text-[#6b7280] mt-3 max-w-[560px] mx-auto leading-[1.6]">
              Flexible models to match your stage — whether you&apos;re a solo
              founder with an idea or a funded startup scaling fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {engagementModels.map(({ iconSrc, title, description }, index) => (
              <div
                key={index}
                className="border border-[#e5e7eb] rounded-2xl p-7 bg-white text-center transition-all duration-300 hover:border-themeColor hover:bg-[#e8f0fd]"
              >
                <div className="w-10 h-10 rounded-full bg-[#e8f0fd] flex items-center justify-center mx-auto !mb-5">
                  <Image src={iconSrc} alt="" width={20} height={20} />
                </div>
                <h3 className="text-xl font-bold text-[#212121] tracking-[-0.5px] !mb-2">
                  {title}
                </h3>
                <p className="text-base text-[#6b7280] leading-[1.6] !mb-5">
                  {description}
                </p>
                <Link
                  href="#section-contact-form"
                  className="c-button c-btn-secondary inline-flex"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="main-section-padding bg-[#fafafa]">
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
          <div className="text-center mb-14">
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-themeColor inline-block !mb-3">
              Getting Started
            </span>
            <h2 className="lg:text-[44px] md:text-[36px] text-[30px] font-extrabold leading-[1.1] tracking-[-1px] text-[#0d0f1a]">
              How to Launch Your Platform
            </h2>
            <p className="text-[17px] text-[#6b7280] mt-3 max-w-[560px] mx-auto leading-[1.6]">
              From first conversation to production — in as little as 10 weeks.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-9 left-[10%] right-[10%] h-0.5 bg-[#e5e7eb] z-0"></div>

            {processSteps.map(({ step, title, description }) => (
              <div key={step} className="text-center relative z-[1]">
                <div className="w-[72px] h-[72px] rounded-full bg-themeColor text-white text-2xl font-bold flex items-center justify-center mx-auto !mb-4">
                  {step}
                </div>
                <h3 className="text-base font-bold text-[#212121] !mb-2">
                  {title}
                </h3>
                <p className="text-sm text-[#6b7280]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionEngagementAndHowCanStart;
