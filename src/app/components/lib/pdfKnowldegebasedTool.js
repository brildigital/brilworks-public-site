import { GEMINI_API_KEY } from "@/app/lib/enums";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function analyzeDocument(pdfFile) {
  const genAI = new GoogleGenerativeAI({ geminiAPIKey: GEMINI_API_KEY });
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  try {
    const arrayBuffer = await pdfFile.arrayBuffer();
    const base64Data = btoa(
      new Uint8Array(arrayBuffer).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );

    const result = await model.generateContent([
      {
        inlineData: {
          mimeType: "application/pdf",
          data: base64Data,
        },
      },
      {
        text: "Analyze this PDF document and provide a comprehensive summary. Include: 1) Main topics and themes, 2) Key points and findings, 3) Important data or statistics mentioned, 4) Overall structure and organization. Be detailed and thorough.",
      },
    ]);

    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}

export async function askGemini(question, pdfFile) {
  const genAI = new GoogleGenerativeAI({ geminiAPIKey: GEMINI_API_KEY });
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  try {
    const arrayBuffer = await pdfFile.arrayBuffer();
    const base64Data = btoa(
      new Uint8Array(arrayBuffer).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );

    const result = await model.generateContent([
      {
        inlineData: {
          mimeType: "application/pdf",
          data: base64Data,
        },
      },
      {
        text: `Based on the content of this PDF document, please answer the following question: ${question}`,
      },
    ]);

    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
