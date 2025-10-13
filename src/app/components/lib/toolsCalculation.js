// 14. Cross-Platform vs Native Analyzer
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

// 15. API Integration Feasibility Checker
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

// 16. Cloud Service Cost Estimator
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

// 17. SaaS Profitability Calculator
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

// 18. Customer Acquisition Cost Estimator
export const calculateCAC = (formData, businessTypes) => {
  const spend = parseFloat(formData.totalSpend);
  const customers = parseInt(formData.newCustomers);
  const keywords = {
    "digital marketing": 1.2,
    "content marketing": 0.8,
    "social media": 0.9,
    "paid advertising": 1.5,
    seo: 0.6,
    "email marketing": 0.4,
    "influencer marketing": 1.1,
    "affiliate marketing": 1.3,
    ppc: 1.4,
    "facebook ads": 1.2,
    "google ads": 1.3,
    "linkedin ads": 1.6,
  };

  if (spend > 0 && customers > 0) {
    const baseCac = spend / customers;

    // Apply keyword multipliers
    let keywordMultiplier = 1;
    const description = formData.description.toLowerCase();

    Object.entries(keywords).forEach(([keyword, multiplier]) => {
      if (description.includes(keyword)) {
        keywordMultiplier = multiplier;
      }
    });

    const adjustedCac = baseCac * keywordMultiplier;

    const selectedBusiness = businessTypes.find(
      (bt) => bt.value === formData.businessType
    );
    const benchmark = selectedBusiness?.benchmark || 150;

    // Generate channel breakdown
    const channels = [
      "Organic Search",
      "Paid Ads",
      "Social Media",
      "Email",
      "Referrals",
    ];
    const cacPerChannel = {};
    channels.forEach((channel, index) => {
      const variance = (Math.random() - 0.5) * 0.6; // ±30% variance
      cacPerChannel[channel] = Math.round(adjustedCac * (1 + variance));
    });

    // Generate recommendations
    const recommendations = [];
    if (adjustedCac > benchmark * 1.2) {
      recommendations.push(
        "Your CAC is above industry benchmark. Consider optimizing high-cost channels."
      );
      recommendations.push(
        "Focus on organic acquisition methods like SEO and content marketing."
      );
    } else if (adjustedCac < benchmark * 0.8) {
      recommendations.push("Excellent! Your CAC is below industry average.");
      recommendations.push(
        "Consider scaling successful channels while maintaining efficiency."
      );
    } else {
      recommendations.push("Your CAC is within healthy industry ranges.");
      recommendations.push(
        "Continue monitoring and testing optimization strategies."
      );
    }

    if (description.includes("paid") || description.includes("ads")) {
      recommendations.push(
        "Optimize ad targeting and creative performance to reduce paid acquisition costs."
      );
    }

    return {
      cac: Math.round(adjustedCac),
      cacPerChannel,
      recommendations,
      industryBenchmark: benchmark,
    };
  }
};

// 19. Calculate Customer Lifetime Value
export const calculateCustomerLTV = (formData) => {
  const aov = parseFloat(formData.averageOrderValue) || 0;
  const frequency = parseFloat(formData.purchaseFrequency) || 0;
  const lifespan = parseFloat(formData.customerLifespan) || 0;
  const retention = parseFloat(formData.retentionRate) || 100;
  const acquisition = parseFloat(formData.acquisitionCost) || 0;

  // Base LTV calculation
  let ltv = aov * frequency * lifespan;

  // Adjust based on retention rate
  ltv = ltv * (retention / 100);

  // Description-based adjustments
  const description = formData.description.toLowerCase();
  let multiplier = 1;

  if (description.includes("premium") || description.includes("luxury")) {
    multiplier += 0.3;
  }
  if (description.includes("subscription") || description.includes("saas")) {
    multiplier += 0.2;
  }
  if (description.includes("enterprise") || description.includes("b2b")) {
    multiplier += 0.4;
  }
  if (description.includes("loyalty") || description.includes("repeat")) {
    multiplier += 0.15;
  }

  ltv = ltv * multiplier;

  return {
    ltv: ltv,
    netLTV: ltv - acquisition,
    ltvToCac: acquisition > 0 ? ltv / acquisition : 0,
    multiplier: multiplier,
  };
};

// 20. Automation Savings Calculator
export const calculateAutomationSavings = (formData) => {
  const employees = parseFloat(formData.employeeCount) || 0;
  const hourlyWage = parseFloat(formData.averageHourlyWage) || 0;
  const hoursPerTask = parseFloat(formData.hoursPerTask) || 0;
  const tasksPerWeek = parseFloat(formData.tasksPerWeek) || 0;
  const automationCost = parseFloat(formData.automationCost) || 0;
  const implementationWeeks = parseFloat(formData.implementationTime) || 0;

  // Base calculations
  const weeklyHours = hoursPerTask * tasksPerWeek * employees;
  const weeklyCost = weeklyHours * hourlyWage;
  const annualCost = weeklyCost * 52;

  // Automation efficiency (assume 80-95% time savings)
  let efficiencyGain = 0.85;

  // Description-based adjustments
  const description = formData.description.toLowerCase();

  if (description.includes("simple") || description.includes("basic")) {
    efficiencyGain = 0.75;
  }
  if (description.includes("complex") || description.includes("advanced")) {
    efficiencyGain = 0.9;
  }
  if (description.includes("ai") || description.includes("machine learning")) {
    efficiencyGain = 0.95;
  }
  if (
    description.includes("data entry") ||
    description.includes("repetitive")
  ) {
    efficiencyGain = 0.9;
  }
  if (
    description.includes("customer service") ||
    description.includes("support")
  ) {
    efficiencyGain = 0.7;
  }

  const annualSavings = annualCost * efficiencyGain;
  const totalCost = automationCost;
  const netSavings = annualSavings - totalCost;
  const roiMonths = totalCost > 0 ? totalCost / (annualSavings / 12) : 0;
  const fiveYearSavings = annualSavings * 5 - totalCost;

  return {
    annualSavings: annualSavings,
    totalCost: totalCost,
    netSavings: netSavings,
    roiMonths: roiMonths,
    fiveYearSavings: fiveYearSavings,
    efficiencyGain: efficiencyGain,
    weeklyHoursSaved: weeklyHours * efficiencyGain,
  };
};

// 21. MVP Feature Selector Quiz
export const calculateMvpFeatureSelector = (formData) => {
  const keywords = formData.description.toLowerCase();
  let score = 0;
  const features = [];

  // Keyword-based scoring
  if (keywords.includes("user") || keywords.includes("customer")) {
    score += 20;
    features.push("User Authentication");
  }
  if (
    keywords.includes("payment") ||
    keywords.includes("buy") ||
    keywords.includes("purchase")
  ) {
    score += 25;
    features.push("Payment Integration");
  }
  if (
    keywords.includes("social") ||
    keywords.includes("share") ||
    keywords.includes("community")
  ) {
    score += 15;
    features.push("Social Features");
  }
  if (
    keywords.includes("data") ||
    keywords.includes("analytics") ||
    keywords.includes("tracking")
  ) {
    score += 20;
    features.push("Analytics Dashboard");
  }
  if (
    keywords.includes("mobile") ||
    keywords.includes("app") ||
    keywords.includes("responsive")
  ) {
    score += 18;
    features.push("Mobile Optimization");
  }
  if (
    keywords.includes("search") ||
    keywords.includes("filter") ||
    keywords.includes("find")
  ) {
    score += 15;
    features.push("Search Functionality");
  }
  if (
    keywords.includes("notification") ||
    keywords.includes("alert") ||
    keywords.includes("email")
  ) {
    score += 12;
    features.push("Notification System");
  }

  // Budget and timeline considerations
  if (formData.budget === "low") score -= 10;
  if (formData.budget === "high") score += 15;
  if (formData.timeline === "urgent") score -= 15;
  if (formData.timeline === "flexible") score += 10;

  const priority = score >= 70 ? "High" : score >= 40 ? "Medium" : "Low";

  return {
    score: Math.max(0, Math.min(100, score)),
    priority,
    recommendedFeatures: features,
    explanation: `Based on your project description and requirements, we've identified key features that align with your MVP goals. Your ${priority.toLowerCase()} priority score of ${score}% suggests ${
      priority === "High"
        ? "a feature-rich MVP with strong market potential"
        : priority === "Medium"
        ? "a balanced MVP approach with essential features"
        : "a lean MVP focusing on core functionality"
    }.`,
  };
};
// 22. Which App Should You Build Quiz
export const calculateWhichAppShouldYouBuild = (formData) => {
  const keywords = formData.description.toLowerCase();
  let score = 0;
  let appType = "Web App";
  let platform = "Web";
  const features = [];

  // Determine app type based on keywords
  if (
    keywords.includes("mobile") ||
    keywords.includes("phone") ||
    keywords.includes("ios") ||
    keywords.includes("android")
  ) {
    appType = "Mobile App";
    platform = "Mobile (iOS/Android)";
    score += 20;
  } else if (
    keywords.includes("web") ||
    keywords.includes("browser") ||
    keywords.includes("website")
  ) {
    appType = "Web Application";
    platform = "Web Browser";
    score += 15;
  } else if (
    keywords.includes("desktop") ||
    keywords.includes("windows") ||
    keywords.includes("mac")
  ) {
    appType = "Desktop App";
    platform = "Desktop (Windows/Mac)";
    score += 10;
  }

  // Feature-based scoring and recommendations
  if (
    keywords.includes("social") ||
    keywords.includes("chat") ||
    keywords.includes("message") ||
    keywords.includes("community")
  ) {
    score += 25;
    features.push("Social Features");
    if (!appType.includes("Mobile")) {
      appType = "Social Mobile App";
      platform = "Mobile (iOS/Android)";
    }
  }

  if (
    keywords.includes("ecommerce") ||
    keywords.includes("shop") ||
    keywords.includes("buy") ||
    keywords.includes("sell") ||
    keywords.includes("payment")
  ) {
    score += 30;
    features.push("E-commerce Integration");
    appType = "E-commerce App";
  }

  if (
    keywords.includes("game") ||
    keywords.includes("gaming") ||
    keywords.includes("play")
  ) {
    score += 20;
    features.push("Gaming Features");
    appType = "Gaming App";
    platform = "Mobile (iOS/Android)";
  }

  if (
    keywords.includes("productivity") ||
    keywords.includes("task") ||
    keywords.includes("todo") ||
    keywords.includes("organize")
  ) {
    score += 25;
    features.push("Productivity Tools");
    appType = "Productivity App";
  }

  if (
    keywords.includes("education") ||
    keywords.includes("learn") ||
    keywords.includes("course") ||
    keywords.includes("study")
  ) {
    score += 22;
    features.push("Educational Content");
    appType = "Educational App";
  }

  if (
    keywords.includes("health") ||
    keywords.includes("fitness") ||
    keywords.includes("medical") ||
    keywords.includes("wellness")
  ) {
    score += 28;
    features.push("Health Tracking");
    appType = "Health & Fitness App";
    platform = "Mobile (iOS/Android)";
  }

  if (
    keywords.includes("photo") ||
    keywords.includes("camera") ||
    keywords.includes("image") ||
    keywords.includes("video")
  ) {
    score += 20;
    features.push("Media Processing");
    appType = "Media App";
    platform = "Mobile (iOS/Android)";
  }

  if (
    keywords.includes("music") ||
    keywords.includes("audio") ||
    keywords.includes("sound") ||
    keywords.includes("podcast")
  ) {
    score += 18;
    features.push("Audio Features");
    appType = "Music/Audio App";
  }

  if (
    keywords.includes("business") ||
    keywords.includes("enterprise") ||
    keywords.includes("crm") ||
    keywords.includes("management")
  ) {
    score += 25;
    features.push("Business Tools");
    appType = "Business App";
    platform = "Web Browser";
  }

  // Audience considerations
  if (formData.targetAudience === "consumers" && !appType.includes("Mobile")) {
    appType = "Consumer Mobile App";
    platform = "Mobile (iOS/Android)";
    score += 15;
  }

  if (formData.targetAudience === "businesses" && !appType.includes("Web")) {
    appType = "Business Web App";
    platform = "Web Browser";
    score += 10;
  }

  // Budget and timeline considerations
  if (formData.budget === "low") score -= 10;
  if (formData.budget === "high") score += 15;
  if (formData.timeline === "urgent") score -= 15;
  if (formData.timeline === "flexible") score += 10;

  // Experience level
  if (formData.experience === "beginner") score -= 5;
  if (formData.experience === "expert") score += 10;

  const marketPotential = score >= 70 ? "High" : score >= 40 ? "Medium" : "Low";

  return {
    score: Math.max(0, Math.min(100, score)),
    appType,
    platform,
    recommendedFeatures: features,
    marketPotential,
    explanation: `Based on your project description and requirements, we recommend building a ${appType} for ${platform}. Your ${marketPotential.toLowerCase()} market potential score of ${score}% suggests ${
      marketPotential === "High"
        ? "strong market demand and excellent monetization opportunities"
        : marketPotential === "Medium"
        ? "good market potential with moderate competition"
        : "niche market opportunity requiring focused marketing"
    }.`,
  };
};
