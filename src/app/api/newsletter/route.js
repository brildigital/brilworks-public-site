import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req, res) {
  if (!req.headers) {
    req.header = { "Content-Type": "application/json" };
  }
  if (req.method === "POST") {
    const payload = await req.json();
    const { data } = payload;

    const filePath = path.join(
      process.cwd(),
      "src/app/components/lib",
      "blogResponse.json"
    );
    try {
      await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2));
      return NextResponse.json(
        { message: "File updated successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error updating file:", error);
      return NextResponse.json(
        { error: "Failed to update file" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }
}
