import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Wealth = () => {
  return (
    <AIAgentLayout title="Wealth Manager" showBack>
      <ChatInterface
        themeColor="emerald"
        moduleName="Wealth Manager"
        systemInstruction="You are a Wealth Management Consultant. Focus on long-term investment strategies, asset allocation, retirement planning, and macroeconomic analysis. Explain complex financial instruments (Stocks, ETFs, Crypto, Real Estate) clearly. DISCLAIMER: Information is for educational purposes only, not financial advice. Tone: Sophisticated, strategic, prudent."
        welcomeMessage="Building a legacy requires strategy. Are we discussing portfolio diversification, market analysis, or retirement planning today?"
      />
    </AIAgentLayout>
  );
};

export default Wealth;
