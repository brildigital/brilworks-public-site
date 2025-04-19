"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import TabVerticalSticky from "../Common/TabVerticalSticky";
import TabAccordionDark from "../Common/TabAccordionDark";
import Heading from "../HTMLComponents/Heading";
import { useMediaQuery } from "react-responsive";

const UseCases = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const aiUseCaseData = {
    title: "What are the Usecases of AI?",
    sectionId: "ai-use-case",
    useCaseData: [
      {
        title: "AI for Fintech",
        value: "fintech",
        imageSrc: "/images/v2/finance-in-ai-ml.webp",
        innerTitle:
          "Detect Anomalies, Predict Trends, Get Advice with The All-in-One AI Investment Suite",
        description: [
          "Leverage our best AI software to enable AI-powered anomaly detection to identify suspicious activity in real time.",
          "Predict market fluctuations and financial trends with intelligent AI solutions, enabling proactive risk mitigation strategies.",
          "Integrate AI-powered virtual assistants to offer personalized financial advice and provide tailored solutions to individual needs.",
          "Process vast amounts of market data and media sentiments with precision to help your end customers make informed decisions.",
        ],
      },
      {
        title: "AI for Healthcare",
        value: "healthcare",
        imageSrc: "/images/v2/ai-for-healthcare.webp",
        innerTitle:
          "Your Holistic AI Solution for Better Care & Personalized Treatment, and 24/7 Support",
        description: [
          "Improve patient care through predictive analytics, personalized treatment plans, and medical image analysis.",
          "Empower doctors with AI-driven insights for personalized treatment plans and early diagnosis of diseases.",
          "Automate patient scheduling, insurance verification, and other processes for improved efficiency.",
          "Integrate AI-powered healthcare virtual assistants to answer patients' questions, provide information, and offer support round the clock, 365 days a year.",
        ],
      },
      {
        title: "AI for Media & Entertainment",
        value: "media-entertainment",
        imageSrc: "/images/v2/ai-for-media-entertainment.webp",
        innerTitle:
          "Deliver Personalized Experiences, targeted Advertising, AI-Driven Recommendations Your Audience Craves.",
        description: [
          "Recommend content tailored to individual preferences using AI-powered engines, keeping users glued to your platform.",
          "Leverage AI to understand viewer preferences and anticipate future content consumption patterns.",
          "Analyze user behavior and preferences to understand trends and predict future content performance.",
          "Deliver targeted advertising based on user demographics, interests, and behavioral data",
        ],
      },
      {
        title: "AI for Retail & e-Commerce",
        value: "retain-e-commerce",
        imageSrc: "/images/v2/ai-for-retail-e-commerce.webp",
        innerTitle:
          "Personalize, Support, Protect, Optimize and provide smarter Deliveries and Services with Smart AI Solutions.",
        description: [
          "Personalize product recommendations with AI, driving targeted purchases and boosting revenue.",
          "Implement AI-powered chatbots for 24/7 support, resolving inquiries efficiently and improving customer satisfaction.",
          "Identify fraudulent transactions in real time, protecting businesses from financial losses.",
          "Optimizes delivery routes, warehouse operations, and picking processes, leading to faster and more efficient deliveries.",
        ],
      },
      {
        title: "AI for Education",
        value: "education",
        imageSrc: "/images/v2/ai-for-education.webp",
        innerTitle:
          "Embrace adaptive and Personalized Learning Journeys, Grading & Scheduling, all Powered by AI.",
        description: [
          "Free up educators' time for personalized interaction by automating grading, scheduling, and data analysis.",
          "Adapt educational content to individual student needs with AI-powered platforms, maximizing learning outcomes.",
          "With AI-driven insights and tools, swiftly generates personalized learning materials in accordance with each student's progress.",
          "Implement a virtual tutor powered by AI, providing individualized feedback and guidance to students in real time.",
        ],
      },
      {
        title: "AI for Logistic",
        value: "logistic",
        imageSrc: "/images/v2/ai-for-logistics.webp",
        innerTitle:
          "Deliver Faster, Smarter, and More Efficiently with 24/7 support through AI-optimized logistic service.",
        description: [
          "Reduce transportation costs by 15% with AI-powered route planning algorithms, ensuring timely deliveries.",
          "Predict demand fluctuations and optimize inventory levels with AI-driven forecasting, minimizing disruptions.",
          "Utilize AI-powered robots for tasks like sorting, packaging, and inventory management, boosting efficiency and accuracy.",
          "Build AI-powered chatbots to answer customer queries about their shipments, providing 24/7 support and reducing the workload on human agents.",
        ],
      },
      {
        title: "AI for Marketing",
        value: "marketing",
        imageSrc: "/images/v2/ai-for-marketing.webp",
        innerTitle:
          "Create 20X content for Smarter Targeting & Personalization, Hyper-Targeted Marketing with our AI solutions",
        description: [
          "Identify high-value customer segments with AI, ensuring your marketing efforts reach the right people.",
          "Utilize AI algorithms to personalize ad creatives and bidding strategies, maximizing ROI for your campaigns.",
          "Predict customer behavior and personalize marketing messages with AI, fostering deeper relationships and driving repeat business.",
          "Effortlessly produce diverse content formats, including text, videos, audio, and more, to enhance your brand presence.",
        ],
      },
    ],
  };

  const generativeAIUseCaseData = {
    title: "What are some common generative AI use cases?",
    sectionId: "gen-ai-use-case",
    useCaseData: [
      {
        title: "Image generation",
        value: "image-generation",
        imageSrc: "/images/v2/image-generation.webp",
        innerTitle:
          "Generate a steady stream of fresh visuals for websites, social media, presentations, and marketing materials.",
        description: [
          "Develop custom imagery that perfectly embodies the essence of your campaigns.",
          "Showcase your products in a whole new light. Generate product images that only look stunning.",
          "Generate captivating photos that capture the essence of a location, its culture, and its natural beauty, inspiring them to book their next adventure.",
          "Create eye-catching posters, trailers, and social media content that reflects the vibrancy and energy of your film, show, or musical event.",
        ],
      },
      {
        title: "Content creation",
        value: "healthcare",
        imageSrc: "/images/v2/content-creation.webp",
        innerTitle:
          "Create a powerful marketing strategy that combines human creativity and strategic thinking with AI.",
        description: [
          "Generate personalized product recommendations, targeted ad copy, and dynamic product descriptions.",
          "Craft targeted ads and marketing materials that resonate with specific demographics and user segments.",
          "Generate customized proposals, reports, and marketing materials.",
          "Create personalized tutorials, onboarding experiences, and in-app messages.",
          "Develop personalized property descriptions, virtual tours, and targeted marketing materials.",
        ],
      },
      {
        title: "Software development with AI",
        value: "media-entertainment",
        imageSrc: "/images/v2/software-development-with-ai.webp",
        innerTitle:
          "Free up your developers' time by automating tedious tasks like code generation, testing, and debugging.",
        description: [
          "Code generation with Gen AI allows developers to focus on complex logic rather than writing repetitive code.",
          "Gen AI can analyze user data and feedback to identify feature needs and suggest improvements.",
          "Gen AI automates tasks like regulatory compliance checks and data analysis.",
          "Gen AI streamlines the creation of medical software by automating code generation and compliance checks.",
        ],
      },
      {
        title: "Document and image analysis",
        value: "retain-e-commerce",
        imageSrc: "/images/v2/document-image-analysis.webp",
        innerTitle:
          "Extract key information from invoices, receipts, contracts, and other documents with unmatched speed and accuracy.",
        description: [
          "Gen AI can analyze vast amounts of legal documents, including case files, contracts, and litigation research materials. It can identify key information, extract relevant clauses, and summarize complex legal concepts.",
          "Gen AI can analyze financial documents like loan applications, credit reports, and investment proposals with incredible accuracy. It can identify inconsistencies, flag potential risks, and ensure compliance with complex regulations.",
          "Gen AI can accurately analyze medical scans, X-rays, and MRIs. It can detect abnormalities, highlight areas of concern, assisting doctors in more precise diagnoses.",
        ],
      },
      {
        title: "Media translation service",
        value: "education",
        imageSrc: "/images/v2/media-translation-service.webp",
        innerTitle:
          "Translate your marketing materials, websites, videos, and other content with speed and precision.",
        description: [
          "Go beyond literal translations. Gen AI understands cultural nuances and adapts content (movies, TV shows) to resonate with global audiences.",
          "Enhance the gaming experience for a global audience. Gen AI can translate game content (text, dialogue).",
          "Gen AI translates documents (announcements, training materials) while maintaining your brand voice and message integrity.",
          "Break down language barriers in education. Gen AI translates e-learning materials.",
        ],
      },
      {
        title: "Round-the-clock customer service",
        value: "logistic",
        imageSrc: "/images/v2/round-the-clock-customer-service.webp",
        innerTitle:
          "Offer your customers 24/7, always-on support powered by intelligent AI.",
        description: [
          "AI-powered assistants can answer customer questions about product features, specifications, and compatibility in real-time.",
          "Gen AI can analyze vast amounts of marketing campaign data in real-time.",
          "Implement AI-powered chatbots or virtual assistants that can answer basic medical questions.",
          "Gen AI can personalize learning experiences by generating content tailored to student needs and progress.",
        ],
      },
    ],
  };

  const getMyUseCase = {
    "/generative-ai-development-services/": generativeAIUseCaseData,
    "/ai-ml-development-services/": aiUseCaseData,
  };
  const useCaseWorkingData = getMyUseCase[pathname];

  return (
    <div className="bg-[#F8FAFC]">
      <div className="reveal">
        <div className="container max-w-[1280px] mx-auto main-section-padding !pb-0">
          <Heading
            type="h2"
            className="lg:!text-[34px] md:!leading-snug md:!text-3xl !text-2xl"
            text={useCaseWorkingData.title}
          />
        </div>
      </div>
      <div
        className={`container max-w-[1280px] mx-auto reveal ${
          isMobile ? "main-section-padding !px-0" : ""
        }`}
      >
        {isMobile ? (
          useCaseWorkingData?.useCaseData?.map((data, index) => (
            <div key={data.value}>
              <TabAccordionDark
                index={index + 1}
                darkMode={false}
                useCaseSection={true}
                key={data?.value}
                data={data}
                handleOpen={handleOpen}
                open={open}
                buttonText={useCaseWorkingData?.buttonText}
              />
            </div>
          ))
        ) : (
          <TabVerticalSticky
            darkMode={false}
            borderRight={false}
            sectionId={useCaseWorkingData.sectionId}
            imageOnLeft={false}
            useCaseSection={true}
            initialTabValue={useCaseWorkingData?.useCaseData?.[0]?.value}
            data={useCaseWorkingData?.useCaseData}
            buttonText={useCaseWorkingData?.buttonText}
          />
        )}
      </div>
    </div>
  );
};

export default UseCases;
