export const crossPlatformAnalyzeProject = (data) => {
  let nativeScore = 0;
  let crossPlatformScore = 0;
  const reasoning = [];

  // Budget analysis
  if (data.budget === "low") {
    crossPlatformScore += 30;
    reasoning.push("Lower budget favors cross-platform development");
  } else if (data.budget === "high") {
    nativeScore += 25;
    reasoning.push("Higher budget allows for native development benefits");
  }

  // Timeline analysis
  if (data.timeline === "urgent") {
    crossPlatformScore += 25;
    reasoning.push("Tight timeline benefits from cross-platform code sharing");
  } else if (data.timeline === "flexible") {
    nativeScore += 20;
    reasoning.push(
      "Flexible timeline allows for platform-specific optimization"
    );
  }

  // Performance analysis
  if (data.performanceNeeds === "critical") {
    nativeScore += 35;
    reasoning.push(
      "Critical performance requirements favor native development"
    );
  } else if (data.performanceNeeds === "moderate") {
    crossPlatformScore += 20;
    reasoning.push("Moderate performance needs can be met with cross-platform");
  }

  // Project type analysis
  if (data.projectType === "game") {
    nativeScore += 30;
    reasoning.push("Gaming apps benefit from native platform features");
  } else if (data.projectType === "business") {
    crossPlatformScore += 25;
    reasoning.push("Business apps work well with cross-platform frameworks");
  }

  const totalScore = Math.max(nativeScore, crossPlatformScore);
  let recommendation = "cross-platform";

  if (nativeScore > crossPlatformScore + 10) {
    recommendation = "native";
  } else if (Math.abs(nativeScore - crossPlatformScore) <= 10) {
    recommendation = "hybrid";
  }

  return {
    recommendation,
    score: totalScore,
    reasoning,
    timeline:
      data.timeline === "urgent"
        ? "2-4 months"
        : data.timeline === "moderate"
        ? "4-8 months"
        : "8-12 months",
    budget:
      data.budget === "low"
        ? "$50K - $150K"
        : data.budget === "moderate"
        ? "$150K - $400K"
        : "$400K+",
    performance:
      data.performanceNeeds === "critical"
        ? "High Performance"
        : data.performanceNeeds === "moderate"
        ? "Good Performance"
        : "Standard Performance",
  };
};

export const calculateFeasibilityChecker = (formData) => {
  let score = 0;
  const recommendations = [];

  // Calculate based on form inputs
  if (formData.apiType === "rest") score += 20;
  else if (formData.apiType === "graphql") score += 15;
  else if (formData.apiType === "soap") score += 10;

  if (formData.complexity === "low") score += 25;
  else if (formData.complexity === "medium") score += 15;
  else if (formData.complexity === "high") score += 5;

  if (formData.timeline === "flexible") score += 20;
  else if (formData.timeline === "moderate") score += 15;
  else if (formData.timeline === "tight") score += 5;

  if (formData.budget === "high") score += 20;
  else if (formData.budget === "medium") score += 15;
  else if (formData.budget === "low") score += 10;

  if (formData.team === "expert") score += 15;
  else if (formData.team === "intermediate") score += 10;
  else if (formData.team === "beginner") score += 5;

  // Add recommendations based on inputs
  if (formData.complexity === "high") {
    recommendations.push("Consider breaking down into smaller phases");
    recommendations.push("Allocate extra time for testing and debugging");
  }
  if (formData.timeline === "tight") {
    recommendations.push("Focus on MVP features first");
    recommendations.push("Consider using existing API libraries");
  }
  if (formData.team === "beginner") {
    recommendations.push("Invest in team training");
    recommendations.push("Consider hiring external consultants");
  }

  // Determine feasibility level
  let feasibility = "Low";
  let riskLevel = "High";
  let estimatedTime = "6-12 months";

  if (score >= 70) {
    feasibility = "High";
    riskLevel = "Low";
    estimatedTime = "2-4 months";
  } else if (score >= 50) {
    feasibility = "Medium";
    riskLevel = "Medium";
    estimatedTime = "4-6 months";
  }

  return {
    feasibility,
    score,
    recommendations,
    estimatedTime,
    riskLevel,
  };
};
export const cloudServiceCostEstimate = (formData) => {
  let baseCost = 0;

  // Base cost calculation
  const instanceCost = formData.instances * 0.1 * 24 * 30; // $0.10/hour
  const storageCost = formData.storage * 0.023; // $0.023/GB
  const bandwidthCost = formData.bandwidth * 0.05; // $0.05/GB

  baseCost = instanceCost + storageCost + bandwidthCost;

  // Keyword-based adjustments
  const description = formData.description.toLowerCase();
  let multiplier = 1;

  if (description.includes("enterprise") || description.includes("business"))
    multiplier *= 1.5;
  if (description.includes("high availability") || description.includes("ha"))
    multiplier *= 1.3;
  if (
    description.includes("backup") ||
    description.includes("disaster recovery")
  )
    multiplier *= 1.2;
  if (description.includes("ai") || description.includes("machine learning"))
    multiplier *= 2.0;
  if (description.includes("database") || description.includes("sql"))
    multiplier *= 1.4;
  if (description.includes("cdn") || description.includes("content delivery"))
    multiplier *= 1.1;

  return { cost: baseCost * multiplier };
};

const extractFeatures = (description) => {
  const keywords = description.toLowerCase();
  const features = [];

  const featureMap = {
    ai: "AI/Machine Learning",
    "artificial intelligence": "AI/Machine Learning",
    "machine learning": "AI/Machine Learning",
    analytics: "Advanced Analytics",
    reporting: "Reporting & Dashboards",
    integration: "Third-party Integrations",
    automation: "Workflow Automation",
    crm: "CRM Functionality",
    payment: "Payment Processing",
    security: "Enterprise Security",
    mobile: "Mobile Applications",
    "real-time": "Real-time Processing",
    cloud: "Cloud Infrastructure",
    collaboration: "Team Collaboration",
  };

  Object.entries(featureMap).forEach(([keyword, feature]) => {
    if (keywords.includes(keyword) && !features.includes(feature)) {
      features.push(feature);
    }
  });

  return features;
};

const calculateCostFromKeywords = (description, businessType, teamSize) => {
  const keywords = description.toLowerCase();
  let baseCost = 5000; // Base monthly cost

  // Business type multipliers
  const typeMultipliers = {
    "B2B SaaS": 1.2,
    "B2C SaaS": 1.0,
    Enterprise: 1.8,
    Startup: 0.7,
    "E-commerce": 1.1,
  };

  baseCost *= typeMultipliers[businessType] || 1.0;

  // Team size impact
  baseCost += teamSize * 200;

  // Feature-based cost additions
  const featureCosts = {
    ai: 3000,
    "artificial intelligence": 3000,
    "machine learning": 2500,
    ml: 2500,
    analytics: 1500,
    reporting: 1000,
    dashboard: 800,
    integration: 1200,
    api: 1000,
    webhook: 800,
    automation: 2000,
    workflow: 1500,
    crm: 1800,
    "customer management": 1500,
    payment: 1200,
    billing: 1000,
    subscription: 1000,
    security: 2000,
    encryption: 1500,
    compliance: 1800,
    mobile: 1500,
    ios: 1200,
    android: 1200,
    "real-time": 1800,
    live: 1200,
    instant: 1000,
    cloud: 1000,
    aws: 800,
    azure: 800,
    gcp: 800,
    database: 1200,
    storage: 800,
    backup: 600,
    notification: 800,
    email: 600,
    sms: 700,
    video: 2000,
    streaming: 1800,
    conference: 1500,
    collaboration: 1200,
    team: 800,
    chat: 1000,
  };

  Object.entries(featureCosts).forEach(([keyword, cost]) => {
    if (keywords.includes(keyword)) {
      baseCost += cost;
    }
  });

  return Math.round(baseCost);
};

export const getStatusColor = (status) => {
  switch (status) {
    case "Excellent":
      return "text-green-600 bg-green-50 border-green-200";
    case "Good":
      return "text-blue-600 bg-blue-50 border-blue-200";
    case "Fair":
      return "text-yellow-600 bg-yellow-50 border-yellow-200";
    default:
      return "text-red-600 bg-red-50 border-red-200";
  }
};

export const saasCalculateProfitability = (formData) => {
  const estimatedMonthlyCost = calculateCostFromKeywords(
    formData.description,
    formData.businessType,
    formData.teamSize
  );
  const competitiveAdvantage = extractFeatures(formData.description);

  const grossRevenue = formData.monthlyRevenue * (formData.grossMargin / 100);
  const monthlyProfit = grossRevenue - formData.operatingExpenses;
  const profitMargin = (monthlyProfit / formData.monthlyRevenue) * 100;
  const ltvcacRatio =
    formData.customerLifetimeValue / formData.customerAcquisitionCost;
  const monthsToRecoverCAC =
    formData.customerAcquisitionCost /
    ((formData.monthlyRevenue * (formData.grossMargin / 100)) /
      (formData.monthlyRevenue / formData.customerLifetimeValue));
  const annualRecurringRevenue = formData.monthlyRevenue * 12;
  const recommendedPricing = Math.round(
    (estimatedMonthlyCost * 1.4) /
      ((formData.monthlyRevenue / formData.customerLifetimeValue) * 12)
  );

  let profitabilityStatus = "Poor";
  if (profitMargin > 20 && ltvcacRatio > 3) profitabilityStatus = "Excellent";
  else if (profitMargin > 10 && ltvcacRatio > 2) profitabilityStatus = "Good";
  else if (profitMargin > 0 && ltvcacRatio > 1) profitabilityStatus = "Fair";

  return {
    businessType: formData.businessType,
    monthlyProfit,
    profitMargin,
    ltvcacRatio,
    monthsToRecoverCAC,
    annualRecurringRevenue,
    estimatedMonthlyCost,
    recommendedPricing,
    competitiveAdvantage,
    profitabilityStatus,
  };
};
