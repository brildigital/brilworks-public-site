import dynamic from "next/dynamic";
import StoryblokClient from "storyblok-js-client";

const Kinderland = dynamic(() =>
  import("@/app/components/PrivacyPolicy/Kinderland")
);

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

async function getPrivacyPolicy() {
  try {
    const res = await Storyblok.get("cdn/stories/kinderland-privacy-policy", {
      version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    });
    return res?.data?.story;
  } catch (error) {
    console.error("Error fetching terms and conditions:", error);
    return null;
  }
}

export default async function page() {
  const privacyPolicyData = await getPrivacyPolicy();
  return (
    <>
      {process.env.VERCEL_ENV === "production" ? (
        <head>
          <meta name="robots" content="noindex, nofollow" />
        </head>
      ) : null}
      <Kinderland data={privacyPolicyData} />
    </>
  );
}
