import { analyzeDescriptionComplexity } from "./costCalculationService";

export const saasDevelopmentFeatures = [
  { id: "auth", label: "User Authentication", basePrice: 2000 },
  { id: "chat", label: "Real-time Chat", basePrice: 3500 },
  { id: "camera", label: "Camera Integration", basePrice: 2500 },
  { id: "social", label: "Social Media Login", basePrice: 1500 },
  { id: "analytics", label: "Analytics Dashboard", basePrice: 4000 },
  { id: "payment", label: "Payment Processing", basePrice: 3000 },
  { id: "gps", label: "GPS/Location Services", basePrice: 2800 },
  { id: "notifications", label: "Push Notifications", basePrice: 2200 },
  { id: "admin", label: "Admin Dashboard", basePrice: 3500 },
  { id: "integrations", label: "Third-party Integrations", basePrice: 2700 },
];

const platformMultipliers = {
  web: 1,
  mobile: 1.3,
  both: 1.8,
};

const complexityMultipliers = {
  simple: 0.8,
  medium: 1,
  complex: 1.5,
  enterprise: 2.2,
};

const designMultipliers = {
  basic: 0.9,
  standard: 1,
  premium: 1.4,
  custom: 1.8,
};

const timelineMultipliers = {
  rushed: 1.5,
  normal: 1,
  flexible: 0.9,
};

export function calculateSaasDevCostEstimate(formData) {
  let basePrice = 15000; // starting cost

  // Feature costs
  formData.features.forEach((featureId) => {
    const feature = saasDevelopmentFeatures.find((f) => f.id === featureId);
    if (feature) {
      basePrice += feature.basePrice;
    }
  });

  // Multipliers
  const platformMultiplier = platformMultipliers[formData.platform] || 1;
  const complexityMultiplier = complexityMultipliers[formData.complexity] || 1;
  const designMultiplier = designMultipliers[formData.design] || 1;
  const timelineMultiplier = timelineMultipliers[formData.timeline] || 1;

  // Extra complexity boost based on description
  const descriptionComplexity = analyzeDescriptionComplexity(
    formData.description
  );

  // Final estimate
  const finalEstimate = Math.round(
    basePrice *
      platformMultiplier *
      complexityMultiplier *
      designMultiplier *
      timelineMultiplier *
      descriptionComplexity
  );

  return { cost: finalEstimate };
}

export const appDevelopmentTimelineEstimate = (formData) => {
  let baseWeeks = 8;
  let baseCost = 20000;
  let multiplier = 1;

  // App type multiplier
  switch (formData.appType) {
    case "web":
      multiplier *= 0.8;
      break;
    case "mobile":
      multiplier *= 1;
      break;
    case "cross-platform":
      multiplier *= 1.5;
      break;
  }

  // Platform multiplier
  switch (formData.platform) {
    case "web":
      multiplier *= 0.9; // web-only tends to be slightly cheaper
      break;
    case "mobile":
      multiplier *= 1.0; // baseline
      break;
    case "both":
      multiplier *= 1.4; // building both increases scope
      break;
  }

  // Features multiplier
  multiplier *= 1 + formData.features.length * 0.1;

  // Complexity multiplier
  switch (formData.complexity) {
    case "simple":
      multiplier *= 0.7;
      break;
    case "medium":
      multiplier *= 1;
      break;
    case "complex":
      multiplier *= 1.5;
      break;
    case "enterprise":
      multiplier *= 2;
      break;
  }

  // Timeline multiplier
  switch (formData.timeline) {
    case "urgent":
      multiplier *= 1.3;
      break;
    case "standard":
      multiplier *= 1;
      break;
    case "flexible":
      multiplier *= 0.9;
      break;
  }

  // Description keyword analysis
  const keywords = {
    ai: 1.4,
    "machine learning": 1.4,
    blockchain: 1.6,
    ar: 1.3,
    vr: 1.3,
    "real-time": 1.2,
    chat: 1.1,
    video: 1.2,
    payment: 1.2,
    social: 1.1,
    analytics: 1.1,
    dashboard: 1.1,
    admin: 1.1,
    api: 1.1,
    integration: 1.2,
  };

  const description = formData.description.toLowerCase();
  Object.entries(keywords).forEach(([keyword, factor]) => {
    if (description.includes(keyword)) {
      multiplier *= factor;
    }
  });

  const finalWeeks = Math.round(baseWeeks * multiplier);
  const finalCost = Math.round(baseCost * multiplier);

  const timeRange = `${finalWeeks}-${finalWeeks + 4} weeks`;
  const costRange = `$${(finalCost * 0.8).toLocaleString()} - $${(
    finalCost * 1.2
  ).toLocaleString()}`;

  const recommendations = [];
  if (formData.features.length > 10) {
    recommendations.push("Consider phasing features across multiple releases");
  }
  if (formData.timeline === "urgent") {
    recommendations.push("Rush timeline may require additional resources");
  }

  return {
    estimatedTime: timeRange,
    estimatedCost: costRange,
    complexity:
      formData.complexity.charAt(0).toUpperCase() +
      formData.complexity.slice(1),
    recommendations,
  };
};

export const mvpDevelopmentTimelineCalculate = (formData) => {
  // base weeks by project type
  const baseWeeks =
    formData.projectType === "web"
      ? 8
      : formData.projectType === "mobile"
      ? 12
      : 16;

  // multipliers
  const complexityMultiplier =
    formData.complexity === "simple"
      ? 1
      : formData.complexity === "medium"
      ? 1.5
      : 2;

  const featureMultiplier = 1 + formData.features.length * 0.2;

  const teamMultiplier =
    formData.teamSize === "small"
      ? 1.3
      : formData.teamSize === "medium"
      ? 1
      : 0.8;

  // timeline
  const totalWeeks = Math.ceil(
    baseWeeks * complexityMultiplier * featureMultiplier * teamMultiplier
  );

  // base cost by project type
  const baseCost =
    formData.projectType === "web"
      ? 25000
      : formData.projectType === "mobile"
      ? 40000
      : 60000;

  // description-based multipliers
  const descriptionKeywords = formData.description.toLowerCase();
  let keywordMultiplier = 1;

  if (
    descriptionKeywords.includes("ai") ||
    descriptionKeywords.includes("machine learning")
  ) {
    keywordMultiplier += 0.5;
  }
  if (
    descriptionKeywords.includes("blockchain") ||
    descriptionKeywords.includes("crypto")
  ) {
    keywordMultiplier += 0.4;
  }
  if (
    descriptionKeywords.includes("real-time") ||
    descriptionKeywords.includes("live")
  ) {
    keywordMultiplier += 0.3;
  }
  if (
    descriptionKeywords.includes("integration") ||
    descriptionKeywords.includes("api") ||
    descriptionKeywords.includes("chatbot")
  ) {
    keywordMultiplier += 0.2;
  }

  // cost calculation
  const totalCost =
    Math.ceil(
      (baseCost *
        complexityMultiplier *
        featureMultiplier *
        keywordMultiplier) /
        1000
    ) * 1000;

  // return result
  return {
    duration: `${totalWeeks} weeks`,
    cost: `${totalCost.toLocaleString()}`,
    phases: [
      { name: "Planning & Research", weeks: Math.ceil(totalWeeks * 0.15) },
      { name: "Design & Prototyping", weeks: Math.ceil(totalWeeks * 0.25) },
      { name: "Development", weeks: Math.ceil(totalWeeks * 0.45) },
      { name: "Testing & Launch", weeks: Math.ceil(totalWeeks * 0.15) },
    ],
  };
};
