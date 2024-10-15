import { generateBreadcrumb } from "../components/lib/schemaCode";
import FlutterflowTechnology from "../components/Technologies/FlutterflowTechnology";

export const metadata = {
  title: "Hire Flutterflow Developers | Brilworks",
  description:
    "Need a Flutterflow expert to build your app? Our developers specialize in creating stunning, cross-platform apps. Hire now!",
  openGraph: {
    title: "Hire Flutterflow Developers",
    description:
      "Need a Flutterflow expert to build your app? Our developers specialize in creating stunning, cross-platform apps. Hire now!",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-aws-developer/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/1.png`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Hire Flutterflow Developers",
    description:
      "Need a Flutterflow expert to build your app? Our developers specialize in creating stunning, cross-platform apps. Hire now!",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-flutterflow-developer/`,
  },
};
const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Hire Flutterflow Developers"),
        }}
      />
      <FlutterflowTechnology />
    </>
  );
};

export default page;
