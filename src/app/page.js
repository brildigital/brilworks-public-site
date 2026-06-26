import HomePage from "./home/page";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://dev.brilworks.com/",
  ),
  title: "Data & AI Engineering Company | Brilworks",
  description:
    "Brilworks is a Data & AI engineering company. We provide data engineering services and AI agent development — from pipelines to agents in production.",
  openGraph: {
    title: "Data & AI Engineering Company | Brilworks",
    description:
      "Brilworks is a Data & AI engineering company. We provide data engineering services and AI agent development — from pipelines to agents in production.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Data & AI Engineering Company | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/hero-pg-main.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Data & AI Engineering Company | Brilworks",
    description:
      "Brilworks is a Data & AI engineering company. We provide data engineering services and AI agent development — from pipelines to agents in production.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

export default async function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
