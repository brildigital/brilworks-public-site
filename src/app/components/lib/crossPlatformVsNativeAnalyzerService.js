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
