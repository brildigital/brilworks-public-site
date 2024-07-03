import ContactUs from "../components/Contact-us/ContactUs";

export const metadata = {
  title: "Contact Us - Brilworks",
  description:
    "Contact us through email or phone for web and mobile app development services.",
  openGraph: {
    title: "Contact Us - Brilworks",
    description:
      "Contact us through email or phone for web and mobile app development services.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}contact-us/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Contact Us - Brilworks",
    description:
      "Contact us through email or phone for web and mobile app development services.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}contact-us/`,
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
        name: "Contact Us",
      },
    ],
  };

  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }}
      />
      <ContactUs />
    </>
  );
};

export default page;
