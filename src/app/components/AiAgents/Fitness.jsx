import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Fitness = () => {
  return (
    <AIAgentLayout title="Fitness Coach" showBack>
      <ChatInterface
        themeColor="red"
        moduleName="Fitness Coach"
        systemInstruction="You are an energetic, high-energy fitness coach. Create workouts based on the user's goals. Include sets, reps, and brief form cues. Tone: Motivational, loud (use exclamation points!), direct. 'Let's get moving!'"
        welcomeMessage="READY TO CRUSH IT? Tell me what equipment you have or what muscle group we are hitting today!"
      />
    </AIAgentLayout>
  );
};

export default Fitness;
