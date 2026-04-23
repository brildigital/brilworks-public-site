import FlutterflowDevelopmentService from "@/app/components/Services/FlutterflowDevelopmentService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-04-23";

export const metadata = {
  title: "Flutterflow Development Services | Brilworks",
  description:
    "Build stunning cross-platform apps faster with Brilworks' FlutterFlow development. Leverage low-code solutions to bring your app ideas to life quickly and cost-effectively.",
  openGraph: {
    title: "Flutterflow Development Services",
    description:
      "Build stunning cross-platform apps faster with Brilworks' FlutterFlow development. Leverage low-code solutions to bring your app ideas to life quickly and cost-effectively.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}flutterflow-development-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/1849c045da_flutterflow-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Flutterflow Development Services",
    description:
      "Build stunning cross-platform apps faster with Brilworks' FlutterFlow development. Leverage low-code solutions to bring your app ideas to life quickly and cost-effectively.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}flutterflow-development-services/`,
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
            title: "Flutterflow Development Services | Brilworks",
            description:
              "Build stunning cross-platform apps faster with Brilworks' FlutterFlow development. Leverage low-code solutions to bring your app ideas to life quickly and cost-effectively.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}flutterflow-development-services/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <FlutterflowDevelopmentService />
    </>
  );
};

export default page;
