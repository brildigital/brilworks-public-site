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

export const calculateGoToMarketTimeline = (formData) => {
  let baseWeeks = 16;
  let riskLevel = "Medium";
  let successProbability = 75;

  // Adjust based on form inputs
  if (formData.teamSize === "small") baseWeeks += 4;
  if (formData.teamSize === "large") baseWeeks -= 2;

  if (formData.budget === "high") {
    baseWeeks -= 3;
    successProbability += 10;
  }

  if (formData.budget === "low") {
    baseWeeks += 3;
    riskLevel = "High";
    successProbability -= 15;
  }

  // Keyword analysis from description
  const description = formData.description.toLowerCase();
  const complexityKeywords = [
    "complex",
    "enterprise",
    "integration",
    "compliance",
    "regulation",
  ];
  const urgentKeywords = ["urgent", "asap", "quick", "fast", "rush"];
  const innovativeKeywords = [
    "new",
    "innovative",
    "first",
    "revolutionary",
    "breakthrough",
  ];

  if (complexityKeywords.some((keyword) => description.includes(keyword))) {
    baseWeeks += 6;
    riskLevel = "High";
  }

  if (urgentKeywords.some((keyword) => description.includes(keyword))) {
    baseWeeks -= 4;
    riskLevel = riskLevel === "Low" ? "Medium" : "High";
    successProbability -= 10;
  }

  if (innovativeKeywords.some((keyword) => description.includes(keyword))) {
    baseWeeks += 3;
    successProbability += 5;
  }

  // Ensure minimum values
  baseWeeks = Math.max(8, baseWeeks);
  successProbability = Math.max(30, Math.min(95, successProbability));

  const phases = [
    {
      name: "Planning & Research",
      duration: Math.ceil(baseWeeks * 0.25),
      description: "Market analysis, competitor research, strategy development",
      color: "bg-blue-500",
    },
    {
      name: "Product Development",
      duration: Math.ceil(baseWeeks * 0.35),
      description: "Feature development, testing, quality assurance",
      color: "bg-teal-500",
    },
    {
      name: "Marketing & Sales",
      duration: Math.ceil(baseWeeks * 0.25),
      description: "Marketing campaigns, sales enablement, channel setup",
      color: "bg-orange-500",
    },
    {
      name: "Launch & Scale",
      duration: Math.ceil(baseWeeks * 0.15),
      description: "Product launch, performance monitoring, optimization",
      color: "bg-green-500",
    },
  ];

  return {
    totalWeeks: baseWeeks,
    phases,
    riskLevel,
    successProbability,
  };
};

export const projectTypesForTechRecommendation = [
  { key: "web", label: "Web Application" },
  { key: "mobile", label: "Mobile App" },
  { key: "desktop", label: "Desktop Application" },
  { key: "api", label: "API / Backend Service" },
  { key: "ecommerce", label: "E-commerce Platform" },
  { key: "data", label: "Data Analytics Platform" },
  { key: "iot", label: "IoT Application" },
  { key: "game", label: "Game Development" },
];

export const projectStacks = {
  web: {
    name: "Next.js + Node.js + PostgreSQL",
    technologies: ["Next.js", "React", "Node.js", "Express", "PostgreSQL"],
    pros: [
      "Great SEO with server-side rendering",
      "Large ecosystem and community",
      "Good balance of speed and scalability",
    ],
    cons: ["Initial setup can be complex for beginners"],
    alternatives: [
      {
        name: "Vue.js + Python + MongoDB",
        technologies: ["Vue.js", "Python", "FastAPI", "MongoDB"],
      },
      {
        name: "Angular + Java + MySQL",
        technologies: ["Angular", "Java", "Spring Boot", "MySQL"],
      },
    ],
  },

  mobile: {
    name: "React Native + Node.js + MongoDB",
    technologies: ["React Native", "Node.js", "Express", "MongoDB"],
    pros: ["Single codebase for iOS & Android", "Fast prototyping and updates"],
    cons: ["Performance slightly behind pure native apps"],
    alternatives: [
      {
        name: "Flutter + Firebase",
        technologies: ["Flutter", "Dart", "Firebase"],
      },
      {
        name: "Swift + Kotlin + GraphQL",
        technologies: ["Swift (iOS)", "Kotlin (Android)", "GraphQL"],
      },
    ],
  },

  desktop: {
    name: "Electron + Node.js + SQLite",
    technologies: ["Electron", "Node.js", "SQLite"],
    pros: [
      "Cross-platform desktop apps from one codebase",
      "Access to web technologies (HTML/CSS/JS)",
    ],
    cons: ["Larger app size compared to native builds"],
    alternatives: [
      {
        name: "Tauri + Rust + SQLite",
        technologies: ["Tauri", "Rust", "SQLite"],
      },
      {
        name: "Qt + C++ + PostgreSQL",
        technologies: ["Qt", "C++", "PostgreSQL"],
      },
    ],
  },

  api: {
    name: "Node.js + Express + PostgreSQL",
    technologies: ["Node.js", "Express", "PostgreSQL", "TypeScript"],
    pros: [
      "Lightweight and performant REST/GraphQL APIs",
      "Massive NPM ecosystem",
    ],
    cons: ["Requires careful scaling for very large workloads"],
    alternatives: [
      {
        name: "Go + Gin + PostgreSQL",
        technologies: ["Go", "Gin", "PostgreSQL"],
      },
      {
        name: "Python + FastAPI + MongoDB",
        technologies: ["Python", "FastAPI", "MongoDB"],
      },
    ],
  },

  ecommerce: {
    name: "Next.js + Node.js + MongoDB + Stripe",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
    pros: [
      "SEO-friendly storefront",
      "Quick integration with payment providers",
    ],
    cons: ["Complex inventory & payment logic to manage at scale"],
    alternatives: [
      {
        name: "Shopify Hydrogen + GraphQL",
        technologies: ["Shopify Hydrogen", "GraphQL", "Shopify Storefront API"],
      },
      {
        name: "Magento + PHP + MySQL",
        technologies: ["Magento", "PHP", "MySQL"],
      },
    ],
  },

  data: {
    name: "Python + Django + PostgreSQL + Apache Spark",
    technologies: ["Python", "Django", "PostgreSQL", "Pandas", "Spark"],
    pros: [
      "Strong data-processing libraries",
      "Excellent analytics & machine learning ecosystem",
    ],
    cons: ["Not ideal for real-time, low-latency applications"],
    alternatives: [
      {
        name: "Scala + Apache Kafka + Cassandra",
        technologies: ["Scala", "Kafka", "Cassandra"],
      },
      {
        name: "R + Shiny + PostgreSQL",
        technologies: ["R", "Shiny", "PostgreSQL"],
      },
    ],
  },

  iot: {
    name: "Node.js + MQTT + AWS IoT Core",
    technologies: ["Node.js", "MQTT", "AWS IoT Core", "DynamoDB"],
    pros: [
      "Efficient real-time device communication",
      "Cloud services simplify scaling and management",
    ],
    cons: ["Requires strong security practices for connected devices"],
    alternatives: [
      {
        name: "Python + Flask + Google Cloud IoT",
        technologies: ["Python", "Flask", "Google Cloud IoT", "Bigtable"],
      },
      {
        name: "C++ + Azure IoT Hub",
        technologies: ["C++", "Azure IoT Hub", "Cosmos DB"],
      },
    ],
  },

  game: {
    name: "Unity + C# + Firebase",
    technologies: ["Unity", "C#", "Firebase", "Photon Realtime"],
    pros: [
      "Robust cross-platform engine",
      "Large asset store and developer community",
    ],
    cons: ["Steeper learning curve for 3D or complex multiplayer"],
    alternatives: [
      {
        name: "Unreal Engine + C++ + AWS GameLift",
        technologies: ["Unreal Engine", "C++", "AWS GameLift"],
      },
      {
        name: "Godot + GDScript + PostgreSQL",
        technologies: ["Godot", "GDScript", "PostgreSQL"],
      },
    ],
  },
};

export function generateTechStackRecommendation(formData) {
  const {
    projectType,
    projectScale,
    teamSize,
    timeline,
    budget,
    description = "",
  } = formData;

  const base = projectStacks[projectType] || projectStacks.web;
  // Make a shallow copy to avoid mutating the original
  const primary = { ...base, technologies: [...base.technologies] };

  // --- Weighted scoring ---
  let match = 80; // start baseline

  // Scale impact
  if (projectScale === "large") match += 8;
  else if (projectScale === "medium") match += 4;

  // Team size impact
  if (teamSize === "small") match += 2;
  else if (teamSize === "large") match -= 2;

  // Timeline impact
  if (timeline === "short") match += 6;
  else if (timeline === "long") match += 2;

  // Budget impact
  if (budget === "low") match -= 5;
  else if (budget === "high") match += 5;

  // Keyword checks
  const desc = description.toLowerCase();
  if (desc.includes("ai") || desc.includes("ml")) {
    primary.technologies.push("Python", "TensorFlow");
    match += 4;
  }
  if (desc.includes("realtime") || desc.includes("real-time")) {
    primary.technologies.push("WebSockets / Socket.io");
    match += 3;
  }

  // Clamp final primary match
  match = Math.max(60, Math.min(99, match));

  // --- Add match to alternatives ---
  // First alternative is slightly weaker (-6), second weaker (-10)
  const alternatives = (base.alternatives || []).map((alt, idx) => ({
    ...alt,
    match:
      idx === 0
        ? Math.max(55, match - 6) // never drop below 55
        : Math.max(50, match - 10),
  }));

  return {
    primary: {
      ...primary,
      match,
    },
    alternatives,
  };
}

const databases = [
  {
    name: "PostgreSQL",
    type: "Relational",
    baseScore: 85,
    factors: {
      web: 10,
      mobile: 8,
      enterprise: 15,
      analytics: 12,
      small: 10,
      medium: 15,
      large: 12,
      enterprise_vol: 10,
      simple: 8,
      moderate: 15,
      complex: 18,
      low: 12,
      medium_scale: 15,
      high: 18,
      low_budget: 15,
      medium_budget: 12,
      high_budget: 10,
      junior: 8,
      mixed: 12,
      senior: 15,
    },
    pros: [
      "ACID compliance",
      "Advanced features",
      "Strong community",
      "JSON support",
    ],
    cons: ["Learning curve", "Resource intensive"],
    useCase: "Complex web applications, data warehousing, analytics",
    color: "bg-blue-500",
  },
  {
    name: "MySQL",
    type: "Relational",
    baseScore: 80,
    factors: {
      web: 15,
      mobile: 10,
      enterprise: 12,
      analytics: 8,
      small: 15,
      medium: 18,
      large: 12,
      enterprise_vol: 8,
      simple: 15,
      moderate: 12,
      complex: 8,
      low: 10,
      medium_scale: 15,
      high: 12,
      low_budget: 18,
      medium_budget: 15,
      high_budget: 10,
      junior: 15,
      mixed: 12,
      senior: 8,
    },
    pros: [
      "Easy to learn",
      "Wide adoption",
      "Good performance",
      "Excellent documentation",
    ],
    cons: ["Limited advanced features", "Licensing concerns"],
    useCase: "Web applications, content management, e-commerce",
    color: "bg-orange-500",
  },
  {
    name: "MongoDB",
    type: "NoSQL Document",
    baseScore: 78,
    factors: {
      web: 12,
      mobile: 18,
      enterprise: 10,
      analytics: 15,
      small: 12,
      medium: 15,
      large: 18,
      enterprise_vol: 15,
      simple: 18,
      moderate: 15,
      complex: 12,
      low: 8,
      medium_scale: 12,
      high: 18,
      low_budget: 8,
      medium_budget: 12,
      high_budget: 15,
      junior: 12,
      mixed: 15,
      senior: 12,
    },
    pros: [
      "Flexible schema",
      "Horizontal scaling",
      "JSON-like documents",
      "Rapid development",
    ],
    cons: [
      "Memory usage",
      "No ACID transactions",
      "Learning curve for SQL developers",
    ],
    useCase: "Content management, IoT, real-time analytics, mobile apps",
    color: "bg-green-500",
  },
  {
    name: "Redis",
    type: "In-Memory",
    baseScore: 75,
    factors: {
      web: 15,
      mobile: 12,
      enterprise: 8,
      analytics: 10,
      small: 8,
      medium: 12,
      large: 15,
      enterprise_vol: 18,
      simple: 12,
      moderate: 15,
      complex: 8,
      low: 5,
      medium_scale: 10,
      high: 20,
      low_budget: 5,
      medium_budget: 10,
      high_budget: 15,
      junior: 8,
      mixed: 12,
      senior: 15,
    },
    pros: [
      "Extremely fast",
      "Great for caching",
      "Pub/Sub messaging",
      "Data structures",
    ],
    cons: ["Memory limited", "Data persistence complexity", "Single-threaded"],
    useCase: "Caching, session storage, real-time applications, message queues",
    color: "bg-red-500",
  },
  {
    name: "SQLite",
    type: "Embedded",
    baseScore: 70,
    factors: {
      web: 8,
      mobile: 20,
      enterprise: 5,
      analytics: 8,
      small: 20,
      medium: 12,
      large: 5,
      enterprise_vol: 3,
      simple: 20,
      moderate: 12,
      complex: 5,
      low: 8,
      medium_scale: 5,
      high: 3,
      low_budget: 20,
      medium_budget: 15,
      high_budget: 8,
      junior: 18,
      mixed: 12,
      senior: 8,
    },
    pros: [
      "No setup required",
      "Lightweight",
      "ACID compliant",
      "Cross-platform",
    ],
    cons: ["Limited concurrency", "No network access", "Size limitations"],
    useCase: "Mobile apps, desktop applications, prototyping, embedded systems",
    color: "bg-gray-500",
  },
  {
    name: "Cassandra",
    type: "Wide Column",
    baseScore: 72,
    factors: {
      web: 8,
      mobile: 10,
      enterprise: 18,
      analytics: 15,
      small: 3,
      medium: 8,
      large: 18,
      enterprise_vol: 20,
      simple: 5,
      moderate: 8,
      complex: 15,
      low: 3,
      medium_scale: 8,
      high: 20,
      low_budget: 3,
      medium_budget: 8,
      high_budget: 18,
      junior: 3,
      mixed: 8,
      senior: 18,
    },
    pros: [
      "Massive scalability",
      "No single point of failure",
      "High performance writes",
    ],
    cons: [
      "Complex setup",
      "Eventual consistency",
      "Limited query flexibility",
    ],
    useCase: "Big data, IoT, time-series data, distributed systems",
    color: "bg-purple-500",
  },
];
export const databaseSelectorRecommendations = (formData) => {
  const scored = databases.map((db) => {
    let score = db.baseScore;

    // Reset score to start fresh calculation
    score = 0;

    // Project Type scoring (25% weight)
    const projectTypeScores = {
      web: {
        PostgreSQL: 22,
        MySQL: 25,
        MongoDB: 20,
        Redis: 18,
        SQLite: 15,
        Cassandra: 12,
      },
      mobile: {
        PostgreSQL: 18,
        MySQL: 16,
        MongoDB: 24,
        Redis: 15,
        SQLite: 25,
        Cassandra: 14,
      },
      enterprise: {
        PostgreSQL: 25,
        MySQL: 20,
        MongoDB: 18,
        Redis: 15,
        SQLite: 10,
        Cassandra: 25,
      },
      analytics: {
        PostgreSQL: 25,
        MySQL: 18,
        MongoDB: 22,
        Redis: 16,
        SQLite: 12,
        Cassandra: 24,
      },
    };

    // Data Volume scoring (20% weight)
    const dataVolumeScores = {
      small: {
        PostgreSQL: 18,
        MySQL: 20,
        MongoDB: 17,
        Redis: 15,
        SQLite: 25,
        Cassandra: 10,
      },
      medium: {
        PostgreSQL: 20,
        MySQL: 22,
        MongoDB: 20,
        Redis: 18,
        SQLite: 15,
        Cassandra: 16,
      },
      large: {
        PostgreSQL: 22,
        MySQL: 18,
        MongoDB: 24,
        Redis: 20,
        SQLite: 8,
        Cassandra: 25,
      },
      enterprise_vol: {
        PostgreSQL: 20,
        MySQL: 15,
        MongoDB: 22,
        Redis: 24,
        SQLite: 5,
        Cassandra: 25,
      },
    };

    // Complexity scoring (20% weight)
    const complexityScores = {
      simple: {
        PostgreSQL: 16,
        MySQL: 20,
        MongoDB: 22,
        Redis: 18,
        SQLite: 25,
        Cassandra: 12,
      },
      moderate: {
        PostgreSQL: 22,
        MySQL: 18,
        MongoDB: 20,
        Redis: 19,
        SQLite: 16,
        Cassandra: 15,
      },
      complex: {
        PostgreSQL: 25,
        MySQL: 15,
        MongoDB: 18,
        Redis: 16,
        SQLite: 10,
        Cassandra: 24,
      },
    };

    // Scalability scoring (15% weight)
    const scalabilityScores = {
      low: {
        PostgreSQL: 18,
        MySQL: 16,
        MongoDB: 15,
        Redis: 12,
        SQLite: 20,
        Cassandra: 10,
      },
      medium_scale: {
        PostgreSQL: 20,
        MySQL: 18,
        MongoDB: 18,
        Redis: 16,
        SQLite: 12,
        Cassandra: 16,
      },
      high: {
        PostgreSQL: 22,
        MySQL: 16,
        MongoDB: 24,
        Redis: 25,
        SQLite: 8,
        Cassandra: 25,
      },
    };

    // Budget scoring (10% weight)
    const budgetScores = {
      low_budget: {
        PostgreSQL: 15,
        MySQL: 12,
        MongoDB: 10,
        Redis: 8,
        SQLite: 15,
        Cassandra: 8,
      },
      medium_budget: {
        PostgreSQL: 12,
        MySQL: 10,
        MongoDB: 8,
        Redis: 6,
        SQLite: 10,
        Cassandra: 6,
      },
      high_budget: {
        PostgreSQL: 10,
        MySQL: 8,
        MongoDB: 10,
        Redis: 8,
        SQLite: 6,
        Cassandra: 12,
      },
    };

    // Team expertise scoring (10% weight)
    const teamScores = {
      junior: {
        PostgreSQL: 6,
        MySQL: 10,
        MongoDB: 8,
        Redis: 6,
        SQLite: 10,
        Cassandra: 4,
      },
      mixed: {
        PostgreSQL: 8,
        MySQL: 8,
        MongoDB: 9,
        Redis: 7,
        SQLite: 8,
        Cassandra: 6,
      },
      senior: {
        PostgreSQL: 10,
        MySQL: 6,
        MongoDB: 8,
        Redis: 9,
        SQLite: 6,
        Cassandra: 10,
      },
    };

    // Apply scoring based on form selections
    if (formData.projectType && projectTypeScores[formData.projectType]) {
      score += projectTypeScores[formData.projectType][db.name] || 0;
    }

    if (formData.dataVolume && dataVolumeScores[formData.dataVolume]) {
      score += dataVolumeScores[formData.dataVolume][db.name] || 0;
    }

    if (formData.complexity && complexityScores[formData.complexity]) {
      score += complexityScores[formData.complexity][db.name] || 0;
    }

    if (formData.scalability && scalabilityScores[formData.scalability]) {
      score += scalabilityScores[formData.scalability][db.name] || 0;
    }

    if (formData.budget && budgetScores[formData.budget]) {
      score += budgetScores[formData.budget][db.name] || 0;
    }

    if (formData.team && teamScores[formData.team]) {
      score += teamScores[formData.team][db.name] || 0;
    }

    // Bonus points based on description keywords (up to 10 points)
    const keywords = formData.description.toLowerCase();
    const keywordBonuses = {
      PostgreSQL: [
        "analytics",
        "complex",
        "enterprise",
        "acid",
        "json",
        "reporting",
      ],
      MySQL: ["web", "cms", "ecommerce", "blog", "wordpress", "simple"],
      MongoDB: ["mobile", "flexible", "document", "json", "rapid", "prototype"],
      Redis: ["cache", "session", "realtime", "fast", "memory", "queue"],
      SQLite: [
        "mobile",
        "embedded",
        "local",
        "offline",
        "lightweight",
        "desktop",
      ],
      Cassandra: [
        "big data",
        "iot",
        "timeseries",
        "distributed",
        "massive",
        "writes",
      ],
    };

    const dbKeywords = keywordBonuses[db.name] || [];
    let keywordBonus = 0;
    dbKeywords.forEach((keyword) => {
      if (keywords.includes(keyword)) {
        keywordBonus += 2;
      }
    });
    score += Math.min(keywordBonus, 10);

    return {
      name: db.name,
      type: db.type,
      score: Math.min(score, 100),
      pros: db.pros,
      cons: db.cons,
      useCase: db.useCase,
      color: db.color,
    };
  });

  const sorted = scored.sort((a, b) => b.score - a.score).slice(0, 3);
  return sorted;
};
