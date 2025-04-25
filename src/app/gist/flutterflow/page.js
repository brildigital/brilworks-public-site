import TechnologyGist from "@/app/components/Gist/TechnologyGist";

export const metadata = {
  title: "Flutterflow Q&A - Brilworks",
  description:
    "With a wealth of experience in FlutterFlow development, we're here to help you get the most out of the platform. Explore our expert insights to simplify development and improve your app-building process.",
  openGraph: {
    title: "Flutterflow Q&A - Brilworks",
    description:
      "With a wealth of experience in FlutterFlow development, we're here to help you get the most out of the platform. Explore our expert insights to simplify development and improve your app-building process.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}gist/flutterflow/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Flutterflow Q&A - Brilworks",
    description:
      "With a wealth of experience in FlutterFlow development, we're here to help you get the most out of the platform. Explore our expert insights to simplify development and improve your app-building process.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}gist/flutterflow/`,
  },
};

const page = () => {
  return (
    <TechnologyGist
      title="Flutterflow Q&A"
      description="With a wealth of experience in FlutterFlow development, we're here to help you get the most out of the platform. Explore our expert insights to simplify development and improve your app-building process."
      apiKey="flutterflow"
    />
  );
};

export default page;
