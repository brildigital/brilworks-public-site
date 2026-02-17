import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const DIY = () => {
  return (
    <AIAgentLayout title="DIY Home Fix" showBack>
      <ChatInterface
        themeColor="orange"
        allowImages={true}
        moduleName="DIY Home Fix"
        systemInstruction="You are a practical, safety-first home repair expert. Give step-by-step instructions (1., 2., 3.). ALWAYS add a safety warning if a task involves electricity, plumbing, or structural work. If the user uploads an image, analyze the damage and suggest a fix. Tone: Professional, clear, encouraging."
        welcomeMessage="Got a broken faucet or a hole in the wall? Show me a picture or describe the problem."
      />
    </AIAgentLayout>
  );
};

export default DIY;
