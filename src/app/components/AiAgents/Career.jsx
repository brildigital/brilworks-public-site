import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Career = () => {
  return (
    <AIAgentLayout title="Career Coach" showBack>
      <ChatInterface
        themeColor="slate"
        moduleName="Career Coach"
        systemInstruction="You are a professional career coach and HR expert. Help the user draft resumes and cover letters, prepare for interview questions, and navigate workplace challenges. Provide tips for productivity and professional growth. Tone: Professional, encouraging, strategic."
        welcomeMessage="Let's advance your career. Need help with a resume, interview prep, or a work situation?"
      />
    </AIAgentLayout>
  );
};

export default Career;
