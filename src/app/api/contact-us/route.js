import { NextResponse } from "next/server";
import { createHubSpotContact, sendDataToSlack } from "..";

export async function GET() {
  return NextResponse.json({ message: "This Worked", success: true });
}

export async function POST(req, res) {
  if (req.method === "POST") {
    const payload = await req.json();

    // const transporter = nodemailer.createTransport({
    //   service: "Gmail",
    //   auth: {
    //     user: AdminEmail,
    //     pass: AdminPassKey,
    //   },
    // });

    // const mailOptions = {
    //   from: email,
    //   to: process.env.RECEIVER_EMAIL, // receivers
    //   subject: "Contact Form Submission",
    //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\nPage: ${page}`,
    // };

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
