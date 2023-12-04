import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import MediaAndEntertainment from "@/app/components/Solution/MediaAndEntertainment";

export const metadata = {
  title: "Media and Entertainment Software Development Service",
  description:
    "Brilworks Software provides media and entertainment software development services including OTT streaming, ticket booking, and gaming.",
  openGraph: {
    title: "Media and Entertainment Software Development Service",
    description:
      "Brilworks Software provides media and entertainment software development services including OTT streaming, ticket booking, and gaming.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}industry/media-entertainment-software-development/`,
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
    title: "Media and Entertainment Software Development Service",
    description:
      "Brilworks Software provides media and entertainment software development services including OTT streaming, ticket booking, and gaming.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}industry/media-entertainment-software-development/`,
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
        name: "Media And Entertainment Software Development Company",
      },
    ],
  };
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }}
        />
      </head>
      <Header />
      <MediaAndEntertainment />
      <Footer />
    </>
  );
};

export default page;
