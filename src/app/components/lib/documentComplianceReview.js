import { GoogleGenerativeAI } from "@google/generative-ai";

const geminiAPIKey = "AIzaSyDpdU-jgupy4NYXC_jU-rkx863RV9j-EvE";

// Google Gemini API integration
// Note: You'll need to set up your API key in environment variables

// interface GeminiResponse {
//   summary: string;
//   keyPoints: string[];
//   riskItems: Array<{
//     id: string,
//     type: "high" | "medium" | "low",
//     title: string,
//     description: string,
//     clause: string,
//     recommendation: string,
//   }>;
//   clauseBreakdown: Array<{
//     category: string,
//     status: "compliant" | "warning" | "risk",
//     details: string,
//     recommendation?: string,
//   }>;
//   complianceScore: number;
// }

const GEMINI_API_KEY = "AIzaSyB1tAZLRo3HGubPCZ1IkpyRuEgqFMhXqzg";
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export async function analyzeContract(documentText) {
  const prompt = `
You are an expert AI Contract Compliance Analyzer.

Your task is to review ONLY the text provided below and detect compliance and legal risks.

⚠️ CRITICAL RULES:
- Analyze *only* the given document content.
- Do NOT add external legal standards or imaginary clauses.
- Respond strictly in **valid JSON** — no explanations, no markdown, no extra text.

====================
DOCUMENT TEXT START
${documentText}
DOCUMENT TEXT END
====================

🎯 ANALYSIS OBJECTIVES:
Return JSON structured output based *only* on the document, identifying:
1. **Summary:** 2–3 sentences describing what this document is about.
2. **Key Points:** Up to 5 major takeaways found in the text.
3. **Risk Items:** Specific clauses that pose risk or compliance issues.
4. **Clause Breakdown:** Compliance evaluation per key legal category.
5. **Compliance Score:** Integer from 0–100 (lower = more risky).

Return EXACTLY in this JSON structure:
{
  "summary": "Plain English overview of this document",
  "keyPoints": [
    "Key insight 1 from this document",
    "Key insight 2 from this document",
    "Key insight 3 from this document"
  ],
  "riskItems": [
    {
      "id": "unique_id",
      "type": "high | medium | low",
      "title": "Short risk title",
      "description": "Why this clause is risky based on document wording",
      "clause": "Exact or near-exact text snippet from the document",
      "recommendation": "Actionable suggestion to fix or mitigate"
    }
  ],
  "clauseBreakdown": [
    {
      "category": "Payment Terms | Termination | Confidentiality | Liability | Jurisdiction | Other",
      "status": "compliant | warning | risk",
      "details": "What the document says about this area",
      "recommendation": "Action needed if status is warning or risk"
    }
  ],
  "complianceScore": number
}

Flag these only if they appear in the text:
- Payment terms > 45 days → high risk
- Termination notice > 30 days → high risk
- Auto-renewal without opt-out → medium risk
- Missing liability cap → medium risk
- No confidentiality retention period → medium risk
- Hidden fees/penalties → high risk
- Unfavorable jurisdiction → low risk

Output *only valid JSON*, with no markdown, commentary, or extra text.
`;

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    });

    if (!response.ok) {
      console.error(
        `Gemini API error: ${response.status} ${response.statusText}`
      );
      return getMockAnalysisResult();
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

    const cleanedResponse = generatedText
      .replace(/```json\s*/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanedResponse);
  } catch (error) {
    console.error("Error analyzing contract:", error);
    return getMockAnalysisResult();
  }
}

// export async function analyzeContract(documentText) {
//   const prompt = `
//     You are a contract compliance analyzer. Analyze ONLY the following contract document for specific compliance issues. Do not add external information or general legal advice.

//     Document text:
//     ${documentText}

//     Analyze ONLY this document content for these specific compliance areas and return EXACTLY this JSON format with no additional text:
//     {
//       "summary": "Plain English summary of THIS contract in 2-3 sentences based ONLY on the provided text",
//       "keyPoints": ["Key finding 1 from document", "Key finding 2 from document", "Key finding 3 from document", "Key finding 4 from document"],
//       "riskItems": [
//         {
//           "id": "unique_id",
//           "type": "high|medium|low",
//           "title": "Risk found in document",
//           "description": "Why this specific clause is risky",
//           "clause": "EXACT text from the document",
//           "recommendation": "Specific action for this clause"
//         }
//       ],
//       "clauseBreakdown": [
//         {
//           "category": "Payment Terms|Termination|Confidentiality|Liability|Jurisdiction|Other",
//           "status": "compliant|warning|risk",
//           "details": "What the document says about this area",
//           "recommendation": "Action needed if status is warning or risk"
//         }
//       ],
//       "complianceScore": 0-100
//     }

//     ONLY flag these specific issues if found in the document:
//     - Payment terms > 45 days = high risk
//     - Termination notice > 30 days = high risk
//     - Auto-renewal without opt-out = medium risk
//     - Missing liability caps = medium risk
//     - No confidentiality data retention period = medium risk
//     - Hidden fees or penalties = high risk
//     - Unfavorable jurisdiction = low risk

//     Base compliance score ONLY on the document content. Do not reference external standards or add information not in the document.
//   `;

//   try {
//     const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "X-goog-api-key": GEMINI_API_KEY,
//       },
//       body: JSON.stringify({
//         contents: [
//           {
//             parts: [
//               {
//                 text: prompt,
//               },
//             ],
//           },
//         ],
//       }),
//     });

//     if (!response.ok) {
//       console.error(
//         `Gemini API error: ${response.status} ${response.statusText}`
//       );
//       return getMockAnalysisResult();
//     }

//     const data = await response.json();
//     const generatedText = data.candidates[0].content.parts[0].text;

//     // Parse the JSON response from Gemini
//     const cleanedResponse = generatedText
//       .replace(/```json\n?/g, "")
//       .replace(/```\n?/g, "");
//     const analysisResult = JSON.parse(cleanedResponse);

//     return analysisResult;
//   } catch (error) {
//     console.error("Error analyzing contract:", error);

//     // Return mock data for demo purposes if API fails
//     return getMockAnalysisResult();
//   }
// }

// Mock data for demo purposes
function getMockAnalysisResult() {
  return {
    summary:
      "This vendor service agreement includes longer-than-recommended payment terms and termination notice periods. The confidentiality clause lacks specific data retention guidelines, and the liability section may expose your organization to unnecessary risk.",
    keyPoints: [
      "Payment terms set at 75 days (recommended maximum: 45 days)",
      "Termination requires 90-day notice (recommended maximum: 30 days)",
      "Auto-renewal clause without clear opt-out mechanism",
      "Confidentiality agreement missing data retention period specification",
    ],
    riskItems: [
      {
        id: "payment-terms-risk",
        type: "high",
        title: "Extended Payment Terms",
        description:
          "Payment terms of 75 days exceed recommended maximum of 45 days, impacting cash flow",
        clause:
          "Payment shall be made within seventy-five (75) days of invoice receipt",
        recommendation:
          "Negotiate payment terms to 30-45 days maximum to improve cash flow and reduce risk",
      },
      {
        id: "termination-notice-risk",
        type: "high",
        title: "Long Termination Notice Period",
        description:
          "90-day termination notice requirement is excessive and reduces flexibility",
        clause:
          "Either party may terminate this agreement with ninety (90) days written notice",
        recommendation:
          "Request reduction to 30 days notice period for better operational flexibility",
      },
      {
        id: "auto-renewal-risk",
        type: "medium",
        title: "Auto-Renewal Without Clear Opt-Out",
        description:
          "Contract automatically renews without explicit confirmation process",
        clause:
          "This agreement shall automatically renew for successive one-year terms unless terminated",
        recommendation:
          "Add requirement for explicit written confirmation 60 days before renewal",
      },
      {
        id: "confidentiality-gap",
        type: "medium",
        title: "Incomplete Confidentiality Terms",
        description:
          "No specified data retention period in confidentiality clause",
        clause:
          "Confidential information shall be protected and not disclosed to third parties",
        recommendation:
          "Specify data retention period and destruction requirements after contract termination",
      },
    ],
    clauseBreakdown: [
      {
        category: "Payment Terms",
        status: "risk",
        details:
          "75-day payment terms exceed industry standards and recommended practices",
        recommendation: "Negotiate reduction to 30-45 days",
      },
      {
        category: "Termination",
        status: "risk",
        details:
          "90-day notice period is excessive and reduces operational flexibility",
        recommendation: "Request reduction to 30-day notice period",
      },
      {
        category: "Confidentiality",
        status: "warning",
        details:
          "Basic confidentiality terms present but missing data retention specifications",
        recommendation: "Add specific data retention and destruction timeline",
      },
      {
        category: "Liability",
        status: "warning",
        details:
          "Standard liability terms with some limitations that may need review",
        recommendation:
          "Consider mutual liability caps and clearer indemnification terms",
      },
      {
        category: "Jurisdiction",
        status: "compliant",
        details:
          "Clear jurisdiction and dispute resolution terms that are reasonable",
      },
    ],
    complianceScore: 62,
  };
}

// Document text extraction (demo version for browser compatibility)
export async function extractTextFromFile(file) {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Convert file to Base64
    const base64Data = btoa(
      new Uint8Array(arrayBuffer).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );

    // Common Gemini setup
    const genAI = new GoogleGenerativeAI(geminiAPIKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Common contract review prompt
    const prompt = `
You are a contract review AI assistant. Analyze the following document (PDF, Word, or text)
and return a structured JSON output with the following fields:

{
  "summary": "Brief summary of the overall document",
  "keyPoints": ["List of main points, clauses, or findings"],
  "riskItems": [
    {
      "id": "unique-id",
      "type": "high | medium | low",
      "title": "Short title for the risk",
      "description": "Description of why this clause is risky",
      "clause": "Exact or paraphrased clause text",
      "recommendation": "Actionable advice to mitigate this risk"
    }
  ],
  "clauseBreakdown": [
    {
      "category": "Clause category (e.g., Payment Terms, Termination, Confidentiality, Liability, Jurisdiction)",
      "status": "risk | warning | compliant",
      "details": "Clause analysis or explanation",
      "recommendation": "Recommendation for improvement, if any"
    }
  ],
  "complianceScore": "A number between 0-100 representing how compliant or balanced the contract is"
}

Output only valid JSON. Do not include explanations or markdown.
`;

    // Send to Gemini for structured JSON analysis

    if (file.type === "application/pdf") {
      // Convert PDF to Base64
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
        { text: prompt },
      ]);

      const text = (await result.response).text();
      return parseGeminiJSON(text);
    } else if (
      file.type.includes("word") ||
      file.name.endsWith(".docx") ||
      file.name.endsWith(".doc")
    ) {
      // 🧠 DOCX / DOC: Extract text via mammoth first
      const result = await mammoth.extractRawText({ buffer });
      const textContent = result.value.trim();

      if (!textContent) {
        throw new Error("No readable text found in Word file.");
      }

      const result2 = await model.generateContent([
        { text: `${prompt}\n\nHere is the document content:\n${textContent}` },
      ]);

      const text = (await result2.response).text();
      return parseGeminiJSON(text);
    } else if (file.type === "text/plain") {
      const textContent = await file.text();

      const result3 = await model.generateContent([
        { text: `${prompt}\n\nHere is the document content:\n${textContent}` },
      ]);

      const text = (await result3.response).text();
      return parseGeminiJSON(text);
    } else {
      throw new Error(`Unsupported file type: ${file.type}`);
    }
  } catch (error) {
    console.error("Error extracting text from file:", error);
    return getMockAnalysisResult();
  }
}

function parseGeminiJSON(text) {
  try {
    return JSON.parse(text.replace(/```json|```/g, "").trim());
  } catch (err) {
    console.warn("Invalid JSON returned by Gemini:", err);
    return { error: "Invalid JSON from Gemini", raw: text };
  }
}
