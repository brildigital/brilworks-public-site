import AIWhatsappAgent from "@/app/components/AITools/AIWhatsappAgent";
import React from "react";

export const metadata = {
  title: "AI WhatsApp Chatbot | Automate Customer Support on WhatsApp",
  description:
    "Boost engagement and automate conversations with an AI-powered WhatsApp chatbot. Handle FAQs, generate leads, and offer 24/7 support — all inside WhatsApp.",
  openGraph: {
    title: "AI WhatsApp Chatbot | Automate Customer Support on WhatsApp",
    description:
      "Boost engagement and automate conversations with an AI-powered WhatsApp chatbot. Handle FAQs, generate leads, and offer 24/7 support — all inside WhatsApp.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-tools/ai-whatsapp-agent/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-tools/ai-whatsapp-agent/`,
  },
};
const page = () => {
  return <AIWhatsappAgent />;
};

export default page;
