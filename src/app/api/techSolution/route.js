import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const AdminEmail = process.env.EMAIL;
const AdminPassKey = process.env.EMAIL_PASSWORD;

export async function POST(req, res) {
  if (req.method === "POST") {
    const payload = await req.json();
    const { name, phone, email, page } = payload;

    //   Create a nodemailer transporter with your email service settings
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: AdminEmail,
        pass: AdminPassKey,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL, // receivers
      subject: "Contact Form Submission",
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nPage: ${page}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error sending email", error);
      return NextResponse.json(
        { message: "Error sending email" },
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
