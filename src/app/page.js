import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("./home/page"));

export const metadata = {
  title: "AWS Consulting Partner | Gen AI | Product Engineering",
  description:
    "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
  openGraph: {
    title: "AWS Consulting Partner | Gen AI | Product Engineering",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/banner.jpg`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "AWS Consulting Partner | Gen AI | Product Engineering",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

export default async function Home() {
  return <HomePage />;
}
