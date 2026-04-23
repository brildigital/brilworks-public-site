import Image from "next/image";
import React from "react";

const KeyBenefits = () => {
  const AIMLKeyBenefits = [
    {
      title: "Customized Solutions",
      imageSrc: "/images/solution (1).png",
      imageAlt: "Customized Solutions icon",
      desc: "We collaborate closely with you to understand your unique challenges and goals, to develop tailored AI/ML models that address your specific needs.",
    },
    {
      title: "Enhanced Efficiency",
      imageSrc: "/images/efficiency.png",
      imageAlt: "Enhanced Efficiency icon",
      desc: "Repetitive tasks become a thing of the past. Our top AI software automate solutions to free up your team's valuable time and resources for higher-level pursuits.",
    },
    {
      title: "Predictive Advantage",
      imageSrc: "/images/advantage.png",
      imageAlt: "Predictive Advantage icon",
      desc: "Gain valuable foresight into future trends and customer behaviour. Our models analyze historical data to predict potential risks and opportunities, positioning you for proactive action.",
    },
    {
      title: "Scalability and Adaptability",
      imageSrc: "/images/Vector.png",
      imageAlt: "Scalability and Adaptability icon",
      desc: "Built with the future in mind, our AI/ML solutions seamlessly adapt to your evolving business needs, ensuring sustained success.",
    },
    {
      title: "Transparent and Ethical Development",
      imageSrc: "/images/Group (3).png",
      imageAlt: "Transparent and Ethical Development icon",
      desc: "Committed to responsible practices, we uphold stringent ethical guidelines and maintain transparency throughout the development process.",
    },
    {
      title: "Dedicated Expertise and Support",
      imageSrc: "/images/call-center (1).png",
      imageAlt: "Dedicated Expertise and Support icon",
      desc: "Benefit from our team of experienced professionals who provide ongoing support and guidance throughout every stage of the journey.",
    },
  ];

  return (
    <div className="container max-w-[1280px] main-section-padding services mx-auto">
      <div>
        <h2 className="md:text-center text-left !mb-8">Key Benefits</h2>
        <div className="reveal md:px-0 px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 gap-3 justify-center mx-auto mb-[20px]">
            {AIMLKeyBenefits.map(
              ({ title, imageSrc, imageAlt, desc }, index) => (
                <div
                  className="flex items-start justify-start  flex-col border border-[#8F9998] rounded-2xl shadow-none hover:shadow-lg md:p-6 p-4"
                  key={index}
                >
                  <div className="flex items-center justify-center bg-gradient-to-t from-[#00B5D4] to-[#02E1B8] w-[70px] h-[70px] rounded-[10px] md:mb-6 mb-4">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      className="w-9 h-9"
                      width={36}
                      height={36}
                    />
                  </div>

                  <h3 className="text-left md:text-xl text-base font-bold mb-2">
                    {title}
                  </h3>
                  <p>{desc}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;
