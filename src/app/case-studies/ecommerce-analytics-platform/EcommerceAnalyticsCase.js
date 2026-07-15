"use client";
import React from "react";
import CaseStudyLayout from "../CaseStudyLayout";

const EcommerceAnalyticsCase = () => (
  <CaseStudyLayout
    light
    kicker="Case Study · E-commerce"
    title="Reducing reporting delays from days to minutes for retailer."
    subtitle="An omnichannel retailer had data spread across Shopify, Amazon, Meta Ads, Google Ads, and its ERP system. Leadership spent more time debating numbers than making decisions. We built a centralized analytics platform that gave every team the same answers."
    proofBar={[
      { value: "85%", label: "Less reporting time", highlight: true },
      { value: "5×", label: "Faster dashboard performance", highlight: true },
      { value: "20+", label: "Hours saved weekly" },
      { value: "12 → 1", label: "Data sources consolidated" },
    ]}
    situation={{
      heading: "Challenges",
      paragraphs: [
        "The company had grown quickly, but its reporting stack had not. Every team had built its own workflows, definitions, and spreadsheets. As revenue increased, confidence in the data decreased.",
        "Nobody trusted the numbers. Marketing reported one revenue figure. Finance reported another. Operations had a third. Every leadership meeting started with thirty minutes spent arguing over which dashboard was correct.",
        "Weekly reporting consumed entire workdays. Two analysts spent most Mondays downloading CSV exports, cleaning spreadsheets, and manually updating reports. A process that should have taken minutes consumed nearly a full day every week.",
        "Dashboards slowed down as the business grew. As transaction volume increased, dashboards that once loaded instantly started taking thirty seconds or more. Teams stopped using them because getting answers felt slower than asking someone else.",
        "Every new integration created more chaos. Adding a new sales channel meant another custom workflow, another spreadsheet, and another opportunity for numbers to drift apart.",
        "They didn't have a reporting problem. They had a data foundation problem.",
      ],
    }}
    pullQuote="They didn't have a reporting problem. They had a data foundation problem."
    whatWeBuilt={{
      heading: "What we built",
      items: [
        {
          title: "Centralized warehouse",
          body: "We consolidated data from e-commerce, advertising, finance, and operations systems into a single warehouse with standardized business definitions.",
        },
        {
          title: "Automated ingestion",
          body: "Manual exports were replaced with automated pipelines that continuously synchronized data from every source.",
        },
        {
          title: "Transformation layer",
          body: "We implemented a structured modeling layer so revenue, orders, customers, and marketing metrics were calculated consistently everywhere.",
        },
        {
          title: "Performance optimization",
          body: "High-usage datasets were partitioned and optimized for analytics workloads, dramatically reducing dashboard query times.",
        },
      ],
    }}
    outcome={{
      heading: "The outcome",
      before: [
        { label: "Reporting cycle", value: "6–8 hours weekly" },
        { label: "Dashboard load time", value: "20–30 seconds" },
        { label: "Data sources", value: "12 disconnected systems" },
        { label: "Confidence in reporting", value: "Low" },
      ],
      after: [
        { label: "Reporting cycle", value: "< 1 hour weekly" },
        { label: "Dashboard load time", value: "3–5 seconds" },
        { label: "Data sources", value: "1 unified platform" },
        { label: "Confidence in reporting", value: "Single source of truth" },
      ],
      summary:
        "Leadership meetings shifted from debating numbers to acting on them. Analysts stopped spending their mornings cleaning spreadsheets and started spending their time finding opportunities in the data.",
    }}
    clientQuote={{
      text: "Within weeks, every team was finally looking at the same numbers. The conversations changed completely.",
      attribution: "Illustrative client quote",
    }}
    projectFacts={[
      { label: "Client", value: "Omnichannel retailer, anonymized" },
      { label: "Industry", value: "E-commerce / Retail" },
      { label: "Engagement", value: "Analytics platform build" },
      { label: "Approach", value: "Phased consolidation" },
      {
        label: "Stack",
        chips: ["Snowflake", "dbt", "Fivetran", "Looker", "Airflow"],
      },
    ]}
    ctaHeading="Spending more time debating numbers than acting on them?"
    ctaBody="We build analytics platforms that give every team the same answers. One source of truth, from day one."
    ctaButton="Talk to Us"
  />
);

export default EcommerceAnalyticsCase;
