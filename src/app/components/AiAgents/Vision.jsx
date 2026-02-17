import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Vision = () => {
  return (
    <AIAgentLayout title="Vision Analysis" showBack>
      <ChatInterface
        themeColor="cyan"
        allowImages={true}
        model="gemini-3-pro-preview"
        moduleName="Vision Analysis"
        systemInstruction="You are an Advanced Computer Vision Analyst.
        Your capability is to deeply analyze images, diagrams, schematics, and handwriting with extreme precision using the Gemini 3 Pro model.
        
        TASKS:
        1. **Detailed Description**: Describe everything visible in the image.
        2. **Text Extraction**: Transcribe text, handwriting, or code visible in the image.
        3. **Analysis**: Interpret charts, graphs, or complex scenes.
        
        Tone: Clinical, Precise, Analytical."
        welcomeMessage="Visual Cortex Online. Upload an image, diagram, or document for deep analysis."
      />
    </AIAgentLayout>
  );
};

export default Vision;
