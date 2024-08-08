import dynamic from "next/dynamic";
const ExpenifyPrivacyPolicy = dynamic(() =>
  import("../components/PrivacyPolicy/ExpenifyPrivacyPolicy")
);



export async function getPrivacyPolicy() {
  try {
    const storyUrl = `https://api.storyblok.com/v2/cdn/stories/expenseflow-privacy-policy?version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
    const storyRes = await fetch(storyUrl,  {next: { revalidate: 0 }})
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
      <ExpenifyPrivacyPolicy data={privacyPolicyData} />
    </>
  );
}
