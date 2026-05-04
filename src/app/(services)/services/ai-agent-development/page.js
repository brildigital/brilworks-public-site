import AiAgentDevelopmentService from "@/app/components/Services/AiAgentDevelopmentService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import {
  generateBreadcrumb,
  generateFaqPageSchema,
  generateServiceSchema,
  generateWebPageSchema,
} from "@/app/components/lib/schemaCode";
import { faqsByPathname } from "@/data/serviceFaqs";

const LAST_UPDATED = "2026-05-04";
const PAGE_PATH = "services/ai-agent-development/";
const TITLE =
  "AI Agent Development Services for Enterprise Teams | Brilworks";
const DESCRIPTION =
  "Brilworks designs, builds, and deploys custom AI agents for enterprise operations, sales, and support teams. Production-ready agents in 6–12 weeks.";
const OG_TITLE = "AI Agent Development Services | Brilworks";
const OG_DESCRIPTION =
  "Custom AI agents that do real work in production — not demos. Discovery, build, integration, and ongoing improvement for enterprise teams.";

const pageUrl = () => `${process.env.NEXT_PUBLIC_BASE_URL}${PAGE_PATH}`;
const ogImageUrl = () =>
  `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/ai-model-fine-tuning.webp`;

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: pageUrl(),
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [{ url: ogImageUrl() }],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: pageUrl(),
  },
};

const Page = () => {
  const faqs = faqsByPathname["/services/ai-agent-development/"] || [];

  const webPageSchema = generateWebPageSchema({
    title: TITLE,
    description: DESCRIPTION,
    url: pageUrl(),
    dateModified: LAST_UPDATED,
  });

  const serviceSchema = generateServiceSchema({
    name: "AI Agent Development Services",
    description: DESCRIPTION,
    url: pageUrl(),
    serviceType: "AI Agent Development",
  });

  const faqPageSchema = generateFaqPageSchema(faqs);

  const breadcrumbSchema = generateBreadcrumb("AI Agent Development Services");

  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: webPageSchema }}
      />
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serviceSchema }}
      />
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqPageSchema }}
      />
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <AiAgentDevelopmentService />
    </>
  );
};

export default Page;
