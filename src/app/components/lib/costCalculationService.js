const BASE_RATES = {
  platform: {
    ios: 1.0,
    android: 1.0,
    "cross-platform": 1.3,
    web: 0.8,
    all: 2.2,
  },
  complexity: {
    simple: 1.0,
    medium: 1.8,
    complex: 3.2,
  },
  design: {
    basic: 1.0,
    custom: 1.5,
    premium: 2.2,
  },
  timeline: {
    rush: 1.5,
    standard: 1.0,
    flexible: 0.85,
  },
};

const FEATURE_COSTS = {
  "User Authentication": 2500,
  "Payment Processing": 4500,
  "Real-time Chat": 3800,
  "GPS/Location Services": 3200,
  "Camera Integration": 2800,
  "Push Notifications": 2000,
  "Social Media Login": 1800,
  "Admin Dashboard": 5500,
  "Analytics Dashboard": 4200,
  "Third-party Integrations": 3500,
};

const BASE_COST = 15000;

// ---------------- Functions ----------------

function analyzeDescriptionComplexity(description = "") {
  const words = description.toLowerCase().split(/\s+/);
  const complexityKeywords = [
    "ai",
    "machine learning",
    "blockchain",
    "cryptocurrency",
    "ar",
    "vr",
    "real-time",
    "scalable",
    "enterprise",
    "integration",
    "api",
    "microservices",
    "analytics",
    "dashboard",
    "admin",
    "multi-tenant",
    "saas",
    "marketplace",
    "video",
    "streaming",
    "live",
    "chat",
    "notification",
    "geolocation",
    "payment",
    "subscription",
    "social",
    "sharing",
    "offline",
    "sync",
  ];

  let complexityScore = 1.0;

  const keywordMatches = words.filter((word) =>
    complexityKeywords.some((keyword) => word.includes(keyword))
  ).length;

  complexityScore += keywordMatches * 0.08;

  if (words.length > 100) {
    complexityScore += 0.25;
  } else if (words.length > 50) {
    complexityScore += 0.15;
  }

  return Math.min(complexityScore, 1.8);
}

function generateBreakdown(inputs, totalCost, featureCost) {
  const platformLabel = (inputs.platform || "").replace("-", " ").toUpperCase();
  const complexityLabel = (inputs.complexity || "").toUpperCase();
  const designLabel = (inputs.design || "").toUpperCase();
  const timelineLabel = (inputs.timeline || "").toUpperCase();

  return `
**Cost Breakdown for ${platformLabel} App:**

• **Base Development:** $${BASE_COST.toLocaleString()}
• **Complexity Level (${complexityLabel}):** ${
    (BASE_RATES.complexity[inputs.complexity] - 1) * 100
  }% adjustment
• **Design Requirements (${designLabel}):** ${
    (BASE_RATES.design[inputs.design] - 1) * 100
  }% adjustment
• **Platform (${platformLabel}):** ${
    (BASE_RATES.platform[inputs.platform] - 1) * 100
  }% adjustment
• **Timeline (${timelineLabel}):** ${
    (BASE_RATES.timeline[inputs.timeline] - 1) * 100
  }% adjustment
• **Selected Features:** $${featureCost.toLocaleString()}

**Total Estimated Cost: $${totalCost.toLocaleString()}**

*This estimate includes development, basic testing, and deployment. Final pricing may vary based on detailed requirements.*
  `.trim();
}

async function calculateCost(inputs) {
  let totalCost = BASE_COST;

  // Apply multipliers
  totalCost *= BASE_RATES.platform[inputs.platform] || 1;
  totalCost *= BASE_RATES.complexity[inputs.complexity] || 1;
  totalCost *= BASE_RATES.design[inputs.design] || 1;
  totalCost *= BASE_RATES.timeline[inputs.timeline] || 1;

  // Feature cost
  const featureCost = (inputs.features || []).reduce((sum, feature) => {
    return sum + (FEATURE_COSTS[feature] || 0);
  }, 0);

  totalCost += featureCost;

  // Description factor
  const descriptionFactor = analyzeDescriptionComplexity(
    inputs.description || ""
  );
  totalCost *= descriptionFactor;

  // Round + minimum cost
  totalCost = Math.round(totalCost / 500) * 500;
  totalCost = Math.max(totalCost, 8000);

  const breakdown = generateBreakdown(inputs, totalCost, featureCost);

  return { cost: totalCost, breakdown };
}

async function analyzewithLLM(description) {
  await new Promise((resolve) => setTimeout(resolve, 1500)); // simulate API delay
  return analyzeDescriptionComplexity(description);
}

// ---------------- Exports ----------------
export const CostCalculationService = {
  calculateCost,
  analyzeDescriptionComplexity,
  generateBreakdown,
  analyzewithLLM,
};
