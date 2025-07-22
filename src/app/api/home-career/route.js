import { NextResponse } from "next/server";
import {
  createHubSpotContact,
  sendDataToSlack,
  validateContactPayload,
} from "..";
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req, res) {
  const payload = await req.json();
  const { name, email, phone, message, page, downloadLink, token } = payload;

  const secret = process.env.RECAPTCHA_SECRET_KEY;

  const verification = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    }
  );
  const result = await verification.json();

  if (!result.success || result.score < 0.5) {
    return NextResponse.json({ message: "Captcha failed" }, { status: 400 });
  }

  const errors = validateContactPayload(payload);

  if (errors.length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

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
    } else if (page.startsWith("/portfolio/") || page.startsWith("/ebooks/")) {
      await Promise.all([
        createHubSpotContact(payload),
        sendDataToSlack(payload),
      ]);

      if (downloadLink) {
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
                  <center><img src="https://www.brilworks.com/images/v2/logo-text-black.png" alt="logo-icon" width="156" height="47" /></center>
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
      }
    } else {
      await Promise.all([
        createHubSpotContact(payload),
        sendDataToSlack(payload),
      ]);
    }
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
}
