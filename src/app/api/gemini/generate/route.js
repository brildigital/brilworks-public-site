import { GoogleGenAI } from "@google/genai";

const FALLBACK_MODELS = ["gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-flash-8b"];

function isOverloaded(error) {
  const msg = (error?.message || "").toLowerCase();
  return (
    error?.status === 503 ||
    msg.includes("503") ||
    msg.includes("overloaded") ||
    msg.includes("high demand") ||
    msg.includes("currently unavailable")
  );
}

export async function POST(req) {
  try {
    const { prompt, model = "gemini-2.5-flash" } = await req.json();

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const modelsToTry = [model, ...FALLBACK_MODELS.filter((m) => m !== model)];

    let lastError;
    for (const m of modelsToTry) {
      try {
        const response = await ai.models.generateContent({ model: m, contents: prompt });
        if (m !== model) console.warn(`Gemini generate: fell back to ${m}`);
        return Response.json({ text: response.text });
      } catch (err) {
        if (isOverloaded(err) && m !== modelsToTry[modelsToTry.length - 1]) {
          console.warn(`Gemini generate: ${m} overloaded, trying next fallback...`);
          lastError = err;
          continue;
        }
        throw err;
      }
    }

    throw lastError;
  } catch (error) {
    console.error("Gemini generate proxy error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
