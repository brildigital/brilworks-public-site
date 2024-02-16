"use client";
import "../../styles/Services.scss";
import React from "react";
import TabVertical from "../Common/TabVertical";

const UseCases = () => {
  const AIUseCaseData = [
    {
      title: "AI for Fintech",
      iconSrc: "/images/dollar.png",
      value: "fintech",
      imageSrc: "/images/rectangle-11.webp",
      heading:
        "Detect Anomalies, Predict Trends, Get Advice with The All-in-One AI Investment Suite",
      listDescription: [
        "Leverage our best AI software to enable AI-powered anomaly detection to identify suspicious activity in real time.",
        "Predict market fluctuations and financial trends with intelligent AI solutions, enabling proactive risk mitigation strategies.",
        "Integrate AI-powered virtual assistants to offer personalized financial advice and provide tailored solutions to individual needs.",
        "Process vast amounts of market data and media sentiments with precision to help your end customers make informed decisions.",
      ],
    },
    {
      title: "AI for Healthcare",
      iconSrc: "/images/Group (2).png",
      value: "healthcare",
      imageSrc: "/images/rectangle-12.png",
      heading:
        "Your Holistic AI Solution for Better Care & Personalized Treatment, and 24/7 Support",
      listDescription: [
        "Improve patient care through predictive analytics, personalized treatment plans, and medical image analysis.",
        "Empower doctors with AI-driven insights for personalized treatment plans and early diagnosis of diseases.",
        "Automate patient scheduling, insurance verification, and other processes for improved efficiency.",
        "Integrate AI-powered healthcare virtual assistants to answer patients' questions, provide information, and offer support round the clock, 365 days a year.",
      ],
    },
    {
      title: "AI for Media & Entertainment",
      iconSrc: "/images/television 1.png",
      value: "media-entertainment",
      imageSrc: "/images/rectangle-13.webp",
      heading:
        "Deliver Personalized Experiences, targeted Advertising, AI-Driven Recommendations Your Audience Craves.",
      listDescription: [
        "Recommend content tailored to individual preferences using AI-powered engines, keeping users glued to your platform.",
        "Leverage AI to understand viewer preferences and anticipate future content consumption patterns.",
        "Analyze user behavior and preferences to understand trends and predict future content performance.",
        "Deliver targeted advertising based on user demographics, interests, and behavioral data",
      ],
    },
    {
      title: "AI for Retail & e-Commerce",
      iconSrc: "/images/cart.png",
      value: "retain-e-commerce",
      imageSrc: "/images/rectangle-14.webp",
      heading:
        "Embrace adaptive and Personalized Learning Journeys, Grading & Scheduling, all Powered by AI.",
      listDescription: [
        "Free up educators' time for personalized interaction by automating grading, scheduling, and data analysis.",
        "Adapt educational content to individual student needs with AI-powered platforms, maximizing learning outcomes.",
        "With AI-driven insights and tools, swiftly generates personalized learning materials in accordance with each student's progress.",
        "Implement a virtual tutor powered by AI, providing individualized feedback and guidance to students in real time.",
      ],
    },
    {
      title: "AI for Education",
      iconSrc: "/images/graduation-hat.png",
      value: "education",
      imageSrc: "/images/rectangle-15.webp",
      heading:
        "Personalize, Support, Protect, Optimize and provide smarter Deliveries and Services with Smart AI Solutions.",
      listDescription: [
        "Personalize product recommendations with AI, driving targeted purchases and boosting revenue.",
        "Implement AI-powered chatbots for 24/7 support, resolving inquiries efficiently and improving customer satisfaction.",
        "Identify fraudulent transactions in real time, protecting businesses from financial losses.",
        "Optimizes delivery routes, warehouse operations, and picking processes, leading to faster and more efficient deliveries.",
      ],
    },
    {
      title: "AI for Logistic",
      iconSrc: "/images/fast-delivery.png",
      value: "logistic",
      imageSrc: "/images/rectangle-16.webp",
      heading:
        "Deliver Faster, Smarter, and More Efficiently with 24/7 support through AI-optimized logistic service.",
      listDescription: [
        "Reduce transportation costs by 15% with AI-powered route planning algorithms, ensuring timely deliveries.",
        "Predict demand fluctuations and optimize inventory levels with AI-driven forecasting, minimizing disruptions.",
        "Utilize AI-powered robots for tasks like sorting, packaging, and inventory management, boosting efficiency and accuracy.",
        "Build AI-powered chatbots to answer customer queries about their shipments, providing 24/7 support and reducing the workload on human agents.",
      ],
    },
    {
      title: "AI for Marketing",
      iconSrc: "/images/megaphone.png",
      value: "marketing",
      imageSrc: "/images/rectangle-17.webp",
      heading:
        "Create 20X content for Smarter Targeting & Personalization, Hyper-Targeted Marketing with our AI solutions",
      listDescription: [
        "Identify high-value customer segments with AI, ensuring your marketing efforts reach the right people.",
        "Utilize AI algorithms to personalize ad creatives and bidding strategies, maximizing ROI for your campaigns.",
        "Predict customer behavior and personalize marketing messages with AI, fostering deeper relationships and driving repeat business.",
        "Effortlessly produce diverse content formats, including text, videos, audio, and more, to enhance your brand presence.",
      ],
    },
  ];

  return (
    <div className="container services md:w-[90%] w-full mx-auto md:py-12 pb-14">
      <div className="!rounded-2xl">
        <h2 className="md:text-center text-left ml-4 !mb-8">
          What are the Usecases of AI ?
        </h2>
        <div className="reveal">
          <TabVertical initialTabValue={"fintech"} data={AIUseCaseData} />
        </div>
      </div>
    </div>
  );
};

export default UseCases;
