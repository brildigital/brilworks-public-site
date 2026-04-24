"use client";
import React, { useState, useEffect } from "react";
import {
  Calculator,
  Smartphone,
  MapPin,
  CreditCard,
  Users,
  Clock,
  Shield,
  Zap,
  DollarSign,
  Globe,
  Code,
} from "lucide-react";
import ToolFAQs from "./ToolFAQs";

const AppLikeUberCostCalculator = () => {
  const [costFactors, setCostFactors] = useState({
    complexity: "standard",
    platforms: "both",
    features: ["gps", "payments", "tracking"],
    design: "standard",
    backend: "standard",
    regions: "single",
  });

  const [estimatedCost, setEstimatedCost] = useState(0);

  const calculateCost = () => {
    let baseCost = 0;

    // Complexity multiplier
    const complexityMultipliers = {
      basic: 1,
      standard: 1.5,
      premium: 2.5,
    };

    // Platform costs
    const platformCosts = {
      ios: 50000,
      android: 50000,
      both: 85000,
    };

    // Feature costs
    const featureCosts = {
      gps: 15000,
      payments: 25000,
      tracking: 20000,
      chat: 18000,
      ratings: 12000,
      notifications: 10000,
      analytics: 15000,
      scheduling: 20000,
    };

    // Design multiplier
    const designMultipliers = {
      basic: 1,
      standard: 1.3,
      premium: 1.8,
    };

    // Backend multiplier
    const backendMultipliers = {
      basic: 1,
      standard: 1.4,
      premium: 2,
    };

    // Region multiplier
    const regionMultipliers = {
      single: 1,
      multiple: 1.6,
      global: 2.2,
    };

    baseCost = platformCosts[costFactors.platforms];

    // Add feature costs
    costFactors.features.forEach((feature) => {
      baseCost += featureCosts[feature] || 0;
    });

    // Apply multipliers
    baseCost *= complexityMultipliers[costFactors.complexity];
    baseCost *= designMultipliers[costFactors.design];
    baseCost *= backendMultipliers[costFactors.backend];
    baseCost *= regionMultipliers[costFactors.regions];

    setEstimatedCost(Math.round(baseCost));
  };

  useEffect(() => {
    calculateCost();
  }, [costFactors]);

  const handleFeatureToggle = (feature) => {
    setCostFactors((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Calculate Your
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Uber-like App
              </span>{" "}
              Cost
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Get instant, accurate cost estimates for your ride-hailing app
              development project. From MVP to enterprise-scale solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#calculator"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Start Calculating
              </a>
              <a
                href="#steps"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Learn How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="steps" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Calculate Your App Cost
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our intelligent algorithm considers multiple factors to provide
              you with the most accurate cost estimate
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "Choose Complexity",
                desc: "Select from Basic, Standard, or Premium app complexity levels",
              },
              {
                icon: Smartphone,
                title: "Select Platforms",
                desc: "Pick iOS, Android, or both platforms for your app",
              },
              {
                icon: Zap,
                title: "Pick Features",
                desc: "Choose essential features like GPS, payments, and tracking",
              },
              {
                icon: Calculator,
                title: "Get Estimate",
                desc: "Receive instant, detailed cost breakdown for your project",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Essential Features for Your Ride-Hailing App
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the core features that make a successful Uber-like
              application
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "GPS & Navigation",
                desc: "Real-time location tracking and route optimization",
              },
              {
                icon: CreditCard,
                title: "Payment Gateway",
                desc: "Secure payment processing with multiple options",
              },
              {
                icon: Users,
                title: "User Management",
                desc: "Separate interfaces for riders and drivers",
              },
              {
                icon: Clock,
                title: "Real-time Tracking",
                desc: "Live ride tracking and ETA updates",
              },
              {
                icon: Shield,
                title: "Safety Features",
                desc: "Emergency contacts, ride sharing, and verification",
              },
              {
                icon: DollarSign,
                title: "Dynamic Pricing",
                desc: "Surge pricing and fare calculation algorithms",
              },
              {
                icon: Globe,
                title: "Multi-language",
                desc: "Support for multiple languages and regions",
              },
              {
                icon: Zap,
                title: "Push Notifications",
                desc: "Real-time alerts and ride status updates",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:bg-white"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator Section */}
      <section
        id="calculator"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Interactive Cost Calculator
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customize your requirements and get an instant cost estimate
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Configure Your App
              </h3>

              {/* App Complexity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  App Complexity
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["basic", "standard", "premium"].map((level) => (
                    <button
                      key={level}
                      onClick={() =>
                        setCostFactors((prev) => ({
                          ...prev,
                          complexity: level,
                        }))
                      }
                      className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                        costFactors.complexity === level
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-gray-200 hover:border-gray-300 text-gray-700"
                      }`}
                    >
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Platforms */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Target Platforms
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { key: "ios", label: "iOS Only" },
                    { key: "android", label: "Android Only" },
                    { key: "both", label: "Both Platforms" },
                  ].map((platform) => (
                    <button
                      key={platform.key}
                      onClick={() =>
                        setCostFactors((prev) => ({
                          ...prev,
                          platforms: platform.key,
                        }))
                      }
                      className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                        costFactors.platforms === platform.key
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-gray-200 hover:border-gray-300 text-gray-700"
                      }`}
                    >
                      {platform.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Required Features
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { key: "gps", label: "GPS & Maps" },
                    { key: "payments", label: "Payment Gateway" },
                    { key: "tracking", label: "Real-time Tracking" },
                    { key: "chat", label: "In-app Chat" },
                    { key: "ratings", label: "Rating System" },
                    { key: "notifications", label: "Push Notifications" },
                    { key: "analytics", label: "Analytics Dashboard" },
                    { key: "scheduling", label: "Ride Scheduling" },
                  ].map((feature) => (
                    <label
                      key={feature.key}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={costFactors.features.includes(feature.key)}
                        onChange={() => handleFeatureToggle(feature.key)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">
                        {feature.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Design Complexity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Design Complexity
                </label>
                <select
                  value={costFactors.design}
                  onChange={(e) =>
                    setCostFactors((prev) => ({
                      ...prev,
                      design: e.target.value,
                    }))
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="basic">Basic Design</option>
                  <option value="standard">Standard Design</option>
                  <option value="premium">Premium Design</option>
                </select>
              </div>

              {/* Backend */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Backend Requirements
                </label>
                <select
                  value={costFactors.backend}
                  onChange={(e) =>
                    setCostFactors((prev) => ({
                      ...prev,
                      backend: e.target.value,
                    }))
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="basic">Basic Backend</option>
                  <option value="standard">Standard Backend</option>
                  <option value="premium">Enterprise Backend</option>
                </select>
              </div>

              {/* Geographic Scope */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Geographic Scope
                </label>
                <select
                  value={costFactors.regions}
                  onChange={(e) =>
                    setCostFactors((prev) => ({
                      ...prev,
                      regions: e.target.value,
                    }))
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="single">Single City/Region</option>
                  <option value="multiple">Multiple Cities</option>
                  <option value="global">Global Scale</option>
                </select>
              </div>
            </div>

            {/* Cost Display */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Cost Estimate
              </h3>

              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  ${estimatedCost.toLocaleString()}
                </div>
                <p className="text-gray-600">Estimated Development Cost</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Complexity Level:</span>
                  <span className="font-medium text-gray-900 capitalize">
                    {costFactors.complexity}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Platforms:</span>
                  <span className="font-medium text-gray-900 capitalize">
                    {costFactors.platforms === "both"
                      ? "iOS & Android"
                      : costFactors.platforms}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Features Count:</span>
                  <span className="font-medium text-gray-900">
                    {costFactors.features.length} selected
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Timeline:</span>
                  <span className="font-medium text-gray-900">
                    {costFactors.complexity === "basic"
                      ? "6-9"
                      : costFactors.complexity === "standard"
                      ? "9-12"
                      : "12-18"}{" "}
                    months
                  </span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> This estimate includes development,
                  testing, and basic deployment. Additional costs may include
                  ongoing maintenance, marketing, and third-party services.
                </p>
              </div>

              <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Detailed Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ToolFAQs />
    </div>
  );
};

export default AppLikeUberCostCalculator;
