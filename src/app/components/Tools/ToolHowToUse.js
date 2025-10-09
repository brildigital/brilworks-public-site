import React from "react";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Calculator,
  CheckCircle,
  ClipboardList,
  Clock,
  Cloud,
  Code,
  Cpu,
  DollarSign,
  FileText,
  Layers,
  Lightbulb,
  Rocket,
  Server,
  Settings,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import Heading from "../HTMLComponents/Heading";
import { usePathname } from "next/navigation";

const projectEstimateSteps = {
  title: "Get your software cost estimate in 3 steps!",
  description:
    "Our intelligent software development cost calculator uses proven estimation methods to generate realistic projections.",
  listData: [
    {
      icon: Settings,
      title: "Choose Your Platform & Features",
      description:
        "Building for mobile, web, or desktop? Select the features you need, like chat, GPS, or payments, and get a clear, accurate estimate.",
    },
    {
      icon: FileText,
      title: "Define Design & Timeline",
      description:
        "Specify your design needs and project duration. Whether you need a simple interface or a complex UI, a short sprint or a long-term build, the calculator adjusts your estimate accordingly.",
    },
    {
      icon: DollarSign,
      title: "Receive Instant Estimate",
      description:
        "Get a detailed breakdown with clear pricing. No hidden costs, just a transparent view of your project budget.",
    },
  ],
};

const roiCalculatorSteps = {
  title: "How Our ROI Calculator Works",
  description: "Get your app cost and ROI in 3 simple steps:",
  listData: [
    {
      icon: Settings,
      title: "Define Your App",
      description:
        "Select your app type, complexity, and essential features. Choose between native, hybrid, or web app development to see how each option impacts your ROI.",
    },
    {
      icon: FileText,
      title: "Input Project Details",
      description:
        "Provide project timeline, team size, development rates, and projected revenue. Our roi calculation software uses this data for accurate cost and ROI estimates.",
    },
    {
      icon: DollarSign,
      title: "Get Instant Results",
      description:
        "Receive a detailed breakdown of development costs, ROI, and payback periods in real time. Adjust inputs to explore multiple scenarios and optimize your investment return",
    },
  ],
};

const mobilityAppDevCalculatorSteps = {
  title: "How We Calculate Your App Cost",
  description: (
    <>
      Our intelligent algorithm considers multiple factors to provide you with
      the most
      <br className="hidden md:block" /> accurate app development cost
      breakdown.
    </>
  ),
  listData: [
    {
      icon: Code,
      title: "Choose Complexity",
      description:
        "Select from Basic, Standard, or Premium app complexity levels.",
    },
    {
      icon: Smartphone,
      title: "Select Platforms",
      description: "Pick iOS, Android, or both platforms for your app",
    },
    {
      icon: Zap,
      title: "Pick Features",
      description: "Choose essential features like GPS, payments, and tracking",
    },
    {
      icon: Calculator,
      title: "Get Estimate",
      description: "Receive instant, detailed cost breakdown for your project",
    },
  ],
};

const SaasDevCostCalculatorSteps = {
  title: "How Our SaaS Calculator Works",
  description: (
    <>
      Our SaaS development cost calculator simplifies the budgeting process.{" "}
      <br className="hidden md:block" />
      Whether you're building a SaaS MVP or a full-scale platform, follow these
      steps:
    </>
  ),
  listData: [
    {
      icon: Target,
      title: "Define Requirements",
      description: "Choose your platform, complexity level, and core features.",
    },
    {
      icon: Code,
      title: "Select Features",
      description: "Pick from essential SaaS features.",
    },
    {
      icon: Clock,
      title: "Set Timeline",
      description: "Specify your desired timeline and expectations.",
    },
    {
      icon: DollarSign,
      title: "Get Estimate",
      description: "Receive a detailed breakdown with recommendations.",
    },
  ],
};

const mvpDevCostCalculatorSteps = {
  title: "How the MVP Calculator Works",
  description:
    "Follow these simple steps to calculate your MVP development cost:",
  listData: [
    {
      icon: FileText,
      title: "Describe Your MVP",
      description: "Provide your app idea, target market, and core features. ",
    },
    {
      icon: Settings,
      title: "Select Development Type",
      description: "Choose between web app, mobile app, or both. ",
    },
    {
      icon: Calculator,
      title: "Configure Features",
      description:
        "Pick your complexity level, features, and any special integrations.",
    },
    {
      icon: DollarSign,
      title: "Get Your MVP Cost Estimate",
      description: "Receive a detailed MVP calculation with budget breakdown.",
    },
  ],
};
const appMaintenanceCostEstimatorSteps = {
  title: "How to Calculate App Maintenance Costs",
  description:
    "Follow these simple steps to get a precise estimate for your app’s ongoing upkeep:",
  listData: [
    {
      icon: FileText,
      title: "App Information",
      description:
        "Choose your platforms (iOS, Android, Web) and define the complexity level.",
    },
    {
      icon: Smartphone,
      title: "Platform & Complexity",
      description:
        "Select your app platforms (iOS, Android, Web) and specify the complexity level of your application.",
    },
    {
      icon: Calculator,
      title: "Maintenance Scope",
      description:
        "Select the types of maintenance: bug fixes, updates, performance tuning, security patches.",
    },
    {
      icon: TrendingUp,
      title: "Get Cost Breakdown",
      description:
        "Receive detailed monthly and yearly cost estimates, including resource allocation.",
    },
  ],
};
const appDevTimelineCalculatorSteps = {
  title: "How It Works",
  description:
    "Get accurate app development estimates in 4 simple steps. Our AI-powered calculator analyzes your requirements and provides detailed insights.",
  listData: [
    {
      icon: Settings,
      title: "Define Your Project",
      description: "Select app type, target platforms, and core features",
    },
    {
      icon: Target,
      title: "Specify Requirements",
      description:
        "Choose complexity level, timeline preferences, and budget range",
    },
    {
      icon: FileText,
      title: "Add Description",
      description:
        "Describe your app concept with key features and functionality",
    },
    {
      icon: DollarSign,
      title: "Get Estimates",
      description:
        "Receive detailed timeline, cost, and resource recommendations",
    },
  ],
};
const mvpDevTimelineEstimatorSteps = {
  title: "How to Create MVP Product in 3 Steps",
  description: "Get your MVP timeline estimate in 3 simple steps",
  listData: [
    {
      icon: Code,
      title: "Define MVP Stages",
      description:
        "Select your project type, complexity, and essential features to outline your minimum viable product strategy.",
    },
    {
      icon: Zap,
      title: "AI-Driven MVP Timeline Analysis",
      description:
        "Our algorithm compares your inputs with our database of MVP launches to generate a tailored MVP development process.",
    },
    {
      icon: TrendingUp,
      title: "Receive Your MVP Timeline & Cost",
      description:
        "Get a detailed breakdown of development phases, estimated cost, and team size recommendations.",
    },
  ],
};
const featureComplexityVsTimelineEstimatorSteps = {
  title: "How to Estimate Feature Complexity for Software Projects",
  description:
    "Follow these simple steps to get accurate time estimates for your development projects",
  listData: [
    {
      icon: Target,
      title: "Define Feature Scope",
      description:
        "Describe your software feature including core functionality and expected outcomes.",
    },
    {
      icon: Layers,
      title: "Rate Complexity",
      description:
        "Evaluate UI complexity, data integration, business logic, platform needs, and security.",
    },
    {
      icon: Calculator,
      title: "Generate Time Estimate",
      description:
        "Get AI-powered time predictions with complexity scores and planning",
    },
    {
      icon: CheckCircle,
      title: "Plan Resources & Timeline",
      description:
        "Use insights to allocate team resources, set delivery milestones, and reduce risk.",
    },
  ],
};
const testingQATimelineEstimatorSteps = {
  title: "How to Calculate Your Testing Timeline",
  description:
    "Follow these simple steps to get accurate software testing time estimation for your project:",
  listData: [
    {
      icon: FileText,
      title: "Input Project Details",
      description:
        "Enter your project requirements, complexity, and testing scope.",
    },
    {
      icon: Settings,
      title: "Configure Parameters",
      description: "Set testing types, team size, and quality requirements.",
    },
    {
      icon: Calculator,
      title: "AI Analysis",
      description:
        "Our algorithm analyzes your inputs and industry benchmarks.",
    },
    {
      icon: CheckCircle,
      title: "Get Timeline",
      description:
        "Receive detailed QA planning calculator breakdown with actionable insights.",
    },
  ],
};
const goToMarketPlacePlannerSteps = {
  title: "How the Go-to-Market Timeline Planner Works",
  description:
    "Follow these simple steps to create a comprehensive timeline that ensures your product launch success",
  listData: [
    {
      icon: FileText,
      title: "Input Your Details",
      description:
        "Enter your product type, target market, team size, and budget range.",
    },
    {
      icon: Settings,
      title: "AI-Driven Timeline Analysis",
      description:
        "Our algorithm benchmarks your inputs against industry data to generate a custom launch roadmap.",
    },
    {
      icon: BarChart3,
      title: "Milestone-Based Execution",
      description:
        "Plan Receive a detailed timeline with critical milestones and actionable tasks.",
    },
    {
      icon: Rocket,
      title: "Launch with Confidence",
      description:
        "Follow your optimized roadmap to ensure a successful market entry.",
    },
  ],
};
const techStackRecommenderSteps = {
  title: "How It Works",
  description: "Get your ideal technology stack in 4 simple steps:",
  listData: [
    {
      icon: ClipboardList,
      title: "Fill Out Requirements",
      description:
        "Choose your project type, scale, team size, timeline, and budget.",
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description:
        "Our system compares your inputs with thousands of successful project patterns.",
    },
    {
      icon: Zap,
      title: "Get Recommendations",
      description:
        "Receive personalized suggestions with pros, cons, and alternatives.",
    },
    {
      icon: CheckCircle,
      title: "Make Informed Decision",
      description:
        "Compare options and select the scalable tech stack that fits your needs.",
    },
  ],
};
const databaseSelectorToolSteps = {
  title: "How It Works",
  description: "Get your perfect database recommendation in 3 simple steps",
  listData: [
    {
      icon: FileText,
      title: "Describe Your Project",
      description:
        "Select your project type and provide details like data volume, scalability needs, and team expertise.",
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: (
        <>
          Our algorithm compares your inputs with proven database capabilities,
          including <b>PostgreSQL, MongoDB,</b> and <b>MySQL.</b>
        </>
      ),
    },
    {
      icon: Zap,
      title: "Get Recommendations",
      description:
        "Receive ranked suggestions tailored to your use case, with pros, cons, and ideal scenarios.",
    },
  ],
};
const crossPlatformVsNativeAnalyzerSteps = {
  title: "How It Works",
  description:
    "Our intelligent mobile app development analyzer guides you through a systematic process to determine the best development approach for your app.",
  listData: [
    {
      icon: Target,
      title: "Define Your Requirements",
      description:
        "Specify your project type, target platforms, and core app requirements.",
    },
    {
      icon: Clock,
      title: "Set Budget & Timeline",
      description: "Input your budget constraints and development timeline.",
    },
    {
      icon: Zap,
      title: "Analyze Performance Needs",
      description:
        "Determine if your app requires high performance or standard functionality.",
    },
    {
      icon: Lightbulb,
      title: "Get Recommendation",
      description:
        "Receive a detailed analysis with reasoning and implementation guidance.",
    },
  ],
};
const apiIntegrationFeasibiltyCheckerSteps = {
  title: "How It Works",
  description:
    "Follow these simple steps to perform a comprehensive API integration feasibility assessment:",
  listData: [
    {
      icon: Code,
      title: "Project Details",
      description:
        "Provide your API type, complexity, and integration requirements.",
    },
    {
      icon: Users,
      title: "Resource Assessment",
      description:
        "Enter your timeline, budget constraints, and team expertise.",
    },
    {
      icon: Cpu,
      title: "AI Analysis",
      description:
        "Our advanced algorithm compares your inputs against thousands of successful API projects.",
    },
    {
      icon: BarChart3,
      title: "Get Results",
      description:
        "Receive a detailed feasibility score with personalized recommendations, timeline estimates, and best practices.",
    },
  ],
};
const cloudServiceCostEstimatorSteps = {
  title: "How to Calculate Cloud Costs",
  description:
    "Follow these simple steps to get precise cost estimates for your cloud services:",
  listData: [
    {
      icon: Cloud,
      title: "Select Service Type",
      description: "Choose the cloud service you need to estimate costs for",
    },
    {
      icon: Server,
      title: "Configure Resources",
      description: "Specify your compute, storage, and network requirements",
    },
    {
      icon: BarChart3,
      title: "Add Description",
      description: "Describe your use case to improve pricing accuracy.",
    },
    {
      icon: DollarSign,
      title: "Get Estimate",
      description:
        "Receive a detailed cost breakdown and recommendations for optimization.",
    },
  ],
};
const saasProfitabilityCalculatorSteps = {
  title: "How It Works",
  description:
    "Follow these simple steps to get comprehensive insights into your SaaS business profitability",
  listData: [
    {
      icon: DollarSign,
      title: "Enter Revenue Data",
      description:
        "Input your monthly recurring revenue and key financial figures",
    },
    {
      icon: Users,
      title: "Add Customer Metrics",
      description:
        "Include customer acquisition cost (CAC), lifetime value (LTV), and churn rate",
    },
    {
      icon: BarChart3,
      title: "Include Operating Costs",
      description: "Add gross margin and monthly operating expenses",
    },
    {
      icon: Target,
      title: "View Your Results",
      description:
        "Instantly receive a detailed profitability report with growth projections",
    },
  ],
};
const customerAcquisitionCostEstimatorSteps = {
  title: "How to Calculate CAC",
  description:
    "Follow these simple steps using our customer acquisition cost calculator to accurately estimate your CAC and improve your marketing strategy:",
  listData: [
    {
      icon: DollarSign,
      title: "Calculate Total Marketing Spend",
      description: "Include all advertising, content, staff, and tool costs.",
      details: [
        "Paid advertising costs",
        "Content creation expenses",
        "Marketing team salaries",
        "Marketing tools and software",
      ],
    },
    {
      icon: Users,
      title: "Count New Customers Acquired",
      description: "Track first-time buyers across all channels.",
      details: [
        "First-time buyers only",
        "Exclude returning customers",
        "Track from all marketing channels",
        "Use consistent time periods",
      ],
    },
    {
      icon: Calculator,
      title: "Apply the CAC Formula",
      description:
        "Use our customer acquisition cost calculator to divide spend by new customers.",
      details: [
        "CAC = Total Marketing Spend ÷ New Customers",
        "Use same time period for both metrics",
        "Include all related costs",
        "Round to nearest cent",
      ],
    },
    {
      icon: TrendingUp,
      title: "Analyze and Optimize",
      description:
        "Compare CAC with industry benchmarks and customer lifetime value.",
      details: [
        "Compare with CLV ratio",
        "Benchmark against competitors",
        "Track trends over time",
        "Optimize high-cost channels",
      ],
    },
  ],
};
const calculateCustomerLifetimeSteps = {
  title: "How to Use the LTV Calculator",
  description: "Follow these four simple steps to get accurate insights:",
  listData: [
    {
      title: "Gather Customer Data",
      description:
        "Input your average order value, purchase frequency, and customer lifespan.",
      icon: Users,
    },
    {
      title: "Calculate Base Metrics",
      description:
        "Multiply average order value by purchase frequency and lifespan.",
      icon: Calculator,
    },
    {
      title: "Apply Retention Factors",
      description:
        "Adjust for churn and retention rates to refine your ltv calculator for app or SaaS model.",
      icon: TrendingUp,
    },
    {
      title: "Analyze Results",
      description:
        "Use our ltv to cac ratio calculator to compare LTV with acquisition costs and optimize your ROI.",
      icon: BarChart3,
    },
  ],
};
const automationSavingEstimatorSteps = {
  title: "How to Calculate Automation Savings in 4 Steps",
  description:
    "Follow our proven methodology to accurately estimate the financial impact of automation on your business operations.",
  listData: [
    {
      title: "Identify Processes",
      description:
        "Analyze manual workflows and pinpoint tasks that consume excessive time and resources.",
      icon: Target,
    },
    {
      title: "Gather Data",
      description:
        "Collect key metrics: employee costs, task frequency, time spent, and error rates.",
      icon: BarChart3,
    },
    {
      title: "Estimate ROI",
      description:
        "Use our calculator to determine your process automation ROI based on time saved, cost reduction, and productivity gains.",
      icon: Calculator,
    },
    {
      title: "Plan Implementation",
      description:
        "Build a roadmap with budget estimates, timelines, and stakeholder-ready ROI projections.",
      icon: Workflow,
    },
  ],
};
const mvpFeatureSelectorQuizSteps = {
  title: "How to Calculate Automation Savings in 4 Steps",
  description:
    "Follow our proven methodology to accurately estimate the financial impact of automation on your business operations.",
  listData: [
    {
      title: "Gather Customer Data",
      description:
        "Collect information about average order value, purchase frequency, and customer behavior patterns.",
      icon: Users,
    },
    {
      title: "Calculate Base Metrics",
      description:
        "Multiply average order value by purchase frequency and customer lifespan period.",
      icon: Calculator,
    },
    {
      title: "Apply Retention Factors",
      description:
        "Adjust calculations based on customer retention rates and churn patterns.",
      icon: TrendingUp,
    },
    {
      title: "Analyze Results",
      description:
        "Compare LTV to acquisition costs and use insights to optimize your marketing strategy.",
      icon: BarChart3,
    },
  ],
};

const ToolHowToUse = () => {
  const pathname = usePathname();

  const showDataBasedOnPathname = {
    "/tools/project-estimate/": projectEstimateSteps,
    "/tools/roi-calculator/": roiCalculatorSteps,
    "/tools/mobility-app-development-calculator/":
      mobilityAppDevCalculatorSteps,
    "/tools/saas-development-cost-calculator/": SaasDevCostCalculatorSteps,
    "/tools/mvp-development-cost-calculator/": mvpDevCostCalculatorSteps,
    "/tools/app-maintenance-cost-estimator/": appMaintenanceCostEstimatorSteps,
    "/tools/app-development-timeline-calculator/":
      appDevTimelineCalculatorSteps,
    "/tools/mvp-launch-timeline-estimator/": mvpDevTimelineEstimatorSteps,
    "/tools/feature-complexity-vs-time-estimator/":
      featureComplexityVsTimelineEstimatorSteps,
    "/tools/testing-qa-timeline-estimator/": testingQATimelineEstimatorSteps,
    "/tools/go-to-market-timeline-planner/": goToMarketPlacePlannerSteps,
    "/tools/tech-stack-recommender/": techStackRecommenderSteps,
    "/tools/database-selector-tool/": databaseSelectorToolSteps,
    "/tools/cross-platform-vs-native-analyzer/":
      crossPlatformVsNativeAnalyzerSteps,
    "/tools/api-integration-feasibility-checker/":
      apiIntegrationFeasibiltyCheckerSteps,
    "/tools/cloud-service-cost-estimator/": cloudServiceCostEstimatorSteps,
    "/tools/saas-profitability-calculator/": saasProfitabilityCalculatorSteps,
    "/tools/customer-acquisition-cost-estimator/":
      customerAcquisitionCostEstimatorSteps,
    "/tools/lifetime-value-calculator/": calculateCustomerLifetimeSteps,
    "/tools/automation-saving-estimator/": automationSavingEstimatorSteps,
    "/tools/mvp-feature-selector-quiz/": mvpFeatureSelectorQuizSteps,
  };

  const stepsData = showDataBasedOnPathname[pathname] || {};

  return (
    <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <section
        className={`container ${
          stepsData?.listData?.length === 4 ? "max-w-7xl" : "max-w-6xl"
        } mx-auto main-section-padding`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <Heading
            type="h2"
            className="lg:!text-[34px] md:!text-3xl !text-2xl !font-bold mb-4"
            text={stepsData?.title}
          />
        </div>
        <div>
          <div className="text-center mb-8 md:mb-10 lg:mb-16">
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              {stepsData?.description}
            </p>
          </div>

          <div
            className={`grid gap-8 ${
              stepsData?.listData?.length === 4
                ? "md:grid-cols-4 grid-cols-1"
                : "md:grid-cols-3 grid-cols-1"
            }`}
          >
            {stepsData?.listData?.map((step, index) => (
              <div key={index} className="relative group h-full">
                <div
                  className="bg-white rounded-2xl shadow-lg py-8 px-5 text-center hover:shadow-xl 
              transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
                >
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div
                      className="bg-themeColor text-white w-8 h-8 rounded-full 
                  flex items-center justify-center font-bold text-sm"
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-themeColor" />
                  </div>
                  <div className="flex-1 h-full">
                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="">
                    {step.details && (
                      <ul className="mt-2.5 min-h-[140px] border-t pt-2.5 list-disc marker:text-themeColor text-left font-medium text-sm text-gray-600 pl-4">
                        {step.details?.map((pro, i) => (
                          <li key={i}>{pro}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Arrow except for last item */}
                {index < stepsData?.listData?.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-1">
                    <ArrowRight className="w-6 h-6 text-themeColor" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToolHowToUse;
