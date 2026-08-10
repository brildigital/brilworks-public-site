import axios from "axios";
import { NextResponse } from "next/server";

export async function createHubSpotContact(payload) {
  const { name, email, phone, message, page, company, lead_source_funnel } =
    payload;

  const properties = {
    email,
    firstname: name.split(" ")[0],
    lastname: name.split(" ")[1] || "",
    company: company || "",
    phone: phone || "",
    website: `${process.env.NEXT_PUBLIC_BASE_URL}${page?.replace("/", "")}`,
    lifecyclestage: "marketingqualifiedlead",
    message: message || "",
  };

  // BRI-231: surface funnel-of-origin to HubSpot when supplied. The matching
  // contact-property `lead_source_funnel` must be created in HubSpot Settings
  // → Properties before this field will be retained.
  if (lead_source_funnel) {
    properties.lead_source_funnel = lead_source_funnel;
  }

  const apiPayLoad = JSON.stringify({ properties });

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
      },
    );
    return response;
  } catch (error) {
    console.error("Error submitting form", error);
    return error;
  }
}

// Migrated from Slack to Google Chat — old Slack implementation kept below (commented) for reference/rollback.
/*
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
    toolFormData,
    projectType,
    lead_source_funnel,
  } = payload;
  const pageURL = `${process.env.NEXT_PUBLIC_BASE_URL}${page?.replace(/^\/+/, "")}`;

  const formatObjectForSlack = (obj = {}) =>
    Object.entries(obj)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
  const dynamicFormDataText = formatObjectForSlack(toolFormData);

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
                }\n${
                  lead_source_funnel
                    ? `LeadSourceFunnel: ${lead_source_funnel}`
                    : ""
                }\n${
                  page.includes("/tools/") || toolFormData
                    ? `ToolFormData:-\n\n ${dynamicFormDataText}\n`
                    : ""
                }`,
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
      { status: 500 },
    );
  }
}
*/

export async function sendDataToGoogleSpace(payload) {
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
    toolFormData,
    projectType,
    lead_source_funnel,
  } = payload;
  const pageURL = `${process.env.NEXT_PUBLIC_BASE_URL}${page?.replace(/^\/+/, "")}`;

  const formatObjectForChat = (obj = {}) =>
    Object.entries(obj)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
  const dynamicFormDataText = formatObjectForChat(toolFormData);

  const widgets = [];
  const addField = (topLabel, text) => {
    if (text) widgets.push({ decoratedText: { topLabel, text, wrapText: true } });
  };

  addField(
    "Email",
    email ? `<a href="mailto:${email}">${email}</a>` : undefined,
  );
  addField("Name", name);
  addField("Phone", phone);
  addField("Message", message);
  addField("Company", company);
  addField("Previous Page", previousPage);
  addField("Page", pageURL);
  addField("Website", website);
  addField("LinkedIn", linkedin);
  addField("Project Type", projectType);
  addField("Region", userData?.region);
  addField("City", userData?.city);
  addField("Country", userData?.country);
  addField("Lead Source Funnel", lead_source_funnel);
  if (page?.includes("/tools/") || toolFormData) {
    widgets.push({
      decoratedText: {
        topLabel: "Tool Form Data",
        text: dynamicFormDataText,
        wrapText: true,
      },
    });
  }

  const data = {
    cardsV2: [
      {
        cardId: "leadNotification",
        card: {
          header: { title: "New Lead Submission" },
          sections: [{ widgets }],
        },
      },
    ],
  };

  try {
    const response = await axios.post(
      `${process.env.GOOGLE_CHAT_WEBHOOK_URL}`,
      data,
      { headers: { "Content-Type": "application/json; charset=utf-8" } },
    );
    const responseData = response.data;
    if (responseData?.error) {
      console.error(
        `Error: ${responseData.error.message || responseData.error}`,
      );
      return NextResponse.json({ message: responseData.error });
    } else {
      return NextResponse.json({ data: responseData }, { status: 200 });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "An error occurred while sending the message to Google Chat." },
      { status: 500 },
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
