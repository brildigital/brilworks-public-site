import FlutterflowDevelopmentService from "../components/Services/FlutterflowDevelopmentService";

export const metadata = {
  title: "Flutterflow Development Services",
  description:
    "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
  openGraph: {
    title: "Flutterflow Development Services",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}flutterflow-development-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: "https://a.storyblok.com/f/219851/1440x796/1849c045da/flutterflow-banner.webp",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Flutterflow Development Services",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}flutterflow-development-services/`,
  },
};

const page = () => {
  return (
    <div className="!bg-colorWhite">
      <FlutterflowDevelopmentService />
    </div>
  );
};

export default page;
