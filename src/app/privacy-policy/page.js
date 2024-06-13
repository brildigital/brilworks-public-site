import dynamic from "next/dynamic";

const BrilworksPrivacyPolicy = dynamic(() =>
  import("../components/PrivacyPolicy/BrilworksPrivacyPolicy")
);

export const metadata = {
  title: "Brilworks Privacy Policy",
  description:
    "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
  openGraph: {
    title: "Brilworks Privacy Policy",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}privacy-policy/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Brilworks Privacy Policy",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}privacy-policy/`,
  },
};

const page = () => {
  return (
    <>
      {process.env.VERCEL_ENV === "production" ? (
        <head>
          <meta name="robots" content="noindex, nofollow" />
        </head>
      ) : null}
      <BrilworksPrivacyPolicy />
    </>
  );
};

export default page;
