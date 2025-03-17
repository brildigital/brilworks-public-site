import { Suspense } from "react";
import dynamic from "next/dynamic";
import FetchDataSpinner from "../components/Homepage/FetchDataSpinner";
import { notFound } from "next/navigation";

const Portfolio = dynamic(() => import("../components/Portfolio/Portfolio"));

export const metadata = {
  title: "Portfolio - Web and Mobile App Development | Brilworks",
  description:
    "Our experienced team has delivered a wide range of projects. Check out our portfolio of web & mobile development projects from diverse sectors.",
  openGraph: {
    title: "Portfolio - Web and Mobile App Development | Brilworks",
    description:
      "Our experienced team has delivered a wide range of projects. Check out our portfolio of web & mobile development projects from diverse sectors.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/`,
  },
};

async function fetchWithErrorHandling(url, options) {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return notFound();
  }
}

async function getPortfolioData() {
  const url = `https://api.storyblok.com/v2/cdn/stories?starts_with=portfolio/&version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
  const options = {
    [process.env.VERCEL_ENV === "production" ? "next" : "cache"]:
      process.env.VERCEL_ENV === "production"
        ? { revalidate: 3600 }
        : "no-store",
  };
  const data = await fetchWithErrorHandling(url, options);
  return data;
}

export default async function Page() {
  const storyData = await getPortfolioData();
  return (
    <Suspense fallback={<FetchDataSpinner />}>
      <Portfolio caseStudyData={storyData?.stories} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  const storyData = await getPortfolioData();
  return storyData?.stories?.map((post) => ({ slug: post.slug }));
}
