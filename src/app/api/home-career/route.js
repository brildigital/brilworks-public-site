import { NextResponse } from "next/server";
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req, res) {
  if (req.method === "POST") {
    const payload = await req.json();
    const { name, email, company, message } = payload;

    try {
      const msg = {
        to: `${process.env.SENDGRID_DEFAULT_TO_EMAIL}`,
        from: `${process.env.SENDGRID_DEFAULT_FROM_EMAIL}`,
        templateId: `${process.env.SENDGRID_DEFAULT_CAREER_TEMPLATE_ID}`,
        dynamicTemplateData: {
          name: name || "",
          email: email || "",
          message: message || "",
          company: company || "",
        },
      };

      await sgMail
        .send(msg)
        .then((data) => {
          return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
          );
        })
        .catch((error) => {
          console.error(error);
          return NextResponse.json(
            { message: "Error sending email" },
            { status: 500 }
          );
        });
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
