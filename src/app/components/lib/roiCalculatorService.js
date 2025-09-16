// Define feature costs
export const roiCalculatorFeatures = [
  { id: "auth", label: "User Authentication", cost: 15000 },
  { id: "payments", label: "Payment Processing", cost: 20000 },
  { id: "chat", label: "Real-time Chat", cost: 18000 },
  { id: "geolocation", label: "GPS/Location Services", cost: 14000 },
  { id: "camera", label: "Camera Integration", cost: 12000 },
  { id: "push", label: "Push Notifications", cost: 8000 },
  { id: "social", label: "Social Media Login", cost: 10000 },
  { id: "admin", label: "Admin Dashboard", cost: 16000 },
  { id: "analytics", label: "Analytics Dashboard", cost: 12000 },
  { id: "integrations", label: "Third-party Integrations", cost: 14000 },
];

// Define multipliers
const complexityMultipliers = {
  simple: 0.7,
  medium: 1.0,
  complex: 1.5,
  enterprise: 2.0,
};

const appTypeMultipliers = {
  native: 1.0,
  hybrid: 0.8,
  web: 0.6,
};

const designMultipliers = {
  basic: 0.8,
  standard: 1.0,
  premium: 1.3,
  custom: 1.6,
};

/**
 * Calculates development cost, ROI, and related metrics
 * @param {Object} formData - Input form data
 * @returns {Object} Results (developmentCost, maintenanceCost, totalCost, expectedRevenue, roi, paybackPeriod)
 */
export const calculateROI = (formData) => {
  const baseHours = parseInt(formData.timeline || 0) * 160; // weeks * 40 hours
  const teamSize = 5; // default
  const hourlyRate = parseInt(formData.hourlyRate || 0);

  const complexityMultiplier = complexityMultipliers[formData.complexity] || 1;
  const appTypeMultiplier = appTypeMultipliers[formData.appType] || 1;
  const designMultiplier = designMultipliers[formData.designLevel] || 1;

  // Features cost
  const featuresCost = (formData.features || []).reduce((total, featureId) => {
    const feature = roiCalculatorFeatures.find((f) => f.id === featureId);
    return total + (feature ? feature.cost : 0);
  }, 0);

  // Development cost
  const baseDevelopmentCost =
    baseHours *
    teamSize *
    hourlyRate *
    complexityMultiplier *
    appTypeMultiplier *
    designMultiplier;

  const developmentCost = baseDevelopmentCost + featuresCost;

  // Maintenance cost
  const annualMaintenanceCost = developmentCost * 0.2;
  const maintenanceCost =
    annualMaintenanceCost * parseInt(formData.maintenanceYears || 0);

  // Total project cost
  const totalCost = developmentCost + maintenanceCost;

  // Expected revenue
  const expectedUsers = parseInt(formData.expectedUsers || 0);
  const revenuePerUser = parseInt(formData.revenuePerUser || 0);
  const expectedRevenue =
    expectedUsers * revenuePerUser * parseInt(formData.maintenanceYears || 0);

  // ROI & Payback
  const roi =
    expectedRevenue > 0 ? ((expectedRevenue - totalCost) / totalCost) * 100 : 0;

  const paybackPeriod =
    expectedRevenue > 0
      ? totalCost / (expectedRevenue / parseInt(formData.maintenanceYears || 1))
      : 0;

  return {
    developmentCost: Math.round(developmentCost),
    maintenanceCost: Math.round(maintenanceCost),
    totalCost: Math.round(totalCost),
    expectedRevenue: Math.round(expectedRevenue),
    roi: Math.round(roi * 100) / 100,
    paybackPeriod: Math.round(paybackPeriod * 100) / 100,
  };
};
