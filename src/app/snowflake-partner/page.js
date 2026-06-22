import dynamic from "next/dynamic";
import Script from "next/script";
import SnowflakeRevealInit from "../components/SnowflakePartner/SnowflakeRevealInit";

const SnowflakeHero = dynamic(
  () => import("../components/SnowflakePartner/SnowflakeHero"),
);
const SnowflakeStatement = dynamic(
  () => import("../components/SnowflakePartner/SnowflakeStatement"),
);
const SnowflakeWhyChoose = dynamic(
  () => import("../components/SnowflakePartner/SnowflakeWhyChoose"),
);
const SnowflakeMidCTA = dynamic(
  () => import("../components/SnowflakePartner/SnowflakeMidCTA"),
);
const SnowflakeServices = dynamic(
  () => import("../components/SnowflakePartner/SnowflakeServices"),
);
const SnowflakeIndustries = dynamic(
  () => import("../components/SnowflakePartner/SnowflakeIndustries"),
);
const SnowflakeFAQ = dynamic(
  () => import("../components/SnowflakePartner/SnowflakeFAQ"),
);
const SnowflakeCTA = dynamic(
  () => import("../components/SnowflakePartner/SnowflakeCTA"),
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Snowflake partner and why choose Brilworks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Snowflake partner is a firm certified to design, build, and optimize on the platform. Brilworks brings hands-on depth across migrations, pipelines, and cost work, with engineers who have shipped Snowflake in production.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a Snowflake migration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on source complexity and data volume, but most migrations run in fixed, scoped phases. We reconcile data as we go so nothing is lost in the cutover.",
      },
    },
    {
      "@type": "Question",
      name: "How much can you cut our Snowflake costs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most engagements a 20 to 40 percent reduction is achievable through warehouse right-sizing, auto-suspend, and query tuning, without losing what the business gets from the platform.",
      },
    },
  ],
};

export async function generateMetadata() {
  return {
    title: "Brilworks x Snowflake | Certified Snowflake Partner",
    description:
      "Brilworks is a certified Snowflake partner. We unify your data on one platform, cut what you overspend to run it, and get AI into production on data your teams can trust.",
    keywords:
      "snowflake partner, snowflake consulting partner, certified snowflake partner, snowflake implementation partner",
    openGraph: {
      title: "Brilworks x Snowflake | Certified Snowflake Partner",
      type: "website",
      description:
        "Brilworks is a certified Snowflake partner. We unify your data on one platform, cut what you overspend to run it, and get AI into production on data your teams can trust.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}snowflake-partner`,
      siteName: "Brilworks",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/snowflake_hero.webp`,
        },
      ],
      locale: "en-US",
    },
    twitter: {
      title: "Brilworks x Snowflake | Certified Snowflake Partner",
      description:
        "Brilworks is a certified Snowflake partner. We unify your data on one platform, cut what you overspend to run it, and get AI into production on data your teams can trust.",
      card: "summary_large_image",
      site: "@_Brilworks",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}snowflake-partner`,
    },
  };
}

const SnowflakePartnerPage = () => {
  const breadCrumbList = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: process.env.NEXT_PUBLIC_BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Snowflake Partner",
      },
    ],
  };

  return (
    <>
      <Script
        defer
        id="breadcrumbs"
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }}
      />
      <Script
        defer
        id="snowflake-faq"
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SnowflakeRevealInit />
      <SnowflakeHero />
      <SnowflakeStatement />
      <SnowflakeWhyChoose />
      <SnowflakeMidCTA />
      <SnowflakeServices />
      <SnowflakeIndustries />
      <SnowflakeCTA />
      <SnowflakeFAQ />
    </>
  );
};

export default SnowflakePartnerPage;
