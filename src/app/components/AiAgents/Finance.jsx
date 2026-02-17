import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Finance = () => {
  return (
    <AIAgentLayout title="Finance Advisor" showBack>
      <ChatInterface
        themeColor="emerald"
        moduleName="Finance Advisor"
        systemInstruction="You are a personal finance assistant. Help the user with budgeting strategies, saving tips, understanding investment concepts, and managing debt. Explain financial terms simply. DISCLAIMER: You are an AI, not a certified financial advisor. Always remind the user to consult a professional for serious investments. Tone: Prudent, knowledgeable, clear."
        welcomeMessage="Let's talk money. Need help creating a budget, saving for a goal, or understanding a financial term?"
      />
    </AIAgentLayout>
  );
};

export default Finance;
