import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import HealthCare from "@/app/components/Solution/Healthcare";

export const metadata = {
  title: "Healthcare Software Development Services",
  description:
    "Brilworks is a healthcare software developer that creates medical software for patient monitoring, telemedicine, and prescription apps on the EMR/EHR platform.",
  openGraph: {
    title: "Healthcare Software Development Services",
    description:
      "Brilworks is a healthcare software developer that creates medical software for patient monitoring, telemedicine, and prescription apps on the EMR/EHR platform.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}industry/healthcare-software-development/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/explore-arrow-01.png`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Healthcare Software Development Services",
    description:
      "Brilworks is a healthcare software developer that creates medical software for patient monitoring, telemedicine, and prescription apps on the EMR/EHR platform.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}industry/healthcare-software-development/`,
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
        item: "https://www.brilworks.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Healthcare Software Development Services",
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }}
      />
      <Header />
      <HealthCare />
      <Footer />
    </>
  );
};

export default page;
