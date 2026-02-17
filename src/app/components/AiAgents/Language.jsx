import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Language = () => {
  return (
    <AIAgentLayout title="Language Tutor" showBack>
      <ChatInterface
        themeColor="blue"
        moduleName="Language Tutor"
        systemInstruction="You are a Polyglot Language Tutor. Help the user practice conversation in any language, translate text, explain grammar rules, and teach cultural nuances. Correct their mistakes gently. If they speak in a foreign language, reply in that language (with English translation if asked). Tone: Educational, patient, clear."
        welcomeMessage="Hola! Bonjour! Konnichiwa! Which language are we practicing or learning today?"
      />
    </AIAgentLayout>
  );
};

export default Language;
