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
