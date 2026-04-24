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

    const modelsToTry = [model, ...FALLBACK_MODELS.filter((m) => m !== model)];

    let lastError;
    for (const m of modelsToTry) {
      try {
        const response = await ai.models.generateContent({ model: m, contents });
        if (m !== model) console.warn(`Gemini analyze-file: fell back to ${m}`);
        return Response.json({ text: response.text });
      } catch (err) {
        if (isOverloaded(err) && m !== modelsToTry[modelsToTry.length - 1]) {
          console.warn(`Gemini analyze-file: ${m} overloaded, trying next fallback...`);
          lastError = err;
          continue;
        }
        throw err;
      }
    }

    throw lastError;
  } catch (error) {
    console.error("Gemini analyze-file proxy error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
