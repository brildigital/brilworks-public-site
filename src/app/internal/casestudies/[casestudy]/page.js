import CaseStudyContent from "@/app/components/CaseStudies/CaseStudyContent";

export const metadata = {
  openGraph: {
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
    creator: "@_Brilworks",
  },
};

const page = () => {
  return <CaseStudyContent />;
};

export default page;
