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
  title: "How to Calculate SaaS Development Costs",
  description: (
    <>
      Follow our simple 4-step process to get an accurate estimate
      <br className="hidden md:block" /> for your SaaS project
    </>
  ),
  listData: [
    {
      icon: Target,
      title: "Define Requirements",
      description:
        "Select your platform, complexity level, and core features needed for your SaaS application.",
    },
    {
      icon: Code,
      title: "Choose Features",
      description:
        "Pick from our comprehensive list of SaaS features like authentication, payments, and analytics.",
    },
    {
      icon: Clock,
      title: "Set Timeline",
      description:
        "Specify your desired timeline and design requirements to get accurate cost calculations.",
    },
    {
      icon: DollarSign,
      title: "Get Estimate",
      description:
        "Receive your instant cost estimate with detailed breakdown and recommendations.",
    },
  ],
};

const mvpDevCostCalculatorSteps = {
  title: "How to Calculate Your MVP Cost",
  description:
    "Follow these simple steps to get an accurate estimate for your MVP development project",
  listData: [
    {
      icon: FileText,
      title: "Describe Your Project",
      description:
        "Provide details about your MVP idea, target market, and key features you want to include.",
    },
    {
      icon: Settings,
      title: "Select Development Type",
      description:
        "Choose between web app, mobile app, or both based on your target audience and business needs.",
    },
    {
      icon: Calculator,
      title: "Configure Features",
      description:
        "Select the complexity level, number of features, and any special requirements for your MVP.",
    },
    {
      icon: DollarSign,
      title: "Get Instant Estimate",
      description:
        "Receive a detailed cost breakdown including development time, resources, and budget allocation.",
    },
  ],
};
const appMaintenanceCostEstimatorSteps = {
  title: "How to Calculate App Maintenance Costs",
  description:
    "Follow these simple steps to get accurate maintenance and update cost estimates for your application",
  listData: [
    {
      icon: FileText,
      title: "App Information",
      description:
        "Provide details about your app type, current version, user base, and maintenance requirements.",
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
        "Choose maintenance types: bug fixes, feature updates, security patches, performance optimization.",
    },
    {
      icon: TrendingUp,
      title: "Get Cost Breakdown",
      description:
        "Receive detailed monthly and yearly maintenance costs with timeline and resource allocation.",
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
  title: "How It Works",
  description: "Get your MVP timeline estimate in 3 simple steps",
  listData: [
    {
      icon: Code,
      title: "Input Requirements",
      description:
        "Tell us about your project type, complexity, and desired features",
    },
    {
      icon: Zap,
      title: "AI Analysis",
      description:
        "Our algorithm analyzes your requirements against our database of 1000+ projects",
    },
    {
      icon: TrendingUp,
      title: "Get Estimates",
      description:
        "Receive detailed timeline, cost breakdown, and development phases",
    },
  ],
};
const featureComplexityVsTimelineEstimatorSteps = {
  title: "How to Calculate Feature Complexity",
  description:
    "Follow these simple steps to get accurate time estimates for your development projects",
  listData: [
    {
      icon: Target,
      title: "Define Feature Requirements",
      description:
        "Describe your feature in detail including all functional requirements and desired outcomes.",
    },
    {
      icon: Layers,
      title: "Assess Complexity Factors",
      description:
        "Rate different aspects like UI complexity, data integration needs, and business logic requirements.",
    },
    {
      icon: Calculator,
      title: "Get Time Estimation",
      description:
        "Receive accurate time estimates with complexity scores and development recommendations.",
    },
    {
      icon: CheckCircle,
      title: "Plan Development",
      description:
        "Use insights to plan resources, timeline, and development approach for your project.",
    },
  ],
};
const testingQATimelineEstimatorSteps = {
  title: "How to Calculate Your Testing Timeline",
  description:
    "Follow these simple steps to get accurate testing estimates for your project",
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
        "Receive detailed timeline breakdown with actionable insights.",
    },
  ],
};
const goToMarketPlacePlannerSteps = {
  title: "How Our Go-to-Market Planner Works",
  description:
    "Follow these simple steps to create a comprehensive timeline that ensures your product launch success",
  listData: [
    {
      icon: FileText,
      title: "Input Your Details",
      description:
        "Provide information about your product, target market, and business objectives.",
    },
    {
      icon: Settings,
      title: "AI Analysis",
      description:
        "Our advanced algorithm analyzes your inputs and industry benchmarks.",
    },
    {
      icon: BarChart3,
      title: "Timeline Generation",
      description:
        "Receive a customized timeline with milestones and critical path analysis.",
    },
    {
      icon: Rocket,
      title: "Execute & Launch",
      description:
        "Follow your optimized roadmap to achieve a successful market entry.",
    },
  ],
};
const techStackRecommenderSteps = {
  title: "How It Works",
  description:
    "Get your perfect tech stack recommendation in just 4 simple steps",
  listData: [
    {
      icon: ClipboardList,
      title: "Fill Out Requirements",
      description:
        "Provide details about your project type, scale, team size, and specific requirements.",
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description:
        "Our intelligent system analyzes your inputs against thousands of successful project patterns.",
    },
    {
      icon: Zap,
      title: "Get Recommendations",
      description:
        "Receive personalized tech stack suggestions with detailed explanations and alternatives.",
    },
    {
      icon: CheckCircle,
      title: "Make Informed Decision",
      description:
        "Compare options, view pros/cons, and select the perfect stack for your project success.",
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
        "Tell us about your project type, data volume, scalability needs, and team expertise.",
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description:
        "Our intelligent algorithm analyzes your requirements against database capabilities.",
    },
    {
      icon: Zap,
      title: "Get Recommendations",
      description:
        "Receive ranked database suggestions with detailed pros, cons, and use cases.",
    },
  ],
};
const crossPlatformVsNativeAnalyzerSteps = {
  title: "How It Works",
  description:
    "Our intelligent analyzer guides you through a systematic process to determine the best development approach for your mobile app",
  listData: [
    {
      icon: Target,
      title: "Define Your Requirements",
      description:
        "Specify your project type, target platforms, and core requirements",
    },
    {
      icon: Clock,
      title: "Set Budget & Timeline",
      description:
        "Input your budget constraints and development timeline expectations",
    },
    {
      icon: Zap,
      title: "Analyze Performance Needs",
      description:
        "Determine if your app requires high performance or standard functionality",
    },
    {
      icon: Lightbulb,
      title: "Get Recommendation",
      description:
        "Receive a detailed analysis with reasoning and implementation guidance",
    },
  ],
};
const apiIntegrationFeasibiltyCheckerSteps = {
  title: "How It Works",
  description:
    "Follow these simple steps to get a comprehensive feasibility assessment for your API integration project",
  listData: [
    {
      icon: Code,
      title: "Project Details",
      description:
        "Provide information about your API type, complexity, and integration requirements",
    },
    {
      icon: Users,
      title: "Resource Assessment",
      description:
        "Tell us about your timeline, budget constraints, and team expertise level",
    },
    {
      icon: Cpu,
      title: "AI Analysis",
      description:
        "Our advanced algorithm analyzes your inputs against thousands of successful projects",
    },
    {
      icon: BarChart3,
      title: "Get Results",
      description:
        "Receive a detailed feasibility score with personalized recommendations and timeline estimates",
    },
  ],
};
const cloudServiceCostEstimatorSteps = {
  title: "How to Calculate Cloud Costs",
  description:
    "Follow these simple steps to get accurate cost estimates for your cloud infrastructure needs.",
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
      description: "Describe your use case for more accurate pricing",
    },
    {
      icon: DollarSign,
      title: "Get Estimate",
      description: "Receive your detailed cost breakdown and recommendations",
    },
  ],
};
const saasProfitabilityCalculatorSteps = {
  title: "How to Calculate SaaS Profitability",
  description:
    "Follow these simple steps to get comprehensive insights into your SaaS business profitability",
  listData: [
    {
      icon: DollarSign,
      title: "Enter Revenue Data",
      description:
        "Input your monthly recurring revenue and key financial metrics",
    },
    {
      icon: Users,
      title: "Customer Metrics",
      description:
        "Add customer acquisition cost, lifetime value, and churn rate",
    },
    {
      icon: BarChart3,
      title: "Operating Costs",
      description:
        "Include your gross margin percentage and operating expenses",
    },
    {
      icon: Target,
      title: "Get Results",
      description:
        "Receive detailed profitability analysis and recommendations",
    },
  ],
};
const customerAcquisitionCostEstimatorSteps = {
  title: "How to Calculate Customer Acquisition Cost",
  description:
    "Follow these simple steps to accurately calculate your CAC and make informed marketing decisions",
  listData: [
    {
      icon: DollarSign,
      title: "Calculate Total Marketing Spend",
      description:
        "Sum up all marketing expenses including advertising, content creation, staff costs, and tools for a specific period.",
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
      description:
        "Identify the total number of new customers gained during the same time period as your marketing spend.",
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
        "Divide your total marketing spend by the number of new customers acquired to get your Customer Acquisition Cost.",
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
        "Compare your CAC against industry benchmarks and customer lifetime value to optimize your marketing strategy.",
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
  title: "How to Calculate LTV in 4 Simple Steps",
  description:
    "Follow our systematic approach to accurately determine your customer lifetime value and make informed business decisions.",
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
const automationSavingEstimatorSteps = {
  title: "How to Calculate Automation Savings in 4 Steps",
  description:
    "Follow our proven methodology to accurately estimate the financial impact of automation on your business operations.",
  listData: [
    {
      title: "Identify Processes",
      description:
        "Analyze current manual processes and identify repetitive tasks that consume significant time and resources.",
      icon: Target,
    },
    {
      title: "Gather Data",
      description:
        "Collect metrics on time spent, employee costs, task frequency, and current error rates for baseline measurement.",
      icon: BarChart3,
    },
    {
      title: "Calculate Potential",
      description:
        "Estimate time savings, cost reductions, and efficiency gains from implementing automation solutions.",
      icon: Calculator,
    },
    {
      title: "Plan Implementation",
      description:
        "Develop implementation timeline, budget requirements, and ROI projections for stakeholder approval.",
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
