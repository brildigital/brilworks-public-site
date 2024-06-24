import StoryblokClient from "storyblok-js-client";
import AWSInHealthcareFirstSection from "@/app/components/UseCases/AWSInHealthcareFirstSection";
import AWSInHealthcareContentSection from "@/app/components/UseCases/AWSInHealthcareContentSection";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

export const metadata = {
  title: "AWS In Healthcare",
  description:
    "At Brilworks, we specialize in AWS consulting and generative AI, enhancing engineering and design capabilities, accelerating product and MVP timelines, automating operations, and reducing costs.",
  openGraph: {
    title: "AWS In Healthcare",
    description:
      "At Brilworks, we specialize in AWS consulting and generative AI, enhancing engineering and design capabilities, accelerating product and MVP timelines, automating operations, and reducing costs.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}use-case/aws-in-healthcare/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "AWS In Healthcare",
    description:
      "At Brilworks, we specialize in AWS consulting and generative AI, enhancing engineering and design capabilities, accelerating product and MVP timelines, automating operations, and reducing costs.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}use-case/aws-in-healthcare/`,
  },
};

async function getAWSInHealthcareData() {
  try {
    const url = `https://api.storyblok.com/v2/cdn/stories/use-case/aws-in-healthcare?version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
    const res = await fetch(url, { cache: "no-store" });
    const storyData = await res.json();

    // const res = await Storyblok.get(
    //   "cdn/stories/use-case/aws-in-healthcare",
    //   {
    //     version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    //   }
    //   { cache: "no-store", revalidate: { next: 3000 } }
    // );
    const { title_section, FAQ_section, content } = storyData?.story?.content;
    return {
      title_section: title_section[0],
      main_content: content?.content,
      faq_section: FAQ_section,
    };
  } catch (error) {
    console.error("Error fetching terms and conditions:", error);
    return null;
  }
}

export default async function page() {
  const storyData = await getAWSInHealthcareData();
  return (
    <>
      <AWSInHealthcareFirstSection data={storyData?.title_section} />
      <AWSInHealthcareContentSection
        content={storyData?.main_content}
        FAQData={storyData?.faq_section}
      />
    </>
  );
}
