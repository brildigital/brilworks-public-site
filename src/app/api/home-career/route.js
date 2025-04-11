import { NextResponse } from "next/server";
import { createHubSpotContact, sendDataToSlack } from "..";
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req, res) {
  if (req.method === "POST") {
    const payload = await req.json();
    const { name, email, phone, message, page, downloadLink } = payload;

    try {
      if (page === "/career/") {
        const msg = {
          to: `${process.env.SENDGRID_DEFAULT_TO_EMAIL}`,
          from: `${process.env.SENDGRID_DEFAULT_FROM_EMAIL}`,
          templateId: `${process.env.SENDGRID_DEFAULT_CAREER_TEMPLATE_ID}`,
          dynamicTemplateData: {
            name: name || "",
            email: email || "",
            message: message || "",
            phone: phone || "",
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
      } else if (
        page.startsWith("/portfolio/") ||
        page.startsWith("/ebooks/")
      ) {
        const textToShow = page.startsWith("/portfolio/")
          ? "Case Study"
          : "E-Book";

        const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Download ${textToShow}</title>
        <style>
            body, html {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
            }
        </style>
    </head>
    <body style="margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;">
        <div style="max-width: 600px;
                margin: 20px auto;
                padding: 20px;
                border-radius: 8px;
                background-color:#f2f9fe;">
            <center><img src="https://sev.brilworks.com/images/v2/logo-text-black.png" alt="logo-icon" width="156" height="47" /></center>
            <p style="font-size: 14px;">Thank you for submitting form!</p>
            <p style="font-size: 14px;">Click the button below to download ${textToShow}:</p>
            <a href="${process.env.NEXT_PUBLIC_BASE_URL}api/download?url=${downloadLink}" style="display: inline-block;
                color: #ffffff;
                border-radius: 6px;
                font-size: 14px;
                text-decoration: none; 
                padding: 8px 16px;
                font-weight: bold;
                background-color: #007bff;" target="_blank">Download ${textToShow}</a>
            <br>
            <p style="line-height:20px">Regards, <br/><strong>Brilworks Software</strong></p>
        </div>
    </body>
    </html>`;
        const msg = {
          to: `${email}`,
          from: `${process.env.SENDGRID_DEFAULT_FROM_EMAIL}`,
          subject: `Requested to download ${textToShow}`,
          html,
        };

        await createHubSpotContact(payload);
        await sendDataToSlack(payload);

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
      } else {
        await createHubSpotContact(payload);
        await sendDataToSlack(payload);
        return NextResponse.json(
          { message: "Form submitted successfully" },
          { status: 200 }
        );
      }
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
