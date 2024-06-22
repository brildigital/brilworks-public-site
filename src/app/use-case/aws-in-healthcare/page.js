import parse from "html-react-parser";
import StoryblokClient from "storyblok-js-client";
import AWSInHealthcareFirstSection from "@/app/components/UseCases/AWSInHealthcareFirstSection";
import AWSInHealthcareContentSection from "@/app/components/UseCases/AWSInHealthcareContentSection";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});
async function getAWSInHealthcareData() {
  try {
    const res = await Storyblok.get("cdn/stories/use-case/aws-in-healthcare", {
      version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    });
    const { title_section, FAQ_section, content } = res?.data?.story?.content;
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
