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

// 23. Startup Tech Readiness Quiz
export const calculateStartupTechReadiness = (formData) => {
  const teamSize = parseInt(formData.teamSize) || 0;
  const budget = parseFloat(formData.techBudget) || 0;
  const stage = parseInt(formData.developmentStage) || 0;
  const expertise = parseInt(formData.techExpertise) || 0;
  const timeToMarket = parseInt(formData.timeToMarket) || 0;
  const scalability = parseInt(formData.scalabilityNeeds) || 0;
  const security = parseInt(formData.securityRequirements) || 0;

  // Base scoring system (0-100)
  let baseScore = 0;

  // Team size scoring (0-15 points)
  if (teamSize >= 10) baseScore += 15;
  else if (teamSize >= 5) baseScore += 12;
  else if (teamSize >= 3) baseScore += 8;
  else if (teamSize >= 1) baseScore += 5;

  // Budget scoring (0-20 points)
  if (budget >= 100000) baseScore += 20;
  else if (budget >= 50000) baseScore += 15;
  else if (budget >= 25000) baseScore += 10;
  else if (budget >= 10000) baseScore += 6;
  else if (budget > 0) baseScore += 3;

  // Development stage, expertise, time to market, scalability, security (each 0-10 points)
  baseScore += stage + expertise + timeToMarket + scalability + security;

  // Description-based adjustments
  const description = formData.description.toLowerCase();
  let multiplier = 1;
  let bonusPoints = 0;

  if (description.includes("ai") || description.includes("machine learning")) {
    bonusPoints += 5;
  }
  if (
    description.includes("cloud") ||
    description.includes("aws") ||
    description.includes("azure")
  ) {
    bonusPoints += 3;
  }
  if (description.includes("mobile") || description.includes("app")) {
    bonusPoints += 2;
  }
  if (description.includes("saas") || description.includes("platform")) {
    bonusPoints += 4;
  }
  if (description.includes("mvp") || description.includes("prototype")) {
    bonusPoints += 2;
  }
  if (description.includes("scalable") || description.includes("enterprise")) {
    bonusPoints += 3;
  }
  if (description.includes("security") || description.includes("compliance")) {
    bonusPoints += 3;
  }

  const finalScore = Math.min(100, baseScore + bonusPoints);

  // Determine readiness level
  let readinessLevel = "";
  let recommendations = [];

  if (finalScore >= 85) {
    readinessLevel = "Excellent";
    recommendations = [
      "Your startup shows exceptional tech readiness",
      "Focus on execution and market validation",
      "Consider advanced optimization strategies",
    ];
  } else if (finalScore >= 70) {
    readinessLevel = "Good";
    recommendations = [
      "Strong foundation with room for improvement",
      "Address identified gaps before scaling",
      "Consider additional technical expertise",
    ];
  } else if (finalScore >= 55) {
    readinessLevel = "Fair";
    recommendations = [
      "Basic readiness but needs significant improvement",
      "Invest in team development and infrastructure",
      "Seek technical mentorship or advisory support",
    ];
  } else {
    readinessLevel = "Needs Improvement";
    recommendations = [
      "Critical gaps in tech readiness identified",
      "Focus on building core technical capabilities",
      "Consider technical co-founder or CTO hire",
    ];
  }

  return {
    score: finalScore,
    level: readinessLevel,
    recommendations: recommendations,
    bonusPoints: bonusPoints,
  };
};
// 24. Digital Transformation Readiness Quiz
export const calculateDigitalTransformationReadiness = (formData) => {
  const orgSize = parseInt(formData.organizationSize) || 0;
  const techLevel = parseInt(formData.currentTechLevel) || 0;
  const budget = parseInt(formData.digitalBudget) || 0;
  const leadership = parseInt(formData.leadershipSupport) || 0;
  const skills = parseInt(formData.employeeSkills) || 0;
  const dataMaturity = parseInt(formData.dataMaturity) || 0;
  const customerExp = parseInt(formData.customerExpectations) || 0;
  const competition = parseInt(formData.competitorPressure) || 0;

  // Base scoring system (0-100)
  let baseScore = 0;

  // Organization size scoring (0-10 points)
  if (orgSize >= 8) baseScore += 10;
  else if (orgSize >= 6) baseScore += 8;
  else if (orgSize >= 4) baseScore += 6;
  else if (orgSize >= 2) baseScore += 4;

  // Each assessment factor (0-10 points each, total 70 points)
  baseScore +=
    techLevel +
    budget +
    leadership +
    skills +
    dataMaturity +
    customerExp +
    competition;

  // Description-based adjustments
  const description = formData.description.toLowerCase();
  let bonusPoints = 0;

  if (description.includes("cloud") || description.includes("saas")) {
    bonusPoints += 5;
  }
  if (
    description.includes("ai") ||
    description.includes("machine learning") ||
    description.includes("analytics")
  ) {
    bonusPoints += 4;
  }
  if (
    description.includes("mobile") ||
    description.includes("digital customer")
  ) {
    bonusPoints += 3;
  }
  if (description.includes("automation") || description.includes("workflow")) {
    bonusPoints += 3;
  }
  if (description.includes("data-driven") || description.includes("insights")) {
    bonusPoints += 3;
  }
  if (description.includes("agile") || description.includes("devops")) {
    bonusPoints += 2;
  }
  if (
    description.includes("cybersecurity") ||
    description.includes("compliance")
  ) {
    bonusPoints += 2;
  }
  if (description.includes("legacy") || description.includes("outdated")) {
    bonusPoints -= 3;
  }

  const finalScore = Math.min(100, Math.max(0, baseScore + bonusPoints));

  // Determine readiness level and recommendations
  let readinessLevel = "";
  let recommendations = [];
  let riskLevel = "";

  if (finalScore >= 80) {
    readinessLevel = "Excellent";
    riskLevel = "Low";
    recommendations = [
      "Your organization shows exceptional digital readiness",
      "Focus on advanced transformation initiatives",
      "Consider becoming a digital leader in your industry",
      "Implement cutting-edge technologies like AI and IoT",
    ];
  } else if (finalScore >= 65) {
    readinessLevel = "Good";
    riskLevel = "Medium";
    recommendations = [
      "Strong foundation with some areas for improvement",
      "Address identified gaps before major initiatives",
      "Invest in employee training and change management",
      "Strengthen data governance and security measures",
    ];
  } else if (finalScore >= 45) {
    readinessLevel = "Fair";
    riskLevel = "Medium-High";
    recommendations = [
      "Basic readiness but significant preparation needed",
      "Focus on building core digital capabilities",
      "Secure stronger leadership commitment and budget",
      "Start with pilot projects to build confidence",
    ];
  } else {
    readinessLevel = "Needs Improvement";
    riskLevel = "High";
    recommendations = [
      "Critical gaps identified - major preparation required",
      "Build foundational technology infrastructure",
      "Invest heavily in skills development and training",
      "Establish clear digital strategy and governance",
    ];
  }

  return {
    score: finalScore,
    level: readinessLevel,
    riskLevel: riskLevel,
    recommendations: recommendations,
    bonusPoints: bonusPoints,
  };
};
// 25. Saas Business Model Generator
export const calculateSaaSBusinessModel = (formData) => {
  const generatedModel = {
    businessModel:
      formData.industry.includes("B2B") ||
      formData.targetAudience.toLowerCase().includes("business")
        ? "B2B SaaS Subscription"
        : "Freemium + Premium Tiers",
    pricingStrategy: {
      tier1: { name: "Starter", price: "$29/mo", features: 5 },
      tier2: { name: "Professional", price: "$79/mo", features: 15 },
      tier3: { name: "Enterprise", price: "$299/mo", features: "Unlimited" },
    },
    revenueStreams: [
      "Monthly/Annual Subscriptions",
      "Add-on Features",
      "API Access",
      "White-label Solutions",
    ],
    targetMarket: formData.targetAudience || "Small to Medium Businesses",
    growthStrategy: [
      "Content Marketing & SEO",
      "Freemium User Conversion",
      "Partner & Affiliate Programs",
      "Product-led Growth",
    ],
    keyMetrics: {
      mrr: "Monthly Recurring Revenue",
      churnRate: "< 5% target",
      cac: "Customer Acquisition Cost",
      ltv: "Lifetime Value",
    },
    estimatedTimeToMarket: "3-6 months",
    initialInvestment: "$25,000 - $75,000",
  };

  return generatedModel;
};

// 25. Code Quality Analyzer (Lite)
export const calculateCodeQuality = (code, description) => {
  const codeLength = code.length;
  const lines = code.split("\n").length;

  const hasComments = code.includes("//") || code.includes("/*");
  const hasErrorHandling =
    code.includes("try") || code.includes("catch") || code.includes("error");
  const hasTypeChecking =
    code.includes("interface") ||
    code.includes("type") ||
    code.includes("TypeScript");
  const hasTests =
    description.toLowerCase().includes("test") ||
    code.includes("test") ||
    code.includes("expect");
  const hasModularCode =
    code.includes("function") ||
    code.includes("class") ||
    code.includes("const");

  const longLines = code.split("\n").filter((line) => line.length > 120).length;
  const nestedDepth = Math.max(
    ...code.split("\n").map((line) => {
      const indent = line.match(/^\s*/)?.[0].length || 0;
      return Math.floor(indent / 2);
    })
  );

  let baseScore = 50;
  let critical = 0;
  let major = 0;
  let minor = 0;
  let suggestions = 0;

  if (hasComments) {
    baseScore += 8;
    minor += 0;
  } else {
    major += 1;
    baseScore -= 5;
    suggestions += 1;
  }

  if (hasErrorHandling) {
    baseScore += 12;
  } else {
    critical += 1;
    baseScore -= 10;
  }

  if (hasTypeChecking) {
    baseScore += 10;
  } else {
    major += 1;
    baseScore -= 5;
  }

  if (hasTests) {
    baseScore += 15;
  } else {
    major += 2;
    baseScore -= 8;
  }

  if (hasModularCode) {
    baseScore += 8;
  } else {
    minor += 2;
  }

  if (longLines > 5) {
    minor += longLines;
    baseScore -= longLines * 2;
    suggestions += 1;
  }

  if (nestedDepth > 4) {
    major += 1;
    baseScore -= 5;
  }

  if (codeLength < 50) {
    suggestions += 1;
    baseScore -= 5;
  }

  if (lines > 300) {
    minor += 1;
    suggestions += 1;
  }

  baseScore = Math.max(0, Math.min(100, baseScore));

  const maintainability = Math.min(100, baseScore + (hasComments ? 10 : -10));
  const reliability = Math.min(100, baseScore + (hasErrorHandling ? 15 : -15));
  const security = Math.min(100, baseScore + (hasTypeChecking ? 10 : -5));
  const performance = Math.min(100, baseScore + (nestedDepth < 3 ? 10 : -10));

  let grade = "F";
  if (baseScore >= 90) grade = "A";
  else if (baseScore >= 80) grade = "B";
  else if (baseScore >= 70) grade = "C";
  else if (baseScore >= 60) grade = "D";

  const strengths = [];
  const improvements = [];

  if (hasErrorHandling) strengths.push("Proper error handling implemented");
  else improvements.push("Add comprehensive error handling");

  if (hasComments) strengths.push("Well-documented code");
  else improvements.push("Add meaningful comments and documentation");

  if (hasTypeChecking) strengths.push("Type safety implemented");
  else improvements.push("Implement type checking for better reliability");

  if (hasTests) strengths.push("Test coverage present");
  else improvements.push("Add unit and integration tests");

  if (nestedDepth < 3)
    strengths.push("Good code structure with low complexity");
  else improvements.push("Reduce nesting depth for better readability");

  if (longLines <= 3) strengths.push("Consistent line length");
  else improvements.push("Break down long lines for better readability");

  const totalIssues = critical + major + minor;
  const estimatedFixTime =
    totalIssues < 5 ? "1-2 hours" : totalIssues < 15 ? "4-8 hours" : "1-2 days";

  return {
    overallScore: Math.round(baseScore),
    grade,
    issues: {
      critical,
      major,
      minor,
      suggestions,
    },
    metrics: {
      maintainability: Math.round(maintainability),
      reliability: Math.round(reliability),
      security: Math.round(security),
      performance: Math.round(performance),
    },
    strengths:
      strengths.length > 0 ? strengths : ["Basic code structure present"],
    improvements:
      improvements.length > 0
        ? improvements
        : ["Continue following best practices"],
    estimatedFixTime,
    codeSmells: Math.floor(Math.random() * 5) + minor,
    duplications: Math.floor(Math.random() * 3),
    coverage: hasTests
      ? Math.floor(Math.random() * 30) + 60
      : Math.floor(Math.random() * 20),
  };
};
