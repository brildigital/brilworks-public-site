import parse from "html-react-parser";
import StoryblokClient from "storyblok-js-client";
import "../components/PrivacyPolicy/privacypolicy.scss";
import FetchDataSpinner from "../components/Homepage/FetchDataSpinner";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

export const metadata = {
  title: "Brilworks Terms and Conditions",
  description:
    "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
  openGraph: {
    title: "Brilworks Terms and Conditions",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}terms-and-conditions/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Brilworks Terms and Conditions",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}terms-and-conditions/`,
  },
};

async function getTermsAndConditions() {
  try {
    const res = await Storyblok.get("cdn/stories/terms-and-conditions", {
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
      <section className="kinderland mt-[6rem] !mb-8 md:mx-[15px] w-full flex align-middle justify-center">
        <div className="md:w-4/5 w-full md:px-0 px-4">
          <div className="pb-3">
            <h1 className="md:!text-[3rem] !text-[2rem] font-semibold">
              Brilworks Terms and Conditions
            </h1>
          </div>
          {termsAndConditionData ? (
            <div className="brilworks-policy-page">
              {parse(termsAndConditionData?.content?.content?.content)}
            </div>
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
