"use client";
import "../../styles/Services.scss";
import React from "react";
import TabVertical from "../Common/TabVertical";
import { usePathname } from "next/navigation";

const UseCases = () => {
  const pathname = usePathname();

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
      iconSrc: "/images/Group(2).png",
      value: "healthcare",
      imageSrc: "/images/rectangle-12.webp",
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
      iconSrc: "/images/television-1.png",
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
      title: "AI for Education",
      iconSrc: "/images/graduation-hat.png",
      value: "education",
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

  const GenerativeAIUseCaseData = [
    {
      title: "Image generation",
      iconSrc: "/images/img-generation.png",
      value: "image-generation",
      imageSrc: "/images/genAI-use-case-1.webp",
      heading:
        "Generate a steady stream of fresh visuals for websites, social media, presentations, and marketing materials.",
      listDescription: [
        "Develop custom imagery that perfectly embodies the essence of your campaigns.",
        "Showcase your products in a whole new light. Generate product images that only look stunning.",
        "Generate captivating photos that capture the essence of a location, its culture, and its natural beauty, inspiring them to book their next adventure.",
        "Create eye-catching posters, trailers, and social media content that reflects the vibrancy and energy of your film, show, or musical event.",
      ],
    },
    {
      title: "Content creation",
      iconSrc: "/images/content.png",
      value: "healthcare",
      imageSrc: "/images/genAI-use-case-2.webp",
      heading:
        "Create a powerful marketing strategy that combines human creativity and strategic thinking with AI.",
      listDescription: [
        "Generate personalized product recommendations, targeted ad copy, and dynamic product descriptions.",
        "Craft targeted ads and marketing materials that resonate with specific demographics and user segments.",
        "Generate customized proposals, reports, and marketing materials.",
        "Create personalized tutorials, onboarding experiences, and in-app messages.",
        "Develop personalized property descriptions, virtual tours, and targeted marketing materials.",
      ],
    },
    {
      title: "Software development with AI",
      iconSrc: "/images/SD-with-AI.png",
      value: "media-entertainment",
      imageSrc: "/images/genAI-use-case-3.webp",
      heading:
        "Free up your developers' time by automating tedious tasks like code generation, testing, and debugging.",
      listDescription: [
        "Code generation with Gen AI allows developers to focus on complex logic rather than writing repetitive code.",
        "Gen AI can analyze user data and feedback to identify feature needs and suggest improvements.",
        "Gen AI automates tasks like regulatory compliance checks and data analysis.",
        "Gen AI streamlines the creation of medical software by automating code generation and compliance checks.",
      ],
    },
    {
      title: "Document and image analysis",
      iconSrc: "/images/doc-img-analysis.png",
      value: "retain-e-commerce",
      imageSrc: "/images/genAI-use-case-4.webp",
      heading:
        "Extract key information from invoices, receipts, contracts, and other documents with unmatched speed and accuracy.",
      listDescription: [
        "Gen AI can analyze vast amounts of legal documents, including case files, contracts, and litigation research materials. It can identify key information, extract relevant clauses, and summarize complex legal concepts.",
        "Gen AI can analyze financial documents like loan applications, credit reports, and investment proposals with incredible accuracy. It can identify inconsistencies, flag potential risks, and ensure compliance with complex regulations.",
        "Gen AI can accurately analyze medical scans, X-rays, and MRIs. It can detect abnormalities, highlight areas of concern, assisting doctors in more precise diagnoses.",
      ],
    },
    {
      title: "Media translation service",
      iconSrc: "/images/media.png",
      value: "education",
      imageSrc: "/images/genAI-use-case-5.webp",
      heading:
        "Translate your marketing materials, websites, videos, and other content with speed and precision.",
      listDescription: [
        "Go beyond literal translations. Gen AI understands cultural nuances and adapts content (movies, TV shows) to resonate with global audiences.",
        "Enhance the gaming experience for a global audience. Gen AI can translate game content (text, dialogue).",
        "Gen AI translates documents (announcements, training materials) while maintaining your brand voice and message integrity.",
        "Break down language barriers in education. Gen AI translates e-learning materials.",
      ],
    },
    {
      title: "Round-the-clock customer service",
      iconSrc: "/images/round-the-clock.png",
      value: "logistic",
      imageSrc: "/images/genAI-use-case-6.webp",
      heading:
        "Offer your customers 24/7, always-on support powered by intelligent AI.",
      listDescription: [
        "AI-powered assistants can answer customer questions about product features, specifications, and compatibility in real-time.",
        "Gen AI can analyze vast amounts of marketing campaign data in real-time.",
        "Implement AI-powered chatbots or virtual assistants that can answer basic medical questions.",
        "Gen AI can personalize learning experiences by generating content tailored to student needs and progress.",
      ],
    },
  ];

  return (
    <div className="container services md:w-[90%] w-full mx-auto xl:pt-24 md:pt-16 pt-8">
      <div className="!rounded-2xl">
        <h2 className="md:text-center text-left ml-4 !mb-8">
          {pathname === "/generative-ai-development-services/"
            ? "What are some common generative AI use cases?"
            : "What are the Usecases of AI?"}
        </h2>
        <div className="reveal">
          <TabVertical
            initialTabValue={
              pathname === "/generative-ai-development-services/"
                ? "image-generation"
                : "fintech"
            }
            data={
              pathname === "/generative-ai-development-services/"
                ? GenerativeAIUseCaseData
                : AIUseCaseData
            }
          />
        </div>
      </div>
    </div>
  );
};

export default UseCases;
