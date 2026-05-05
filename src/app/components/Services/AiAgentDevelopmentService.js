import Link from "next/link";
import ButtonV2 from "../Common/ButtonV2";
import Heading from "../HTMLComponents/Heading";
import ServicesFAQ from "./ServicesFAQ";
import ServiceHeroSection from "./ServiceHeroSection";

const PRIMARY_CTA =
  "/contact-us/?utm_source=site&utm_medium=service-page&utm_campaign=ai-agent-development&utm_content=primary-cta";
const FOOTER_CTA =
  "/contact-us/?utm_source=site&utm_medium=service-page&utm_campaign=ai-agent-development&utm_content=footer-cta";

const TRIGGERS = [
  "A workflow has branching decisions that change based on context, not fixed rules.",
  "The work requires reading, reasoning, and writing across multiple systems (CRM, ticketing, ERP, email, documents).",
  "A human currently does the work, and that human's time is the bottleneck.",
  "The cost of a wrong answer is recoverable — i.e., the agent operates with a human-in-the-loop or a defined rollback rather than fully unattended.",
];

const SERVICE_TIERS = [
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
    body: (
      <>
        <strong>Triage and resolution agents</strong> that read inbound tickets, classify intent, pull
        relevant context from CRM and product systems, and either resolve directly or hand off to the
        right human with a draft response prepared. Result we target: 30–60% reduction in
        time-to-first-response, measurable deflection on tier-1 tickets.
      </>
    ),
  },
  {
    title: "Sales and revenue",
    body: (
      <>
        <strong>Research and outreach agents</strong> that build account briefs, summarize signal
        across data providers, and prepare the first-pass outreach draft. Result we target: SDR
        research time cut by 50%+, with the human still owning the send.
      </>
    ),
  },
  {
    title: "Internal operations",
    body: (
      <>
        <strong>Back-office agents</strong> for procurement intake, contract triage, vendor
        onboarding, expense flagging — the long tail of internal workflows that nobody owns and
        everybody hates. Result we target: cycle-time reduction on workflows that previously required
        cross-team chasing.
      </>
    ),
  },
  {
    title: "Engineering and product",
    body: (
      <>
        <strong>Coding and code-review agents</strong> that work alongside dev teams. We've helped
        existing clients adopt{" "}
        <Link href="/services/claude-code/" className="text-themeColor underline">
          Claude Code
        </Link>{" "}
        the right way, with anonymized client data showing coding-speed lifts of roughly 50% across
        two engagements (full case study forthcoming). See our dedicated{" "}
        <Link
          href="/services/agentic-ai-software-development/"
          className="text-themeColor underline"
        >
          Agentic AI Software Development service
        </Link>{" "}
        for the dev-tooling vertical.
      </>
    ),
  },
];

const TECH_STACK = [
  {
    label: "Foundation models",
    body: "Anthropic Claude (Opus, Sonnet, Haiku), OpenAI (GPT-4 family), AWS Bedrock, Azure OpenAI, open-weights (Llama, Mistral) when latency, cost, or data-residency requires it.",
  },
  {
    label: "Agent frameworks and runtimes",
    body: "Claude Agent SDK, OpenAI Agents SDK, LangGraph, custom orchestration when frameworks get in the way. Internally we also operate Hermes and OpenClaw (our own agent runtimes) — useful when a client needs deeper control than off-the-shelf frameworks give.",
  },
  {
    label: "Tool layer",
    body: "MCP (Model Context Protocol) for tool integration, custom tool servers, retrieval pipelines (vector DB of your choice — pgvector, Pinecone, Weaviate, OpenSearch).",
  },
  {
    label: "Evaluation and observability",
    body: "Langfuse, Braintrust, Helicone, OpenTelemetry traces, plus our own evaluation harnesses for production behavior monitoring.",
  },
  {
    label: "Deployment",
    body: "AWS, GCP, Azure, on-prem when the data demands it. Containerized by default, Terraform-managed.",
  },
];

const ENGAGEMENTS = [
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

const WHY_BRILWORKS = [
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

const SectionHeading = ({ text, eyebrow }) => (
  <div className="mb-7.5">
    {eyebrow ? (
      <p className="uppercase text-sm tracking-wider text-themeColor font-medium mb-3">
        {eyebrow}
      </p>
    ) : null}
    <Heading
      type="h2"
      className="lg:!text-[34px] md:!text-3xl !text-2xl"
      text={text}
    />
  </div>
);

const AiAgentDevelopmentService = () => {
  return (
    <>
      <ServiceHeroSection
        pageTitleText="AI Agent Development Services"
        title="AI Agent Development Services"
        description="We design, build, and deploy custom AI agents that do real work in production — not demos."
        buttonText="Book a scoping call"
        buttonUrl={PRIMARY_CTA}
        imageSrc="/images/generative-ai.webp"
        showGridData={false}
      />

      <section className="bg-white">
        <div className="container max-w-[1280px] main-section-padding mx-auto">
          <SectionHeading
            eyebrow="Section 1"
            text="What an AI agent is, and when you need one"
          />
          <div className="space-y-5 text-base md:text-lg leading-relaxed">
            <p>
              An AI agent is software that can take a goal, decide on a sequence of actions, use
              tools and data on its own, and produce a result without a human stepping through every
              move.
            </p>
            <p>
              That sounds simple. In practice, getting an agent to behave reliably inside a real
              business — connected to real systems, with real data, accountable for real outcomes —
              is where most projects stall.
            </p>
            <p>
              You probably need an AI agent (and not just a chatbot or an automation script) when:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {TRIGGERS.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <p>
              If your problem is &ldquo;answer a question from a knowledge base,&rdquo; you want a
              chatbot. If your problem is &ldquo;triage 200 inbound requests, decide what each one
              needs, and act on most of them,&rdquo; you want an agent.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bgGrey">
        <div className="container max-w-[1280px] main-section-padding mx-auto">
          <SectionHeading
            eyebrow="Section 2"
            text="Brilworks's AI agent development services"
          />
          <p className="text-base md:text-lg leading-relaxed mb-7.5">
            We deliver custom AI agents end-to-end. Four engagement modes, the same outcome: an
            agent running in production with measurable impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICE_TIERS.map((tier) => (
              <div
                key={tier.title}
                className="bg-white rounded-2xl p-6 md:p-7.5 border border-gray-200"
              >
                <Heading type="h3" text={tier.title} className="mb-3" />
                <p className="text-base leading-relaxed">{tier.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container max-w-[1280px] main-section-padding mx-auto">
          <SectionHeading
            eyebrow="Section 3"
            text="Where custom AI agents earn their keep"
          />
          <p className="text-base md:text-lg leading-relaxed mb-7.5">
            Four use case categories where we&rsquo;ve shipped, with the kind of result we measure
            for. <em>(Specific client names withheld under NDA — case studies available on request,
            signed under MNDA.)</em>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {USE_CASES.map((uc) => (
              <div
                key={uc.title}
                className="bg-bgGrey rounded-2xl p-6 md:p-7.5 border border-gray-200"
              >
                <Heading type="h3" text={uc.title} className="mb-3" />
                <p className="text-base leading-relaxed">{uc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bgGrey">
        <div className="container max-w-[1280px] main-section-padding mx-auto">
          <SectionHeading eyebrow="Section 4" text="Tech stack we work with" />
          <p className="text-base md:text-lg leading-relaxed mb-7.5">
            We are model-, framework-, and cloud-agnostic. We pick the stack that fits the job, not
            the other way around.
          </p>
          <ul className="space-y-5">
            {TECH_STACK.map((row) => (
              <li key={row.label} className="flex flex-col md:flex-row gap-2 md:gap-6">
                <span className="md:w-1/3 font-semibold text-themeColor">{row.label}</span>
                <span className="md:w-2/3 text-base leading-relaxed">{row.body}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="container max-w-[1280px] main-section-padding mx-auto">
          <SectionHeading eyebrow="Section 5" text="Engagement model" />
          <p className="text-base md:text-lg leading-relaxed mb-7.5">
            Three engagement modes. Pick the one that matches how committed you already are.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENGAGEMENTS.map((tier) => (
              <div
                key={tier.title}
                className="bg-bgGrey rounded-2xl p-6 md:p-7.5 border border-gray-200 h-full"
              >
                <Heading type="h3" text={tier.title} className="mb-3" />
                <p className="text-base leading-relaxed">{tier.body}</p>
              </div>
            ))}
          </div>
          <p className="text-base md:text-lg leading-relaxed mt-7.5">
            All engagements include source code, evaluation suites, runbooks, and a knowledge
            transfer at handoff. No black boxes.
          </p>
        </div>
      </section>

      <section className="bg-bgGrey">
        <div className="container max-w-[1280px] main-section-padding mx-auto">
          <SectionHeading eyebrow="Section 6" text="Why Brilworks" />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_BRILWORKS.map((row) => (
              <li
                key={row.title}
                className="bg-white rounded-2xl p-6 md:p-7.5 border border-gray-200"
              >
                <p className="font-semibold text-lg mb-2">{row.title}</p>
                <p className="text-base leading-relaxed">{row.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="container max-w-[1280px] main-section-padding mx-auto">
          <SectionHeading eyebrow="Section 7" text="Talk to us" />
          <p className="text-base md:text-lg leading-relaxed mb-6">
            If you have a workflow in mind — or if you suspect there&rsquo;s one and want a second
            opinion — book a 30-minute scoping call. No deck, no sales engineer, just a conversation
            with the engineer who would lead your build.
          </p>
          <div className="flex md:flex-row flex-col md:items-center items-start gap-5">
            <ButtonV2
              size="large"
              redirect={PRIMARY_CTA}
              label="Book a scoping call"
              className="w-fit"
            />
            <Link
              href={FOOTER_CTA}
              className="text-themeColor underline text-base md:text-lg font-medium"
            >
              Or send a one-line brief →
            </Link>
          </div>
        </div>
      </section>

      <ServicesFAQ />
    </>
  );
};

export default AiAgentDevelopmentService;
