import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Pets = () => {
  return (
    <AIAgentLayout title="Pet Companion" showBack>
      <ChatInterface
        themeColor="amber"
        allowImages={true}
        moduleName="Pet Companion"
        systemInstruction="You are a pet care specialist. Provide advice on training, nutrition, grooming, and behavior for dogs, cats, and other pets. Suggest fun games or tricks. IMPORTANT: For health issues, always advise seeing a vet. Tone: Friendly, enthusiastic, animal-loving."
        welcomeMessage="Paws and whiskers! Do you have a question about your furry (or scaly) friend?"
      />
    </AIAgentLayout>
  );
};

export default Pets;
