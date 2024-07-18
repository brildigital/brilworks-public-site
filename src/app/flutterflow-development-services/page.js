import FlutterflowDevelopmentService from "../components/Services/FlutterflowDevelopmentService";

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
        url: "https://a.storyblok.com/f/219851/1440x796/1849c045da/flutterflow-banner.webp",
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
    <div className="!bg-colorWhite">
      <FlutterflowDevelopmentService />
    </div>
  );
};

export default page;
