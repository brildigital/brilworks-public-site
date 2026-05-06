// Per-slug SEO opt-ins for blog posts.
//
// Why this exists: most blog posts already have FAQ Q&A copy that hasn't been
// reviewed for schema validity. We don't want to blanket-emit FAQPage JSON-LD
// across every post. Each entry below is an explicit opt-in tied to a CMO/CEO-
// approved hygiene patch (Wave-1 SEO triage, BRI-127 cluster).
//
// faqSchema:        emit FAQPage JSON-LD from the Storyblok `FAQ` array.
// personSchema:     emit a standalone Person JSON-LD for the byline.
//
// Add a slug here only after the Storyblok content (FAQ Q&A copy + visible body
// version stamps + last-updated stamp) has been updated to match the approved
// CMS spec for that page. Schema-visible parity is required for FAQ rich
// results.

export const blogSeoConfig = {
  // BRI-148 / BRI-214 — already has FAQ microdata; do NOT emit a second
  // FAQPage JSON-LD block alongside it. Person schema is additive.
  "spring-boot-vs-quarkus-vs-micronaut": {
    faqSchema: false,
    personSchema: true,
  },
  // BRI-150 / BRI-217 — page renders 3 visible Q&As with no JSON-LD; opt in
  // once Storyblok adds the 2 new Q&As (Q4 Apple silicon, Q5 IDE-vs-editor)
  // and rewrites Q1-Q3 answers to match the approved spec.
  "top-ides-for-java-development-on-mac": {
    faqSchema: true,
    personSchema: true,
  },
  // BRI-151 / BRI-206 — opt in once Storyblok has the 4 approved Q&As.
  "java-stream-api": {
    faqSchema: true,
    personSchema: true,
  },
  // BRI-153 / BRI-207 — opt in once Storyblok has the 5 approved Q&As.
  "lambda-expression-java": {
    faqSchema: true,
    personSchema: true,
  },
};

export function getBlogSeoConfig(slug) {
  return blogSeoConfig[slug] || {};
}
