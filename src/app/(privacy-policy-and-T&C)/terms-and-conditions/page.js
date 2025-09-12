import FetchDataSpinner from "@/app/components/Homepage/FetchDataSpinner";
import parse from "html-react-parser";
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

export const metadata = {
  title: "Terms and Conditions | Brilworks",
  description:
    "Brilworks' Terms and Conditions: Clear guidelines for engaging our services. Understand our commitments, your rights, and the framework for our business relationship to ensure mutual success.",
  openGraph: {
    title: "Brilworks Terms and Conditions",
    description:
      "Brilworks' Terms and Conditions: Clear guidelines for engaging our services. Understand our commitments, your rights, and the framework for our business relationship to ensure mutual success.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}terms-and-conditions/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Brilworks Terms and Conditions",
    description:
      "Brilworks' Terms and Conditions: Clear guidelines for engaging our services. Understand our commitments, your rights, and the framework for our business relationship to ensure mutual success.",
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
      <section className="kinderland mt-[6rem] !mb-8 w-full flex align-middle justify-center">
        <div className="container max-w-[1280px] main-section-padding !py-8 md:px-10 px-6 mx-auto w-full">
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
