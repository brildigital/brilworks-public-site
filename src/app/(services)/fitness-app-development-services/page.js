import FitnessAppDevelopmentServices from "@/app/components/Services/FitnessAppDevelopmentServices";

export const metadata = {
  title: "Fitness App Development Services",
  description:
    "Expert fitness development services, including gym workout, nutrition, fitness trackers, yoga apps, user-friendly, AI-powered apps for startups and SMEs.",
  openGraph: {
    title: "Fitness App Development Services",
    description:
      "Expert fitness development services, including gym workout, nutrition, fitness trackers, yoga apps, user-friendly, AI-powered apps for startups and SMEs.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}web-app-development-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/mobile-app-dev-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Fitness App Development Services",
    description:
      "Expert fitness development services, including gym workout, nutrition, fitness trackers, yoga apps, user-friendly, AI-powered apps for startups and SMEs.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}fitness-app-development-services/`,
  },
};

const page = () => {
  return <FitnessAppDevelopmentServices />;
};

export default page;
