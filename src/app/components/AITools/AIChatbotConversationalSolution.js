"use client";
import React from "react";
import Heading from "../HTMLComponents/Heading";
import Link from "next/link";
import { CircleArrowLeft } from "lucide-react";

const aiInsights = [
  {
    title: "AI Voice Agent",
    description:
      "Enable natural, human-like conversations with an AI-powered voice agent. Perfect for support, sales, and customer engagement.",
    image: "/images/v2/ai-voice-agent.webp",
    link: "https://new-chat-zkug.bolt.host/",
    bg: "bg-[#4B7BEA] text-white",
  },
  {
    title: "AI WhatsApp Agent",
    description:
      "Automate WhatsApp conversations with an AI agent that handles queries, support, and customer interactions in real time.",
    image: "/images/v2/ai-whatsapp-agent.webp",
    link: "/ai-tools/ai-whatsapp-agent/",
    bg: "bg-[#25D366] text-white",
  },
  {
    title: "AI Chatbot (Knowledge Base)",
    description:
      "Deploy an AI chatbot trained on your knowledge base to deliver instant, accurate, and context-aware responses to users.",
    image: "/images/v2/ai-chatbot-knowledge.webp",
    link: "/ai-tools/ai-chatbot-knowledge-base/",
    bg: "bg-[#F59E0B] text-white",
  },
  {
    title: "AI Chatbot (Live Database Chat with SQL)",
    description:
      "Chat directly with your live databases using AI. Query SQL with natural language and get real-time insights.",
    image: "/images/v2/ai-chatbot-database.webp/",
    link: "https://sql-chat-web.vercel.app/",
    bg: "bg-sky-300 text-white",
  },
  {
    title: "AI Chatbot (Live Database Chat with MongoDB)",
    description:
      "Chat directly with your live databases using AI. Query MongoDB with natural language and get real-time insights.",
    image: "/images/v2/ai-chatbot-database.webp/",
    link: "https://mongo-db-chat.vercel.app/",
    bg: "bg-[#10B981] text-white",
  },
];

const AIChatbotConversationalSolution = () => {
  return (
    <>
      <div className="hire-team-section-l !scroll-[unset]">
        <div className="banner-layer h-full min-h-[600px] md:max-h-[600px] max-h-full">
          <div className="container max-w-[1280px] main-section-padding !pt-24 mx-auto">
            <div className="flex flex-col items-start justify-center h-full min-h-[500px] md:max-h-[700px] max-h-full">
              <Heading
                type="h1"
                className="text-white"
                text={"AI Chatbot & Conversational Solutions"}
              />
              <p className="text-white lg:text-2xl md:text-xl text-lg !mt-5">
                Transform the way you interact with customers using intelligent
                AI chatbots. Provide instant
                <br className="hidden md:block" />
                responses, streamline support, and create personalized
                experiences that scale with your business.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-[1280px] main-section-padding-bottom mx-auto">
        <div className="mb-4">
          <Link
            href="/ai-tools/"
            className="flex gap-2 bg-white hover:bg-themeLight w-fit p-2 rounded-md"
          >
            <CircleArrowLeft /> Back
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiInsights.map((insight) => (
            <Link
              key={insight.title}
              href={insight.link || "#"}
              target="_blank"
              className="cursor-pointer rounded-xl shadow-md hover:shadow-xl transition-shadow bg-white overflow-hidden group"
            >
              {/* <img
                src={insight.image}
                alt={insight.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
              /> */}

              <div
                className={`${insight.bg} flex items-center justify-center p-6`}
              >
                <div className="w-72 h-40 flex items-center justify-center">
                  {/* <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-contain"
                  /> */}
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center ">
                    {insight?.title}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {insight.title}
                </h3>
                <p className="text-base text-gray-600">{insight.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AIChatbotConversationalSolution;
