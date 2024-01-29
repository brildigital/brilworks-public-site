import { NextResponse } from "next/server";
import prismadb from "../../lib/prismadb";
import randomUUID from "randomuuid/randomUUID";
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function html(hashedToken) {
  const redirectURL = `${process.env.NEXT_PUBLIC_BASE_URL}verifyemail/${hashedToken}`;

  const brandColor = "#00b6cf";
  const color = {
    background: "#f9f9f9",
    text: "#444",
    mainBackground: "#fff",
    buttonBackground: brandColor,
    buttonBorder: brandColor,
    buttonText: "#fff",
  };

  return `
  <body style="background: ${color.background};margin-top:20px ">
    <table width="100%" border="0" cellspacing="20" cellpadding="0"
      style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
      <tr>
        <td align="center"
          style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
          <strong>Verify your account</strong>
        </td>
      </tr>
      <tr>
        <td align="center"
          style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
          Please confirm your email address by clicking the link below.
        </td>
      </tr>
      <tr>
        <td align="center" style="padding: 20px 0;">
          <table border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${redirectURL}"
                  target="_blank"
                  style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Confirm your email
                  </a></td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="left"
          style="padding: 0px 0px 10px 20px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
          Regards, <br/><strong>Brilworks</strong>
        </td>
      </tr>
    </table>
  </body>
  `;
}

export async function POST(req, res) {
  if (req.method === "POST") {
    const { email, role, emailType } = await req.json();

    const hashedToken = `${randomUUID()}${randomUUID()}`.replace(/-/g, "");
    const expiryTimestamp = Date.now() + 3600000;
    const expirationDate = new Date(expiryTimestamp).toISOString();

    const existingUser = await prismadb.user.findFirst({
      where: { email: email },
    });

    if (existingUser && emailType === "VERIFY") {
      throw new Error("User already invited");
    }

    if (existingUser) {
      if (emailType === "VERIFY") {
        throw new Error("User already invited");
      } else if (emailType === "RESET") {
        await prismadb.user.update({
          where: { email: existingUser.email },
          data: {
            forgotPasswordToken: hashedToken,
            forgotPasswordTokenExpiry: expirationDate,
          },
        });
      }
    } else if (!existingUser && emailType === "VERIFY") {
      await prismadb.user.create({
        data: {
          email,
          role,
          verifyToken: hashedToken,
          verifyTokenExpiry: expirationDate,
          name: "New user",
        },
      });
    }

    try {
      const msg = {
        to: `${email}`,
        from: `${process.env.SENDGRID_DEFAULT_FROM_EMAIL}`,
        subject: "Verify email",
        text: "Click on below link to verify",
        html: html(hashedToken),
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
        { message: "Request send successfully" },
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
