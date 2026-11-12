const SITE_URL = "https://www.brilworks.com/";
export const ORGANIZATION_ID = `${SITE_URL}#organization`;
export const WEBSITE_ID = `${SITE_URL}#website`;

// Reference to the single Organization node emitted in the root layout.
// Use this for publisher / provider / author on page-level schema so every
// page resolves to one entity instead of redeclaring a partial copy.
export const organizationRef = { "@id": ORGANIZATION_ID };

const ORGANIZATION_DESCRIPTION =
  "Brilworks is a data and AI engineering firm. It builds data pipelines, warehouses, and governance on Snowflake and Databricks, then the AI agents and analytics that run on that foundation.";

const SAME_AS = [
  "https://www.linkedin.com/company/brilworks",
  "https://clutch.co/profile/brilworks-software/",
  "https://x.com/_Brilworks",
  "https://www.youtube.com/@brilworks",
  "https://www.facebook.com/brilwork",
  "https://www.instagram.com/brilworkssoftware",
  "https://www.upwork.com/ag/brilworks/",
  "https://www.behance.net/hellobrilworks",
  "https://dribbble.com/Brilworks",
  "https://partners.databricks.com/s/directory/listing?recordId=001Vp00000dsH62IAE",
];

const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "503, Fortune Business Hub, Science City Road, Sola",
  addressLocality: "Ahmedabad",
  addressRegion: "Gujarat",
  postalCode: "380060",
  addressCountry: "IN",
};

const organizationNode = {
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORGANIZATION_ID,
  name: "Brilworks",
  alternateName: "Brilworks Software",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}#logo`,
    url: `${SITE_URL}images/brilworks-logo.png`,
  },
  image: `${SITE_URL}images/v2/og-home.jpg`,
  description: ORGANIZATION_DESCRIPTION,
  address: POSTAL_ADDRESS,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.071,
    longitude: 72.5158,
  },
  // Matches the sales number shown in the site footer.
  telephone: "+91 9558288364",
  email: "sales@brilworks.com",
  openingHours: "Mo-Fr 10:00-19:00",
  priceRange: "$$",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "sales@brilworks.com",
      telephone: "+91 9558288364",
      areaServed: "Worldwide",
      availableLanguage: "en",
    },
    {
      "@type": "ContactPoint",
      contactType: "human resources",
      email: "hr@brilworks.com",
    },
  ],
  knowsAbout: [
    "Data engineering",
    "Snowflake",
    "Databricks",
    "Data governance",
    "AI agent development",
    "Generative AI",
    "MLOps",
    "Embedded software",
    "Firmware engineering",
    "Edge AI",
  ],
  sameAs: SAME_AS,
};

const websiteNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "Brilworks",
  description: ORGANIZATION_DESCRIPTION,
  publisher: organizationRef,
  inLanguage: "en-US",
};

// One connected graph for the whole site, rendered once in the root layout.
export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [organizationNode, websiteNode],
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

export function generateVideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  embedUrl,
}) {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: name,
    description: description,
    thumbnailUrl: thumbnailUrl,
    uploadDate: uploadDate || new Date().toISOString(),
    contentUrl: contentUrl,
    embedUrl: embedUrl,
  };
  return JSON.stringify(videoSchema);
}

export function generateBlogPostingSchema({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
  authorName,
  authorUrl,
  authorJobTitle,
  authorPageUrl,
  category,
  readingTime,
}) {
  const sameAs = [authorUrl, authorPageUrl].filter(Boolean);
  const author = {
    "@type": "Person",
    name: authorName,
    url: authorPageUrl || authorUrl,
    ...(authorJobTitle ? { jobTitle: authorJobTitle } : {}),
    worksFor: organizationRef,
    ...(sameAs.length ? { sameAs } : {}),
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    url: url,
    image: imageUrl,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    wordCount: readingTime ? readingTime * 250 : undefined,
    author,
    publisher: organizationRef,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleSection: category,
  };
  return JSON.stringify(schema);
}

export function generateServiceSchema({
  name,
  description,
  url,
  serviceType,
  areaServed = "Worldwide",
  provider = organizationRef,
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType,
    areaServed,
    provider,
  };
  return JSON.stringify(schema);
}

// Builds Service schema from a page's own `metadata` export so the schema can
// never drift from the title, description and canonical the page declares.
export function generateServiceSchemaFromMetadata(metadata, options = {}) {
  // "Service Name | Tagline | Brilworks" -> "Service Name"
  const name =
    String(metadata?.title || "")
      .split("|")
      .map((part) => part.trim())
      .find((part) => part && !/^brilworks$/i.test(part)) || "";
  const url = metadata?.alternates?.canonical;
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    ...(url ? { "@id": `${url}#service` } : {}),
    name,
    description: metadata?.description,
    url,
    serviceType: options.serviceType || name,
    areaServed: options.areaServed || "Worldwide",
    provider: organizationRef,
  });
}

export function generateFaqPageSchema(faqs) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (faqs || []).map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return JSON.stringify(schema);
}

export function generateBreadcrumbList(items) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
  return JSON.stringify(schema);
}

export function generateWebApplicationSchema({
  name,
  description,
  url,
  applicationCategory = "MultimediaApplication",
  operatingSystem = "Web",
  imageUrl,
  dateModified,
  offers = { "@type": "Offer", price: "0", priceCurrency: "USD" },
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url,
    applicationCategory,
    operatingSystem,
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    ...(imageUrl ? { image: imageUrl } : {}),
    ...(dateModified ? { dateModified } : {}),
    offers,
    publisher: organizationRef,
  };
  return JSON.stringify(schema);
}

export function generateImageObjectSchema({
  contentUrl,
  caption,
  width,
  height,
  creator = organizationRef,
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl,
    url: contentUrl,
    ...(caption ? { caption } : {}),
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
    creator,
  };
  return JSON.stringify(schema);
}

export function generatePersonSchema({ name, url, jobTitle, image, sameAs = [] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    image,
    sameAs: sameAs.filter(Boolean),
  };
  if (url) schema.url = url;
  return JSON.stringify(schema);
}

export function generateWebPageSchema({ title, description, url, dateModified }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    dateModified: dateModified,
    publisher: organizationRef,
  };
  return JSON.stringify(schema);
}

export function generateComparisonSchemas({ title, description, url, faqs, dateModified }) {
  const schemas = [];

  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    dateModified: dateModified,
    publisher: organizationRef,
  });

  if (faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return schemas.map((s) => JSON.stringify(s));
}

export const homepageFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why Choose Brilworks as a Software Development Company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brilworks stands out as a top-rated software development company due to our commitment to excellence, innovative solutions, and client-centric approach. Our team of experienced developers is dedicated to delivering custom-tailored software that meets your unique business needs. We prioritize transparency, timely communication, and a collaborative partnership to ensure your project's success",
      },
    },
    {
      "@type": "Question",
      name: "What Services Does Brilworks Offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brilworks offers a comprehensive range of software development services, including custom software development, web development, mobile app development, AI/ML development, and AWS solutions. We specialize in creating cutting-edge solutions that empower startups and leading companies alike, providing end-to-end services from concept to deployment.",
      },
    },
    {
      "@type": "Question",
      name: "Do You Sign an NDA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we take confidentiality seriously. We are willing to sign a Non-Disclosure Agreement (NDA) to ensure that your ideas, intellectual property, and sensitive information remain secure throughout our collaboration.",
      },
    },
    {
      "@type": "Question",
      name: "What Technologies Does Brilworks Use to Develop Software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brilworks employs a diverse range of technologies based on project requirements. Our expertise includes but is not limited to languages like Python, Java, JavaScript, frameworks like React and Angular, databases such as MySQL and MongoDB, and cloud solutions like AWS.",
      },
    },
    {
      "@type": "Question",
      name: "What Are the Different Working Models with Brilworks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer flexible working models tailored to suit your project needs. Whether you prefer a fixed-price model, time and materials, or a dedicated team, Brilworks adapts to your requirements, ensuring a collaborative and efficient development process.",
      },
    },
    {
      "@type": "Question",
      name: "Do You Provide After Development Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our commitment extends beyond development. We provide comprehensive post-development support, including maintenance, updates, and troubleshooting. Our goal is to ensure your software operates seamlessly, and we are ready to assist you with any issues that may arise.",
      },
    },
    {
      "@type": "Question",
      name: "How Much Does Software Development with Brilworks Cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost of software development with Brilworks depends on the project's complexity, scope, and chosen working model. We provide transparent pricing structures and work closely with clients to align our services with their budgetary constraints.",
      },
    },
    {
      "@type": "Question",
      name: "How Long Does Brilworks Take to Build a Software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The timeline for software development varies based on project complexity and scope. We conduct thorough assessments during the planning phase to provide realistic timelines. Our team is committed to delivering quality results promptly without compromising on precision.",
      },
    },
    {
      "@type": "Question",
      name: "What Project Management Tools Do You Use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brilworks utilizes a streamlined toolkit for effective project management, including Jira for issue tracking, Miro for collaboration, Google Meet for virtual meetings, Slack for real-time communication, Confluence for documentation, and GitHub for version control. These tools ensure efficient workflows, transparent processes, and seamless communication throughout the development cycle.",
      },
    },
    {
      "@type": "Question",
      name: "What Are Your Payment Methods After Engagement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer flexible payment options for our clients. Common methods include wire transfers, online payments, and other secure transaction methods. Our team works closely with clients to establish a payment plan that aligns with project milestones and financial preferences.",
      },
    },
  ],
};
