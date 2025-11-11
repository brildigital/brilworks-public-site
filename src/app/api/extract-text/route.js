// import mammoth from "mammoth";

// export async function POST(req) {
//   try {
//     const formData = await req.formData();
//     const file = formData.get("file");
//     const arrayBuffer = await file.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);
//     let text = "";

//     // if (file?.type === "application/pdf") {
//     //   const pdfData = await pdf(buffer);
//     //   text = pdfData.text;
//     // } else
//     if (
//       file.type.includes("word") ||
//       file.name.endsWith(".docx") ||
//       file.name.endsWith(".doc")
//     ) {
//       const result = await mammoth.extractRawText({ buffer });
//       text = result.value;
//     } else if (file.type === "text/plain") {
//       text = await file.text();
//     }

//     return Response.json({ text });
//   } catch (error) {
//     console.error("Server text extraction error:", error);
//     return Response.json({ error: "Failed to extract text" }, { status: 500 });
//   }
// }
