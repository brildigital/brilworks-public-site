import React from "react";

const benefits = [
  {
    title: "Tailored Expertis",
    description:
      "Access a team custom-built to meet your project's exact requirements. From development to customer support, each member possesses specialized skills aligned with your business needs.",
  },
  {
    title: "Cost-Efficiency",
    description:
      "Enjoy the benefits of a dedicated team without the overhead costs of hiring full-time employees. Our flexible models allow you to scale resources up or down as needed, optimizing your budget.",
  },
  {
    title: "Streamlined Communication",
    description:
      "With a dedicated team, communication flows seamlessly. You'll have a single point of contact managing your project, ensuring clarity, responsiveness, and efficient problem-solving.",
  },
  {
    title: "Quality Assurance",
    description:
      "Our dedicated teams are driven by a commitment to excellence. Through rigorous testing, continuous feedback, and adherence to industry best practices, we ensure the highest quality deliverables for your business.",
  },
  {
    title: "Faster Time-to-Market",
    description:
      "Experience accelerated project timelines as our dedicated team focuses solely on your tasks. By eliminating distractions and prioritizing your goals, we help you bring your products and services to market faster.",
  },
  {
    title: "Scalability and Flexibility",
    description:
      "Adapt to changing business needs with ease. Whether you require additional resources for a new project or need to downsize after project completion, our dedicated teams offer the flexibility to scale up or down as required.",
  },
];

const ServiceItem = ({ description, title }) => (
  <div className="rounded-lg border cursor-pointer dedicated_team_card p-[2px]">
    <div className="flex flex-col gap-3 p-4 bg-white h-full rounded-lg">
      <h2 className="!text-2xl font-bold">{title}</h2>
      <p className="text-base text-colorGray">{description}</p>
    </div>
  </div>
);

const DedicatedTeamBenefits = () => {
  return (
    <div className="container max-w-[1440px] main-section-padding mx-auto">
      <div className="reveal">
        <div className="endTO_text solutions">
          <h2 className="!w-full p-0">Benefits of Hiring a Dedicated Team</h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-10 gap-4 reveal">
          {benefits.map((item) => (
            <ServiceItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DedicatedTeamBenefits;
