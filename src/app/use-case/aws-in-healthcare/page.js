import parse from "html-react-parser";
import StoryblokClient from "storyblok-js-client";
import AWSInHealthcareFirstSection from "@/app/components/UseCases/AWSInHealthcareFirstSection";
import AWSInHealthcareContentSection from "@/app/components/UseCases/AWSInHealthcareContentSection";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});
// const getAWSInHealthcareData = async () => {};
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
      {/* <div className="container !max-w-[1280px] mx-auto my-0 !px-4">
        <div className="slg:basis-4/5 slg:flex-shrink-0 slg:flex-grow-0 slg:max-w-[80%] !px-4 min-h-[1px] w-full">
          <div className="blog-inner items-center">
            <div className="flex -mx-4 md:flex-row flex-col">
              <div className="md:w-3/4 w-full !float-left">
                <div className="h-full w-full box-border !px-4">
                  <div className="h-full flex flex-col">
                    <BlogFAQ FAQData={storyData?.faq_section} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
