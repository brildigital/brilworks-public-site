import axios from "axios";
import { NextResponse } from "next/server";

export async function createHubSpotContact(payload) {
  const { name, email, phone, message, page, company } = payload;

  const apiPayLoad = JSON.stringify({
    properties: {
      email,
      firstname: name.split(" ")[0],
      lastname: name.split(" ")[1] || "",
      company: company || "",
      phone: phone || "",
      website: `${process.env.NEXT_PUBLIC_BASE_URL}${page?.replace("/", "")}`,
      lifecyclestage: "marketingqualifiedlead",
      message: message || "",
    },
  });

  try {
    const response = await fetch(
      `${process.env.HUBSPOT_API_BASE_URL}crm/v3/objects/contacts`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: apiPayLoad,
        redirect: "follow",
      }
    );
    return response;
  } catch (error) {
    console.error("Error submitting form", error);
    return error;
  }
}

export async function sendDataToSlack(payload) {
  const {
    name,
    email,
    phone,
    company,
    message,
    page,
    website,
    linkedin,
    previousPage,
    userData,
  } = payload;
  const pageURL = `${process.env.NEXT_PUBLIC_BASE_URL}${page?.replace(
    "/",
    ""
  )}`;

  const data = {
    channel: process.env.SLACK_CHANNEL_ID,
    blocks: [
      {
        type: "rich_text",
        elements: [
          {
            type: "rich_text_section",
            elements: [
              {
                type: "text",
                text: "\nEmail: ",
              },
              {
                type: "link",
                url: "mailto:" + `${email || ""}`,
                text: `${email || ""}`,
              },
              {
                type: "text",
                text: `\nName: ${name || ""}\nPhone: ${phone || ""}\nMessage: ${
                  message || ""
                }\n${company ? `Company: ${company}` : ""}\n${
                  previousPage ? `PreviousPage: ${previousPage}` : ""
                }\nPage: ${pageURL || ""}\n${
                  website ? `Website: ${website}` : ""
                }\n${linkedin ? `LinkedIn: ${linkedin}` : ""}\nRegion: ${
                  userData?.region || ""
                }\nCity: ${userData?.city || ""}\nCountry: ${
                  userData?.country || ""
                }\n`,
              },
            ],
          },
        ],
      },
    ],
  };
  const headers = {
    Authorization: `Bearer ${process.env.SLACK_TOKEN}`,
    "Content-Type": "application/json; charset=utf-8",
  };

  try {
    const response = await axios.post(`${process.env.SLACK_URL}`, data, {
      headers,
    });
    const responseData = response.data;
    if (!responseData.ok) {
      console.error(`Error: ${responseData.error}`);
      return NextResponse.json({ message: responseData.error });
    } else {
      return NextResponse.json({ data: responseData }, { status: 200 });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "An error occurred while sending the message to Slack." },
      { status: 500 }
    );
  }
}

export function validateContactPayload(payload) {
  const errors = [];

  const { name, email } = payload;

  // Validate name: required, 2–100 characters, only letters and spaces
  if (
    !name ||
    typeof name !== "string" ||
    name.trim().length < 2 ||
    name.trim().length > 50 ||
    !/^[a-zA-Z\s]+$/.test(name.trim())
  ) {
    errors.push("Invalid name");
  }

  // Validate email: basic pattern
  if (
    !email ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    errors.push("Invalid email");
  }

  return errors;
}
