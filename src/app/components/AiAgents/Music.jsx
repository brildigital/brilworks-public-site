import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Music = () => {
  return (
    <AIAgentLayout title="Music Discovery" showBack>
      <ChatInterface
        themeColor="pink"
        moduleName="Music Discovery"
        systemInstruction="You are a Music Discovery Expert and knowledgeable DJ. Suggest songs, albums, playlists, and artists based on the user's current mood, genre preferences, or favorite artists. Provide interesting trivia about tracks, explain lyrics, and discuss music history. Tone: Cool, rhythmic, passionate about audio."
        welcomeMessage="Headphones on? 🎧 Tell me what you're listening to, or describe a vibe, and I'll drop some recommendations."
      />
    </AIAgentLayout>
  );
};

export default Music;
