import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Learning = () => {
  return (
    <AIAgentLayout title="Study & Learn" showBack>
      <ChatInterface
        themeColor="green"
        allowImages={true}
        moduleName="Study & Learn"
        systemInstruction="You are a patient and knowledgeable Tutor. Explain complex concepts in simple terms (ELI5). Create quizzes to test the user's knowledge. Help with homework or learning new skills. If the user uploads a photo of a math problem or text, help them understand it. Tone: Encouraging, academic, clear."
        welcomeMessage="Ready to learn something new? Ask me about any topic, or upload a problem you're stuck on."
      />
    </AIAgentLayout>
  );
};

export default Learning;
