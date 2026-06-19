"use client";
import React from "react";
import CaseStudyLayout from "../CaseStudyLayout";

const CustomerDataPlatformCase = () => (
  <CaseStudyLayout
    kicker="Case Study · SaaS"
    title="Unifying customer data across 11 systems into a single source of truth."
    subtitle="A growing SaaS company had customer information scattered across sales, support, billing, product, and marketing platforms. Every department had its own version of the customer, and no one could confidently answer basic questions about account health, engagement, or revenue. We built a unified customer data platform that gave the entire company a shared view of every customer."
    heroImage="/images/v2/data_eng_hero_2.webp"
    proofBar={[
      { value: "11 → 1", label: "Systems consolidated", highlight: true },
      { value: "80%", label: "Faster customer insights", highlight: true },
      { value: "95%", label: "Reduction in manual reconciliation" },
      { value: "5+ hrs → <30 min", label: "Cross-team reporting requests" },
    ]}
    situation={{
      heading: "Challenges",
      paragraphs: [
        "The company had invested in best-in-class tools for each department, but none of them spoke the same language. As the business grew, customer data became increasingly fragmented.",
        "Every team had a different version of the customer. Sales tracked opportunities in the CRM. Support managed tickets in a help desk platform. Product teams analyzed usage data. Finance owned billing records. Each system held part of the story, but no system held the whole story.",
        "Reporting meetings turned into data debates. Leadership frequently received conflicting reports depending on which team generated them. Customer counts, expansion revenue, and account health metrics often differed across departments.",
        "Customer success lacked visibility. Account managers had no easy way to see product adoption, support history, billing status, and contract information in one place. Preparing for customer calls meant jumping between multiple systems.",
        "Manual data reconciliation consumed valuable time. Analysts spent hours combining exports from different platforms just to answer routine business questions. Every new report required custom work and manual validation.",
        "They didn't have a customer visibility problem. They had a data fragmentation problem.",
      ],
    }}
    pullQuote="They didn't have a customer visibility problem. They had a data fragmentation problem."
    whatWeBuilt={{
      heading: "What we built",
      items: [
        {
          title: "Unified customer model",
          body: "We designed a centralized customer model that connected records across CRM, billing, support, product analytics, marketing automation, and operational systems.",
        },
        {
          title: "Identity resolution",
          body: "Customer records were matched and standardized across platforms, eliminating duplicate accounts and conflicting identifiers.",
        },
        {
          title: "Automated data pipelines",
          body: "We built automated ingestion and transformation workflows that continuously synchronized customer information from all source systems.",
        },
        {
          title: "Business-ready analytics layer",
          body: "The unified data was exposed through dashboards and reporting models, giving every team access to consistent customer metrics and account-level insights.",
        },
      ],
    }}
    outcome={{
      heading: "The outcome",
      before: [
        { label: "Customer systems", value: "11 disconnected platforms" },
        { label: "Customer lookup", value: "Multiple tools and exports" },
        { label: "Reporting consistency", value: "Frequently disputed" },
        { label: "Report preparation", value: "Several hours" },
      ],
      after: [
        { label: "Customer systems", value: "1 unified platform" },
        { label: "Customer lookup", value: "Single customer view" },
        { label: "Reporting consistency", value: "Shared business definitions" },
        { label: "Report preparation", value: "Minutes" },
      ],
      summary:
        "Teams can now view customer activity, support interactions, product adoption, contract information, and revenue metrics from a single source. Instead of spending time reconciling data, they spend time improving customer outcomes and growing accounts.",
    }}
    clientQuote={{
      text: "We finally stopped arguing about whose numbers were correct. Everyone is looking at the same customer, the same metrics, and the same reality.",
      attribution: "Illustrative client quote",
    }}
    projectFacts={[
      { label: "Client", value: "B2B SaaS company, anonymized" },
      { label: "Industry", value: "SaaS / Customer Data" },
      { label: "Engagement", value: "Customer data platform" },
      { label: "Approach", value: "Phased unification" },
      {
        label: "Stack",
        chips: [
          "Snowflake",
          "dbt",
          "Fivetran",
          "Looker",
          "Python",
          "Airflow",
        ],
      },
    ]}
    ctaHeading="Customer data scattered across too many systems?"
    ctaBody="We build unified customer platforms that give every team the same view of every customer."
    ctaButton="Unify Your Data"
  />
);

export default CustomerDataPlatformCase;
