import React from "react";
import {
  Calculator,
  Sliders,
  CheckSquare,
  FileText,
  Clock,
  DollarSign,
  TrendingUp,
  BarChart3,
  Shield,
  Users,
  Zap,
  MapPin,
  CreditCard,
  Globe,
  Smartphone,
  Award,
  Lightbulb,
  Target,
  BarChart,
  Bell,
  Wrench,
  Layers,
  Brain,
  CheckCircle,
  Cpu,
  Database,
  Rocket,
  RefreshCw,
  Timer,
  Workflow,
  Gauge,
  Bot,
  Code2,
  Bug,
} from "lucide-react";
import Heading from "../HTMLComponents/Heading";
import { usePathname } from "next/navigation";

const projectEstimateFeatures = {
  title: "Why Use Our Cost Estimator?",
  description:
    "Our tool combines industry expertise with automated analysis to deliver reliable estimates. Whether you’re calculating software development cost for an MVP or exploring app development cost, you get clarity before making financial commitments.",
  listData: [
    {
      icon: Calculator,
      title: "Instant Estimation",
      description:
        "Get a quick overview of expected project costs. The algorithm processes complexity, platform, and scope in seconds.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Sliders,
      title: "Platform & Complexity Options",
      description:
        "Choose between web, mobile, or desktop apps. Pricing adjusts according to technical depth.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: CheckSquare,
      title: "Feature-Based Calculation",
      description:
        "Add modules such as user login, payments, chat, or geolocation. Each selection affects the overall estimate.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: FileText,
      title: "Project Description Inputs",
      description:
        "Provide unique requirements to refine your numbers beyond default templates.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Clock,
      title: "Timeline Sensitivity",
      description:
        "Understand how a shorter or extended deadline impacts cost.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: DollarSign,
      title: "Comprehensive Breakdown",
      description:
        "Receive a structured report covering platform, features, design, and duration, so you can make informed decisions.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};
const roiCalculatorFeatures = {
  title: "ROI Calculator Features",
  description: "Tools and Insights for Smarter App Investments",
  listData: [
    {
      icon: Calculator,
      title: "Real-time Calculations",
      description: "Instantly see changes as you update your inputs.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Accurate ROI Analysis",
      description:
        "Industry-standard calculations to forecast potential returns.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: BarChart3,
      title: "Comprehensive Reports",
      description:
        "Breakdown of development, maintenance, and revenue projections.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Clock,
      title: "Timeline Planning",
      description: "Plan payback periods and break-even points with ease.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Identify potential risks and strategies to mitigate them.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Users,
      title: "Team Size Optimization",
      description:
        "Discover the ideal team structure for your timeline and budget.",
      color: "bg-violet-100 text-violet-600",
    },
    {
      icon: Zap,
      title: "Feature Impact Analysis",
      description: "Understand how each feature affects cost and ROI.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: DollarSign,
      title: "Revenue Modeling",
      description:
        "Simulate different revenue scenarios and user acquisition strategies.",
      color: "bg-pink-100 text-pink-600",
    },
  ],
};
const mobilityAppDevCalculatorFeatures = {
  title: "Essential Features for Building an Uber-Like App",
  description:
    "Discover the core features that define a successful uber-like app development project. The final cost to build an app like Uber is heavily influenced by the features you include.",
  listData: [
    {
      icon: MapPin,
      title: "Real-Time GPS & Navigation",
      description: "Real-time location tracking and route optimization",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: CreditCard,
      title: "Payment Gateway",
      description: "Secure payment processing with multiple options",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Users,
      title: "User Management",
      description: "Separate interfaces for riders and drivers",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Clock,
      title: "Live Ride Tracking",
      description: "Live ride tracking and ETA updates",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Shield,
      title: "In-App Safety Features",
      description: "Emergency contacts, ride sharing, and verification",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: DollarSign,
      title: "Dynamic Pricing",
      description: "Surge pricing and fare calculation algorithms",
      color: "bg-violet-100 text-violet-600",
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Support for multiple languages and regions",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: Zap,
      title: "Push Notifications",
      description: "Real-time alerts and ride status updates",
      color: "bg-pink-100 text-pink-600",
    },
  ],
};

const SaasDevCostCalculatorFeatures = {
  title: "Why Use Our App Development Cost Calculator?",

  listData: [
    {
      icon: Zap,
      title: "Instant Results",
      description:
        "Get accurate cost estimates in seconds, not days. Our algorithm considers all major cost factors.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Shield,
      title: "Data-Driven Accuracy",
      description: "Based on 1000+ SaaS projects with a 95% accuracy rate.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Users,
      title: "Expert-Validated Estimates",
      description: "Built by SaaS developers with real-world experience.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Globe,
      title: "Multi-Platform Support",
      description: "Tailored estimates for web, mobile, and hybrid apps.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Smartphone,
      title: "Feature Rich",
      description:
        "Comprehensive feature library covering all modern SaaS functionalities and integrations.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: Award,
      title: "Free & Unlimited Use",
      description: "No registration required. Get unlimited cost estimates.",
      color: "bg-pink-100 text-pink-600",
    },
  ],
};
const mvpDevCostCalculatorFeatures = {
  title: "Why Choose Our MVP Calculator",
  description: (
    <>
      Our MVP Calculator is designed to give you fast, reliable, and actionable
      insights
      <br className="hidden md:block" /> based on real industry data and proven
      methodologies. Here’s what makes it stand out:
    </>
  ),
  listData: [
    {
      icon: Zap,
      title: "Instant, Accurate Estimates",
      description:
        "Get a detailed MVP cost calculation in seconds, so you can plan your budget without delay.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: Shield,
      title: "Data-Driven Benchmarks",
      description:
        "Our tool uses up-to-date market data to ensure your estimates reflect current development costs.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: TrendingUp,
      title: "Smart Cost Optimization",
      description:
        "Receive tailored suggestions to help you reduce expenses while maintaining quality.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Clock,
      title: "Clear Timeline Planning",
      description:
        "Understand how your feature choices impact development time and delivery.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Users,
      title: "Team Size Recommendations",
      description:
        "Get guidance on the optimal team structure for your project’s scope.",
      color: "bg-violet-100 text-violet-600",
    },
    {
      icon: Lightbulb,
      title: "Feature Prioritization Insights",
      description:
        "Focus on the most valuable features first, maximizing your MVP’s impact.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Target,
      title: "Competitive Market Analysis",
      description:
        "See how your MVP stacks up against industry standards and competitors.",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: BarChart,
      title: "Detailed Reports",
      description: "Comprehensive reports with visual breakdowns",
      color: "bg-pink-100 text-pink-600",
    },
  ],
};
const appMaintenanceCostEstimatorFeatures = {
  title: "Why Use Our App Maintenance Cost Calculator?",
  description: (
    <>
      Our tool provides a comprehensive breakdown of all essential maintenance
      components,
      <br className="hidden md:block" /> helping you plan and optimize your
      budget.
    </>
  ),
  listData: [
    {
      icon: Shield,
      title: "Security Updates",
      description:
        "Estimate costs for vulnerability fixes and compliance patches.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Clock,
      title: "Regular Maintenance",
      description: "Get insights into ongoing monitoring and upkeep expenses.",

      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: DollarSign,
      title: "Budget Planning",
      description: "Plan your annual app maintenance cost with confidence.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: BarChart,
      title: "Performance Optimization",
      description:
        "Analyze costs for speed, memory, and resource improvements.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Bell,
      title: "Feature Updates",
      description: "Forecast expenses for new features and UI/UX enhancements.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Wrench,
      title: "Bug Fixes",
      description: "Calculate costs for issue resolution and crash fixes.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Zap,
      title: "Platform Compatibility",
      description: "Stay updated with iOS, Android, and web platform changes.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Users,
      title: "User Support",
      description:
        "Include customer support and feedback management in your budget.",
      color: "bg-indigo-100 text-indigo-600",
    },
  ],
};
const appDevTimelineCalculatorFeatures = {
  title: "Powerful Features",
  description: (
    <>
      Our advanced calculator provides comprehensive insights beyond basic
      estimates,
      <br className="hidden md:block" /> helping you make informed decisions
      about your app development project.
    </>
  ),
  listData: [
    {
      icon: Calculator,
      title: "Accurate Estimations",
      description:
        "AI-powered calculations based on 10,000+ real project data points",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Clock,
      title: "Real-time Results",
      description:
        "Get instant timeline and cost estimates as you input project details",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Target,
      title: "Keyword Intelligence",
      description:
        "Smart analysis of project descriptions to identify complexity factors",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description:
        "Identify potential challenges and mitigation strategies early",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Users,
      title: "Team Recommendations",
      description: "Suggested team composition and skill requirements",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Industry benchmarks and competitive analysis included",
      color: "bg-green-100 text-green-600",
    },
  ],
};
const mvpDevTimelineEstimatorFeatures = {
  title: "Why Use Our MVP Timeline Estimator?",
  description:
    "Our estimator delivers 98% accurate MVP timeline predictions based on data from over 1000 successful minimum viable product launches, helping you plan with confidence.",
  listData: [
    {
      icon: Target,
      title: "Accurate Timeline Estimates",
      description:
        "Our estimator leverages data from over 1000 successful MVP launches to deliver highly reliable timeline predictions you can trust.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description:
        "Get immediate insights into your MVP timeline and costs without waiting days—empowering fast and informed decisions.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description:
        "Identify risks early on so you can mitigate delays and keep your MVP development on track.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Globe,
      title: "Multi-Platform Support",
      description:
        "Our estimator covers various project types, including web apps, mobile apps, and cross-platform solutions.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Users,
      title: "Team Size Optimization",
      description:
        "Receive recommendations for the ideal team composition to maximize efficiency and cost-effectiveness.",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description:
        "Benefit from industry benchmarks and competitive analysis to align your MVP with market expectations.",
      color: "bg-green-100 text-green-600",
    },
  ],
};
const featureComplexityVsTimelineEstimatorFeatures = {
  title: "Key Features of Our Development Time Estimator",
  description:
    "Our advanced estimation tool combines multiple factors to provide the most accurate development time predictions",
  listData: [
    {
      icon: Zap,
      title: "AI-Powered Complexity Detection",
      description:
        "Automatically analyzes feature descriptions to identify development challenges.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Clock,
      title: "Accurate Software Time Estimates",
      description:
        "Predicts hours based on historical data and proven estimation models.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: BarChart3,
      title: "Multi-Dimensional Complexity Scoring",
      description: "Rates UI, logic, integrations, and platform requirements.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Users,
      title: "Team Planning Recommendations",
      description:
        "Suggests optimal team size and skill sets based on feature complexity.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Shield,
      title: "Risk Identification",
      description:
        "Highlights potential bottlenecks and technical risks early.",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning Algorithm",
      description:
        "Improves accuracy using data from thousands of software projects.",
      color: "bg-green-100 text-green-600",
    },
  ],
};
const testingQATimelineEstimatorFeatures = {
  title: "Powerful Features for Accurate Estimates",
  description:
    "Our Testing & QA Timeline Calculator comes packed with advanced features to ensure your project planning is precise and reliable:",
  listData: [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description:
        "Advanced algorithms analyze your project complexity and provide intelligent testing timeline estimates.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Clock,
      title: "Real-time Calculations",
      description:
        "Instant timeline updates as you modify project parameters and requirements.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Historical Data Insights",
      description:
        "Leverage industry benchmarks and historical project data for accurate predictions.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description:
        "Identify potential risks and buffer time recommendations for your testing phases.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Target,
      title: "Precision Planning",
      description:
        "Break down testing phases with detailed task allocation and resource planning.",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: Layers,
      title: "Multi-level Testing",
      description:
        "Support for unit, integration, system, and acceptance testing timeline calculations.",
      color: "bg-orange-100 text-orange-600",
    },
  ],
};
const goToMarketPlacePlannerFeatures = {
  title: "Powerful Features for Accurate Estimates",
  description:
    "Our Testing & QA Timeline Calculator comes packed with advanced features to ensure your project planning is precise and reliable",
  listData: [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description:
        "Advanced algorithms analyze market patterns and optimize your timeline for maximum success probability.",
      color: "bg-blue-100 text-blue-500",
    },
    {
      icon: Clock,
      title: "Real-time Timeline Adjustment",
      description:
        "Dynamic timeline updates based on market changes and milestone completions.",
      color: "bg-teal-100 text-teal-500",
    },
    {
      icon: Target,
      title: "Market-Specific Optimization",
      description:
        "Tailored strategies for different industries, markets, and product categories.",
      color: "bg-orange-100 text-orange-500",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Track progress with detailed analytics and predictive success metrics.",
      color: "bg-green-100 text-green-500",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description:
        "Identify potential roadblocks and receive mitigation strategies before they impact your launch.",
      color: "bg-purple-100 text-purple-500",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Share timelines with stakeholders and track team progress in real-time.",
      color: "bg-pink-100 text-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Success Optimization",
      description:
        "Continuous learning from successful launches to improve your timeline accuracy.",
      color: "bg-indigo-100 text-indigo-500",
    },
    {
      icon: CheckCircle,
      title: "Milestone Tracking",
      description:
        "Clear checkpoints with actionable tasks and success criteria for each phase.",
      color: "bg-cyan-100 text-cyan-500",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description:
        "Generate comprehensive timelines in seconds, not weeks of planning.",
      color: "bg-yellow-100 text-yellow-500",
    },
  ],
};
const techStackRecommenderFeatures = {
  title: "Why Use Our Tech Stack Recommender?",
  description: (
    <>
      Our Tech Stack Recommender comes packed with intelligent features to help
      you
      <br className="md:block hidden" /> make the best technology decisions
    </>
  ),
  listData: [
    {
      icon: Cpu,
      title: "AI-Powered Analysis",
      description:
        "Smart algorithms match your needs with proven technology combinations.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Shield,
      title: "Security Assessment",
      description:
        "Every recommendation includes modern security best practices.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Team Compatibility",
      description:
        "Suggestions reflect current market adoption and future technology outlooks.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Users,
      title: "Team Compatibility",
      description:
        "Aligns stack choices with your team’s skills and learning curve.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Clock,
      title: "Development Speed",
      description: "Highlights technologies that reduce time-to-market.",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: Target,
      title: "Performance Focused",
      description:
        "Prioritizes scalability, reliability, and long-term maintainability.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Database,
      title: "Data Architecture",
      description:
        "Suggests databases and storage solutions tailored to your needs.",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      icon: Globe,
      title: "Global Deployment",
      description: "Considers hosting strategies for worldwide reach.",
      color: "bg-violet-100 text-violet-600",
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Offers stacks for web, mobile, and desktop applications.",
      color: "bg-lime-100 text-lime-600",
    },
  ],
};

const databaseSelectorToolFeatures = {
  title: "What Makes It Smart",
  description:
    "Powerful features that make database selection fast, accurate, and tailored to your needs.",
  listData: [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Advanced algorithms instantly match your project with the best database for mobile and web apps.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Shield,
      title: "Expert Validated",
      description:
        "Recommendations follow industry best practices for startups, SaaS platforms, and scalable applications.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: TrendingUp,
      title: "Future-Proof",
      description:
        "Considers long-term growth to suggest the best database for startups and SaaS scalability.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Users,
      title: "Team Focused",
      description:
        "Evaluates your team’s expertise to recommend databases with the right learning curve.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Clock,
      title: "Save Time",
      description:
        "Skip weeks of research—get the best database for e-commerce, mobile, and SaaS in seconds.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: BarChart3,
      title: "Data-Driven",
      description:
        "Objective analysis based on project type, data complexity, and scalability needs.",
      color: "bg-indigo-100 text-indigo-600",
    },
  ],
};
const crossPlatformVsNativeAnalyzerFeatures = {
  title: "Powerful Analysis Features",
  description:
    "Advanced capabilities providing comprehensive mobile development insights.",
  listData: [
    {
      icon: Calculator,
      title: "Smart Analysis Algorithm",
      description:
        "Advanced algorithm considers 15+ factors for accurate app development recommendations.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Cost-Benefit Analysis",
      description:
        "Detailed breakdown of development costs, timeline, and long-term maintenance.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description:
        "Identifies potential risks and challenges for each development strategy.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Rocket,
      title: "Implementation Roadmap",
      description:
        "Step-by-step guidance for executing your chosen app development plan.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Award,
      title: "Industry Standards",
      description:
        "Recommendations based on current mobile development best practices.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Users,
      title: "Team Optimization",
      description:
        "Matches development approach with your team's skills and resources.",
      color: "bg-indigo-100 text-indigo-600",
    },
  ],
};
const apiIntegrationFeasibiltyCheckerFeatures = {
  title: "Powerful Features",
  description:
    "Our comprehensive API integration checker provides everything you need to make informed project decisions:",
  listData: [
    {
      icon: Zap,
      title: "Instant Analysis",
      description:
        "Get feasibility results in seconds with our AI-powered assessment engine.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description:
        "Identify potential risks and challenges before they impact your project.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: BarChart3,
      title: "Success Scoring",
      description:
        "Receive a numerical score based on industry benchmarks and historical project data.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Clock,
      title: "Timeline Estimation",
      description:
        "Accurate time estimates for your integration project based on complexity and resources.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: TrendingUp,
      title: "Optimization Tips",
      description:
        "Actionable recommendations to improve your project’s chances of success.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Award,
      title: "Best Practices & Checklist",
      description: (
        <>
          Access industry <b>API integration best practices</b> and a complete{" "}
          <b>API integration checklist</b> to guide your project from start to
          finish.
        </>
      ),
      color: "bg-indigo-100 text-indigo-600",
    },
  ],
};
const cloudServiceCostEstimatorFeatures = {
  title: "Why Choose Our Cloud Cost Estimator",
  description:
    "Our cloud cost analysis tool provides everything you need to make informed decisions:",
  listData: [
    {
      icon: Calculator,
      title: "Accurate Calculations",
      description:
        "Get precise cost estimates based on real cloud pricing models and usage patterns.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description:
        "Instantly see pricing changes as you adjust configurations.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Shield,
      title: "Multi-Provider Support",
      description:
        "Compare costs across AWS, Azure, Google Cloud, and other major providers using our cloud pricing comparison feature.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: BarChart3,
      title: "Detailed Breakdown",
      description:
        "Understand where your cloud budget is allocated with comprehensive cost analysis.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Globe,
      title: "Global Regions",
      description:
        "Factor in regional pricing differences for accurate worldwide estimates.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description:
        "Receive actionable recommendations to optimize your cloud spending and reduce costs",
      color: "bg-indigo-100 text-indigo-600",
    },
  ],
};
const saasProfitabilityCalculatorFeatures = {
  title: "Why Use This Tool?",
  description:
    "Everything you need to analyze and optimize your SaaS profitability",
  listData: [
    {
      icon: Calculator,
      title: "Real-time Calculations",
      description: "Get instant profitability metrics as you input your data",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Growth Projections",
      description:
        "See projected growth and profitability trends for your SaaS",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Shield,
      title: "Secure & Private:",
      description: "Your data stays with you. No storage, no sharing",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: BarChart3,
      title: "Visual Analytics",
      description: "Clear visual representation of your SaaS financial health",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Clock,
      title: "Instant Results",
      description: "No waiting. Get your analysis immediately",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Zap,
      title: "Actionable Insights",
      description: "Receive tailored recommendations to improve profitability",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};
const customerAcquisitionCostEstimatorFeatures = {
  title: "Powerful Features for Accurate CAC Analysis",
  description:
    "Our comprehensive toolkit provides everything you need to calculate, analyze, and optimize your customer acquisition costs",
  listData: [
    {
      icon: BarChart3,
      title: "Real-time Calculations",
      description:
        "Get instant CAC calculations as you input your data, with live updates and visual feedback.",
      color: "bg-blue-100 text-blue-500",
    },
    {
      icon: Target,
      title: "Industry Benchmarks",
      description:
        "Compare your CAC against industry standards and see how you stack up against competitors.",
      color: "bg-teal-100 text-teal-500",
    },
    {
      icon: Zap,
      title: "Keyword-based Estimation",
      description:
        "Use industry keywords to get estimated CAC ranges specific to your business sector.",
      color: "bg-orange-100 text-orange-500",
    },
    {
      icon: Shield,
      title: "Data Security",
      description:
        "Your business data is processed securely with no storage of sensitive information.",
      color: "bg-green-100 text-green-500",
    },
    {
      icon: RefreshCw,
      title: "Multi-channel Analysis",
      description:
        "Break down CAC by marketing channel to identify your most cost-effective acquisition methods.",
      color: "bg-purple-100 text-purple-500",
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis",
      description:
        "Track your CAC trends over time to measure the effectiveness of your optimization efforts.",
      color: "bg-pink-100 text-pink-500",
    },
    {
      icon: Users,
      title: "Customer Segmentation",
      description:
        "Calculate CAC for different customer segments to understand acquisition costs by demographics.",
      color: "bg-indigo-100 text-indigo-500",
    },
    {
      icon: DollarSign,
      title: "ROI Integration",
      description:
        "See CAC in context with customer lifetime value and return on investment calculations.",
      color: "bg-cyan-100 text-cyan-500",
    },
  ],
};
const calculateCustomerLifetimeFeatures = {
  title: "Powerful Features for Accurate LTV Calculations",
  description:
    "Our advanced calculator provides comprehensive insights and tools to help you understand and optimize your customer relationships.",
  listData: [
    {
      icon: Zap,
      title: "Real-time Calculations",
      description:
        "Get instant LTV calculations as you input your data with dynamic updates.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Shield,
      title: "Industry Benchmarks",
      description:
        "Compare your results against industry standards and best practices.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Target,
      title: "Smart Adjustments",
      description:
        "Our algorithm considers business type and customer segments for accurate results.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description:
        "Comprehensive breakdown of LTV components and actionable insights.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Clock,
      title: "Time-based Analysis",
      description:
        "Calculate LTV across different time periods and customer lifecycle stages.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Award,
      title: "Professional Reports",
      description:
        "Generate detailed reports perfect for stakeholder presentations.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};
const automationSavingEstimatorFeatures = {
  title: "Why Use This Tool?",
  description:
    "Our comprehensive calculator provides detailed insights and projections to help you make informed decisions about automation investments.",
  listData: [
    {
      icon: Bot,
      title: "AI-Powered Analysis",
      description:
        "Advanced algorithms identify high-impact automation opportunities tailored to your workflows.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Gauge,
      title: "Real-Time ROI Tracking",
      description:
        "Instantly monitor your process automation ROI with dynamic performance metrics.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Workflow,
      title: "Process Optimization",
      description:
        "Identify the most impactful processes for automation based on cost-benefit analysis.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Timer,
      title: "Time Savings Calculator",
      description:
        "Precise calculations of time savings across different automation scenarios and implementations.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: TrendingUp,
      title: "Scalability Forecasts",
      description:
        "Project long-term savings as automation expands across departments and systems.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description:
        "Evaluate implementation challenges and mitigation strategies to ensure smooth adoption.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};
const mvpFeatureSelectorQuizFeatures = {
  title: "Powerful Features for Accurate LTV Calculations",
  description:
    "Our advanced calculator provides comprehensive insights and tools to help you understand and optimize your customer relationships.",
  listData: [
    {
      icon: Target,
      title: "Smart Feature Prioritization",
      description:
        "AI-powered analysis of your project description to identify the most critical features for your MVP.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Users,
      title: "Audience-Centric Approach",
      description:
        "Tailored recommendations based on your target audience and their specific needs.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description:
        "Get immediate feedback and feature recommendations as you fill out the form.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: BarChart3,
      title: "Priority Scoring",
      description:
        "Each feature gets a priority score helping you make informed decisions about your MVP scope.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Clock,
      title: "Timeline Optimization",
      description:
        "Recommendations adjusted based on your project timeline and development constraints.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description:
        "Identify potential risks and suggest mitigation strategies for your MVP features.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};
const whichAppShouldYouBuildFeatures = {
  title: "Powerful Features for Accurate LTV Calculations",
  description:
    "Our advanced calculator provides comprehensive insights and tools to help you understand and optimize your customer relationships.",
  listData: [
    {
      icon: Smartphone,
      title: "Smart App Type Detection",
      description:
        "AI-powered analysis of your description to identify the best app category and platform for your idea.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Users,
      title: "Audience-Based Recommendations",
      description:
        "Tailored suggestions based on your target audience preferences and behavior patterns.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Zap,
      title: "Real-Time Analysis",
      description:
        "Get instant recommendations as you describe your app idea with dynamic keyword analysis.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: BarChart3,
      title: "Market Potential Scoring",
      description:
        "Assess market opportunities and competition levels for your proposed app concept.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Clock,
      title: "Timeline Optimization",
      description:
        "Platform recommendations adjusted based on your development timeline and resource constraints.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description:
        "Identify potential challenges and suggest strategies for successful app development and launch.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};
const startupTechReadinessQuizFeatures = {
  title: "Comprehensive Features for Startup Success",
  description:
    "Our tech readiness quiz provides detailed analysis across multiple dimensions to help you build a strong technological foundation.",
  listData: [
    {
      icon: Brain,
      title: "Comprehensive Assessment",
      description:
        "Evaluate 8 critical dimensions of tech readiness including team, budget, and strategy alignment.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Gauge,
      title: "Real-time Scoring",
      description:
        "Get instant readiness scores with detailed breakdowns and personalized recommendations.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Target,
      title: "Gap Analysis",
      description:
        "Identify specific areas needing improvement with prioritized action items and timelines.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Rocket,
      title: "Growth Roadmap",
      description:
        "Receive strategic guidance for scaling your technology infrastructure and capabilities.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description:
        "Understand potential technology risks and get mitigation strategies for common startup challenges.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Award,
      title: "Investor Ready",
      description:
        "Generate reports that demonstrate tech readiness to investors and stakeholders.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};
const digitalTransformationReadinessCheckerFeatures = {
  title: "Comprehensive Features for Digital Transformation Success",
  description:
    "Our advanced readiness checker provides detailed analysis across multiple dimensions to ensure your digital transformation initiatives succeed.",
  listData: [
    {
      icon: Brain,
      title: "Comprehensive Assessment",
      description:
        "Evaluate 8 critical dimensions of digital transformation readiness including leadership, skills, and technology.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Gauge,
      title: "Real-time Scoring",
      description:
        "Get instant readiness scores with detailed breakdowns and risk assessments for informed decision-making.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Target,
      title: "Gap Identification",
      description:
        "Pinpoint specific areas requiring attention with prioritized action items and improvement strategies.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Globe,
      title: "Industry Benchmarks",
      description:
        "Compare your readiness against industry standards and best practices for digital transformation.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description:
        "Understand transformation risks and receive mitigation strategies for common implementation challenges.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Award,
      title: "Strategic Roadmap",
      description:
        "Generate detailed transformation roadmaps with timelines, priorities, and success metrics.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};
const saasBusinessModelGeneratorFeatures = {
  title: "Powerful Features",
  description: "Everything you need to validate and launch your SaaS business",
  listData: [
    {
      icon: DollarSign,
      title: "Smart Pricing Models",
      description:
        "Get AI-recommended pricing tiers based on your market and competitors",
      color: "bg-blue-100 text-blue-600",
    },

    {
      icon: Users,
      title: "Target Audience Analysis",
      description: "Identify and understand your ideal customer profiles",
      color: "bg-green-100 text-green-600",
    },

    {
      icon: TrendingUp,
      title: "Growth Strategies",
      description:
        "Receive customized growth tactics for your specific business model",
      color: "bg-purple-100 text-purple-600",
    },

    {
      icon: BarChart3,
      title: "Revenue Projections",
      description: "Forecast potential revenue and key business metrics",
      color: "bg-orange-100 text-orange-600",
    },

    {
      icon: Rocket,
      title: "Go-to-Market Plan",
      description: "Step-by-step launch strategy tailored to your app",
      color: "bg-red-100 text-red-600",
    },

    {
      icon: Clock,
      title: "Time & Cost Estimates",
      description:
        "Realistic timelines and budget requirements for development",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};

const codeQualityAnalyzerFeatures = {
  title: "Powerful Features",
  description: "Everything you need to maintain high-quality, secure code",
  listData: [
    {
      icon: Bug,
      title: "Bug Detection",
      description:
        "Automatically identify potential bugs and logical errors in your code",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Shield,
      title: "Security Analysis",
      description:
        "Scan for security vulnerabilities and common attack vectors",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: TrendingUp,
      title: "Performance Insights",
      description:
        "Get recommendations to optimize code performance and efficiency",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Code2,
      title: "Code Smells",
      description:
        "Detect code smells and anti-patterns that hurt maintainability",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: BarChart3,
      title: "Quality Metrics",
      description:
        "Track maintainability, reliability, and technical debt scores",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Clock,
      title: "Fix Time Estimates",
      description:
        "Get realistic time estimates for addressing identified issues",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};

const ToolFeatures = () => {
  const pathname = usePathname();

  const showDataBasedOnPathname = {
    "/tools/project-estimate/": projectEstimateFeatures,
    "/tools/roi-calculator/": roiCalculatorFeatures,
    "/tools/mobility-app-development-calculator/":
      mobilityAppDevCalculatorFeatures,
    "/tools/saas-development-cost-calculator/": SaasDevCostCalculatorFeatures,
    "/tools/mvp-development-cost-calculator/": mvpDevCostCalculatorFeatures,
    "/tools/app-maintenance-cost-estimator/":
      appMaintenanceCostEstimatorFeatures,
    "/tools/app-development-timeline-calculator/":
      appDevTimelineCalculatorFeatures,
    "/tools/mvp-launch-timeline-estimator/": mvpDevTimelineEstimatorFeatures,
    "/tools/feature-complexity-vs-time-estimator/":
      featureComplexityVsTimelineEstimatorFeatures,
    "/tools/testing-qa-timeline-estimator/": testingQATimelineEstimatorFeatures,
    "/tools/go-to-market-timeline-planner/": goToMarketPlacePlannerFeatures,
    "/tools/tech-stack-recommender/": techStackRecommenderFeatures,
    "/tools/database-selector-tool/": databaseSelectorToolFeatures,
    "/tools/cross-platform-vs-native-analyzer/":
      crossPlatformVsNativeAnalyzerFeatures,
    "/tools/api-integration-feasibility-checker/":
      apiIntegrationFeasibiltyCheckerFeatures,
    "/tools/cloud-service-cost-estimator/": cloudServiceCostEstimatorFeatures,
    "/tools/saas-profitability-calculator/":
      saasProfitabilityCalculatorFeatures,
    "/tools/customer-acquisition-cost-estimator/":
      customerAcquisitionCostEstimatorFeatures,
    "/tools/lifetime-value-calculator/": calculateCustomerLifetimeFeatures,
    "/tools/automation-saving-estimator/": automationSavingEstimatorFeatures,
    "/tools/mvp-feature-selector-quiz/": mvpFeatureSelectorQuizFeatures,
    "/tools/which-app-should-you-build/": whichAppShouldYouBuildFeatures,
    "/tools/startup-tech-readiness-quiz/": startupTechReadinessQuizFeatures,
    "/tools/digital-transformation-readiness-checker/":
      digitalTransformationReadinessCheckerFeatures,
    "/tools/build-your-saas-business-model/":
      saasBusinessModelGeneratorFeatures,
    "/tools/code-quality-analyzer/": codeQualityAnalyzerFeatures,
  };

  const features = showDataBasedOnPathname[pathname] || {};
  return (
    <section id="features" className="bg-gray-50">
      <div className="container max-w-7xl mx-auto main-section-padding">
        <div className="text-center space-y-4 mb-8">
          <Heading
            type="h2"
            className="lg:!text-[34px] md:!text-3xl !text-2xl !font-bold mb-4"
            text={features?.title}
          />
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
            {features?.description}
          </p>
        </div>

        <div
          className={`grid grid-cols-1 ${
            features?.listData?.length === 8
              ? "md:grid-cols-2 lg:grid-cols-4"
              : "md:grid-cols-2 lg:grid-cols-3"
          } gap-6`}
        >
          {features?.listData?.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group-hover:-translate-y-1 flex flex-col h-full">
                <div
                  className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolFeatures;
