import ReactNativeAppDevelopmentServices from "@/app/components/Services/ReactNativeAppDevelopmentServices";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-04-23";

export const metadata = {
  title: "Expert React Native App Development Services",
  description:
    "Brilworks offers expert React Native development with end to end cross platform mobile app builds for businesses in the USA and worldwide.",
  openGraph: {
    title: "Expert React Native App Development Services",
    description:
      "Brilworks offers expert React Native development with end to end cross platform mobile app builds for businesses in the USA and worldwide.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}web-app-development-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/react-native-development-services-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Expert React Native App Development Services",
    description:
      "Brilworks offers expert React Native development with end to end cross platform mobile app builds for businesses in the USA and worldwide.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}react-native-app-development-services/`,
  },
};

const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateWebPageSchema({
            title: "Expert React Native App Development Services",
            description:
              "Brilworks offers expert React Native development with end to end cross platform mobile app builds for businesses in the USA and worldwide.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}react-native-app-development-services/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <ReactNativeAppDevelopmentServices />
    </>
  );
};

export default page;
