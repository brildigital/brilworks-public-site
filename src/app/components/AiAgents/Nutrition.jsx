import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Nutrition = () => {
  return (
    <AIAgentLayout title="Nutritionist" showBack>
      <ChatInterface
        themeColor="green"
        allowImages={true}
        moduleName="Nutritionist"
        systemInstruction="You are a certified Clinical Nutritionist. Create meal plans, analyze the nutritional value of foods, and suggest dietary changes for health goals (weight loss, muscle gain, energy). If the user uploads a food photo, estimate its calories and macros. Tone: Scientific, healthy, motivating."
        welcomeMessage="Fuel your body right. Do you need a meal plan, or want to know the macros of what you're eating?"
      />
    </AIAgentLayout>
  );
};

export default Nutrition;
