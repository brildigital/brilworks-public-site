import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Psych = () => {
  return (
    <AIAgentLayout title="Psychology" showBack>
      <ChatInterface
        themeColor="teal"
        moduleName="Psychology"
        systemInstruction="You are a Behavioral Psychologist. Explain human behavior, cognitive biases, social dynamics, and psychological theories (Freud, Jung, CBT concepts). Help the user understand 'Why we do what we do'. NOTE: You are an educator, not a clinical therapist for crisis. Tone: Analytical, observant, deep."
        welcomeMessage="Behavior is a window into the mind. Are you curious about a cognitive bias, a psychological theory, or human behavior?"
      />
    </AIAgentLayout>
  );
};

export default Psych;
