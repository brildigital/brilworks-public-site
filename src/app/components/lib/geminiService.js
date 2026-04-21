export const createChatSession = (
  systemInstruction,
  userProfile,
  model = "gemini-2.5-flash",
  tools,
  history
) => {
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

  return {
    _systemInstruction: personalizedInstruction,
    _model: model,
    _tools: tools,
    _history: [...(history || [])],
  };
};

export const sendMessageToGemini = async (chat, message, imageBase64) => {
  const response = await fetch("/api/gemini/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: chat._systemInstruction,
      model: chat._model,
      tools: chat._tools,
      history: chat._history,
      message,
      imageBase64,
    }),
  });

  if (!response.ok) throw new Error(`Gemini API error: ${response.status}`);

  return parseNDJSONStream(response.body, chat, message);
};

async function* parseNDJSONStream(body, chat, userMessage) {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let fullText = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop();
      for (const line of lines) {
        if (line.trim()) {
          const chunk = JSON.parse(line);
          fullText += chunk.text || "";
          yield chunk;
        }
      }
    }
    if (buffer.trim()) {
      const chunk = JSON.parse(buffer);
      fullText += chunk.text || "";
      yield chunk;
    }
  } finally {
    if (userMessage) {
      chat._history.push({ role: "user", parts: [{ text: userMessage }] });
    }
    if (fullText) {
      chat._history.push({ role: "model", parts: [{ text: fullText }] });
    }
  }
}

export const generateEventFeatures = async (eventType, audienceSize) => {
  try {
    const prompt = `
      You are an expert event technology consultant for Brilworks.
      A client is planning a ${eventType} for approximately ${audienceSize} attendees.
      Suggest 3 specific, high-tech, innovative app features that would increase ROI and engagement for this specific event type.
      Focus on Data-Driven and AI-powered ideas.
      Keep the response concise, formatted as a markdown list.
    `;

    const response = await fetch("/api/gemini/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, model: "gemini-2.5-flash" }),
    });

    const data = await response.json();
    return data.text || "Unable to generate suggestions at this time.";
  } catch (error) {
    console.error("Error generating event features:", error);
    return "Our AI consultant is momentarily busy. Please try again or contact our team directly.";
  }
};
