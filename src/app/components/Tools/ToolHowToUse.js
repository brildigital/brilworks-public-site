import React from "react";
import {
  ArrowRight,
  Calculator,
  Code,
  DollarSign,
  FileText,
  Settings,
  Smartphone,
  Zap,
} from "lucide-react";
import Heading from "../HTMLComponents/Heading";
import { usePathname } from "next/navigation";

const projectEstimateSteps = {
  title: "Get your software cost estimate in 3 steps!",
  description:
    "Our intelligent calculator provides instant, accurate estimates based on your specific requirements",
  listData: [
    {
      icon: Settings,
      title: "Choose Your Platform & Features",
      description:
        "Select your target platform, project complexity, and desired features from our comprehensive list",
    },
    {
      icon: FileText,
      title: "Specify Design & Timeline",
      description:
        "Define your design requirements and project timeline to get the most accurate estimate",
    },
    {
      icon: DollarSign,
      title: "Get Instant Cost Estimate",
      description:
        "Receive a detailed breakdown of your project costs with transparent pricing information",
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
      <br className="hidden md:block" /> accurate cost estimate
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
const ToolHowToUse = () => {
  const pathname = usePathname();

  const showDataBasedOnPathname = {
    "/tools/project-estimate/": projectEstimateSteps,
    "/tools/roi-calculator/": roiCalculatorSteps,
    "/tools/mobility-app-development-calculator/":
      mobilityAppDevCalculatorSteps,
  };

  const stepsData = showDataBasedOnPathname[pathname] || {};

  return (
    <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <section className="container max-w-6xl mx-auto main-section-padding">
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
              stepsData?.listData.length === 4
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
