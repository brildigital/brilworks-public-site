import { Suspense } from "react";
import FetchDataSpinner from "@/app/components/Homepage/FetchDataSpinner";
import { getUseCasesData } from "@/app/components/lib/getUseCases";
import UseCaseHub from "./UseCaseHub";

export const metadata = {
  title: "Use Cases — Real Brilworks Engagements | Generative AI, Cloud, Product Engineering",
  description:
    "Explore Brilworks use cases across Generative AI, AWS, IoT, and more — with real architectures, tradeoffs, and outcomes in healthcare, fintech, retail, manufacturing, and media.",
  openGraph: {
    title: "Use Cases — Real Brilworks Engagements",
    description:
      "Explore Brilworks use cases across Generative AI, AWS, IoT, and more — real architectures, tradeoffs, and outcomes.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}use-case/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}use-case/`,
  },
};

export default async function Page() {
  let useCases = [];
  try {
    const { storyData } = await getUseCasesData();
    useCases = storyData || [];
  } catch (e) {
    console.error("Use cases fetch failed:", e);
  }

  return (
    <Suspense fallback={<FetchDataSpinner />}>
      <UseCaseHub useCases={useCases} />
    </Suspense>
  );
}
