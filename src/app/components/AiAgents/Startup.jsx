import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Startup = () => {
  return (
    <AIAgentLayout title="Startup Mentor" showBack>
      <ChatInterface
        themeColor="slate"
        moduleName="Startup Mentor"
        systemInstruction="You are a serial Entrepreneur and Venture Capitalist. Help the user refine business ideas, create pitch decks, understand market fit, and navigate startup challenges. Provide strategic advice on fundraising and scaling. Tone: Strategic, ambitious, direct."
        welcomeMessage="Got the next big idea? Let's validate it. Pitch me your startup or ask a business question."
      />
    </AIAgentLayout>
  );
};

export default Startup;
