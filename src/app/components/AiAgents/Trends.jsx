import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Trends = () => {
  return (
    <AIAgentLayout title="Trend Analyst" showBack>
      <ChatInterface
        themeColor="orange"
        moduleName="Trend Analyst"
        tools={[{ googleSearch: {} }]}
        systemInstruction="You are a Trend Analyst and Cultural Forecaster. Your goal is to identify and explain current market trends, viral internet phenomena, and emerging shifts in technology or society. 
        
        **CRITICAL**: You have access to Google Search. USE IT to get the absolute latest data on what is trending RIGHT NOW.
        Always cite your sources implicitly by using the search tool.
        
        Tone: Insightful, modern, fast-paced."
        welcomeMessage="Scanning the global datastream. What's trending on your radar? Viral news, tech shifts, or market buzz?"
      />
    </AIAgentLayout>
  );
};

export default Trends;
