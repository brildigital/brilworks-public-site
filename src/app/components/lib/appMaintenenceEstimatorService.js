// services/costEstimators.js

export function calculateAppMaintenanceCost(formData) {
  const baseMonthlyCost = 2000; // Base monthly maintenance cost

  // Platform multipliers (mobile, web, both)
  const platformMultipliers = {
    mobile: 1,
    web: 0.8,
    both: 1.5,
  };

  // Complexity multipliers
  const complexityMultipliers = {
    simple: 0.7,
    medium: 1,
    complex: 1.5,
    enterprise: 2,
  };

  // User base multipliers
  const userBaseMultipliers = {
    small: 1,
    medium: 1.3,
    large: 1.8,
    enterprise: 2.5,
  };

  // Maintenance type multipliers
  const maintenanceMultipliers = {
    basic: 0.6,
    standard: 1,
    premium: 1.5,
    enterprise: 2.2,
  };

  // Update frequency multipliers
  const frequencyMultipliers = {
    quarterly: 0.7,
    monthly: 1,
    biweekly: 1.4,
    weekly: 2,
  };

  // Keyword-based cost adjustments
  const keywords = {
    payment: 800,
    security: 600,
    api: 400,
    database: 500,
    analytics: 300,
    "push notification": 200,
    "real-time": 700,
    ai: 1000,
    "machine learning": 1200,
    blockchain: 1500,
    social: 300,
    ecommerce: 500,
    chat: 400,
    video: 800,
    streaming: 900,
  };

  let keywordCost = 0;
  const description = formData.description?.toLowerCase() || "";
  Object.entries(keywords).forEach(([keyword, cost]) => {
    if (description.includes(keyword)) {
      keywordCost += cost;
    }
  });

  // Base + Keywords
  const calculatedBaseCost = baseMonthlyCost + keywordCost;

  // Final cost calculation
  const monthlyTotalCost =
    calculatedBaseCost *
    (platformMultipliers[formData.platform] || 1) *
    (complexityMultipliers[formData.complexity] || 1) *
    (userBaseMultipliers[formData.userBase] || 1) *
    (maintenanceMultipliers[formData.maintenanceType] || 1) *
    (frequencyMultipliers[formData.updateFrequency] || 1);

  // Team size mapping
  const teamSizes = {
    basic: 2,
    standard: 3,
    premium: 5,
    enterprise: 8,
  };

  const finalMonthlyCost = Math.round(monthlyTotalCost);
  const finalYearlyCost = Math.round(monthlyTotalCost * 12);

  return {
    monthlyBaseCost: calculatedBaseCost,
    monthlyTotalCost: finalMonthlyCost,
    yearlyTotalCost: finalYearlyCost,
    teamSize: teamSizes[formData.maintenanceType] || 2,
    breakdown: {
      bugFixes: Math.round(finalMonthlyCost * 0.3),
      securityUpdates: Math.round(finalMonthlyCost * 0.2),
      featureUpdates: Math.round(finalMonthlyCost * 0.25),
      monitoring: Math.round(finalMonthlyCost * 0.15),
      support: Math.round(finalMonthlyCost * 0.1),
    },
  };
}
