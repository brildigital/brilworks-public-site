import React from "react";
import {
  Calculator,
  Sliders,
  CheckSquare,
  FileText,
  Clock,
  DollarSign,
} from "lucide-react";
import Heading from "../HTMLComponents/Heading";

const features = [
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
];

const ToolFeatures = () => {
  return (
    <section id="features" className="bg-gray-50">
      <div className="max-w-7xl mx-auto main-section-padding">
        <div className="text-center space-y-4 mb-8">
          <Heading
            type="h2"
            className="lg:!text-[34px] md:!text-3xl !text-2xl !font-bold mb-4"
            text="Powerful Features for Accurate Estimates"
          />
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
            Our cost calculator combines industry expertise with intelligent
            analysis to provide the most accurate software development estimates
            based on your specific requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group-hover:-translate-y-1 flex flex-col h-full">
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
