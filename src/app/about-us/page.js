import dynamic from "next/dynamic";

const AboutUs = dynamic(() => import("../components/About/AboutUs"));

export const metadata = {
  title: "About Us - Brilworks",
  description:
    "Software development services and end-to-end solutions at Brilworks. Explore further on our About page for more information.",
  openGraph: {
    title: "About Us - Brilworks",
    description:
      "Software development services and end-to-end solutions at Brilworks. Explore further on our About page for more information.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}about-us/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/down-arrow.png`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "About Us - Brilworks",
    description:
      "Software development services and end-to-end solutions at Brilworks. Explore further on our About page for more information.",

    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}about-us/`,
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
        name: "About Us",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }}
      />
      <AboutUs />
    </>
  );
};

export default page;
