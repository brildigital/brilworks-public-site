"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import ServiceHeroSection from "./ServiceHeroSection";
import Heading from "../HTMLComponents/Heading";

const Honors = dynamic(() => import("../Homepage/Honors"));
const ServicesSection = dynamic(() => import("../Common/ServicesSection"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const CTASection = dynamic(() => import("../Common/CTASection"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const SolutionContactForm = dynamic(() =>
  import("../Solution/SolutionContactForm"),
);
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const CONTACT_BASE = "/contact-us/";
const UTM_BASE =
  "utm_source=site&utm_medium=service-page&utm_campaign=agentic-ai-software-development";
const ctaUrl = (slot) => `${CONTACT_BASE}?${UTM_BASE}&utm_content=${slot}`;

const AgenticAISoftwareDevelopmentService = () => {
  const whatWeBuild = {
    title: "What we build",
    desc: "Brilworks delivers four categories of agentic AI software, in this order of demand.",
    servicesList: [
      {
        title: "Agentic AI code assistants",
        value: "agentic-1",
        description:
          "Production-grade coding agents that work inside your codebase — reading the repo, running tests, writing PRs, and respecting your team's conventions. Built on Claude Code, Cursor, or a custom orchestration layer depending on your stack and security posture.",
        icon: "🤖",
      },
      {
        title: "Agentic AI developer tools and platforms",
        value: "agentic-2",
        description:
          "Internal developer platforms (IDPs) and CLI tools where the user is an engineer and the agent does meaningful engineering work — refactors, migrations, code review, incident response, on-call triage. Often delivered as a custom MCP server plus a thin UI on top of your existing stack.",
        icon: "🛠️",
      },
      {
        title: "Autonomous workflow agents",
        value: "agentic-3",
        description:
          "Multi-step agents that operate in production: data pipelines that recover themselves, support agents that resolve tickets end-to-end, sales agents that draft and dispatch outreach, research agents that compile briefs from internal + external sources. Usually one agent per workflow, not one mega-agent for everything.",
        icon: "⚙️",
      },
      {
        title: "Custom agentic AI development services",
        value: "agentic-4",
        description:
          "When the four standard shapes above don't fit — regulated industries, novel data, unusual deployment constraints — we design from scratch. Discovery → architecture → POC → production. No off-the-shelf platform mandate.",
        icon: "✨",
      },
    ],
  };

  const techStack = [
    {
      layer: "Models",
      tools:
        "Anthropic Claude (Sonnet, Opus), OpenAI GPT-4 family, Amazon Bedrock-hosted models (Claude, Llama, Titan), Azure OpenAI",
    },
    {
      layer: "Coding agents",
      tools:
        "Claude Code, Cursor, Windsurf, GitHub Copilot Workspace, Continue, Aider",
    },
    {
      layer: "Orchestration",
      tools:
        "LangGraph, custom Python/TypeScript orchestrators, our internal agent framework, Claude SDK",
    },
    {
      layer: "Tooling layer",
      tools:
        "Custom MCP servers, function-calling integrations, retrieval (pgvector, Pinecone, Weaviate), browser automation",
    },
    {
      layer: "Infra",
      tools: "AWS Bedrock, Azure, GCP Vertex, on-prem inference for regulated workloads",
    },
    {
      layer: "Observability",
      tools: "LangSmith, Helicone, Arize, custom OpenTelemetry traces",
    },
  ];

  const phases = [
    {
      phase: "1. Discovery",
      duration: "1–2 weeks",
      deliverables:
        "Workflow audit, agent architecture, build-vs-buy recommendation, success metrics, fixed-fee scope for phase 2",
    },
    {
      phase: "2. POC",
      duration: "3–6 weeks",
      deliverables:
        "Working agent in a sandboxed environment, evaluation harness, go/no-go report against the phase-1 metrics",
    },
    {
      phase: "3. Production",
      duration: "8–12 weeks",
      deliverables:
        "Hardened deployment, observability, eval suite, rollout plan, runbooks, integration with your auth/security/CI",
    },
    {
      phase: "4. Enablement",
      duration: "Ongoing (retainer)",
      deliverables:
        "Iteration, agent quality monitoring, prompt and tool updates, team training, SLA-backed support",
    },
  ];

  return (
    <>
      <ServiceHeroSection
        pageTitleText="Agentic AI Software Development"
        title="Agentic AI Software Development for Engineering Teams"
        description="Brilworks builds, deploys, and operates agentic AI software inside the codebases and engineering teams of mid-market and enterprise companies. Code assistants, developer tools, autonomous workflow agents — engineered to ship, not demo."
        buttonText="Book a 30-minute discovery call"
        buttonUrl={ctaUrl("hero-cta")}
        imageSrc="/images/generative-ai-banner.webp"
      />

      <Honors />

      {/* What it means */}
      <section className="bg-white">
        <div className="container max-w-[1080px] main-section-padding mx-auto reveal">
          <Heading
            type="h2"
            className="text-colorBlack lg:!text-[34px] md:!text-3xl !text-2xl"
            text={`What "agentic AI software development" actually means`}
          />
          <p className="md:text-lg text-base md:!mt-5 !mt-3">
            Most &quot;AI&quot; projects are still single-shot: a model gets a
            prompt, returns text, and a human decides what to do next.{" "}
            <strong>
              Agentic AI software development is a different problem.
            </strong>{" "}
            You are building a system that <em>plans</em>, <em>uses tools</em>,
            and <em>acts</em> across multiple steps — usually inside a real
            codebase, on real data, against a real engineering workflow.
          </p>
          <p className="md:text-lg text-base md:!mt-5 !mt-3">
            Three properties separate it from traditional AI/ML or chatbot work:
          </p>
          <ul className="md:text-lg text-base md:!mt-3 !mt-2 list-disc pl-5 space-y-2">
            <li>
              <strong>Autonomy.</strong> The system decides which step comes
              next, not the user.
            </li>
            <li>
              <strong>Tool use.</strong> The agent reads files, runs commands,
              queries APIs, and writes code — not just text.
            </li>
            <li>
              <strong>Multi-step planning.</strong> It composes a plan, executes
              it, observes the result, and re-plans if reality disagrees.
            </li>
          </ul>
          <p className="md:text-lg text-base md:!mt-5 !mt-3">
            Done well, this collapses days of routine engineering work into
            minutes. Done poorly, it produces confident-looking output that
            breaks production. The difference is engineering discipline, not
            model choice.
          </p>
        </div>
      </section>

      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="agentic-what-we-build"
        serviceData={whatWeBuild}
      />

      {/* Tech stack */}
      <section className="bg-white">
        <div className="container max-w-[1280px] main-section-padding mx-auto reveal">
          <Heading
            type="h2"
            className="text-colorBlack lg:!text-[34px] md:!text-3xl !text-2xl"
            text="Tech stack we work with"
          />
          <p className="md:text-lg text-base md:!mt-3 !mt-2">
            We are intentionally tool-agnostic. Pick what survives your security
            review and your three-year roadmap.
          </p>
          <div className="overflow-x-auto md:!mt-7.5 !mt-5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-themeLight">
                  <th className="md:p-4 p-3 border border-borderGray font-semibold w-1/4">
                    Layer
                  </th>
                  <th className="md:p-4 p-3 border border-borderGray font-semibold">
                    What we use
                  </th>
                </tr>
              </thead>
              <tbody>
                {techStack.map((row) => (
                  <tr key={row.layer} className="align-top">
                    <td className="md:p-4 p-3 border border-borderGray font-semibold">
                      {row.layer}
                    </td>
                    <td className="md:p-4 p-3 border border-borderGray">
                      {row.tools}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="md:text-base text-sm md:!mt-5 !mt-3 text-[#6b7280]">
            If you&rsquo;ve already standardized on a stack, we engineer inside
            it. If you haven&rsquo;t, we&rsquo;ll recommend one and tell you the
            tradeoffs.
          </p>
        </div>
      </section>

      {/* Who this is for */}
      <section className="bg-themeLight">
        <div className="container max-w-[1080px] main-section-padding mx-auto reveal">
          <Heading
            type="h2"
            className="text-colorBlack lg:!text-[34px] md:!text-3xl !text-2xl"
            text="Who this is for"
          />
          <p className="md:text-lg text-base md:!mt-3 !mt-2">
            Enterprise agentic AI development engagements at Brilworks tend to
            come from:
          </p>
          <ul className="md:text-lg text-base md:!mt-3 !mt-2 list-disc pl-5 space-y-2">
            <li>
              Engineering leaders who&rsquo;ve watched their devs get 30–50%
              faster with Claude Code and want that institutionalized, not
              folklore.
            </li>
            <li>
              Product teams whose &quot;AI feature&quot; has crossed from
              prompt-and-display into multi-step autonomy — and who realized RAG
              isn&rsquo;t enough.
            </li>
            <li>
              CTOs who need a build partner that signs an NDA, works in their
              repo, and respects their security review — not a SaaS pilot that
              ships to nowhere.
            </li>
          </ul>
          <p className="md:text-lg text-base md:!mt-5 !mt-3">
            We are not the right fit if you want a single chatbot demo, a
            generic ChatGPT integration, or a vendor-marketing case study with
            no engineering follow-through.
          </p>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-white">
        <div className="container max-w-[1280px] main-section-padding mx-auto reveal">
          <Heading
            type="h2"
            className="text-colorBlack lg:!text-[34px] md:!text-3xl !text-2xl"
            text="How we work"
          />
          <p className="md:text-lg text-base md:!mt-3 !mt-2">
            A typical agentic AI for developers engagement runs four phases.
            Pricing and scope are set per phase, so you can stop after any one
            of them.
          </p>
          <div className="overflow-x-auto md:!mt-7.5 !mt-5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-themeLight">
                  <th className="md:p-4 p-3 border border-borderGray font-semibold w-1/5">
                    Phase
                  </th>
                  <th className="md:p-4 p-3 border border-borderGray font-semibold w-1/5">
                    Duration
                  </th>
                  <th className="md:p-4 p-3 border border-borderGray font-semibold">
                    Deliverables
                  </th>
                </tr>
              </thead>
              <tbody>
                {phases.map((row) => (
                  <tr key={row.phase} className="align-top">
                    <td className="md:p-4 p-3 border border-borderGray font-semibold">
                      {row.phase}
                    </td>
                    <td className="md:p-4 p-3 border border-borderGray">
                      {row.duration}
                    </td>
                    <td className="md:p-4 p-3 border border-borderGray">
                      {row.deliverables}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="md:text-base text-sm md:!mt-5 !mt-3 text-[#6b7280]">
            We default to fixed-fee for phases 1–3 and retainer for phase 4.
            Time-and-materials available for novel scope.
          </p>
        </div>
      </section>

      {/* Proof */}
      <section className="bg-themeLight">
        <div className="container max-w-[1080px] main-section-padding mx-auto reveal">
          <Heading
            type="h2"
            className="text-colorBlack lg:!text-[34px] md:!text-3xl !text-2xl"
            text="Proof"
          />
          <p className="md:text-lg text-base md:!mt-3 !mt-2">
            Brilworks&rsquo;s agentic AI software development practice grew out
            of the same engineering team that publishes{" "}
            <Link
              href="/blog/agentic-ai-software-development/"
              className="text-themeColor underline"
            >
              the deeper write-up on agentic AI software development
            </Link>{" "}
            (which currently ranks for{" "}
            <code>agentic ai code assistant</code>,{" "}
            <code>agentic ai developer tools 2026</code>, and{" "}
            <code>agentic ai for beginners</code>).
          </p>
          <p className="md:text-lg text-base md:!mt-5 !mt-3">
            We&rsquo;ve shipped agentic AI code assistants into two client
            codebases:
          </p>
          <ul className="md:text-lg text-base md:!mt-3 !mt-2 list-disc pl-5 space-y-2">
            <li>
              <strong>EventCo</strong> — eventtech SaaS. Claude Code rollout
              across the engineering team, custom agent design, and team
              enablement. Result: roughly 2x coding velocity on the targeted
              workstream.
            </li>
            <li>
              <strong>TrackerCo</strong> — IoT and asset-tracking platform. Same
              Claude Code playbook adapted for an embedded-systems-adjacent
              codebase. Result: similar lift.
            </li>
          </ul>
          <p className="md:text-base text-sm md:!mt-5 !mt-3 text-[#6b7280]">
            <em>
              The full anonymized case study lives at (link added when the
              EventCo + TrackerCo Claude Code case study publishes).
            </em>
          </p>
        </div>
      </section>

      <CTASection
        descriptionClass="md:w-4/5"
        title="Pick the next step"
        description="We work with a small number of agentic AI software development engagements at a time. If you have a real codebase, a real engineering team, and a workflow you want an agent to own end-to-end, the next step is a 30-minute discovery call. No SDR funnel — the call is with the engineer who would scope your project."
        buttonText="Book a discovery call"
        buttonRedirect={ctaUrl("midpage-cta")}
      />

      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />

      <SolutionContactForm
        title="Ready to ship agentic AI for your engineering team?"
        description="If you have a workflow you want an agent to own end-to-end, share a few details and we'll come back with a 30-minute scoping call slot — booked with the engineer who would actually run your project."
      />

      <ServicesFAQ />

      {/* FAQ CTA + footer CTA */}
      <section className="bg-white">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5 md:pb-16 pb-10 reveal flex md:flex-row flex-col md:items-center items-start justify-between gap-5">
          <Link
            href={ctaUrl("faq-cta")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-themeColor text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Book a discovery call <span>&rarr;</span>
          </Link>
          <Link
            href={ctaUrl("footer-cta")}
            className="inline-flex items-center justify-center gap-2 text-themeColor font-semibold hover:underline"
          >
            Or talk to the engineering team <span>&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default AgenticAISoftwareDevelopmentService;
