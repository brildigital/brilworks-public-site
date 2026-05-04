import AiAgentDevelopmentService from "@/app/components/Services/AiAgentDevelopmentService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import {
  generateWebPageSchema,
  generateServiceSchema,
  generateFaqPageSchema,
  generateBreadcrumbList,
} from "@/app/components/lib/schemaCode";
import { AiAgentDevelopmentFAQData } from "@/data/serviceFaqs";

const LAST_UPDATED = "2026-05-04";

const TITLE = "AI Agent Development Services for Enterprise Teams | Brilworks";
const DESCRIPTION =
  "Brilworks designs, builds, and deploys custom AI agents for enterprise operations, sales, and support teams. Production-ready agents in 6–12 weeks.";
const PAGE_PATH = "services/ai-agent-development/";
const PAGE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}${PAGE_PATH}`;
const SITE_BASE = "https://www.brilworks.com/";
const ABSOLUTE_URL = `${SITE_BASE}${PAGE_PATH}`;

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/og-ai-agent-development.webp`,
        width: 1200,
        height: 630,
        alt: "Brilworks AI Agent Development Services",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    card: "summary_large_image",
    site: "@_Brilworks",
    images: [
      `${process.env.NEXT_PUBLIC_BASE_URL}images/og-ai-agent-development.webp`,
    ],
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const Page = () => {
  const webPageJsonLd = generateWebPageSchema({
    title: TITLE,
    description: DESCRIPTION,
    url: ABSOLUTE_URL,
    dateModified: LAST_UPDATED,
  });

  const serviceJsonLd = generateServiceSchema({
    name: "AI Agent Development Services",
    description: DESCRIPTION,
    url: ABSOLUTE_URL,
    serviceType: "AI Agent Development",
  });

  const faqJsonLd = generateFaqPageSchema(AiAgentDevelopmentFAQData);

  const breadcrumbJsonLd = generateBreadcrumbList([
    { name: "Home", url: SITE_BASE },
    { name: "Services", url: `${SITE_BASE}services/` },
    { name: "AI Agent Development", url: ABSOLUTE_URL },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: webPageJsonLd }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serviceJsonLd }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <AiAgentDevelopmentService />
    </>
  );
};

export default Page;
