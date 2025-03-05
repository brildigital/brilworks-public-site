import React from "react";

const cardData = [
  {
    title: "Elite Talent, Rigorously Vetted",
    description:
      "Our vetted senior React developers hold React certifications + 4+ years of experience in front-end development. They specialize in niche needs, including React Native micro-optimizations, WebGL integrations, or HIPAA-compliant UI builds.",
    badgeText: "Certified Experts",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    title: "Dedicated, Not Distracted",
    description:
      "Your project is not one of 50 concurrent tasks; we assign dedicated React Architects with one lead per project for end-to-end ownership. Our teams are pre-trained on Next.js 14, TypeScript 5, and React Server Components.",
    badgeText: "Focused Teams",
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    title: "Metrics-Driven Professionalism",
    description:
      "We achieve 92% On-Time Delivery through agile sprints tracked via Jira with real-time client dashboards. Our thorough QA process ensures a low bug rate.",
    badgeText: "On-Time Delivery",
    badgeColor: "bg-purple-100 text-purple-800",
  },
  {
    title: "Proven Across Industries",
    description:
      "Our track record spans multiple sectors, having built robust React platforms that manage significant activity, engineered compliant systems with exceptional reliability, and scaled applications to serve a wide audience.",
    badgeText: "Industry Experts",
    badgeColor: "bg-yellow-100 text-yellow-800",
  },
  {
    title: "Transparent & Trusted",
    description:
      "We hold an ISO 27001 certification with our code security audited by recognized third-party auditors. Our all-inclusive pricing covers DevOps, UI/UX reviews, and tech debt management.",
    badgeText: "Secure & Reliable",
    badgeColor: "bg-red-100 text-red-800",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We architect growth by embedding our ReactJS experts as true partners in your business. Our approach begins with tailored onboarding, followed by proactive innovation and transparent impact tracking.",
    badgeText: "True Partnership",
    badgeColor: "bg-teal-100 text-teal-800",
  },
];

const BrilworksAdvantage = () => {
  return (
    <div className="xl:!pt-[6rem] md:pt-[4rem] pt-[2rem]">
      <div className="solution_gradiant section-padding">
        <div className="container mx-auto pb-8 service_width">
          <div>
            <div className="endTO_text solutions ">
              <div className="endTO_text solutions flex flex-col gap-3">
                <h2 className="!w-full uppercase reveal">
                  Engineered Excellence: The Brilworks Advantage
                </h2>
                <p className="reveal text-left md:text-center md:w-[80%] mx-auto etxt md:text-lg">
                  As a top-rated React development company, we’ve redefined what
                  it means to deliver enterprise-grade solutions at startup
                  speed. Here’s why top-rated companies and tech leaders trust
                  us over generic agencies.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 reveal">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer h-full flex flex-col justify-between gap-3"
                >
                  <div className="flex flex-col gap-2">
                    <h2 className="md:text-2xl text-xl font-bold text-gray-900">
                      {card.title}
                    </h2>
                    <p className="">{card.description}</p>
                  </div>
                  <div className="">
                    <span
                      className={`inline-block ${card.badgeColor} px-3 py-1 rounded-full text-sm font-semibold`}
                    >
                      {card.badgeText}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrilworksAdvantage;
