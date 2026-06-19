"use client";
import React from "react";
import CaseStudyLayout from "../CaseStudyLayout";

const SaasDataQualityCase = () => (
  <CaseStudyLayout
    kicker="Case Study · SaaS"
    title="Reducing bad data incidents by 90% for a growing SaaS company."
    subtitle="A B2B SaaS platform relied on analytics for product decisions, customer success, and executive reporting. As the company scaled, broken dashboards, missing records, and inconsistent metrics became a weekly occurrence. We built a data quality and observability layer that caught issues before they reached the business."
    heroImage="/images/v2/data_agent_hero.webp"
    proofBar={[
      { value: "90%", label: "Fewer bad data incidents", highlight: true },
      { value: "75%", label: "Faster issue detection", highlight: true },
      { value: "<15 min", label: "Mean time to identify failures" },
      { value: "8 hrs → <1 hr", label: "Average investigation time" },
    ]}
    situation={{
      heading: "Challenges",
      paragraphs: [
        "The company had invested heavily in analytics, but trust in the data was eroding. Teams spent more time validating numbers than acting on them, and every dashboard refresh came with uncertainty.",
        "Broken pipelines were discovered by executives. The first sign of a problem was often a Slack message from leadership asking why yesterday's revenue had dropped by 40%. In reality, a pipeline had failed overnight. Data engineers were finding out about issues after the business did.",
        "Nobody knew whether the data was right. Reports loaded successfully, but there was no way to know whether they were complete. Missing records, duplicate events, and schema changes frequently slipped through unnoticed and appeared in dashboards.",
        "Hours spent chasing the root cause. When an issue appeared, engineers manually traced data through ingestion, transformation, and reporting layers. A single investigation could consume half a day and involve multiple teams.",
        "Trust in analytics was falling. Customer success, product, and finance teams increasingly exported raw data into spreadsheets to verify metrics themselves. The company had analytics, but people didn't trust it.",
        "They didn't have a reporting problem. They had a confidence problem.",
      ],
    }}
    pullQuote="They didn't have a reporting problem. They had a confidence problem."
    whatWeBuilt={{
      heading: "What we built",
      items: [
        { title: "Data quality checks", body: "We implemented automated validation rules across critical datasets, including freshness checks, row-count monitoring, null-value detection, and anomaly detection." },
        { title: "Pipeline observability", body: "Every pipeline stage was instrumented with monitoring and alerting, making it immediately obvious where and why a failure occurred." },
        { title: "Schema change detection", body: "We added safeguards that automatically detected unexpected source changes before they could break downstream transformations and dashboards." },
        { title: "Incident response workflows", body: "Alerts were routed to the right teams with clear diagnostics, reducing investigation time and eliminating guesswork during incidents." },
      ],
    }}
    outcome={{
      heading: "The outcome",
      before: [
        { label: "Bad data incidents", value: "Multiple per week" },
        { label: "Issue detection", value: "Often discovered by users" },
        { label: "Investigation time", value: "6–8 hours" },
        { label: "Trust in reporting", value: "Low" },
      ],
      after: [
        { label: "Bad data incidents", value: "Reduced by 90%" },
        { label: "Issue detection", value: "Automated monitoring" },
        { label: "Investigation time", value: "<1 hour" },
        { label: "Trust in reporting", value: "High" },
      ],
      summary: "Instead of discovering problems through executive complaints, the team now identifies and resolves issues before they reach dashboards. Analysts spend their time analyzing data rather than validating it, and leadership has confidence in the numbers used to make decisions.",
    }}
    clientQuote={{
      text: "Before, every dashboard came with an asterisk. Now teams trust the data enough to make decisions without second-guessing it.",
      attribution: "Illustrative client quote",
    }}
    projectFacts={[
      { label: "Client", value: "B2B SaaS platform, anonymized" },
      { label: "Industry", value: "SaaS / Analytics" },
      { label: "Engagement", value: "Data quality & observability" },
      { label: "Approach", value: "Incremental rollout" },
      { label: "Stack", chips: ["dbt", "Snowflake", "Great Expectations", "PagerDuty", "Airflow"] },
    ]}
    ctaHeading="Finding out about data issues after your executives do?"
    ctaBody="We build data quality and observability layers that catch problems before they reach dashboards."
    ctaButton="Fix Your Data Quality"
  />
);

export default SaasDataQualityCase;
