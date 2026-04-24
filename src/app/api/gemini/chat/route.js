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
    const { systemInstruction, model, tools, history, message, imageBase64 } =
      await req.json();

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const primaryModel = model || "gemini-2.5-flash";
    const modelsToTry = [primaryModel, ...FALLBACK_MODELS.filter((m) => m !== primaryModel)];

    let streamResponse;
    let lastError;

    for (const m of modelsToTry) {
      try {
        const chat = ai.chats.create({
          model: m,
          config: { systemInstruction, tools },
          history: history || [],
        });

        if (imageBase64) {
          const cleanBase64 = imageBase64.split(",")[1] || imageBase64;
          const mimeMatch = imageBase64.match(/^data:(.*?);base64,/);
          const mimeType = mimeMatch ? mimeMatch[1] : "image/jpeg";
          const parts = [];
          if (message?.trim()) parts.push({ text: message });
          parts.push({ inlineData: { mimeType, data: cleanBase64 } });
          streamResponse = await chat.sendMessageStream({
            message: { role: "user", parts },
          });
        } else {
          streamResponse = await chat.sendMessageStream({ message });
        }

        if (m !== primaryModel) console.warn(`Gemini chat: fell back to ${m}`);
        break;
      } catch (err) {
        if (isOverloaded(err) && m !== modelsToTry[modelsToTry.length - 1]) {
          console.warn(`Gemini chat: ${m} overloaded, trying next fallback...`);
          lastError = err;
          continue;
        }
        throw err;
      }
    }

    if (!streamResponse) throw lastError;

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of streamResponse) {
            const data = JSON.stringify({
              text: chunk.text || "",
              candidates: chunk.candidates,
            });
            controller.enqueue(encoder.encode(data + "\n"));
          }
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "application/x-ndjson" },
    });
  } catch (error) {
    console.error("Gemini chat proxy error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
