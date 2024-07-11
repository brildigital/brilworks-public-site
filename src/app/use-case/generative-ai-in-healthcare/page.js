import { Suspense } from 'react';
import UsecaseFirstSection from "@/app/components/UseCases/UsecaseFirstSection";
import UsecaseContentSection from "@/app/components/UseCases/UsecaseContentSection";
import FetchDataSpinner from "@/app/components/Homepage/FetchDataSpinner";

export const metadata = {
  title: "Generative AI in healthcare",
  description:
    "At Brilworks, we specialize in AWS consulting and generative AI, enhancing engineering and design capabilities, accelerating product and MVP timelines, automating operations, and reducing costs.",
  openGraph: {
    title: "Generative AI in healthcare",
    description:
      "At Brilworks, we specialize in AWS consulting and generative AI, enhancing engineering and design capabilities, accelerating product and MVP timelines, automating operations, and reducing costs.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}use-case/generative-ai-in-healthcare/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Generative AI in healthcare",
    description:
      "At Brilworks, we specialize in AWS consulting and generative AI, enhancing engineering and design capabilities, accelerating product and MVP timelines, automating operations, and reducing costs.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}use-case/generative-ai-in-healthcare/`,
  },
};

async function getAWSInHealthcareData() {
  try {
    const url = `https://api.storyblok.com/v2/cdn/stories/use-case/generative-ai-in-healthcare?version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
    const res = await fetch(url, { 
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const storyData = await res.json();
    const { title_section, FAQ_section, content } = storyData?.story?.content;
    return {
      title_section: title_section?.[0],
      main_content: content?.content,
      faq_section: FAQ_section,
    };
  } catch (error) {
    console.error("Error fetching terms and conditions:", error);
    return null;
  }
}

export default async function Page() {
  const storyData = await getAWSInHealthcareData();

  if (!storyData) {
    return <FetchDataSpinner/>;
  }

  return (
    <Suspense fallback={<FetchDataSpinner/>}>
      <UsecaseFirstSection data={storyData?.title_section} />
      <UsecaseContentSection
        content={storyData?.main_content}
        FAQData={storyData?.faq_section}
      />
    </Suspense>
  );
}