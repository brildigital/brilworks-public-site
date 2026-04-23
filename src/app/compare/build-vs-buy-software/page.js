import ComparisonPage from "@/app/components/Compare/ComparisonPage";
import { generateComparisonSchemas } from "@/app/components/lib/schemaCode";
import LastUpdated from "@/app/components/Common/LastUpdated";

const LAST_UPDATED = "2026-04-23";

const comparisonData = {
  title: "Build vs Buy Software: Making the Right Decision",
  subtitle: "A framework for deciding whether to build custom software or purchase an off-the-shelf solution.",
  description: "The build vs buy decision is one of the most consequential choices a business makes. Building gives you complete control and competitive differentiation. Buying gives you speed and proven reliability. Neither option is universally better — the right choice depends on how central the software is to your competitive advantage, your budget, and your timeline.",
  optionA: { name: "Build Custom" },
  optionB: { name: "Buy Off-the-Shelf" },
  criteria: [
    {
      label: "Competitive Advantage",
      ratingA: 5,
      detailA: "Unique software tailored to your exact workflow. Becomes a moat competitors cannot easily replicate.",
      ratingB: 2,
      detailB: "Same tool available to competitors. Differentiation comes from how you use it, not the tool itself.",
    },
    {
      label: "Time to Market",
      ratingA: 2,
      detailA: "Custom development takes 2-6 months for MVP. Full product may take 6-12+ months depending on scope.",
      ratingB: 5,
      detailB: "Deploy within days or weeks. Immediate access to features with minimal configuration.",
    },
    {
      label: "Total Cost (3 Years)",
      ratingA: 4,
      detailA: "Higher upfront investment ($10K-200K+), but no recurring license fees. Cost decreases over time.",
      ratingB: 3,
      detailB: "Low upfront cost, but subscription fees compound. Enterprise licenses can reach $50K-500K+/year.",
    },
    {
      label: "Customization",
      ratingA: 5,
      detailA: "Unlimited customization. Every feature built to match your exact requirements and workflow.",
      ratingB: 2,
      detailB: "Limited to vendor's configuration options. Custom workflows may require expensive add-ons or workarounds.",
    },
    {
      label: "Maintenance Burden",
      ratingA: 3,
      detailA: "You own maintenance, updates, and security patches. Requires ongoing dev resources or a support contract.",
      ratingB: 5,
      detailB: "Vendor handles updates, security, and infrastructure. Maintenance is included in subscription.",
    },
    {
      label: "Integration Flexibility",
      ratingA: 5,
      detailA: "Build exactly the integrations you need. Full API control and data flow customization.",
      ratingB: 3,
      detailB: "Pre-built integrations for popular tools. Custom integrations may be limited or require middleware.",
    },
    {
      label: "Data Ownership",
      ratingA: 5,
      detailA: "Complete ownership and control of your data. Store it where you want, how you want.",
      ratingB: 3,
      detailB: "Data stored on vendor servers. Export options vary. Vendor lock-in can make migration difficult.",
    },
    {
      label: "Risk",
      ratingA: 3,
      detailA: "Development risk: budget overruns, scope creep, technical debt if poorly managed.",
      ratingB: 4,
      detailB: "Lower development risk, but vendor risk: price increases, feature changes, acquisition, or shutdown.",
    },
  ],
  verdict: "Build custom software when the application is core to your competitive advantage, your workflows are unique, or off-the-shelf tools require too many workarounds. Buy when the software is a commodity (CRM, email, accounting), speed matters more than differentiation, or you lack internal technical capacity. Many successful companies do both — buying commodity tools and building what makes them unique.",
  faqs: [
    {
      question: "When should I definitely build custom software?",
      answer: "Build when the software is your product, when it directly creates competitive advantage, when off-the-shelf options require 50%+ customization to fit your workflow, or when data sovereignty and security requirements cannot be met by SaaS vendors.",
    },
    {
      question: "When should I definitely buy off-the-shelf?",
      answer: "Buy when the function is commoditized (email, CRM, accounting), when you need it running in days not months, when the vendor's roadmap aligns with your needs, or when you don't have technical staff to maintain custom software.",
    },
    {
      question: "How much does custom software development cost?",
      answer: "Custom software costs range widely based on complexity. MVPs typically start at $5,000-$15,000, mid-complexity applications run $30,000-$100,000, and enterprise-grade systems can exceed $200,000. Brilworks offers transparent pricing and scopes projects individually.",
    },
    {
      question: "Can I start with off-the-shelf and switch to custom later?",
      answer: "Yes, this is a common and valid strategy. Many businesses start with SaaS tools to validate their model, then build custom software once they understand their exact requirements and have the budget to invest.",
    },
    {
      question: "How does Brilworks help with the build vs buy decision?",
      answer: "Brilworks offers free consultations to evaluate your specific situation. They assess your requirements, compare them against available tools, and provide an honest recommendation — including cases where buying makes more sense than building.",
    },
  ],
};

export const metadata = {
  title: "Build vs Buy Software: Decision Framework for 2026 | Brilworks",
  description: "Should you build custom software or buy off-the-shelf? Compare costs, timelines, customization, and risk to make the right decision for your business.",
  openGraph: {
    title: "Build vs Buy Software: Making the Right Decision",
    description: "Should you build custom software or buy off-the-shelf? Compare costs, timelines, customization, and risk.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}compare/build-vs-buy-software/`,
    siteName: "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Build vs Buy Software: Decision Framework",
    description: "Should you build custom software or buy off-the-shelf? Compare costs, timelines, customization, and risk.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}compare/build-vs-buy-software/`,
  },
};

const page = () => {
  const schemas = generateComparisonSchemas({
    title: metadata.title,
    description: "Should you build custom software or buy off-the-shelf? Compare costs, timelines, customization, and risk.",
    url: "https://www.brilworks.com/compare/build-vs-buy-software/",
    faqs: comparisonData.faqs,
    dateModified: LAST_UPDATED,
  });

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      ))}
      <LastUpdated date={LAST_UPDATED} />
      <ComparisonPage data={comparisonData} />
    </>
  );
};

export default page;
