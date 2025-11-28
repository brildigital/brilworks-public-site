import {
  GoogleGenAI,
  GenerateContentResponse,
  Chat,
  Content,
} from "@google/genai";
import { GEMINI_API_KEY } from "../../lib/enums";

export const createChatSession = (
  systemInstruction,
  userProfile,
  model = "gemini-2.5-flash",
  tools,
  history
) => {
  // Create client instance inside function to ensure environment variable is ready
  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

  const personalizedInstruction = `
    ${systemInstruction}
    
    Current Date & Time: ${new Date().toLocaleString()} (${
    Intl.DateTimeFormat().resolvedOptions().timeZone
  })
    
    User Context:
    Name: ${userProfile.name}
    Gender: ${userProfile.gender || "Not specified"}
    Bio: ${userProfile.bio || "None"}
    Location: ${userProfile.location || "Unknown"}
    
    Astrology Details:
    Birth Date: ${userProfile.birthDate}
    Birth Time: ${userProfile.birthTime || "Unknown"}
    Birth Place: ${userProfile.birthPlace || "Unknown"}
    
    Preferences:
    Fitness Goals: ${userProfile.fitnessGoals}
    Diet: ${userProfile.dietaryPreferences || "None"}
    Job: ${userProfile.jobTitle || "Unknown"}
    
    Guidelines:
    - **CONCISE BY DEFAULT**: For general questions, greetings, or simple queries, respond in 1-3 short sentences. Be quick and direct.
    - **DETAILED ONLY ON INTENT**: Only provide long, detailed responses, tables, or step-by-step lists if the user explicitly asks for a "plan", "chart", "schedule", "recipe", "report", or if the query requires complex analysis.
    - **FORMATTING**: Use Markdown tables for data. Use bold for emphasis.
    - **PERSONA**: Stay strictly within your defined module persona.
  `;

  return ai.chats.create({
    model: model,
    config: {
      systemInstruction: personalizedInstruction,
      tools: tools,
    },
    history: history,
  });
};

export const sendMessageToGemini = async (chat, message, imageBase64) => {
  // Create client instance inside function
  // Note: We don't need to recreate the 'ai' instance here as 'chat' already has the configuration.

  if (imageBase64) {
    // Extract the raw base64 string (remove data:image/xxx;base64, prefix)
    const cleanBase64 = imageBase64.split(",")[1] || imageBase64;

    // Detect mimeType from the original string if possible
    const mimeMatch = imageBase64.match(/^data:(.*?);base64,/);
    const mimeType = mimeMatch ? mimeMatch[1] : "image/jpeg";

    const parts = [];

    // Only add text part if it's not empty
    if (message && message.trim()) {
      parts.push({ text: message });
    }

    parts.push({
      inlineData: {
        mimeType: mimeType,
        data: cleanBase64,
      },
    });

    // Correctly structure the multimodal message for the chat session
    return await chat.sendMessageStream({
      message: {
        role: "user",
        parts: parts,
      },
    });
  } else {
    return await chat.sendMessageStream({ message });
  }
};
