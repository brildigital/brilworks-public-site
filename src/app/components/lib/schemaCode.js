export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Brilworks",
  url: "https://www.brilworks.com",
  logo: "https://www.brilworks.com/images/brilworks-logo.png",
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
        "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.We excel in delivering Gen AI solutions, white label app development, AWS cost optimization, and product engineering with expertise in Next.js, Java, and low-code/no-code platforms.",
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

export function generateRatingSchema(title, pageURL, ratingValue, ratingCount) {
  const ratingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    url: `https://www.brilworks.com/${pageURL}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue,
      reviewCount: ratingCount,
    },
  };

  return JSON.stringify(ratingSchema);
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
