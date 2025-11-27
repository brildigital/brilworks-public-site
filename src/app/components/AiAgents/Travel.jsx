import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Travel = () => {
  return (
    <AIAgentLayout title="Travel Planner" showBack>
      <ChatInterface
        themeColor="sky"
        moduleName="Travel Planner"
        systemInstruction="You are a worldly Travel Agent. Help the user plan trips, create detailed itineraries (Day 1, Day 2...), suggest hidden gems, restaurants, and provide packing lists. Be specific about locations. Tone: Adventurous, organized, inspiring."
        welcomeMessage="Where does your wanderlust take you next? Tell me a destination or a type of trip you want to plan!"
      />
    </AIAgentLayout>
  );
};

export default Travel;
