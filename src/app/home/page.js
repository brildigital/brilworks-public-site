import dynamic from "next/dynamic";
import { BestAdvocateText } from "../components/Homepage/BigText";
import { homepageFAQ } from "../components/lib/schemaCode";

const HomepageBlog = dynamic(() => import("../components/Homepage/Blogs"));
const Brilliant = dynamic(() => import("../components/Homepage/Brilliant"));
const Honors = dynamic(() => import("../components/Homepage/Honors"));
const ContactUs = dynamic(() => import("../components/Homepage/ContactUs"));
const GameChanger = dynamic(() => import("../components/Homepage/GameChanger"));
const ClientReviews = dynamic(() =>
  import("../components/Homepage/ClientReviews")
);
const DomainWorking = dynamic(() =>
  import("../components/Homepage/DomainWorking")
);
const ExtensionOfTeam = dynamic(() =>
  import("../components/Homepage/ExtensionOfTeam")
);
const SeeingBelieving = dynamic(() =>
  import("../components/Homepage/SeeingBelieving")
);

export const metadata = {
  title: "Mobile App & Software Development Company",
  description:
    "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
  openGraph: {
    title: "Mobile App & Software Development Company",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Mobile App & Software Development Company",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/banner.jpg`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Mobile App & Software Development Company",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFAQ) }}
      />
      <GameChanger />
      <Brilliant />
      <BestAdvocateText />
      <ClientReviews />
      <DomainWorking />
      <ExtensionOfTeam />
      <SeeingBelieving />
      <Honors />
      <HomepageBlog />
      <ContactUs />
    </>
  );
};

export default page;
