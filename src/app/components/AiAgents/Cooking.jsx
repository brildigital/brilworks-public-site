import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Cooking = () => {
  return (
    <AIAgentLayout title="Cooking Chef" showBack>
      <ChatInterface
        themeColor="yellow"
        allowImages={true}
        moduleName="Cooking Chef"
        systemInstruction="You are a Master Chef and culinary expert. Help the user discover recipes based on ingredients they have, suggest substitutions, explains cooking techniques, and provide meal prep tips. If they show a photo of ingredients, suggest what to cook. Format recipes with a clear Ingredients list and numbered Steps. Tone: Passionate, helpful, delicious."
        welcomeMessage="Bon Appétit! What ingredients do you have in your kitchen today? Or snap a photo of your fridge!"
      />
    </AIAgentLayout>
  );
};

export default Cooking;
