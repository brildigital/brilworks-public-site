import dynamic from "next/dynamic";
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

const PrivacyPolicy = dynamic(() =>
  import("@/app/components/PrivacyPolicy/PrivacyPolicy")
);

export async function getTermsAndConditions() {
  try {
    const storyUrl = `https://api.storyblok.com/v2/cdn/stories/expenseflow-terms-conditions?version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
    const storyRes = await fetch(storyUrl, { next: { revalidate: 0 } });
    const storyData = await storyRes.json();
    return storyData?.story;
  } catch (error) {
    console.error("Error fetching data:", error);
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
        title="ExpenseFlow"
        subTitle="Terms and Conditions"
      />
    </>
  );
}
