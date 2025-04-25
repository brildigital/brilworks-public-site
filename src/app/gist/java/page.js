import TechnologyGist from "@/app/components/Gist/TechnologyGist";

export const metadata = {
  title: "Java Q&A - Brilworks",
  description:
    "A community of devoted Java enthusiasts dedicated to assisting fellow Java enthusiasts. Explore how Brilworks contributes to uplifting the Java community by addressing the most crucial, common, unique, and unparalleled Java questions.",
  openGraph: {
    title: "Java Q&A - Brilworks",
    description:
      "A community of devoted Java enthusiasts dedicated to assisting fellow Java enthusiasts. Explore how Brilworks contributes to uplifting the Java community by addressing the most crucial, common, unique, and unparalleled Java questions.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}gist/java/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Java Q&A - Brilworks",
    description:
      "A community of devoted Java enthusiasts dedicated to assisting fellow Java enthusiasts. Explore how Brilworks contributes to uplifting the Java community by addressing the most crucial, common, unique, and unparalleled Java questions.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}gist/java/`,
  },
};

const page = () => {
  return (
    <TechnologyGist
      title="Java Q&A"
      description="A community of devoted Java enthusiasts dedicated to assisting fellow Java enthusiasts. Explore how Brilworks contributes to uplifting the Java community by addressing the most crucial, common, unique, and unparalleled Java questions."
      apiKey="java"
    />
  );
};

export default page;
