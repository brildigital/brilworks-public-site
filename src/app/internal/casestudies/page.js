import CaseStudies from "@/app/components/CaseStudies/CaseStudies";

export const metadata = {
  title: "Case Studies",
  description:
    "Insightful case studies showcase real-world challenges, innovative solutions, and measurable impact, providing invaluable lessons for diverse industries and professionals.",
  openGraph: {
    title: "Case studies",
    description:
      "Insightful case studies showcase real-world challenges, innovative solutions, and measurable impact, providing invaluable lessons for diverse industries and professionals.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Mobile App & Software Development Company | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/gist-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Case studies",
    description:
      "Insightful case studies showcase real-world challenges, innovative solutions, and measurable impact, providing invaluable lessons for diverse industries and professionals.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

const page = () => {
  return <CaseStudies />;
};

export default page;
