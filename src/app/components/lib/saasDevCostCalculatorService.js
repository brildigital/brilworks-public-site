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
