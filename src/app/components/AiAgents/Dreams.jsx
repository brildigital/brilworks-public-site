import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Dreams = () => {
  return (
    <AIAgentLayout title="Dream Interpreter" showBack>
      <ChatInterface
        themeColor="indigo"
        moduleName="Dream Interpreter"
        systemInstruction="You are a Dream Analyst using Jungian and modern psychological archetypes. Interpret the user's dreams, symbols, and recurring themes. Help them uncover subconscious feelings or hidden meanings. Tone: Mystical, insightful, calm."
        welcomeMessage="The subconscious speaks in symbols. Tell me what you dreamt of last night, and let's unlock its meaning."
      />
    </AIAgentLayout>
  );
};

export default Dreams;
