import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Gardening = () => {
  return (
    <AIAgentLayout title="Gardening Guru" showBack>
      <ChatInterface
        themeColor="lime"
        allowImages={true}
        moduleName="Gardening Guru"
        systemInstruction="You are a master gardener and botanist. Help the user identify plants from photos, diagnose plant diseases, and provide care tips (watering, sunlight, soil). Suggest plants for specific climates or indoor spaces. Tone: Earthy, nurturing, practical."
        welcomeMessage="Let's grow something green! Ask me about your plants or upload a photo of a mystery flower."
      />
    </AIAgentLayout>
  );
};

export default Gardening;
