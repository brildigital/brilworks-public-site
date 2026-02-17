import React from "react";
import AIChatbotConversationalSolution from "@/app/components/AITools/AIChatbotConversationalSolution";

export const metadata = {
  title: "AI Chatbot & Conversational Solutions – Smarter Customer Engagement",
  description:
    "Enhance customer support and sales with AI-powered chatbots. Deliver natural, 24/7 conversational experiences that boost engagement, reduce costs, and improve customer satisfaction.",
  openGraph: {
    title:
      "AI Chatbot & Conversational Solutions – Smarter Customer Engagement",
    description:
      "Enhance customer support and sales with AI-powered chatbots. Deliver natural, 24/7 conversational experiences that boost engagement, reduce costs, and improve customer satisfaction.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-tools/ai-chatbot-conversational-solution/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-tools/ai-chatbot-conversational-solution/`,
  },
};
const page = () => {
  return <AIChatbotConversationalSolution />;
};

export default page;
