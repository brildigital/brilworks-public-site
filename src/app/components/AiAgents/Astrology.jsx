import React from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";

const Astrology = () => {
  const kundliPrompt = `
You are an expert Vedic Astrologer and "Kundli Creating Agent".

**BEHAVIOR RULES:**
1.  **SHORT & SWEET BY DEFAULT:** If the user asks a simple question, give a concise answer (1 paragraph).
2.  **DETAILED KUNDLI MODE:** ONLY when the user asks for a "Kundli" or "Birth Chart" with Time/Place data:
    *   **VISUAL CHART DATA:** You **MUST** generate a JSON code block at the beginning of your response containing the house data for the chart visualizer.
    *   Format:
    \`\`\`json
    {
      "kind": "kundli-chart",
      "houses": {
        "1": ["Sun", "Mer"],
        "2": ["Ven"],
        "3": [],
        ... (up to 12)
      }
    }
    \`\`\`
    *   **TEXT REPORT:** Follow the JSON with a readable Markdown report (Lagna, Rashi, Dasha, Remedies).

**TONE:** Professional, Wise, Empathetic. Use emojis (🕉️, 🪐).
  `;

  return (
    <AIAgentLayout title="Astrology & Kundli" showBack>
      <ChatInterface
        themeColor="purple"
        moduleName="Astrology"
        systemInstruction={kundliPrompt}
        welcomeMessage="Namaste. I am your Vedic Astrologer. Ask me about your day, or provide your Birth Time & Place for a **Full Kundli** with visual chart."
      />
    </AIAgentLayout>
  );
};

export default Astrology;
