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

// 26. Code Quality Analyzer (Lite)
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

// 27. SaaS Scalability Readiness Checker
export const calculateSaaSScalability = (formData) => {
  const users = parseInt(formData.monthlyUsers) || 0;
  const responseTime = parseFloat(formData.avgResponseTime) || 0;
  const infrastructure = formData.currentInfrastructure.toLowerCase();
  const description = formData.description.toLowerCase();

  let score = 50;

  if (users > 100000) score += 15;
  else if (users > 50000) score += 12;
  else if (users > 10000) score += 8;
  else if (users > 1000) score += 5;

  if (responseTime < 200) score += 15;
  else if (responseTime < 500) score += 10;
  else if (responseTime < 1000) score += 5;
  else score -= 5;

  if (infrastructure.includes("kubernetes") || infrastructure.includes("k8s"))
    score += 15;
  if (infrastructure.includes("microservices")) score += 10;
  if (infrastructure.includes("serverless")) score += 10;
  if (infrastructure.includes("load balancer")) score += 8;
  if (infrastructure.includes("cdn")) score += 8;
  if (infrastructure.includes("cache") || infrastructure.includes("redis"))
    score += 7;
  if (infrastructure.includes("docker")) score += 5;
  if (infrastructure.includes("monolith")) score -= 10;

  const positiveKeywords = [
    "scalable",
    "distributed",
    "horizontal",
    "cloud",
    "auto-scaling",
    "redundant",
    "failover",
    "monitoring",
    "optimized",
    "elastic",
  ];
  const negativeKeywords = [
    "single server",
    "bottleneck",
    "slow",
    "downtime",
    "manual",
    "legacy",
    "outdated",
    "struggling",
    "limited",
  ];

  positiveKeywords.forEach((keyword) => {
    if (description.includes(keyword)) score += 3;
  });

  negativeKeywords.forEach((keyword) => {
    if (description.includes(keyword)) score -= 3;
  });

  score = Math.max(0, Math.min(100, score));

  let level = "";
  let color = "";
  let recommendations = [];

  if (score >= 80) {
    level = "Excellent";
    color = "text-green-600";
    recommendations = [
      "Your infrastructure is highly scalable",
      "Continue monitoring performance metrics",
      "Consider implementing advanced caching strategies",
      "Explore multi-region deployment for global reach",
    ];
  } else if (score >= 60) {
    level = "Good";
    color = "text-blue-600";
    recommendations = [
      "Solid foundation with room for improvement",
      "Implement auto-scaling policies",
      "Add more monitoring and alerting",
      "Consider containerization if not already implemented",
    ];
  } else if (score >= 40) {
    level = "Moderate";
    color = "text-yellow-600";
    recommendations = [
      "Significant scalability improvements needed",
      "Migrate to cloud-native architecture",
      "Implement load balancing and caching",
      "Break down monolithic structures into microservices",
    ];
  } else {
    level = "Needs Improvement";
    color = "text-red-600";
    recommendations = [
      "Critical scalability issues detected",
      "Urgent infrastructure modernization required",
      "Implement basic monitoring and logging",
      "Consider complete architecture redesign",
    ];
  }

  return { score, level, recommendations, color };
};

// 28. Legacy System Modernization Readiness

export const calculateLegacySystemModernizationReadiness = (formData) => {
  const age = parseInt(formData.systemAge) || 0;
  const cost = parseFloat(formData.maintenanceCost) || 0;
  const downtime = parseFloat(formData.downtime) || 0;
  const techStack = formData.techStack.toLowerCase();
  const description = formData.description.toLowerCase();

  let score = 0;

  // Age scoring (higher age = higher urgency for modernization)
  if (age > 15) score += 25;
  else if (age > 10) score += 20;
  else if (age > 7) score += 15;
  else if (age > 5) score += 10;
  else if (age > 3) score += 5;

  // Maintenance cost scoring (higher cost = higher urgency)
  if (cost > 100000) score += 25;
  else if (cost > 50000) score += 20;
  else if (cost > 25000) score += 15;
  else if (cost > 10000) score += 10;
  else if (cost > 5000) score += 5;

  // Downtime scoring
  if (downtime > 20) score += 20;
  else if (downtime > 10) score += 15;
  else if (downtime > 5) score += 10;
  else if (downtime > 2) score += 5;

  // Tech stack analysis (legacy indicators)
  const legacyIndicators = [
    "cobol",
    "fortran",
    "vb6",
    "visual basic 6",
    "mainframe",
    "as/400",
    "powerbuilder",
    "foxpro",
    "delphi",
    "perl",
    "classic asp",
    "vbscript",
    "silverlight",
    "flash",
  ];

  const oldTech = [
    "java 6",
    "java 7",
    "php 5",
    "python 2",
    "angular.js",
    "backbone",
    "jquery",
    "struts",
    "jsp",
  ];

  legacyIndicators.forEach((indicator) => {
    if (techStack.includes(indicator)) score += 5;
  });

  oldTech.forEach((tech) => {
    if (techStack.includes(tech)) score += 3;
  });

  // Description keyword analysis
  const urgentKeywords = [
    "outdated",
    "legacy",
    "unsupported",
    "deprecated",
    "obsolete",
    "slow",
    "unreliable",
    "crashes",
    "security risk",
    "vulnerable",
    "no documentation",
    "single vendor",
    "proprietary",
    "difficult to maintain",
    "hard to find developers",
    "bottleneck",
    "technical debt",
  ];

  const positiveKeywords = [
    "modern",
    "cloud",
    "scalable",
    "documented",
    "secure",
    "automated",
    "containerized",
    "api",
    "microservices",
  ];

  urgentKeywords.forEach((keyword) => {
    if (description.includes(keyword)) score += 3;
  });

  positiveKeywords.forEach((keyword) => {
    if (description.includes(keyword)) score -= 2;
  });

  // Cap score between 0 and 100
  score = Math.max(0, Math.min(100, score));

  let urgency = "";
  let priority = "";
  let color = "";
  let recommendations = [];

  if (score >= 70) {
    urgency = "Critical";
    priority = "Immediate Action Required";
    color = "text-red-600";
    recommendations = [
      "Immediate modernization is critical to avoid system failure",
      "Assess business continuity risks and create contingency plans",
      "Start with a pilot modernization project to prove ROI",
      "Consider cloud-native architecture for long-term benefits",
      "Implement interim security patches while planning migration",
    ];
  } else if (score >= 50) {
    urgency = "High";
    priority = "Plan Migration Within 6-12 Months";
    color = "text-orange-600";
    recommendations = [
      "Begin comprehensive modernization planning immediately",
      "Document current system architecture and dependencies",
      "Evaluate modern technology alternatives",
      "Create a phased migration roadmap",
      "Allocate budget for modernization initiatives",
    ];
  } else if (score >= 30) {
    urgency = "Moderate";
    priority = "Consider Modernization Within 1-2 Years";
    color = "text-yellow-600";
    recommendations = [
      "Monitor system performance and maintenance costs",
      "Begin researching modern technology options",
      "Implement incremental improvements where possible",
      "Build business case for future modernization",
      "Train team on modern development practices",
    ];
  } else {
    urgency = "Low";
    priority = "Maintain Current System";
    color = "text-green-600";
    recommendations = [
      "Your system is relatively modern and maintainable",
      "Focus on continuous improvement and best practices",
      "Keep technology stack updated with security patches",
      "Monitor for emerging technologies that could provide value",
      "Document architecture for future team members",
    ];
  }

  return { score, urgency, recommendations, color, priority };
};

// 29. App Security Checklist Generator

export const generateSecurityChecklist = (formData) => {
  const appType = formData.appType.toLowerCase();
  const dataHandling = formData.dataHandling.toLowerCase();
  const userAuth = formData.userAuth.toLowerCase();
  const compliance = formData.compliance.toLowerCase();
  const description = formData.description.toLowerCase();

  const checklist = [];

  // Authentication & Authorization
  const authItems = [
    "Implement strong password requirements (minimum 12 characters, complexity rules)",
    "Enable multi-factor authentication (MFA) for all user accounts",
    "Use secure session management with proper timeout mechanisms",
    "Implement account lockout policies after failed login attempts",
  ];

  if (userAuth.includes("oauth") || userAuth.includes("sso")) {
    authItems.push(
      "Validate OAuth tokens and implement proper redirect URI validation"
    );
    authItems.push("Use PKCE (Proof Key for Code Exchange) for OAuth flows");
  }

  if (userAuth.includes("jwt")) {
    authItems.push("Use strong JWT signing algorithms (RS256 or ES256)");
    authItems.push("Implement JWT expiration and refresh token rotation");
  }

  checklist.push({
    category: "Authentication & Authorization",
    items: authItems,
  });

  // Data Protection
  const dataItems = [
    "Encrypt sensitive data at rest using AES-256 or equivalent",
    "Use TLS 1.3 or TLS 1.2 for all data in transit",
    "Implement proper key management with rotation policies",
    "Sanitize and validate all user inputs to prevent injection attacks",
  ];

  if (dataHandling.includes("personal") || dataHandling.includes("pii")) {
    dataItems.push("Implement data minimization principles");
    dataItems.push("Provide data export and deletion capabilities for users");
    dataItems.push("Maintain audit logs for all access to personal data");
  }

  if (dataHandling.includes("payment") || dataHandling.includes("financial")) {
    dataItems.push("Achieve PCI DSS compliance for payment data");
    dataItems.push("Never store CVV or full credit card numbers");
    dataItems.push("Use tokenization for sensitive payment information");
  }

  if (dataHandling.includes("health") || dataHandling.includes("medical")) {
    dataItems.push("Ensure HIPAA compliance for protected health information");
    dataItems.push("Implement strong access controls for medical records");
  }

  checklist.push({
    category: "Data Protection & Privacy",
    items: dataItems,
  });

  // Application Security
  const appSecItems = [
    "Implement Content Security Policy (CSP) headers",
    "Use parameterized queries to prevent SQL injection",
    "Validate and sanitize all file uploads",
    "Implement rate limiting and DDoS protection",
    "Use secure coding practices to prevent XSS attacks",
    "Disable unnecessary HTTP methods and endpoints",
  ];

  if (appType.includes("web") || appType.includes("browser")) {
    appSecItems.push("Set HttpOnly and Secure flags on cookies");
    appSecItems.push("Implement CORS policies correctly");
    appSecItems.push("Use Subresource Integrity (SRI) for third-party scripts");
  }

  if (
    appType.includes("mobile") ||
    appType.includes("ios") ||
    appType.includes("android")
  ) {
    appSecItems.push("Implement certificate pinning for API calls");
    appSecItems.push("Obfuscate code to prevent reverse engineering");
    appSecItems.push("Use secure storage mechanisms (Keychain/Keystore)");
    appSecItems.push("Implement jailbreak/root detection");
  }

  if (appType.includes("api")) {
    appSecItems.push("Implement API versioning and deprecation policies");
    appSecItems.push("Use API keys with proper rotation policies");
    appSecItems.push("Implement request signing for sensitive operations");
  }

  checklist.push({
    category: "Application Security",
    items: appSecItems,
  });

  // Infrastructure & Network Security
  const infraItems = [
    "Use Web Application Firewall (WAF) for protection",
    "Implement network segmentation and least privilege access",
    "Enable logging and monitoring for security events",
    "Keep all systems and dependencies updated with security patches",
    "Use strong encryption for database connections",
    "Implement backup and disaster recovery procedures",
  ];

  if (
    description.includes("cloud") ||
    description.includes("aws") ||
    description.includes("azure") ||
    description.includes("gcp")
  ) {
    infraItems.push("Follow cloud provider security best practices");
    infraItems.push("Implement proper IAM roles and policies");
    infraItems.push("Enable cloud-native security monitoring tools");
  }

  if (
    description.includes("container") ||
    description.includes("docker") ||
    description.includes("kubernetes")
  ) {
    infraItems.push("Scan container images for vulnerabilities");
    infraItems.push("Implement pod security policies in Kubernetes");
    infraItems.push(
      "Use secrets management solutions (not environment variables)"
    );
  }

  checklist.push({
    category: "Infrastructure & Network Security",
    items: infraItems,
  });

  // Compliance & Governance
  const complianceItems = [
    "Conduct regular security audits and penetration testing",
    "Maintain security incident response plan",
    "Document security policies and procedures",
    "Provide security awareness training for team members",
    "Implement change management processes",
  ];

  if (compliance.includes("gdpr")) {
    complianceItems.push("Implement GDPR consent mechanisms");
    complianceItems.push("Appoint Data Protection Officer (DPO) if required");
    complianceItems.push("Maintain records of processing activities");
  }

  if (compliance.includes("sox")) {
    complianceItems.push("Implement SOX controls for financial data");
    complianceItems.push(
      "Maintain audit trails for all financial transactions"
    );
  }

  if (compliance.includes("iso")) {
    complianceItems.push("Follow ISO 27001 security standards");
    complianceItems.push(
      "Document Information Security Management System (ISMS)"
    );
  }

  if (compliance.includes("hipaa")) {
    complianceItems.push("Sign Business Associate Agreements (BAAs)");
    complianceItems.push("Conduct HIPAA risk assessments");
  }

  checklist.push({
    category: "Compliance & Governance",
    items: complianceItems,
  });

  // Monitoring & Response
  const monitoringItems = [
    "Implement centralized logging and log retention policies",
    "Set up real-time security alerts and notifications",
    "Monitor for suspicious activities and anomalies",
    "Implement automated vulnerability scanning",
    "Conduct regular security reviews and code audits",
    "Maintain security metrics and KPIs",
  ];

  checklist.push({
    category: "Monitoring & Incident Response",
    items: monitoringItems,
  });

  // Calculate risk level based on inputs
  const totalItems = checklist.reduce((sum, cat) => sum + cat.items.length, 0);
  let riskScore = 0;

  if (dataHandling.includes("payment") || dataHandling.includes("health"))
    riskScore += 30;
  else if (dataHandling.includes("personal") || dataHandling.includes("pii"))
    riskScore += 20;

  if (!userAuth.includes("mfa") && !userAuth.includes("2fa")) riskScore += 15;
  if (description.includes("public") || description.includes("external"))
    riskScore += 10;
  if (!description.includes("encryption")) riskScore += 10;

  let riskLevel = "";
  let color = "";

  if (riskScore >= 50) {
    riskLevel = "Critical";
    color = "text-red-600";
  } else if (riskScore >= 30) {
    riskLevel = "High";
    color = "text-orange-600";
  } else if (riskScore >= 15) {
    riskLevel = "Moderate";
    color = "text-yellow-600";
  } else {
    riskLevel = "Low";
    color = "text-green-600";
  }

  return { checklist, riskLevel, color, totalItems };
};

// 30. Performance Benchmarking Tool
export const calculatePerformanceBenchmark = (formData) => {
  const loadTime = parseFloat(formData.pageLoadTime) || 0;
  const tti = parseFloat(formData.timeToInteractive) || 0;
  const apiTime = parseFloat(formData.apiResponseTime) || 0;
  const throughput = parseFloat(formData.throughput) || 0;
  const description = formData.description.toLowerCase();

  const benchmarks = [];

  // Page Load Performance
  let loadScore = 100;
  let loadGrade = "";
  const loadRecs = [];

  if (loadTime > 5000) {
    loadScore = 20;
    loadGrade = "F";
    loadRecs.push("Critical: Page load time exceeds 5 seconds");
    loadRecs.push("Implement aggressive caching strategies");
    loadRecs.push("Optimize images and reduce file sizes");
    loadRecs.push("Consider using a CDN for static assets");
  } else if (loadTime > 3000) {
    loadScore = 50;
    loadGrade = "D";
    loadRecs.push("Page load time is above recommended threshold");
    loadRecs.push("Optimize critical rendering path");
    loadRecs.push("Implement lazy loading for images");
  } else if (loadTime > 2000) {
    loadScore = 70;
    loadGrade = "C";
    loadRecs.push("Page load performance is acceptable but can improve");
    loadRecs.push("Minimize render-blocking resources");
    loadRecs.push("Enable compression (Gzip/Brotli)");
  } else if (loadTime > 1000) {
    loadScore = 85;
    loadGrade = "B";
    loadRecs.push("Good page load performance");
    loadRecs.push("Fine-tune resource loading priorities");
  } else {
    loadScore = 95;
    loadGrade = "A";
    loadRecs.push("Excellent page load performance");
    loadRecs.push("Maintain current optimization strategies");
  }

  benchmarks.push({
    category: "Page Load Performance",
    score: loadScore,
    grade: loadGrade,
    recommendations: loadRecs,
  });

  // Time to Interactive
  let ttiScore = 100;
  let ttiGrade = "";
  const ttiRecs = [];

  if (tti > 7000) {
    ttiScore = 25;
    ttiGrade = "F";
    ttiRecs.push("Critical: Time to Interactive is too high");
    ttiRecs.push("Reduce JavaScript execution time");
    ttiRecs.push("Code-split large JavaScript bundles");
    ttiRecs.push("Defer non-critical JavaScript");
  } else if (tti > 5000) {
    ttiScore = 50;
    ttiGrade = "D";
    ttiRecs.push("Time to Interactive needs improvement");
    ttiRecs.push("Optimize third-party scripts");
    ttiRecs.push("Use web workers for heavy computations");
  } else if (tti > 3500) {
    ttiScore = 70;
    ttiGrade = "C";
    ttiRecs.push("Time to Interactive is moderate");
    ttiRecs.push("Minimize main thread work");
    ttiRecs.push("Optimize JavaScript parsing and compilation");
  } else if (tti > 2000) {
    ttiScore = 85;
    ttiGrade = "B";
    ttiRecs.push("Good Time to Interactive");
    ttiRecs.push("Continue monitoring third-party impact");
  } else {
    ttiScore = 95;
    ttiGrade = "A";
    ttiRecs.push("Excellent Time to Interactive");
    ttiRecs.push("User experience is highly responsive");
  }

  benchmarks.push({
    category: "Time to Interactive",
    score: ttiScore,
    grade: ttiGrade,
    recommendations: ttiRecs,
  });

  // API Response Time
  let apiScore = 100;
  let apiGrade = "";
  const apiRecs = [];

  if (apiTime > 2000) {
    apiScore = 30;
    apiGrade = "F";
    apiRecs.push("Critical: API response time is unacceptable");
    apiRecs.push("Optimize database queries and add indexes");
    apiRecs.push("Implement Redis caching layer");
    apiRecs.push("Consider database connection pooling");
  } else if (apiTime > 1000) {
    apiScore = 55;
    apiGrade = "D";
    apiRecs.push("API response time needs optimization");
    apiRecs.push("Add caching for frequently accessed data");
    apiRecs.push("Review and optimize slow queries");
  } else if (apiTime > 500) {
    apiScore = 75;
    apiGrade = "C";
    apiRecs.push("API performance is acceptable");
    apiRecs.push("Implement pagination for large datasets");
    apiRecs.push("Use API response compression");
  } else if (apiTime > 200) {
    apiScore = 88;
    apiGrade = "B";
    apiRecs.push("Good API response time");
    apiRecs.push("Monitor for performance degradation");
  } else {
    apiScore = 96;
    apiGrade = "A";
    apiRecs.push("Excellent API performance");
    apiRecs.push("APIs are well-optimized");
  }

  benchmarks.push({
    category: "API Response Time",
    score: apiScore,
    grade: apiGrade,
    recommendations: apiRecs,
  });

  // Throughput Performance
  let throughputScore = 100;
  let throughputGrade = "";
  const throughputRecs = [];

  if (throughput < 10) {
    throughputScore = 25;
    throughputGrade = "F";
    throughputRecs.push("Critical: Very low throughput capacity");
    throughputRecs.push("Implement horizontal scaling");
    throughputRecs.push("Add load balancing");
    throughputRecs.push("Optimize application architecture");
  } else if (throughput < 50) {
    throughputScore = 50;
    throughputGrade = "D";
    throughputRecs.push("Throughput capacity needs improvement");
    throughputRecs.push("Implement caching strategies");
    throughputRecs.push("Optimize resource utilization");
  } else if (throughput < 100) {
    throughputScore = 70;
    throughputGrade = "C";
    throughputRecs.push("Moderate throughput capacity");
    throughputRecs.push("Consider auto-scaling policies");
    throughputRecs.push("Monitor peak load handling");
  } else if (throughput < 500) {
    throughputScore = 85;
    throughputGrade = "B";
    throughputRecs.push("Good throughput capacity");
    throughputRecs.push("Prepare for traffic spikes");
  } else {
    throughputScore = 95;
    throughputGrade = "A";
    throughputRecs.push("Excellent throughput capacity");
    throughputRecs.push("Infrastructure is well-scaled");
  }

  benchmarks.push({
    category: "Throughput Capacity",
    score: throughputScore,
    grade: throughputGrade,
    recommendations: throughputRecs,
  });

  // Description-based adjustments
  const optimizationKeywords = [
    "cdn",
    "cache",
    "redis",
    "memcached",
    "optimized",
    "compressed",
    "minified",
    "lazy load",
    "code split",
    "tree shaking",
  ];

  const issueKeywords = [
    "slow",
    "sluggish",
    "timeout",
    "bottleneck",
    "unoptimized",
    "memory leak",
    "blocking",
    "heavy",
  ];

  let descriptionBonus = 0;
  optimizationKeywords.forEach((keyword) => {
    if (description.includes(keyword)) descriptionBonus += 2;
  });

  let descriptionPenalty = 0;
  issueKeywords.forEach((keyword) => {
    if (description.includes(keyword)) descriptionPenalty += 3;
  });

  // Calculate overall score
  const baseScore = (loadScore + ttiScore + apiScore + throughputScore) / 4;
  const overallScore = Math.max(
    0,
    Math.min(100, baseScore + descriptionBonus - descriptionPenalty)
  );

  let grade = "";
  let color = "";

  if (overallScore >= 90) {
    grade = "A - Excellent";
    color = "text-green-600";
  } else if (overallScore >= 80) {
    grade = "B - Good";
    color = "text-blue-600";
  } else if (overallScore >= 70) {
    grade = "C - Average";
    color = "text-yellow-600";
  } else if (overallScore >= 60) {
    grade = "D - Below Average";
    color = "text-orange-600";
  } else {
    grade = "F - Needs Improvement";
    color = "text-red-600";
  }

  return {
    overallScore: Math.round(overallScore),
    grade,
    color,
    benchmarks,
  };
};
// 31. Scope Of Work Generator
export const calculateScopeOfWork = (formData) => {
  const sow = `
      SCOPE OF WORK (SOW)
      ${formData.projectName ? `\nProject: ${formData.projectName}` : ""}
      ${formData.clientName ? `Client: ${formData.clientName}` : ""}
      ${
        formData.startDate || formData.endDate
          ? `\nProject Duration: ${formData.startDate} to ${formData.endDate}`
          : ""
      }
      ${formData.budget ? `Budget: $${formData.budget}` : ""}

      PROJECT OVERVIEW
      ${
        formData.description ||
        "Please provide project description to generate detailed overview."
      }

      DELIVERABLES
      ${
        formData.deliverables
          ? formData.deliverables
              .split(",")
              .map((d, i) => `${i + 1}. ${d.trim()}`)
              .join("\n")
          : "Please list deliverables separated by commas."
      }

      PROJECT PHASES
      Phase 1: Initial Planning & Discovery
      - Requirement gathering and analysis
      - Stakeholder meetings and alignment
      - Project timeline finalization

      Phase 2: Development & Implementation
      - Core development work
      - Regular progress updates
      - Quality assurance testing

      Phase 3: Delivery & Handover
      - Final deliverable submission
      - Documentation and training
      - Post-project support

      TERMS & CONDITIONS
      - Payment terms: As per agreement
      - Intellectual property rights: As per agreement
      - Confidentiality: All project information will be kept confidential
      - Changes to scope: Any changes must be documented and approved

      ACCEPTANCE CRITERIA
      All deliverables must meet the specified requirements and be approved by the client before final acceptance.
          `.trim();

  return sow;
};

// 32. Software Proposal Generator
export const calculateSoftwareProposal = (formData) => {
  const proposal = `
      SOFTWARE DEVELOPMENT PROPOSAL
      ${formData.projectName ? `\nProject: ${formData.projectName}` : ""}
      ${formData.clientName ? `Prepared for: ${formData.clientName}` : ""}
      Date: ${new Date().toLocaleDateString()}

      EXECUTIVE SUMMARY
      ${
        formData.description ||
        "Please provide a project description to generate a detailed executive summary."
      }

      TECHNICAL APPROACH
      ${
        formData.techStack
          ? `Technology Stack: ${formData.techStack}`
          : "Technology stack to be determined based on project requirements."
      }

      Our development approach follows industry best practices including:
      - Agile methodology with 2-week sprints
      - Test-driven development (TDD)
      - Continuous integration and deployment (CI/CD)
      - Code reviews and quality assurance
      - Regular client communication and demos

      KEY FEATURES & FUNCTIONALITY
      ${
        formData.features
          ? formData.features
              .split(",")
              .map((f, i) => `${i + 1}. ${f.trim()}`)
              .join("\n")
          : "Please list key features separated by commas."
      }

      PROJECT TIMELINE
      ${
        formData.timeline
          ? `Estimated Duration: ${formData.timeline}`
          : "Timeline to be determined after detailed requirement analysis."
      }

      Phase 1: Discovery & Planning (2 weeks)
      - Requirement analysis and documentation
      - Technical architecture design
      - UI/UX wireframes and mockups
      - Project roadmap finalization

      Phase 2: Development (varies based on scope)
      - Sprint planning and execution
      - Core functionality implementation
      - Integration with third-party services
      - Regular testing and bug fixes

      Phase 3: Testing & QA (2 weeks)
      - Comprehensive testing (unit, integration, E2E)
      - Performance optimization
      - Security audit and penetration testing
      - User acceptance testing (UAT)

      Phase 4: Deployment & Launch (1 week)
      - Production environment setup
      - Data migration (if applicable)
      - Go-live and monitoring
      - Post-launch support

      INVESTMENT & PRICING
      ${
        formData.budget
          ? `Budget: $${formData.budget}`
          : "Investment details to be discussed based on project scope."
      }

      Our pricing includes:
      - Full-stack development
      - Quality assurance and testing
      - Project management
      - Documentation
      - 30 days post-launch support

      DELIVERABLES
      1. Fully functional software application
      2. Source code repository with version control
      3. Technical documentation
      4. User documentation and training materials
      5. Deployment and hosting setup
      6. Post-launch support plan

      TEAM EXPERTISE
      Our development team brings extensive experience in:
      - Full-stack web and mobile development
      - Cloud infrastructure and DevOps
      - UI/UX design and user research
      - Security and compliance
      - Performance optimization

      WHY CHOOSE US?
      ✓ Proven track record with 500+ successful projects
      ✓ Expert team with 10+ years average experience
      ✓ Agile methodology for flexibility and transparency
      ✓ On-time delivery guarantee
      ✓ Comprehensive post-launch support

      TERMS & CONDITIONS
      - Payment terms: Milestone-based payments
      - Intellectual property: Client owns all deliverables
      - Confidentiality: NDA in place
      - Change requests: Managed through change control process
      - Warranty: 90 days bug-fix warranty post-launch

      NEXT STEPS
      1. Review and approve this proposal
      2. Sign contract and statement of work
      3. Kickoff meeting and requirement finalization
      4. Begin development sprint 1

      We look forward to partnering with you on this exciting project!
          `.trim();

  return proposal;
};

// 33. App Development Cost Breakdown Calculator

const HOURLY_RATES = {
  us: 150,
  eu: 100,
  asia: 50,
  latam: 60,
};

const COMPLEXITY_MULTIPLIERS = {
  simple: 0.7,
  medium: 1.0,
  complex: 1.5,
};

const PLATFORM_MULTIPLIERS = {
  ios: 1.0,
  android: 1.0,
  "cross-platform": 0.8,
  both: 1.8,
};

const FEATURE_COSTS = {
  "User Authentication": 40,
  "Push Notifications": 30,
  "Payment Integration": 80,
  "Social Media Login": 25,
  "Real-time Chat": 100,
  "GPS/Location Services": 50,
  "Camera Integration": 40,
  "Offline Mode": 60,
  Analytics: 35,
  "Admin Dashboard": 120,
};

const DESIGN_MULTIPLIERS = {
  basic: 0.8,
  medium: 1.0,
  advanced: 1.4,
};

const TIMELINE_MULTIPLIERS = {
  rush: 1.3,
  standard: 1.0,
  flexible: 0.9,
};

function analyzeDescription(description) {
  const keywords = [
    {
      terms: ["e-commerce", "shop", "store", "payment"],
      name: "E-commerce Features",
      cost: 15000,
    },
    {
      terms: ["ai", "machine learning", "ml"],
      name: "AI/ML Integration",
      cost: 25000,
    },
    {
      terms: ["blockchain", "crypto", "nft"],
      name: "Blockchain Integration",
      cost: 30000,
    },
    {
      terms: ["video", "streaming", "live"],
      name: "Video Streaming",
      cost: 20000,
    },
    {
      terms: ["social", "network", "feed"],
      name: "Social Features",
      cost: 12000,
    },
    {
      terms: ["booking", "reservation", "appointment"],
      name: "Booking System",
      cost: 10000,
    },
    {
      terms: ["iot", "hardware", "device"],
      name: "IoT Integration",
      cost: 18000,
    },
    {
      terms: ["ar", "augmented reality", "vr"],
      name: "AR/VR Features",
      cost: 35000,
    },
  ];

  const lowerDesc = description.toLowerCase();
  const detected = [];

  keywords.forEach((keyword) => {
    if (keyword.terms.some((term) => lowerDesc.includes(term))) {
      detected.push({ name: keyword.name, cost: keyword.cost });
    }
  });

  return detected;
}

export const formatCurrencyForCostBreakdown = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export function calculateAddDevCostBreakdown(formData) {
  const hourlyRate = HOURLY_RATES[formData.teamLocation];
  const complexityMultiplier = COMPLEXITY_MULTIPLIERS[formData.complexity];
  const platformMultiplier = PLATFORM_MULTIPLIERS[formData.platform];
  const designMultiplier = DESIGN_MULTIPLIERS[formData.designComplexity];
  const timelineMultiplier = TIMELINE_MULTIPLIERS[formData.timeline];

  let baseHours = 500;

  if (formData.appType === "web") {
    baseHours = 450;
  } else if (formData.appType === "both") {
    baseHours = 800;
  }

  baseHours *= complexityMultiplier * platformMultiplier * designMultiplier;

  const featuresBreakdown = formData.features.map((feature) => ({
    name: feature,
    cost: FEATURE_COSTS[feature] * hourlyRate * 0.01,
  }));

  const featuresCost = featuresBreakdown.reduce((sum, f) => sum + f.cost, 0);

  const descriptionFeatures = analyzeDescription(formData.description);
  const descriptionCost = descriptionFeatures.reduce(
    (sum, f) => sum + f.cost,
    0
  );

  const baseCost = baseHours * hourlyRate;
  const totalBeforeTimeline = baseCost + featuresCost + descriptionCost;
  const total = Math.round(totalBeforeTimeline * timelineMultiplier);

  const phases = {
    planning: Math.round(total * 0.1),
    design: Math.round(total * 0.2),
    development: Math.round(total * 0.45),
    testing: Math.round(total * 0.15),
    deployment: Math.round(total * 0.05),
    maintenance: Math.round(total * 0.05),
  };

  const teamSizeMap = {
    simple: 3,
    medium: 5,
    complex: 8,
  };

  const timelineMap = {
    simple: "2-3 months",
    medium: "4-6 months",
    complex: "6-12 months",
  };

  return {
    total,
    minCost: Math.round(total * 0.85),
    maxCost: Math.round(total * 1.15),
    phases,
    timeline: timelineMap[formData.complexity],
    teamSize: teamSizeMap[formData.complexity],
    hourlyRate,
    featuresBreakdown,
    additionalCosts: descriptionFeatures,
  };
}

// 34 AI App Development Cost Calculator

export const costParameters = {
  ai_model: [
    {
      category: "ai_model",
      feature_name: "Basic NLP",
      cost_multiplier: 1,
      base_cost: 5000,
      description: "Simple natural language processing capabilities",
    },
    {
      category: "ai_model",
      feature_name: "Advanced ML",
      cost_multiplier: 1.5,
      base_cost: 8000,
      description: "Machine learning models with training",
    },
    {
      category: "ai_model",
      feature_name: "Computer Vision",
      cost_multiplier: 1.8,
      base_cost: 10000,
      description: "Image and video recognition",
    },
    {
      category: "ai_model",
      feature_name: "Deep Learning",
      cost_multiplier: 2.5,
      base_cost: 15000,
      description: "Complex neural networks and deep learning",
    },
    {
      category: "ai_model",
      feature_name: "Generative AI",
      cost_multiplier: 2,
      base_cost: 12000,
      description: "ChatGPT-like generative capabilities",
    },
  ],
  complexity: [
    {
      category: "complexity",
      feature_name: "Simple",
      cost_multiplier: 1,
      base_cost: 3000,
      description: "Basic features, single functionality",
    },
    {
      category: "complexity",
      feature_name: "Moderate",
      cost_multiplier: 1.5,
      base_cost: 6000,
      description: "Multiple features, moderate integration",
    },
    {
      category: "complexity",
      feature_name: "Complex",
      cost_multiplier: 2,
      base_cost: 10000,
      description: "Advanced features, complex workflows",
    },
    {
      category: "complexity",
      feature_name: "Enterprise",
      cost_multiplier: 3,
      base_cost: 20000,
      description: "Enterprise-grade with scalability",
    },
  ],
  platform: [
    {
      category: "platform",
      feature_name: "Web Only",
      cost_multiplier: 1,
      base_cost: 2000,
      description: "Web application only",
    },
    {
      category: "platform",
      feature_name: "Mobile (iOS/Android)",
      cost_multiplier: 1.4,
      base_cost: 4000,
      description: "Native mobile applications",
    },
    {
      category: "platform",
      feature_name: "Cross-Platform",
      cost_multiplier: 1.2,
      base_cost: 3000,
      description: "React Native or Flutter",
    },
    {
      category: "platform",
      feature_name: "Web + Mobile",
      cost_multiplier: 1.6,
      base_cost: 5000,
      description: "Both web and mobile platforms",
    },
  ],
  features: [
    {
      category: "features",
      feature_name: "User Authentication",
      cost_multiplier: 1.1,
      base_cost: 1000,
      description: "Login, signup, password reset",
    },
    {
      category: "features",
      feature_name: "Payment Integration",
      cost_multiplier: 1.2,
      base_cost: 2000,
      description: "Stripe, PayPal integration",
    },
    {
      category: "features",
      feature_name: "Analytics Dashboard",
      cost_multiplier: 1.3,
      base_cost: 2500,
      description: "Custom analytics and reporting",
    },
    {
      category: "features",
      feature_name: "API Integration",
      cost_multiplier: 1.15,
      base_cost: 1500,
      description: "Third-party API connections",
    },
    {
      category: "features",
      feature_name: "Real-time Features",
      cost_multiplier: 1.25,
      base_cost: 2000,
      description: "WebSocket, live updates",
    },
    {
      category: "features",
      feature_name: "Admin Panel",
      cost_multiplier: 1.2,
      base_cost: 1800,
      description: "Content management system",
    },
  ],
  database: [
    {
      category: "database",
      feature_name: "Basic SQL",
      cost_multiplier: 1,
      base_cost: 800,
      description: "PostgreSQL or MySQL",
    },
    {
      category: "database",
      feature_name: "NoSQL",
      cost_multiplier: 1.1,
      base_cost: 1000,
      description: "MongoDB, Firebase",
    },
    {
      category: "database",
      feature_name: "Vector Database",
      cost_multiplier: 1.3,
      base_cost: 1500,
      description: "For AI embeddings and similarity search",
    },
  ],
  deployment: [
    {
      category: "deployment",
      feature_name: "Standard Hosting",
      cost_multiplier: 1,
      base_cost: 500,
      description: "Basic cloud hosting",
    },
    {
      category: "deployment",
      feature_name: "Scalable Cloud",
      cost_multiplier: 1.3,
      base_cost: 1200,
      description: "Auto-scaling infrastructure",
    },
    {
      category: "deployment",
      feature_name: "Enterprise Infrastructure",
      cost_multiplier: 1.8,
      base_cost: 3000,
      description: "High availability, load balancing",
    },
  ],
};

export const aiAppDevelopmentCalculater = (formData) => {
  let cost = 0;
  const newBreakdown = {};

  // 🔹 AI Model
  const aiModelParam = costParameters.ai_model?.find(
    (p) => p.feature_name === formData.aiModel
  );
  if (aiModelParam) {
    cost += aiModelParam.base_cost;
    newBreakdown["AI Model"] = aiModelParam.base_cost;
  }

  // 🔹 Complexity
  const complexityParam = costParameters.complexity?.find(
    (p) => p.feature_name === formData.complexity
  );
  if (complexityParam) {
    cost += complexityParam.base_cost;
    cost *= complexityParam.cost_multiplier;
    newBreakdown["Complexity"] = complexityParam.base_cost;
  }

  // 🔹 Platform
  const platformParam = costParameters.platform?.find(
    (p) => p.feature_name === formData.platform
  );
  if (platformParam) {
    cost += platformParam.base_cost;
    cost *= platformParam.cost_multiplier;
    newBreakdown["Platform"] = platformParam.base_cost;
  }

  // 🔹 Features
  formData.features.forEach((featureName) => {
    const featureParam = costParameters.features?.find(
      (p) => p.feature_name === featureName
    );
    if (featureParam) {
      cost += featureParam.base_cost;
      cost *= featureParam.cost_multiplier;
      newBreakdown[featureName] = featureParam.base_cost;
    }
  });

  // 🔹 Database
  if (formData.database) {
    const dbParam = costParameters.database?.find(
      (p) => p.feature_name === formData.database
    );
    if (dbParam) {
      cost += dbParam.base_cost;
      cost *= dbParam.cost_multiplier;
      newBreakdown["Database"] = dbParam.base_cost;
    }
  }

  // 🔹 Deployment
  if (formData.deployment) {
    const deployParam = costParameters.deployment?.find(
      (p) => p.feature_name === formData.deployment
    );
    if (deployParam) {
      cost += deployParam.base_cost;
      cost *= deployParam.cost_multiplier;
      newBreakdown["Deployment"] = deployParam.base_cost;
    }
  }

  // 🔹 Keyword Multipliers
  const keywords = formData.description.toLowerCase();

  if (
    keywords.includes("chatgpt") ||
    keywords.includes("gpt") ||
    keywords.includes("llm")
  ) {
    cost *= 1.2;
  }

  if (keywords.includes("real-time") || keywords.includes("realtime")) {
    cost *= 1.15;
  }

  if (keywords.includes("enterprise") || keywords.includes("scale")) {
    cost *= 1.3;
  }

  return {
    totalCost: Math.round(cost),
    breakdown: newBreakdown,
  };
};

// 35. Saas Pricing Model
export const saasPricingModelCostParameters = {
  model_type: [
    {
      category: "model_type",
      parameter_name: "Freemium",
      base_price: "0",
      multiplier: "0.5",
      description: "Free with premium upgrades",
    },
    {
      category: "model_type",
      parameter_name: "Subscription (Monthly)",
      base_price: "29",
      multiplier: "1.0",
      description: "Recurring monthly billing",
    },
    {
      category: "model_type",
      parameter_name: "Subscription (Annual)",
      base_price: "290",
      multiplier: "0.85",
      description: "Annual billing with discount",
    },
    {
      category: "model_type",
      parameter_name: "Usage-Based",
      base_price: "0",
      multiplier: "0.8",
      description: "Pay-per-usage pricing",
    },
    {
      category: "model_type",
      parameter_name: "Tiered Pricing",
      base_price: "49",
      multiplier: "1.2",
      description: "Multiple tiers for different segments",
    },
    {
      category: "model_type",
      parameter_name: "Hybrid (Sub + Usage)",
      base_price: "19",
      multiplier: "1.1",
      description: "Base subscription + usage fees",
    },
  ],
  user_tier: [
    {
      category: "user_tier",
      parameter_name: "Startup",
      base_price: "29",
      multiplier: "1.0",
      description: "For 1-50 users",
    },
    {
      category: "user_tier",
      parameter_name: "Growth",
      base_price: "99",
      multiplier: "1.5",
      description: "For 51-500 users",
    },
    {
      category: "user_tier",
      parameter_name: "Enterprise",
      base_price: "499",
      multiplier: "2.5",
      description: "For 500+ users with dedicated support",
    },
  ],
  features: [
    {
      category: "features",
      parameter_name: "Basic API",
      base_price: "0",
      multiplier: "1.1",
      description: "Limited API access",
    },
    {
      category: "features",
      parameter_name: "Advanced API",
      base_price: "10",
      multiplier: "1.2",
      description: "Full API access",
    },
    {
      category: "features",
      parameter_name: "Webhooks & Real-time",
      base_price: "15",
      multiplier: "1.25",
      description: "Event-driven integration",
    },
    {
      category: "features",
      parameter_name: "Custom Reports",
      base_price: "20",
      multiplier: "1.3",
      description: "Advanced reporting engine",
    },
    {
      category: "features",
      parameter_name: "SSO & Security",
      base_price: "25",
      multiplier: "1.35",
      description: "Enterprise security features",
    },
    {
      category: "features",
      parameter_name: "Analytics Dashboard",
      base_price: "15",
      multiplier: "1.2",
      description: "Real-time analytics",
    },
    {
      category: "features",
      parameter_name: "White-labeling",
      base_price: "50",
      multiplier: "1.4",
      description: "Full white-label solution",
    },
  ],
  user_volume: [
    {
      category: "user_volume",
      parameter_name: "Low (< 100 users)",
      base_price: "0",
      multiplier: "0.8",
      description: "Small user base",
    },
    {
      category: "user_volume",
      parameter_name: "Medium (100-1000)",
      base_price: "0",
      multiplier: "1.0",
      description: "Medium user base",
    },
    {
      category: "user_volume",
      parameter_name: "High (1000-10000)",
      base_price: "0",
      multiplier: "1.5",
      description: "Large user base",
    },
    {
      category: "user_volume",
      parameter_name: "Very High (10000+)",
      base_price: "0",
      multiplier: "2.2",
      description: "Enterprise scale",
    },
  ],
  market_segment: [
    {
      category: "market_segment",
      parameter_name: "SMB (Small-Medium)",
      base_price: "0",
      multiplier: "0.9",
      description: "Small to medium businesses",
    },
    {
      category: "market_segment",
      parameter_name: "Mid-Market",
      base_price: "0",
      multiplier: "1.2",
      description: "Medium to large enterprises",
    },
    {
      category: "market_segment",
      parameter_name: "Enterprise",
      base_price: "0",
      multiplier: "1.8",
      description: "Large enterprises",
    },
  ],
  support: [
    {
      category: "support",
      parameter_name: "Email Support",
      base_price: "0",
      multiplier: "1.0",
      description: "Standard support",
    },
    {
      category: "support",
      parameter_name: "Priority Support",
      base_price: "10",
      multiplier: "1.1",
      description: "Priority response times",
    },
    {
      category: "support",
      parameter_name: "24/7 Support",
      base_price: "50",
      multiplier: "1.3",
      description: "Round-the-clock support",
    },
    {
      category: "support",
      parameter_name: "Dedicated Account Manager",
      base_price: "100",
      multiplier: "1.5",
      description: "Dedicated support team",
    },
  ],
  data_storage: [
    {
      category: "data_storage",
      parameter_name: "Limited (5GB)",
      base_price: "0",
      multiplier: "0.9",
      description: "Up to 5GB storage",
    },
    {
      category: "data_storage",
      parameter_name: "Standard (100GB)",
      base_price: "10",
      multiplier: "1.0",
      description: "Up to 100GB storage",
    },
    {
      category: "data_storage",
      parameter_name: "Premium (1TB)",
      base_price: "30",
      multiplier: "1.2",
      description: "Up to 1TB storage",
    },
    {
      category: "data_storage",
      parameter_name: "Unlimited",
      base_price: "50",
      multiplier: "1.4",
      description: "Unlimited storage",
    },
  ],
  integration: [
    {
      category: "integration",
      parameter_name: "Basic Integrations",
      base_price: "0",
      multiplier: "1.0",
      description: "5-10 integrations",
    },
    {
      category: "integration",
      parameter_name: "Extended Integrations",
      base_price: "15",
      multiplier: "1.15",
      description: "20+ integrations",
    },
    {
      category: "integration",
      parameter_name: "Custom Integration",
      base_price: "100",
      multiplier: "1.3",
      description: "Full custom API",
    },
  ],
  competitive_factor: [
    {
      category: "competitive_factor",
      parameter_name: "Low Competition",
      base_price: "0",
      multiplier: "1.3",
      description: "Niche market",
    },
    {
      category: "competitive_factor",
      parameter_name: "Medium Competition",
      base_price: "0",
      multiplier: "1.0",
      description: "Moderate market competition",
    },
    {
      category: "competitive_factor",
      parameter_name: "High Competition",
      base_price: "0",
      multiplier: "0.7",
      description: "Highly competitive market",
    },
  ],
};

export const saasPricingModelCalculater = (formData) => {
  let basePrice = 0;
  let multiplier = 1;
  const newBreakdown = {};

  // 🔹 Pricing Model
  const modelParam = saasPricingModelCostParameters.model_type.find(
    (p) => p.parameter_name === formData.modelType
  );
  if (modelParam) {
    basePrice += Number(modelParam.base_price);
    multiplier *= Number(modelParam.multiplier);
    newBreakdown["Pricing Model"] = modelParam.parameter_name;
  }

  // 🔹 User Tier
  const tierParam = saasPricingModelCostParameters.user_tier.find(
    (p) => p.parameter_name === formData.userTier
  );
  if (tierParam) {
    const tierCost =
      Number(tierParam.base_price) * Number(tierParam.multiplier);
    basePrice += tierCost;
    newBreakdown["User Tier"] = tierCost;
  }

  // 🔹 User Volume
  let volumeMultiplier = 1;
  const volumeParam = saasPricingModelCostParameters.user_volume.find(
    (p) => p.parameter_name === formData.userVolume
  );
  if (volumeParam) {
    volumeMultiplier = Number(volumeParam.multiplier);
    newBreakdown["User Volume"] = volumeParam.parameter_name;
  }

  // 🔹 Market Segment
  const segmentParam = saasPricingModelCostParameters.market_segment.find(
    (p) => p.parameter_name === formData.marketSegment
  );
  if (segmentParam) {
    multiplier *= Number(segmentParam.multiplier);
  }

  // 🔹 Features
  let featureCost = 0;
  formData.features.forEach((feature) => {
    const featureParam = saasPricingModelCostParameters.features.find(
      (p) => p.parameter_name === feature
    );
    if (featureParam) {
      featureCost +=
        Number(featureParam.base_price) * Number(featureParam.multiplier);
    }
  });
  newBreakdown["Features"] = featureCost;

  // 🔹 Support
  const supportParam = saasPricingModelCostParameters.support.find(
    (p) => p.parameter_name === formData.support
  );
  if (supportParam) {
    basePrice += Number(supportParam.base_price);
    newBreakdown["Support"] = supportParam.parameter_name;
  }

  // 🔹 Data Storage
  const storageParam = saasPricingModelCostParameters.data_storage.find(
    (p) => p.parameter_name === formData.dataStorage
  );
  if (storageParam) {
    basePrice += Number(storageParam.base_price);
    newBreakdown["Storage"] = storageParam.parameter_name;
  }

  // 🔹 Integration
  const integrationParam = saasPricingModelCostParameters.integration.find(
    (p) => p.parameter_name === formData.integration
  );
  if (integrationParam) {
    basePrice += Number(integrationParam.base_price);
    newBreakdown["Integration"] = integrationParam.parameter_name;
  }

  // 🔹 Competitive Factor
  let competitiveMultiplier = 1;
  const competitiveParam =
    saasPricingModelCostParameters.competitive_factor.find(
      (p) => p.parameter_name === formData.competitiveFactor
    );
  if (competitiveParam) {
    competitiveMultiplier = Number(competitiveParam.multiplier);
  }

  // 🔹 Final Price
  let finalPrice =
    basePrice * multiplier * volumeMultiplier * competitiveMultiplier +
    featureCost;

  // 🔹 Keyword Adjustments
  const keywordBoosts = {
    marketplace: 1.15,
    b2b: 1.1,
    community: 0.9,
    niche: 1.2,
    platform: 1.25,
  };

  const keywords = formData.description.toLowerCase();
  Object.entries(keywordBoosts).forEach(([key, boost]) => {
    if (keywords.includes(key)) {
      finalPrice *= boost;
    }
  });

  // 🔹 Estimated Users
  const estimatedUsers =
    formData.userVolume === "Low (< 100 users)"
      ? 50
      : formData.userVolume === "Medium (100-1000)"
        ? 500
        : formData.userVolume === "High (1000-10000)"
          ? 5000
          : 50000;

  const revenue = Math.max(Math.round(finalPrice * (estimatedUsers / 10)), 100);

  // 🔹 Recommendations
  let recomm = "Recommended Strategy: ";
  if (revenue < 5000) {
    recomm += "Start with freemium to acquire users.";
  } else if (revenue < 20000) {
    recomm += "Use tiered pricing with clear upgrades.";
  } else if (revenue < 100000) {
    recomm += "Adopt hybrid pricing for enterprise clients.";
  } else {
    recomm += "Enterprise pricing with white-label and dedicated support.";
  }

  return {
    monthlyRevenue: revenue,
    breakdown: newBreakdown,
    recommendations: recomm,
  };
};

// 36. Build Vs Buy Software Calculator

const complexityMultipliers = {
  simple: 1,
  moderate: 1.5,
  complex: 2.5,
  enterprise: 4,
};

const keywordMultipliers = {
  urgent: 1.5,
  complex: 2,
  custom: 1.8,
  enterprise: 2.5,
  secure: 1.4,
  integration: 1.3,
  api: 1.2,
  migration: 1.6,
  realtime: 1.5,
  ai: 2.2,
  ml: 2.2,
  blockchain: 2.8,
  iot: 1.8,
  mobile: 1.4,
  desktop: 1.3,
  web: 1,
  cloud: 1.2,
  hybrid: 1.7,
  advanced: 1.5,
  simple: 0.8,
  startup: 1.1,
  scaling: 1.6,
};

export function calculateBuildVsBuy(input) {
  const teamCostPerMonth = 8000;

  const baseComplexityMultiplier =
    complexityMultipliers[input.complexity] || 1.5;

  const keywords = extractKeywords(input.description);
  let keywordMultiplier = 1;
  keywords.forEach((keyword) => {
    keywordMultiplier *= keywordMultipliers[keyword] || 1;
  });

  const developmentCost =
    teamCostPerMonth *
    input.developmentMonths *
    input.teamSize *
    baseComplexityMultiplier *
    keywordMultiplier;
  const infrastructureCost = input.estimatedUsers * 12 + developmentCost * 0.15;
  const maintenanceCostPerYear = developmentCost * 0.2;

  const buildCosts = {
    development: Math.round(developmentCost),
    infrastructure: Math.round(infrastructureCost),
    maintenance: Math.round(maintenanceCostPerYear),
    total: 0,
  };
  buildCosts.total =
    buildCosts.development + buildCosts.infrastructure + buildCosts.maintenance;

  const averageAnnualLicense = 5000;
  const implementationCost = developmentCost * 0.3;
  const trainingCost = input.teamSize * 1000 + developmentCost * 0.05;
  const annualSupport = input.teamSize * 500 + developmentCost * 0.1;

  const buyCosts = {
    licensingPerYear: averageAnnualLicense,
    implementation: Math.round(implementationCost),
    training: Math.round(trainingCost),
    supportPerYear: Math.round(annualSupport),
    total5Year: 0,
  };

  buyCosts.total5Year = Math.round(
    (buyCosts.licensingPerYear + buyCosts.supportPerYear) * 5 +
      buyCosts.implementation +
      buyCosts.training
  );

  const savings = buildCosts.total - buyCosts.total5Year;
  let recommendation = "Neutral";

  if (savings > buildCosts.total * 0.2) {
    recommendation = "Build";
  } else if (savings < -buildCosts.total * 0.2) {
    recommendation = "Buy";
  }

  const breakdown = [
    {
      category: "Initial Setup",
      buildCost: buildCosts.development,
      buyCost: buyCosts.implementation,
      savings: buildCosts.development - buyCosts.implementation,
    },
    {
      category: "Year 1 Operations",
      buildCost: buildCosts.infrastructure + buildCosts.maintenance,
      buyCost:
        buyCosts.licensingPerYear + buyCosts.supportPerYear + buyCosts.training,
      savings: 0,
    },
    {
      category: "Year 2-5 (Annual)",
      buildCost: buildCosts.infrastructure + buildCosts.maintenance,
      buyCost: buyCosts.licensingPerYear + buyCosts.supportPerYear,
      savings: 0,
    },
  ];

  return {
    buildCosts,
    buyCosts,
    recommendation,
    keywords,
    breakdown,
  };
}

function extractKeywords(description) {
  const lowerDesc = description.toLowerCase();
  const foundKeywords = [];

  Object.keys(keywordMultipliers).forEach((keyword) => {
    if (lowerDesc.includes(keyword)) {
      foundKeywords.push(keyword);
    }
  });

  return foundKeywords;
}

// 37. SaaS Metrics Calculator

function generateInsights(metrics) {
  const insights = [];

  if (metrics.ltcRatio >= 3) {
    insights.push({
      title: "Excellent LTV:CAC Ratio",
      status: "good",
      message: `Your LTV:CAC ratio of ${metrics.ltcRatio}x exceeds the healthy benchmark of 3x. Strong unit economics!`,
    });
  } else if (metrics.ltcRatio >= 1.5) {
    insights.push({
      title: "Acceptable Unit Economics",
      status: "warning",
      message: `Your LTV:CAC ratio is ${metrics.ltcRatio}x. Aim for 3x+ for sustainable growth.`,
    });
  } else {
    insights.push({
      title: "Unhealthy Unit Economics",
      status: "critical",
      message: `Your LTV:CAC ratio of ${metrics.ltcRatio}x is below 1.5x. Review your CAC or improve retention.`,
    });
  }

  if (metrics.cacPaybackPeriod <= 12) {
    insights.push({
      title: "Good CAC Payback Period",
      status: "good",
      message: `Your CAC payback period is ${metrics.cacPaybackPeriod.toFixed(2)} months. Industry average is 12-18 months.`,
    });
  } else if (metrics.cacPaybackPeriod <= 24) {
    insights.push({
      title: "Acceptable CAC Payback",
      status: "warning",
      message: `Your CAC payback period is ${metrics.cacPaybackPeriod.toFixed(2)} months. Consider optimizing acquisition.`,
    });
  } else {
    insights.push({
      title: "Slow CAC Payback",
      status: "critical",
      message: `Your CAC payback period exceeds 24 months. This impacts cash flow significantly.`,
    });
  }

  if (metrics.customerRetentionRate >= 95) {
    insights.push({
      title: "Excellent Retention",
      status: "good",
      message: `Your monthly retention rate of ${metrics.customerRetentionRate}% is excellent for a SaaS business.`,
    });
  } else if (metrics.customerRetentionRate >= 90) {
    insights.push({
      title: "Good Retention Rate",
      status: "warning",
      message: `Your monthly retention is ${metrics.customerRetentionRate}%. Strive for 95%+ for sustainable growth.`,
    });
  } else {
    insights.push({
      title: "High Churn Risk",
      status: "critical",
      message: `Your monthly retention of ${metrics.customerRetentionRate}% indicates high churn. Focus on customer success.`,
    });
  }

  return insights;
}

function generateRecommendations(metrics) {
  const recommendations = [];

  if (metrics.ltcRatio < 3) {
    recommendations.push(
      "Increase customer lifetime value by improving retention and expansion revenue"
    );
  }

  if (metrics.cacPaybackPeriod > 12) {
    recommendations.push(
      "Optimize customer acquisition channels for faster payback"
    );
  }

  if (metrics.customerRetentionRate < 95) {
    recommendations.push(
      "Implement customer success initiatives to reduce churn"
    );
  }

  if (metrics.monthlyGrowthRate < 5) {
    recommendations.push(
      "Accelerate growth with improved marketing and sales efficiency"
    );
  }

  recommendations.push(
    "Regularly monitor cohort retention to identify early churn signals"
  );
  recommendations.push(
    "Implement expansion revenue strategies to increase customer lifetime value"
  );

  return recommendations.slice(0, 4);
}

export function calculateSaaSMetrics(input) {
  const keywords = extractKeywords(input.description);
  let keywordMultiplier = 1;
  keywords.forEach((keyword) => {
    keywordMultiplier *= keywordMultipliers[keyword] || 1;
  });

  const mrr = input.monthlyRevenue;
  const arr = mrr * 12;

  const customersChurnedMonthly = input.totalCustomers * input.monthlyChurnRate;
  const revenueChurnRate =
    (customersChurnedMonthly * input.averageContractValue) / mrr;

  const cac = input.monthlyAcquisitionCost * keywordMultiplier;

  const monthlyRetention = 1 - input.monthlyChurnRate;
  const grossMarginAssumption = 0.75;

  const ltv =
    (input.averageContractValue * grossMarginAssumption) /
    (input.monthlyChurnRate || 0.05);

  const cacPaybackPeriods =
    cac > 0 ? cac / (input.averageContractValue * grossMarginAssumption) : 0;
  const cacPaybackPeriod = Math.max(0, Math.min(cacPaybackPeriods, 100));

  const ltcRatio = cac > 0 ? ltv / cac : 0;

  const newMRRFromAcquisition =
    (input.monthlyAcquisitionCost / cac) * input.averageContractValue;
  const monthlyGrowthRate =
    mrr > 0
      ? ((newMRRFromAcquisition -
          input.totalCustomers *
            input.monthlyChurnRate *
            input.averageContractValue) /
          mrr) *
        100
      : 0;

  const burnRateAssumption = mrr * 0.3;
  const annualRunway =
    burnRateAssumption > 0 ? (arr * 0.4) / burnRateAssumption : 999;

  const customerRetentionRate = (1 - input.monthlyChurnRate) * 100;

  const insights = generateInsights({
    ltcRatio,
    cacPaybackPeriod,
    customerRetentionRate,
    monthlyGrowthRate,
    monthlyChurnRate: input.monthlyChurnRate,
  });

  const recommendations = generateRecommendations({
    ltcRatio,
    cacPaybackPeriod,
    customerRetentionRate,
    monthlyGrowthRate,
  });

  return {
    mrr: Math.round(mrr),
    arr: Math.round(arr),
    cac: Math.round(cac),
    ltv: Math.round(ltv),
    cacPaybackPeriod: Math.round(cacPaybackPeriod * 10) / 10,
    ltcRatio: Math.round(ltcRatio * 100) / 100,
    monthlyGrowthRate: Math.round(monthlyGrowthRate * 100) / 100,
    annualRunway: Math.round(annualRunway),
    revenueChurnRate: Math.round(revenueChurnRate * 1000) / 10,
    customerRetentionRate: Math.round(customerRetentionRate * 100) / 100,
    keywords,
    insights,
    recommendations,
  };
}

// 38. App Rebuild Vs Refactor Calculator
export const appRebuildRefactorCalculateCosts = (formData) => {
  const { appSize, techStack, complexity, teamSize, description } = formData;

  let baseCost = 50000;
  let baseTime = 3;

  if (appSize === "small") {
    baseCost = 30000;
    baseTime = 2;
  } else if (appSize === "large") {
    baseCost = 100000;
    baseTime = 6;
  } else if (appSize === "enterprise") {
    baseCost = 200000;
    baseTime = 12;
  }

  const complexityMultipliers = {
    low: 0.8,
    medium: 1.0,
    high: 1.3,
    very_high: 1.6,
  };

  const techStackMultipliers = {
    modern: 0.9,
    mixed: 1.0,
    legacy: 1.3,
  };

  let complexityScore = 50;
  const keywords = {
    microservices: { cost: 15000, time: 1, score: 15 },
    database: { cost: 10000, time: 0.5, score: 10 },
    migration: { cost: 12000, time: 1, score: 12 },
    api: { cost: 8000, time: 0.5, score: 8 },
    authentication: { cost: 7000, time: 0.5, score: 7 },
    integration: { cost: 10000, time: 1, score: 10 },
    security: { cost: 9000, time: 0.75, score: 9 },
    performance: { cost: 8000, time: 0.75, score: 8 },
    legacy: { cost: 15000, time: 1.5, score: 15 },
    "technical debt": { cost: 12000, time: 1, score: 12 },
    scalability: { cost: 11000, time: 1, score: 11 },
    cloud: { cost: 10000, time: 0.75, score: 10 },
    testing: { cost: 6000, time: 0.5, score: 6 },
    deployment: { cost: 7000, time: 0.5, score: 7 },
    monitoring: { cost: 5000, time: 0.25, score: 5 },
  };

  let additionalCost = 0;
  let additionalTime = 0;

  const descLower = description.toLowerCase();
  Object.entries(keywords).forEach(([keyword, values]) => {
    if (descLower.includes(keyword)) {
      additionalCost += values.cost;
      additionalTime += values.time;
      complexityScore += values.score;
    }
  });

  complexityScore = Math.min(complexityScore, 100);

  const teamMultiplier = Math.max(0.7, 1 - (parseInt(teamSize) - 3) * 0.05);

  const rebuildCost = Math.round(
    (baseCost + additionalCost) *
      complexityMultipliers[complexity] *
      techStackMultipliers[techStack] *
      1.2 *
      teamMultiplier
  );

  const refactorCost = Math.round(
    (baseCost + additionalCost) *
      complexityMultipliers[complexity] *
      techStackMultipliers[techStack] *
      0.7 *
      teamMultiplier
  );

  const rebuildTime =
    (baseTime + additionalTime) *
    complexityMultipliers[complexity] *
    teamMultiplier;

  const refactorTime = rebuildTime * 0.6;

  const recommendation =
    complexityScore > 70 || techStack === "legacy" ? "rebuild" : "refactor";

  const savings = Math.abs(rebuildCost - refactorCost);

  return {
    rebuildCost,
    refactorCost,
    rebuildTime: Math.round(rebuildTime * 10) / 10,
    refactorTime: Math.round(refactorTime * 10) / 10,
    recommendation,
    savings,
    complexityScore: Math.round(complexityScore),
  };
};

// 39. Mobile App Monetization Strategy Calculator
export const mobileAppMonetizationStrategyCalculate = (formData) => {
  const strategies = {
    freemium: { score: 0, reasons: [], impl: [] },
    subscription: { score: 0, reasons: [], impl: [] },
    advertising: { score: 0, reasons: [], impl: [] },
    "in-app-purchase": { score: 0, reasons: [], impl: [] },
    paid: { score: 0, reasons: [], impl: [] },
  };

  if (formData.appCategory === "gaming") {
    strategies["in-app-purchase"].score += 30;
    strategies["in-app-purchase"].reasons.push(
      "Gaming apps perform exceptionally well with in-app purchases"
    );
    strategies.advertising.score += 20;
  } else if (formData.appCategory === "productivity") {
    strategies.subscription.score += 30;
    strategies.subscription.reasons.push(
      "Productivity apps benefit from recurring subscription models"
    );
    strategies.freemium.score += 25;
  } else if (formData.appCategory === "entertainment") {
    strategies.advertising.score += 25;
    strategies.advertising.reasons.push(
      "Entertainment apps have high engagement suitable for ads"
    );
    strategies.subscription.score += 20;
  } else if (formData.appCategory === "education") {
    strategies.subscription.score += 25;
    strategies.freemium.score += 25;
    strategies.freemium.reasons.push(
      "Education apps benefit from free trial then premium content"
    );
  }

  if (formData.targetAudience === "consumer") {
    strategies.advertising.score += 15;
    strategies.freemium.score += 15;
  } else if (formData.targetAudience === "business") {
    strategies.subscription.score += 30;
    strategies.subscription.reasons.push(
      "Business users prefer predictable subscription costs"
    );
    strategies.paid.score += 15;
  } else if (formData.targetAudience === "students") {
    strategies.freemium.score += 20;
    strategies.advertising.score += 15;
  }

  if (formData.userBase === "large") {
    strategies.advertising.score += 25;
    strategies.advertising.reasons.push(
      "Large user base maximizes ad revenue potential"
    );
    strategies.freemium.score += 20;
  } else if (formData.userBase === "medium") {
    strategies.subscription.score += 20;
    strategies.freemium.score += 20;
  } else if (formData.userBase === "small") {
    strategies.paid.score += 20;
    strategies.subscription.score += 15;
  }

  if (formData.engagementLevel === "high") {
    strategies["in-app-purchase"].score += 25;
    strategies["in-app-purchase"].reasons.push(
      "High engagement increases in-app purchase conversion"
    );
    strategies.advertising.score += 20;
  } else if (formData.engagementLevel === "medium") {
    strategies.subscription.score += 15;
    strategies.freemium.score += 15;
  } else if (formData.engagementLevel === "low") {
    strategies.paid.score += 15;
    strategies.advertising.score += 10;
  }

  if (formData.appType === "utility") {
    strategies.subscription.score += 20;
    strategies.paid.score += 15;
  } else if (formData.appType === "social") {
    strategies.advertising.score += 30;
    strategies.advertising.reasons.push(
      "Social apps generate high ad impressions"
    );
    strategies.freemium.score += 20;
  } else if (formData.appType === "content") {
    strategies.subscription.score += 25;
    strategies.subscription.reasons.push(
      "Content apps work well with subscription paywalls"
    );
    strategies.freemium.score += 20;
  }

  const descLower = formData.description.toLowerCase();
  if (descLower.includes("premium") || descLower.includes("exclusive")) {
    strategies.subscription.score += 15;
    strategies.paid.score += 10;
  }
  if (descLower.includes("free") || descLower.includes("accessible")) {
    strategies.advertising.score += 15;
    strategies.freemium.score += 15;
  }
  if (descLower.includes("game") || descLower.includes("virtual goods")) {
    strategies["in-app-purchase"].score += 20;
  }

  const implementations = {
    freemium: [
      "Offer core features for free with premium upgrades",
      "Create clear value proposition for paid tier",
      "Implement trial periods for premium features",
      "Use in-app messaging to promote upgrades",
    ],
    subscription: [
      "Offer monthly and annual billing options",
      "Provide free trial period (7-30 days)",
      "Implement tiered pricing for different user segments",
      "Focus on retention and reducing churn",
    ],
    advertising: [
      "Integrate with ad networks (AdMob, Facebook Audience Network)",
      "Use rewarded video ads for better user experience",
      "Implement frequency capping to avoid ad fatigue",
      "Consider offering ad-free premium option",
    ],
    "in-app-purchase": [
      "Design virtual goods or consumables that add value",
      "Create limited-time offers and bundles",
      "Implement multiple price points ($0.99 - $99.99)",
      "Use analytics to optimize pricing and placement",
    ],
    paid: [
      "Price competitively based on market research",
      "Offer money-back guarantee period",
      "Create compelling app store listing with screenshots",
      "Focus on quality to justify upfront cost",
    ],
  };

  const maxScore = Math.max(...Object.values(strategies).map((s) => s.score));
  const topStrategy = Object.entries(strategies).find(
    ([, s]) => s.score === maxScore
  );

  if (topStrategy) {
    const [name, data] = topStrategy;
    const strategyNames = {
      freemium: "Freemium Model",
      subscription: "Subscription Model",
      advertising: "Advertising Model",
      "in-app-purchase": "In-App Purchases",
      paid: "Paid App Model",
    };

    return {
      name: strategyNames[name],
      confidence: Math.min(Math.round((maxScore / 150) * 100), 98),
      reasons:
        data.reasons.length > 0
          ? data.reasons
          : ["Best fit based on your app characteristics"],
      implementation: implementations[name],
    };
  }
};
