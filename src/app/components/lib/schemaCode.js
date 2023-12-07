export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Brilworks",
  url: "https://www.brilworks.com",
  logo: "https://www.brilworks.com/images/logo.png",
  sameAs: [
    "https://www.facebook.com/brilwork",
    "https://www.linkedin.com/company/brilworks",
    "https://www.instagram.com/brilworkssoftware",
    "https://www.youtube.com/@brilworks",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "<sales@brilworks.com>",
  },
};

export const website = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.brilworks.com/#website",
      url: "https://www.brilworks.com/",
      name: "Brilworks",
      description:
        "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.brilworks.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
      inLanguage: "en-US",
    },
  ],
};

export function generateBreadcrumb(secondPositionName) {
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
        name: secondPositionName,
      },
    ],
  };

  return JSON.stringify(breadCrumbList);
}
