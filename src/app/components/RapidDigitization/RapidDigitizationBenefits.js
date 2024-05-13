import React from "react";

const benefits = [
  {
    title: "Strategic Roadmap",
    description:
      "Gain a clear roadmap for digital transformation aligned with your business goals and market demands.",
  },
  {
    title: "Rapid Innovation",
    description:
      "Accelerate your time-to-market with agile development practices and iterative releases.",
  },
  {
    title: "Enhanced Customer Experience",
    description:
      "Deliver seamless digital experiences that drive customer engagement and loyalty.",
  },
  {
    title: "Quality Assurance",
    description:
      "Streamline business processes and workflows for improved productivity and cost savings.",
  },
  {
    title: "Scalability and Flexibility",
    description:
      "Adapt to evolving market dynamics and scale your digital initiatives as needed.",
  },
  {
    title: "Measurable ROI",
    description:
      "Track and measure the impact of your digital investments with actionable insights and analytics.",
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

const RapidDigitizationBenefits = () => {
  return (
    <div className="md:py-[6rem] py-[4rem] end-to-end">
      <div className="endTO_text solutions">
        <h2 className="!w-full p-0">Benefits of Digital Acceleration</h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-10 gap-4">
        {benefits.map((item) => (
          <ServiceItem
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default RapidDigitizationBenefits;
