const complexityKeywords = {
  simple: 1,
  basic: 1,
  easy: 1,
  standard: 2,
  moderate: 2,
  advanced: 3,
  complex: 3,
  sophisticated: 4,
  enterprise: 4,
  integration: 3,
  api: 2,
  database: 2,
  authentication: 2,
  "real-time": 3,
  "machine learning": 4,
  ai: 4,
  mobile: 2,
  responsive: 2,
  dashboard: 3,
  analytics: 3,
  reporting: 3,
  admin: 2,
  "user management": 2,
  payment: 3,
  ecommerce: 3,
  social: 2,
  chat: 3,
  video: 4,
  streaming: 4,
};

const analyzeDescription = (text) => {
  const words = text.toLowerCase().split(/\s+/);
  let totalScore = 0;
  let matches = 0;

  words.forEach((word) => {
    if (complexityKeywords[word]) {
      totalScore += complexityKeywords[word];
      matches++;
    }
  });

  return matches > 0 ? Math.round(totalScore / matches) : 1;
};

export const featureComplexityTimelineEstimator = (description, factors) => {
  const descriptionBonus = analyzeDescription(description);
  const baseScore =
    Object.values(factors).reduce((sum, val) => sum + val, 0) / 6;
  const complexityScore =
    Math.round(((baseScore + descriptionBonus) / 2) * 10) / 10;

  const estimatedHours = Math.round(complexityScore * 40 + Math.random() * 20);

  let difficultyLevel = "Simple";
  let recommendations = [];

  if (complexityScore >= 3.5) {
    difficultyLevel = "Very Complex";
    recommendations = [
      "Consider breaking into smaller phases",
      "Require senior development team",
      "Plan for extensive testing",
      "Allow extra buffer time",
    ];
  } else if (complexityScore >= 2.5) {
    difficultyLevel = "Complex";
    recommendations = [
      "Detailed technical planning required",
      "Mid to senior level developers needed",
      "Include code review processes",
      "Plan for integration testing",
    ];
  } else if (complexityScore >= 1.5) {
    difficultyLevel = "Moderate";
    recommendations = [
      "Standard development practices",
      "Junior to mid-level developers suitable",
      "Regular milestone reviews",
      "Basic testing coverage",
    ];
  } else {
    difficultyLevel = "Simple";
    recommendations = [
      "Straightforward implementation",
      "Junior developers can handle",
      "Quick development cycle",
      "Minimal complexity",
    ];
  }

  return {
    complexity_score: complexityScore,
    estimated_hours: estimatedHours,
    difficulty_level: difficultyLevel,
    recommendations,
  };
};

export const calculateTestingTimelineEstimate = (formData) => {
  // Base timeline calculation with keyword analysis
  let baseHours = 0;
  const keywords = formData.description.toLowerCase();

  // Project size multiplier
  const sizeMultipliers = {
    small: 40,
    medium: 120,
    large: 300,
    enterprise: 600,
  };

  // Complexity multiplier
  const complexityMultipliers = {
    low: 1.0,
    medium: 1.5,
    high: 2.0,
    critical: 2.5,
  };

  // Calculate base hours
  baseHours = sizeMultipliers[formData.projectSize] || 120;
  baseHours *= complexityMultipliers[formData.complexity] || 1.5;

  // Adjust for testing types
  const testingMultiplier = 1 + formData.testingTypes.length * 0.2;
  baseHours *= testingMultiplier;

  // Team size adjustment
  const teamSizeNum = parseInt(formData.teamSize);
  if (teamSizeNum > 1) {
    baseHours = baseHours / Math.sqrt(teamSizeNum);
  }

  // Experience adjustment
  const experienceMultipliers = {
    junior: 1.3,
    mid: 1.0,
    senior: 0.8,
    expert: 0.6,
  };
  baseHours *= experienceMultipliers[formData.experience] || 1.0;

  // Keyword analysis adjustments
  if (keywords.includes("automated") || keywords.includes("automation"))
    baseHours *= 0.7;
  if (keywords.includes("manual") || keywords.includes("exploratory"))
    baseHours *= 1.2;
  if (keywords.includes("regression")) baseHours *= 1.3;
  if (keywords.includes("performance")) baseHours *= 1.4;
  if (keywords.includes("security")) baseHours *= 1.5;
  if (keywords.includes("mobile")) baseHours *= 1.3;
  if (keywords.includes("api") || keywords.includes("backend"))
    baseHours *= 1.1;
  if (keywords.includes("ui") || keywords.includes("frontend"))
    baseHours *= 1.2;

  // Calculate phases
  const phases = {
    planning: Math.ceil(baseHours * 0.15),
    testDesign: Math.ceil(baseHours * 0.25),
    execution: Math.ceil(baseHours * 0.45),
    reporting: Math.ceil(baseHours * 0.15),
  };

  const totalHours = Object.values(phases).reduce(
    (sum, hours) => sum + hours,
    0
  );
  const totalDays = Math.ceil(totalHours / 8);
  const totalWeeks = Math.ceil(totalDays / 5);

  return {
    totalHours,
    totalDays,
    totalWeeks,
    phases,
    recommendations: generateTestingTimelineRecommendations(formData, keywords),
  };
};

const generateTestingTimelineRecommendations = (data, keywords) => {
  const recommendations = [];

  if (keywords.includes("automated")) {
    recommendations.push(
      "Consider investing more time in test automation setup for long-term efficiency"
    );
  }
  if (data.complexity === "high" || data.complexity === "critical") {
    recommendations.push(
      "Add 20% buffer time for unexpected complexity issues"
    );
  }
  if (data.testingTypes.includes("performance")) {
    recommendations.push(
      "Ensure performance testing environment is ready early"
    );
  }
  if (parseInt(data.teamSize) === 1) {
    recommendations.push(
      "Consider adding team members to reduce timeline and share knowledge"
    );
  }
  if (keywords.includes("security")) {
    recommendations.push(
      "Schedule security testing early to allow time for fixes"
    );
  }

  return recommendations;
};
