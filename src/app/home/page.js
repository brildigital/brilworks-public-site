import dynamic from "next/dynamic";
import { homepageFAQ } from "../components/lib/schemaCode";
import GameChanger from "../components/Homepage/GameChanger";
import Script from "next/script";

const Brilliant = dynamic(() => import("../components/Homepage/Brilliant"));
const SeeingBelieving = dynamic(() =>
  import("../components/Homepage/SeeingBelieving")
);
const ClientReviews = dynamic(() =>
  import("../components/Homepage/ClientReviews")
);
const DomainWorking = dynamic(() =>
  import("../components/Homepage/DomainWorking")
);
const ExtensionOfTeam = dynamic(() =>
  import("../components/Homepage/ExtensionOfTeam")
);
const Honors = dynamic(() => import("../components/Homepage/Honors"));
const HomepageWhyChooseUs = dynamic(() =>
  import("../components/Homepage/HomepageWhyChooseUs")
);
const HomepageBlog = dynamic(() =>
  import("../components/Homepage/HomePageBlogs")
);
const ContactUs = dynamic(() => import("../components/Homepage/ContactUs"));

export const metadata = {
  title: "AWS Consulting Partner | Gen AI | Product Engineering",
  description:
    "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people. We excel in delivering Gen AI solutions, white label app development, AWS cost optimization, and product engineering with expertise in Next.js, Java, and low-code/no-code platforms.",
  openGraph: {
    title: "AWS Consulting Partner | Gen AI | Product Engineering",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.  We excel in delivering Gen AI solutions, white label app development, AWS cost optimization, and product engineering with expertise in Next.js, Java, and low-code/no-code platforms.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "AWS Consulting Partner | Gen AI | Product Engineering",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/banner.jpg`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "AWS Consulting Partner | Gen AI | Product Engineering",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.  Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
};
const page = () => {
  const breadCrumbList = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
      },
    ],
  };

  return (
    <>
      <Script
        defer
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }}
      />
      <Script
        defer
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFAQ) }}
      />
      <GameChanger />
      <Brilliant />
      <SeeingBelieving />
      <ClientReviews />
      <DomainWorking />
      <ExtensionOfTeam />
      <Honors />
      <HomepageWhyChooseUs />
      <HomepageBlog />
      <ContactUs />
    </>
  );
};

export default page;
