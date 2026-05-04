import Link from "next/link";
import ButtonV2 from "../Common/ButtonV2";
import Heading from "../HTMLComponents/Heading";
import ServicesFAQ from "./ServicesFAQ";

const PRIMARY_CTA_URL =
  "/contact-us/?utm_source=site&utm_medium=service-page&utm_campaign=ai-agent-development&utm_content=primary-cta";
const FOOTER_CTA_URL =
  "/contact-us/?utm_source=site&utm_medium=service-page&utm_campaign=ai-agent-development&utm_content=footer-cta";

const SERVICE_OFFERINGS = [
  {
    title: "Custom AI agent design",
    body: "We start with the workflow, not the model. We map the work being done today, identify the decisions that drive it, and design the smallest agent that can take ownership of the right slice. You get a written agent specification — goal, tools, data sources, guardrails, evaluation criteria — before a line of code is written.",
  },
  {
    title: "Agent build",
    body: "We build the agent against the specification — model selection, tool integration, prompt and policy engineering, observability, and evaluation harnesses. Every agent we ship has an evaluation suite committed to source control on day one, so you can verify behavior on every change.",
  },
  {
    title: "Integration and deployment",
    body: "Agents only matter when they're plugged into the systems where work actually happens. We integrate with your CRM, ticketing, data warehouse, internal APIs, and identity stack. Deployment is your choice — your cloud, our cloud, hybrid. We ship to production, not to a sandbox.",
  },
  {
    title: "Ongoing improvement",
    body: "An agent's first version is rarely its best. We instrument every agent for evaluation, error rates, escalation rates, and unit cost. We then iterate: tighter prompts, better tools, narrower scope, broader scope — whatever the data says.",
  },
];

const USE_CASES = [
  {
    title: "Customer operations",
    intro: "Triage and resolution agents",
    body: "that read inbound tickets, classify intent, pull relevant context from CRM and product systems, and either resolve directly or hand off to the right human with a draft response prepared. Result we target: 30–60% reduction in time-to-first-response, measurable deflection on tier-1 tickets.",
  },
  {
    title: "Sales and revenue",
    intro: "Research and outreach agents",
    body: "that build account briefs, summarize signal across data providers, and prepare the first-pass outreach draft. Result we target: SDR research time cut by 50%+, with the human still owning the send.",
  },
  {
    title: "Internal operations",
    intro: "Back-office agents",
    body: "for procurement intake, contract triage, vendor onboarding, expense flagging — the long tail of internal workflows that nobody owns and everybody hates. Result we target: cycle-time reduction on workflows that previously required cross-team chasing.",
  },
];

const ENGAGEMENT_MODES = [
  {
    title: "Discovery sprint — 2 weeks",
    body: "For teams who know they want an AI agent but aren't sure which workflow is the right first target. We map the candidate workflows, score them on impact and feasibility, and deliver a written agent specification for the top one. Outcome: a go/no-go decision and a build-ready spec.",
  },
  {
    title: "Build engagement — 6–12 weeks",
    body: "Spec → working agent in production. Fixed scope, fixed timeline, weekly demos. Includes evaluation harness, observability, and a 30-day post-deploy stabilization window.",
  },
  {
    title: "Embedded team — ongoing",
    body: "For organizations with multiple agent workflows in flight. A senior agent engineer plus a delivery lead embed with your team, ship agents on a continuous cadence, and own the agent platform decisions. Monthly retainer, scoped quarterly.",
  },
];

const WHY_US = [
  {
    title: "We ship to production.",
    body: "Every engagement ends with an agent running in your environment, with eval and monitoring, not with a deck.",
  },
  {
    title: "We're stack-agnostic.",
    body: "We don't have a model partner pushing us to oversell theirs. The model picks the project, not the other way around.",
  },
  {
    title: "We use what we sell.",
    body: "Brilworks runs internal agents (Hermes and OpenClaw) for our own marketing, ops, and engineering work. We're our first customer.",
  },
  {
    title: "We measure.",
    body: "Eval rates, escalation rates, cost-per-resolution. If we can't agree on a metric before kickoff, we won't take the engagement.",
  },
];

const Section = ({ children, className = "" }) => (
  <section
    className={`container max-w-[1280px] mx-auto main-section-padding-bottom ${className}`}
  >
    {children}
  </section>
);

const AiAgentDevelopmentService = () => {
  return (
    <>
      {/* Hero */}
      <div className="service-hero-bg">
        <div className="banner-layer h-full min-h-[600px] max-h-full">
          <div className="container max-w-[1280px] main-section-padding sxl:!pt-14 !pt-32 mx-auto">
            <div className="flex flex-col items-start justify-center md:min-h-[480px] gap-6">
              <p className="text-colorWhite uppercase md:text-2xl text-xl">
                AI Agent Development Services
              </p>
              <Heading
                type="h1"
                className="text-white"
                text="AI Agent Development Services"
              />
              <p className="text-white lg:text-2xl md:text-xl text-lg max-w-[900px]">
                We design, build, and deploy custom AI agents that do real work
                in production — not demos.
              </p>
              <div className="flex md:flex-row flex-col md:items-center items-start gap-5 mt-4">
                <ButtonV2
                  size="large"
                  className="w-fit"
                  redirect={PRIMARY_CTA_URL}
                  label="Book a scoping call"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1 — What an AI agent is */}
      <Section className="!pt-12">
        <Heading
          type="h2"
          text="What an AI agent is, and when you need one"
        />
        <div className="mt-6 space-y-5 md:text-lg text-base text-gray-700">
          <p>
            An AI agent is software that can take a goal, decide on a sequence
            of actions, use tools and data on its own, and produce a result
            without a human stepping through every move.
          </p>
          <p>
            That sounds simple. In practice, getting an agent to behave reliably
            inside a real business — connected to real systems, with real data,
            accountable for real outcomes — is where most projects stall.
          </p>
          <p>
            You probably need an AI agent (and not just a chatbot or an
            automation script) when:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              A workflow has <strong>branching decisions</strong> that change
              based on context, not fixed rules.
            </li>
            <li>
              The work requires{" "}
              <strong>
                reading, reasoning, and writing across multiple systems
              </strong>{" "}
              (CRM, ticketing, ERP, email, documents).
            </li>
            <li>
              A human currently does the work, and that human's{" "}
              <strong>time is the bottleneck</strong>.
            </li>
            <li>
              The cost of a wrong answer is recoverable — i.e., the agent
              operates with a{" "}
              <strong>human-in-the-loop or a defined rollback</strong> rather
              than fully unattended.
            </li>
          </ul>
          <p>
            If your problem is &ldquo;answer a question from a knowledge
            base,&rdquo; you want a chatbot. If your problem is &ldquo;triage
            200 inbound requests, decide what each one needs, and act on most of
            them,&rdquo; you want an agent.
          </p>
        </div>
      </Section>

      {/* Section 2 — Our services */}
      <Section>
        <Heading
          type="h2"
          text="Brilworks's AI agent development services"
        />
        <p className="mt-5 md:text-lg text-base text-gray-700">
          We deliver custom AI agents end-to-end. Four engagement modes, the
          same outcome: an agent running in production with measurable impact.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {SERVICE_OFFERINGS.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-gray-200 p-6"
            >
              <Heading type="h3" text={s.title} className="!font-semibold" />
              <p className="mt-3 md:text-base text-sm text-gray-700">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 3 — Where custom AI agents earn their keep */}
      <Section>
        <Heading
          type="h2"
          text="Where custom AI agents earn their keep"
        />
        <p className="mt-5 md:text-lg text-base text-gray-700">
          Four use case categories where we&apos;ve shipped, with the kind of
          result we measure for.{" "}
          <em>
            (Specific client names withheld under NDA — case studies available
            on request, signed under MNDA.)
          </em>
        </p>
        <div className="mt-8 space-y-6">
          {USE_CASES.map((u) => (
            <div key={u.title}>
              <Heading
                type="h3"
                text={u.title}
                className="!font-semibold"
              />
              <p className="mt-2 md:text-base text-sm text-gray-700">
                <strong>{u.intro}</strong> {u.body}
              </p>
            </div>
          ))}
          <div>
            <Heading
              type="h3"
              text="Engineering and product"
              className="!font-semibold"
            />
            <p className="mt-2 md:text-base text-sm text-gray-700">
              <strong>Coding and code-review agents</strong> that work alongside
              dev teams. We&apos;ve helped existing clients adopt{" "}
              <Link
                href="/services/claude-code/"
                className="text-themeColor underline"
              >
                Claude Code
              </Link>{" "}
              the right way, with anonymized client data showing coding-speed
              lifts of roughly 50% across two engagements (full case study
              forthcoming). See our dedicated{" "}
              <Link
                href="/services/agentic-ai-software-development/"
                className="text-themeColor underline"
              >
                Agentic AI Software Development service
              </Link>{" "}
              for the dev-tooling vertical.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 4 — Tech stack */}
      <Section>
        <Heading type="h2" text="Tech stack we work with" />
        <p className="mt-5 md:text-lg text-base text-gray-700">
          We are model-, framework-, and cloud-agnostic. We pick the stack that
          fits the job, not the other way around.
        </p>
        <ul className="mt-6 list-disc pl-6 space-y-3 md:text-base text-sm text-gray-700">
          <li>
            <strong>Foundation models</strong> — Anthropic Claude (Opus, Sonnet,
            Haiku), OpenAI (GPT-4 family), AWS Bedrock, Azure OpenAI,
            open-weights (Llama, Mistral) when latency, cost, or data-residency
            requires it.
          </li>
          <li>
            <strong>Agent frameworks and runtimes</strong> — Claude Agent SDK,
            OpenAI Agents SDK, LangGraph, custom orchestration when frameworks
            get in the way. Internally we also operate Hermes and OpenClaw (our
            own agent runtimes) — useful when a client needs deeper control than
            off-the-shelf frameworks give.
          </li>
          <li>
            <strong>Tool layer</strong> — MCP (Model Context Protocol) for tool
            integration, custom tool servers, retrieval pipelines (vector DB of
            your choice — pgvector, Pinecone, Weaviate, OpenSearch).
          </li>
          <li>
            <strong>Evaluation and observability</strong> — Langfuse, Braintrust,
            Helicone, OpenTelemetry traces, plus our own evaluation harnesses
            for production behavior monitoring.
          </li>
          <li>
            <strong>Deployment</strong> — AWS, GCP, Azure, on-prem when the data
            demands it. Containerized by default, Terraform-managed.
          </li>
        </ul>
      </Section>

      {/* Section 5 — Engagement model */}
      <Section>
        <Heading type="h2" text="Engagement model" />
        <p className="mt-5 md:text-lg text-base text-gray-700">
          Three engagement modes. Pick the one that matches how committed you
          already are.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {ENGAGEMENT_MODES.map((m) => (
            <div
              key={m.title}
              className="rounded-2xl border border-gray-200 p-6"
            >
              <Heading type="h3" text={m.title} className="!font-semibold" />
              <p className="mt-3 md:text-base text-sm text-gray-700">
                {m.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 md:text-base text-sm text-gray-700">
          All engagements include source code, evaluation suites, runbooks, and
          a knowledge transfer at handoff. No black boxes.
        </p>
      </Section>

      {/* Section 6 — Why us */}
      <Section>
        <Heading type="h2" text="Why Brilworks" />
        <ul className="mt-6 space-y-4 md:text-lg text-base text-gray-700">
          {WHY_US.map((w) => (
            <li key={w.title}>
              <strong>{w.title}</strong> {w.body}
            </li>
          ))}
        </ul>
      </Section>

      {/* Section 7 — Talk to us */}
      <Section>
        <Heading type="h2" text="Talk to us" />
        <p className="mt-5 md:text-lg text-base text-gray-700">
          If you have a workflow in mind — or if you suspect there&apos;s one
          and want a second opinion — book a 30-minute scoping call. No deck, no
          sales engineer, just a conversation with the engineer who would lead
          your build.
        </p>
        <div className="mt-7 flex md:flex-row flex-col md:items-center items-start gap-5">
          <ButtonV2
            size="large"
            className="w-fit"
            redirect={PRIMARY_CTA_URL}
            label="Book a scoping call"
          />
          <Link
            href={FOOTER_CTA_URL}
            className="text-themeColor underline md:text-base text-sm"
          >
            Or send a one-line brief →
          </Link>
        </div>
      </Section>

      {/* Section 8 — FAQ (pathname-keyed in serviceFaqs.js) */}
      <ServicesFAQ />
    </>
  );
};

export default AiAgentDevelopmentService;
