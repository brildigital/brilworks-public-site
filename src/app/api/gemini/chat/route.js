import { GoogleGenAI } from "@google/genai";

export async function POST(req) {
  try {
    const { systemInstruction, model, tools, history, message, imageBase64 } =
      await req.json();

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const chat = ai.chats.create({
      model: model || "gemini-2.5-flash",
      config: { systemInstruction, tools },
      history: history || [],
    });

    let streamResponse;

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
