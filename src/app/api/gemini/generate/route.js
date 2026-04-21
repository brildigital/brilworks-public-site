import { GoogleGenAI } from "@google/genai";

export async function POST(req) {
  try {
    const { prompt, model = "gemini-2.5-flash" } = await req.json();

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return Response.json({ text: response.text });
  } catch (error) {
    console.error("Gemini generate proxy error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
