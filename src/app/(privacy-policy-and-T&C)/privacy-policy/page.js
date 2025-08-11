import FetchDataSpinner from "@/app/components/Homepage/FetchDataSpinner";
import parse from "html-react-parser";
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

export const metadata = {
  title: "Brilworks Privacy Policy",
  description:
    "Brilworks' Privacy Policy: Learn how we protect your data and respect your privacy. Transparent information on our data collection, usage, and security practices to ensure your trust and confidence.",
  openGraph: {
    title: "Brilworks Privacy Policy",
    description:
      "Brilworks' Privacy Policy: Learn how we protect your data and respect your privacy. Transparent information on our data collection, usage, and security practices to ensure your trust and confidence.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}privacy-policy/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Brilworks Privacy Policy",
    description:
      "Brilworks' Privacy Policy: Learn how we protect your data and respect your privacy. Transparent information on our data collection, usage, and security practices to ensure your trust and confidence.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}privacy-policy/`,
  },
};

async function getPrivacyPolicy() {
  try {
    const res = await Storyblok.get("cdn/stories/privacy-policy", {
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
      <section className="kinderland healthvault mt-[6rem] !mb-8 md:mx-[15px] w-full flex align-middle justify-center">
        <div className="md:w-4/5 w-full md:px-0 px-4">
          <div className="pb-3">
            <h1 className="md:!text-[3rem] !text-[2rem]  font-semibold">
              Privacy Policy
            </h1>
          </div>
          {privacyPolicyData ? (
            <div>{parse(privacyPolicyData?.content?.content?.content)}</div>
          ) : (
            <div className="flex align-middle justify-center p-24">
              <FetchDataSpinner />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
