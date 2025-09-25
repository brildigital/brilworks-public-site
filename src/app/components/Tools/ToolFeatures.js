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
  title: "Why Choose Our SaaS Cost Calculator?",
  description:
    "Built by industry experts with years of SaaS development experience",
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
      title: "Industry Accurate",
      description:
        "Based on real project data from 1000+ SaaS developments with 95% accuracy rate.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Users,
      title: "Expert Validated",
      description:
        "Calculations reviewed and validated by senior SaaS developers and project managers.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Globe,
      title: "Multi-Platform",
      description:
        "Support for web, mobile, and hybrid platforms with platform-specific cost adjustments.",
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
      title: "Free to Use",
      description:
        "No hidden fees or registration required. Get unlimited estimates for all your projects.",
      color: "bg-pink-100 text-pink-600",
    },
  ],
};
const mvpDevCostCalculatorFeatures = {
  title: "Why Choose Our MVP Cost Calculator?",
  description: (
    <>
      Our calculator combines industry expertise with cutting-edge technology to
      provide
      <br className="hidden md:block" /> the most accurate MVP development cost
      estimates.
    </>
  ),
  listData: [
    {
      icon: Zap,
      title: "Instant Calculations",
      description: "Get immediate cost estimates with our advanced algorithm",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: Shield,
      title: "Industry Accurate",
      description: "Based on real market data and industry standards",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Suggestions to optimize your MVP development budget",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Clock,
      title: "Timeline Estimation",
      description: "Get development timeline along with cost breakdown",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Users,
      title: "Team Size Planning",
      description: "Optimal team composition recommendations",
      color: "bg-violet-100 text-violet-600",
    },
    {
      icon: Lightbulb,
      title: "Smart Suggestions",
      description: "AI-powered recommendations for feature prioritization",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Target,
      title: "Market Analysis",
      description: "Competitive analysis and market positioning insights",
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
  title: "Why Choose Our App Maintenance Cost Estimator?",
  description: (
    <>
      Our comprehensive tool covers all aspects of app maintenance and provides
      accurate
      <br className="hidden md:block" /> cost estimates for sustainable app
      management.
    </>
  ),
  listData: [
    {
      icon: Shield,
      title: "Security Updates",
      description:
        "Calculate costs for security patches and vulnerability fixes",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Clock,
      title: "Regular Maintenance",
      description: "Estimate ongoing maintenance and monitoring costs",

      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: DollarSign,
      title: "Budget Planning",
      description: "Plan your annual maintenance budget with precision",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: BarChart,
      title: "Performance Optimization",
      description: "Cost analysis for app performance improvements",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Bell,
      title: "Feature Updates",
      description: "Estimate costs for new feature development and updates",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Wrench,
      title: "Bug Fixes",
      description: "Calculate ongoing bug fixing and issue resolution costs",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Zap,
      title: "Platform Updates",
      description: "Costs for iOS, Android, and web platform compatibility",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Users,
      title: "User Support",
      description: "Estimate customer support and user assistance costs",
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
  title: "Why Choose Our Estimator?",
  description:
    "Built by industry experts with real-world experience in MVP development",
  listData: [
    {
      icon: Target,
      title: "98% Accurate Estimates",
      description:
        "Based on analysis of 1000+ successful MVP launches across different industries",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description:
        "Get your timeline and cost estimates in seconds, not hours or days",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description:
        "Identify potential bottlenecks and risks before they impact your timeline",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Globe,
      title: "Multi-Platform Support",
      description:
        "Estimates for web apps, mobile apps, and cross-platform solutions",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Users,
      title: "Team Size Optimization",
      description:
        "Recommendations for optimal team composition and resource allocation",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description:
        "Industry benchmarks and competitive analysis for your MVP category",
      color: "bg-green-100 text-green-600",
    },
  ],
};
const featureComplexityVsTimelineEstimatorFeatures = {
  title: "Powerful Features for Accurate Estimation",
  description:
    "Our advanced estimation tool combines multiple factors to provide the most accurate development time predictions",
  listData: [
    {
      icon: Zap,
      title: "AI-Powered Analysis",
      description:
        "Advanced keyword analysis automatically detects complexity indicators in your feature descriptions.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Clock,
      title: "Accurate Time Estimates",
      description:
        "Get precise hour estimates based on proven methodologies and real project data.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: BarChart3,
      title: "Detailed Complexity Scoring",
      description:
        "Comprehensive scoring system evaluates multiple complexity factors for better accuracy.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Users,
      title: "Team Planning Insights",
      description:
        "Receive recommendations on team composition and skill levels required for your project.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description:
        "Identify potential risks and challenges before starting development to avoid surprises.",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description:
        "Our algorithm improves over time using feedback from thousands of completed projects.",
      color: "bg-green-100 text-green-600",
    },
  ],
};
const testingQATimelineEstimatorFeatures = {
  title: "Powerful Features for Accurate Estimates",
  description:
    "Our Testing & QA Timeline Calculator comes packed with advanced features to ensure your project planning is precise and reliable",
  listData: [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description:
        "Advanced algorithms analyze your project complexity and provide intelligent timeline estimates.",
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
  title: "Why Choose Our Tool?",
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
        "Machine learning evaluates your requirements to recommend the most suitable technology combinations.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Shield,
      title: "Security Assessment",
      description:
        "Includes security considerations and best practices for every recommended stack.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Market Trends",
      description:
        "Suggestions reflect current market adoption and future technology outlooks.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Users,
      title: "Team Compatibility",
      description:
        "Aligns stack choices with your team’s existing skills and learning curve.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Clock,
      title: "Development Speed",
      description:
        "Highlights technologies that accelerate delivery and reduce time-to-market.",
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
        "Recommends databases and storage solutions tailored to your data needs.",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      icon: Globe,
      title: "Global Deployment",
      description:
        "Considers hosting and deployment strategies for worldwide reach.",
      color: "bg-violet-100 text-violet-600",
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description:
        "Offers stacks suited for web, mobile, and desktop applications.",
      color: "bg-lime-100 text-lime-600",
    },
  ],
};
const databaseSelectorToolFeatures = {
  title: "Why Choose Our Tool?",
  description: "Powerful features that make database selection effortless",
  listData: [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Advanced algorithms analyze your project complexity and provide intelligent timeline estimates.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Shield,
      title: "Expert Validated",
      description:
        "Recommendations based on industry best practices and real-world experience.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: TrendingUp,
      title: "Future-Proof",
      description:
        "Considers scalability and growth potential in recommendations.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Users,
      title: "Team Focused",
      description: "Factors in your team's expertise and learning curve.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Eliminate weeks of research and trial-and-error decisions",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: BarChart3,
      title: "Data-Driven",
      description: "Objective analysis based on quantifiable factors.",
      color: "bg-indigo-100 text-indigo-600",
    },
  ],
};
const crossPlatformVsNativeAnalyzerFeatures = {
  title: "Powerful Analysis Features",
  description:
    "Advanced capabilities that provide comprehensive insights for your mobile development decisions",
  listData: [
    {
      icon: Calculator,
      title: "Smart Analysis Algorithm",
      description:
        "Advanced algorithm considers 15+ factors to provide accurate recommendations",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Cost-Benefit Analysis",
      description:
        "Detailed breakdown of development costs, timeline, and long-term maintenance",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description:
        "Identifies potential risks and challenges for each development approach",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Rocket,
      title: "Implementation Roadmap",
      description:
        "Step-by-step guidance for executing your chosen development strategy",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Award,
      title: "Industry Standards",
      description:
        "Recommendations based on current industry best practices and trends",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Users,
      title: "Team Optimization",
      description:
        "Matches development approach with your team's skills and resources",
      color: "bg-indigo-100 text-indigo-600",
    },
  ],
};
const apiIntegrationFeasibiltyCheckerFeatures = {
  title: "Powerful Features",
  description:
    "Our comprehensive assessment tool provides everything you need to make informed decisions about your API integration projects",
  listData: [
    {
      icon: Zap,
      title: "Instant Analysis",
      description:
        "Get results in seconds with our AI-powered assessment engine that processes your requirements instantly",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description:
        "Identify potential risks and challenges before they impact your project timeline and budget",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: BarChart3,
      title: "Success Scoring",
      description:
        "Receive a numerical score based on industry benchmarks and historical project data",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Clock,
      title: "Timeline Estimation",
      description:
        "Get accurate time estimates for your integration project based on complexity and resources",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: TrendingUp,
      title: "Optimization Tips",
      description:
        "Receive actionable recommendations to improve your project's chances of success",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Award,
      title: "Best Practices",
      description:
        "Access industry best practices and proven methodologies for API integrations",
      color: "bg-indigo-100 text-indigo-600",
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
