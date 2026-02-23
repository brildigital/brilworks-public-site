import React from "react";
import {
  Calculator,
  Sliders,
  Activity,
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
  Server,
  Lock,
  CheckCircle2,
  AlertTriangle,
  Code,
  Network,
  Eye,
  Download,
  Sparkles,
  PieChart,
  Compass,
  AlertCircle,
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
    "Our advanced calculator provides insights to help you optimize customer relationships and prioritize MVP features effectively.",
  listData: [
    {
      icon: Target,
      title: "Smart Feature Prioritization",
      description:
        "AI-powered analysis of your project description to identify the most critical MVP features.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Users,
      title: "Audience-Centric Approach",
      description:
        "Tailored recommendations based on your target audience and their specific needs for MVP feature selection.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description:
        "Get immediate feedback and MVP feature recommendations as you fill out the form.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: BarChart3,
      title: "Priority Scoring",
      description:
        "Each feature gets a priority score, helping you make informed decisions about your MVP scope.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Clock,
      title: "Timeline Optimization",
      description:
        "Recommendations adjusted based on your project timeline and development constraints for MVP planning.",
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
  title: "Features of App Idea Generator",
  description:
    "Our advanced calculator provides comprehensive insights and tools to help you understand and optimize your customer relationships.",
  listData: [
    {
      icon: Smartphone,
      title: "Smart AI App Type Detection",
      description:
        "Instantly match your app idea to the ideal category using advanced keyword analysis.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Users,
      title: "User Base Growth Tools",
      description:
        "Discover features to scale user acquisition and maximize ROI.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Target,
      title: "Industry-Specific Recommendations",
      description:
        "Choose from fintech, healthcare, media, fleet management, and more for custom app solutions.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Zap,
      title: "App Development Cost Calculator",
      description: "Estimate your project investment and optimize resources.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: BarChart3,
      title: "Market Analysis & Risk Assessment",
      description:
        "Analyze the market potential, competitor density, and get strategies to minimize app launch risks.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Clock,
      title: "Timeline Optimization",
      description:
        "Platform recommendations adjusted based on your development timeline and resource constraints.",
      color: "bg-red-100 text-red-600",
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
        "Evaluate 8 critical dimensions of technology readiness including team expertise, tech infrastructure, budget, and strategic alignment.",
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
        "Identify technical debt, infrastructure gaps, and scalability bottlenecks with prioritized action items and implementation timelines.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Rocket,
      title: "Growth Roadmap",
      description:
        "Receive a strategic technology roadmap for scaling your tech stack, infrastructure, and team capabilities.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description:
        "Understand technology adoption risks, security vulnerabilities, and get mitigation strategies for common startup technical challenges.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Award,
      title: "Investor Ready",
      description:
        "Generate technology maturity reports that demonstrate your tech infrastructure readiness and TRL score to investors and stakeholders.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};
const digitalTransformationReadinessCheckerFeatures = {
  title: "Comprehensive Features for Digital Transformation Success",
  description:
    "Our advanced digital transformation readiness tool provides detailed analysis across multiple dimensions to ensure your transformation initiatives succeed.",
  listData: [
    {
      icon: Brain,
      title: "Comprehensive Assessment",
      description:
        "Evaluate 8 critical dimensions of digital transformation readiness, including leadership, skills, and technology, with our digital maturity assessment.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Gauge,
      title: "Real-time Scoring",
      description:
        "Get instant readiness scores with detailed breakdowns and risk assessments for informed decision-making via the digital transformation scorecard.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Target,
      title: "Gap Identification",
      description:
        "Pinpoint specific areas requiring attention using the business transformation checklist, along with prioritized action items and improvement strategies.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Globe,
      title: "Industry Benchmarks",
      description:
        "Compare your readiness against industry standards and best practices with the digital transformation scorecard results.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description:
        "Understand transformation risks and receive mitigation strategies for common implementation challenges through our digital readiness quiz insights.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Award,
      title: "Strategic Roadmap",
      description:
        "Generate detailed transformation roadmaps with timelines, priorities, and measurable success metrics drawn from your digital transformation readiness tool.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};
const saasBusinessModelGeneratorFeatures = {
  title: "Powerful Features",
  description:
    "Everything you need to validate and plan your SaaS business model effectively.",
  listData: [
    {
      icon: DollarSign,
      title: "Smart Pricing Models",
      description:
        "Get AI-recommended pricing tiers based on market data and competitor benchmarks through our app pricing strategy tool.",
      color: "bg-blue-100 text-blue-600",
    },

    {
      icon: Users,
      title: "Target Audience Analysis",
      description:
        "Identify and understand your ideal customer profiles to strengthen your app idea business model.",
      color: "bg-green-100 text-green-600",
    },

    {
      icon: TrendingUp,
      title: "Growth Strategies",
      description:
        "Receive customized tactics designed to accelerate growth and improve your product-market fit.",
      color: "bg-purple-100 text-purple-600",
    },

    {
      icon: BarChart3,
      title: "Revenue Projections",
      description:
        "Forecast potential revenue and track key business metrics to validate your app idea to business model transition.",
      color: "bg-orange-100 text-orange-600",
    },

    {
      icon: Rocket,
      title: "Go-to-Market Plan",
      description:
        "Follow a step-by-step launch roadmap tailored to your app’s audience and monetization approach.",
      color: "bg-red-100 text-red-600",
    },

    {
      icon: Clock,
      title: "Time & Cost Estimates",
      description:
        "Get realistic development timelines and budget recommendations to make smarter investment decisions.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};

const codeQualityAnalyzerFeatures = {
  title: "Powerful Features",
  description:
    "Everything you need to maintain high-quality, secure, and performant code.",
  listData: [
    {
      icon: Bug,
      title: "Bug Detection",
      description:
        "Automatically identify potential bugs, logical errors, and other code issues.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Shield,
      title: "Security Analysis",
      description:
        "Scan for security vulnerabilities, attack vectors, and other security issues before deployment.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: TrendingUp,
      title: "Performance Insights",
      description:
        "Get recommendations to improve performance, efficiency, and reduce technical debt.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Code2,
      title: "Code Smells",
      description:
        "Detect code smells and anti-patterns that affect maintainability and code reliability.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: BarChart3,
      title: "Quality Metrics",
      description:
        "Track your code quality, maintainability, reliability, and technical debt scores.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Clock,
      title: "Fix Time Estimates",
      description:
        "View realistic time estimates for addressing identified issues and improving overall code quality.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};

const saasScalabilityReadinessCheckerFeatures = {
  title: "Powerful Features",
  description:
    "Everything you need to ensure your SaaS platform can scale effectively.",
  listData: [
    {
      icon: Server,
      title: "Infrastructure Analysis",
      description:
        "In-depth SaaS infrastructure evaluation and architecture review to assess cloud scalability and growth capacity.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Activity,
      title: "Performance Metrics",
      description:
        "Real-time SaaS monitoring analytics and platform performance benchmarks to measure throughput, latency, and efficiency.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Users,
      title: "User Load Capacity",
      description:
        "Simulate growth scenarios with our SaaS load testing tool and determine how your system responds under pressure.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Shield,
      title: "Security Assessment",
      description:
        "Check your SaaS security compliance and identify gaps that could affect scalability and user trust.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: TrendingUp,
      title: "Growth Projections",
      description:
        "Use SaaS growth forecasting tools to plan your database scaling and microservices scalability roadmap.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: CheckCircle2,
      title: "Best Practices",
      description:
        "Get tailored SaaS best practices for fintech startups and enterprises, aligned with 2025 SaaS platform performance benchmarks.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};
const legacySystemModernizationReadinessFeatures = {
  title: "Comprehensive Analysis Features",
  description:
    "Everything you need to plan and execute a successful legacy software upgrade or application modernization.",
  listData: [
    {
      icon: Clock,
      title: "System Age Analysis",
      description:
        "Understand your system’s lifecycle stage with detailed system age analysis to determine when modernization is due.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Code,
      title: "Technology Stack Review",
      description:
        "Perform an in-depth technology stack review to compare existing frameworks, platforms, and tools with modern alternatives.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: TrendingUp,
      title: "Cost Impact Analysis",
      description:
        "Run a cost impact analysis to calculate ongoing maintenance expenses and potential savings from modernization.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: AlertTriangle,
      title: "Risk Identification",
      description:
        "Spot technical debt, security vulnerabilities, and other risks that can delay or inflate modernization costs.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: RefreshCw,
      title: "Migration Strategies",
      description:
        "Get expert recommendations for lift and shift, replatform, or full rebuild approaches tailored to your system’s needs.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: CheckCircle2,
      title: "ROI Projections",
      description:
        "Evaluate ROI projections to understand business value, cost savings, and time-to-value for your digital transformation.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};

const appSecurityCheckListGeneratorFeatures = {
  title: "Comprehensive Security Coverage",
  description: "Everything you need to strengthen your app security posture.",
  listData: [
    {
      icon: Lock,
      title: "Authentication & Access",
      description:
        "Follow a secure authentication implementation checklist covering IAM, authorization, and session management for both web and mobile apps.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Database,
      title: "Data Protection",
      description:
        "Ensure encryption with TLS, HSTS, and content security policy (CSP) standards. Learn how to secure user data in mobile apps and manage data safely in cloud environments.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Shield,
      title: "Application Security",
      description:
        "Use the secure code review checklist to identify vulnerabilities through automated app security audits and app security vulnerability scanners.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Globe,
      title: "Network Security",
      description:
        "Review cloud app infrastructure security checklists, firewall rules, and network hardening practices to reduce attack surfaces.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: CheckCircle2,
      title: "Compliance Standards",
      description:
        "Access a complete app security compliance checklist to meet GDPR, HIPAA, PCI DSS, SOX, and ISO requirements.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Eye,
      title: "Monitoring & Response",
      description:
        "Implement security monitoring, threat assessment, and incident response workflows that align with DevOps security checklists and cloud security solutions.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};

const performanceBenchmarkingToolFeatures = {
  title: "Comprehensive Performance Analysis",
  description:
    "EEverything you need to benchmark and optimize app performance.",
  listData: [
    {
      icon: Clock,
      title: "Load Time Analysis",
      description:
        "Use our app load time analyzer to test and improve page load performance with optimized caching, CDN, and code split strategies.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Timer,
      title: "Time to Interactive",
      description:
        "Measure how quickly your app becomes usable and track performance trends with real-time data.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Network,
      title: "API Performance",
      description:
        "Run API performance benchmarking to identify latency issues and improve API response times with cache and timeout optimization.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Cpu,
      title: "Resource Utilization",
      description:
        "Monitor CPU, memory, and other resource utilization metrics to detect inefficiencies that slow performance.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: BarChart3,
      title: "Throughput Metrics",
      description:
        "Evaluate your app’s throughput metrics and concurrent request handling to ensure scalability and reliability under load.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: TrendingUp,
      title: "Performance Trends",
      description:
        "Track performance trends over time, visualize optimization impact, and compare results with industry-standard benchmarks.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};
const scopeOfWorkGeneratorFeatures = {
  title: "Powerful Features",
  description:
    "Everything you need to create accurate and professional Scope of Work documents.",
  listData: [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Generate full SOWs in under five minutes with optimized performance workflows designed for real-time benchmarking.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Shield,
      title: "Legally Sound",
      description:
        "Templates are reviewed by legal experts and aligned with industry performance standards for clarity and compliance.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: FileText,
      title: "Professional Format",
      description:
        "Clean, organized layouts make your SOW easy to read and suitable for benchmarking against competitors.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: CheckCircle,
      title: "Customizable",
      description:
        "Fully editable SOWs you can adjust based on client needs, system capacity assessments, or project size.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Sparkles,
      title: "Smart Keywords",
      description:
        "The AI uses benchmark SaaS metrics and project data to enhance clarity, performance accuracy, and scalability of deliverables.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Download,
      title: "Export Ready",
      description:
        "Download your final SOW in multiple formats—ready to share, present, or integrate into your performance monitoring platform.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};
const softwareProposalGeneratorFeatures = {
  title: "Powerful Features",
  description:
    "Everything you need to build persuasive, professional software proposals that convert.",
  listData: [
    {
      icon: Rocket,
      title: "Quick Turnaround",
      description:
        "Our fast proposal turnaround system lets you respond to RFPs in minutes. Ideal for agencies and software teams that need agility.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Lock,
      title: "Industry Best Practices",
      description:
        "Templates follow industry-standard proposal formats and legal compliance guidelines to enhance credibility and trust.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Code2,
      title: "Technical Expertise",
      description:
        "The built-in technical proposal generator allows you to highlight architecture, methodology, and development approaches clearly.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Layers,
      title: "Comprehensive Coverage",
      description:
        "Includes all essential sections — timeline, deliverables, pricing, SOW details, and team expertise. Perfect for startups or enterprises managing multiple projects.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Sparkles,
      title: "Smart Customization",
      description:
        "AI adapts each proposal based on your input and project scope keywords, ensuring personalized and persuasive content every time.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Download,
      title: "Multiple Formats",
      description:
        "Download and share in Word or PDF with our proposal editor tool. The proposal sharing formats are easy to customize and integrate with other platforms.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};
const calculateAppDevBreakdownCalculatorFeatures = {
  title: "Why Choose Our Calculator",
  description:
    "Built with precision and backed by extensive industry research.",
  listData: [
    {
      icon: Sparkles,
      title: "AI-Powered Estimation",
      description:
        "Advanced algorithms analyze thousands of projects to provide accurate cost predictions",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Shield,
      title: "Industry Standards",
      description:
        "Based on real market rates and current industry benchmarks for reliable estimates",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description:
        "Get comprehensive cost breakdown in seconds, not days of research",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Detailed Breakdown",
      description:
        "See exactly where your budget goes with itemized development phase costs",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Users,
      title: "Team Size Calculator",
      description:
        "Understand optimal team composition and hourly rates for your project",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Globe,
      title: "Multi-Platform Support",
      description:
        "Calculate costs for iOS, Android, web, and cross-platform applications",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};
const aiAppDevCostCalculatorFeatures = {
  title: "Powerful Features for Accurate Estimates",
  description:
    "Our calculator combines industry expertise with cutting-edge technology to deliver the most reliable cost estimates.",
  listData: [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description:
        "Advanced algorithms analyze your requirements and market data for accurate estimates.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Target,
      title: "Precision Pricing",
      description:
        "Industry-specific cost factors ensure estimates match real-world development costs.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: Shield,
      title: "No Hidden Costs",
      description:
        "Transparent breakdown of all components including development, deployment, and maintenance.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description:
        "Get comprehensive cost estimates in seconds, not days of back-and-forth meetings.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: RefreshCw,
      title: "Real-Time Updates",
      description:
        "Adjust features and see cost changes instantly to find your perfect budget fit.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: BarChart3,
      title: "Detailed Breakdown",
      description:
        "View itemized costs for AI models, features, platforms, and infrastructure.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Code,
      title: "Technology Insights",
      description:
        "Understand which tech stack suits your project and how it affects costs.",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: Users,
      title: "Team Size Estimates",
      description:
        "Get recommendations on team composition and timeline based on your budget.",
      color: "bg-red-100 text-red-600",
    },
  ],
};
const saasPricingModelCalculatorFeatures = {
  title: "Advanced Tools for Pricing Success",
  description:
    "Everything you need to make data-driven pricing decisions and maximize revenue.",
  listData: [
    {
      icon: Zap,
      title: "Real-Time Market Analysis",
      description:
        "Advanced algorithms analyze competitive pricing and market trends in real-time.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Revenue Optimization",
      description:
        "Calculate maximum revenue potential with different pricing strategies.",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: Users,
      title: "Customer Segmentation",
      description:
        "Identify optimal pricing tiers for different customer segments.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: Lock,
      title: "Churn Rate Analysis",
      description:
        "Predict customer churn based on pricing and recommend mitigation strategies.",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      icon: BarChart3,
      title: "Competitor Benchmarking",
      description:
        "Compare your pricing with industry competitors and market leaders.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Lightbulb,
      title: "AI-Powered Insights",
      description:
        "Get AI-generated recommendations based on market data and trends.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: PieChart,
      title: "Financial Projections",
      description:
        "Detailed 12-month revenue forecasts with different pricing scenarios.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Compass,
      title: "Strategy Recommendations",
      description:
        "Personalized pricing strategy based on your business model and goals.",
      color: "bg-rose-100 text-rose-600",
    },
  ],
};
const buildVsBuySoftwareCalculatorFeatures = {
  title: "Advanced Tools for Pricing Success",
  description:
    "Everything you need to make data-driven pricing decisions and maximize revenue.",
  listData: [
    {
      icon: Zap,
      title: "Real-Time Analysis",
      description:
        "Get instant calculations powered by AI and machine learning algorithms.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Brain,
      title: "Smart Recommendations",
      description:
        "Keyword-based analysis from your description for personalized insights.",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description:
        "Understand security, compliance, and vendor lock-in implications.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: TrendingUp,
      title: "ROI Projections",
      description:
        "3-year ROI forecast with different scenarios and assumptions.",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      icon: Clock,
      title: "Time to Market",
      description:
        "Compare development timeline with immediate deployment options.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Users,
      title: "Team Impact Analysis",
      description:
        "See how each option affects your current and future team structure.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: DollarSign,
      title: "Total Cost of Ownership",
      description:
        "Hidden costs revealed: licensing, integration, training, and support.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: BarChart3,
      title: "Detailed Breakdown",
      description:
        "Export detailed reports with cost comparisons and strategic insights.",
      color: "bg-rose-100 text-rose-600",
    },
  ],
};
const saasMetricsCalculatorFeatures = {
  title: "Advanced Tools for Pricing Success",
  description:
    "Everything you need to make data-driven pricing decisions and maximize revenue.",
  listData: [
    {
      icon: Activity,
      title: "Real-time MRR/ARR",
      description:
        "Calculate Monthly and Annual Recurring Revenue with precision. Track revenue trends instantly.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Target,
      title: "CAC Analysis",
      description:
        "Understand your Customer Acquisition Cost. Know how much you spend to acquire each customer.",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: TrendingUp,
      title: "LTV Calculation",
      description:
        "Compute Customer Lifetime Value. Determine long-term customer profitability.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: Users,
      title: "Churn Analysis",
      description:
        "Monitor churn rate and revenue churn. Identify retention opportunities.",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      icon: AlertCircle,
      title: "Health Metrics",
      description:
        "Track CAC payback period, LTV:CAC ratio, and other health indicators.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: BarChart3,
      title: "Growth Tracking",
      description:
        "Monitor MoM and YoY growth rates. Benchmark against industry standards.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Clock,
      title: "Runway Forecast",
      description:
        "Calculate how long your cash will last based on burn rate and growth.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Zap,
      title: "Smart Insights",
      description:
        "Get keyword-based recommendations to improve your SaaS metrics.",
      color: "bg-rose-100 text-rose-600",
    },
  ],
};
const appRebuildRefactorCalculatorFeatures = {
  title: "Advanced Tools for Pricing Success",
  description:
    "Everything you need to make data-driven pricing decisions and maximize revenue.",
  listData: [
    {
      icon: Activity,
      title: "Real-time MRR/ARR",
      description:
        "Calculate Monthly and Annual Recurring Revenue with precision. Track revenue trends instantly.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Target,
      title: "CAC Analysis",
      description:
        "Understand your Customer Acquisition Cost. Know how much you spend to acquire each customer.",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: TrendingUp,
      title: "LTV Calculation",
      description:
        "Compute Customer Lifetime Value. Determine long-term customer profitability.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: Users,
      title: "Churn Analysis",
      description:
        "Monitor churn rate and revenue churn. Identify retention opportunities.",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      icon: AlertCircle,
      title: "Health Metrics",
      description:
        "Track CAC payback period, LTV:CAC ratio, and other health indicators.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: BarChart3,
      title: "Growth Tracking",
      description:
        "Monitor MoM and YoY growth rates. Benchmark against industry standards.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Clock,
      title: "Runway Forecast",
      description:
        "Calculate how long your cash will last based on burn rate and growth.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Zap,
      title: "Smart Insights",
      description:
        "Get keyword-based recommendations to improve your SaaS metrics.",
      color: "bg-rose-100 text-rose-600",
    },
  ],
};
const mobileAppMonetizationStrategySelectorFeatures = {
  title: "Advanced Tools for Pricing Success",
  description:
    "Everything you need to make data-driven pricing decisions and maximize revenue.",
  listData: [
    {
      icon: Activity,
      title: "Real-time MRR/ARR",
      description:
        "Calculate Monthly and Annual Recurring Revenue with precision. Track revenue trends instantly.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Target,
      title: "CAC Analysis",
      description:
        "Understand your Customer Acquisition Cost. Know how much you spend to acquire each customer.",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: TrendingUp,
      title: "LTV Calculation",
      description:
        "Compute Customer Lifetime Value. Determine long-term customer profitability.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: Users,
      title: "Churn Analysis",
      description:
        "Monitor churn rate and revenue churn. Identify retention opportunities.",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      icon: AlertCircle,
      title: "Health Metrics",
      description:
        "Track CAC payback period, LTV:CAC ratio, and other health indicators.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: BarChart3,
      title: "Growth Tracking",
      description:
        "Monitor MoM and YoY growth rates. Benchmark against industry standards.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Clock,
      title: "Runway Forecast",
      description:
        "Calculate how long your cash will last based on burn rate and growth.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Zap,
      title: "Smart Insights",
      description:
        "Get keyword-based recommendations to improve your SaaS metrics.",
      color: "bg-rose-100 text-rose-600",
    },
  ],
};

const ToolFeatures = () => {
  const pathname = usePathname();

  const showDataBasedOnPathname = {
    "/tools/app-development-cost-calculator/": projectEstimateFeatures,
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
    "/tools/tech-readiness-assessment-tool/": startupTechReadinessQuizFeatures,
    "/tools/digital-transformation-readiness-checker/":
      digitalTransformationReadinessCheckerFeatures,
    "/tools/build-your-saas-business-model/":
      saasBusinessModelGeneratorFeatures,
    "/tools/code-quality-analyzer/": codeQualityAnalyzerFeatures,
    "/tools/saas-scalability-readiness-checker/":
      saasScalabilityReadinessCheckerFeatures,
    "/tools/legacy-system-modernization-readiness/":
      legacySystemModernizationReadinessFeatures,
    "/tools/app-security-checklist-generator/":
      appSecurityCheckListGeneratorFeatures,
    "/tools/performance-benchmarking-tool/":
      performanceBenchmarkingToolFeatures,
    "/tools/scope-of-work-generator/": scopeOfWorkGeneratorFeatures,
    "/tools/software-proposal-generator/": softwareProposalGeneratorFeatures,
    "/tools/app-development-cost-breakdown-calculator/":
      calculateAppDevBreakdownCalculatorFeatures,
    "/tools/ai-app-development-cost-calculator/":
      aiAppDevCostCalculatorFeatures,
    "/tools/saas-pricing-model-calculator/": saasPricingModelCalculatorFeatures,
    "/tools/build-vs-buy-software-calculator/":
      buildVsBuySoftwareCalculatorFeatures,
    "/tools/saas-metrics-calculator/": saasMetricsCalculatorFeatures,
    "/tools/app-rebuild-vs-refactor-calculator/":
      appRebuildRefactorCalculatorFeatures,
    "/tools/mobile-app-monetization-strategy-selector/":
      mobileAppMonetizationStrategySelectorFeatures,
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
