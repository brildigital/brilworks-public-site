export const aiAgentCaseStudies = {
  admissions: {
    accent: "#1D4ED8",
    accentSoft: "#DBEAFE",
    accentDeep: "#1E3A8A",
    prototypeUrl: "/agents/admission-os/index.html",
    title: "AI Admissions OS · Seven-agent orchestrator for MBA applicants",
    description:
      "A workflow orchestrator that runs seven specialized AI agents around a single shared object — the Narrative Anchor — from intake through school comparison, at ~$17 per applicant.",
    breadcrumb: "Admissions OS — 7-agent applicant workflow",
    chip: "Education · 7-agent orchestration",
    heroHeadline:
      "An admissions OS that runs seven agents around one shared applicant object.",
    heroSubhead:
      "Intake, strategy, essay editing, deep review, framework gate, gap analysis, and school comparison — all reading and writing the same Narrative Anchor. Foreground agents on Haiku, deep work on Sonnet, blended at ~$17 per applicant.",
    heroStats: [
      { value: "7", label: "Specialized agents in one pipeline" },
      { value: "1", label: "Shared Narrative Anchor Object" },
      { value: "~$17", label: "Blended AI cost per applicant" },
    ],
    challenge: {
      eyebrow: "The Challenge",
      title:
        "MBA admissions consulting doesn't scale. Generic AI tools produce essays that sound like everyone else's.",
      lead: `A family pays $15K–$25K for admissions consulting. The consultant meets once a week, remembers last session's context by flipping through notes, and can handle maybe 15 clients before quality drops. Meanwhile, generic AI tools write essays that use the same three opening phrases and cite stats from the wrong school — and every applicant looks the same in the pile.`,
      paragraphs: [
        `The failures are specific. A strategic theme from week one gets lost by week four. A claim made in the resume doesn't match the claim in the "why MBA" essay, and nobody notices until an admissions committee does. Seven different tools get opened for seven different steps — essay editor, review service, school-fit calculator — none of which share context. The applicant ends up stitching the story together on their own, badly.`,
        `The root cause isn't the consultant's skill or the AI's IQ. It's that <strong>there's no shared object that travels with the applicant across every step</strong> — no single source for themes, claims, voice fingerprint, and constraints that every agent reads and writes. Without that, each step is a fresh re-brief, and contradictions become inevitable.`,
        `Admissions OS exists to make that shared object <strong>the spine of the workflow</strong>. Seven specialized agents, each doing one job well, all reading and writing the same Narrative Anchor — so a claim made on agent 2 is citable on agent 7, and contradictions get flagged before a committee sees them.`,
      ],
    },
    how: {
      eyebrow: "How the agent handles it",
      title: "Seven agents. One shared object. Tier-based routing keeps cost predictable.",
      svgHtml: `<svg viewBox="0 0 1080 420" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="ah" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#5A6B82"/></marker>
        </defs>
        <text class="d-mono" x="540" y="30" text-anchor="middle" style="font-size:11px;font-weight:600;fill:#1E3A8A">7 AGENTS · 1 SHARED OBJECT · 1 JOURNEY</text>
        <rect class="box-a" x="40" y="55" width="130" height="100" rx="10" stroke-width="1.5"/>
        <text class="d-mono" x="105" y="75" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#1E3A8A">AGENT 1</text>
        <text class="d-label" x="105" y="96" text-anchor="middle">Intake</text>
        <text class="d-sub" x="105" y="114" text-anchor="middle">30 questions</text>
        <text class="d-sub" x="105" y="129" text-anchor="middle" style="font-style:italic">form only</text>
        <text class="d-mono" x="105" y="148" text-anchor="middle" style="font-size:9px;fill:#1E3A8A">~$0</text>
        <rect class="box-a" x="188" y="55" width="130" height="100" rx="10" stroke-width="1.5"/>
        <text class="d-mono" x="253" y="75" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#1E3A8A">AGENT 2</text>
        <text class="d-label" x="253" y="96" text-anchor="middle">Strategy</text>
        <text class="d-sub" x="253" y="114" text-anchor="middle">Sonnet</text>
        <text class="d-sub" x="253" y="129" text-anchor="middle" style="font-style:italic">NAO generator</text>
        <text class="d-mono" x="253" y="148" text-anchor="middle" style="font-size:9px;fill:#1E3A8A">~$0.05</text>
        <rect class="box-a" x="336" y="55" width="130" height="100" rx="10" stroke-width="1.5"/>
        <text class="d-mono" x="401" y="75" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#1E3A8A">AGENT 3</text>
        <text class="d-label" x="401" y="96" text-anchor="middle">Essay editor</text>
        <text class="d-sub" x="401" y="114" text-anchor="middle">Haiku</text>
        <text class="d-sub" x="401" y="129" text-anchor="middle" style="font-style:italic">foreground</text>
        <text class="d-mono" x="401" y="148" text-anchor="middle" style="font-size:9px;fill:#1E3A8A">~$0.002/call</text>
        <rect class="box-a" x="484" y="55" width="130" height="100" rx="10" stroke-width="1.5"/>
        <text class="d-mono" x="549" y="75" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#1E3A8A">AGENT 4</text>
        <text class="d-label" x="549" y="96" text-anchor="middle">Deep review</text>
        <text class="d-sub" x="549" y="114" text-anchor="middle">Sonnet</text>
        <text class="d-sub" x="549" y="129" text-anchor="middle" style="font-style:italic">4-dim scoring</text>
        <text class="d-mono" x="549" y="148" text-anchor="middle" style="font-size:9px;fill:#1E3A8A">~$0.38/run</text>
        <rect class="box-a" x="632" y="55" width="130" height="100" rx="10" stroke-width="1.5"/>
        <text class="d-mono" x="697" y="75" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#1E3A8A">AGENT 5</text>
        <text class="d-label" x="697" y="96" text-anchor="middle">Framework gate</text>
        <text class="d-sub" x="697" y="114" text-anchor="middle">Sonnet→Haiku</text>
        <text class="d-sub" x="697" y="129" text-anchor="middle" style="font-style:italic">soft-warn only</text>
        <text class="d-mono" x="697" y="148" text-anchor="middle" style="font-size:9px;fill:#1E3A8A">~$0.01</text>
        <rect class="box-a" x="780" y="55" width="130" height="100" rx="10" stroke-width="1.5"/>
        <text class="d-mono" x="845" y="75" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#1E3A8A">AGENT 6</text>
        <text class="d-label" x="845" y="96" text-anchor="middle">Gap analysis</text>
        <text class="d-sub" x="845" y="114" text-anchor="middle">Sonnet</text>
        <text class="d-sub" x="845" y="129" text-anchor="middle" style="font-style:italic">cross-doc</text>
        <text class="d-mono" x="845" y="148" text-anchor="middle" style="font-size:9px;fill:#1E3A8A">~$0.03/run</text>
        <rect class="box-a" x="928" y="55" width="130" height="100" rx="10" stroke-width="1.5"/>
        <text class="d-mono" x="993" y="75" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#1E3A8A">AGENT 7</text>
        <text class="d-label" x="993" y="96" text-anchor="middle">School fit</text>
        <text class="d-sub" x="993" y="114" text-anchor="middle">Sonnet</text>
        <text class="d-sub" x="993" y="129" text-anchor="middle" style="font-style:italic">multi-school</text>
        <text class="d-mono" x="993" y="148" text-anchor="middle" style="font-size:9px;fill:#1E3A8A">~$0.08/run</text>
        <path class="arr" d="M 105 155 L 105 240"/>
        <path class="arr" d="M 253 155 L 253 240"/>
        <path class="arr" d="M 401 155 L 401 240"/>
        <path class="arr" d="M 549 155 L 549 240"/>
        <path class="arr" d="M 697 155 L 697 240"/>
        <path class="arr" d="M 845 155 L 845 240"/>
        <path class="arr" d="M 993 155 L 993 240"/>
        <rect class="box-deep" x="40" y="240" width="1020" height="110" rx="12"/>
        <text class="d-mono" x="540" y="267" text-anchor="middle" style="fill:#fff;font-size:11px;font-weight:600">NARRATIVE ANCHOR OBJECT (NAO)</text>
        <text class="d-label" x="540" y="290" text-anchor="middle" style="fill:#fff;font-size:15px">One shared object. Read and written by every agent.</text>
        <text class="d-sub" x="540" y="310" text-anchor="middle" style="fill:rgba(255,255,255,0.85);font-size:12px">themes · claims · voice fingerprint · applicant constraints · versioned per step</text>
        <text class="d-sub" x="540" y="328" text-anchor="middle" style="fill:rgba(255,255,255,0.65);font-size:11px;font-style:italic">Claims made on agent 2 are cited on agent 7. Contradictions flagged structurally.</text>
        <text class="d-mono" x="540" y="390" text-anchor="middle" style="font-size:11px;font-weight:600;fill:#5A6B82">BLENDED COST PER APPLICANT: ~$17 · Haiku foreground + Sonnet deep + prompt caching</text>
      </svg>`,
      steps: [
        {
          n: 1,
          title: "The Narrative Anchor is the source of truth. Not a file, not a doc.",
          body: `Every agent reads the NAO before it acts and writes back when it finishes. Themes, claims, voice fingerprint, applicant constraints — all versioned per step. The contradiction you'd normally catch at final submission gets flagged at agent 3, because the same object is in scope every time.`,
        },
        {
          n: 2,
          title: "Foreground agents run on Haiku. Deep work runs on Sonnet.",
          body: `The essay editor fires on every keystroke and must stay under 300ms — <em>Haiku + prompt caching</em> territory. Strategy and deep review run multi-minute with 4-dim scoring — <em>Sonnet</em> handles that. Each agent knows its tier, so the per-applicant cost stays predictable instead of spiralling with usage.`,
        },
        {
          n: 3,
          title: "Gates warn. They don't block.",
          body: `The framework gate soft-warns when a claim lacks NAO evidence — it doesn't stop the applicant. Guidance over control. An advisor that blocks the user at every edit gets turned off; one that flags and explains is one that ships. <em>"This claim isn't in your NAO — want to add evidence or rephrase?"</em>`,
        },
        {
          n: 4,
          title: "UI first. Agents plug in behind it.",
          body: `The prototype ships with simulated deterministic brains so the latency, pipeline orchestration, cost telemetry, and NAO schema are production-accurate before a single LLM call is wired up. When the simulated brains get replaced with real Anthropic calls, <em>the UI layer doesn't change</em> — and the ~$17 per-applicant economics stay achievable, not aspirational.`,
        },
      ],
    },
    outcomes: {
      eyebrow: "What you get",
      title: "Three things change once the NAO is the spine.",
      items: [
        {
          metric: "7",
          unit: "agents",
          title: "Specialized, context-sharing steps",
          body: "Intake, strategy, essay editing, deep review, framework gate, gap analysis, school fit — each reading and writing the same NAO. No context loss between tools.",
        },
        {
          metric: "~$17",
          unit: "/applicant",
          title: "Blended AI cost with prompt caching",
          body: "Tier-based routing keeps foreground interactions cheap and deep analysis affordable. Compare to $15K–$25K for a single consultant, or generic AI tools that still need human cleanup.",
        },
        {
          metric: "~60",
          unit: "s",
          title: "From raw intake to v1 Narrative Anchor",
          body: "Strategy agent turnaround. Deep-review 4-dim scoring completes in parallel under two minutes. Applicants stay in flow instead of waiting on human reviewers.",
        },
      ],
      note: "Numbers observed in Brilworks' Admissions OS prototype. Actual figures on your stack will depend on applicant volume, essay count per school, and prompt-cache hit rate.",
    },
    fit: {
      eyebrow: "Is this right for you?",
      title: "Honest fit criteria. We'd rather say no than oversell.",
      yes: [
        "You run an MBA, grad-school, or professional-program admissions practice with 50+ applicants per cycle",
        "Consultants already follow a multi-step process, but context gets lost between sessions and tools",
        "The applicant's voice, themes, and claims must stay consistent across 3–8 essays per school",
        "You're willing to model a shared NAO schema first and plug the agents in behind it",
      ],
      no: [
        "You serve fewer than 20 applicants a year — the orchestration overhead isn't earning its keep",
        "Your consulting process isn't written down yet — start with positioning and curriculum, not orchestration",
        "You want a one-shot essay generator, not a multi-agent workflow with a shared object",
        "You're not willing to run two model tiers (Haiku + Sonnet) in the same pipeline",
      ],
    },
    cta: {
      title: "Book a 30-minute scoping call.",
      body: "We'll walk through your current admissions process, map it against the 7-agent NAO pattern, and tell you honestly whether it fits your practice — and what it would take to ship.",
    },
  },
  audit: {
    accent: "#059669",
    accentSoft: "#D1FAE5",
    accentDeep: "#065F46",
    prototypeUrl: "https://ai-audit-compliance-assistant.vercel.app",
    title: "AI Audit & Compliance Assistant · Automated GST audit and anomaly detection",
    description:
      "An intelligent platform that uploads financial documents, validates GST compliance, and surfaces anomalies — delivering an executive-grade audit summary without a single manual check.",
    breadcrumb: "Audit — AI financial compliance agent",
    chip: "Finance · GST compliance automation",
    heroHeadline:
      "An AI audit assistant that flags GST violations and invoice anomalies the moment a document lands.",
    heroSubhead:
      "Upload XLSX financial data, get instant GSTIN validation, duplicate detection, calculation mismatch flags, and a full executive summary — powered by Gemini 2.0 Flash. Hours of manual review compressed into seconds.",
    heroStats: [
      { value: "100%", label: "GST records validated automatically" },
      { value: "0", label: "Manual checks before first anomaly flag" },
      { value: "~5s", label: "From document upload to audit summary" },
    ],
    challenge: {
      eyebrow: "The Challenge",
      title:
        "Financial audits are still manual. GST errors hide in plain sight until a regulator finds them.",
      lead: `A finance team receives hundreds of invoices a month. An auditor opens each one, cross-checks GSTIN, recalculates rates, hunts for duplicates, and flags mismatches in a spreadsheet. By the time the review is finished, it's the end of the quarter — and three errors still slipped through.`,
      paragraphs: [
        `The failures are specific. A GSTIN that looks valid passes human review but fails a registry check. A duplicate invoice with a slightly different date gets approved twice. A calculation mismatch of 0.2% on a ₹10L invoice gets missed because the reviewer was checking the next 40 documents. None of these errors are exotic — they're systematic, and they compound.`,
        `The root cause isn't auditor skill. It's that <strong>manual review doesn't scale to the volume of financial data modern businesses generate</strong> — and rule-based scripts can't adapt to the variety of invoice formats, edge cases, and regulatory nuance that real documents carry. When an organization grows, the error surface grows faster than the audit team.`,
        `The AI Audit & Compliance Assistant puts a generative AI model on every document, every time — <strong>GSTIN validation, rate checks, duplicate detection, and summary generation happen in a single pass</strong>, with no reviewer fatigue and no format dependence.`,
      ],
    },
    how: {
      eyebrow: "How the agent handles it",
      title: "Upload once. Validate, detect, summarize — in one automated pass.",
      svgHtml: `<svg viewBox="0 0 1040 340" xmlns="http://www.w3.org/2000/svg">
        <defs><marker id="ah" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#5A6B82"/></marker></defs>
        <rect class="box-soft" x="20" y="60" width="150" height="90" rx="10"/>
        <text class="d-mono" x="95" y="83" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#065F46">INGEST</text>
        <text class="d-label" x="95" y="104" text-anchor="middle">Document Upload</text>
        <text class="d-sub" x="95" y="121" text-anchor="middle">Excel / XLSX</text>
        <text class="d-sub" x="95" y="136" text-anchor="middle">real-time preview</text>
        <rect class="box-soft" x="200" y="60" width="150" height="90" rx="10"/>
        <text class="d-mono" x="275" y="83" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#065F46">EXTRACT</text>
        <text class="d-label" x="275" y="104" text-anchor="middle">Gemini 2.0 Flash</text>
        <text class="d-sub" x="275" y="121" text-anchor="middle">Document analysis</text>
        <text class="d-sub" x="275" y="136" text-anchor="middle">field extraction</text>
        <rect class="box-a" x="380" y="60" width="150" height="90" rx="10" stroke="#059669" stroke-width="2"/>
        <text class="d-mono" x="455" y="83" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#065F46">VALIDATE</text>
        <text class="d-label" x="455" y="104" text-anchor="middle">GST Compliance</text>
        <text class="d-sub" x="455" y="121" text-anchor="middle">GSTIN · rates</text>
        <text class="d-sub" x="455" y="136" text-anchor="middle">calculations</text>
        <rect class="box-a" x="560" y="60" width="150" height="90" rx="10" stroke="#059669" stroke-width="2"/>
        <text class="d-mono" x="635" y="83" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#065F46">DETECT</text>
        <text class="d-label" x="635" y="104" text-anchor="middle">Anomaly Engine</text>
        <text class="d-sub" x="635" y="121" text-anchor="middle">duplicates · gaps</text>
        <text class="d-sub" x="635" y="136" text-anchor="middle">mismatches</text>
        <rect class="box-soft" x="740" y="60" width="150" height="90" rx="10"/>
        <text class="d-mono" x="815" y="83" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#065F46">REPORT</text>
        <text class="d-label" x="815" y="104" text-anchor="middle">Audit Summary</text>
        <text class="d-sub" x="815" y="121" text-anchor="middle">executive view</text>
        <text class="d-sub" x="815" y="136" text-anchor="middle">flagged issues</text>
        <path class="arr" d="M 170 105 L 200 105"/>
        <path class="arr" d="M 350 105 L 380 105"/>
        <path class="arr" d="M 530 105 L 560 105"/>
        <path class="arr" d="M 710 105 L 740 105"/>
        <rect class="box-deep" x="200" y="210" width="640" height="90" rx="12"/>
        <text class="d-mono" x="520" y="236" text-anchor="middle" style="fill:#fff;font-size:11px;font-weight:600">GEMINI 2.0 FLASH · RULE ENGINE</text>
        <text class="d-label" x="520" y="260" text-anchor="middle" style="fill:#fff;font-size:14px">AI analysis + deterministic GST rules run in a single pass</text>
        <text class="d-sub" x="520" y="282" text-anchor="middle" style="fill:rgba(255,255,255,0.8);font-size:12px">LLM handles format variance · Rule engine enforces compliance thresholds</text>
        <path class="arr" d="M 455 150 L 455 185 L 520 185 L 520 210"/>
        <path class="arr" d="M 635 150 L 635 185 L 520 185"/>
      </svg>`,
      steps: [
        {
          n: 1,
          title: "Gemini 2.0 Flash reads the document. The rule engine enforces GST law.",
          body: `The AI handles format variance — column headers that move, merged cells, regional formatting quirks. The rule engine handles GST logic: GSTIN registry checks, applicable rate tables, calculation thresholds. Neither replaces the other. Together they cover what neither could alone.`,
        },
        {
          n: 2,
          title: "Anomaly detection runs on every field, not just flagged ones.",
          body: `Duplicate detection compares invoice numbers, dates, amounts, and vendor IDs across the full dataset — a duplicate with a single digit changed still gets flagged. Calculation mismatches surface at sub-rupee precision. Missing mandatory fields are caught before the summary is generated, not after.`,
        },
        {
          n: 3,
          title: "Real-time preview keeps the reviewer in context.",
          body: `The uploaded XLSX renders as an interactive preview alongside the audit findings. Reviewers see the source document and the flagged rows together — no switching tabs, no downloading files to cross-reference. Every flagged issue links back to the exact row.`,
        },
        {
          n: 4,
          title: "The executive summary is generated last, not first.",
          body: `After every check runs, Gemini composes an audit summary: total documents reviewed, compliance rate, anomaly count, and a ranked list of flagged issues by severity. Suitable for a CFO review or a regulatory submission — without a human drafting it.`,
        },
      ],
    },
    outcomes: {
      eyebrow: "What you get",
      title: "Three things change once AI is on every document.",
      items: [
        {
          metric: "~5s",
          unit: "/document",
          title: "From upload to full audit findings",
          body: "Extraction, GST validation, anomaly detection, and executive summary — complete in one automated pass. No queue, no reviewer assignment.",
        },
        {
          metric: "100%",
          unit: "coverage",
          title: "Every field checked, every time",
          body: "No sampling, no fatigue, no missed rows at document 47. The engine applies the same rules to every invoice regardless of volume.",
        },
        {
          metric: "0",
          unit: "manual checks",
          title: "Before the first anomaly is surfaced",
          body: "Flagged issues arrive with source row, violation type, and severity. Reviewers triage exceptions, not documents.",
        },
      ],
      note: "Numbers observed in Brilworks' AI Audit & Compliance Assistant prototype. Actual throughput depends on document size, GSTIN registry latency, and Gemini API response time under load.",
    },
    fit: {
      eyebrow: "Is this right for you?",
      title: "Honest fit criteria. We'd rather say no than oversell.",
      yes: [
        "You process 100+ invoices per month and GST compliance review is a recurring bottleneck",
        "Your audit team spends more time on data extraction than on exception judgment",
        "Regulatory submissions require documented compliance checks on every invoice",
        "You're willing to validate the rule engine against your specific GST jurisdiction before going live",
      ],
      no: [
        "You process fewer than 20 invoices a month — a shared spreadsheet is faster to set up",
        "Your invoice formats are so non-standard that extraction quality hasn't been validated yet",
        "You need real-time ERP integration on day one rather than a standalone audit tool",
        "Your compliance requirement is audit-trail at the transaction level, not document level",
      ],
    },
    cta: {
      title: "Book a 30-minute scoping call.",
      body: "We'll walk through your invoice volume, your current review process, and your GST compliance obligations — then tell you whether automated auditing fits and what the integration with your existing stack would require.",
    },
  },
  invoicify: {
    accent: "#0891B2",
    accentSoft: "#CFFAFE",
    accentDeep: "#164E63",
    prototypeUrl: "https://invoicify.brilworks.com",
    title: "Invoicify AI · Neural invoice processing hub for modern AP workflows",
    description:
      "A high-performance invoice processing platform that transforms raw document streams — PDFs, JPGs, PNGs — into structured financial datasets with zero manual entry, powered by Google Gemini 1.5 Flash.",
    breadcrumb: "Invoicify — Neural invoice extraction hub",
    chip: "Finance · AP automation · Zero manual entry",
    heroHeadline:
      "An invoice processing hub that turns a document stream into structured financial data with zero manual entry.",
    heroSubhead:
      "Multi-modal LLM extraction, vendor neural auto-population, IP-based currency localization, and a live cumulative audit dashboard — all in one platform. Powered by Google Gemini 1.5 Flash.",
    heroStats: [
      { value: "0", label: "Manual data entry per invoice" },
      { value: "Multi", label: "Format support — PDF, JPG, PNG" },
      { value: "Live", label: "Exchange rate conversion on every document" },
    ],
    challenge: {
      eyebrow: "The Challenge",
      title:
        "Accounts payable workflows are still bottlenecked on manual data entry. Invoice volume scales. Headcount doesn't.",
      lead: `An AP team receives invoices in six different formats from forty vendors across three countries. Someone opens each one, types the vendor name, invoice number, due date, line items, and amount into a system. Then they do it again for the next one. Then the next 200.`,
      paragraphs: [
        `The failures are predictable. A vendor sends a PDF with their logo covering the invoice number — the entry clerk guesses. A line item description is ambiguous — it gets categorized wrong and triggers a reconciliation three months later. A currency conversion is done manually with yesterday's rate — the audit finds a systematic 0.8% discrepancy across forty invoices.`,
        `The root cause isn't process discipline. It's that <strong>human data entry can't match modern invoice volume without proportional headcount growth</strong> — and template-based OCR breaks the moment a vendor changes their invoice layout. When format variance is high and volume is growing, the only path that doesn't break is one where the extraction model can reason about layout, not just pattern-match it.`,
        `Invoicify uses a multi-modal LLM to read invoices the way a trained analyst would — <strong>understanding context, inferring missing fields, and flagging ambiguous extractions with confidence scores</strong> rather than silently producing wrong data.`,
      ],
    },
    how: {
      eyebrow: "How the agent handles it",
      title: "Neural extraction. Vendor sync. Live currency audit. Bulk AI summary.",
      svgHtml: `<svg viewBox="0 0 1040 360" xmlns="http://www.w3.org/2000/svg">
        <defs><marker id="ah" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#5A6B82"/></marker></defs>
        <rect class="box-soft" x="20" y="50" width="140" height="100" rx="10"/>
        <text class="d-mono" x="90" y="74" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#164E63">INGEST</text>
        <text class="d-label" x="90" y="96" text-anchor="middle">Document Stream</text>
        <text class="d-sub" x="90" y="114" text-anchor="middle">PDF · JPG · PNG</text>
        <text class="d-sub" x="90" y="130" text-anchor="middle">batch or single</text>
        <rect class="box-a" x="190" y="50" width="160" height="100" rx="10" stroke="#0891B2" stroke-width="2"/>
        <text class="d-mono" x="270" y="74" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#164E63">EXTRACT</text>
        <text class="d-label" x="270" y="96" text-anchor="middle">Neural Engine</text>
        <text class="d-sub" x="270" y="114" text-anchor="middle">Gemini 1.5 Flash</text>
        <text class="d-sub" x="270" y="130" text-anchor="middle">confidence scoring</text>
        <rect class="box-soft" x="380" y="50" width="160" height="100" rx="10"/>
        <text class="d-mono" x="460" y="74" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#164E63">VENDOR</text>
        <text class="d-label" x="460" y="96" text-anchor="middle">Neural Sync</text>
        <text class="d-sub" x="460" y="114" text-anchor="middle">auto-populate</text>
        <text class="d-sub" x="460" y="130" text-anchor="middle">billing · address</text>
        <rect class="box-soft" x="570" y="50" width="160" height="100" rx="10"/>
        <text class="d-mono" x="650" y="74" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#164E63">CURRENCY</text>
        <text class="d-label" x="650" y="96" text-anchor="middle">Global Audit</text>
        <text class="d-sub" x="650" y="114" text-anchor="middle">IP localization</text>
        <text class="d-sub" x="650" y="130" text-anchor="middle">live exchange rates</text>
        <rect class="box-soft" x="760" y="50" width="160" height="100" rx="10"/>
        <text class="d-mono" x="840" y="74" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#164E63">DASHBOARD</text>
        <text class="d-label" x="840" y="96" text-anchor="middle">Stream Buffer</text>
        <text class="d-sub" x="840" y="114" text-anchor="middle">cumulative spend</text>
        <text class="d-sub" x="840" y="130" text-anchor="middle">AI exec summary</text>
        <path class="arr" d="M 160 100 L 190 100"/>
        <path class="arr" d="M 350 100 L 380 100"/>
        <path class="arr" d="M 540 100 L 570 100"/>
        <path class="arr" d="M 730 100 L 760 100"/>
        <rect class="box-deep" x="190" y="210" width="560" height="110" rx="12"/>
        <text class="d-mono" x="470" y="237" text-anchor="middle" style="fill:#fff;font-size:11px;font-weight:600">EXTRACTION LAYER</text>
        <text class="d-label" x="470" y="260" text-anchor="middle" style="fill:#fff;font-size:14px">Merchant Profiling · Dynamic Field Mapping · Granular Line Items</text>
        <text class="d-sub" x="470" y="282" text-anchor="middle" style="fill:rgba(255,255,255,0.85);font-size:12px">Invoice # · Due Dates · Payment Terms · Quantities · Unit Prices</text>
        <text class="d-sub" x="470" y="302" text-anchor="middle" style="fill:rgba(255,255,255,0.65);font-size:11px;font-style:italic">Real-time confidence score on every extracted field. Ambiguous extractions flagged, not silently wrong.</text>
        <path class="arr" d="M 270 150 L 270 180 L 470 180 L 470 210"/>
      </svg>`,
      steps: [
        {
          n: 1,
          title: "Multi-modal LLM reads layout, not templates.",
          body: `Gemini 1.5 Flash processes the document visually and linguistically — it understands that the number below a logo is an invoice number even when the column header is missing, or that "Net 30" in a footer means payment terms. Every extracted field carries a confidence score. Low-confidence fields flag for review; high-confidence fields flow through.`,
        },
        {
          n: 2,
          title: "Vendor Neural Sync eliminates re-entry for recurring merchants.",
          body: `Save a vendor's billing email and corporate address once. On every subsequent invoice from that merchant, <em>Neural Sync</em> detects the recurring vendor signature and auto-populates stored fields. AP workflows that today require typing the same vendor data 200 times a year type it once.`,
        },
        {
          n: 3,
          title: "Currency localization runs on every document, automatically.",
          body: `IP-based geo-detection sets a default local currency. Live exchange rates pull on each session so every invoice — regardless of origin currency — gets a consolidated local-currency equivalent in the audit. No manual conversion. No stale rates. Currency override is available per session if the reviewer is auditing for a different entity.`,
        },
        {
          n: 4,
          title: "Bulk AI summary surfaces patterns across the stream.",
          body: `After processing a batch, the AI Executive Summary identifies spending patterns, flags vendors with anomalous invoice frequency, and surfaces total-spend breakdowns by category. One summary across 200 invoices. Anomaly detection that a per-document review would never surface.`,
        },
      ],
    },
    outcomes: {
      eyebrow: "What you get",
      title: "Three things change once neural extraction runs the AP workflow.",
      items: [
        {
          metric: "0",
          unit: "manual entry",
          title: "Per invoice, for every supported format",
          body: "PDF, JPG, PNG — all processed by the same extraction engine. No template maintenance, no format-specific rules to update when vendors change their layouts.",
        },
        {
          metric: "Live",
          unit: "FX rates",
          title: "Currency conversion on every document",
          body: "IP-localized default currency, live exchange rates per session, override available. Consolidated local-currency audit across multi-currency invoice streams without a separate conversion step.",
        },
        {
          metric: "1×",
          unit: "per vendor",
          title: "Data entry for recurring merchants",
          body: "Neural Sync auto-populates billing email and address for saved vendors. Recurring AP relationships cost one entry, not one per invoice cycle.",
        },
      ],
      note: "Numbers reflect Invoicify AI as deployed at invoicify.brilworks.com. Extraction accuracy depends on document quality and LLM API performance. Confidence scoring ensures low-quality extractions surface for review rather than flowing through silently.",
    },
    fit: {
      eyebrow: "Is this right for you?",
      title: "Honest fit criteria. We'd rather say no than oversell.",
      yes: [
        "Your AP team processes 50+ invoices per month across multiple vendors and formats",
        "You receive invoices in varied layouts — PDFs, scanned images, different template versions",
        "Multi-currency invoices require manual conversion steps that slow reconciliation",
        "You want spending pattern analysis across your invoice stream, not just per-invoice data",
      ],
      no: [
        "You receive fewer than 20 invoices a month from a fixed set of vendors with consistent formats",
        "Your ERP already has native OCR invoice capture and the bottleneck is approval, not entry",
        "You need guaranteed 100% extraction accuracy on legally binding documents without human review of flagged fields",
        "Your compliance policy requires server-side document storage — Invoicify processes in memory and stores metadata only",
      ],
    },
    cta: {
      title: "Book a 30-minute scoping call.",
      body: "We'll review a sample of your invoice formats, walk through your current AP process, and tell you whether neural extraction fits — and what the vendor sync and currency audit setup would look like for your stack.",
    },
  },
  statementflow: {
    accent: "#7C3AED",
    accentSoft: "#EDE9FE",
    accentDeep: "#4C1D95",
    prototypeUrl: "https://statementflow.brilworks.com",
    title: "StatementFlow · AI credit card statement analyzer with interactive dashboard",
    description:
      "An AI-driven platform that transforms complex PDF credit card statements into actionable financial insights — transaction extraction, category-wise spend breakdowns, interactive charts, and CSV export.",
    breadcrumb: "StatementFlow — Credit card statement analyzer",
    chip: "Finance · Statement analysis · Spending insights",
    heroHeadline:
      "An AI statement analyzer that turns a PDF credit card statement into a full spending dashboard.",
    heroSubhead:
      "Upload any statement — Amex, Chase, or regional banks. Gemini 2.0 Flash extracts every transaction with 99% logic precision, categorizes spending, renders interactive charts, and exports to CSV. No login, no data storage.",
    heroStats: [
      { value: "99%", label: "Logic precision on transaction extraction" },
      { value: "Multi-bank", label: "Amex, Chase, and regional formats" },
      { value: "0", label: "Server-side data storage" },
    ],
    challenge: {
      eyebrow: "The Challenge",
      title:
        "Credit card statements are PDF black boxes. Understanding your spending requires extracting data that was never designed to be extracted.",
      lead: `A person downloads their monthly credit card statement. It's a 12-page PDF: transactions in a formatted table, running totals at the bottom, category labels that differ by bank. To actually analyze their spending, they either read it manually or paste it into a spreadsheet — row by row, 80 transactions, every month.`,
      paragraphs: [
        `The failures are structural. Bank PDFs aren't designed for data export — they're designed for printing. Extracting transactions with standard PDF tools produces garbled text when tables span pages, misaligned columns when formatting shifts, and silently dropped rows when the PDF is scanned rather than digital. By the time the data is clean, the insight is stale.`,
        `The root cause isn't user behavior. It's that <strong>PDF statement format was standardized for human reading, not machine analysis</strong> — and every bank has a different layout, different table structure, and different category taxonomy. A template-based extractor works for one bank and breaks on the next. When multi-bank support is required, templates don't scale.`,
        `StatementFlow uses Gemini 2.0 Flash to read statements the way a financial analyst would — <strong>understanding layout context, inferring transaction boundaries across page breaks, and classifying spending by merchant semantics</strong>, not column position. No templates. No format-specific rules to maintain.`,
      ],
    },
    how: {
      eyebrow: "How the agent handles it",
      title: "PDF in. Transactions extracted. Dashboard rendered. CSV ready.",
      svgHtml: `<svg viewBox="0 0 1040 340" xmlns="http://www.w3.org/2000/svg">
        <defs><marker id="ah" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#5A6B82"/></marker></defs>
        <rect class="box-soft" x="20" y="60" width="140" height="90" rx="10"/>
        <text class="d-mono" x="90" y="83" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#4C1D95">UPLOAD</text>
        <text class="d-label" x="90" y="104" text-anchor="middle">PDF Statement</text>
        <text class="d-sub" x="90" y="121" text-anchor="middle">any bank format</text>
        <text class="d-sub" x="90" y="136" text-anchor="middle">multi-page</text>
        <rect class="box-a" x="190" y="60" width="160" height="90" rx="10" stroke="#7C3AED" stroke-width="2"/>
        <text class="d-mono" x="270" y="83" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#4C1D95">PARSE</text>
        <text class="d-label" x="270" y="104" text-anchor="middle">Gemini 2.0 Flash</text>
        <text class="d-sub" x="270" y="121" text-anchor="middle">pdfjs extraction</text>
        <text class="d-sub" x="270" y="136" text-anchor="middle">99% precision</text>
        <rect class="box-soft" x="380" y="60" width="160" height="90" rx="10"/>
        <text class="d-mono" x="460" y="83" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#4C1D95">CATEGORIZE</text>
        <text class="d-label" x="460" y="104" text-anchor="middle">Spend Taxonomy</text>
        <text class="d-sub" x="460" y="121" text-anchor="middle">merchant semantics</text>
        <text class="d-sub" x="460" y="136" text-anchor="middle">category breakdown</text>
        <rect class="box-a" x="570" y="60" width="160" height="90" rx="10" stroke="#7C3AED" stroke-width="2"/>
        <text class="d-mono" x="650" y="83" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#4C1D95">VISUALIZE</text>
        <text class="d-label" x="650" y="104" text-anchor="middle">Interactive Dashboard</text>
        <text class="d-sub" x="650" y="121" text-anchor="middle">Recharts · charts</text>
        <text class="d-sub" x="650" y="136" text-anchor="middle">searchable table</text>
        <rect class="box-soft" x="760" y="60" width="150" height="90" rx="10"/>
        <text class="d-mono" x="835" y="83" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#4C1D95">EXPORT</text>
        <text class="d-label" x="835" y="104" text-anchor="middle">CSV Download</text>
        <text class="d-sub" x="835" y="121" text-anchor="middle">all transactions</text>
        <text class="d-sub" x="835" y="136" text-anchor="middle">structured data</text>
        <path class="arr" d="M 160 105 L 190 105"/>
        <path class="arr" d="M 350 105 L 380 105"/>
        <path class="arr" d="M 540 105 L 570 105"/>
        <path class="arr" d="M 730 105 L 760 105"/>
        <rect class="box-deep" x="190" y="210" width="580" height="90" rx="12"/>
        <text class="d-mono" x="480" y="237" text-anchor="middle" style="fill:#fff;font-size:11px;font-weight:600">PRIVACY-FIRST PROCESSING</text>
        <text class="d-label" x="480" y="260" text-anchor="middle" style="fill:#fff;font-size:14px">Documents processed via secure memory buffer. No server-side storage.</text>
        <text class="d-sub" x="480" y="282" text-anchor="middle" style="fill:rgba(255,255,255,0.8);font-size:12px">Data sent to Gemini API for extraction only · No document retention · All metadata in browser localStorage</text>
        <path class="arr" d="M 270 150 L 270 185 L 480 185 L 480 210"/>
      </svg>`,
      steps: [
        {
          n: 1,
          title: "Gemini reads layout, not column positions. Multi-bank without templates.",
          body: `pdfjs-dist renders each PDF page for Gemini 2.0 Flash to read as a visual and textual document. The model understands that a transaction boundary is a new row regardless of whether the bank uses lines, spacing, or indentation to separate them. Amex, Chase, regional bank formats — same extraction pipeline, no format-specific rules.`,
        },
        {
          n: 2,
          title: "Spend categorization uses merchant semantics, not keyword lists.",
          body: `"Amazon.com*1A2B3C4D" is categorized as Shopping, not Unknown, because the model understands merchant naming conventions. "SQ*BLUE BOTTLE SF" maps to Dining. Category assignments reflect how a financial analyst would read the statement, not how a pattern-matcher would keyword-scan it.`,
        },
        {
          n: 3,
          title: "The dashboard renders while you review, not after you wait.",
          body: `Recharts powers dynamic charts that update as transactions load. Category-wise spend breakdowns, monthly trend lines, and a fully searchable transaction table are generated from the extracted data without a page reload. The dashboard is the deliverable — not a data file the user has to chart themselves.`,
        },
        {
          n: 4,
          title: "CSV export makes the data portable. No lock-in.",
          body: `Every extracted transaction — date, merchant, amount, category — exports to a clean CSV on demand. Users can take it into Excel, their budgeting app, or their accountant's preferred tool. StatementFlow is the extraction and analysis layer, not a data silo.`,
        },
      ],
    },
    outcomes: {
      eyebrow: "What you get",
      title: "Three things change once AI reads your statement.",
      items: [
        {
          metric: "99%",
          unit: "precision",
          title: "Transaction extraction logic accuracy",
          body: "Gemini 2.0 Flash reads statements the way a trained analyst would — understanding page-spanning tables, merged cells, and multi-line merchant names without a format-specific template.",
        },
        {
          metric: "< 30s",
          unit: "per statement",
          title: "From PDF upload to full spending dashboard",
          body: "Extraction, categorization, and chart rendering complete in a single pass. A 12-page, 80-transaction statement produces a full dashboard faster than opening a spreadsheet.",
        },
        {
          metric: "0",
          unit: "data stored",
          title: "Server-side document retention",
          body: "Documents are processed in memory and sent to the Gemini API for extraction only. No server stores your statement. Extracted metadata lives in your browser's localStorage — private by architecture, not by policy.",
        },
      ],
      note: "Numbers observed in Brilworks' StatementFlow deployment at statementflow.brilworks.com. Extraction precision varies with PDF quality — scanned statements at low DPI perform below the 99% benchmark. Digital PDFs from major banks consistently hit or exceed it.",
    },
    fit: {
      eyebrow: "Is this right for you?",
      title: "Honest fit criteria. We'd rather say no than oversell.",
      yes: [
        "You need to analyze credit card spending across months or multiple cards without manual data entry",
        "Your statements come from multiple banks with different PDF formats",
        "You want spending insights in a shareable dashboard format, not a raw data dump",
        "Privacy is a hard requirement — processing in memory with no server storage is the right architecture for your use case",
      ],
      no: [
        "You need transaction data synced automatically from bank APIs rather than uploaded manually",
        "Your statements are low-resolution scans where OCR accuracy is already a problem before AI analysis",
        "You need multi-user access or cloud persistence for extracted data across devices",
        "You're building a compliance or tax product that requires legally auditable extraction provenance",
      ],
    },
    cta: {
      title: "Book a 30-minute scoping call.",
      body: "We'll look at your statement formats, your analysis workflow, and your data privacy constraints — then tell you whether AI-powered extraction fits and what a production deployment for your specific bank coverage would require.",
    },
  },
  planner: {
    accent: "#EA580C",
    accentSoft: "#FFEDD5",
    accentDeep: "#9A3412",
    title: "AI Planner Agent · Kill weak ideas before your team builds them",
    description:
      "A planning agent that runs every new product idea through three forcing-question gates (CEO, Eng, Design) before a single line of code is written.",
    breadcrumb: "Planner — product planning gauntlet",
    chip: "Planning agent · Forces review before code",
    heroHeadline:
      "A planning agent that kills weak ideas before your team builds them.",
    heroSubhead:
      "Every new product idea runs through three forcing-question gates — CEO, Engineering, Design — before a single task is written. Ideas that can't survive the gates die cheap. Ideas that pass ship with explicit kill criteria baked in.",
    heroStats: [
      { value: "3", label: "Human review gates before any code" },
      { value: "~40%", label: "Ideas killed at the first gate" },
      { value: "3 wks", label: "From brief to ready-to-build" },
    ],
    challenge: {
      eyebrow: "The Challenge",
      title:
        "Most product ideas don't fail in execution. They fail at the step nobody forced a halt on.",
      lead: 'A team hears an idea, feels the excitement, writes a brief, and starts building. Three months in, someone finally asks the question that should have been asked on day one: <em>is the demand actually there?</em>',
      paragraphs: [
        'By then, it\'s sunk-cost territory. Engineers have picked a stack. Designers have shipped screens. Nobody wants to be the one who says <strong>"let\'s kill this"</strong> — so the project drags on, eating runway, until it quietly gets deprioritized without a decision ever being made.',
        'The root cause isn\'t the team. It\'s that <strong>there\'s no forced pause between "exciting idea" and "shipping code"</strong> — no structured moment where a CEO must interrogate the demand, an engineer must challenge the architecture, and a designer must reject the generic SaaS template. When those conversations don\'t happen before code, they happen three months later, in a retrospective nobody enjoys.',
        "Planner exists to make those three conversations <strong>unavoidable</strong> — and to make kill criteria part of the plan, not a last-minute judgment call.",
      ],
    },
    how: {
      eyebrow: "How the agent handles it",
      title: "Three forcing gates. Ten ordered steps. One handoff score.",
      svgHtml: `<svg viewBox="0 0 1080 340" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="ah" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#5A6B82"/></marker>
        </defs>
        <rect class="box-soft" x="20" y="50" width="130" height="80" rx="10"/>
        <text class="d-label" x="85" y="82" text-anchor="middle">Validated brief</text>
        <text class="d-sub" x="85" y="100" text-anchor="middle">from ideas agent</text>
        <text class="d-sub" x="85" y="115" text-anchor="middle">or team intake</text>
        <rect class="box-a" x="200" y="50" width="150" height="80" rx="10" stroke="#EA580C" stroke-width="2"/>
        <text class="d-mono" x="275" y="72" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#9A3412">GATE 1 · PAUSE</text>
        <text class="d-label" x="275" y="95" text-anchor="middle">CEO review</text>
        <text class="d-sub" x="275" y="113" text-anchor="middle">Demand, wedge,</text>
        <text class="d-sub" x="275" y="126" text-anchor="middle">kill criteria</text>
        <rect class="box-a" x="395" y="50" width="150" height="80" rx="10" stroke="#EA580C" stroke-width="2"/>
        <text class="d-mono" x="470" y="72" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#9A3412">GATE 2 · PAUSE</text>
        <text class="d-label" x="470" y="95" text-anchor="middle">Engineering review</text>
        <text class="d-sub" x="470" y="113" text-anchor="middle">Architecture,</text>
        <text class="d-sub" x="470" y="126" text-anchor="middle">scaling, security</text>
        <rect class="box-a" x="590" y="50" width="150" height="80" rx="10" stroke="#EA580C" stroke-width="2"/>
        <text class="d-mono" x="665" y="72" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#9A3412">GATE 3 · PAUSE</text>
        <text class="d-label" x="665" y="95" text-anchor="middle">Design review</text>
        <text class="d-sub" x="665" y="113" text-anchor="middle">Clarity, delight,</text>
        <text class="d-sub" x="665" y="126" text-anchor="middle">error handling</text>
        <rect class="box-soft" x="790" y="50" width="150" height="80" rx="10"/>
        <text class="d-mono" x="865" y="72" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#9A3412">STEPS 5–9</text>
        <text class="d-label" x="865" y="92" text-anchor="middle">Requirements</text>
        <text class="d-label" x="865" y="107" text-anchor="middle">Roadmap, Tasks</text>
        <text class="d-sub" x="865" y="122" text-anchor="middle">Research, Decisions</text>
        <path class="arr" d="M 150 90 L 200 90"/>
        <path class="arr" d="M 350 90 L 395 90"/>
        <path class="arr" d="M 545 90 L 590 90"/>
        <path class="arr" d="M 740 90 L 790 90"/>
        <rect class="box-deep" x="340" y="220" width="400" height="90" rx="12"/>
        <text class="d-mono" x="540" y="244" text-anchor="middle" style="font-size:11px;font-weight:600;fill:#fff">STEP 10 · HANDOFF GATE</text>
        <text class="d-label" x="540" y="268" text-anchor="middle" style="fill:#fff;font-size:14px">Plan must score ≥ 16/24</text>
        <text class="d-sub" x="540" y="289" text-anchor="middle" style="fill:rgba(255,255,255,0.85);font-size:12px">16-point completeness check · kill criteria required · test plan attached</text>
        <path class="arr" d="M 865 130 L 865 180 L 540 180 L 540 220"/>
      </svg>`,
      steps: [
        {
          n: 1,
          title: "Three human gates sit in front of code.",
          body: 'CEO, Engineering, and Design each halt the pipeline. At each gate the agent runs forcing questions tuned to that role — <em>"What\'s the wedge?"</em>, <em>"What breaks at 10× scale?"</em>, <em>"What would make this feel like a template?"</em> — and nothing moves forward until a human signs off.',
        },
        {
          n: 2,
          title: "Step order is enforced, not suggested.",
          body: 'You physically cannot write tasks before requirements, and you cannot write requirements before all three gates pass. A tracker blocks out-of-order completion. This removes the temptation to skip ahead when the team "just wants to start building".',
        },
        {
          n: 3,
          title: "Kill criteria are part of the plan, not an afterthought.",
          body: 'Every idea that passes the CEO gate must have an explicit <em>"we shut this down if…"</em> statement written down, with metrics and a review date. No more zombie projects that nobody wants to be the one to cancel.',
        },
        {
          n: 4,
          title: "Handoff is scored before anything ships to engineering.",
          body: "The final step runs a 16-point completeness check on the plan. Below 16/24, it goes back to the gates. At 16+, engineering gets a brief with requirements, Phase 1 tasks, a test plan, and the kill criteria — ready to build, not ready to argue about.",
        },
      ],
    },
    outcomes: {
      eyebrow: "What you get",
      title: "Three things change on day one.",
      items: [
        {
          metric: "3",
          unit: "weeks",
          title: "Brief to build-ready",
          body: "From a rough idea to a scored plan engineering can execute — end to end in about three weeks, including the three gate reviews.",
        },
        {
          metric: "~40",
          unit: "%",
          title: "Ideas killed at the CEO gate",
          body: "Weak demand stories die before engineers touch code. Those engineering weeks go into ideas that survived the interrogation.",
        },
        {
          metric: "100",
          unit: "%",
          title: "Plans ship with explicit kill criteria",
          body: 'Every plan that reaches engineering has a written "we kill this if X by Y" line. Sunk-cost decisions get made on metrics, not mood.',
        },
      ],
      note:
        "Numbers observed in Brilworks' internal reference deployment. Actual figures on your stack will depend on team size, review cadence, and volume of incoming ideas.",
    },
    fit: {
      eyebrow: "Is this right for you?",
      title: "Honest fit criteria. We'd rather say no than oversell.",
      yes: [
        "You ship multiple new product bets per quarter and need to kill the weak ones early",
        "You have CEO, engineering, and design input available — this agent surfaces those voices, it doesn't replace them",
        "You've watched a project drag for 3+ months because nobody wanted to be the one to kill it",
        "You're willing to enforce step order (no skipping to tasks before the gates clear)",
      ],
      no: [
        "Your CEO makes all product decisions unilaterally — the three-gate model won't work",
        "You ship one or two ideas a year (the machinery is overkill)",
        "You want a tool that generates ideas, not one that stress-tests them",
        "You need same-day turnarounds on planning — this is for multi-week validation, not sprints",
      ],
    },
    cta: {
      title: "Book a 30-minute scoping call.",
      body: "We'll walk through your current planning flow, map it against the three-gate pattern, and tell you honestly whether it fits — and what it would take to ship.",
    },
  },
  marketing: {
    accent: "#C68B3C",
    accentSoft: "#FEF5E7",
    accentDeep: "#8A5A1D",
    title: "AI Marketing Agent · Ships publication-safe drafts without a human in the middle",
    description:
      "A content-operations agent that runs every draft through eight deterministic quality gates — fabrication, AI detection, brand drift, claim coverage — before anything reaches a human editor.",
    breadcrumb: "Marketing — 43-step content pipeline",
    chip: "Content operations · 43-step pipeline",
    heroHeadline:
      "A marketing agent that ships publication-safe drafts at scale.",
    heroSubhead:
      "A 43-step pipeline writes across 15 channels, then eight deterministic gates block fabricated stats, AI-detection patterns, brand drift, and off-pillar topics before anything reaches a human editor.",
    heroStats: [
      { value: "720+", label: "Validated draft attempts per app per month" },
      { value: "8", label: "Deterministic gates on every draft" },
      { value: "15", label: "Channels supported out of the box" },
    ],
    challenge: {
      eyebrow: "The Challenge",
      title:
        "Generic AI content tools optimize for volume. Publishing businesses care about three other things.",
      lead: `A marketing lead turns on an AI content tool. Week one the output looks great. Week six the blog is citing statistics that don't exist, the LinkedIn voice has drifted to generic SaaS, and an editor is spending ten hours a week reviewing drafts the tool promised would ship themselves.`,
      paragraphs: [
        `The failures are boringly specific. A fabricated <strong>$5K stat</strong> in a client-facing post. Em-dash clustering and "no fluff" openers flagged by GPTZero. A piece on a topic the brand explicitly said it wouldn't cover. No traceable source when legal asks <em>"where did this number come from?"</em>`,
        `The root cause isn't the model. It's that <strong>there's no forced gate between "draft written" and "draft shipped"</strong> — no deterministic check that the stat exists, that the voice is on-brand, that the topic is in a declared pillar. When those checks don't happen before publishing, they happen later, in a retraction email or a legal review nobody enjoys.`,
        `The agent exists to make those eight checks <strong>unavoidable</strong> — and cheap enough that they run on every draft, not just the ones a human remembered to read.`,
      ],
    },
    how: {
      eyebrow: "How the agent handles it",
      title: "43 steps. 8 gates. 8 crons. Every draft audited before a human reads it.",
      svgHtml: `<svg viewBox="0 0 1080 460" xmlns="http://www.w3.org/2000/svg">
        <defs><marker id="ah" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#5A6B82"/></marker></defs>
        <g>
          <rect class="box-soft" x="20" y="60" width="120" height="100" rx="10"/><text class="d-mono" x="80" y="85" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#8A5A1D">PHASE A</text><text class="d-label" x="80" y="108" text-anchor="middle">Intake</text><text class="d-sub" x="80" y="124" text-anchor="middle">Steps 1–4</text><text class="d-sub" x="80" y="140" text-anchor="middle">14-section interview</text>
          <rect class="box-soft" x="160" y="60" width="120" height="100" rx="10"/><text class="d-mono" x="220" y="85" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#8A5A1D">PHASE B</text><text class="d-label" x="220" y="108" text-anchor="middle">Positioning</text><text class="d-sub" x="220" y="124" text-anchor="middle">Step 5</text><text class="d-sub" x="220" y="140" text-anchor="middle">FROM→TO→FOR</text>
          <rect class="box-soft" x="300" y="60" width="120" height="100" rx="10"/><text class="d-mono" x="360" y="85" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#8A5A1D">PHASE C</text><text class="d-label" x="360" y="108" text-anchor="middle">Research</text><text class="d-sub" x="360" y="124" text-anchor="middle">Steps 6–8</text><text class="d-sub" x="360" y="140" text-anchor="middle">Persona / JTBD</text>
          <rect class="box-soft" x="440" y="60" width="120" height="100" rx="10"/><text class="d-mono" x="500" y="85" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#8A5A1D">PHASE D</text><text class="d-label" x="500" y="108" text-anchor="middle">Foundations</text><text class="d-sub" x="500" y="124" text-anchor="middle">Steps 9–11</text><text class="d-sub" x="500" y="140" text-anchor="middle">Pillars / SEO / Magnets</text>
          <rect class="box-a" x="580" y="60" width="200" height="100" rx="10" stroke-width="2"/><text class="d-mono" x="680" y="85" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#8A5A1D">PHASE E</text><text class="d-label" x="680" y="108" text-anchor="middle">Channel Execution</text><text class="d-sub" x="680" y="124" text-anchor="middle">Steps 12–38</text><text class="d-sub" x="680" y="140" text-anchor="middle">15 channel blocks</text>
          <rect class="box-soft" x="800" y="60" width="120" height="100" rx="10"/><text class="d-mono" x="860" y="85" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#8A5A1D">PHASE F</text><text class="d-label" x="860" y="108" text-anchor="middle">Tracking</text><text class="d-sub" x="860" y="124" text-anchor="middle">Step 39</text><text class="d-sub" x="860" y="140" text-anchor="middle">GA4 + UTM</text>
          <rect class="box-soft" x="940" y="60" width="120" height="100" rx="10"/><text class="d-mono" x="1000" y="85" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#8A5A1D">PHASE G</text><text class="d-label" x="1000" y="108" text-anchor="middle">Quick Wins</text><text class="d-sub" x="1000" y="124" text-anchor="middle">Steps 40–42</text><text class="d-sub" x="1000" y="140" text-anchor="middle">Hero / Magnet / CRO</text>
        </g>
        <rect class="box-a" x="20" y="220" width="520" height="120" rx="10" stroke="#B91C1C" stroke-width="1.5"/><text class="d-mono" x="280" y="245" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#B91C1C">PHASE H · VALIDATOR GATE</text><text class="d-label" x="280" y="268" text-anchor="middle" style="font-size:15px">Validate</text><text class="d-sub" x="280" y="285" text-anchor="middle">Step 43 · 6-category completeness check</text><text class="d-sub" x="280" y="304" text-anchor="middle">files · experts · GA4 · quick-wins · CONTEXT · cron scaffold</text><text class="d-sub" x="280" y="322" text-anchor="middle" font-style="italic">Auto-fixes missing files · escalates stuck drafts to humans</text>
        <rect class="box-deep" x="580" y="220" width="480" height="120" rx="10"/><text class="d-mono" x="820" y="245" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#fff">8 PRODUCTION CRONS</text><text class="d-label" x="820" y="268" text-anchor="middle" style="fill:#fff;font-size:15px">Daily + 30-minute cadence</text><text class="d-sub" x="820" y="288" text-anchor="middle" style="fill:rgba(255,255,255,0.85)">Self-learning · Calendar · Writer · Validator</text><text class="d-sub" x="820" y="304" text-anchor="middle" style="fill:rgba(255,255,255,0.85)">Poster · Engagement · Weekly · Supervisor</text><text class="d-sub" x="820" y="322" text-anchor="middle" style="fill:rgba(255,255,255,0.65);font-style:italic">~720 draft attempts per app per month</text>
        <path class="arr" d="M 140 110 L 160 110"/><path class="arr" d="M 280 110 L 300 110"/><path class="arr" d="M 420 110 L 440 110"/><path class="arr" d="M 560 110 L 580 110"/><path class="arr" d="M 780 110 L 800 110"/><path class="arr" d="M 920 110 L 940 110"/><path class="arr" d="M 1000 160 L 1000 200 L 280 200 L 280 220"/><path class="arr" d="M 540 280 L 580 280"/>
        <rect fill="#F4F8FC" stroke="#D9E3EF" x="20" y="380" width="1040" height="60" rx="8"/><text class="d-mono" x="40" y="402" style="font-size:10px;font-weight:600;fill:#5A6B82">EVERY STEP WRITES A FILE →</text><text class="d-sub" x="40" y="420" style="font-size:11px">01-product-marketing-context · 02-brand-assets · 03-channel-strategy · 04-credentials · 05-positioning · 06-personas · 07-jtbd · 08-competitor · 09-pillars · 10-keywords · 11-magnets ...</text>
      </svg>`,
      steps: [
        {
          n: 1,
          title: "The model proposes. Deterministic systems dispose.",
          body: `Content validation runs on regex, schema checks, HEAD requests, and tier-based scoring — not model judgment. Perplexity is scored locally via <em>llama-cpp + Qwen3.5-9B</em> so results are reproducible and the spend doesn't balloon with volume.`,
        },
        {
          n: 2,
          title: "A mechanical fixer runs before the LLM does.",
          body: `Banned phrases, em-dash clustering, hyphen compounds — all regex-fixable. The LLM only gets invoked for semantic problems the fixer can't handle. Token spend drops roughly <em>10× versus LLM-only pipelines</em> for the same output quality.`,
        },
        {
          n: 3,
          title: "Every step writes a file. Every gate reads from those files.",
          body: `43 numbered markdown artifacts — positioning, personas, pillars, claims, magnets. If a draft cites a price, that number must live verbatim in <em>01-product-marketing-context.md</em>. Fabrication stops being a policy and becomes structurally impossible.`,
        },
        {
          n: 4,
          title: "Eight production crons take over once validation passes.",
          body: `Writer drafts every 30 minutes. Validator runs all eight gates. Failed drafts get two mechanical revisions, then escalate to <em>stuck_human_review</em> instead of silently going out. Weekly analysis writes learnings back to memory so next week's calendar is smarter.`,
        },
      ],
    },
    outcomes: {
      eyebrow: "What you get",
      title: "Three things change once the pipeline runs.",
      items: [
        {
          metric: "720",
          unit: "+ drafts/mo",
          title: "Validated production volume per app",
          body: "30 drafts a day × 6 days × 4 weeks. Validator catches roughly half on the first pass — human editors only see what survived the gates.",
        },
        {
          metric: "~10",
          unit: "× lower",
          title: "Token spend vs LLM-only pipelines",
          body: "The mechanical fixer handles most revisions without calling the model. Cost scales with volume, not with editorial pickiness.",
        },
        {
          metric: "43",
          unit: "files",
          title: "Source-of-truth artifacts per app",
          body: "Every step writes a numbered markdown file. When legal asks where a claim came from, there's a traceable path from published line to original brief.",
        },
      ],
      note: "Numbers observed in Brilworks' internal reference deployment. Actual figures on your stack will depend on brand voice, channel mix, and the strictness of your validator gates.",
    },
    fit: {
      eyebrow: "Is this right for you?",
      title: "Honest fit criteria. We'd rather say no than oversell.",
      yes: [
        "You publish across 5+ channels and can't risk fabricated claims reaching the public",
        "You're spending $5K–$25K per month on generic AI content tools or freelancers and still editing everything by hand",
        "You have (or are building) a defined brand voice, positioning, and set of content pillars",
        "You're willing to enforce deterministic gates instead of trusting a model's self-assessment",
      ],
      no: [
        "You publish one or two posts a month (the validator and cron machinery is overkill)",
        "You have no brand voice or positioning yet — start there, not here",
        "You want fully autonomous publishing with zero human review at the end",
        "Your content is one-off campaigns rather than an ongoing multi-channel operation",
      ],
    },
    cta: {
      title: "Book a 30-minute scoping call.",
      body: "We'll walk through your current content flow, map it against the 43-step pipeline, and tell you honestly whether it fits — and what it would take to ship.",
    },
  },
  research: {
    accent: "#0D9488",
    accentSoft: "#CCFBF1",
    accentDeep: "#134E4A",
    title: "AI Research Agent · Knowledge Base Custodian",
    description:
      "A research agent that maintains a living knowledge base with deep-read synthesis and self-improving search, so every downstream marketing claim has a traceable source.",
    breadcrumb: "Research — Knowledge base custodian",
    chip: "Knowledge base · Wiki custodian",
    heroHeadline:
      "A research agent that keeps 340+ notes findable — without a human curator.",
    heroSubhead:
      "Maintains a source-of-truth knowledge base with deep-read synthesis, hybrid search, and weekly self-healing. Every downstream marketing claim is validated against this KB — which makes fabrication structurally impossible.",
    heroStats: [
      { value: "340+", label: "KB files continuously maintained" },
      { value: "291", label: "Research sessions logged" },
      { value: "4", label: "Self-healing cron jobs" },
    ],
    challenge: {
      eyebrow: "The Challenge",
      title:
        "AI-written content fails on one dimension more than any other: sourcing.",
      lead: `A marketing team publishes a confidently-worded post citing a statistic that was never published. A customer clicks the source link and finds a 404. A legal team asks where the number came from and nobody has an answer. The tool saved drafting time and spent it back on cleanup.`,
      paragraphs: [
        `LLMs will invent citations. They'll quote figures from papers that don't exist, attribute claims to companies that never made them, and link to articles that have long since gone dead. By the time anyone catches it, the post is live and the damage is a brand-trust event, not a typo.`,
        `The root cause isn't the model. It's that <strong>there's no single source of truth the content gets validated against</strong> — no searchable, versioned, auditable set of files that downstream validators can compare a draft to. Sources live scattered across Slack threads, bookmarks, drive folders, and Notion docs. Redundant research is the default. Broken links accumulate.`,
        `This agent exists to turn that scatter into <strong>one searchable KB</strong> that grows with every session, heals itself weekly, and makes "where did this claim come from?" a one-query answer.`,
      ],
    },
    how: {
      eyebrow: "How the agent handles it",
      title: "Routing-aware search. Deep reads, not snippets. Weekly self-healing.",
      svgHtml: `<svg viewBox="0 0 1080 420" xmlns="http://www.w3.org/2000/svg">
        <defs><marker id="ah" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#5A6B82"/></marker></defs>
        <g>
          <rect class="box-soft" x="40" y="20" width="140" height="80" rx="8"/>
          <text class="d-mono" x="110" y="40" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#134E4A">SLACK</text>
          <text class="d-label" x="110" y="58" text-anchor="middle">#tweet-research</text>
          <text class="d-sub" x="110" y="73" text-anchor="middle">URLs, discussions</text>
          <rect class="box-soft" x="220" y="20" width="140" height="80" rx="8"/>
          <text class="d-mono" x="290" y="40" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#134E4A">X BOOKMARKS</text>
          <text class="d-label" x="290" y="58" text-anchor="middle">+ Likes via bird</text>
          <text class="d-sub" x="290" y="73" text-anchor="middle">Live takes &amp; news</text>
          <rect class="box-soft" x="400" y="20" width="140" height="80" rx="8"/>
          <text class="d-mono" x="470" y="40" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#134E4A">RAW DOCS</text>
          <text class="d-label" x="470" y="58" text-anchor="middle">PDFs, articles</text>
          <text class="d-sub" x="470" y="73" text-anchor="middle">Filed via Jina</text>
          <rect class="box-a" x="40" y="140" width="500" height="180" rx="10" stroke="#0D9488" stroke-width="2"/>
          <text class="d-mono" x="290" y="165" text-anchor="middle" style="font-size:11px;font-weight:600;fill:#134E4A">RESEARCH PROFILE CORE</text>
          <g>
            <text class="d-label" x="60" y="190" style="font-size:12px">1. Consult meta/source-routing.md</text>
            <text class="d-sub" x="60" y="206">Topic → file map. Prevents searches.</text>
            <text class="d-label" x="60" y="230" style="font-size:12px">2. Run 3–5 hybrid queries</text>
            <text class="d-sub" x="60" y="246">QMD: vector + keyword + BM25</text>
            <text class="d-label" x="60" y="270" style="font-size:12px">3. Read top 5–10 matches fully</text>
            <text class="d-sub" x="60" y="286">Deep read, not snippets.</text>
            <text class="d-label" x="320" y="190" style="font-size:12px">4. Cross-reference collections</text>
            <text class="d-sub" x="320" y="206">Products, tweets, concepts.</text>
            <text class="d-label" x="320" y="230" style="font-size:12px">5. Synthesize insight</text>
            <text class="d-sub" x="320" y="246">500+ word file w/ citations.</text>
            <text class="d-label" x="320" y="270" style="font-size:12px">6. Update meta-files</text>
            <text class="d-sub" x="320" y="286">Query patterns, failure log.</text>
          </g>
          <path class="arr" d="M 110 100 L 110 140"/>
          <path class="arr" d="M 290 100 L 290 140"/>
          <path class="arr" d="M 470 100 L 470 140"/>
          <rect class="box-deep" x="580" y="140" width="460" height="80" rx="10"/>
          <text class="d-mono" x="810" y="162" text-anchor="middle" style="font-size:11px;font-weight:600;fill:#fff">WEEKLY KB ENHANCE (SUN 7 AM)</text>
          <text class="d-label" x="810" y="185" text-anchor="middle" style="fill:#fff;font-size:13px">Read compile report · Fix broken links · Refresh insights · Update concepts</text>
          <path class="arr" d="M 540 180 L 580 180"/>
          <rect class="box-soft" x="40" y="360" width="180" height="45" rx="8"/>
          <text class="d-label" x="130" y="377" text-anchor="middle">wiki/insights/</text>
          <text class="d-sub" x="130" y="392" text-anchor="middle" style="font-size:10px">500+ word syntheses</text>
          <rect class="box-soft" x="260" y="360" width="180" height="45" rx="8"/>
          <text class="d-label" x="350" y="377" text-anchor="middle">meta/failure-log.md</text>
          <text class="d-sub" x="350" y="392" text-anchor="middle" style="font-size:10px">Dead ends &amp; fixes</text>
          <rect class="box-soft" x="480" y="360" width="200" height="45" rx="8"/>
          <text class="d-label" x="580" y="377" text-anchor="middle">meta/source-routing.md</text>
          <text class="d-sub" x="580" y="392" text-anchor="middle" style="font-size:10px">Topic → file mappings</text>
          <rect class="box-deep" x="720" y="360" width="320" height="45" rx="8"/>
          <text class="d-label" x="880" y="377" text-anchor="middle" style="fill:#fff;font-size:13px">Feeds marketing validator gates</text>
          <text class="d-sub" x="880" y="392" text-anchor="middle" style="fill:rgba(255,255,255,0.85);font-size:10px">Claim coverage · Source freshness</text>
          <path class="arr" d="M 130 320 L 130 360"/>
          <path class="arr" d="M 350 320 L 350 360"/>
          <path class="arr" d="M 580 320 L 580 360"/>
          <path class="arr" d="M 810 220 L 810 360"/>
        </g>
      </svg>`,
      steps: [
        {
          n: 1,
          title: "The agent consults a routing map before it searches.",
          body: `Before running any query, the agent reads <em>meta/source-routing.md</em> — a topic-to-file map built up over hundreds of sessions. "For AI agents, check these files first." This is what stops the 300-parallel-Google-search death spiral that kills most research automation.`,
        },
        {
          n: 2,
          title: "Deep reads are mandatory. Snippet-skimming is forbidden.",
          body: `The system prompt blocks shallow reads. For every question, the agent reads <em>5–10 full matched files</em>, cross-references across products, tweets, and concepts, and only then synthesizes. Judgment lives in the cross-references, not in surface-level pattern matching.`,
        },
        {
          n: 3,
          title: "Every session writes machine-readable files, not chat logs.",
          body: `Insights go to <em>wiki/insights/</em> with explicit citations. Query patterns, dead ends, and new topic mappings get logged to <em>meta/</em>. The next session reads this memory — so mistakes don't repeat and successful query patterns compound.`,
        },
        {
          n: 4,
          title: "Sunday morning the KB heals itself.",
          body: `A weekly cron runs KB Enhance: broken links get repaired, missing concepts auto-generate, contradictions get flagged for human review. The KB improves without human maintenance — which is the only way a 340-file knowledge base stays trustworthy over time.`,
        },
      ],
    },
    outcomes: {
      eyebrow: "What you get",
      title: "Three things change once the KB is live.",
      items: [
        {
          metric: "340",
          unit: "+ files",
          title: "Indexed and queryable KB",
          body: "Mix of product docs, curated tweets, foundational articles, and 500+ word syntheses — all machine-searchable via hybrid (vector + keyword + BM25) retrieval.",
        },
        {
          metric: "100",
          unit: "%",
          title: "Marketing claims validated against the KB",
          body: "Claim-coverage and source-freshness gates depend entirely on files the research agent produced. Hallucinated stats have no way to pass.",
        },
        {
          metric: "4",
          unit: "crons",
          title: "Automated KB maintenance jobs",
          body: "KB Enhance, lint, compile, and concept auto-generation run on a schedule. Broken links get fixed without a human remembering to look.",
        },
      ],
      note: "Numbers observed in Brilworks' internal reference deployment. Actual figures on your stack will depend on source volume, publishing cadence, and how strict you want the validator gates.",
    },
    fit: {
      eyebrow: "Is this right for you?",
      title: "Honest fit criteria. We'd rather say no than oversell.",
      yes: [
        "You publish AI-written content and can't afford fabricated citations reaching the public",
        "You have curated sources scattered across Slack, drive, bookmarks, and Notion and no single search surface",
        "You want a KB that improves with every session, not a static repository",
        "You need an audit trail showing exactly where each published claim came from",
      ],
      no: [
        "You publish one post a week (the KB maintenance overhead is wasted)",
        "You have no curated sources yet — start with positioning and brand, not a KB",
        "You want fully autopublished content with no validator gates in front of it",
        "All your sources are public web URLs with no proprietary curation",
      ],
    },
    cta: {
      title: "Book a 30-minute scoping call.",
      body: "We'll walk through your current sources, map them into a searchable knowledge base, and show you how to wire validators on top — then tell you honestly whether it fits.",
    },
  },
  xagent: {
    accent: "#0284C7",
    accentSoft: "#E0F2FE",
    accentDeep: "#075985",
    title: "AI X/Twitter Agent · Bulk intake and human-gated social curation",
    description:
      "An X/Twitter agent that ingests tweet URLs into enriched KB articles and runs a daily curation pipeline with human approval before anything posts.",
    breadcrumb: "xagent — X/Twitter intake and curation",
    chip: "Social · X/Twitter intake + growth",
    heroHeadline:
      "An X/Twitter agent that turns tweets into KB articles — and never auto-posts.",
    heroSubhead:
      "Bulk-ingest tweet URLs into structured markdown articles with engagement stats, media, and related concepts. A daily curation cron drafts breaking-news tweets — but every post waits for a human to approve it.",
    heroStats: [
      { value: "260", label: "Live sessions across reference deployments" },
      { value: "2–5 min", label: "To process a batch of 10 tweets" },
      { value: "0", label: "Auto-posts without human approval" },
    ],
    challenge: {
      eyebrow: "The Challenge",
      title:
        "Founders want a social presence. They don't want to babysit a social pipeline.",
      lead: `A founder opens Slack, sees a tweet worth saving, drops it into #research. A week later, the tweet is buried three hundred messages deep. Next month the sales team asks for "that thing we saw about the new AI launch" and nobody can find it.`,
      paragraphs: [
        `Meanwhile the founder is spending <strong>thirty minutes a day</strong> curating news, writing hot takes, and posting to X by hand. Scripted automations hit rate limits and get shadowbanned. Generic AI tools happily auto-post something embarrassing at 2am. Tweets that could be searchable research artifacts live and die in Slack.`,
        `The root cause isn't the founder's discipline. It's that <strong>there's no pipeline between "interesting tweet" and "searchable KB article"</strong>, and no safe path between "draft tweet" and "posted tweet". Without that middle layer, you pick between burnout and embarrassment.`,
        `This agent adds the middle layer: sequential rate-limit-safe ingestion, a fixed markdown schema so downstream agents can parse reliably, and <strong>a human approval gate in front of every published tweet</strong>.`,
      ],
    },
    how: {
      eyebrow: "How the agent handles it",
      title: "Two modes: bulk ingestion into the KB, and daily curation with human sign-off.",
      svgHtml: `<svg viewBox="0 0 1080 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="ah" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#5A6B82"/></marker>
        </defs>
        <text class="d-mono" x="40" y="30" style="font-size:12px;font-weight:600;fill:#075985">MODE 1 · BATCH URL INGESTION</text>
        <rect class="box-soft" x="40" y="50" width="120" height="70" rx="8"/>
        <text class="d-label" x="100" y="72" text-anchor="middle">User drops</text>
        <text class="d-label" x="100" y="90" text-anchor="middle">2–19 URLs</text>
        <path class="arr" d="M 160 85 L 200 85"/>
        <rect class="box-a" x="200" y="50" width="280" height="70" rx="8" stroke="#0284C7" stroke-width="2"/>
        <text class="d-label" x="340" y="72" text-anchor="middle" style="font-size:12px">For each URL: bird CLI read</text>
        <text class="d-sub" x="340" y="88" text-anchor="middle">gallery-dl · Jina extract · Nitter fallback</text>
        <path class="arr" d="M 480 85 L 520 85"/>
        <rect class="box-soft" x="520" y="50" width="180" height="70" rx="8"/>
        <text class="d-label" x="610" y="72" text-anchor="middle">Build KB article</text>
        <text class="d-sub" x="610" y="88" text-anchor="middle">raw/tweets/{date}-{slug}.md</text>
        <path class="arr" d="M 700 85 L 740 85"/>
        <rect class="box-deep" x="740" y="50" width="300" height="70" rx="8"/>
        <text class="d-label" x="890" y="72" text-anchor="middle" style="fill:#fff;font-size:12px">Sections: tweet, stats, author</text>
        <text class="d-sub" x="890" y="88" text-anchor="middle" style="fill:rgba(255,255,255,0.85)">body, media, related concepts</text>
        <text class="d-mono" x="40" y="160" style="font-size:12px;font-weight:600;fill:#075985">MODE 2 · DAILY CURATION (CRON)</text>
        <rect class="box-soft" x="40" y="180" width="100" height="60" rx="8"/>
        <text class="d-label" x="90" y="200" text-anchor="middle">bird</text>
        <text class="d-label" x="90" y="217" text-anchor="middle">bookmarks</text>
        <rect class="box-soft" x="160" y="180" width="100" height="60" rx="8"/>
        <text class="d-label" x="210" y="200" text-anchor="middle">bird</text>
        <text class="d-label" x="210" y="217" text-anchor="middle">likes</text>
        <rect class="box-soft" x="280" y="180" width="120" height="60" rx="8"/>
        <text class="d-label" x="340" y="200" text-anchor="middle">gh api</text>
        <text class="d-label" x="340" y="217" text-anchor="middle">trending repos</text>
        <rect class="box-soft" x="420" y="180" width="100" height="60" rx="8"/>
        <text class="d-label" x="470" y="200" text-anchor="middle">HN / PH</text>
        <text class="d-label" x="470" y="217" text-anchor="middle">web_extract</text>
        <path class="arr" d="M 90 240 L 280 310"/>
        <path class="arr" d="M 210 240 L 280 310"/>
        <path class="arr" d="M 340 240 L 340 310"/>
        <path class="arr" d="M 470 240 L 380 310"/>
        <rect class="box-a" x="160" y="310" width="240" height="100" rx="10" stroke="#0284C7" stroke-width="2"/>
        <text class="d-label" x="280" y="335" text-anchor="middle" style="font-size:12px">Deduplicate vs KB</text>
        <text class="d-label" x="280" y="355" text-anchor="middle" style="font-size:12px">Pick freshest AI news</text>
        <text class="d-label" x="280" y="375" text-anchor="middle" style="font-size:12px">Generate BREAKING tweet</text>
        <path class="arr" d="M 280 410 L 280 450"/>
        <rect class="box-soft" x="160" y="450" width="240" height="40" rx="8"/>
        <text class="d-label" x="280" y="473" text-anchor="middle">Post draft to Slack</text>
        <rect class="box-deep" x="620" y="310" width="400" height="100" rx="10"/>
        <text class="d-label" x="820" y="335" text-anchor="middle" style="fill:#fff;font-size:12px">Human approval required</text>
        <text class="d-sub" x="820" y="355" text-anchor="middle" style="fill:rgba(255,255,255,0.85)">No self-posting. Draft → Slack</text>
        <text class="d-sub" x="820" y="375" text-anchor="middle" style="fill:rgba(255,255,255,0.85)">approval → bird tweet / bird reply</text>
        <path class="arr" d="M 400 450 L 620 450"/>
        <rect class="box-soft" x="620" y="450" width="280" height="40" rx="8"/>
        <text class="d-label" x="760" y="473" text-anchor="middle">Post to X via bird CLI</text>
      </svg>`,
      steps: [
        {
          n: 1,
          title: "Bulk intake runs sequentially, not in parallel.",
          body: `Drop 2–19 tweet URLs, walk away, come back to KB articles. One tweet at a time, with exponential backoff and a <em>Nitter fallback</em> when bird CLI hits rate limits. Predictable 2–5 minutes for a batch of ten, with zero ban risk.`,
        },
        {
          n: 2,
          title: "Every tweet becomes a reusable research artifact.",
          body: `Fixed markdown sections — <em>Tweet, Engagement, Author, Body, Media, Related Concepts</em>. Downstream agents (research, marketing validator) can parse tweets the same way they parse any other KB file. The tweet stops being a thing you have to remember where you saw.`,
        },
        {
          n: 3,
          title: "The curation cron dedupes before it drafts.",
          body: `Daily poll of bookmarks, likes, GitHub trending, HN, ProductHunt. <em>"Have we already written about this repo?"</em> — embeddings catch semantic dupes even with different URLs. The same AI launch doesn't get tweeted three times.`,
        },
        {
          n: 4,
          title: "A human approves every public post. Every time.",
          body: `Drafts land in Slack with context and approval buttons. Humans approve or reject. Only then does bird CLI fire. This is what keeps a CEO account from tweeting something regrettable at 2am — <em>"never auto-post"</em> is a hard rule, not a preference.`,
        },
      ],
    },
    outcomes: {
      eyebrow: "What you get",
      title: "Three things change on day one.",
      items: [
        {
          metric: "~90",
          unit: "%",
          title: "Semantic dedup accuracy",
          body: "Embeddings-based matching catches duplicates across different URLs (same repo, same AI launch). Prevents spammy-looking feeds.",
        },
        {
          metric: "0",
          unit: "auto-posts",
          title: "Tweets published without human sign-off",
          body: "Across every reference deployment. The approval gate is enforced structurally — there's no flag to disable it.",
        },
        {
          metric: "1K",
          unit: "+ articles",
          title: "Searchable tweet corpus over 6 months",
          body: "Projected from current intake rates. Every tweet the team processes becomes a citable artifact in downstream research and marketing.",
        },
      ],
      note: "Numbers observed in Brilworks' internal reference deployment. Actual figures on your stack will depend on intake volume, follower profile, and how aggressively you run the curation cron.",
    },
    fit: {
      eyebrow: "Is this right for you?",
      title: "Honest fit criteria. We'd rather say no than oversell.",
      yes: [
        "You run a founder or CEO account with 1K+ followers that needs to stay fresh without burnout",
        "Your team is curating AI or industry news regularly and losing the good tweets to Slack",
        "You need a searchable corpus of competitor and trend intel for sales and marketing briefings",
        "You want curation automated but every public post human-approved",
      ],
      no: [
        "You want full autopilot posting with no review — the approval gate is non-negotiable here",
        "Your account has under 500 followers and curation isn't a bottleneck yet",
        "You need real-time streaming intake — this is batch and daily, not second-by-second",
        "You have no Slack workspace and no way to route drafts to humans",
      ],
    },
    cta: {
      title: "Book a 30-minute scoping call.",
      body: "We'll walk through your current social and research flow, map it against the two-mode intake pattern, and tell you honestly whether it fits — and what it would take to ship.",
    },
  },
  lab: {
    accent: "#7C3AED",
    accentSoft: "#EDE9FE",
    accentDeep: "#5B21B6",
    title: "AI Lab Agent · Wiki infrastructure operator and tool evaluator",
    description:
      "An infrastructure agent that keeps an internal wiki self-healing on a schedule and delivers structured tool evaluation reports on demand — with approval required for every action.",
    breadcrumb: "Lab — Wiki operator and tool evaluator",
    chip: "Infrastructure · Wiki operator",
    heroHeadline:
      "An infrastructure agent that keeps your wiki healthy — and never acts without asking.",
    heroSubhead:
      "Daily compile, weekly lint, weekly concept auto-generation. On-demand tool evaluations with a fixed report schema. Every side-effect action gates on human approval first.",
    heroStats: [
      { value: "350", label: "Wiki files continuously maintained" },
      { value: "57", label: "Broken links fixed last month" },
      { value: "0", label: "Silent actions taken without approval" },
    ],
    challenge: {
      eyebrow: "The Challenge",
      title:
        "Wikis rot quietly. Tool evaluations happen inconsistently. Nobody owns either problem.",
      lead: `A team wiki starts clean. Six months in, every third link is a 404. Concepts that get mentioned in ten articles don't have their own pages. A new framework launches and the engineering team spends four hours testing it only to end up with <em>"seems good?"</em> as the verdict.`,
      paragraphs: [
        `The failures compound. The KB becomes a junkyard nobody trusts, so nobody updates it, so it rots faster. Tool evaluations get written in three different formats by three different engineers and become impossible to compare. A senior engineer becomes the bottleneck for both problems and quietly starts saying no.`,
        `The root cause isn't the team. It's that <strong>there's no forced cadence for maintenance and no forced structure for evaluations</strong>. Both jobs feel important, but neither is urgent on any given day — so they both get put off indefinitely.`,
        `This agent gives both jobs a schedule and a schema: <strong>three cron jobs for the KB, one fixed report template for evaluations, and every side-effect action approved before it runs</strong>.`,
      ],
    },
    how: {
      eyebrow: "How the agent handles it",
      title: "Three scheduled jobs. One report template. Zero silent actions.",
      svgHtml: `<svg viewBox="0 0 1080 380" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="ah" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#5A6B82"/></marker>
        </defs>
        <rect class="box-soft" x="40" y="20" width="200" height="110" rx="10"/>
        <text class="d-mono" x="140" y="45" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#5B21B6">DAILY 9 AM</text>
        <text class="d-label" x="140" y="68" text-anchor="middle">Wiki Compile Loop</text>
        <text class="d-sub" x="140" y="85" text-anchor="middle">compile.py</text>
        <text class="d-sub" x="140" y="100" text-anchor="middle">Scan raw/, reindex QMD</text>
        <text class="d-sub" x="140" y="115" text-anchor="middle">Flag gaps &amp; contradictions</text>
        <rect class="box-soft" x="380" y="20" width="200" height="110" rx="10"/>
        <text class="d-mono" x="480" y="45" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#5B21B6">SUNDAY 10 AM</text>
        <text class="d-label" x="480" y="68" text-anchor="middle">Wiki Lint Pass</text>
        <text class="d-sub" x="480" y="85" text-anchor="middle">lint.py --report</text>
        <text class="d-sub" x="480" y="100" text-anchor="middle">health-report.md</text>
        <text class="d-sub" x="480" y="115" text-anchor="middle">Top 3 actions</text>
        <rect class="box-soft" x="720" y="20" width="200" height="110" rx="10"/>
        <text class="d-mono" x="820" y="45" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#5B21B6">MONDAY 11 AM</text>
        <text class="d-label" x="820" y="68" text-anchor="middle">Auto-Generate Concepts</text>
        <text class="d-sub" x="820" y="85" text-anchor="middle">Read meta/gaps.md</text>
        <text class="d-sub" x="820" y="100" text-anchor="middle">Pick top 3 mentioned</text>
        <text class="d-sub" x="820" y="115" text-anchor="middle">Generate stubs</text>
        <path class="arr" d="M 140 130 L 140 160"/>
        <path class="arr" d="M 480 130 L 480 160"/>
        <path class="arr" d="M 820 130 L 820 160"/>
        <rect class="box-a" x="200" y="160" width="680" height="180" rx="12" stroke="#7C3AED" stroke-width="2.5"/>
        <text class="d-mono" x="540" y="190" text-anchor="middle" style="font-size:12px;font-weight:600;fill:#5B21B6">WIKI / (SINGLE SOURCE OF TRUTH)</text>
        <g>
          <text class="d-label" x="220" y="225" style="font-size:13px">350 files</text>
          <text class="d-sub" x="220" y="242">concepts, articles, metadata</text>
          <text class="d-label" x="380" y="225" style="font-size:13px">31 concept articles</text>
          <text class="d-sub" x="380" y="242">auto-generated this month</text>
          <text class="d-label" x="600" y="225" style="font-size:13px">93 broken links</text>
          <text class="d-sub" x="600" y="242">(down from 150+)</text>
          <text class="d-label" x="220" y="280" style="font-size:13px">master-index.md</text>
          <text class="d-sub" x="220" y="297">searchable via QMD</text>
          <text class="d-label" x="380" y="280" style="font-size:13px">meta/gaps.md</text>
          <text class="d-sub" x="380" y="297">most-mentioned topics</text>
          <text class="d-label" x="600" y="280" style="font-size:13px">meta/health-report.md</text>
          <text class="d-sub" x="600" y="297">weekly status + actions</text>
        </g>
        <text class="d-mono" x="540" y="360" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#5A6B82">FEEDS: research profile (routing maps) · marketing validator (claim sources)</text>
      </svg>`,
      steps: [
        {
          n: 1,
          title: "The wiki is kept alive by three scheduled jobs.",
          body: `Daily compile ingests new markdown and reindexes QMD. Weekly lint writes a <em>health-report.md</em> with top-three recommended actions. Weekly concept generation reads <em>gaps.md</em>, picks the three most-mentioned-but-missing concepts, and drafts stubs. The KB improves whether or not anyone remembered to check.`,
        },
        {
          n: 2,
          title: "Tool evaluations follow a fixed schema, not a vibe.",
          body: `Every report uses the same template: <em>TOOL, INSTALL, STATUS, TESTED, VERDICT, GOTCHAS</em>. Two evaluations you didn't write are still comparable at a glance. Decisions get made on structured facts, not on how confidently a Slack message happened to be worded.`,
        },
        {
          n: 3,
          title: "Every side-effect action waits for a human to say yes.",
          body: `Before installing, testing, or modifying anything outside the sandbox, the agent describes the plan and the timeline — then halts. <em>"I'll brew install AgentLens, init an example project, and compare traces. OK to proceed?"</em> Nothing runs on silent.`,
        },
        {
          n: 4,
          title: "The audit trail is automatic, not a policy.",
          body: `Terminal commands logged. Browser actions recorded. Every test reproducible. If a tool evaluation reached the wrong conclusion, you can replay the exact commands the agent ran — no detective work, no "I think I did it this way".`,
        },
      ],
    },
    outcomes: {
      eyebrow: "What you get",
      title: "Three things change once lab is running.",
      items: [
        {
          metric: "~30",
          unit: "min",
          title: "Per structured tool evaluation",
          body: "From \"vet this framework\" to a report the team can make a decision on — including install, test, and verdict with gotchas.",
        },
        {
          metric: "31",
          unit: "concepts",
          title: "Auto-generated last month",
          body: "Gap-driven concept stubs fill the most-referenced-but-missing articles in the wiki. No new KB debt piling up.",
        },
        {
          metric: "~150",
          unit: "→ 93",
          title: "Broken links trending down",
          body: "Weekly lint surfaces and repairs dead references. The wiki gets measurably healthier week over week instead of silently rotting.",
        },
      ],
      note: "Numbers observed in Brilworks' internal reference deployment. Actual figures on your stack will depend on wiki size, tool volume, and how strictly you want the approval gates enforced.",
    },
    fit: {
      eyebrow: "Is this right for you?",
      title: "Honest fit criteria. We'd rather say no than oversell.",
      yes: [
        "You maintain an internal wiki (BookStack, Outline, MediaWiki, or similar) with 100+ articles",
        "Broken links and missing concept pages frustrate your team on a regular basis",
        "You evaluate new tools or frameworks often enough to want a structured report format",
        "You want infrastructure maintenance on a schedule rather than a tap-on-the-shoulder",
      ],
      no: [
        "You have no internal wiki, or a wiki with fewer than 20 articles",
        "You never evaluate new tools — generic automation will be overkill",
        "You don't have terminal or admin access to the wiki's host",
        "You want an agent that silently installs and modifies things without asking",
      ],
    },
    cta: {
      title: "Book a 30-minute scoping call.",
      body: "We'll walk through your wiki, your current tool-evaluation pain, and map it against the three-cron pattern — then tell you honestly whether it fits.",
    },
  },
  stock: {
    accent: "#059669",
    accentSoft: "#D1FAE5",
    accentDeep: "#065F46",
    title: "AI Stock Analyst Agent · NSE portfolio research delivered daily",
    description:
      "An Indian equities agent that consolidates NSE, Screener, MoneyControl, and FII/DII flows into a daily Slack briefing with rule-based sell signals and portfolio risk metrics.",
    breadcrumb: "Stock — Indian portfolio analyst",
    chip: "Finance · Indian portfolio analyst",
    heroHeadline:
      "A portfolio analyst that delivers daily NSE research without hiring a trader.",
    heroSubhead:
      "Analyzes a 163-stock portfolio across fundamental, technical, and risk dimensions — NSE quotes, Screener, MoneyControl, FII/DII flows — into one formatted Slack report every weekday at 4 PM IST.",
    heroStats: [
      { value: "163", label: "Stocks tracked on a rolling 43-stock daily cycle" },
      { value: "7", label: "Live data sources consolidated per run" },
      { value: "~90s", label: "From cron fire to Slack delivery" },
    ],
    challenge: {
      eyebrow: "The Challenge",
      title:
        "Manual portfolio research doesn't scale past 50 stocks — and Indian-equities data is fragmented across five tools.",
      lead: `A portfolio manager opens five tabs every morning — NSE, Screener, MoneyControl, BSE corporate actions, the broker terminal — and spends two hours assembling what should be a five-minute decision. By the time the research is done, the FII flow that mattered at 10 AM is half-priced in.`,
      paragraphs: [
        `The failures are specific and expensive. A stock crosses its 200-DMA and nobody notices until it's down 15%. Three banking stocks weaken and the sector-rotation pattern only becomes obvious when someone runs the numbers on a Friday. A company does a 5:1 split and the position-sizing math breaks because no one was watching the corporate-actions feed that day.`,
        `The root cause isn't the manager. It's that <strong>the Indian-equities research toolchain was never designed to be consolidated</strong>. Each source has its own login, its own format, its own update cadence. Aggregating them by hand is a full-time job — and the minute you skip a day, the signals you miss are exactly the ones that hurt.`,
        `This agent collapses seven sources into one <strong>daily 90-second briefing</strong> with deterministic sell rules, sector rotation analysis, and risk metrics — so the decision-making keeps happening even when the analyst has a conflict.`,
      ],
    },
    how: {
      eyebrow: "How the agent handles it",
      title: "Seven parallel data feeds. One TypeScript risk engine. One Slack report.",
      svgHtml: `<svg viewBox="0 0 1040 420" xmlns="http://www.w3.org/2000/svg">
        <defs><marker id="ah" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#5A6B82"/></marker></defs>
        <g>
          <rect class="box-soft" x="20" y="20" width="100" height="50" rx="8"/><text class="d-label" x="70" y="40" text-anchor="middle">NSE Quotes</text><text class="d-sub" x="70" y="55" text-anchor="middle">Live prices</text>
          <rect class="box-soft" x="20" y="80" width="100" height="50" rx="8"/><text class="d-label" x="70" y="100" text-anchor="middle">Screener.in</text><text class="d-sub" x="70" y="115" text-anchor="middle">Fundamentals</text>
          <rect class="box-soft" x="20" y="140" width="100" height="50" rx="8"/><text class="d-label" x="70" y="160" text-anchor="middle">RSS News</text><text class="d-sub" x="70" y="175" text-anchor="middle">Signals</text>
          <rect class="box-soft" x="20" y="200" width="100" height="50" rx="8"/><text class="d-label" x="70" y="220" text-anchor="middle">FII/DII Flows</text><text class="d-sub" x="70" y="235" text-anchor="middle">Institutional</text>
          <rect class="box-soft" x="20" y="260" width="100" height="50" rx="8"/><text class="d-label" x="70" y="280" text-anchor="middle">Q Results</text><text class="d-sub" x="70" y="295" text-anchor="middle">Earnings</text>
          <rect class="box-soft" x="20" y="320" width="100" height="50" rx="8"/><text class="d-label" x="70" y="340" text-anchor="middle">Corp Actions</text><text class="d-sub" x="70" y="355" text-anchor="middle">Splits, bonus</text>
          <rect class="box-soft" x="20" y="380" width="100" height="30" rx="8"/><text class="d-label" x="70" y="400" text-anchor="middle">MF NAV</text>
          <rect class="box-a" x="160" y="40" width="200" height="370" rx="10" stroke="#059669" stroke-width="2"/>
          <text class="d-mono" x="260" y="65" text-anchor="middle" style="font-size:11px;font-weight:600;fill:#065F46">DEXTER INDIA</text>
          <text class="d-label" x="260" y="85" text-anchor="middle" style="font-size:13px">Bun + TypeScript + LangChain</text>
          <text class="d-sub" x="260" y="100" text-anchor="middle">1. Ingest feeds in parallel</text>
          <text class="d-sub" x="260" y="115" text-anchor="middle">2. 43-stock daily cycle</text>
          <text class="d-sub" x="260" y="130" text-anchor="middle">3. Per-stock analysis</text>
          <text class="d-sub" x="260" y="145" text-anchor="middle">(technical, fundamental, volume)</text>
          <text class="d-sub" x="260" y="160" text-anchor="middle">4. Risk engine (beta, concentration)</text>
          <text class="d-sub" x="260" y="175" text-anchor="middle">5. Sector rotation vs Nifty 50</text>
          <text class="d-sub" x="260" y="190" text-anchor="middle">6. Persona-based scoring</text>
          <text class="d-sub" x="260" y="205" text-anchor="middle">7. Sell signal generation</text>
          <text class="d-sub" x="260" y="220" text-anchor="middle">(PE &gt; percentile, position &lt; threshold)</text>
          <text class="d-sub" x="260" y="235" text-anchor="middle">8. Format Slack report</text>
          <rect class="box-soft" x="400" y="180" width="120" height="80" rx="8"/>
          <text class="d-mono" x="460" y="205" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#065F46">DAILY REPORT</text>
          <text class="d-label" x="460" y="228" text-anchor="middle">Portfolio metrics</text>
          <text class="d-sub" x="460" y="243" text-anchor="middle">Alerts · Sell list</text>
          <rect class="box-deep" x="560" y="180" width="120" height="80" rx="8"/>
          <text class="d-label" x="620" y="210" text-anchor="middle" style="fill:#fff">Slack delivery</text>
          <text class="d-sub" x="620" y="225" text-anchor="middle" style="fill:rgba(255,255,255,0.8)">#hermes-crons</text>
          <text class="d-sub" x="620" y="240" text-anchor="middle" style="fill:rgba(255,255,255,0.8)">4 PM IST M–F</text>
          <path class="arr" d="M 120 45 L 160 45"/><path class="arr" d="M 120 105 L 160 105"/><path class="arr" d="M 120 165 L 160 165"/><path class="arr" d="M 120 225 L 160 225"/><path class="arr" d="M 120 285 L 160 285"/><path class="arr" d="M 120 345 L 160 345"/><path class="arr" d="M 120 395 L 160 395"/>
          <path class="arr" d="M 360 220 L 400 220"/><path class="arr" d="M 520 220 L 560 220"/>
        </g>
      </svg>`,
      steps: [
        {
          n: 1,
          title: "Seven sources get consolidated in parallel — not sequentially.",
          body: `NSE quotes, Screener fundamentals, RSS news, FII/DII flows, quarterly results, corporate actions, and MF NAV all fetch in parallel. The whole ingestion layer completes in under a minute so the analyst question <em>"what happened today?"</em> has an answer before the market's post-close quiet has settled.`,
        },
        {
          n: 2,
          title: "The 43-stock cycle keeps deep analysis daily, not quarterly.",
          body: `For a 163-stock portfolio, 43 core holdings get the deep treatment today; the other 120 get summary metrics. Day 4 the whole portfolio has been reviewed in detail. No single day is overloaded, and nothing waits two months for a look.`,
        },
        {
          n: 3,
          title: "Sell rules are deterministic. They apply to everything, every day.",
          body: `<em>PE &gt; 95th percentile</em>, <em>position &lt; ₹25K</em>, <em>momentum negative 3+ weeks</em>, <em>gap-down on earnings without buyback</em>. The rules run on the whole portfolio every day, not when the manager happens to feel worried. Outputs a review list, not a decision — you still pull the trigger.`,
        },
        {
          n: 4,
          title: "Every report is timestamped and replayable.",
          body: `Each Slack report is archived in SQLite with the version hash and input snapshot. <em>"Why did the agent flag SBIN on April 15?"</em> is a 30-second lookup, not a re-audit. Decisions have a paper trail.`,
        },
      ],
    },
    outcomes: {
      eyebrow: "What you get",
      title: "Three things change once the daily cron fires.",
      items: [
        {
          metric: "163",
          unit: "stocks",
          title: "Covered daily via rolling cycle",
          body: "Every stock reviewed in depth every four days — not quarterly, not when someone remembers, not when a stock has already dropped 15%.",
        },
        {
          metric: "~90",
          unit: "seconds",
          title: "From cron fire to Slack delivery",
          body: "Parallel data fetch, local risk calculation, one formatted message. Replaces five manual browser tabs and thirty minutes of assembly.",
        },
        {
          metric: "0",
          unit: "missed",
          title: "Corporate actions (splits, bonus, rights)",
          body: "Every BSE corporate action flagged automatically. No more position-sizing math breaking silently when a stock does a 5:1 split.",
        },
      ],
      note: "Numbers observed in Brilworks' internal reference deployment on an Indian family office portfolio. Actual figures on your stack will depend on portfolio size, sector mix, and how strict you want the sell rules.",
    },
    fit: {
      eyebrow: "Is this right for you?",
      title: "Honest fit criteria. We'd rather say no than oversell.",
      yes: [
        "You manage 80+ NSE/BSE stocks actively and need research daily, not weekly",
        "You're already using 3+ tools (NSE, Screener, MoneyControl, broker terminal) to assemble morning research",
        "You want documented sell rules — not \"I sold because I got worried\" after-the-fact explanations",
        "You check the portfolio during market hours and can read a structured Slack report every day",
      ],
      no: [
        "Your portfolio is under 50 stocks and you review it monthly (a spreadsheet is cheaper)",
        "You trade F&O heavily and need sub-minute volatility tracking — this is daily, not intraday",
        "You want the agent to trade for you; this is analyst, not trader",
        "You don't have systematic risk metrics today and aren't ready to define them",
      ],
    },
    cta: {
      title: "Book a 30-minute scoping call.",
      body: "We'll walk through your portfolio structure, data sources, and risk metrics — and tell you honestly whether a daily analyst agent is the right next step.",
    },
  },
  ideas: {
    accent: "#CA8A04",
    accentSoft: "#FEF9C3",
    accentDeep: "#854D0E",
    title: "AI Ideas Agent · Forcing-question triage for raw ideas",
    description:
      "A Socratic triage agent that validates raw ideas in 10–15 minutes with six forcing questions and light research — instead of 2-hour \"expand this\" strategy sessions.",
    breadcrumb: "Ideas — Forcing-question triage",
    chip: "Intake · Forcing-question triage",
    heroHeadline:
      "An intake agent that triages raw ideas in 10–15 minutes — one hard question at a time.",
    heroSubhead:
      "One forcing question at a time, light research between question two and three, explicit gaps marked before handoff. No more two-hour strategy sessions that end in \"maybe.\"",
    heroStats: [
      { value: "10–15", label: "Minutes per idea, end to end" },
      { value: "6", label: "Forcing questions in startup mode" },
      { value: "16", label: "Verification dimensions before handoff" },
    ],
    challenge: {
      eyebrow: "The Challenge",
      title:
        "Ideas don't die from bad research. They die because triage is slow, vague, and inconsistent.",
      lead: `A founder captures an idea in Telegram. A week later, somebody starts a two-hour Zoom to "expand this." The conversation wanders. Nobody asks the one question that would have killed the idea in three minutes. The idea gets filed as "promising" and quietly forgotten.`,
      paragraphs: [
        `The failure mode is always the same. Asking <em>"tell me more"</em> generates more content, not more signal. Asking <em>"what's the market?"</em> triggers a research rabbit hole. Ideas get promoted without interrogation or buried without a hearing. Either way, you're optimizing for the wrong thing.`,
        `The root cause isn't the team's IQ. It's that <strong>there's no forced structure between "raw idea" and "handoff to planner"</strong> — no one-question-at-a-time discipline, no research gate, no scoring, no explicit gap-marking. Triage becomes a vibes exercise, and vibes don't scale past five ideas a week.`,
        `This agent puts structure in the middle: <strong>six forcing questions asked one at a time, 90 seconds of research between Q2 and Q3, and a 16-point score before anything goes to planner</strong> — with unknowns marked as unknowns, not papered over.`,
      ],
    },
    how: {
      eyebrow: "How the agent handles it",
      title: "Capture. Detect mode. Ask one hard question. Research the gap. Score. Handoff.",
      svgHtml: `<svg viewBox="0 0 920 360" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="ah" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#5A6B82"/></marker>
        </defs>
        <rect class="box-soft" x="30" y="50" width="130" height="90" rx="8"/>
        <text class="d-label" x="95" y="85" text-anchor="middle">Raw idea</text>
        <text class="d-sub" x="95" y="103" text-anchor="middle">(Telegram,</text>
        <text class="d-sub" x="95" y="117" text-anchor="middle">Slack)</text>
        <rect class="box-a" x="185" y="50" width="120" height="90" rx="8"/>
        <text class="d-label" x="245" y="88" text-anchor="middle">Capture</text>
        <text class="d-sub" x="245" y="104" text-anchor="middle">Summarize,</text>
        <text class="d-sub" x="245" y="116" text-anchor="middle">confirm</text>
        <polygon class="diamond" points="340,95 385,140 340,185 295,140"/>
        <text class="d-label" x="340" y="140" text-anchor="middle" style="font-size:11px">Mode?</text>
        <rect class="box-soft" x="420" y="20" width="110" height="70" rx="8"/>
        <text class="d-label" x="475" y="48" text-anchor="middle" style="font-size:12px">Startup</text>
        <text class="d-sub" x="475" y="63" text-anchor="middle">6 forcing Qs</text>
        <rect class="box-soft" x="420" y="110" width="110" height="70" rx="8"/>
        <text class="d-label" x="475" y="138" text-anchor="middle" style="font-size:12px">Builder</text>
        <text class="d-sub" x="475" y="153" text-anchor="middle">5 forcing Qs</text>
        <rect class="box-a" x="570" y="65" width="100" height="70" rx="8"/>
        <text class="d-label" x="620" y="98" text-anchor="middle">Ask Q1-Q5</text>
        <text class="d-sub" x="620" y="113" text-anchor="middle">(one at time)</text>
        <rect class="box-soft" x="705" y="65" width="100" height="70" rx="8"/>
        <text class="d-label" x="755" y="98" text-anchor="middle">Research</text>
        <text class="d-sub" x="755" y="113" text-anchor="middle">Q2-Q3 gap</text>
        <rect class="box-a" x="840" y="65" width="70" height="70" rx="8"/>
        <text class="d-label" x="875" y="93" text-anchor="middle">Verify</text>
        <text class="d-sub" x="875" y="110" text-anchor="middle">Score</text>
        <rect class="box-soft" x="690" y="190" width="120" height="80" rx="8"/>
        <text class="d-label" x="750" y="220" text-anchor="middle">Handoff to</text>
        <text class="d-label" x="750" y="238" text-anchor="middle">planner</text>
        <text class="d-sub" x="750" y="255" text-anchor="middle">ideas/inbox/</text>
        <text class="d-sub" x="750" y="267" text-anchor="middle">{slug}.md</text>
        <path class="arr" d="M 160 95 L 185 95"/>
        <path class="arr" d="M 305 95 L 295 140"/>
        <path class="arr" d="M 385 125 L 420 55"/>
        <path class="arr" d="M 385 155 L 420 145"/>
        <path class="arr" d="M 530 55 L 570 95"/>
        <path class="arr" d="M 530 145 L 570 95"/>
        <path class="arr" d="M 670 100 L 705 100"/>
        <path class="arr" d="M 805 100 L 840 100"/>
        <path class="arr" d="M 875 135 L 800 200"/>
        <text class="d-mono" x="30" y="310" style="font-size:11px;font-weight:600">FORCING QUESTIONS (STARTUP):</text>
        <text class="d-sub" x="30" y="328" style="font-size:9px">Demand reality · Status quo · Desperate specificity · Narrowest wedge · Observation · Future-fit</text>
        <text class="d-mono" x="30" y="350" style="font-size:11px;font-weight:600">FORCING QUESTIONS (BUILDER):</text>
        <text class="d-sub" x="30" y="368" style="font-size:9px">Coolest version · Who to show · Fastest path · Closest existing · 10x version</text>
      </svg>`,
      steps: [
        {
          n: 1,
          title: "Every idea gets classified before it gets interrogated.",
          body: `The agent summarizes the idea back to confirm, then detects mode — <em>startup (revenue-focused)</em> or <em>builder (learning-focused)</em>. Different modes get different question sets. There's no neutral triage; the questions you'd ask about a side project aren't the ones you'd ask about a launch.`,
        },
        {
          n: 2,
          title: "One forcing question at a time. Vague answers get pushed back.",
          body: `Not <em>"tell me more"</em>. Real questions: <em>"What would make you open Slack and say holy shit?"</em>, <em>"Who must this disappoint?"</em>. Answers that dodge get challenged before the next question fires. The whole point is to surface hidden assumptions, not collect more wordcount.`,
        },
        {
          n: 3,
          title: "Ninety seconds of research sits between question two and three.",
          body: `Enough to check competitors, market signals, and existing solutions — not a two-week market study. Findings get shared with the user, and unknowns get marked as unknowns: <em>"I don't know X. Do you want me to dig, or is this for planner?"</em> No false confidence on handoff.`,
        },
        {
          n: 4,
          title: "Nothing gets promoted without a 16-point score.",
          body: `The verify-idea skill scores on 16 dimensions — market, team, technical, timeline, wedge, kill criteria. Threshold: <em>10/16 to promote</em>. Below that, it's back to the questions or into the archive. Planner receives a brief, the score, and the explicit gap list — ready to decide, not ready to re-validate.`,
        },
      ],
    },
    outcomes: {
      eyebrow: "What you get",
      title: "Three things change once triage is structured.",
      items: [
        {
          metric: "10–15",
          unit: "min",
          title: "End-to-end time per idea",
          body: "Down from the typical 1–2 hour ad-hoc strategy session. Ideas don't linger waiting for a free afternoon.",
        },
        {
          metric: "0",
          unit: "unreviewed",
          title: "Ideas dying silently in the inbox",
          body: "A Sunday-morning digest surfaces every pending idea with a recommended action. No six-month-old ideas rediscovered during cleanup.",
        },
        {
          metric: "16",
          unit: "points",
          title: "Scored before every handoff",
          body: "Planner receives a brief with the score, the forcing-question answers, and explicit unknowns. Nothing to re-validate.",
        },
      ],
      note: "Numbers observed in Brilworks' internal reference deployment. Actual figures on your stack will depend on idea volume, team composition, and how strict you want the promotion threshold.",
    },
    fit: {
      eyebrow: "Is this right for you?",
      title: "Honest fit criteria. We'd rather say no than oversell.",
      yes: [
        "You capture 10+ ideas per week across Slack, Telegram, voice notes, and email",
        "Validation today takes 1–2 hours per idea and feels like a vibes exercise",
        "Ideas regularly die in the inbox or get promoted without real research",
        "Your team runs both startup-mode and builder-mode projects and needs different questions for each",
      ],
      no: [
        "You generate fewer than five ideas per week — the machinery isn't earning its keep",
        "Your triage is already fast and structured today",
        "You want the agent to make yes/no calls for you (this surfaces judgment, not replaces it)",
        "Your team isn't on Telegram or any async tool that supports one-at-a-time Q&A",
      ],
    },
    cta: {
      title: "Book a 30-minute scoping call.",
      body: "We'll walk through your current intake, map it against the six-question pattern, and tell you honestly whether structured triage is the right next step.",
    },
  },
  finance: {
    accent: "#047857",
    accentSoft: "#D1FAE5",
    accentDeep: "#064E3B",
    title: "AI Finance Agent · Multi-entity accrual-basis analyst with row-level citations",
    description:
      "A finance analyst agent that encodes institutional rules — name mappings, classification logic, accrual discipline — and cites every number back to a file path and row number.",
    breadcrumb: "Finance — Multi-entity financial analyst",
    chip: "Finance · Multi-entity financial analyst",
    heroHeadline:
      "A finance agent that turns a week of cross-entity research into five minutes.",
    heroSubhead:
      "Accrual-basis analysis across multiple legal entities and fiscal years, with institutional rules encoded in memory and every number cited to a file path and row number. Read-only by design.",
    heroStats: [
      { value: "~45min → 5min", label: "Typical cross-entity accrual query" },
      { value: "100%", label: "Answers with row-level citations" },
      { value: "4,590", label: "Documents indexed in the reference deployment" },
    ],
    challenge: {
      eyebrow: "The Challenge",
      title:
        "Multi-entity accrual accounting is tribal knowledge. The rules live in one person's head.",
      lead: `A controller asks a junior analyst: <em>"Is this internal transfer an outflow?"</em> The answer depends on context the analyst doesn't have yet. The next week, a different analyst gets the same question and answers differently. Nobody is wrong on purpose — but the books drift.`,
      paragraphs: [
        `The failures compound quietly. Payment date gets treated as invoice date, and accrual discipline slips without anyone noticing. A name in Accelevents Hours doesn't fuzzy-match to the Keka payroll record, and an employee gets double-counted. A board member asks where a <strong>₹12.4L revenue number</strong> came from, and the team spends half a day re-tracing the work.`,
        `The root cause isn't the team's skill. It's that <strong>the rules live in a person's head, not in the system</strong>. New analysts take weeks to learn entity separation, fuzzy-matching conventions, and accrual discipline by osmosis. Audit integrity depends on whoever happened to write the spreadsheet that quarter.`,
        `This agent encodes those rules as <strong>behavioral memory, not prompts</strong> — persistent classification logic, name mappings, accrual discipline — and cites every number back to a file and row so "where did that come from?" is a two-click answer.`,
      ],
    },
    how: {
      eyebrow: "How the agent handles it",
      title: "Read-only sources. Rules in memory. Row-level citations on every output.",
      svgHtml: `<svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="ah" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#5A6B82"/></marker>
        </defs>
        <rect class="box-soft" x="20" y="40" width="340" height="180" rx="10"/>
        <text class="d-mono" x="190" y="65" text-anchor="middle" style="font-size:12px;font-weight:600;fill:#064E3B">SOURCES (READ-ONLY)</text>
        <text class="d-label" x="190" y="88" text-anchor="middle">4,590 documents</text>
        <text class="d-sub" x="190" y="110" text-anchor="middle">Bank Statements (HDFC PDFs)</text>
        <text class="d-sub" x="190" y="125" text-anchor="middle">Payroll (Keka) · Sales Invoices</text>
        <text class="d-sub" x="190" y="140" text-anchor="middle">Purchase Bills · GST Filings</text>
        <text class="d-sub" x="190" y="155" text-anchor="middle">Form 16 · Director Statements</text>
        <text class="d-sub" x="190" y="170" text-anchor="middle" style="font-style:italic">→ pdfplumber · openpyxl · pandas</text>
        <text class="d-sub" x="190" y="185" text-anchor="middle">Folder: ~/Desktop/Knowledge/</text>
        <text class="d-sub" x="190" y="200" text-anchor="middle">{FY}/{Company}/</text>
        <rect class="box-soft" x="420" y="40" width="340" height="180" rx="10"/>
        <text class="d-mono" x="590" y="65" text-anchor="middle" style="font-size:12px;font-weight:600;fill:#064E3B">MEMORY-ENCODED RULES</text>
        <text class="d-label" x="590" y="88" text-anchor="middle">Behavioral constraints</text>
        <text class="d-sub" x="590" y="110" text-anchor="middle">Name mapping: Gaujar ↔ Gurjar</text>
        <text class="d-sub" x="590" y="125" text-anchor="middle">Axay ↔ Axaykumar (fuzzy match)</text>
        <text class="d-sub" x="590" y="140" text-anchor="middle">Employee-client billing + Waived Off</text>
        <text class="d-sub" x="590" y="155" text-anchor="middle">MF ≠ expense · Internal xfer ≠ txn</text>
        <text class="d-sub" x="590" y="170" text-anchor="middle">Accrual basis: invoice date, not</text>
        <text class="d-sub" x="590" y="185" text-anchor="middle">payment date</text>
        <text class="d-sub" x="590" y="200" text-anchor="middle">QMD search + hermes venv</text>
        <circle class="box-deep" cx="890" cy="130" r="50"/>
        <text class="d-label" x="890" y="135" text-anchor="middle" style="fill:#fff;font-size:14px;font-weight:600">finance</text>
        <text class="d-sub" x="890" y="150" text-anchor="middle" style="fill:#fff">profile</text>
        <rect class="box-a" x="820" y="260" width="340" height="120" rx="10" stroke="#047857" stroke-width="2"/>
        <text class="d-mono" x="990" y="285" text-anchor="middle" style="font-size:12px;font-weight:600;fill:#064E3B">OUTPUT</text>
        <text class="d-label" x="990" y="310" text-anchor="middle">Accrual-based</text>
        <text class="d-sub" x="990" y="327" text-anchor="middle">cross-entity, cross-year analysis</text>
        <text class="d-sub" x="990" y="342" text-anchor="middle">with row-level citations</text>
        <text class="d-sub" x="990" y="359" text-anchor="middle" style="font-style:italic">Revenue ₹12.4L from rows 23-31</text>
        <text class="d-sub" x="990" y="372" text-anchor="middle" style="font-style:italic">of Q3-invoices.xlsx</text>
        <path class="arr" d="M 360 130 L 420 130"/>
        <path class="arr" d="M 760 130 L 840 130"/>
        <path class="arr" d="M 890 180 L 890 260"/>
      </svg>`,
      steps: [
        {
          n: 1,
          title: "Rules live in memory, not in prompts.",
          body: `Classification logic, name mappings, and accrual rules are encoded as persistent behavioral constraints — not pasted into a prompt that a single query can override. <em>"Mutual fund is an investment, not an expense"</em> applies to every question, forever, until you change the memory.`,
        },
        {
          n: 2,
          title: "Every number traces back to a file path and row number.",
          body: `Answers come out with citations like <em>"Revenue ₹12.4L from rows 23–31 of Q3-invoices.xlsx"</em>. The audit trail isn't something you check afterward — it's the format of the answer. Legal asks where a number came from and the reply is a file link, not a half-day investigation.`,
        },
        {
          n: 3,
          title: "Sources are read-only. The agent never writes back.",
          body: `The Knowledge folder has read-only permissions. <em>pdfplumber</em> parses HDFC statements, <em>openpyxl + pandas</em> handle spreadsheets — but nothing is ever modified in place. Source integrity is structural, not a policy nobody remembers.`,
        },
        {
          n: 4,
          title: "Accrual discipline is enforced, not requested.",
          body: `Payment date vs invoice date distinctions are baked into the rule set. Internal transfers aren't outflows. <em>"Waived Off"</em> lines get excluded from revenue. The discipline doesn't depend on the analyst remembering — it depends on the memory entry, which is the same every query.`,
        },
      ],
    },
    outcomes: {
      eyebrow: "What you get",
      title: "Three things change once the rules are in memory.",
      items: [
        {
          metric: "45",
          unit: "min → 5min",
          title: "Typical cross-entity accrual query",
          body: "A question that used to require navigating folders, matching names, and applying rules by hand answers in minutes instead of hours.",
        },
        {
          metric: "100",
          unit: "%",
          title: "Answers with row-level citations",
          body: "Every number links back to a file path and row. Audit-ready by design, not a separate clean-up step.",
        },
        {
          metric: "~1",
          unit: "week",
          title: "Onboarding for a new analyst",
          body: "Down from the typical three weeks of learning rules by osmosis. The rules are in the agent — the analyst learns to ask good questions, not to memorize tribal knowledge.",
        },
      ],
      note: "Numbers observed in Brilworks' internal reference deployment across four legal entities and seven fiscal years. Actual figures on your stack will depend on document volume, entity structure, and rule complexity.",
    },
    fit: {
      eyebrow: "Is this right for you?",
      title: "Honest fit criteria. We'd rather say no than oversell.",
      yes: [
        "You manage 2+ legal entities with 3+ fiscal years of records and complex consolidation rules",
        "Cross-entity queries routinely take 3–8 hours to answer manually",
        "Your rules (name mappings, classification, accrual) live in someone's head, not in a system",
        "Audit queries require re-tracing work because citations don't exist today",
      ],
      no: [
        "You run a single entity with simple cash-basis accounting — this is overkill",
        "Your books are already in a fully normalized ERP with strong built-in rules",
        "You can't commit to a 1-week knowledge-intake session to encode the institutional rules",
        "You want the agent to make financial decisions — it cites and computes, it doesn't approve transactions",
      ],
    },
    cta: {
      title: "Book a 30-minute scoping call.",
      body: "We'll walk through your entity structure, your current rule set, and your audit pain — then tell you honestly whether a memory-encoded finance agent fits.",
    },
  },
  builder: {
    accent: "#DC2626",
    accentSoft: "#FEE2E2",
    accentDeep: "#991B1B",
    title: "AI Builder Agent · Strict-execution MVP delivery with TDD gates",
    description:
      "An engineering agent that reads planner docs, builds the MVP to spec with mandatory TDD, and refuses to mark a task done until tests, build, run, and acceptance all pass.",
    breadcrumb: "Builder — Strict execution agent",
    chip: "Engineering · Strict execution agent",
    heroHeadline:
      "An engineering agent that ships MVP phases without scope creep.",
    heroSubhead:
      "Eight mandatory steps, TDD enforced per task, four verification gates before done, STRICT mode that halts instead of improvising. Scope-locked handoff, not a heap of code needing cleanup.",
    heroStats: [
      { value: "8", label: "Mandatory steps per phase, no skipping" },
      { value: "TDD", label: "RED-GREEN-REFACTOR on every task" },
      { value: "4", label: "Verification gates before task-complete" },
    ],
    challenge: {
      eyebrow: "The Challenge",
      title:
        "MVP execution without gates becomes a two-month cleanup every time.",
      lead: `A plan says <em>Phase 1 uses PostgreSQL</em>. Midway through the build, the agent substitutes SQLite "for simplicity." Tests get deferred with a <em>"we'll refactor later"</em> comment. The handoff to marketing is a code dump with no demo URL, no test report, and three weeks of cleanup hiding inside.`,
      paragraphs: [
        `The failures are always the same. Scope creep gets discovered at code review, not at the decision point. Test coverage becomes debt that compounds into Phase 2. The agent hits an architectural decision the plan didn't cover and improvises rather than halting. <strong>"Task complete"</strong> starts to mean "code is written" instead of "tests pass, build succeeds, runs locally, acceptance met."`,
        `The root cause isn't that AI coding tools can't code. It's that <strong>there's no forced gate between "code written" and "task complete"</strong> — no enforced step order, no mandatory tests, no STRICT mode that halts on scope deviation. Without those gates, every MVP slips in the same three ways.`,
        `This agent replaces model discretion with <strong>mandatory step sequencing and four verification checks</strong> per task. Scope creep gets blocked structurally. Deferred tests stop being possible. The MVP arrives merge-ready instead of arriving as a pile of cleanup.`,
      ],
    },
    how: {
      eyebrow: "How the agent handles it",
      title: "Eight locked steps. TDD per task. Four checks before done.",
      svgHtml: `<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="ah" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#5A6B82"/></marker>
        </defs>
        <rect class="box-soft" x="20" y="20" width="140" height="80" rx="10"/>
        <text class="d-label" x="90" y="48" text-anchor="middle" style="font-size:14px">Handoff</text>
        <text class="d-sub" x="90" y="63" text-anchor="middle">from planner</text>
        <text class="d-sub" x="90" y="77" text-anchor="middle">apps/X/planning/</text>
        <rect class="box-a" x="180" y="20" width="120" height="80" rx="10" stroke="#DC2626" stroke-width="1.5"/>
        <text class="d-mono" x="240" y="43" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#991B1B">STEP 1</text>
        <text class="d-label" x="240" y="60" text-anchor="middle">context-load</text>
        <text class="d-sub" x="240" y="75" text-anchor="middle">CONTEXT.md</text>
        <rect class="box-a" x="320" y="20" width="120" height="80" rx="10" stroke="#DC2626" stroke-width="1.5"/>
        <text class="d-mono" x="380" y="43" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#991B1B">STEP 2</text>
        <text class="d-label" x="380" y="60" text-anchor="middle">architecture</text>
        <text class="d-sub" x="380" y="75" text-anchor="middle">build/arch.md</text>
        <rect class="box-a" x="460" y="20" width="120" height="80" rx="10" stroke="#DC2626" stroke-width="1.5"/>
        <text class="d-mono" x="520" y="43" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#991B1B">STEP 3</text>
        <text class="d-label" x="520" y="60" text-anchor="middle">brainstorm</text>
        <text class="d-sub" x="520" y="75" text-anchor="middle">2-3 approaches</text>
        <rect class="box-a" x="600" y="20" width="120" height="80" rx="10" stroke="#DC2626" stroke-width="1.5"/>
        <text class="d-mono" x="660" y="43" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#991B1B">STEP 4</text>
        <text class="d-label" x="660" y="60" text-anchor="middle">plan</text>
        <text class="d-sub" x="660" y="75" text-anchor="middle">build/plan.md</text>
        <rect class="box-a" x="740" y="20" width="120" height="80" rx="10" stroke="#DC2626" stroke-width="1.5"/>
        <text class="d-mono" x="800" y="43" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#991B1B">STEP 5</text>
        <text class="d-label" x="800" y="60" text-anchor="middle">build</text>
        <text class="d-sub" x="800" y="75" text-anchor="middle">TDD RED-GREEN</text>
        <rect class="box-a" x="180" y="140" width="120" height="80" rx="10" stroke="#DC2626" stroke-width="1.5"/>
        <text class="d-mono" x="240" y="163" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#991B1B">STEP 6</text>
        <text class="d-label" x="240" y="180" text-anchor="middle">test</text>
        <text class="d-sub" x="240" y="195" text-anchor="middle">tests + build + run</text>
        <rect class="box-a" x="320" y="140" width="120" height="80" rx="10" stroke="#DC2626" stroke-width="1.5"/>
        <text class="d-mono" x="380" y="163" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#991B1B">STEP 7</text>
        <text class="d-label" x="380" y="180" text-anchor="middle">code-review</text>
        <text class="d-sub" x="380" y="195" text-anchor="middle">verify-build skill</text>
        <rect class="box-deep" x="460" y="140" width="200" height="80" rx="10"/>
        <text class="d-mono" x="560" y="163" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#fff">STEP 8 · HANDOFF</text>
        <text class="d-label" x="560" y="180" text-anchor="middle" style="fill:#fff">to marketing</text>
        <text class="d-sub" x="560" y="195" text-anchor="middle" style="fill:#fff">MVP ready + demo</text>
        <rect fill="none" stroke="#DC2626" stroke-width="2" stroke-dasharray="5,5" x="20" y="280" width="940" height="140" rx="8"/>
        <text class="d-mono" x="40" y="305" style="font-size:11px;font-weight:600;fill:#991B1B">4 VERIFICATION CHECKS (Step 6)</text>
        <text class="d-label" x="40" y="325" style="font-size:12px">Tests pass</text>
        <text class="d-sub" x="40" y="342" style="font-size:11px">All unit + integration tests must pass before task done.</text>
        <text class="d-label" x="280" y="325" style="font-size:12px">Build succeeds</text>
        <text class="d-sub" x="280" y="342" style="font-size:11px">App compiles/bundles without errors.</text>
        <text class="d-label" x="540" y="325" style="font-size:12px">Runs locally</text>
        <text class="d-sub" x="540" y="342" style="font-size:11px">Dev server starts; main features work.</text>
        <text class="d-label" x="780" y="325" style="font-size:12px">Acceptance met</text>
        <text class="d-sub" x="780" y="342" style="font-size:11px">Task acceptance criteria fully satisfied.</text>
        <path class="arr" d="M 160 60 L 180 60"/>
        <path class="arr" d="M 300 60 L 320 60"/>
        <path class="arr" d="M 440 60 L 460 60"/>
        <path class="arr" d="M 580 60 L 600 60"/>
        <path class="arr" d="M 720 60 L 740 60"/>
        <path class="arr" d="M 800 100 L 800 120 L 240 120 L 240 140"/>
        <path class="arr" d="M 300 180 L 320 180"/>
        <path class="arr" d="M 400 180 L 460 180"/>
      </svg>`,
      steps: [
        {
          n: 1,
          title: "Step order is enforced, not suggested.",
          body: `Context-load → architecture → brainstorm → plan → build → test → code-review → handoff. A progress tracker physically blocks Step N+1 until Step N completes. You cannot write tasks before the architecture exists; you cannot build before the plan exists. Parallel rush is impossible.`,
        },
        {
          n: 2,
          title: "TDD is mandatory per task, not a nice-to-have.",
          body: `Every task runs <em>RED → GREEN → REFACTOR</em>. Failing test first. Minimal implementation. Refactor for clarity. Tests are the executable spec, and the <em>"we'll add tests later"</em> escape hatch does not exist in this workflow.`,
        },
        {
          n: 3,
          title: "Four gates must pass before a task is marked done.",
          body: `Tests pass. Build succeeds. Runs locally. Acceptance criteria met. All four, every task, no exceptions. <em>"Done"</em> means something specific — and none of the four can be faked because each has a deterministic check.`,
        },
        {
          n: 4,
          title: "STRICT mode halts on scope drift instead of improvising.",
          body: `Plan says PostgreSQL? PostgreSQL it is. If a simpler path could work, the agent halts and asks: <em>"The plan specifies PostgreSQL. I see a Postgres advisory-lock approach that's simpler than the Redis queue. Switch or stick?"</em> Decisions stay yours. Scope creep stays structurally impossible.`,
        },
      ],
    },
    outcomes: {
      eyebrow: "What you get",
      title: "Three things change once the step gates are on.",
      items: [
        {
          metric: "0",
          unit: "scope drift",
          title: "Substitutions without a halt",
          body: "STRICT mode blocks the \"let me just swap Postgres for SQLite\" failure mode that eats most MVP timelines.",
        },
        {
          metric: "100",
          unit: "%",
          title: "Tasks with tests before merge",
          body: "TDD is enforced at the task level. Deferred tests do not exist in this workflow.",
        },
        {
          metric: "4",
          unit: "gates",
          title: "Deterministic checks before done",
          body: "Tests, build, run, acceptance — all four required. Handoff to marketing includes demo URL, test report, and open items, not a code dump.",
        },
      ],
      note: "Numbers observed in Brilworks' internal reference deployment. Actual figures on your stack will depend on phase scope, language/framework, and how clean your planner handoff is.",
    },
    fit: {
      eyebrow: "Is this right for you?",
      title: "Honest fit criteria. We'd rather say no than oversell.",
      yes: [
        "You ship MVP phases on 2–4 week timelines with a clear scoped plan per phase",
        "Scope creep is the recurring killer of your build estimates",
        "Test coverage on past phases was spotty, deferred, or added after the fact",
        "Architecture drift typically gets discovered at code review, not at decision time",
      ],
      no: [
        "You deploy continuously with one-day iterations and no phase boundaries",
        "Your project scope evolves daily and a strict spec is impossible to write",
        "Code generation speed — not execution discipline — is your actual bottleneck",
        "You're not willing to write a real plan before the build starts",
      ],
    },
    cta: {
      title: "Book a 30-minute scoping call.",
      body: "We'll walk through your current phase pattern, map it against the eight-step gauntlet, and tell you honestly whether deterministic execution is the right next step.",
    },
  },
  ops: {
    accent: "#475569",
    accentSoft: "#F1F5F9",
    accentDeep: "#334155",
    title: "AI Ops Agent · Safe terminal utility with a hardcoded denylist",
    description:
      "A terminal utility agent that runs shell commands exactly as given and hard-blocks a fixed denylist of five dangerous command families — no interpretation, no override.",
    breadcrumb: "Ops — Safe terminal utility",
    chip: "Ops · Safe terminal utility",
    heroHeadline:
      "A terminal agent that runs your shell commands — except the five that could kill the server.",
    heroSubhead:
      "Run commands exactly as given. Get raw stdout, stderr, and exit code — no interpretation. A hardcoded denylist of five dangerous families blocks structurally, with a full audit trail on every run.",
    heroStats: [
      { value: "5", label: "Hardcoded denylist families, no override" },
      { value: "0", label: "Interpretation of command output" },
      { value: "100%", label: "Audit coverage on every execution" },
    ],
    challenge: {
      eyebrow: "The Challenge",
      title:
        "Shell access is all-or-nothing — and the \"all\" side includes the command that wipes the server.",
      lead: `A junior engineer is debugging a failing deploy. Three hours in, tired, they paste a command from memory. They mean <em>rm -rf ./tmp</em> but they mash a space in the wrong place. The server loses a directory you needed. Nobody meant to do this.`,
      paragraphs: [
        `The failure mode is the same every time. Every organization "solves" it the same way: a senior engineer becomes the bottleneck, reviewing every shell command before execution. Under pressure, some reviews get thorough and some get skipped. Onboarding juniors becomes a calculated risk, and scripts that need user input get written defensively or not at all.`,
        `The root cause isn't the typo. It's that <strong>safety is a cultural practice rather than a structural one</strong>. You can't review your way to safety on every command, and you can't write a playbook that survives a 2am incident. The dangerous commands don't announce themselves.`,
        `This agent flips the default: run almost anything, <strong>hard-block a fixed denylist of five dangerous families before execution</strong>, and return raw output with no interpretation. The bottleneck goes away. The catastrophic commands stay impossible.`,
      ],
    },
    how: {
      eyebrow: "How the agent handles it",
      title: "Denylist check. Execute or block. Raw output. Audit trail.",
      svgHtml: `<svg viewBox="0 0 900 340" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="ah" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#5A6B82"/></marker>
        </defs>
        <rect class="box-soft" x="40" y="40" width="160" height="100" rx="10"/>
        <text class="d-label" x="120" y="68" text-anchor="middle">Shell command</text>
        <text class="d-sub" x="120" y="85" text-anchor="middle">(user input)</text>
        <text class="d-sub" x="120" y="102" text-anchor="middle">git, docker, bun,</text>
        <text class="d-sub" x="120" y="118" text-anchor="middle">python, etc.</text>
        <polygon class="diamond" points="300,90 360,140 300,190 240,140"/>
        <text class="d-label" x="300" y="145" text-anchor="middle" style="font-size:12px">Dangerous?</text>
        <rect class="box-deep" x="60" y="240" width="200" height="80" rx="10"/>
        <text class="d-label" x="160" y="268" text-anchor="middle" style="fill:#fff;font-size:14px">BLOCKED</text>
        <text class="d-sub" x="160" y="285" text-anchor="middle" style="fill:#fff;font-size:11px">(hardcoded denylist)</text>
        <text class="d-sub" x="160" y="300" text-anchor="middle" style="fill:#fff;font-size:10px">Show 5 families</text>
        <rect class="box-soft" x="480" y="100" width="140" height="80" rx="10"/>
        <text class="d-label" x="550" y="128" text-anchor="middle">execute</text>
        <text class="d-sub" x="550" y="143" text-anchor="middle">run command</text>
        <text class="d-sub" x="550" y="158" text-anchor="middle">capture output</text>
        <rect class="box-soft" x="680" y="100" width="180" height="80" rx="10"/>
        <text class="d-label" x="770" y="128" text-anchor="middle">Raw stdout/stderr</text>
        <text class="d-sub" x="770" y="143" text-anchor="middle">+ exit code</text>
        <text class="d-sub" x="770" y="158" text-anchor="middle">paste-ready</text>
        <rect class="box-soft" x="240" y="240" width="160" height="80" rx="10"/>
        <text class="d-label" x="320" y="268" text-anchor="middle">User</text>
        <text class="d-sub" x="320" y="285" text-anchor="middle">decides what</text>
        <text class="d-sub" x="320" y="300" text-anchor="middle">to do with output</text>
        <path class="arr" d="M 200 90 L 240 140"/>
        <path class="arr" d="M 160 240 L 160 190"/>
        <path class="arr" d="M 360 140 L 480 140"/>
        <path class="arr" d="M 620 140 L 680 140"/>
        <path class="arr" d="M 300 190 L 320 240"/>
        <text class="d-mono" x="40" y="330" style="font-size:10px;font-weight:600;fill:#475569">5 DENYLIST FAMILIES:</text>
        <text class="d-sub" x="40" y="345" style="font-size:9px">rm -rf · gateway stop/start/restart/run · mkfs / dd / format · fork bombs · disk wipe</text>
      </svg>`,
      steps: [
        {
          n: 1,
          title: "Denylist, not allowlist — so actual ops work still works.",
          body: `Allowlists cripple engineers. Denylists stay ergonomic. The catch: the denylist is exactly five families and it doesn't grow by committee. <em>rm -rf</em>, <em>gateway stop/start/restart/run</em>, disk formatting, fork bombs, disk wipe. Everything else runs.`,
        },
        {
          n: 2,
          title: "Hardcoded and immutable. There is no override.",
          body: `The five families cannot be disabled at runtime. No <em>"just this once"</em> flag. No sudo escape. No metacharacter that bypasses parsing. The consistency is the product — you can tell a junior engineer <em>"just try it"</em> and mean it.`,
        },
        {
          n: 3,
          title: "Output comes back raw. The agent has zero opinions.",
          body: `You get exactly what the shell returned: stdout, stderr, exit code. No filtering. No helpful summaries. No AI judgment. The output is paste-ready for the next script in the pipeline, which is the whole point of a shell in the first place.`,
        },
        {
          n: 4,
          title: "Every command and its output is logged by default.",
          body: `Postgres-backed immutable audit log: who ran what, when, and what came back. When a blocked command is attempted, the ops team gets a Slack alert with the user and the command. Pattern analysis shows who's learning and who's trying to escape the guardrails.`,
        },
      ],
    },
    outcomes: {
      eyebrow: "What you get",
      title: "Three things change once the denylist is live.",
      items: [
        {
          metric: "5",
          unit: "families",
          title: "Dangerous commands blocked before execution",
          body: "Not more. Not less. Tight enough to stay ergonomic, strict enough to prevent the catastrophic ones.",
        },
        {
          metric: "0",
          unit: "false positives",
          title: "Safe commands wrongly blocked",
          body: "The denylist is deliberately narrow. Common ops work (git, docker, bun, python, find, grep) never hits a wall it shouldn't.",
        },
        {
          metric: "100",
          unit: "%",
          title: "Audit coverage on every run",
          body: "Every command, timestamp, user, output captured in immutable storage. SIEM-ready and replayable during post-incident forensics.",
        },
      ],
      note: "Numbers observed in Brilworks' internal reference deployment. Actual figures on your stack will depend on user volume, command mix, and how strict you want the alerting thresholds.",
    },
    fit: {
      eyebrow: "Is this right for you?",
      title: "Honest fit criteria. We'd rather say no than oversell.",
      yes: [
        "You have 3+ junior engineers who need shell access for diagnostics and operational tasks",
        "You currently review shell commands manually before execution and it's becoming a bottleneck",
        "You need an audit trail for compliance, post-incident forensics, or regulatory reviews",
        "Your team operates across multiple cloud providers and wants a consistent denylist",
      ],
      no: [
        "Your team is 1–2 engineers and you trust every command implicitly",
        "You need to grant sudo, systemctl, or privileged access beyond a user shell",
        "Your compliance policy requires human sign-off on every individual command",
        "You use a proprietary shell that doesn't match standard Unix command names",
      ],
    },
    cta: {
      title: "Book a 30-minute scoping call.",
      body: "We'll walk through your current shell-access policy, map it against the five-family denylist, and tell you honestly whether structural safety beats review-based safety for your team.",
    },
  },
  trainer: {
    accent: "#4F46E5",
    accentSoft: "#E0E7FF",
    accentDeep: "#3730A3",
    title: "AI Trainer Agent · QLoRA fine-tuning pipeline for domain-specific LLMs",
    description:
      "An ML orchestration agent that fine-tunes a code-completion LLM on your codebase, quantizes to GGUF, and deploys locally via Ollama — for roughly the cost of a lunch.",
    breadcrumb: "Trainer — QLoRA fine-tuning pipeline",
    chip: "Training · QLoRA fine-tuning pipeline",
    heroHeadline:
      "A training agent that ships a private code LLM for the cost of a lunch.",
    heroSubhead:
      "Train Qwen 2.5 Coder 7B on your codebase in one weekend for about $6 in compute. Quantize to GGUF, deploy locally via Ollama, and get dramatically better autocomplete on your internal SDK — with zero external API calls at inference.",
    heroStats: [
      { value: "~$6", label: "Compute cost per training run" },
      { value: "45–80ms", label: "Local inference latency per token" },
      { value: "0", label: "External API calls at inference" },
    ],
    challenge: {
      eyebrow: "The Challenge",
      title:
        "Public LLMs don't know your SDK. And every autocomplete request leaks code to a cloud you don't own.",
      lead: `An engineer triggers autocomplete on an internal function. The model suggests a signature from a generic open-source library — which doesn't match the internal SDK, compiles cleanly, and quietly introduces a bug that shows up two weeks later. The LLM bill for the week is <em>$500+</em>, and a snippet of your proprietary code just trained somebody else's future model.`,
      paragraphs: [
        `Both failures are structural. Public models train on public repos — your internal patterns are unknown. Cloud APIs charge per token and round-trip at 500ms–2s, which makes the autocomplete feel worse than a local tool. Compliance blocks the whole thing in regulated industries, and the workaround is usually "engineers write without autocomplete," which is a productivity tax nobody wanted.`,
        `The root cause isn't the quality of the base models. It's that <strong>there's no owned pipeline between "your codebase" and "a model that understands it"</strong>. Fine-tuning is orchestration across data collection, synthetic Q&A, GPU training, quantization, and local deployment — each with failure modes a script can't recover from.`,
        `This agent owns the whole pipeline: <strong>idempotent data collection, 3–5k synthetic Q&A pairs grounded in real code, QLoRA training on a rented A100, GGUF quantization, and a local Ollama endpoint</strong> — reproducible per quarter as the codebase grows.`,
      ],
    },
    how: {
      eyebrow: "How the agent handles it",
      title: "Five isolated stages. Reproducible per quarter. Everything ends in an Ollama endpoint.",
      svgHtml: `<svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg">
        <defs><marker id="ah" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#5A6B82"/></marker></defs>
        <rect class="box-soft" x="20" y="80" width="140" height="100" rx="10"/><text class="d-mono" x="90" y="105" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#3730A3">SOURCE</text><text class="d-label" x="90" y="128" text-anchor="middle">Codebase</text><text class="d-sub" x="90" y="144" text-anchor="middle">~/Desktop/</text><text class="d-sub" x="90" y="160" text-anchor="middle">Accelevents/</text>
        <rect class="box-soft" x="180" y="80" width="140" height="100" rx="10"/><text class="d-mono" x="250" y="105" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#3730A3">SOURCE</text><text class="d-label" x="250" y="128" text-anchor="middle">KB Snapshots</text><text class="d-sub" x="250" y="144" text-anchor="middle">Documentation</text><text class="d-sub" x="250" y="160" text-anchor="middle">Architecture</text>
        <rect class="box-a" x="360" y="60" width="380" height="140" rx="10" stroke="#4F46E5" stroke-width="2"/><text class="d-mono" x="550" y="85" text-anchor="middle" style="font-size:11px;font-weight:600;fill:#3730A3">~/ACCELEVENTS-TRAINING/</text><text class="d-label" x="420" y="115" text-anchor="middle" style="font-size:13px">Data Collection</text><text class="d-sub" x="420" y="135" text-anchor="middle">Extract files &amp; docs</text><text class="d-label" x="550" y="115" text-anchor="middle" style="font-size:13px">Synthetic Q&amp;A</text><text class="d-sub" x="550" y="128" text-anchor="middle">3,000–5,000 pairs</text><text class="d-sub" x="550" y="141" text-anchor="middle">(JSONL)</text><text class="d-label" x="680" y="115" text-anchor="middle" style="font-size:13px">QLoRA Train</text><text class="d-sub" x="680" y="128" text-anchor="middle">RunPod A100</text><text class="d-sub" x="680" y="141" text-anchor="middle">2–4 hours</text>
        <rect class="box-soft" x="780" y="80" width="140" height="100" rx="10"/><text class="d-mono" x="850" y="105" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#3730A3">EXPORT</text><text class="d-label" x="850" y="128" text-anchor="middle">GGUF Format</text><text class="d-sub" x="850" y="144" text-anchor="middle">Q5_K_M</text><text class="d-sub" x="850" y="160" text-anchor="middle">~5GB</text>
        <rect class="box-deep" x="960" y="80" width="140" height="100" rx="10"/><text class="d-mono" x="1030" y="105" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#fff">DEPLOY</text><text class="d-label" x="1030" y="128" text-anchor="middle" style="fill:#fff">Local Ollama</text><text class="d-sub" x="1030" y="144" text-anchor="middle" style="fill:rgba(255,255,255,0.85)">accelevents:</text><text class="d-sub" x="1030" y="160" text-anchor="middle" style="fill:rgba(255,255,255,0.85)">latest</text>
        <rect fill="#F4F8FC" stroke="#D9E3EF" x="20" y="260" width="1080" height="80" rx="8"/><text class="d-mono" x="40" y="285" style="font-size:11px;font-weight:600;fill:#3730A3">OUTPUT ARTIFACT</text><text class="d-label" x="40" y="305" style="font-size:13px">accelevents:latest — fine-tuned Qwen 2.5 Coder 7B running locally via Ollama</text><text class="d-sub" x="40" y="325" style="font-size:11px">Autocompletes internal SDK · knows API docs · higher accuracy vs base · zero external API calls · one-time cost: ~$6</text>
        <path class="arr" d="M 160 130 L 180 130"/><path class="arr" d="M 320 130 L 360 130"/><path class="arr" d="M 740 130 L 780 130"/><path class="arr" d="M 920 130 L 960 130"/><path class="arr" d="M 550 200 L 550 260"/>
      </svg>`,
      steps: [
        {
          n: 1,
          title: "Training artifacts live outside your source tree.",
          body: `Every intermediate file — manifests, JSONL pairs, adapter weights, GGUF exports — lands in an isolated <em>~/accelevents-training/</em>. Source code stays read-only. Git hooks block accidental commits of model weights to the main repo. Re-runs are cheap and rollback is easy.`,
        },
        {
          n: 2,
          title: "Synthetic Q&A is grounded in your real code, not generic prompts.",
          body: `The pipeline extracts actual functions, docstrings, type hints, and API endpoints — then generates <em>3–5k pairs</em> of (instruction, input, output) where each task is one your team actually performs. <em>"Complete this function,"</em> <em>"explain this endpoint"</em> — not abstract LLM trivia.`,
        },
        {
          n: 3,
          title: "QLoRA on a rented A100 — not a full fine-tune.",
          body: `Adapter weights only. <em>10× cheaper than full training</em> at comparable quality for domain specialization. A 2–4 hour run on a <em>$1.50/hr A100</em> lands at about $6 total. Quarterly re-trains stay predictable instead of "let's raise a budget for this."`,
        },
        {
          n: 4,
          title: "The output is a local Ollama endpoint. Zero per-token cost.",
          body: `Merge adapter with base, quantize to GGUF Q5_K_M (~5GB, no measurable accuracy loss on code tasks), and register with Ollama. The IDE plugin now talks to <em>localhost:11434</em>. Your code never leaves your infrastructure, and the inference bill is rent on a laptop.`,
        },
      ],
    },
    outcomes: {
      eyebrow: "What you get",
      title: "Three things change once the model is local.",
      items: [
        {
          metric: "~$6",
          unit: "per run",
          title: "Total compute cost per training cycle",
          body: "2–4 hours of A100 plus quantization. Amortized quarterly vs the cloud LLM bill this replaces.",
        },
        {
          metric: "45–80",
          unit: "ms/token",
          title: "Local inference latency",
          body: "CPU-only Ollama, no GPU required. IDE autocomplete feels instant — 500ms–2s cloud round trips are gone.",
        },
        {
          metric: "0",
          unit: "external calls",
          title: "Code leaving your infrastructure at inference",
          body: "The model runs entirely locally. No per-token costs, no data leakage to cloud providers, no licensing exposure.",
        },
      ],
      note: "Numbers observed in Brilworks' internal reference deployment training Qwen 2.5 Coder 7B on the Accelevents codebase. Actual figures on your stack will depend on codebase size, GPU rental rates, and quantization tolerance.",
    },
    fit: {
      eyebrow: "Is this right for you?",
      title: "Honest fit criteria. We'd rather say no than oversell.",
      yes: [
        "You have 150K+ lines of proprietary code with domain-specific patterns",
        "Your team uses LLM-based code tools daily and is spending $500+ per month on cloud LLM APIs",
        "You can't send code snippets to cloud APIs because of compliance or IP concerns",
        "You have engineering capacity to integrate a local LLM into your IDE workflow",
      ],
      no: [
        "Your codebase is under 50K lines — not enough signal for a meaningful fine-tune",
        "You're okay with public models seeing your code patterns",
        "You need real-time model updates, not quarterly retraining cadence",
        "Your team has no ML or infra experience to debug training failures",
      ],
    },
    cta: {
      title: "Book a 30-minute scoping call.",
      body: "We'll walk through your codebase, your current LLM bill, and your compliance constraints — then tell you honestly whether a private local model is worth the weekend.",
    },
  },
  video: {
    accent: "#DB2777",
    accentSoft: "#FCE7F3",
    accentDeep: "#9D174D",
    title: "AI Video Agent · Character-consistent short-form video at generation cost",
    description:
      "A media production agent that ships character-consistent short-form video from a recipe brief — 4-beat script, cached reference face, VLM safety gate, multi-platform crops.",
    breadcrumb: "Video — Content production agent",
    chip: "Media · Content production (Little Tummy)",
    heroHeadline:
      "A video agent that ships character-consistent short-form content at generation cost.",
    heroSubhead:
      "A 4-beat script structure, a cached reference face on every generation, a VLM safety gate for age-appropriate content, and automatic crops for Reels, Shorts, and TikTok. 30+ assets per month for the price of a few lunches.",
    heroStats: [
      { value: "30+", label: "Brand-safe videos produced per month" },
      { value: "$15–60", label: "Total generation cost for a full month" },
      { value: "100%", label: "Character consistency across the series" },
    ],
    challenge: {
      eyebrow: "The Challenge",
      title:
        "Video production scales linearly with editors. Generic AI video scales instantly — and inconsistently.",
      lead: `A food-content brand needs 30 videos a month. Hiring editors caps out at 5–10 per week per head. Turning to generic AI video tools produces a character that looks different every generation — and occasionally something you can't publish, especially when the audience is kids.`,
      paragraphs: [
        `The failures are specific. Every generation picks a different character face, so a five-episode series looks like five different shows. Scripts wander in length and pacing because nothing enforces structure. A 60-second asset needs three platform crops — Reels, Shorts, TikTok — and each one ends up as separate work. A single off-brand frame slips through and you're doing emergency takedown calls.`,
        `The root cause isn't the generation model. It's that <strong>there's no pipeline between "recipe brief" and "published asset"</strong> that enforces structure, consistency, and safety. Without that pipeline, you either pay editors to hand-build every video or you publish output that looks like it came from five different studios.`,
        `This agent adds the pipeline: <strong>a fixed 4-beat script, a cached reference face passed to every generation, a VLM pass on every key frame, and automatic multi-platform rendering</strong> — then schedules the posts.`,
      ],
    },
    how: {
      eyebrow: "How the agent handles it",
      title: "Recipe brief. 4-beat script. Cached face. VLM gate. Three platform crops.",
      svgHtml: `<svg viewBox="0 0 1040 420" xmlns="http://www.w3.org/2000/svg">
        <defs><marker id="ah" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#5A6B82"/></marker></defs>
        <rect class="box-soft" x="20" y="60" width="140" height="100" rx="10"/><text class="d-mono" x="90" y="85" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#9D174D">SCRIPT</text><text class="d-label" x="90" y="108" text-anchor="middle">Recipe Idea</text><text class="d-sub" x="90" y="124" text-anchor="middle">Ingredients, steps</text><text class="d-sub" x="90" y="140" text-anchor="middle">prep time, complexity</text>
        <rect class="box-soft" x="180" y="60" width="140" height="100" rx="10"/><text class="d-mono" x="250" y="85" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#9D174D">STRUCTURE</text><text class="d-label" x="250" y="108" text-anchor="middle">4-Beat Structure</text><text class="d-sub" x="250" y="124" text-anchor="middle">Hook · Steps ·</text><text class="d-sub" x="250" y="140" text-anchor="middle">Reveal · CTA</text>
        <rect class="box-soft" x="340" y="60" width="140" height="100" rx="10"/><text class="d-mono" x="410" y="85" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#9D174D">GENERATE</text><text class="d-label" x="410" y="108" text-anchor="middle">Kling 3.0 API</text><text class="d-sub" x="410" y="124" text-anchor="middle">w/ cached ref face</text><text class="d-sub" x="410" y="140" text-anchor="middle">per-beat generation</text>
        <rect class="box-soft" x="500" y="60" width="140" height="100" rx="10"/><text class="d-mono" x="570" y="85" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#9D174D">VALIDATE</text><text class="d-label" x="570" y="108" text-anchor="middle">Content Safety</text><text class="d-sub" x="570" y="124" text-anchor="middle">VLM scan</text><text class="d-sub" x="570" y="140" text-anchor="middle">age-check</text>
        <rect class="box-a" x="660" y="60" width="180" height="100" rx="10" stroke="#DB2777" stroke-width="2"/><text class="d-mono" x="750" y="85" text-anchor="middle" style="font-size:10px;font-weight:600;fill:#9D174D">PUBLISH</text><text class="d-label" x="750" y="108" text-anchor="middle">Multi-Platform</text><text class="d-sub" x="750" y="124" text-anchor="middle">Reels · Shorts ·</text><text class="d-sub" x="750" y="140" text-anchor="middle">TikTok distribution</text>
        <rect fill="#F4F8FC" stroke="#D9E3EF" x="20" y="200" width="1000" height="80" rx="8"/><text class="d-mono" x="40" y="225" style="font-size:11px;font-weight:600;fill:#9D174D">PERSISTENT REFERENCE</text><text class="d-label" x="40" y="245" style="font-size:13px">~/.hermes/image_cache/img_4295fad7b826.jpg — cached reference face passed to every Kling generation</text><text class="d-sub" x="40" y="265" style="font-size:11px">Character consistency enforced across all episodes. No manual blending or averaging needed. Age-appropriate content verified via VLM.</text>
        <rect fill="#F4F8FC" stroke="#D9E3EF" x="20" y="320" width="1000" height="60" rx="8"/><text class="d-mono" x="40" y="345" style="font-size:11px;font-weight:600;fill:#9D174D">OUTPUT</text><text class="d-label" x="40" y="365" style="font-size:12px">60–90s video asset · 3 platform crops (Instagram 9:16, YouTube 16:9, TikTok 9:16) · fully auditable generation log</text>
        <path class="arr" d="M 160 110 L 180 110"/><path class="arr" d="M 320 110 L 340 110"/><path class="arr" d="M 480 110 L 500 110"/><path class="arr" d="M 640 110 L 660 110"/><path class="arr" d="M 550 200 L 550 240 L 750 240 L 750 160"/>
      </svg>`,
      steps: [
        {
          n: 1,
          title: "Every script follows the same four-beat structure.",
          body: `<em>Hook (2s) → quick steps (fast cuts, close-ups) → satisfying reveal → call-to-action</em>. The structure is proven for short-form retention; variations that break viewer expectations get rejected before generation. Pacing stops being an editorial judgment call.`,
        },
        {
          n: 2,
          title: "One cached reference face. Every generation. No drift.",
          body: `A high-quality reference face lives in <em>~/.hermes/image_cache/</em> and gets passed to every Kling call. The character stays visually consistent across 100 episodes without post-production blending or averaging. That consistency is what turns one-off videos into a recognizable series.`,
        },
        {
          n: 3,
          title: "A VLM safety gate stands between generation and publish.",
          body: `Vision language model scans key frames for age-inappropriate content, brand drift, or unsafe elements. Critical for kids' content. Borderline confidence flags for human review; confident violations get blocked outright. <em>Zero auto-publish without the gate</em>.`,
        },
        {
          n: 4,
          title: "One asset produces three platform crops, automatically.",
          body: `FFmpeg generates <em>Instagram 9:16, YouTube 16:9, TikTok 9:16</em> from the same source. Platform APIs then schedule posts on a brand-safe cadence with retry logic if Instagram or YouTube is flaky. One brief in, three platforms out, with a full audit trail per video.`,
        },
      ],
    },
    outcomes: {
      eyebrow: "What you get",
      title: "Three things change once the pipeline runs.",
      items: [
        {
          metric: "30",
          unit: "+ videos/mo",
          title: "Production capacity per brand",
          body: "Recipe brief in, 60–90s asset out. Script, generation, safety check, crops, publishing — all orchestrated end-to-end.",
        },
        {
          metric: "$15–60",
          unit: "/mo",
          title: "Total generation cost for a month",
          body: "Kling 3.0 at roughly $0.50–$2 per video. Predictable monthly budget that doesn't scale with editor headcount.",
        },
        {
          metric: "100",
          unit: "%",
          title: "Character consistency across the series",
          body: "Cached reference face enforced on every generation. No visual drift between episodes, no manual averaging in post.",
        },
      ],
      note: "Numbers observed in Brilworks' internal reference deployment (Little Tummy kids' content). Actual figures on your stack will depend on brand visual complexity, safety tolerance, and platform posting cadence.",
    },
    fit: {
      eyebrow: "Is this right for you?",
      title: "Honest fit criteria. We'd rather say no than oversell.",
      yes: [
        "You need 20+ short-form videos per month consistently, not one-off campaigns",
        "Character or visual consistency is core to your brand identity across a series",
        "You're spending $3K+ per month on video production or freelancers today",
        "Your category benefits from safety guardrails (kids', health, regulated content)",
      ],
      no: [
        "You publish fewer than five videos a month — the pipeline overhead is wasted",
        "Your content depends on real actors, documentarian depth, or narrative complexity",
        "Your brand doesn't have a locked visual identity yet — start there, not here",
        "Your audience would reject AI-generated content as inauthentic for your category",
      ],
    },
    cta: {
      title: "Book a 30-minute scoping call.",
      body: "We'll walk through your content calendar, your brand identity, and your safety constraints — then tell you honestly whether a character-consistent video pipeline is the right next step.",
    },
  },
};
