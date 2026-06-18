import { NextResponse } from "next/server";
import { sendDataToSlack, createHubSpotContact } from "..";
import { cookies } from "next/headers";

export async function POST(req) {
  const cookieStore = cookies();
  const userDataCookie = cookieStore.get("user-data");
  const userData = userDataCookie ? JSON.parse(userDataCookie.value) : null;

  const payload = await req.json();
  const { email, page, toolFormData } = payload;

  if (
    !email ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    await Promise.all([
      createHubSpotContact({
        name: email.split("@")[0],
        email,
        page,
      }),
      sendDataToSlack({
        name: email.split("@")[0],
        email,
        page,
        userData,
        toolFormData,
      }),
    ]);

    return NextResponse.json(
      { message: "Lead submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error submitting tool lead:", error);
    return NextResponse.json(
      { error: "Failed to submit lead" },
      { status: 500 },
    );
  }
}
