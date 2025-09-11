"use client";
import React, { useState, useRef } from "react";
import ToolHerosection from "./ToolHerosection";
import ToolHowToUse from "./ToolHowToUse";
import ToolFeatures from "./ToolFeatures";
import ToolFAQs from "./ToolFAQs";
import { ArrowRight, FileText, Star } from "lucide-react";

const RoiCalculator = () => {
  const [formData, setFormData] = useState({
    appType: "",
    complexity: "",
    features: [],
    timeline: "",
    designLevel: "",
    description: "",
    // hourlyRate: "",
    // maintenanceYears: "",
    // expectedUsers: "",
    // revenuePerUser: "",

    // appType: "native",
    // complexity: "medium",
    // features: [],
    // timeline: "6",
    // designLevel: "standard",
    // description: "",
    hourlyRate: "100",
    maintenanceYears: "3",
    expectedUsers: "10000",
    revenuePerUser: "5",
  });

  const [results, setResults] = useState({
    developmentCost: 0,
    maintenanceCost: 0,
    totalCost: 0,
    expectedRevenue: 0,
    roi: 0,
    paybackPeriod: 0,
  });

  const calculatorRef = useRef(null);

  const features = [
    { id: "auth", label: "User Authentication", cost: 15000 },
    { id: "payments", label: "Payment Processing", cost: 20000 },
    { id: "chat", label: "Real-time Chat", cost: 18000 },
    { id: "geolocation", label: "GPS/Location Services", cost: 14000 },
    { id: "camera", label: "Camera Integration", cost: 12000 },
    { id: "push", label: "Push Notifications", cost: 8000 },
    { id: "social", label: "Social Media Login", cost: 10000 },
    { id: "admin", label: "Admin Dashboard", cost: 16000 },
    { id: "analytics", label: "Analytics Dashboard", cost: 12000 },
    { id: "integrations", label: "Third-party Integrations", cost: 14000 },
  ];

  const complexityMultipliers = {
    simple: 0.7,
    medium: 1.0,
    complex: 1.5,
    enterprise: 2.0,
  };

  const appTypeMultipliers = {
    native: 1.0,
    hybrid: 0.8,
    web: 0.6,
  };

  const designMultipliers = {
    basic: 0.8,
    standard: 1.0,
    premium: 1.3,
    custom: 1.6,
  };

  const calculateROI = () => {
    const baseHours = parseInt(formData.timeline) * 160; // weeks * 40 hours
    const teamSize = 5; // Default team size
    const hourlyRate = parseInt(formData.hourlyRate);
    const complexityMultiplier = complexityMultipliers[formData.complexity];
    const appTypeMultiplier = appTypeMultipliers[formData.appType];
    const designMultiplier = designMultipliers[formData.designLevel];

    const selectedFeatures = formData.features;
    const featuresCost = selectedFeatures.reduce((total, featureId) => {
      const feature = features.find((f) => f.id === featureId);
      return total + (feature ? feature.cost : 0);
    }, 0);

    const baseDevelopmentCost =
      baseHours *
      teamSize *
      hourlyRate *
      complexityMultiplier *
      appTypeMultiplier *
      designMultiplier;
    const developmentCost = baseDevelopmentCost + featuresCost;

    const annualMaintenanceCost = developmentCost * 0.2; // 20% of development cost per year
    const maintenanceCost =
      annualMaintenanceCost * parseInt(formData.maintenanceYears);
    const totalCost = developmentCost + maintenanceCost;

    const expectedUsers = parseInt(formData.expectedUsers);
    const revenuePerUser = parseInt(formData.revenuePerUser);
    const expectedRevenue =
      expectedUsers * revenuePerUser * parseInt(formData.maintenanceYears);

    const roi =
      expectedRevenue > 0
        ? ((expectedRevenue - totalCost) / totalCost) * 100
        : 0;
    const paybackPeriod =
      expectedRevenue > 0
        ? totalCost / (expectedRevenue / parseInt(formData.maintenanceYears))
        : 0;

    setResults({
      developmentCost: Math.round(developmentCost),
      maintenanceCost: Math.round(maintenanceCost),
      totalCost: Math.round(totalCost),
      expectedRevenue: Math.round(expectedRevenue),
      roi: Math.round(roi * 100) / 100,
      paybackPeriod: Math.round(paybackPeriod * 100) / 100,
    });
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFeatureChange = (featureId) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter((id) => id !== featureId)
        : [...prev.features, featureId],
    }));
  };

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    calculateROI();
  }, [formData]);

  return (
    <>
      <ToolHerosection
        title={
          <>
            Calculate Your App's
            <br />
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              ROI
            </span>
          </>
        }
        description="Get accurate estimates for your mobile app development costs and potential return on investment. Make data-driven decisions with our comprehensive calculator. Start Calculating"
        imageSrc="/images/v2/roi-calculator-banner.webp"
        statsGird={[
          { value: "$50K+", label: "Apps Calculated" },
          { value: "95%", label: "Accuracy Rate" },
          { value: "2M+", label: "Users Helped" },
        ]}
      />
      <ToolHowToUse />
      <ToolFeatures />
      <section
        ref={calculatorRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ROI Calculator
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enter your project details to get an accurate estimate of
              development costs and potential returns
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-4">
              {/* Platform */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  Platform <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.appType}
                  onChange={(e) => handleInputChange("appType", e.target.value)}
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select your target platform</option>
                  <option value="native">Native iOS/Android</option>
                  <option value="hybrid">Hybrid (React Native/Flutter)</option>
                  <option value="web">Web Application</option>
                </select>
              </div>

              {/* Project Complexity */}
              <div className="space-y-1">
                <label className="text-lg font-semibold">
                  Project Complexity <span className="text-red-500">*</span>
                </label>

                <select
                  value={formData.complexity}
                  onChange={(e) =>
                    handleInputChange("complexity", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select complexity</option>
                  <option value="simple">Simple (Basic functionality)</option>
                  <option value="medium">Medium (Standard features)</option>
                  <option value="complex">Complex (Advanced features)</option>
                  <option value="enterprise">
                    Enterprise (Full-scale solution)
                  </option>
                </select>
              </div>

              {/* Key Features */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-900">
                  Key Features
                </label>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                  {features.map((feature) => (
                    <label
                      key={feature.id}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.features.includes(feature.id)}
                        onChange={() => handleFeatureChange(feature.id)}
                        className="rounded text-purple-600 focus:ring-purple-500 w-4 h-4"
                      />
                      <span className="text-sm text-gray-700">
                        {feature.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Design Requirements */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-900">
                  Design Requirements <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.designLevel}
                  onChange={(e) =>
                    handleInputChange("designLevel", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select design level</option>
                  <option value="basic">Basic Design</option>
                  <option value="standard">Standard Design</option>
                  <option value="premium">Premium Design</option>
                  <option value="custom">Custom Design</option>
                </select>
              </div>

              {/* Timeline */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-900">
                  Timeline <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) =>
                    handleInputChange("timeline", e.target.value)
                  }
                  className="w-full border rounded-lg p-3 bg-white"
                >
                  <option value="">Select timeline</option>
                  <option value="4">1 Month (4 weeks)</option>
                  <option value="8">2 Months (8 weeks)</option>
                  <option value="12">3 Months (12 weeks)</option>
                  <option value="16">4 Months (16 weeks)</option>
                  <option value="24">6 Months (24 weeks)</option>
                  <option value="36">9 Months (36 weeks)</option>
                  <option value="48">12 Months (48 weeks)</option>
                </select>
              </div>

              {/* Project Description */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-900">
                  Project Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Describe your app idea..."
                  rows={4}
                  className="w-full border rounded-lg p-3 bg-white"
                />
              </div>

              {/* Get Quote Button */}
              <button
                onClick={calculateROI}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FileText className="w-5 h-5" />
                <span>Get My Instant Quote</span>
              </button>
            </div>

            {/* Cost Estimate */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Cost Estimate
              </h3>

              {results.developmentCost > 0 ? (
                <div className="space-y-6">
                  {/* Main Cost Display */}
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Star className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      ${results.developmentCost.toLocaleString()}
                    </div>
                    <p className="text-gray-600">Estimated Development Cost</p>
                  </div>

                  {/* Cost Breakdown */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600">Development</span>
                      <span className="font-semibold text-gray-900">
                        ${results.developmentCost.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600">Annual Maintenance</span>
                      <span className="font-semibold text-gray-900">
                        $
                        {Math.round(
                          results.maintenanceCost /
                            parseInt(formData.maintenanceYears)
                        ).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600">
                        ROI ({formData.maintenanceYears} years)
                      </span>
                      <span className="font-semibold text-green-600">
                        {results.roi}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-600">Payback Period</span>
                      <span className="font-semibold text-blue-600">
                        {results.paybackPeriod} years
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300">
                    Get Detailed Proposal
                  </button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-12 h-12 text-purple-500" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    No Estimate Yet
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Fill out the form on the left and your instant cost estimate
                    will magically appear here ✨
                  </p>
                  <button
                    onClick={scrollToCalculator}
                    className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    <span>Start by selecting your project details</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <ToolFAQs />
    </>
  );
};

export default RoiCalculator;
