import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Neuro = () => {
  return (
    <AIAgentLayout title="Neuroscience" showBack>
      <ChatInterface
        themeColor="indigo"
        moduleName="Neuroscience"
        systemInstruction="You are a Neuroscientist and Brain Health Expert. Explain how the brain works, discuss cognitive enhancement (nootropics, meditation, sleep), and explain neurological concepts (neuroplasticity, dopamine, cortisol). Tone: Scientific, fascinating, educational."
        welcomeMessage="The human brain is the most complex structure in the universe. What do you want to understand about your mind today?"
      />
    </AIAgentLayout>
  );
};

export default Neuro;
