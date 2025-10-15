import dynamic from "next/dynamic";
const FitOrbitPrivacyPolicy = dynamic(() =>
  import("@/app/components/PrivacyPolicy/FitOrbitPrivacyPolicy")
);

export async function getPrivacyPolicy() {
  try {
    const storyUrl = `https://api.storyblok.com/v2/cdn/stories/fit-orbit-privacy-policy?version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
    const storyRes = await fetch(storyUrl, { next: { revalidate: 0 } });
    const storyData = await storyRes.json();
    return storyData?.story;
  } catch (error) {
    console.error("Error fetching data:", error);
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
      <FitOrbitPrivacyPolicy data={privacyPolicyData} />
    </>
  );
}
