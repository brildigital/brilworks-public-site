import dynamic from "next/dynamic";
import StoryblokClient from "storyblok-js-client";

const PrivacyPolicy = dynamic(() =>
  import("@/app/components/PrivacyPolicy/PrivacyPolicy")
);

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

async function getTermsAndConditions() {
  try {
    const res = await Storyblok.get(
      "cdn/stories/service-squard-privacy-policy",
      {
        version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
      }
    );
    return res?.data?.story;
  } catch (error) {
    console.error("Error fetching terms and conditions:", error);
    return null;
  }
}

export default async function page() {
  const termsAndConditionData = await getTermsAndConditions();
  return (
    <>
      {process.env.VERCEL_ENV === "production" ? (
        <head>
          <meta name="robots" content="noindex, nofollow" />
        </head>
      ) : null}
      <PrivacyPolicy
        data={termsAndConditionData}
        title="Service Squard"
        subTitle="Terms of Service"
      />
    </>
  );
}
