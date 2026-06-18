"use client";
import React from "react";
import Heading from "../components/HTMLComponents/Heading";
import ButtonV2 from "../components/Common/ButtonV2";
import GradientFAQAccordion from "../components/Common/GradientFAQAccordion";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  Brain,
  Shuffle,
  Activity,
  GitCompare,
  CheckCircle,
  Star,
} from "lucide-react";

const tools = [
  {
    title: "Snowflake Cost Calculator",
    description:
      "Enter warehouse size, hours/day, and team count. Get estimated monthly Snowflake spend and projected waste — with a teardown offer at the end.",
    icon: Calculator,
    color: "from-blue-500 to-cyan-500",
    link: "/data-engineering-tools/snowflake-cost-calculator/",
    keyword: "snowflake cost calculator",
    tags: ["SNOWFLAKE", "COST"],
  },
  {
    title: "Databricks Cost Calculator",
    description:
      "Enter cluster type, hours/day, and workload details. Get estimated monthly Databricks spend and optimization opportunities.",
    icon: Calculator,
    color: "from-red-500 to-orange-500",
    link: "/data-engineering-tools/databricks-cost-calculator/",
    keyword: "databricks cost calculator",
    tags: ["DATABRICKS", "COST"],
  },
  {
    title: "AI Readiness Audit",
    description:
      "10 questions about data quality, pipeline monitoring, and definitions. Get a score out of 100 with a breakdown of what's blocking AI initiatives.",
    icon: Brain,
    color: "from-emerald-500 to-teal-500",
    link: "/data-engineering-tools/ai-readiness-audit/",
    keyword: "AI readiness assessment",
    tags: ["AI", "DATA QUALITY"],
  },
  {
    title: "Data Migration Cost Calculator",
    description:
      "Select current stack (Teradata, SQL Server, Hadoop), data volume, and team size. Get a complexity rating, rough timeline, and common failure risks.",
    icon: Shuffle,
    color: "from-orange-500 to-amber-500",
    link: "/data-engineering-tools/data-migration-cost-calculator/",
    keyword: "data migration calculator",
    tags: ["MIGRATION", "PLANNING"],
  },
  {
    title: "Data Quality Assessment",
    description:
      "8 yes/no questions about monitoring, SLAs, alerting, and documentation. Get a pipeline health score and top 3 risks to production stability.",
    icon: Activity,
    color: "from-purple-500 to-violet-500",
    link: "/data-engineering-tools/data-quality-assessment/",
    keyword: "data pipeline monitoring checklist",
    tags: ["PIPELINE", "MONITORING"],
  },
  {
    title: "Snowflake vs Databricks Advisor",
    description:
      "Answer 6 questions about workload type, team skills, and use case. Get a recommendation with reasoning — and a next step if you need help implementing.",
    icon: GitCompare,
    color: "from-pink-500 to-rose-500",
    link: "/data-engineering-tools/snowflake-vs-databricks-advisor/",
    keyword: "snowflake vs databricks comparison",
    tags: ["SNOWFLAKE", "DATABRICKS"],
  },
];

const stats = [
  { value: "6", label: "Free Tools" },
  { value: "2 min", label: "Average Completion" },
  { value: "100%", label: "Free Forever" },
];

const DataEngineeringTools = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-navyBlue relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(26,92,204,0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(0,180,216,0.08) 0%, transparent 60%)",
          }}
        />

        <div className="container max-w-[1280px] mx-auto md:px-10 px-5 relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
          <span className="inline-flex items-center gap-2 bg-[rgba(26,92,204,0.15)] border border-[rgba(26,92,204,0.3)] rounded-full px-3.5 py-1.5 text-[#00b4d8] text-xs font-semibold tracking-widest uppercase mb-7">
            <Star className="w-3.5 h-3.5" />
            FREE TOOLS &mdash; NO SIGNUP REQUIRED
          </span>

          <Heading
            type="h1"
            className="text-white !font-extrabold max-w-[720px]"
            text="Free Tools for Data Engineering Teams"
          />

          <p className="text-gray-400 lg:text-lg md:text-base text-base !mt-6 max-w-[600px] leading-relaxed">
            Calculate your cloud data spend, score your AI readiness, and
            estimate migration complexity &mdash; all in minutes, with zero
            friction.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <ButtonV2
              redirect="/contact-us/"
              label="Book a Free Consultation"
              className="hover:!text-colorWhite"
              icon={<ArrowRight className="w-4 h-4" />}
            />
            <a
              href="#all-tools"
              className="c-button c-btn-medium outline-none overflow-hidden whitespace-nowrap transition-all duration-300 border border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("all-tools")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Browse All Tools
            </a>
          </div>

          <div className="flex flex-wrap gap-5 mt-10 pt-6 border-t border-white/10">
            {[
              "No account required",
              "100% free, forever",
              "Instant results",
              "Built for Snowflake & Databricks teams",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-white/50 text-sm font-medium"
              >
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10 mt-10">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/[0.03] p-5 text-center">
                <div className="text-2xl md:text-[28px] font-extrabold bg-gradient-to-r from-themeColor to-accent bg-clip-text text-transparent pb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5 py-3">
          <nav className="text-sm text-gray-400" aria-label="Breadcrumb">
            <Link href="/" className="text-themeColor hover:underline">
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <span className="text-gray-600 font-medium">
              Data Engineering Tools
            </span>
          </nav>
        </div>
      </div>

      {/* Tools Grid */}
      <section id="all-tools" className="bg-white py-16 md:py-20">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          <div className="text-center mb-12">
            <Heading
              type="h2"
              className="!font-extrabold text-gray-900"
              text="Pick a Tool and Get Started"
            />
            <p className="text-[17px] text-gray-500 mt-3 max-w-2xl mx-auto">
              Each tool takes under 2 minutes. Get instant, actionable results
              &mdash; no email required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  href={tool.link}
                  key={tool.link}
                  className="group flex flex-col text-left rounded-xl border-2 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-gray-200 hover:border-themeColor/30"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-navyBlue mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {tool.description}
                  </p>
                  {tool.tags && (
                    <div className="mt-4">
                      {tool.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block bg-gray-100 text-gray-600 text-xs font-medium mr-2 px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center justify-end mt-4">
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 group-hover:text-themeColor transition-colors">
                      Start <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-navyBlue py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 80% at 50% 50%, rgba(26,92,204,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5 text-center relative z-10">
          <Heading
            type="h2"
            className="text-white !font-extrabold mb-3"
            text="Need Help With Your Data Platform?"
          />
          <p className="text-white/50 text-base mb-0 max-w-[576px] mx-auto">
            Our data engineering team has helped 50+ companies optimize their
            Snowflake and Databricks environments. Let&apos;s talk about your
            results.
          </p>
          <div className="flex justify-center gap-4 flex-wrap mt-8">
            <ButtonV2
              redirect="/contact-us/"
              label="Book Free Consultation"
              className="hover:!text-colorWhite"
            />
            {/* <Link
              href="/data-engineering/"
              className="c-button c-btn-medium outline-none overflow-hidden whitespace-nowrap transition-all duration-300 border border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              Our Data Engineering Services
            </Link> */}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24" style={{ background: "#f8f9ff" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#017eeb",
              }}
            >
              Common Questions
            </span>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
                color: "#0d0f1a",
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mx-auto" style={{ maxWidth: 860 }}>
            {[
              {
                q: "Are these data engineering tools free to use?",
                a: "Yes. All of our data engineering tools are completely free and do not require a subscription. You can estimate costs, compare platforms, and assess your data readiness without creating an account.",
              },
              {
                q: "Who are these tools designed for?",
                a: "These tools are built for data engineers, analytics engineers, solution architects, CTOs, engineering managers, and technical leaders who are planning cloud migrations, optimizing data platforms, or evaluating AI initiatives.",
              },
              {
                q: "How accurate are the results?",
                a: "The results are designed to provide practical planning estimates based on the information you enter. While they should not replace a detailed technical assessment, they offer a reliable starting point for budgeting, planning, and technology decisions.",
              },
              {
                q: "Do I need to sign up to use these tools?",
                a: "No. Every tool can be used instantly without registration. Simply enter your information, receive your results, and explore recommendations in minutes.",
              },
              {
                q: "Which tools are available?",
                a: "Our collection includes a Snowflake Cost Calculator, Databricks Cost Calculator, AI Readiness Audit, Data Migration Cost Estimator, Data Quality Assessment, and a Snowflake vs Databricks Advisor. We regularly add new tools to help engineering teams make better technology decisions.",
              },
              {
                q: "Can these tools help me choose the right data platform?",
                a: "Yes. The tools are designed to simplify common data engineering decisions, including estimating cloud costs, comparing platforms, assessing AI readiness, evaluating data quality, and planning migration projects.",
              },
            ].map((item, i) => (
              <GradientFAQAccordion
                key={i + 1}
                id={`de-faq-${i + 1}`}
                question={item.q}
                answer={item.a}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DataEngineeringTools;
