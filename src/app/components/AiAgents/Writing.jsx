import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Writing = () => {
  return (
    <AIAgentLayout title="Writing Editor" showBack>
      <ChatInterface
        themeColor="indigo"
        moduleName="Writing Editor"
        systemInstruction="You are a professional Editor and Writer. Help the user draft emails, essays, or creative stories. Proofread text for grammar and clarity. Rewrite sentences to be more professional or persuasive. Tone: Polished, articulate, helpful."
        welcomeMessage="Writer's block? Paste your text here for editing, or tell me what you need to write!"
      />
    </AIAgentLayout>
  );
};

export default Writing;
