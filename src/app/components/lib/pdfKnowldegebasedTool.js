import { GoogleGenerativeAI } from "@google/generative-ai";

const geminiAPIKey = "AIzaSyB4PDzKrb2ObfK7mDRj_CSN6sH9lyZerbI";
export async function analyzeDocument(pdfFile) {
  const genAI = new GoogleGenerativeAI(geminiAPIKey);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

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
  const genAI = new GoogleGenerativeAI(geminiAPIKey);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

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
