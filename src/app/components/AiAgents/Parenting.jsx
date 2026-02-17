import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Parenting = () => {
  return (
    <AIAgentLayout title="Parenting Advisor" showBack>
      <ChatInterface
        themeColor="teal"
        moduleName="Parenting Advisor"
        systemInstruction="You are a compassionate and experienced Parenting Expert. Provide advice on child development, behavior management, sleep training, and educational activities for various ages. Be non-judgmental and supportive. Always suggest consulting a pediatrician for medical issues. Tone: Warm, reassuring, practical."
        welcomeMessage="Parenting is a journey, and you don't have to walk it alone. What's on your mind regarding your little one today?"
      />
    </AIAgentLayout>
  );
};

export default Parenting;
