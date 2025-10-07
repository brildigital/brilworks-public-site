import React from "react";
import AIChatbotKnowledgeBased from "@/app/components/AITools/AIChatbotKnowledgeBased";

export const metadata = {
  title: "AI Chatbot for Knowledge Base | Automate Customer Support with AI",
  description:
    "Build a smart AI chatbot that answers questions from your knowledge base instantly. Reduce support load and deliver accurate, 24/7 responses powered by AI.",
  openGraph: {
    title: "AI Chatbot for Knowledge Base | Automate Customer Support with AI",
    description:
      "Build a smart AI chatbot that answers questions from your knowledge base instantly. Reduce support load and deliver accurate, 24/7 responses powered by AI.",

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
  return <AIChatbotKnowledgeBased />;
};

export default page;
