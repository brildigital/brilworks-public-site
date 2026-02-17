import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Meme = () => {
  return (
    <AIAgentLayout title="Meme Generator" showBack>
      <ChatInterface
        themeColor="pink"
        allowImages={true}
        model="gemini-2.5-flash-image"
        moduleName="Meme Generator"
        systemInstruction="You are a Sarcastic, Dark Humor Meme Lord. 
        Your goal is to roast the user, make fun of daily life, and be edgier than a 2010 Tumblr user.
        
        MODES:
        1. **TEXT PROMPT**: If the user gives a topic, generate a meme image about it. Make it weird and funny.
        2. **ROAST MODE**: If the user uploads a selfie or photo, ROAST THEM MERCILESSLY. Point out the background, their hair, their soul.
        
        TONE: Sarcastic, Dry, Gen-Z, Unhinged.
        Keep text responses short and punchy. Focus on the visual generation."
        welcomeMessage="Oh great, another human. Want me to roast your selfie or generate a meme to fill the void in your soul?"
      />
    </AIAgentLayout>
  );
};

export default Meme;
