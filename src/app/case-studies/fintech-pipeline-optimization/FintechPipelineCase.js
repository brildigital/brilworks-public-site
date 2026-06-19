"use client";

import React from "react";
import CaseStudyLayout from "../CaseStudyLayout";

const FintechPipelineCase = () => {
  return (
    <CaseStudyLayout
      kicker="Case Study · Fintech"
      title="Cutting a fintech's pipeline costs 60% while making it 4x faster."
      subtitle="A payments-analytics platform came to us to fix a slow nightly job. We rebuilt the pipeline underneath it instead, in stages, while it kept running."
      heroImage="/images/v2/data_engineering_hero.webp"
      proofBar={[
        { value: "60%", label: "Lower warehouse cost", highlight: true },
        { value: "4×", label: "Faster pipeline", highlight: true },
        { value: "~1.5 hrs", label: "Run time, from 6–8 hrs" },
        {
          value: "2–3 → ~1",
          label: "Off-hours pages, week to month",
        },
      ]}
      situation={{
        heading: "The situation",
        paragraphs: [
          "The client ran a payments analytics product. Their customers, mid-market merchants, logged in expecting yesterday’s transaction data, broken down by channel, region, and settlement status.",
          "The problem was that ‘yesterday’s data’ was arriving at 11 a.m. Sometimes 1 p.m. Some days it didn’t finish at all.",
          "The pipeline had been built fast, in the early days, to just work. Two years and 40x data growth later, it was a nightly batch job held together with cron and hope. One Airflow DAG, 300+ tasks, no real isolation between them. When one upstream file landed late, the whole run stalled, and the on-call engineer got paged two or three nights a week.",
          "They came to us with a narrow ask: make the nightly job finish on time. The real problem was bigger than that.",
        ],
      }}
      findings={{
        heading: "What we found",
        paragraphs: [
          "We spent the first week reading the pipeline, not rewriting it. Three things stood out.",
          "The job reprocessed everything, every night. Full table scans on data that hadn’t changed since the last run. Roughly 70% of the nightly compute went to recomputing results that were already correct.",
          "Costs tracked that waste directly. The warehouse bill had crossed $18K/month and was climbing with every new merchant onboarded. The unit economics were moving the wrong way.",
          "And there was no way to tell a real failure from a slow one. Late data and broken data looked identical to the system, so every delay got treated as a fire.",
        ],
      }}
      pullQuote="They came to us to fix a slow job. We fixed the reason it was slow."
      whatWeBuilt={{
        items: [
          {
            title: "Incremental processing",
            body: "We moved the core transformation layer to dbt with incremental models, so each run only touched data that had actually changed. This alone removed most of the nightly compute.",
          },
          {
            title: "Decoupled ingestion",
            body: "We split the monolithic DAG into independent ingestion and transformation stages, with a staging layer in between. A late file from one source no longer blocked the other fifteen.",
          },
          {
            title: "Partitioning and clustering",
            body: "Transaction tables were repartitioned by date and clustered by merchant, which cut query scan volume sharply for both the pipeline and the customer-facing dashboards reading off it.",
          },
          {
            title: "Data quality gates",
            body: "We added tests at each stage: row-count checks, freshness checks, schema validation. A genuine failure now surfaces as a specific, named alert instead of a stalled run at 2 a.m.",
          },
        ],
      }}
      outcome={{
        before: [
          { label: "Nightly run time", value: "6–8 hrs, often unfinished" },
          { label: "Warehouse cost", value: "~$18K / month" },
          { label: "Data ready for users", value: "11 a.m. – 1 p.m." },
          { label: "Off-hours pages", value: "2–3 per week" },
        ],
        after: [
          { label: "Nightly run time", value: "~1.5 hrs" },
          { label: "Warehouse cost", value: "~$7K / month" },
          { label: "Data ready for users", value: "By 6 a.m., consistently" },
          { label: "Off-hours pages", value: "~1 per month" },
        ],
        summary:
          "The data now lands before the customer’s workday starts instead of halfway through it. And the on-call engineer stopped getting woken up, so the team could spend daytime hours on the product instead of nursing the pipeline.",
      }}
      clientQuote={{
        text: "We asked them to fix a slow job. They fixed the reason it was slow. That’s the difference.",
        attribution: "Illustrative client quote",
      }}
      projectFacts={[
        { label: "Client", value: "US fintech, anonymized" },
        { label: "Industry", value: "Payments analytics" },
        { label: "Engagement", value: "Pipeline re-architecture" },
        { label: "Approach", value: "Staged, zero-downtime" },
        {
          label: "Stack",
          chips: ["dbt", "Snowflake", "Airflow", "Python", "AWS S3", "AWS ECS"],
        },
      ]}
      ctaHeading="Paying too much for a pipeline that's too slow?"
      ctaBody="That is exactly what our Cost-Optimization Audit finds. Fixed price, two to four weeks, and it usually pays for itself."
      ctaButton="Get a Cost Audit"
    />
  );
};

export default FintechPipelineCase;
