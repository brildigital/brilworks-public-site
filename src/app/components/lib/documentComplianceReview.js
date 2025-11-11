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
    if (file.type === "text/plain") {
      // For plain text files, read directly
      return await file.text();
    } else if (file.type === "application/pdf") {
      // For PDF files - in a real implementation, you'd use pdf-parse
      // For now, we'll try to read as text (works for some simple PDFs)
      const text = await file.text();
      if (text.trim().length > 0) {
        return text;
      } else {
        throw new Error(
          "PDF text extraction not fully supported. Please convert to text format or use a simpler PDF."
        );
      }
    } else if (
      file.type.includes("word") ||
      file.name.endsWith(".docx") ||
      file.name.endsWith(".doc")
    ) {
      // For Word documents - in a real implementation, you'd use mammoth.js
      // For now, we'll try to read as text
      const text = await file.text();
      if (text.trim().length > 0) {
        return text;
      } else {
        throw new Error(
          "Word document text extraction not fully supported. Please convert to text format."
        );
      }
    } else {
      // Try to read as plain text for any other format
      return await file.text();
    }
  } catch (error) {
    console.error("Error extracting text from file:", error);
    throw new Error(
      `Unable to extract text from ${file.name}. Please ensure the file contains readable text or try converting to a plain text file.`
    );
  }
}
