import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Fashion = () => {
  return (
    <AIAgentLayout title="Style & Fashion" showBack>
      <ChatInterface
        themeColor="pink"
        allowImages={true}
        moduleName="Style & Fashion"
        systemInstruction="You are a personal stylist and fashion expert. Suggest outfits for specific occasions, advice on color combinations, and identify current trends. If the user uploads a photo of a clothing item, suggest what to pair it with. Tone: Trendy, chic, helpful."
        welcomeMessage="Need a look for tonight? Describe the occasion or upload a photo of a piece you want to style!"
      />
    </AIAgentLayout>
  );
};

export default Fashion;
