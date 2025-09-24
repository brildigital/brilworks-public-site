import React from "react";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Calculator,
  CheckCircle,
  ClipboardList,
  Clock,
  Code,
  DollarSign,
  FileText,
  Layers,
  Rocket,
  Settings,
  Smartphone,
  Target,
  TrendingUp,
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
  title: "Calculate Your App Cost in 3 Simple Steps",
  description:
    "Our streamlined process makes it easy to get accurate estimates for your mobile app project",
  listData: [
    {
      icon: Settings,
      title: "Define Your App",
      description:
        "Select your app type, complexity level, and required features. Choose between native, hybrid, or web app development.",
    },
    {
      icon: FileText,
      title: "Input Project Details",
      description:
        "Provide timeline, team size, rates, and revenue projections to get the most accurate cost and ROI calculations.",
    },
    {
      icon: DollarSign,
      title: "Get Instant Results",
      description:
        "Receive detailed cost breakdown, ROI analysis, and payback period calculations instantly as you update your inputs.",
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
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-8 h-8 rounded-full 
                  flex items-center justify-center font-bold text-sm"
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className="bg-gradient-to-r from-purple-100 to-blue-100 w-16 h-16 rounded-full 
                flex items-center justify-center mx-auto mb-6 group-hover:scale-110 
                transition-transform duration-300"
                  >
                    <step.icon className="w-8 h-8 text-purple-600" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>

                {/* Arrow except for last item */}
                {index < stepsData?.listData?.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-1">
                    <ArrowRight className="w-6 h-6 text-purple-400" />
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
