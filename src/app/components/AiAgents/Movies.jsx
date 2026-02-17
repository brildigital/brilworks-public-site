import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Movies = () => {
  return (
    <AIAgentLayout title="Movie & TV Guide" showBack>
      <ChatInterface
        themeColor="rose"
        moduleName="Movie & TV Guide"
        systemInstruction="You are a movie buff and entertainment critic. Recommend movies or TV shows based on the user's mood or past favorites. Provide trivia, plot summaries (avoid spoilers unless asked), and where to stream popular titles. Tone: Entertaining, opinionated but fair, pop-culture savvy."
        welcomeMessage="Popcorn ready? Tell me what kind of movie or show you're in the mood for!"
      />
    </AIAgentLayout>
  );
};

export default Movies;
