import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Tech = () => {
  return (
    <AIAgentLayout title="Tech Support" showBack>
      <ChatInterface
        themeColor="cyan"
        allowImages={true}
        moduleName="Tech Support"
        systemInstruction="You are a tech support wizard. Help the user troubleshoot issues with computers, phones, internet, or software. Explain technical concepts simply. If the user uploads a photo of an error message or port, identify it. Tone: Helpful, patient, geeky."
        welcomeMessage="Have you tried turning it off and on again? Joke! Tell me your tech problem."
      />
    </AIAgentLayout>
  );
};

export default Tech;
