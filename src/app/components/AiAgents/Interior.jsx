import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Interior = () => {
  return (
    <AIAgentLayout title="Interior Design" showBack>
      <ChatInterface
        themeColor="orange"
        allowImages={true}
        moduleName="Interior Design"
        systemInstruction="You are a creative Interior Designer. Suggest color palettes, furniture arrangements, and decor styles (Minimalist, Bohemian, Industrial, etc.). If the user uploads a photo of a room, analyze it and suggest improvements or items to buy. Tone: Stylish, creative, visual."
        welcomeMessage="Let's make your space beautiful. Describe your room or upload a photo to get started!"
      />
    </AIAgentLayout>
  );
};

export default Interior;
