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
} from "lucide-react";
import Heading from "../HTMLComponents/Heading";
import { usePathname } from "next/navigation";

const projectEstimateFeatures = {
  title: "Powerful Features for Accurate Estimates",
  description:
    "Our cost calculator combines industry expertise with intelligent analysis to provide the most accurate software development estimates based on your specific requirements.",
  listData: [
    {
      icon: Calculator,
      title: "Instant Cost Estimation",
      description:
        "Get accurate project cost estimates in seconds. Our algorithm analyzes your platform, complexity, and feature requirements to provide realistic budget projections.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Sliders,
      title: "Platform & Complexity Selection",
      description:
        "Choose from multiple platforms (Web, Mobile, Desktop) and complexity levels. Our calculator adjusts pricing based on your specific technical requirements.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: CheckSquare,
      title: "Feature-Based Pricing",
      description:
        "Select from comprehensive feature sets including User Authentication, Payment Processing, Real-time Chat, GPS Services, and more to get precise cost breakdowns.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: FileText,
      title: "Project Description Analysis",
      description:
        "Describe your unique project requirements and our intelligent system will factor in custom features and complexity adjustments for more accurate estimates.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Clock,
      title: "Timeline Considerations",
      description:
        "Select your preferred project timeline and see how it affects the overall cost. Rush projects and extended timelines are factored into the final estimate.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: DollarSign,
      title: "Comprehensive Cost Breakdown",
      description:
        "Receive detailed cost analysis that considers platform requirements, design complexity, feature implementation, and project timeline for transparent pricing.",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};
const roiCalculatorFeatures = {
  title: "ROI Calculator Features",
  description: (
    <>
      Comprehensive tools and insights to make informed decisions about
      <br className="hidden md:block" /> your app development investment
    </>
  ),
  listData: [
    {
      icon: Calculator,
      title: "Real-time Calculations",
      description:
        "Instant updates as you modify inputs, helping you explore different scenarios and optimize your investment.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Accurate ROI Analysis",
      description:
        "Detailed return on investment calculations based on industry standards and market data.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: BarChart3,
      title: "Comprehensive Reports",
      description:
        "Detailed breakdown of development costs, maintenance expenses, and revenue projections.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Clock,
      title: "Timeline Planning",
      description:
        "Calculate payback periods and break-even points to plan your investment timeline effectively.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description:
        "Identify potential risks and mitigation strategies for your app development project.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Users,
      title: "Team Size Optimization",
      description:
        "Find the optimal team size and structure for your project timeline and budget constraints.",
      color: "bg-violet-100 text-violet-600",
    },
    {
      icon: Zap,
      title: "Feature Impact Analysis",
      description:
        "See how individual features affect your overall development cost and timeline.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: DollarSign,
      title: "Revenue Modeling",
      description:
        "Model different revenue scenarios and user acquisition strategies for better planning.",
      color: "bg-pink-100 text-pink-600",
    },
  ],
};
const mobilityAppDevCalculatorFeatures = {
  title: "Essential Features for Your Ride-Hailing App",
  description:
    "Discover the core features that make a successful Uber-like application",
  listData: [
    {
      icon: MapPin,
      title: "GPS & Navigation",
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
      title: "Real-time Tracking",
      description: "Live ride tracking and ETA updates",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Shield,
      title: "Safety Features",
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
      title: "Multi-language",
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

const ToolFeatures = () => {
  const pathname = usePathname();

  const showDataBasedOnPathname = {
    "/tools/project-estimate/": projectEstimateFeatures,
    "/tools/roi-calculator/": roiCalculatorFeatures,
    "/tools/mobility-app-development-calculator/":
      mobilityAppDevCalculatorFeatures,
  };

  const features = showDataBasedOnPathname[pathname] || {};
  return (
    <section id="features" className="bg-gray-50">
      <div className="max-w-7xl mx-auto main-section-padding">
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
