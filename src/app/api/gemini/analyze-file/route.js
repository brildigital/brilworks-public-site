import { GoogleGenAI } from "@google/genai";

export async function POST(req) {
  try {
    const { base64Data, mimeType, textContent, prompt, model = "gemini-2.5-flash" } =
      await req.json();

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    let contents;
    if (base64Data) {
      contents = [
        { inlineData: { mimeType, data: base64Data } },
        { text: prompt },
      ];
    } else {
      contents = `${prompt}\n\nDocument content:\n${textContent}`;
    }

    const response = await ai.models.generateContent({ model, contents });
    return Response.json({ text: response.text });
  } catch (error) {
    console.error("Gemini analyze-file proxy error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
