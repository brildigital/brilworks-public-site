import { analyzeDescriptionComplexity } from "./costCalculationService";

// 🔹 Config values
const complexityMultipliers = {
  basic: 1,
  standard: 1.5,
  premium: 2.5,
};

const platformCosts = {
  ios: 50000,
  android: 50000,
  both: 85000,
};

const featureCosts = {
  gps: 15000,
  payments: 25000,
  tracking: 20000,
  chat: 18000,
  ratings: 12000,
  notifications: 10000,
  analytics: 15000,
  scheduling: 20000,
};

const designMultipliers = {
  basic: 1,
  standard: 1.3,
  premium: 1.8,
};

const backendMultipliers = {
  basic: 1,
  standard: 1.4,
  premium: 2,
};

const regionMultipliers = {
  single: 1,
  multiple: 1.6,
  global: 2.2,
};

export function calculateMobilityAppCost(costFactors) {
  let baseCost = 0;

  // Start with platform base cost
  baseCost = platformCosts[costFactors.platform] || 0;

  // Add features
  (costFactors.features || []).forEach((feature) => {
    baseCost += featureCosts[feature] || 0;
  });

  // Apply multipliers
  baseCost *= complexityMultipliers[costFactors.complexity] || 1;
  baseCost *= designMultipliers[costFactors.design] || 1;
  baseCost *= backendMultipliers[costFactors.backend] || 1;
  baseCost *= regionMultipliers[costFactors.regions] || 1;

  // Apply description-based multiplier
  if (costFactors.description) {
    const descMultiplier = analyzeDescriptionComplexity(
      costFactors.description
    );
    baseCost *= descMultiplier;
  }

  return { cost: Math.round(baseCost) };
}
