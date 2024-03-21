import { NextResponse } from "next/server";
import { createHubSpotContact, sendDataToSlack } from "..";

export async function POST(req, res) {
  if (req.method === "POST") {
    const payload = await req.json();
    try {
      await createHubSpotContact(payload);
      await sendDataToSlack(payload);
      return NextResponse.json(
        { message: "Form submitted successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error creating contact", error);
      return NextResponse.json(
        { message: "Error submitting form" },
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
