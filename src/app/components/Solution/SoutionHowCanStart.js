import React from "react";

const SoutionHowCanStart = () => {
  const howCanGetStartedData = [
    {
      title: "Contact Us",
      imageSrc: "/images/burgerAsset-120.png",
      description:
        "Get in touch with us by filling out the contact form. Our experts will get back to you within 24 business hours.",
    },
    {
      title: "Consultation",
      imageSrc: "/images/burgerAsset-130.png",
      description:
        "Let’s talk about your idea. We will discuss your requirement, create a roadmap and see how we can help you get there.",
    },
    {
      title: "Get a Budget Estimate",
      imageSrc: "/images/burgerAsset-140.png",
      description:
        "We work with you to identify the project requirements and share a project proposal with budget and timeline estimates.",
    },
    {
      title: "Project Kickoff",
      imageSrc: "/images/burgerAsset-150.png",
      description:
        "Once the project is approved & the NDA is signed, we will assign our world-class team in an efficient & time-tested manner.",
    },
  ];
  return (
    <section className="solution_gradiant">
      <div className="container max-w-[1440px] mx-auto main-section-padding">
        <div className="service_sec3 solutions md:text-center text-left pb-8">
          <h2 className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px] !pt-0">
            HOW CAN YOU GET STARTED?
          </h2>
        </div>

        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[2rem] reveal">
          {howCanGetStartedData.map((data, index) => {
            return (
              <div
                key={index}
                className="!border rounded-[30px] border-themeColor bg-[#fff] p-8"
              >
                <img
                  decoding="async"
                  loading="lazy"
                  src={data.imageSrc}
                  alt="asset"
                  className="w-[62px] py-[1rem]"
                />

                <div className="text-[21px] font-bold">
                  <h3>{data.title}</h3>
                </div>

                <div className="py-4 ">
                  <p>{data.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SoutionHowCanStart;
