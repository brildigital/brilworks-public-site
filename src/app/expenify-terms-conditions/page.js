import dynamic from "next/dynamic";
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

const ExpenifyTermsAndConditions = dynamic(() =>
  import("../components/PrivacyPolicy/ExpenifyTermsAndConditions")
);

async function getTermsAndConditions() {
  try {
    const res = await Storyblok.get("cdn/stories/expenify-terms-conditions", {
      version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    });
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
      <ExpenifyTermsAndConditions data={termsAndConditionData} />
    </>
  );
}
