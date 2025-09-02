import { Check, Sparkles, Rocket, Crown } from "lucide-react";
import ButtonV2 from "../Common/ButtonV2";

export function Pricing() {
  const plans = [
    {
      name: "Validation",
      price: "FREE",
      period: "",
      description: "Perfect for validating your idea before building",
      icon: Sparkles,
      gradient: "from-cyber-blue/30 to-cyber-purple/30",
      popular: false,
      features: [
        "1-hour expert consultation",
        "Idea validation & feedback",
        "Technical feasibility review",
        "Custom MVP roadmap",
        "Market research insights",
        "Competitive analysis",
      ],
      buttonText: "Get Free Consultation",
      buttonStyle: "!bg-gradient-to-l from-cyber-purple to-cyber-pink",
    },
    {
      name: "MVP Sprint",
      price: "$4,999",
      period: "/project",
      description: "Turn your validated idea into a working MVP",
      icon: Rocket,
      gradient: "from-cyber-orange/30 to-cyber-blue/30",
      popular: true,
      features: [
        "5-7 day MVP delivery",
        "Core feature development",
        "Modern UI/UX design",
        "Database setup",
        "Basic integrations",
        "User authentication",
        "Admin dashboard",
        "Mobile responsive",
        "Source code included",
      ],
      buttonText: "Start MVP Build",
      buttonStyle: "!bg-gradient-to-r from-cyber-orange to-cyber-red",
    },
    {
      name: "Production",
      price: "$12,999",
      period: "/month",
      description: "Scale your MVP to production with ongoing support",
      icon: Crown,
      gradient: "from-cyber-purple/30 to-cyber-orange/30",
      popular: false,
      features: [
        "Everything in MVP Sprint",
        "Advanced features & integrations",
        "Performance optimization",
        "Security implementation",
        "CI/CD deployment pipeline",
        "24/7 monitoring",
        "White-glove support",
        "Monthly feature updates",
        "Dedicated account manager",
      ],
      buttonText: "Scale to Production",
      buttonStyle: "!bg-gradient-to-r from-cyber-purple to-cyber-pink",
    },
  ];

  return (
    <section className="py-20 relative">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-16 w-36 h-36 transform rotate-45 float-animation">
          <div className="w-full h-full bg-gradient-to-br from-cyber-blue/8 to-cyber-purple/8 rounded-3xl backdrop-blur-sm border border-cyber-blue/15"></div>
        </div>
        <div className="absolute bottom-20 right-20 w-28 h-28 transform -rotate-30 float-animation">
          <div className="w-full h-full bg-gradient-to-br from-cyber-orange/8 to-cyber-blue/8 rounded-full backdrop-blur-sm border border-cyber-orange/15"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Choose Your <span className="hologram-text">Journey</span>
          </h2>
          <p className="text-xl text-cyber-gray max-w-3xl mx-auto">
            From free validation to production-ready applications. Start small,
            scale when ready.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-morphism rounded-3xl p-8 border-2 card-3d relative overflow-hidden flex flex-col ${
                plan.popular
                  ? "border-cyber-orange/50 transform scale-105"
                  : "border-cyber-blue/20 hover:border-cyber-blue/40"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-[19px] right-0 transform -translate-y-1/2">
                  <div className="bg-gradient-to-r from-cyber-orange to-cyber-red px-4 py-2 rounded-full rounded-br-none text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div
                  className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${plan.gradient} rounded-3xl flex items-center justify-center backdrop-blur-lg shadow-2xl`}
                >
                  <plan.icon className="h-10 w-10 text-cyber-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-cyber-gray">{plan.period}</span>
                  )}
                </div>
                <p className="text-cyber-gray">{plan.description}</p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-5 h-5 bg-cyber-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-cyber-blue" />
                    </div>
                    <span className="text-cyber-gray text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button → sticks to bottom */}
              <div className="mt-auto">
                <ButtonV2
                  size="lg"
                  icon={<plan.icon className="mr-2 h-5 w-5" />}
                  label={plan.buttonText}
                  className={`w-full ${plan.buttonStyle} !border-0 flex items-center justify-center px-[30px] py-3 font-semibold rounded-md hover:shadow-2xl transition-all transform hover:scale-105`}
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-cyber-blue/30 rounded-full opacity-60"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-cyber-orange/30 rounded-full opacity-40"></div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-16">
          <div className="glass-morphism rounded-2xl p-8 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-4">
              Not sure which plan is right for you?
            </h4>
            <p className="text-cyber-gray mb-6">
              Start with our free validation call. We'll help you understand
              exactly what you need and create a custom plan.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-cyber-gray">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-cyber-blue" />
                <span>No long-term contracts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-cyber-blue" />
                <span>100% satisfaction guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-cyber-blue" />
                <span>Source code ownership</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
