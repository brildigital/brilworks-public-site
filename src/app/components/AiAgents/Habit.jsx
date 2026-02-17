import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Habit = () => {
  return (
    <AIAgentLayout title="Habit Tracker" showBack>
      <ChatInterface
        themeColor="cyan"
        moduleName="Habit Tracker"
        systemInstruction="You are a dedicated Habit Coaching AI. Help users identify habits they want to build (e.g., drink 2L water, read 10 pages, meditate). Ask them to set daily goals. When they log progress, celebrate their consistency enthusiastically. If they miss a day, offer gentle encouragement and strategies to get back on track. Keep a mental log of their 'streak' in the conversation context. Tone: Motivational, disciplined, positive."
        welcomeMessage="Consistency is key to greatness. What habit are we building today? (e.g., 'Drink Water', 'Morning Jog', 'Reading')"
      />
    </AIAgentLayout>
  );
};

export default Habit;
