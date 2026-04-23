import ComparisonPage from "@/app/components/Compare/ComparisonPage";
import { generateComparisonSchemas } from "@/app/components/lib/schemaCode";
import LastUpdated from "@/app/components/Common/LastUpdated";

const LAST_UPDATED = "2026-04-23";

const comparisonData = {
  title: "In-House vs Agency Development: What's Best for Your Team?",
  subtitle: "A practical comparison to help you decide between building an internal engineering team and partnering with a development agency.",
  description: "Hiring in-house developers gives you maximum control and cultural alignment. Partnering with an agency gives you speed, flexibility, and access to diverse expertise without long-term HR commitments. The right choice depends on your stage, budget, and how central software is to your business. Most growing companies use a hybrid approach.",
  optionA: { name: "Agency (Brilworks)" },
  optionB: { name: "In-House Team" },
  criteria: [
    {
      label: "Time to Hire",
      ratingA: 5,
      detailA: "Team onboarded in 1-2 weeks. Pre-vetted developers ready to contribute immediately.",
      ratingB: 2,
      detailB: "Average 3-6 months to hire a senior developer. Recruiting, interviewing, and onboarding take time.",
    },
    {
      label: "Cost (First Year)",
      ratingA: 5,
      detailA: "Dedicated developer from $2,500/mo. No benefits, equipment, office space, or HR overhead.",
      ratingB: 2,
      detailB: "Senior developer: $120K-200K salary + 30-40% benefits overhead. Total cost: $156K-280K/year.",
    },
    {
      label: "Cultural Alignment",
      ratingA: 3,
      detailA: "Remote collaboration with your tools and processes. Daily standups and Slack integration bridge the gap.",
      ratingB: 5,
      detailB: "Full immersion in company culture, values, and context. Better alignment on long-term vision.",
    },
    {
      label: "Skill Diversity",
      ratingA: 5,
      detailA: "Access to 100+ specialists across React, Node, AI/ML, AWS, mobile, and more. Switch expertise as needed.",
      ratingB: 3,
      detailB: "Limited to skills of current team members. Adding new expertise requires new hires.",
    },
    {
      label: "Scalability",
      ratingA: 5,
      detailA: "Scale up or down based on project needs. Add developers in weeks, reduce when workload decreases.",
      ratingB: 2,
      detailB: "Scaling up requires months of recruiting. Scaling down means layoffs — costly and disruptive.",
    },
    {
      label: "Knowledge Retention",
      ratingA: 3,
      detailA: "Knowledge documented and transferred. Risk of context loss if engagement ends, mitigated by documentation.",
      ratingB: 5,
      detailB: "Institutional knowledge stays in-house. Long-tenured employees deeply understand the codebase.",
    },
    {
      label: "Management Overhead",
      ratingA: 5,
      detailA: "Agency handles team management, performance reviews, and skill development. You focus on product direction.",
      ratingB: 2,
      detailB: "Requires engineering managers, 1:1s, career development plans, performance reviews, and HR processes.",
    },
    {
      label: "Long-Term Cost (3+ Years)",
      ratingA: 4,
      detailA: "Costs remain predictable and adjustable. No severance, no benefits inflation, no retention bonuses.",
      ratingB: 4,
      detailB: "Per-person cost may be lower long-term if retention is high. But turnover resets the investment.",
    },
  ],
  verdict: "Partner with an agency like Brilworks when you need to move fast, lack recruiting bandwidth, need specialized skills for a defined period, or want to supplement your core team. Build in-house when software is your core product, you need deep institutional knowledge, and you can invest the time and budget in recruiting and retention. The best approach is often hybrid: a small in-house core team augmented by agency expertise for scaling, specialized work, or parallel initiatives.",
  faqs: [
    {
      question: "Is agency development really cheaper than hiring in-house?",
      answer: "For the first 1-2 years, almost always yes. A senior developer costs $156K-280K/year fully loaded (salary + benefits + equipment + management overhead). A dedicated developer from Brilworks starts at $2,500/month ($30,000/year). The gap narrows over 3+ years if in-house retention is high, but agency costs remain more predictable.",
    },
    {
      question: "How do agency developers integrate with our existing team?",
      answer: "Brilworks developers join your Slack, attend your standups, use your Jira/GitHub, and follow your processes. They function as embedded team members, not external contractors. A dedicated PM coordinates delivery and communication.",
    },
    {
      question: "What if we want to transition from agency to in-house later?",
      answer: "Brilworks supports knowledge transfer and transition planning. They document architecture decisions, maintain clean codebases, and can overlap with incoming in-house hires to ensure smooth handoffs.",
    },
    {
      question: "Can we use both in-house and agency developers simultaneously?",
      answer: "Yes, this is the most common and effective model. Many companies maintain a small core in-house team for strategic decisions and institutional knowledge, while using agency developers for scaling, specialized features, or parallel workstreams.",
    },
    {
      question: "How does Brilworks handle timezone differences?",
      answer: "Brilworks offers flexible working hours with 4-6 hours of timezone overlap. Daily async updates, recorded standups, and structured handoffs ensure nothing falls through the cracks regardless of time difference.",
    },
  ],
};

export const metadata = {
  title: "In-House vs Agency Development: Complete Guide 2026 | Brilworks",
  description: "Should you hire in-house developers or partner with a development agency? Compare costs, speed, scalability, and team dynamics to decide.",
  openGraph: {
    title: "In-House vs Agency Development: What's Best for Your Team?",
    description: "Should you hire in-house developers or partner with a development agency? Compare costs, speed, scalability, and team dynamics.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}compare/in-house-vs-agency-development/`,
    siteName: "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "In-House vs Agency Development",
    description: "Should you hire in-house developers or partner with a development agency? Compare costs, speed, scalability, and team dynamics.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}compare/in-house-vs-agency-development/`,
  },
};

const page = () => {
  const schemas = generateComparisonSchemas({
    title: metadata.title,
    description: "Should you hire in-house developers or partner with a development agency? Compare costs, speed, scalability, and team dynamics.",
    url: "https://www.brilworks.com/compare/in-house-vs-agency-development/",
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
