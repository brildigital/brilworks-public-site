export async function analyzeDocument(pdfFile) {
  try {
    const arrayBuffer = await pdfFile.arrayBuffer();
    const base64Data = btoa(
      new Uint8Array(arrayBuffer).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );

    const response = await fetch("/api/gemini/analyze-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        base64Data,
        mimeType: "application/pdf",
        prompt:
          "Analyze this PDF document and provide a comprehensive summary. Include: 1) Main topics and themes, 2) Key points and findings, 3) Important data or statistics mentioned, 4) Overall structure and organization. Be detailed and thorough.",
        model: "gemini-2.5-flash",
      }),
    });

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}

export async function askGemini(question, pdfFile) {
  try {
    const arrayBuffer = await pdfFile.arrayBuffer();
    const base64Data = btoa(
      new Uint8Array(arrayBuffer).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );

    const response = await fetch("/api/gemini/analyze-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        base64Data,
        mimeType: "application/pdf",
        prompt: `Based on the content of this PDF document, please answer the following question: ${question}`,
        model: "gemini-2.0-flash",
      }),
    });

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
